<script lang='ts'>
  import type { PageData } from './$types';
  import {
    ROUTE_CONSULT,
    ROUTE_TREE,
    URL_DOCS,
    URL_DOCS_DESIGN_PRESERVING,
    URL_DOCS_PHIL,
    URL_DOCS_PHIL_GYM,
    URL_DOCS_PHIL_LEARNING_LOOPS,
    URL_DOCS_STD_BED,
    URL_DOCS_USE,
    URL_SOCIAL_SUBSTACK,
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
  <section class="intro hero" aria-labelledby="hero-title">
    <h1 id="hero-title" class="title">
      <span class="title-main">WikiBonsai</span>
    </h1>
    <p class="tagline">
      <a href={URL_DOCS_PHIL_GYM}>A structured knowledge layer in plain text</a>
    </p>
    <p class="hero-description">
      Organize what you know into a semantic graph
      <br />
      All in plain text, readable by anyone, any model, any tool.
    </p>
    <div class="btn-container">
      <!-- <button class="btn" on:click={goTo(URL_REPO_WIKIBONSAI)}>About</button> -->
      <!-- <button class="btn" on:click={goTo(ROUTE_TREE)}>Knowledge Bonsai</button> -->
      <!-- <DropDown title={'Knowledge Bonsais'} items={data.trees}></DropDown> -->
      <button class="btn" on:click={goTo(URL_SOCIAL_SUBSTACK)}>SubStack</button>
    </div>
  </section>
  <BonsaiJungleGymSVG />
  <!-- tldr section -->
   <!-- workflows section -->
  <DescriptionSection
    title={'✨ Guiding Lights'}
    sectionLinkHref={URL_DOCS_PHIL}
    sectionLinkLabel={'Philosophy'}
    description={'WikiBonsai extends markdown with conventions drawn from personal knowledge management (PKM). These conventions turn a collection of plain text files into a jungle gym for thought: Note-taking becomes a practice of building understanding, and your notes stay useful and accessible in the long run.'}>
  </DescriptionSection>
  <!-- workflows section -->
  <DescriptionSection
    title={'🪨 Bedrock Workflow'}
    sectionLinkHref={URL_DOCS_STD_BED}
    sectionLinkLabel={'Standardization'}
    description={'The bedrock of the WikiBonsai project relies on four workflow components:'}>
      <WorkflowsShowCase workflows={[
        {
          title: 'Wiki Syntax',
          description: 'Extend markdown with `[[wikirefs]]` syntax for quick associative linking to build vibrant concept webs',
          url: URL_REPO_WIKIREFS,
        },
        {
          title: 'Link Type Support',
          description: 'Add CAML-style metadata like `:semantic::attributes` for clean, lean, YAML-like structured data -- without frontmatter separators (`---`)',
          url: URL_REPO_CAML,
        },
        {
          title: 'Knowledge Tree',
          description: 'Organize concept indexes across multiple notes, which are automatically merged into a unified knowledge bonsai',
          url: URL_REPO_SEMTREE,
        },
        {
          title: 'Graph View',
          description: 'See your notes as an interactive graph -- a visual map that emerges from the relationships between concepts',
          url: URL_REPO_TREEHOUZE,
        },
      ]} />
  </DescriptionSection>
  <!-- ai section -->
  <DescriptionSection
    title={'🌱 Tools for Growing'}
    sectionLinkHref={URL_DOCS_PHIL_LEARNING_LOOPS}
    sectionLinkLabel={'Learning Loops'}
    description={'Grow and train your knowledge with the help of AI generation.'}>
      <AIShowCase />
  </DescriptionSection>
  <!-- app section -->
  <DescriptionSection
    title={'✂️ Tools for Tending'}
    sectionLinkHref={URL_DOCS_USE}
    sectionLinkLabel={'Usage'}
    description={'Tend your markdown notes with WikiBonsai workflows from...'}>
      <AppTabSelect />
  </DescriptionSection>
  <!-- ssg section -->
  <DescriptionSection
    title={'💐 Tools for Showcasing'}
    sectionLinkHref={URL_DOCS_DESIGN_PRESERVING}
    sectionLinkLabel={'Preserving Relational Integrity'}
    description={'Publish your notes as a blog or wiki with your favorite static site generator.'}>
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
    sectionLinkHref={URL_DOCS}
    sectionLinkLabel={'Documentation'}
    orientation={'row'}>
      <OSSButtonDescription />
  </DescriptionSection>
  <!-- call to action -->
  <DescriptionSection
    title={'So Go Tend\'n\'Tinker...'}
    sectionLinkHref={URL_SOCIAL_GITHUB}
    sectionLinkLabel={'GitHub'}>
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

  .hero {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .title {
    margin: 0 0 0.75rem;
    padding: 0;
    line-height: 1;
  }

  .title-main {
    display: inline-block;
    font-size: clamp(2.75rem, 10vw, 4.5rem);
    font-weight: 700;
    letter-spacing: -0.03em;
    line-height: 1.05;
    background: linear-gradient(
      135deg,
      var(--text-color) 0%,
      var(--btn-color) 42%,
      var(--leaf) 100%
    );
    background-size: 200% 200%;
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    animation: heroTitleGradient 10s ease infinite;
  }

  @keyframes heroTitleGradient {
    0%,
    100% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
  }

  .tagline {
    margin: 0 0 1rem;
    font-size: 0.8rem;
    font-weight: 600;
    letter-spacing: 0.16em;
    text-transform: uppercase;
  }

  .tagline a {
    color: var(--link-color);
    text-decoration: none;
    transition: color 0.2s ease;
  }

  .tagline a:hover {
    color: var(--hover-color);
  }

  .hero-description {
    margin: 0;
    max-width: 32rem;
    font-size: 1rem;
    line-height: 1.55;
    color: var(--accent-text-color);
  }

  .main-content {
    background: transparent;
    padding: 1rem;
  }

  @media (min-width: 768px) {
    .intro {
      padding-top: 4rem;
    }

    .main-content {
      margin: auto;
      max-width: 1200px;
    }

    .tagline {
      font-size: 0.95rem;
      margin-bottom: 1.25rem;
    }

    .hero-description {
      font-size: 1.125rem;
    }
  }
</style>
