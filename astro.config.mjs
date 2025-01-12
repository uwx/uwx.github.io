// @ts-check
import { defineConfig } from 'astro/config';

import mdx from '@astrojs/mdx';

import solidJs from '@astrojs/solid-js';

import metadata from './public/oauth/client-metadata.json' with { type: 'json' };
import { envField } from "astro/config";

const SERVER_HOST = '127.0.0.1';
const SERVER_PORT = 12522;

const isBuild = process.argv.slice(2).includes('build');

/** @type {Record<string, string>} */
const env = {};

if (isBuild) {
    env.VITE_OAUTH_CLIENT_ID = metadata.client_id;
    env.VITE_OAUTH_REDIRECT_URI = metadata.redirect_uris[0];
} else {
    const redirectUri = (() => {
        const url = new URL(metadata.redirect_uris[0]);
        return `http://${SERVER_HOST}:${SERVER_PORT}${url.pathname}`;
    })();
    
    const clientId = `http://localhost?redirect_uri=${encodeURIComponent(redirectUri)}&scope=${encodeURIComponent(metadata.scope)}`;
    
    env.VITE_DEV_SERVER_PORT = String(SERVER_PORT);
    env.VITE_OAUTH_CLIENT_ID = clientId;
    env.VITE_OAUTH_REDIRECT_URI = redirectUri;
}

env.VITE_CLIENT_URI = metadata.client_uri;
env.VITE_OAUTH_SCOPE = metadata.scope;

// https://astro.build/config
export default defineConfig({
    integrations: [mdx(), solidJs()],
    env: {
        schema: Object.fromEntries(
            Object.entries(env).map(([k, v]) => {
                return [
                    k,
                    envField.string({ context: "client", access: "public", optional: true, default: v }),
                ]
            })
        )
    },
    server: {
        host: SERVER_HOST,
        port: SERVER_PORT,
    }
});