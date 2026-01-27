<script lang='ts'>
  import type { PageData } from './$types';
  import {
    ROUTE_CONSULT,
    ROUTE_TREE,
    URL_DOCS_PHIL_GYM,
    URL_REPO_CAML,
    URL_REPO_SEMTREE,
    URL_REPO_TREEHOUZE,
    URL_REPO_WIKIREFS,
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
      <h1 class="main-title">
        <a href={URL_DOCS_PHIL_GYM}>a jungle gym for thought</a>
      </h1>
    </div>
    <div class="subtitle-container">
      <p class="subtitle">
        WikiBonsai is a method and set of tools that
      </p>
      <p class="subtitle">
        nudge note-taking toward meaningful mind-training
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
  <!-- tldr section -->
   <!-- workflows section -->
  <DescriptionSection
    title={'✨ Guiding Lights'}
    description={'WikiBonsai defines suggested standards and provides open source tooling to extend the markdown syntax based on common convention in personal knowledge management or PKM. These conventions transform a collection of plain text files into a jungle gym for thought: Note-taking turns into a practice of mind-training, while notes become useful and accessible in the long run.'}>
  </DescriptionSection>
  <!-- workflows section -->
  <DescriptionSection
    title={'🪨 Bedrock Workflow'}
    description={'The bedrock of the WikiBonsai project relies on four workfow components:'}>
      <WorkflowsShowCase workflows={[
        {
          title: 'Wiki Syntax',
          description: 'Extend markdown with `[[wikirefs]]` syntax for quick associative linking to build vibrant concept webs',
          url: URL_REPO_WIKIREFS,
        },
        {
          title: 'Index Utilities',
          description: 'Organize concept indexes across multiple notes, which are automatically merged into a unified knowledge bonsai',
          url: URL_REPO_SEMTREE,
        },
        {
          title: 'CAML Syntax',
          description: 'Add CAML-style metadata like `:semantic::attributes` for clean, lean, YAML-like structured data -- without the bloat of frontmatter separators (`---`)',
          url: URL_REPO_CAML,
        },
        {
          title: 'Note Visualizations',
          description: 'Experience and interact with the unified visual-spatial representation that emerges from the relationships formed across notes',
          url: URL_REPO_TREEHOUZE,
        },
      ]} />
  </DescriptionSection>
  <!-- ai section -->
  <DescriptionSection
    title={'🌱 Tools for Growing'}
    description={'Grow and train your knowledge with the help of AI generation.'}>
      <AIShowCase />
  </DescriptionSection>
  <!-- app section -->
  <DescriptionSection
    title={'✂️ Tools for Tending'}
    description={'Use WikiBonsai workflows together for your markdown notes from...'}>
      <AppTabSelect />
  </DescriptionSection>
  <!-- ssg section -->
  <DescriptionSection
    title={'💐 Tools for Showcasing'}
    description={'Showcase WikiBonsai workflows to extend a blog or wiki for your favorite static site generator.'}>
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
    title={'🪏 Tools for Tinkering'}
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
