import { Sandpack } from '@codesandbox/sandpack-react';
import { cobalt2 } from '@codesandbox/sandpack-themes';
import {
  flowLayoutFiles,
  positionedLayoutFiles,
  zIndexFiles,
  flexboxZIndexFiles,
  AftonbladetFiles,
  stackingContextFiles,
  stackingContextVinkFiles,
} from './files';
import { sandpackNarrowOptions, sandpackWideOptions } from './sandpack-config';

function App() {
  return (
    <main>
      <header>
        <h1>Stacking context</h1>
      </header>

      <h2>Flow layout</h2>
      <Sandpack
        template="react"
        options={sandpackNarrowOptions}
        theme={cobalt2}
        files={flowLayoutFiles}
      />

      <h2>Positioned layout</h2>
      <Sandpack
        template="react"
        options={sandpackNarrowOptions}
        theme={cobalt2}
        files={positionedLayoutFiles}
      />

      <h2>z-index</h2>
      <Sandpack
        template="react"
        options={sandpackNarrowOptions}
        theme={cobalt2}
        files={zIndexFiles}
      />

      <h2>Flexbox z-index</h2>
      <Sandpack
        template="react"
        options={sandpackNarrowOptions}
        theme={cobalt2}
        files={flexboxZIndexFiles}
      />

      <h2>Stacking context - modal</h2>
      <Sandpack
        template="react"
        options={sandpackWideOptions}
        theme={cobalt2}
        files={AftonbladetFiles}
      />

      <h2>Stacking context - cards</h2>
      <Sandpack
        template="react"
        options={sandpackWideOptions}
        theme={cobalt2}
        files={stackingContextFiles}
      />

      <h2>Stacking context - Vink</h2>
      <Sandpack
        template="react"
        options={sandpackWideOptions}
        theme={cobalt2}
        files={stackingContextVinkFiles}
      />
    </main>
  );
}

export default App;
