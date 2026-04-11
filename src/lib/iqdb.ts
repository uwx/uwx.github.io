import Bottleneck from "bottleneck";
import { IQDB_CLIENT_ID, IQDB_CLIENT_SECRET } from 'astro:env/server';
import { KVS } from "sqlite-kvs-ts";

// https://github.com/hughbe/levenshtein-sort/blob/master/src/lib/index.js
function levenshtein<T>(a: T[] | string, b: T[] | string): number {
    let tmp: T[] | string | number;
    if (a.length === 0) {
        return b.length;
    }
    if (b.length === 0) {
        return a.length;
    }
    if (a.length > b.length) {
        tmp = a;
        a = b;
        b = tmp;
    }

    let i: number;
    let j: number;
    let res: T[] | string | number;
    const alen = a.length;
    const blen = b.length;
    const row = new Array(alen);
    for (i = 0; i <= alen; i++) {
        row[i] = i;
    }

    for (i = 1; i <= blen; i++) {
        res = i;
        for (j = 1; j <= alen; j++) {
            tmp = row[j - 1];
            row[j - 1] = res;
            res = b[i - 1] === a[j - 1] ? tmp : Math.min(+tmp + 1, Math.min(+res + 1, row[j] + 1));
        }
    }
    return res! as number;
}

const exceptions: Record<string, string> = {
    Hades: 'https://www.igdb.com/games/hades--1',
};

function currentTimeSeconds() {
    return Math.floor(Date.now() / 1000);
}

let keyExpiresOn: number;
let currentAccessToken: string;
async function authorize() {
    if (keyExpiresOn !== undefined && currentTimeSeconds() < keyExpiresOn) {
        return currentAccessToken;
    }

    const requestStartTime = currentTimeSeconds();
    const { access_token, expires_in, token_type }: { access_token: string; expires_in: number; token_type: string } =
        await fetch(
            `https://id.twitch.tv/oauth2/token?client_id=${IQDB_CLIENT_ID}&client_secret=${IQDB_CLIENT_SECRET}&grant_type=client_credentials`,
            { method: 'POST' },
        ).then((e) => e.json());

    keyExpiresOn = requestStartTime + expires_in;
    currentAccessToken = access_token;

    return currentAccessToken;
}

const ratelimiter = new Bottleneck({
    maxConcurrent: 8,
    minTime: 250,
});
const ratelimitedFetch: typeof fetch = ratelimiter.wrap(fetch);
async function igdbFetch(path: string, body: BodyInit | null, args: Partial<RequestInit> = {}) {
    const accessToken = await authorize();

    args = Object.assign(
        {
            method: 'POST',
            body,
            headers: {
                'Content-Type': 'text/plain',
                'Client-ID': IQDB_CLIENT_ID,
                Authorization: `Bearer ${accessToken}`,
            },
        } satisfies RequestInit,
        args,
    );

    return await ratelimitedFetch(`https://api.igdb.com/v4/${path}`, args);
}

interface GameResult {
    id: number;
    url: string;
    name: string;
    cover: number;
}

interface CoverResult {
    id: number;
    game: string;
    image_id: string;
}

const coverCache = new KVS<string, string | undefined>('./kvs.db');

async function getBestCoverIdInternal(game: string): Promise<string | undefined> {
    const existing = coverCache.get(game);
    if (existing) {
        return existing;
    }

    let searchResults = (
        await igdbFetch('games', `fields cover,url,name; search ${JSON.stringify(game)}; limit 50;`)
            .then((e) => e.json()) as Array<GameResult>
    );
    searchResults = searchResults.filter((e) => e.cover); // strip results without cover art (if that's even possible)

    const searchResultCompare = (a: GameResult, b: GameResult) => {
        // Sort by name similarity
        let res = levenshtein(game, a.name) - levenshtein(game, b.name);
        if (res !== 0) return res;

        // Sort by shortest URL length (for duplicate entries)
        res = a.url.length - b.url.length;
        if (res !== 0) return res;

        // Sort by smallest ID (for duplicate entries)
        return a.id - b.id;
    };

    searchResults.sort(searchResultCompare);

    if (searchResults.length === 0) {
        console.error(`No results for: ${game}`);
        coverCache.set(game, undefined);
    
        return;
    }

    console.log('Best match:', searchResults[0]);
    console.log('Wort match:', searchResults[searchResults.length - 1]);
    console.log('Looking up:', searchResults.map((e) => e.cover).join(','));

    const covers = await igdbFetch(
        'covers',
        `where id = (${searchResults.map((e) => e.cover).join(',')}); fields game,image_id; limit 50;`,
    ).then((e) => e.json()) as CoverResult[];

    let bestCoverId: string | undefined = undefined;

    for (const result of searchResults) {
        if (exceptions[result.name] && result.url !== exceptions[result.name]) {
            continue;
        }

        const relevantCover = covers.find((cover) => cover.id === result.cover);
        if (relevantCover) {
            bestCoverId = relevantCover.image_id;
            break;
        }
    }

    coverCache.set(game, bestCoverId);

    return bestCoverId;
}

// only look up once per game
const lookups: Record<string, Promise<string | undefined>> = {};
export async function getBestCoverId(game: string): Promise<string | undefined> {
    return lookups[game] ??= getBestCoverIdInternal(game);
}