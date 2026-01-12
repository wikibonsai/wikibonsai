<script lang='ts'>
  import type { PageData } from './$types';
  import {
    ROUTE_CONSULT,
    ROUTE_TREE,
    URL_SSG_ASTRO,
    URL_SSG_ELEVENTY,
    URL_SSG_JEKYLL,
    URL_SSG_JEKYLL_PLUS,
    URL_GERMINATOR,
    URL_SOCIAL_GITHUB,
    URL_TENDR_CLI,
    URL_TREE_TRAINER,
    URL_VSCODE_PLUGIN,
  } from '$lib/util/const';
  import { goTo } from '$lib/util/url';
  import DropDown from '$lib/components/element/DropDown.svelte';
  import Footer from '$lib/components/section/Footer.svelte';
  import Header from '$lib/components/section/Header.svelte';
  // sections
  import AIShowCase from '$lib/components/section/AIShowCase.svelte';
  import AppTabSelect from '$lib/components/section/AppTabSelect.svelte';
  import BonsaiJungleGymSVG from '$lib/components/section/BonsaiJungleGymSVG.svelte';
  import DescriptionSection from '$lib/components/section/DescriptionSection.svelte';
  import OSSButtonDescription from '$lib/components/section/OSSButtonDescription.svelte';
  import SSGButtons from '$lib/components/section/SSGButtons.svelte';
  import TendNTinkerCards from '$lib/components/section/TendNTinkerCards.svelte';
  import WorkflowsShowCase from '$lib/components/section/WorkflowsShowCase.svelte';

  export let data: PageData;
</script>

<Header />
<main class="main-content">
  <section class="intro">
    <div class="title-container">
      <h1 class="main-title">a jungle gym for thought</h1>
    </div>
    <div class="subtitle-container">
      <p class="subtitle">
        WikiBonsai is a collection of open source tools
      </p>
      <p class="subtitle">
        for personal knowledge management with markdown
      </p>
    </div>
    <div class="btn-container">
      <!-- <button class="btn" on:click={goTo(URL_REPO_WIKIBONSAI)}>About</button> -->
      <button class="btn" on:click={goTo(ROUTE_TREE)}>Knowledge Bonsai</button>
      <!-- <DropDown title={'Knowledge Bonsais'} items={data.trees}></DropDown> -->
      <button class="btn" on:click={goTo(ROUTE_CONSULT)}>Consult</button>
    </div>
  </section>
  <BonsaiJungleGymSVG />
  <!-- workflows section -->
  <DescriptionSection
    title={'🪨 Bedrock Workflows'}
    description={'The WikiBonsai project transforms a collection of markdown files into a text-based, easy-to-navigate, jungle gym for thought with an API for the mind. This is accomplished by enabling specific personal knowledge management (PKM) workflows:'}>
      <WorkflowsShowCase />
  </DescriptionSection>
  <!-- ai section -->
  <DescriptionSection
    title={'🌱 Tools for Growing'}
    description={'Grow your knowledge base with the help of AI-generated seedlings and training: Starter-seedlings can help kick off the process of conceptual analysis whether you\'re new to that topic or an old-hand looking for a reference. And tree-training can illuminate underlying structures in order to improve your writing and thinking.'}>
      <AIShowCase />
  </DescriptionSection>
  <!-- app section -->
  <DescriptionSection
    title={'✂️ Tools for Tending'}
    description={'With WikiBonsai workflows, a collection of notes or a wiki is transformed into a unified, growing collection and taking notes becomes synonymous with gardening -- whose results will surely bear fruit. Tending your markdown digital garden is possible from...'}>
      <AppTabSelect />
  </DescriptionSection>
  <!-- ssg section -->
  <DescriptionSection
    title={'💐 Tools for Showcasing'}
    description={'By simply turning on WikiBonsai workflows, you can extend a blog, publish a wiki, or simply showcase what you\'ve cultivated with your favorite static site generator.'}>
      <SSGButtons ssgs={[
        {
          url: URL_SSG_ASTRO,
          imgSrc: '/img/logo/Astro.svg',
          alt: 'astro-bloomz'
        },
        {
          url: URL_SSG_ELEVENTY,
          imgSrc: '/img/logo/eleventy-logo.svg',
          alt: 'eleventy-bloomz'
        },
        {
          url: URL_SSG_JEKYLL,
          imgSrc: '/img/logo/jekyll.png',
          alt: 'jekyll-bloomz'
        },
        {
          url: URL_SSG_JEKYLL_PLUS,
          imgSrc: '/img/logo/jekyll-plus.svg',
          alt: 'jekyll-garden'
        }
      ]} />
  </DescriptionSection>
  <!-- open source section -->
  <DescriptionSection
    title={'✨ Tools for Tinkering'}
    orientation={'row'}>
      <OSSButtonDescription />
  </DescriptionSection>
  <!-- call to action -->
  <DescriptionSection
    title={'So Go Tend\'n\'Tinker...'}>
    <TendNTinkerCards content={
      {
        'Bonsais'          : [ROUTE_TREE        , 'Browse some example knowledge bonsais.'],
        // 'The Germinator'   : [URL_GERMINATOR    , 'Query an LLM to generate conceptual analyses.'],
        // 'The Tree Trainer' : [URL_TREE_TRAINER  , 'Query an LLM to guide your linguistic tree-training.'],
        'Markdown'         : [URL_VSCODE_PLUGIN , 'Tend your markdown notes in VSCode.'],
        'CLI'              : [URL_TENDR_CLI     , 'Tend your markdown notes from the CLI.'],
        'GitHub'           : [URL_SOCIAL_GITHUB , 'Tinker with projects and code.'],
        'Consult'          : [ROUTE_CONSULT     , 'Get help with workflows or tech setup.'],
      }
    } />
  </DescriptionSection>
</main>
<Footer />

<style>
  /* todo: logo img + text styles are duplicated in header/footer */
  @import url('https://fonts.cdnfonts.com/css/terminator-2');

  .btn-container {
    display: flex;
    flex-direction: column;
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

  @media (min-width: 768px) {

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
