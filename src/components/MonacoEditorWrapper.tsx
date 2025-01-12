import { createSignal } from 'solid-js';
import { MonacoEditor } from '../extern/solid-monaco/src/MonacoEditor';
import type * as monaco from 'monaco-editor';
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

export function MonacoEditorWrapper() {
    const [value, setValue] = createSignal('');

    const handleMount = (monaco: monaco, editor: monaco.editor.IStandaloneCodeEditor) => {
        monaco.editor.setTheme('vs-dark');
    };
    return <div>
        <div class="pico" style={`
            display: grid;
            grid-template-columns: repeat(5, 1fr);
            grid-template-rows: 1fr;
            grid-column-gap: 1rem;
            grid-row-gap: 0px;
            margin: 1rem 1rem 0 1rem;
        `}>
            <div style="grid-area: 1 / 1 / 2 / 5;">
                <input type="text" placeholder="Post title" />
            </div>
            <div style="grid-area: 1 / 5 / 2 / 6;">
                <button type="submit">Publish</button>
            </div>
        </div>
        <MonacoEditor
            options={MONACO_EDITOR_OPTIONS}
            language='markdown'
            theme='vs-dark'
            value=''
            height="calc(100vh - 115.5px - 86.6px)"
            onChange={value => {
                setValue(value);
            }}
            onMount={handleMount}
        />
    </div>;
}