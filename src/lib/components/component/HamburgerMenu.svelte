<script lang='ts'>
  import { goTo } from '$lib/util/url';
  import AbtBtn from '$lib/components/element/AbtBtn.svelte';
  import CpyBtn from '$lib/components/element/CpyBtn.svelte';
  import DropDown from '$lib/components/element/DropDown.svelte';
  import Logo from '$lib/components/element/Logo.svelte';

  export let tree: Tree;

  let isOpen: boolean = false;

  function toggleMenu(): void {
    isOpen = !isOpen;
  }
</script>

<div on:click={toggleMenu} class="overlay" class:open={isOpen}></div>

<button on:click={toggleMenu} class="menu-toggle img-btn" title="Toggle Menu">
  <div class="hamburger-lines">
    <div class="line line1" class:change={isOpen}></div>
    <div class="line line2" class:change={isOpen}></div>
    <div class="line line3" class:change={isOpen}></div>
  </div>
</button>

<div class="menu" class:open={isOpen}>
  <nav>
    <Logo></Logo>
    <div class="nav-items">
      <AbtBtn></AbtBtn>
      <CpyBtn markdown={tree.markdown}></CpyBtn>
    </div>
  </nav>
</div>

<style>
  nav ul {
    list-style: none;
  }

  /* hamburger stuff */

  .hamburger-lines {
    display: block;
    height: 23px;
    width: 35px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .line {
    background: var(--text-color);
    display: block;
    height: 4px;
    width: 100%;
    border-radius: 10px;
  }

  .line1 {
    transform-origin: 0% 0%;
    transition: transform 0.4s ease-in-out;
  }

  .line2 {
    transition: transform 0.2s ease-in-out;
  }

  .line3 {
    transform-origin: 0% 100%;
    transition: transform 0.4s ease-in-out;
  }

  .change.line1 {
    transform: rotate(35deg);
  }

  .change.line2 {
    /* opacity: 0; */
    transform: scaleY(0);
  }

  .change.line3 {
    transform: rotate(-35deg);
  }

  /* menu stuff */

  .menu {
    position: fixed;
    top: 0;
    z-index: var(--hamburger-menu-z);
    left: -250px;
    width: 250px;
    height: 100%;
    background-color: var(--background-color);
    color: var(--text-color);
    display: flex;
    flex-direction: column;
    justify-content: center;
    box-sizing: border-box;
    padding: 20px;
    transition: left 0.3s ease;
  }

  .menu.open {
    left: 0;
  }

  .menu-toggle {
    z-index: var(--hamburger-menu-toggle-z);
    padding: 1rem;
  }

  .nav-items {
    display: flex;
    justify-content: space-around;
    padding-top: 2rem;
  }

  /* (background) overlay stuff */

  .overlay {
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: var(--hamburger-menu-z);
    transition: opacity 0.3s ease;
  }

  .overlay.open {
    display: block;
  }

</style>
