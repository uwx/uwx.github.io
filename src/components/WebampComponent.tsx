import type WebampConstructor from "webamp";
import { createSignal, onCleanup, onMount } from "solid-js";
import './WebampComponent.scss';

declare global {
    class Webamp extends WebampConstructor {}
}

export type WebampOptions = ConstructorParameters<typeof WebampConstructor>[0];

export default function WebampComponent(props: WebampOptions) {
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
