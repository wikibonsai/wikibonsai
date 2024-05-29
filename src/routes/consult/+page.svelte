<script lang='ts'>
  import { URL_SOCIAL_X } from '$lib/util/const';
  import { goTo } from '$lib/util/func';
  import Footer from '$lib/components/section/Footer.svelte';
  import Header from '$lib/components/section/Header.svelte';
</script>

<Header></Header>
<main class="main-content">
  <section class="description">
    <h1 class="description-title">📋 Consultation</h1>
    <span class="description-body"><strong>Are you an organization...</strong></span>
    <span class="description-body"><strong>...with a need to preserve institutional knowledge?</strong></span>
    <span class="description-body"><strong>...struggling to onboard new hires quickly due to slow knowledge-share?</strong></span>
    <span class="description-body"><strong>...tired of spending time guiding customers through a wide array of products and services?</strong></span>
    <span class="description-body">
      By capturing, curating, consolidating, and cataloging knowledge, we can harness the know-how we're exposed to in a systematic way that can grow in usefulness over time, while preventing erosion of meaning.
    </span>
    <span class="description-body">
      Improve your knowledge management practices and learning processes with the WikiBonsai philosophy, which has been grown in the intersection of a diverse range of disciplines from learning theory, to computer and information science, to machine learning and more.
    </span>
    <span class="description-body">
      Contact today to schedule a consultation and discover how WikiBonsai can help you achieve your goals.
    </span>
    <button class="btn" on:click={goTo(URL_SOCIAL_X)}>DM on X</button>
  </section>
</main>
<Footer></Footer>

<style>
  /* todo: create description component */

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

  .description-title {
    text-align: left;
    font-weight: bold;
    margin-bottom: 2rem;
    /* small */
    font-size: 2rem;
  }

  .main-content {
    background-color: var(--background-color);
    padding: 1rem;
  }

  @media (min-width: 768px) {

    .description {
      padding: 3rem 2rem;
    }

    .description-title {
      /* margin-bottom: 2rem; */
      font-size: 3rem;
    }

    .main-content {
      margin: auto;
      max-width: 1200px;
    }

  }
</style>
