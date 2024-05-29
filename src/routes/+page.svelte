<script lang='ts'>
  import type { PageData } from './$types';
  import {
    ROUTE_CONSULT,
    ROUTE_TREE,
    URL_DOCS_STD_BED,
    // URL_GERMINATOR,
    URL_REPO_WIKIBONSAI,
    URL_SOCIAL_GITHUB,
    URL_SSG_ASTRO,
    URL_SSG_ELEVENTY,
    URL_SSG_JEKYLL,
    URL_VSCODE_PLUGIN,
  } from '$lib/util/const';
  import { goTo } from '$lib/util/func';
  import DropDown from '$lib/components/element/DropDown.svelte';
  import Footer from '$lib/components/section/Footer.svelte';
  import Header from '$lib/components/section/Header.svelte';
  import MarkMap from '$lib/components/component/MarkMap.svelte';
  // sections
  import AppTabSelect from './AppTabSelect.svelte';
  import BonsaiJungleGymSVG from './BonsaiJungleGymSVG.svelte';
  import TendNTinkerCards from './TendNTinkerCards.svelte';
  import WorkflowsShowCase from './WorkflowsShowCase.svelte';

  export let data: PageData;

  // #todo: germinator
  // let temp: SVGSVGElement | null ;
</script>

<Header></Header>
<main class="main-content">
  <section class="intro">
    <div class="title-container">
      <h1 class="main-title">a jungle gym for thought,</h1>
      <h1 class="main-title">with an API for the mind.</h1>
    </div>
    <div class="subtitle-container">
      <p class="subtitle">
        WikiBonsai is a methodology and set of tools that
      </p>
      <p class="subtitle">
        nudge note-taking toward meaningful mind-training
      </p>
      <!-- <p class="subtitle">
        and bridges the divide between plaintext, spatial computing, and AI.
      </p> -->
    </div>
    <div class="btn-container">
      <!-- <button class="btn" on:click={goTo(URL_REPO_WIKIBONSAI)}>About</button> -->
      <button class="btn" on:click={goTo(ROUTE_CONSULT)}>Consult</button>
      <!-- <button class="btn" on:click={goTo(ROUTE_TREE)}>Knowledge Bonsai</button> -->
      <!-- <DropDown title={'Knowledge Bonsais'} items={data.trees}></DropDown> -->
    </div>
  </section>
  <BonsaiJungleGymSVG></BonsaiJungleGymSVG>
  <!-- workflows section -->
  <section class="description">
    <h1 class="description-title">Workflows</h1>
    <div class="description-body description-body-col">
      The WikiBonsai project transforms a collection of markdown files into a text-based, easy-to-navigate, jungle gym for thought with an API for the mind. This is accomplished by enabling specific personal knowledge management (PKM) workflows:
      <WorkflowsShowCase></WorkflowsShowCase>
    </div>
  </section>
  <!-- #todo: germinator -->
  <!-- ai section -->
  <!-- <section class="description">
    <h1 class="description-title">🌱 Tools for Germinating</h1>
    <div class="description-body description-body-col">
      Tease apart complex concepts with the help of AI analysis.
      <div class="germ-viz">
        <span class="germinator">🤖</span>
        <MarkMap markdown={DEMO_MKDN}
                 markmap={temp}
                 move={false}
                 height={25}
                 width={45}>
        </MarkMap>
      </div>
      <div class="come-with-me">
        <span>Come with me if you want to</span>
        <button class="btn" on:click={goTo(URL_GERMINATOR)}>grow</button>
      </div>
    </div>
  </section> -->
  <!-- app-group section -->
  <section class="description">
    <h1 class="description-title">✂️ Tools for Tending</h1>
    <div class="description-body description-body-col">
      With WikiBonsai workflows, a collection of notes or a wiki is transformed into a unified, growing collection, where taking notes becomes synonymous with gardening and the results surely shall bear fruit. Tending your markdown digital garden is possible from...
      <AppTabSelect></AppTabSelect>
    </div>
  </section>
  <!-- ssg section -->
  <section class="description">
    <h1 class="description-title">💐 Tools for Showcasing</h1>
    <div class="description-body description-body-col">
      By simply turning on WikiBonsai workflows, you can extend a blog, publish a wiki, or simply showcase what you've cultivated with your favorite static site generator.
      <div class="ssg">
        <a href={URL_SSG_ASTRO}>
          <img class="ssg-logo img-btn" src="/img/social/Astro.svg" alt="astro-wikibonsai"/>
        </a>
        <a href={URL_SSG_ELEVENTY}>
          <img class="ssg-logo img-btn" src="/img/social/eleventy-logo.svg" alt="eleventy-wikibonsai"/>
        </a>
        <a href={URL_SSG_JEKYLL}>
          <img class="ssg-logo img-btn" src="/img/social/jekyll.png"alt="jekyll-wikibonsai"/>
        </a>
      </div>
    </div>
  </section>
  <!-- open source section -->
  <section class="description">
    <h1 class="description-title">✨ Tools for Tinkering</h1>
    <div class="description-body description-body-row">
      <a class="oss-logo" href={URL_SOCIAL_GITHUB}>
        <img class="img-btn" src="/img/social/oss.svg" alt="oss"/>
      </a>
      <div class="oss-description">
        This project is about strategically implementing and open-sourcing functionality that will benefit the most users and developers across the digital ecosystem. Thus, it abides by the Unix Philosophy: Everything is modularized and implemented in such a way as to maximize re-use whether it be for the browser, desktop, mobile, or headset. It's about furthering the state of PKM as a whole by building atop <a href={URL_DOCS_STD_BED}>"standardization bedrock"</a> instead of just creating a single application.
      </div>
    </div>
  </section>
  <!-- call to action -->
  <section class="description">
    <h1 class="description-title">So Go Tend'n'Tinker...</h1>
    <span class="description-body description-body-col">
      <TendNTinkerCards content={
        {
          'GitHub'         : [URL_SOCIAL_GITHUB , 'Tinker with projects and code.'],
          'Bonsais'        : [ROUTE_TREE        , 'Browse some example knowledge bonsais.'],
          // 'The Germinator' : [URL_GERMINATOR    , 'Query an LLM to generate conceptual analyses.'],
          'Markdown'       : [URL_VSCODE_PLUGIN , 'Tend your markdown notes in VSCode.'],
          // 'CLI'            : [URL_TENDR_CLI     , 'Tend your markdown notes in the CLI.'],
          'Consult'        : [ROUTE_CONSULT     , 'Get help with workflows or tech setup.'],
        }
      }></TendNTinkerCards>
    </span>
  </section>
