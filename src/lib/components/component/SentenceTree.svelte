<script lang="ts">
  import { onMount } from 'svelte';
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

  /** Mermaid classDef uses commas as delimiters — rgba()/rgb() strings break parsing; use hex. */
  function rgbOrRgbaToHex(css: string): string {
    const m = css.match(/rgba?\(\s*([\d.]+)\s*,\s*([\d.]+)\s*,\s*([\d.]+)(?:\s*,\s*([\d.]+))?\s*\)/);
    if (!m) {
      if (/^#([0-9a-f]{3}|[0-9a-f]{6}|[0-9a-f]{8})$/i.test(css.trim())) return css.trim();
      return '#cccccc';
    }
    const r = Math.min(255, Math.round(Number(m[1])));
    const g = Math.min(255, Math.round(Number(m[2])));
    const b = Math.min(255, Math.round(Number(m[3])));
    const a = m[4] !== undefined ? Math.min(1, Math.max(0, Number(m[4]))) : 1;
    const hex = (n: number) => n.toString(16).padStart(2, '0');
    const rgb = `#${hex(r)}${hex(g)}${hex(b)}`;
    if (a >= 1 - 1e-6) return rgb;
    return `${rgb}${hex(Math.round(a * 255))}`;
  }

  function resolveCssColorToHex(value: string, mode: 'color' | 'background'): string {
    if (typeof document === 'undefined') return '#cccccc';
    const v = value.trim();
    if (!v) return '#cccccc';
    if (/^#([0-9a-f]{3}|[0-9a-f]{6}|[0-9a-f]{8})$/i.test(v)) return v;
    const el = document.createElement('div');
    el.style.cssText = 'position:absolute;left:-9999px;visibility:hidden;pointer-events:none';
    if (mode === 'background') el.style.backgroundColor = v;
    else el.style.color = v;
    document.documentElement.appendChild(el);
    const resolved =
      mode === 'background' ? getComputedStyle(el).backgroundColor : getComputedStyle(el).color;
    document.documentElement.removeChild(el);
    return rgbOrRgbaToHex(resolved);
  }

  export function appendStyles(markdown: string): string {
    if (typeof document === 'undefined') {
      return markdown;
    }
    const style = getComputedStyle(document.documentElement);
    const textColor = resolveCssColorToHex(style.getPropertyValue('--text-color').trim() || '#333', 'color');
    const backgroundColor = resolveCssColorToHex(style.getPropertyValue('--box-background').trim() || '#f9f9f9', 'background');
    const leafColor = resolveCssColorToHex(style.getPropertyValue('--leaf').trim() || '#333', 'color');
    const accentRaw = style.getPropertyValue('--accent-color').trim();
    const accentColor = resolveCssColorToHex(accentRaw || style.getPropertyValue('--branch-light').trim() || '#8C6239', 'color');
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
