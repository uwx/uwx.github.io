import type { At, ComWhtwndBlogEntry } from "@atcute/client/lexicons";
import { now as tidNow } from "@atcute/tid";
import type { KittyAgent } from "kitty-agent";

export class BlogClient {
    constructor(private readonly loginState: {
        readonly handle: string;
        readonly did: At.DID;
        readonly pds: string;
        readonly agent: KittyAgent;
    }) {}

    get agent(): KittyAgent {
        return this.loginState.agent;
    }

    get user() {
        return this.loginState;
    }

    async updatePost(newTitle: string, newContent: string, newVisibility: "public" | "url" | "author", rkey: string, existing: ComWhtwndBlogEntry.Record) {
        await this.agent.put({
            collection: 'com.whtwnd.blog.entry',
            repo: this.user.did,
            rkey,
            record: {
                ...existing,
                title: newTitle,
                content: newContent,
                visibility: newVisibility,
            }
        });
    }

    async createPost(title: string, content: string, visibility: "public" | "url" | "author") {
        const rkey = tidNow();
        await this.agent.put({
            collection: 'com.whtwnd.blog.entry',
            repo: this.user.did,
            rkey,
            record: {
                $type: 'com.whtwnd.blog.entry',
                content,
                createdAt: new Date().toISOString(),
                title,
                visibility,
            }
        });
        return rkey;
    }

    async setVisibility(rkey: string, post: ComWhtwndBlogEntry.Record, visibility: "public" | "url" | "author") {
        await this.agent.put({
            collection: 'com.whtwnd.blog.entry',
            repo: this.user.did,
            rkey,
            record: {
                ...post,
                visibility,
            }
        });
    }

    async deletePost(rkey: string) {
        await this.agent.delete({
            collection: 'com.whtwnd.blog.entry',
            repo: this.user.did,
            rkey
        });
    }
}