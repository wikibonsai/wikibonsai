<script lang='ts'>
  import { page } from '$app/stores';

  const message: string = ($page.error) ? $page.error.message : 'unknown error';
  const status: number = $page.status;

  const image: string = '/img/fallen-plant.svg';
</script>

<div class="error-page">
  <h1>{status}: {message}</h1>
  <img src={image} alt="fallen plant">
</div>

<style>
  h1 {
    color: var(--text-color);
    font-family: sans-serif;
    font-size: 2rem;
    text-align: center;
  }

  img {
    height: 50vh;
    width: 50vw;
  }

  .error-page {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
  }
</style>
