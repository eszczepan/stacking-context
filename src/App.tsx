import { Sandpack } from '@codesandbox/sandpack-react';
import { cobalt2 } from '@codesandbox/sandpack-themes';
import {
  flowLayoutFiles,
  positionedLayoutFiles,
  zIndexFiles,
  flexboxZIndexFiles,
  stackingContextFiles,
} from './files';

const sandpackOptions = {
  showLineNumbers: false, // default - true
  showInlineErrors: true, // default - false
  wrapContent: true, // default - false
  editorHeight: 500, // default - 300
  editorWidthPercentage: 65, // default - 50
};

const sandpackVinkOptions = {
  showLineNumbers: false, // default - true
  showInlineErrors: true, // default - false
  wrapContent: true, // default - false
  editorHeight: 500, // default - 300
  editorWidthPercentage: 40, // default - 50
};

function App() {
  return (
    <main>
      <header>
        <h1>Stacking context</h1>
      </header>

      <h2>Flow layout</h2>
      <Sandpack
        template="react"
        options={sandpackOptions}
        theme={cobalt2}
        files={flowLayoutFiles}
      />

      <h2>Positioned layout</h2>
      <Sandpack
        template="react"
        options={sandpackOptions}
        theme={cobalt2}
        files={positionedLayoutFiles}
      />

      <h2>z-index</h2>
      <Sandpack
        template="react"
        options={sandpackOptions}
        theme={cobalt2}
        files={zIndexFiles}
      />

      <h2>Flexbox z-index</h2>
      <Sandpack
        template="react"
        options={sandpackOptions}
        theme={cobalt2}
        files={flexboxZIndexFiles}
      />

      <h2>Stacking context</h2>
      <Sandpack
        template="react"
        options={sandpackVinkOptions}
        theme={cobalt2}
        files={stackingContextFiles}
      />
    </main>
  );
}

export default App;
