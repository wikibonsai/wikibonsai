<script lang='ts'>
  import { onMount } from 'svelte';
  import {
    ROUTE_CONSULT,
    ROUTE_TREE,
    URL_GERMINATOR,
    URL_SOCIAL_GITHUB,
    URL_VSCODE_PLUGIN,
  } from '$lib/util/const';
  import { clickOutside } from '$lib/util/func';
  import Logo from '$lib/components/element/Logo.svelte';
  import Theme from '$lib/components/element/Theme.svelte';

  let isMenuOpen: boolean = false;
  let screensize: string = 'small';

  onMount(() => {
    updateScreenSize();
  });

  function handleClickOutside(event: MouseEvent): void {
    const navElement = document.querySelector('.nav');
    const hamburgerButton = document.querySelector('.hamburger');
    if (navElement && !navElement.contains(event.target)
      && hamburgerButton && !hamburgerButton.contains(event.target)
      && isMenuOpen
    ) {
      toggleMenu();
    }
  }

  function toggleMenu(): void {
    isMenuOpen = !isMenuOpen;
  }

  function updateScreenSize(): void {
    screensize = (window.innerWidth >= 768)
      ? 'large'
      : 'small';
  }
</script>

<svelte:window on:resize={updateScreenSize} />

<header class="header">
  <Logo size={'small'} wTxt={true}></Logo>
  <div class="nav-container" use:clickOutside on:click_outside={handleClickOutside}>
    <button class="hamburger" on:click={toggleMenu}>
      <div class="line"></div>
      <div class="line"></div>
      <div class="line"></div>
    </button>
    <nav class={isMenuOpen ? 'nav open' : 'nav'}>
      <div class="nav-items">
        {#if screensize === 'small'}
          <Theme />
        {/if}
        <a href={URL_SOCIAL_GITHUB} class="nav-link">GitHub</a>
        <a href={ROUTE_TREE} class="nav-link">Bonsais</a>
        <a href={URL_GERMINATOR} class="nav-link">Germinator</a>
        <a href={URL_VSCODE_PLUGIN} class="nav-link">Markdown</a>
        <a href={ROUTE_CONSULT} class="nav-link">Consult</a>
      </div>
    </nav>
  </div>
  {#if screensize === 'large'}
    <Theme />
  {/if}
</header>

<style>
  .hamburger {
    cursor: pointer;
    /* small */
    display: block;
  }

  .header {
    background-color: var(--background-color);
    border-bottom: 1px solid var(--accent-color-light);
    position: sticky;
    top: 0;
    height: 10vh;
    display: flex;
    z-index: 2;
    padding: 1rem;
    /* small */
    justify-content: space-between;
    align-items: center;
  }

  .line {
    width: 25px;
    height: 3px;
    background-color: var(--text-color);
    margin: 4px 0;
  }

  .nav {
    display: none;
  }

  .nav.open {
    position: absolute;
    display: flex;
    flex-direction: column;
    right: 0;
    top: 60px;
    background-color: var(--background-color);
    border: 1px solid var(--accent-color-light);
    border-radius: 4px;
    padding: 1rem;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  }

  .nav-container {
    padding: 0em 1em;
    /* small */
    flex-direction: column;
  }

  .nav-items {
    display: flex;
    align-items: center;
    gap: 1rem;
    /* small */
    flex-direction: column;
    padding: 0.5rem;
    padding-bottom: 1rem;
  }

  .nav-link {
    color: var(--text-color);
  }

  .nav-link:hover {
    color: var(--hover-color);
  }

  @media (min-width: 768px) {

    .hamburger {
      display: none;
    }

    .header {
      flex-direction: row;
      justify-content: space-between;
    }

    .nav {
      width: 100%;
      display: flex;
      justify-content: space-between;
    }

    .nav-container {
      align-items: center;
      justify-content: space-between;
      flex-grow: 1;
    }

    .nav-items {
      flex-direction: row;
      padding: 0;

    }
  }
</style>
