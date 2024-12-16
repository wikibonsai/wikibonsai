<script lang='ts'>
  interface SSGButton {
    url: string;
    imgSrc: string;
    alt: string;
  }

  export let ssgs: SSGButton[];
</script>

<div class="ssg">
  {#each ssgs as button}
    <a href={button.url}>
      <img class="ssg-logo img-btn" src={button.imgSrc} alt={button.alt}/>
    </a>
  {/each}
</div>

<style>
  .ssg {
    align-self: center;
    display: flex;
    justify-content: space-between;
    align-items: center;
    /* small */
    padding: 2rem 0;
  }

  .ssg-logo {
    width: 80%;
    /* small */
    height: 90px;
    width: 90px;
    margin: 0.5rem;
  }

  @media (min-width: 768px) {
    .ssg {
      padding: 2rem;
    }

    .ssg-logo {
      height: 150px;
      width: 150px;
      margin: 2rem;
    }
  }
</style>
