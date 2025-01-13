import { marked } from 'marked';

export async function renderMarkdown(content: string) {
    content = await marked.parse(content);
    return content;
}