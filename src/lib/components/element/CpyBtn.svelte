<script lang='ts'>
  import { isMarkdown, theme } from '$lib/util/store';

  export let markdown: string = '';
  export let svg: SVGElement | null = null;
  let isCopied: boolean = false;

  $: copyIcon           = isCopied
                          ? '/img/icons/icons8-check-30.png'
                          : `/img/icons/icons8-copy-30-${$theme}.png`;

  function copied(): void {
    isCopied = true;
    setTimeout(function() {
      isCopied = false;
    }, 2000);
  }

  function copy(): void {
    if ($isMarkdown) {
      copyMkdnToClipBoard(markdown);
    } else {
      const width = 800;
      const height = 800;
      if (svg !== null) {
        svgToPngAndCopyToClipboard(svg, width, height);
      }
    }
  }

  async function svgToPngAndCopyToClipboard(svgElement: SVGElement, width: number, height: number): void {
    const canvas = document.createElement('canvas');
    canvas.width = width;
    canvas.height = height;
    const ctx = canvas.getContext('2d');
    // Create an image and set the SVG data as the source
    const img = new Image();
    img.src = 'data:image/svg+xml;base64,' + window.btoa(unescape(encodeURIComponent(new XMLSerializer().serializeToString(svgElement))));
      img.onload = () => {
        // Draw the image onto the canvas
        ctx.drawImage(img, 0, 0, width, height);
        // Convert canvas to PNG
        canvas.toBlob(async (blob) => {
          try {
            // Copy the PNG blob to the clipboard
            await navigator.clipboard.write([
              new ClipboardItem({
                'image/png': blob
              })
            ]).then(() => {
              if (blob) {
                console.debug('Semantic tree PNG copied to clipboard');
                copied();
              }
            })
            .catch(err => {
              console.error('Error in copying text: ', err);
            });
          } catch (err) {
            console.error('Could not copy PNG to clipboard', err);
          }
        }, 'image/png');
      };
  }

  function copyMkdnToClipBoard(text: string): void {
    navigator.clipboard.writeText(text)
      .then(() => {
        if (text.length > 0) {
          console.debug('Semantic tree Markdown copied to clipboard');
          copied();
        }
      })
      .catch(err => {
        console.error('Error in copying text: ', err);
      });
  }
</script>

<button id="copyButton"
        class="util-btn"
        title="Copy"
        on:click={copy}>
  <img id="copyIcon" alt="Copy" class="w-6 h-6" src={copyIcon}>
</button>
