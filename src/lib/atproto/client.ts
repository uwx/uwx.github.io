import type { At, Records } from '@atcute/client/lexicons';
import '@atcute/whitewind/lexicons';
import type { AtUri } from '@atproto/syntax';
import { KittyAgent } from "kitty-agent";

const PDS = 'https://bsky.social';
const HANDLE = 'spearcat.bsky.social';

const agent = KittyAgent.createUnauthed(PDS);

// let posts: {
//     cid: At.CID;
//     uri: AtUri;
//     value: Records['com.whtwnd.blog.entry'];
// }[] | undefined;
export async function getPosts() {
    return (await agent.paginatedList({
        collection: 'com.whtwnd.blog.entry',
        repo: HANDLE,
    })).records.filter(post => post.value.visibility === 'url' || post.value.visibility === 'public');
}

export async function getPost(rkey: string) {
    return getPosts().then(posts => posts.find(post => post.uri.rkey === rkey));
}