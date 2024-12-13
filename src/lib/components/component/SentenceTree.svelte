<script lang="ts">
  import { onMount, onDestroy } from 'svelte';
  import mermaid from 'mermaid';
  import { theme } from '$lib/util/store';
  import { DEMO_MERMD } from '$lib/util/const';


  export let markdown: string = '';
  export let height: number = 100;
  export let width: number = 100;

  let container: HTMLDivElement;
  let currentMarkdown: string = '';

  // on theme or markdown changes
  $: if (($theme || markdown) && (markdown.length > 0) && container) {
    render();
  }

  export function appendStyles(markdown: string): string {
  if (typeof document === 'undefined') {
    return markdown;
  }
  const root = document.documentElement;
  const style = getComputedStyle(root);
  const textColor = style.getPropertyValue('--text-color').trim() || '#333';
  const backgroundColor = style.getPropertyValue('--box-background').trim() || '#f9f9f9';
  const leafColor = style.getPropertyValue('--leaf').trim() || '#333';
  const accentColor = style.getPropertyValue('--accent-color').trim() || '#8C6239';
  // Add class definitions to the markdown
  return markdown + `

  linkStyle default interpolate basis stroke:${textColor},stroke-width:2px;
  classDef transparent fill:none,stroke:none;
  classDef default fill:${backgroundColor},stroke:${textColor},stroke-width:2px,color:${textColor};
  classDef phrase fill:${backgroundColor},stroke:${accentColor},stroke-width:2px,color:${textColor};
  classDef word fill:${backgroundColor},stroke:${leafColor},stroke-width:2px,color:${textColor};`;
}

  onMount(async () => {
    // Give the DOM a moment to settle
    setTimeout(() => {
      render();
    }, 100);
  });

  function clear() {
    while (container && container.firstChild) {
      container.removeChild(container.firstChild);
    }
  }

  async function render() {
    try {
      clear();
      await mermaid.initialize({
        startOnLoad: false,
        theme: 'default',
        // themeVariables: {
        //   background: 'transparent'
        // },
        flowchart: {
          htmlLabels: true,
          curve: 'basis',
          nodeSpacing: 50,
          rankSpacing: 50,
        },
        securityLevel: 'loose'
      });
      // Create a single mermaid div with a unique ID
      const mermaidDiv = document.createElement('div');
      mermaidDiv.className = 'mermaid';
      mermaidDiv.id = 'mermaid-diagram';
      mermaidDiv.textContent = appendStyles(DEMO_MERMD);
      container.appendChild(mermaidDiv);
      // Run mermaid only on our specific div
      await mermaid.run({ querySelector: '#mermaid-diagram' });
    } catch (error) {
      console.error('Error rendering sentence tree:', error);
    }
  }
</script>

<div bind:this={container}
     class="sentence-tree-container"
     style={`height: ${height}vh; width: ${width}vw;`} />

<style>
  .sentence-tree-container {
    border-radius: 0.5rem;
    padding: 1rem;
    margin: 1rem;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
  }

  /* Make SVG fill the container */
  :global(.sentence-tree-container svg) {
    width: 100% !important;
    height: 100% !important;
  }

  :global(.mermaid) {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  :global(.error) {
    color: red;
    padding: 1rem;
    text-align: center;
  }
</style>
