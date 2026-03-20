<!-- note: styles work best with ~3 cards -->

<script lang='ts'>
  // keys: title, values: url, description
  export let content: Record<string, string[]> = {};
</script>

<div class="card-container">
  {#each Object.entries(content) as [title, [url, description]]}
    <a href={url} class="card card-content">
      <h3 class="card-title">{title}</h3>
      <p class="card-description">{description}</p>
    </a>
  {/each}
</div>

<style>
  .card-container {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem;
    /* small */
    flex-direction: column;
  }

  .card {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: var(--surface-card);
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
    border: 1px solid var(--border-subtle);
    height: 200px;
    border-radius: 0.875rem;
    text-align: center;
    padding: 1rem;
    margin: 1rem;
    transition: transform 0.25s cubic-bezier(0.4, 0, 0.2, 1), border-color 0.25s ease, box-shadow 0.25s ease;
    width: 80%;
    text-decoration: none;
    color: inherit;
    box-shadow: 0 4px 24px rgba(0, 0, 0, 0.05);
  }

  .card:hover {
    transform: translateY(-4px);
    border-color: var(--border-accent);
    box-shadow: 0 12px 40px var(--shadow-accent-soft), inset 0 1px 0 var(--surface-inset-highlight);
  }

  .card-title {
    color: var(--text-color);
    font-size: 1.25rem;
    font-weight: bold;
    margin-bottom: 0.5rem;
    transition: color 0.3s ease; /* transition for hover */
  }

  .card:hover .card-title {
   color: var(--hover-color);
  }

  .card-description {
    color: var(--text-color);
    font-size: 1rem;
    margin-bottom: 1rem;
  }

  @media (min-width: 768px) {
    .card {
      width: 30%;
    }

    .card-container {
      flex-direction: row;
    }
  }
</style>