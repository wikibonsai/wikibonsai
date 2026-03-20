<!-- #todo: dropdown -->
<script lang='ts'>
  import { clickOutside } from '$lib/util/func';

  export let title: string = 'dropdown';
  export let items: { route: string, title: string }[] = [];

  let isDropdownOpen: boolean = false;

  function toggleDropdown() {
    isDropdownOpen = !isDropdownOpen;
  }

  function handleClickOutside(event: MouseEvent): void {
    if (event.target && !event.target.closest('.dropdown')) {
      isDropdownOpen = false;
    }
  }
</script>

<div class="dropdown" use:clickOutside on:click_outside={handleClickOutside}>
  <button class="dropdown-button" on:click={toggleDropdown}>{title}</button>
  {#if isDropdownOpen}
    <div class="dropdown-menu">
      {#each items as item}
        <a href={item.route} class="dropdown-item">
          {item.title}
        </a>
      {/each}
    </div>
  {/if}
</div>

<style>
  .dropdown {
    position: relative;
    display: inline-block;
  }

  .dropdown-button {
    padding: 0.5rem 1rem;
    border: 1px solid var(--border-subtle);
    border-radius: 0.5rem;
    cursor: pointer;
    background: var(--surface-card);
    backdrop-filter: blur(10px);
  }

  .dropdown-button:hover {
    border-color: var(--border-accent);
  }

  .dropdown-item {
    color: var(--text-color);
    display: block;
    padding: 0.5rem 1rem;
  }

  .dropdown-item:hover {
    background-color: var(--accent-color-light);
  }

  .dropdown-menu {
    display: block;
    position: absolute;
    background: var(--surface-card-strong);
    backdrop-filter: blur(12px);
    border: 1px solid var(--border-subtle);
    box-shadow: 0 12px 32px rgba(0, 0, 0, 0.12);
    border-radius: 0.5rem;
    margin-top: 0.5rem;
    min-width: 100%;
  }
</style>