</main>
<Footer></Footer>

<style>
  /* todo: logo img + text styles are duplicated in header/footer */
  @import url('https://fonts.cdnfonts.com/css/terminator-2');

  /* .btn-pad {
    margin-right: 1rem;
  } */

  .btn-container {
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 4rem;
  }

  .intro {
    padding: 1rem;
  }

  .main-content {
    background-color: var(--background-color);
    padding: 1rem;
  }

  .main-title {
    text-align: center;
    /* small */
    font-size: 2rem;
    margin: 0.5rem 0;
  }

  .subtitle {
    color: var(--accent-text-color);
    /* small */
    font-size: 0.83rem;
  }

  .subtitle-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .title-container {
    padding: 1rem;
  }

  /* description sections */

  /* todo: create description component */

  .description {
    text-align: center;
    /* small */
    padding: 1rem;
  }

  .description-title {
    text-align: left;
    font-weight: bold;
    margin-bottom: 2rem;
    /* small */
    font-size: 2rem;
  }

  /* todo: split description-body into row v column arrangement */

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

  .germ-viz {
    align-self: center;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 2rem;
  }

  .germinator {
    margin-right: 1rem;
    /* small */
    font-size: 3rem;
  }

  .come-with-me {
    font-family: 'Terminator', sans-serif;
    align-self: center;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 1rem;
  }

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

  .oss-description {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    font-size: 1rem;
    padding: 2rem;
    /* text */
    font-size: 1.25rem;
    padding: 1rem;
    text-align: center;
  }

  .oss-logo {
    /* small */
    width: 25%;
    margin: 1rem;
  }

  @media (min-width: 768px) {

    /* .btn-pad {
      margin-right: 2rem;
    } */

    .description {
      padding: 3rem 2rem;
    }

    .description-title {
      /* margin-bottom: 2rem; */
      font-size: 3rem;
    }

    .description-body-row {
      flex-direction: row;
    }

    .germinator {
      font-size: 5rem;
    }

    .intro {
      padding-top: 5rem;
    }

    .main-content {
      margin: auto;
      max-width: 1200px;
    }

    .main-title {
      font-size: 3rem;
      margin: 0;
    }

    .oss-logo {
      width: 100%;
      margin: 4rem;
    }

    .ssg {
      padding: 2rem;
    }

    .ssg-logo {
      height: 150px;
      width: 150px;
      margin: 2rem;
    }

    .subtitle {
      font-size: 1.25rem;
    }
  }

  @media (min-width: 1200px) {
    .main-content {
      padding: 2rem;
    }
  }
</style>
