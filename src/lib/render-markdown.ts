import remarkHtml from 'remark-html';
import remarkParse from 'remark-parse';
import { createResource, createSignal, type Accessor, type JSX, type Signal } from 'solid-js';
import { unified } from 'unified';
import remarkRehype from 'remark-rehype';
import rehypeExpressiveCode, { type RehypeExpressiveCodeOptions } from 'rehype-expressive-code';
import rehypeSanitize from 'rehype-sanitize';
import rehypeStringify from 'rehype-stringify';

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
        .use(rehypeStringify)
        .process(markdown);

    return String(vfile);
}