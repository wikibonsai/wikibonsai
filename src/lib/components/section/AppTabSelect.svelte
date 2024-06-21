<script lang='ts'>
  import { URL_TENDR_CLI, URL_VSCODE_PLUGIN } from '$lib/util/const';
  import WindowAppIcon from '$lib/components/icons/WindowAppIcon.svelte';
  import WindowCliIcon from '$lib/components/icons/WindowCLIIcon.svelte';

  let selected: string = 'ide';
  const demoSrcCli: string = '/img/demo-tendr-cli.gif';
  const demoSrcApp: string = '/img/demo-vscode-wikibonsai.png';

  function select(tab: string): void {
    selected = tab;
  }
</script>

<div class="tab-container">
  <button class="tab" class:selected={selected === 'cli'} on:click={() => select('cli')}>
    <a href={URL_TENDR_CLI}>
      <WindowCliIcon class="img-btn" />
    </a>
    ...the CLI
  </button>
  <button class="tab" class:selected={selected === 'ide'} on:click={() => select('ide')}>
    <a href={URL_VSCODE_PLUGIN}>
      <WindowAppIcon class="img-btn" />
    </a>
    ...an IDE
  </button>
</div>
{#if selected === 'cli'}
  <div class="app-content">
    <a href={URL_TENDR_CLI}>
      <img class="app-demo img-btn img-cli" src={demoSrcCli} alt="tendr-cli"/>
    </a>
  </div>
{:else if selected === 'ide'}
  <div class="app-content">
    <a href={URL_VSCODE_PLUGIN}>
      <img class="app-demo img-btn img-vscode" src={demoSrcApp} alt="vscode-wikibonsai"/>
    </a>
  </div>
{/if}

<style>
  .app-content {
    text-align: center;
    padding: 1rem;
  }

  .app-demo {
    max-width: 100%;
    height: auto;
    margin: auto;
  }

  .img-vscode {
    width: 100%;
  }

  .img-cli {
    width: 100%;
  }

  .tab {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: var(--background-color);
    color: var(--text-color);
    border: 1px solid var(--accent-color-dark);
    border-radius: 8px;
    padding: 0.5rem 1rem;
    margin: 0.5rem;
    cursor: pointer;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    /* small */
    /* width: 70%; */
  }

  .tab:hover {
    transform: scale(1.05);
    box-shadow: 0 4px 8px var(--hover-color);
    background-color: var(--accent-color-light);
    color: var(--hover-color);
  }

  .tab-container {
    display: flex;
    justify-content: space-around;
    padding-top: 2rem;
    padding-bottom: 1rem;
    /* small */
    flex-direction: column;
  }

  .selected {
    background-color: var(--accent-color-light);
    color: var(--hover-color);
  }

  .tab:focus {
    outline: none;
  }

  .img-btn {
    cursor: pointer;
    margin-bottom: 1rem;
  }

  @media (min-width: 768px) {
    .img-cli {
      width: 40%;
    }

    .tab {
      width: 30%;
    }

    .tab-container {
      flex-direction: row;
    }
  }
</style>