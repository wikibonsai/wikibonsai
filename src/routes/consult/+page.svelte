<script lang='ts'>
  import { URL_SOCIAL_X } from '$lib/util/const';
  import { goTo } from '$lib/util/url';
  import Footer from '$lib/components/section/Footer.svelte';
  import Header from '$lib/components/section/Header.svelte';
</script>

<Header />
<main class="main-content">
  <section class="description">
    <h1 class="description-title">📋 Consultation</h1>
    <span class="description-body"><strong>Are you an organization...</strong></span>
    <span class="description-body"><strong>...with a need to preserve institutional knowledge?</strong></span>
    <span class="description-body"><strong>...struggling to onboard new hires quickly due to slow knowledge-share?</strong></span>
    <span class="description-body"><strong>...that wants to showcase products and services more effectively?</strong></span>
    <span class="description-body">
      By capturing, organizing, and connecting knowledge systematically, we can harness what we know in a way that grows in usefulness over time -- while preventing erosion of meaning.
    </span>
    <span class="description-body">
      WikiBonsai's approach draws from learning theory, computer and information science, and machine learning to improve how knowledge is managed, shared, and built upon.
    </span>
    <span class="description-body">
      Reach out to schedule a consultation and see how WikiBonsai can help.
    </span>
    <button class="btn" on:click={goTo(URL_SOCIAL_X)}>DM on X</button>
  </section>
</main>
<Footer />

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
    background: transparent;
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
