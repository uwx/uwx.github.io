import { StatefulSolidOAuthClient } from "kitty-agent/oauth-solidjs";
import { BlogClient } from "./client";
import { createEffect, createMemo, createSignal, on, type Accessor } from "solid-js";

import { VITE_OAUTH_CLIENT_ID, VITE_OAUTH_REDIRECT_URI, VITE_OAUTH_SCOPE } from "astro:env/client";

export const oauthClient = new StatefulSolidOAuthClient<BlogClient>(
    {
        clientId: VITE_OAUTH_CLIENT_ID,
        redirectUri: VITE_OAUTH_REDIRECT_URI,
        scope: VITE_OAUTH_SCOPE,
    },
    { createEffect, createMemo, createSignal, on },
    (loginState) => new BlogClient(loginState),
);

export const user = oauthClient.user;
export const savedHandle = oauthClient.handle;