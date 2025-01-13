import rss, { type rssSchema } from '@astrojs/rss';
import type { z } from 'astro/zod';
import { getPosts } from '../lib/atproto/unauthed-client';
import type { APIRoute } from 'astro';
import { renderMarkdown } from '../lib/render-markdown';

type ValidatedRSSFeedItem = z.infer<typeof rssSchema>;

export const GET: APIRoute = async (context) => {
    const feedItems: ValidatedRSSFeedItem[] = [];

    for (const { uri: { rkey }, value: post } of await getPosts()) {
        feedItems.push({
            title: post.title,
            content: await renderMarkdown(post.content),
            link: new URL(`/post/${rkey}`, context.site).toString(),
            author: 'uwx',
        });
    }

    return rss({
        title: `Maxine's Blog`,
        description: `Posts from Maxine's webzone`,
        site: context.site!,
        items:feedItems,
        customData: '<language>en-us</language>',
    });
}