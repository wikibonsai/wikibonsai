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

<div class="modal" class:modal-open={isOpen}>
  <div class="modal-overlay"></div>
  <div class="modal-content">
    <button class="modal-close" on:click={closeModal}>
      <svg class="btn-close" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18">
        <path d="M16.292 2.292l-1.584-1.584-6.708 6.708-6.708-6.708-1.584 1.584 6.708 6.708-6.708 6.708 1.584 1.584 6.708-6.708 6.708 6.708 1.584-1.584-6.708-6.708z"></path>
      </svg>
    </button>
    <p class="modal-title">About</p>
    <div class="modal-body">
      <a href={URL_REF_WAITBUTWHY} class="block">
        <img src={semtreeImg} class="modal-image" height="50%" width="50%" alt="waitbutwhy's neuralink semantic tree">
      </a>
      <blockquote class="modal-quote">
        <p>
          It is important to view knowledge as a sort of semantic tree. Make sure you understand the fundamental principles, i.e., the trunk and big branches before you get into the leaves/details or there is nothing for them to hang on to.
        </p>
        <cite>
          ~ <a href={URL_REF_R_MUSK_TREE}>Elon Musk</a>
        </cite>
      </blockquote>
      <p class="modal-text">
        Text output is formatted in markdown, which can be particularly useful for markdown-based PKMs like <a href={URL_VSCODE_PLUGIN}>vscode-tendr</a>.
      </p>
      <p class="modal-text">
        A <a href={URL_REPO_WIKIBONSAI}>WikiBonsai</a> project;
        above image from <a href={URL_REF_WAITBUTWHY}>waitbutwhy</a>;
        mindmap courtesy of <a href={URL_REF_MARKMAP}>markmap</a>; 
        icons from <a href={URL_REF_ICONS8}>icons8</a>.
      </p>
    </div>
    <div class="modal-footer">
      <button class="modal-button" on:click={toggleModal}>
        Ok
      </button>
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

  .modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: 0;
    pointer-events: none;
    transition: opacity 0.3s ease;
  }

  .modal-open {
    opacity: 1;
    pointer-events: auto;
  }

  .modal-content {
    background-color: var(--background-color);
    padding: 1.5rem;
    border-radius: 0.5rem;
    position: relative;
    max-width: 90%;
    max-height: 90%;
    overflow-y: auto;
  }

  .modal-close {
    position: absolute;
    top: 1rem;
    left: 1rem;
    background-color: transparent;
    border: none;
    cursor: pointer;
  }

  .modal-title {
    text-align: center;
    font-size: 1.5rem;
    font-weight: bold;
    margin-bottom: 1rem;
  }

  .modal-body {
    margin-bottom: 1rem;
  }

  .modal-image {
    display: block;
    margin: 0 auto;
  }

  .modal-quote {
    border-left: 0.25em solid var(--accent-color-light);
    padding-left: 3rem;
    margin: 1rem 1.5rem;
    position: relative;
  }

  .modal-quote::before {
    color: var(--accent-color-light);
    font-family: 'Special Elite', cursive;
    font-size: 50px;
    content: '"';
    position: absolute;
    top: -1rem;
    left: 0.5rem;
  }

  .modal-quote p {
    margin: 0.75em 0;
  }

  .modal-quote cite {
    font-style: italic;
  }

  .modal-text {
    font-size: 0.9rem;
    margin-top: 0.5rem;
  }

  .modal-footer {
    text-align: center;
  }

  .modal-button {
    background-color: var(--hover-color);
    color: var(--text-color);
    padding: 0.5rem 1rem;
    border: none;
    border-radius: 0.25rem;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }

  .modal-button:hover {
    background-color: var(--hover-color);
  }
</style>
