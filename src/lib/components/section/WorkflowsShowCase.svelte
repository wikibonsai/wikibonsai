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
    /* workflow content */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    /* workflow */
    height: 200px;
    background-color: var(--background-color);
    border: 1px solid var(--accent-color-dark);
    border-radius: 8px;
    padding: 1rem;
    margin: 1rem;
    text-align: center;
    transition: background-color 0.3s ease;
    transition: color 0.3s ease; /* transition for hover */
    /* small */
    width: 100%;
  }

  .workflow:hover .workflow-title {
    color: var(--hover-color);
  }

  .workflow:hover, .workflow:focus {
    background-color: var(--accent-color-light); /* Tint color on hover/focus */
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