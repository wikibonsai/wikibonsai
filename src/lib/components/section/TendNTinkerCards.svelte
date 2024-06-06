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
    /* card-content */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    /* card */
    background-color: var(--accent-color-light);
    border: 1px solid var(--accent-color-dark);
    height: 200px;
    border-radius: 8px;
    text-align: center;
    padding: 1rem;
    margin: 1rem;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    /* small */
    width: 80%;
  }

  .card:hover {
    transform: scale(1.05);
    box-shadow: 0 4px 8px var(--hover-color);
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