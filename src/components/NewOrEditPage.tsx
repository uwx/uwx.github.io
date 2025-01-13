import { createSignal } from "solid-js";
import { oauthClient, user } from "../lib/atproto/signed-in-user";
import MonacoEditorWrapper from "./MonacoEditorWrapper";
import type { ComWhtwndBlogEntry } from "@atcute/client/lexicons";
import { HANDLE } from "../lib/atproto/unauthed-client";

export default function NewOrEditPage(params: { rkey?: string, post?: ComWhtwndBlogEntry.Record }) {
    const [value, setValue] = createSignal(params.post?.content ?? '');
    const [title, setTitle] = createSignal(params.post?.title ?? '');

    oauthClient.waitForInitialSession();

    async function signIn() {
        if (!user()) {
            await oauthClient.waitForInitialSession();
        }

        if (!user()) {
            await oauthClient.authenticateIfNecessary(HANDLE, false);
        }
    }

    async function submit(visibility: "public" | "url" | "author") {
        const auser = user();

        if (!auser) return;

        if (params.rkey) {
            await auser.client.updatePost(title(), value(), visibility, params.rkey, params.post ?? {$type: 'com.whtwnd.blog.entry', content: ''});
            document.location.pathname = `/post/${params.rkey}`;
        } else {
            const rkey = await auser.client.createPost(title(), value(), visibility);
            document.location.pathname = `/post/${rkey}`;
        }
    }

    console.log(user());
    return <>
        {user()
            ? <div>
                <div class="pico" style={`
                    display: grid;
                    grid-template-columns: repeat(10, 1fr);
                    grid-template-rows: 1fr;
                    grid-column-gap: 1rem;
                    grid-row-gap: 0px;

                    margin: 1rem 1rem 0 1rem;
                `}>
                    <div style="grid-area: 1 / 1 / 2 / 8;">
                        <input type="text" placeholder="Post title" value={title()} onInput={el => setTitle(el.currentTarget.value)} />
                    </div>
                    <div style="grid-area: 1 / 8 / 2 / 9;">
                        <button type="submit" onClick={() => submit('url')}>Publish</button>
                    </div>
                    <div style="grid-area: 1 / 9 / 2 / 11;">
                        <button type="submit" onClick={() => submit('author')}>Publish Unlisted</button>
                    </div>
                </div>

                <MonacoEditorWrapper value={value()} onValueChanged={newValue => setValue(newValue)} />
            </div>
            : <div class="pico container">
                <h1>Blog editor: Sign in</h1>
                <button type="button" onClick={signIn}>Sign in</button>
            </div>}
    </>
}