<script lang='ts'>
  export let title: string;
  export let description: string = '';
  export let orientation: 'col' | 'row' = 'col';
</script>

<section class="description">
  <h1 class="description-title">{title}</h1>
  <div class="description-body"
       class:description-body-col={orientation === 'col'}
       class:description-body-row={orientation === 'row'}>
    {description}
    <slot />
  </div>
</section>

<style>
  .description {
    text-align: center;
    /* small */
    padding: 1rem;
  }

  .description-body {
    height: 100%;
    display: flex;
    font-size: 1.5rem;
    margin-bottom: 1rem;
    text-align: left;
  }

  .description-body-col {
    flex-direction: column;
  }

  .description-body-row {
    justify-content: space-around;
    align-items: center;
    /* small */
    flex-direction: column;
  }

  .description-title {
    text-align: left;
    font-weight: bold;
    margin-bottom: 2rem;
    /* small */
    font-size: 2rem;
  }

  @media (min-width: 768px) {

    .description {
      padding: 3rem 2rem;
    }

    .description-body-row {
      flex-direction: row;
    }

    .description-title {
      /* margin-bottom: 2rem; */
      font-size: 3rem;
    }
  }
</style>
