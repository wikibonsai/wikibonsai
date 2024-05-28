<script lang='ts'>
  import { URL_TENDR_CLI, URL_VSCODE_PLUGIN } from '$lib/util/const';

  let selected: string = 'ide';

  function select(tab: string): void {
    selected = tab;
  }
</script>

<div class="tab-container">
  <div class="tab-row">
    <a href={URL_TENDR_CLI}>
      <img class="img-btn" src="/img/icons/icons8-cli-64.png" alt="cli">
    </a>
    <button class="tab" class:selected={selected === 'cli'} on:click={() => select('cli')}>
      ...the CLI.
    </button>
  </div>
  <div class="tab-row">
    <a href={URL_VSCODE_PLUGIN}>
      <img class="img-btn" src="/img/icons/icons8-ide-64.png" alt="vscode">
    </a>
    <button class="tab" class:selected={selected === 'ide'} on:click={() => select('ide')}>
      ...an IDE.
    </button>
  </div>
</div>
{#if selected === 'cli'}
  <div class="app-content">
    <a href={URL_TENDR_CLI}>
      <img class="app-demo img-btn img-cli" src="/img/demo-tendr-cli.gif" alt="tendr-cli"/>
    </a>
  </div>
{:else if selected === 'ide'}
  <div class="app-content">
    <a href={URL_VSCODE_PLUGIN}>
      <img class="app-demo img-btn img-vscode" src="/img/demo-vscode-wikibonsai.png" alt="vscode-wikibonsai"/>
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

  .tab-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-top: 2rem;
    padding-bottom: 1rem;
  }

  .tab-row {
    display: flex;
    justify-content: space-around;
  }

  .tab {
    width: 60%;
    background-color: var(--background-color);
    border: 1px solid var(--accent-color-dark);
    border-radius: 8px;
    padding: 0.5rem 1rem;
    margin: 0.5rem;
    cursor: pointer;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }

  .tab:hover {
    color: var(--hover-color);
    transform: scale(1.05);
    box-shadow: 0 4px 8px var(--hover-color);
    background-color: var(--accent-color-light);
  }

  .selected {
    color: var(--hover-color);
    background-color: var(--accent-color-light);
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
  }
</style>