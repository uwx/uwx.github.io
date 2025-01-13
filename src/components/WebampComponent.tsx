import type WebampConstructor from "webamp";
import { TWiCPlaylist } from "../lib/twic-playlist";
import { createSignal, onCleanup, onMount } from "solid-js";
import './WebampComponent.scss';

declare global {
    class Webamp extends WebampConstructor {}
}

export type WebampOptions = ConstructorParameters<typeof WebampConstructor>[0];

export default function WebampComponent(props: WebampOptions) {
    props = Object.assign(
        {
            initialTracks: TWiCPlaylist.map((item) => ({
                metaData: {
                    title: item.title,
                    artist: "Dj CUTMAN",
                },
                url: item.url,
                duration: item.duration,
            })),
            initialSkin: {
                url: "https://r2.webampskins.org/skins/d6010aa35bed659bc1311820daa4b341.wsz",
            },
            availableSkins: [
                {
                    name: "Bento Classified",
                    url: "https://r2.webampskins.org/skins/d6010aa35bed659bc1311820daa4b341.wsz", // https://skins.webamp.org/skin/d6010aa35bed659bc1311820daa4b341/Bento_Classified.wsz/
                },
                {
                    name: "Lain Amp",
                    url: "https://r2.webampskins.org/skins/007a6e97e91d44381dcf13d14c55dfd3.wsz", // https://skins.webamp.org/skin/007a6e97e91d44381dcf13d14c55dfd3/LainAMP2.zip/
                },
            ],
        } satisfies WebampOptions,
        props
    );
    
    const [webamp, setWebamp] = createSignal<Webamp>();
    let webampElement: HTMLElement;

    onMount(async () => {
        console.log('mounted');
        window.global = globalThis;
        const { default: WebampConstructor } = await import('webamp');

        setWebamp(new WebampConstructor(props));

        webamp()!.renderWhenReady(webampElement);
    });
    onCleanup(() => {
        webamp()?.dispose();
    });

    return <div id="webamp" ref={el => webampElement = el} />;
}
