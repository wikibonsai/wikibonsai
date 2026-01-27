<script lang='ts'>
  import { DEMO_MKDN, URL_GERMINATOR, URL_TREE_TRAINER } from '$lib/util/const';
  import { goTo } from '$lib/util/url';
  import MarkMap from '$lib/components/component/MarkMap.svelte';
  import SentenceTree from '$lib/components/component/SentenceTree.svelte';


  let temp: SVGSVGElement | null;
  const logoImgSrcGerminator: string = '/img/logo/germinator.svg';
  const logoImgSrcTreeTrainer: string = '/img/logo/tree-trainer.png';
</script>

<div class="ai-container">
  <!-- germinator -->
  <div class="germinator-container">
    <div class="germ-viz">
      <span class="germinator">
        <img src={logoImgSrcGerminator} alt="germinator" />
      </span>
      <MarkMap markdown={DEMO_MKDN}
              markmap={temp}
              move={false}
              height={25}
              width={45} />
    </div>
    <div class="germ-descr">
      <p>The Germinator is an AI-powered concept analyzer. Enter a word and get a starter semantic mapping of the related concept.</p>
    </div>
    <div class="come-with-me">
      <span>Come with me if you want to</span>
      <button class="btn" on:click={goTo(URL_GERMINATOR)}>grow</button>
    </div>
  </div>
  <!-- tree-trainer -->
  <div class="tree-trainer-container">
    <div class="tree-trainer-viz">
      <span class="tree-trainer">
        <img src={logoImgSrcTreeTrainer} alt="tree-trainer" />
      </span>
      <SentenceTree markdown={DEMO_MKDN}
                    height={15}
                    width={25} />
    </div>
    <div class="tree-trainer-descr">
      <p>The Tree Trainer is an AI-powered language trainer. Enter a sentence and get a diagram of the sentence.</p>
    </div>
    <div class="inside-strong-root">
      <span>Inside you have strong root. No need nothing except what inside you to </span>
      <button class="btn" on:click={goTo(URL_TREE_TRAINER)}>grow</button>
    </div>
  </div>
</div>

<style>
  /* ai */

  .ai-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2rem;
  }

  .germinator,
  .tree-trainer {
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
  }

  .germinator img,
  .tree-trainer img {
    object-fit: contain;
    height: 5rem;
    width: 5rem;
  }

  .germ-descr,
  .tree-trainer-descr {
    /* align at the top of the container */
    align-items: flex-start;
    /* align-self: center; */
    /* max-width: 20rem; */
    /* text */
    font-size: 1.25rem;
    padding: 1rem;
  }

  /* germinator */

  .germ-viz {
    align-self: center;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 2rem;
  }

  .come-with-me {
    font-family: 'Terminator', sans-serif;
    align-self: center;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 1rem;
  }

  /* tree-trainer */

  .tree-trainer-viz {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 2rem;
  }

  .inside-strong-root {
    font-family: 'Caveat', cursive;
    align-self: center;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 1rem;
  }

  .come-with-me,
  .inside-strong-root {
    min-height: 4rem;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: 0.5rem;
    padding: 1rem;
    text-align: center;
  }

  .come-with-me span,
  .inside-strong-root span {
    display: inline-flex;
    align-items: center;
  }

  @media (min-width: 768px) {
    .ai-container {
      flex-direction: row;
      /* justify-content: space-around; */
      /* align-items: flex-start; */
    }

    .germinator-container,
    .tree-trainer-container {
      flex: 1;
      max-width: 45%;
    }
  }
</style>
