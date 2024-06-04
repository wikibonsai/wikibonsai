<script lang='ts'>
  import type { PageData } from './$types'
  import { page } from '$app/stores';
  import { ROUTE_ROOT, ROUTE_TREE, URL_GERMINATOR } from '$lib/util/const';
  import { goTo } from '$lib/util/func';
  import { resultMkmp } from '$lib/util/store';
  import HamburgerMenu from '$lib/components/component/HamburgerMenu.svelte';
  import MarkMap from '$lib/components/component/MarkMap.svelte';
  import Theme from '$lib/components/element/Theme.svelte';

  export let data: PageData;
</script>

<div class="main">
  <div class="overlay">
    <div class="ctrl-panel">
      <HamburgerMenu tree={data.tree}></HamburgerMenu>
      <button on:click={goTo(($page.url.pathname === ROUTE_TREE) ? ROUTE_ROOT : ROUTE_TREE)}
              class="back-btn img-btn"
              title="Back">
        ←
      </button>
    </div>
    <span class="grow-your-own">
      Grow your own with <a href={URL_GERMINATOR}>The Germinator!</a>
    </span>
    <Theme pin={true}></Theme>
  </div>
  <MarkMap markdown={data.tree.markdown}
         bind:markmap={$resultMkmp}
         height={100}
         width={100}>
  </MarkMap>
</div>

<style>
  .back-btn {
    padding: 0.5rem;
    font-size: 2rem;
  }

  .ctrl-panel {
    display: flex;
    align-items: center;
    justify-content: center;
    /* small */
    max-width: 45vw;
  }

  .grow-your-own {
    color: var(--accent-text-color);
    font-size: 0.75rem;
    align-self: center;
    padding: 0.5rem;
  }

  .main {
    height: 100vh;
    width: 100vw;
    font-family: sans-serif;
  }

  .overlay {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: space-between;
    top: 0;
    left: 0;
    right: 0;
    z-index: 10;
    padding: 1rem;
  }

  @media(min-width: 768px) {
    .ctrl-panel {
      max-width: 20vw;
    }
  }
</style>
