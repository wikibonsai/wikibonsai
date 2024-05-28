<script lang='ts'>
  import {
    URL_REF_ICONS8,
    URL_REF_MARKMAP,
    URL_REF_R_MUSK_TREE,
    URL_REF_WAITBUTWHY,
    URL_REPO_WIKIBONSAI,
    URL_VSCODE_PLUGIN,
  } from '$lib/util/const';

  export let isOpen: boolean = false;
  const semtreeImg: string = '/img/waitbutwhy-neuralink-tree.png';

  function closeModal(): void {
    isOpen = false;
  }

  function toggleModal(): void {
    isOpen = !isOpen;
  }

  function handleKeydown(event: KeyboardEvent): void {
    if (event.key === 'Escape' && isOpen) {
      toggleModal();
    }
  }
</script>

<svelte:window on:keydown={handleKeydown} />

<div class="modal"
     class:opacity-0={!isOpen}
     class:pointer-events-none={!isOpen}
     class:modal-active={isOpen}>
  <!-- Modal content -->
  <div class="modal-overlay"></div>
  
  <div class="modal-container">
    <!-- Add margin if you want to see some of the overlay behind the modal-->
    <div class="modal-content">
      <!-- close / title -->
      <button class="modal-close" on:click={closeModal}>
        <svg class="title-color fill-current" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18">
          <path d="M16.292 2.292l-1.584-1.584-6.708 6.708-6.708-6.708-1.584 1.584 6.708 6.708-6.708 6.708 1.584 1.584 6.708-6.708 6.708 6.708 1.584-1.584-6.708-6.708z"></path>
        </svg>
      </button>
      <p class="title">About</p>
      <!--Body-->
      <div class="container mx-auto p-4">
        <a href={URL_REF_WAITBUTWHY} class="block">
          <img src={semtreeImg} class="mx-auto" height="50%" width="50%" alt="waitbutwhy's neuralink semantic tree">
        </a>
        <blockquote class="text-lg mb-4">
          <p>
            It is important to view knowledge as a sort of semantic tree. Make sure you understand the fundamental principles, i.e., the trunk and big branches before you get into the leaves/details or there is nothing for them to hang on to.
          </p>
          <p>
            ~ <a href={URL_REF_R_MUSK_TREE}>Elon Musk</a>
          </p>
        </blockquote>
        <p class="text-xs mt-2">
          Text output is formatted in markdown, which can be particularly useful for markdown-based PKMs like <a href={URL_VSCODE_PLUGIN}>vscode-wikibonsai</a>.
        </p>
        <p class="text-xs mt-2">
          A <a href={URL_REPO_WIKIBONSAI}>WikiBonsai</a> project;
          above image from <a href={URL_REF_WAITBUTWHY}>waitbutwhy</a>;
          mindmap courtesy of <a href={URL_REF_MARKMAP}>markmap</a>; 
          icons from <a href={URL_REF_ICONS8}>icons8</a>.
        </p>
      </div>
      <!--Footer-->
      <div class="modal-footer">
        <button id="okButton"
                class="px-4 bg-green-500 p-3 rounded-lg text-white hover:bg-green-600"
                on:click={toggleModal}>
          Ok
        </button>
      </div>
    </div>
  </div>
</div>

<style>
  /* 
  blockquotes

  src:
    - https://github.com/wikibonsai/jekyll-wikibonsai/blob/ddc978d53c2eb40f018060207a0760f6e2f42cb4/_sass/base/_markdown.scss#L206
    - https://codepen.io/jimmycow/pen/LmjVaz
    - https://codepen.io/JoeHastings/pen/MOdRVm
  */

  blockquote {
    border-left: 0.25em solid var(--accent-color-light);
  }

  blockquote p {
    padding-left: 1.5em;
    margin: 0.75em;
  }

  blockquote:before {
    color: var(--accent-color-light);
    font-family: 'Special Elite', cursive;
    font-size: 50px;
    content: '“';
    position: absolute;
    padding: 10px;
  }

  .title {
    text-align: center;
    align-self: center;
    font-size: 1.5rem;
    font-weight: 700;
  }
</style>
