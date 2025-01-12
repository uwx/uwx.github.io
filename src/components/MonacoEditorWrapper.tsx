import { createEffect, createSignal, on } from 'solid-js';
import { MonacoEditor } from '../extern/solid-monaco/src/MonacoEditor';
import type * as monaco from 'monaco-editor';
// biome-ignore lint/suspicious/noRedeclare: intentional
type monaco = typeof monaco;

const MONACO_EDITOR_OPTIONS: monaco.editor.IStandaloneEditorConstructionOptions = {
    automaticLayout: true,
    formatOnType: true,
    formatOnPaste: true,
    fixedOverflowWidgets: true,
    contextmenu: true,
};

const { default: editorWorker } = await import('monaco-editor/esm/vs/editor/editor.worker?worker');
const { default: jsonWorker } = await import('monaco-editor/esm/vs/language/json/json.worker?worker');
const { default: cssWorker } = await import('monaco-editor/esm/vs/language/css/css.worker?worker');
const { default: htmlWorker } = await import('monaco-editor/esm/vs/language/html/html.worker?worker');
const { default: tsWorker } = await import('monaco-editor/esm/vs/language/typescript/ts.worker?worker');

self.MonacoEnvironment = {
    getWorker(_, label) {
        if (label === 'json') {
            return new jsonWorker();
        }
        if (label === 'css' || label === 'scss' || label === 'less') {
            return new cssWorker();
        }
        if (label === 'html' || label === 'handlebars' || label === 'razor') {
            return new htmlWorker();
        }
        if (label === 'typescript' || label === 'javascript') {
            return new tsWorker();
        }
        return new editorWorker();
    }
};

export default function MonacoEditorWrapper(props: { value: string, onValueChanged: (value: string) => void }) {
    const [value, setValue] = createSignal(props.value);

    createEffect(on(value, value => props.onValueChanged(value)));

    const handleMount = (monaco: monaco, editor: monaco.editor.IStandaloneCodeEditor) => {
        monaco.editor.setTheme('vs-dark');
    };
    return <div>
        <MonacoEditor
            options={MONACO_EDITOR_OPTIONS}
            language='markdown'
            theme='vs-dark'
            value={value()}
            height="calc(100vh - 78.37px - 1rem)"
            onChange={value => {
                setValue(value);
            }}
            onMount={handleMount}
        />
    </div>;
}