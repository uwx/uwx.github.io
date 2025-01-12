import type { ComWhtwndBlogEntry } from "@atcute/client/lexicons";
import { oauthClient, user } from "../lib/atproto/signed-in-user";
import { createSignal } from "solid-js";

export default function PostControls(props: { rkey: string, post: ComWhtwndBlogEntry.Record }) {
    const [hasInitialSession, setHasInitialSession] = createSignal(false);

    oauthClient.waitForInitialSession()
        .then(() => setHasInitialSession(true));

    async function hidePost(event: Event) {
        event.preventDefault();

        const auser = user();
        if (!auser) return;

        await auser.client.setVisibility(props.rkey, props.post, 'author');
        document.location.reload();
    }

    async function showPost(event: Event) {
        event.preventDefault();
        
        const auser = user();
        if (!auser) return;

        await auser.client.setVisibility(props.rkey, props.post, 'url');
        document.location.reload();
    }

    async function deletePost(event: Event) {
        event.preventDefault();
        
        const auser = user();
        if (!auser) return;

        await auser.client.deletePost(props.rkey);
        document.location.reload();
    }
    
    return <>
        {hasInitialSession() && <>
            {/* biome-ignore lint/a11y/useValidAnchor: shush!! */}
            {' | '}{props.post.visibility === 'author' ? <a href="#hide" onClick={showPost}>Make Public</a> : <a href="#hide" onClick={hidePost}>Make Private</a>}
            {/* biome-ignore lint/a11y/useValidAnchor: shush!! */}
            {' | '}<a href="#delete" onClick={deletePost}>Delete</a>
        </>}
    </>;
}