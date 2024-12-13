// from:
//  - https://github.com/sveltejs/svelte/issues/3012
//  - https://svelte.dev/repl/0ace7a508bd843b798ae599940a91783?version=3.16.7
export function clickOutside(node: HTMLElement, ignore?: string) {

  const handleClick = (event: Event) => {
    const target = event.target as HTMLElement;
    if (!event.target || ignore && target.closest(ignore)) {
      return;
    }
    if (node && !node.contains(target) && !event.defaultPrevented) {
      node.dispatchEvent(
        new CustomEvent('click_outside')
      );
    }
  }

  document.addEventListener('click', handleClick, true);
  return {
    destroy() {
      document.removeEventListener('click', handleClick, true);
    }
  };
};
