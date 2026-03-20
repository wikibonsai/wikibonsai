<script lang='ts'>
  let hovered: boolean = false;

  interface WorkFlow {
    title: string;
    description: string;
    url: string;
  }

  export let workflows: WorkFlow[];

   // Replace `code` with <code>code</code>
   const highlight = (text: string) => text.replace(/`([^`]+)`/g, '<code>$1</code>');
</script>

<div class="workflow-container" role="list">
  {#each workflows as workflow}
    <div class="workflow"
        on:click="{() => window.location.href = workflow.url}"
        on:mouseover="{() => hovered = 1}"
        on:mouseout="{() => hovered = 0}"
        on:focus="{() => hovered = 2}"
        on:blur="{() => hovered = 0}"
        role="listitem"
        tabindex="-1">
      <h2 class="workflow-title">{@html highlight(workflow.title)}</h2>
      <p class="workflow-description">{@html highlight(workflow.description)}</p>
    </div>
  {/each}
</div>

<style>
  .workflow-container {
    cursor: pointer;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
    padding: 2rem;
  }

  .workflow {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 200px;
    background: var(--surface-card);
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
    border: 1px solid var(--border-subtle);
    border-radius: 0.875rem;
    padding: 1rem;
    margin: 1rem;
    text-align: center;
    transition: transform 0.25s cubic-bezier(0.4, 0, 0.2, 1), border-color 0.25s ease,
      box-shadow 0.25s ease, background 0.25s ease;
    width: 100%;
    box-shadow: 0 4px 24px rgba(0, 0, 0, 0.04);
  }

  .workflow:hover .workflow-title {
    color: var(--hover-color);
  }

  .workflow:hover,
  .workflow:focus {
    transform: translateY(-4px);
    border-color: var(--border-accent);
    box-shadow: 0 12px 40px var(--shadow-accent-soft), inset 0 1px 0 var(--surface-inset-highlight);
    background: var(--surface-card-strong);
  }

  .workflow-title {
    color: var(--text-color);
    font-size: 1.25rem;
    font-weight: bold;
    margin-bottom: 0.5rem;
  }

  .workflow-description {
    color: var(--text-color);
    font-size: 1rem;
    margin-bottom: 1rem;
  }

  @media (min-width: 768px) {
    .workflow-section {
      justify-content: space-between;
    }

    .workflow {
      width: 45%; /* Adjust for two columns */
    }
  }
</style>