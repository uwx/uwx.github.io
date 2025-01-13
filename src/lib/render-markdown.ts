import remarkHtml from 'remark-html';
import remarkParse from 'remark-parse';
import { createResource, createSignal, type Accessor, type JSX, type Signal } from 'solid-js';
import { unified } from 'unified';
import remarkRehype from 'remark-rehype';
import rehypeExpressiveCode, { type RehypeExpressiveCodeOptions } from 'rehype-expressive-code';
import rehypeSanitize from 'rehype-sanitize';
import rehypeStringify from 'rehype-stringify';
import rehypeTwemojify from 'rehype-twemojify';

export async function renderMarkdown(content: string) {
    const vfile = await unified()
        .use(remarkParse)
        .use(remarkHtml)
        .process(content);
    return String(vfile);
}

export async function renderMarkdownFancy(markdown: string) {
    const vfile = await unified()
        .use(remarkParse)
        .use(remarkRehype)
        .use(rehypeSanitize)
        .use(rehypeExpressiveCode, {
        } satisfies RehypeExpressiveCodeOptions)
        // @ts-expect-error
        .use(rehypeTwemojify, {
            params: { w: 32, q: 100 },
            twemoji: {
                baseUrl: 'https://uwx.github.io/fluentui-twemoji-3d/export/3D_png',
            },
            exclude: ['©', '®', '™', '℗', '↩'],
        })
        .use(rehypeStringify)
        .process(markdown);

    return String(vfile);
}