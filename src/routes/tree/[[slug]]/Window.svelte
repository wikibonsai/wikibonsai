<script lang="ts">
  import { URL_GERMINATOR } from '$lib/util/const';

  let isVisible: boolean = false;
  let url: string = '';
  let title: string = '';

  function handleLinkClick(event: MouseEvent) {
    const link: HTMLAnchorElement | null = (event.target as HTMLElement).closest('a');
    if (!link) return;
    const currentOrigin: string = window.location.origin;
    const linkOrigin: string = new URL(link.href).origin;
    // if external link, open in iframe
    if ((link instanceof HTMLAnchorElement)
      && (linkOrigin !== currentOrigin)
      && (link.href !== URL_GERMINATOR)
    ) {
      event.preventDefault();
      url = link.href;
      title = link.text;
      isVisible = true;
    }
  }

  function closePopover() {
    isVisible = false;
    url = '';
  }
</script>

<svelte:window on:click={handleLinkClick} />

{#if isVisible}
  <div class="popover" on:click|stopPropagation>
    <div class="window-header invext">
      <!-- close / title -->
      <button class="modal-close" on:click={closePopover}>
        <svg class="btn-close" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18">
          <path d="M16.292 2.292l-1.584-1.584-6.708 6.708-6.708-6.708-1.584 1.584 6.708 6.708-6.708 6.708 1.584 1.584 6.708-6.708 6.708 6.708 1.584-1.584-6.708-6.708z"></path>
        </svg>
      </button>
      <span class="title"><a href={url}>{title}</a></span>
    </div>
    <!-- content -->
    <iframe src={url} title="Website Popover" />
  </div>
{/if}

<style>
  iframe {
    border: none;
    border-radius: 10px;
    /* small */
    width: 100%;
    height: 100%;
  }

  .popover {
    position: fixed;
    z-index: 1000;
    background-color: var(--accent-color-light);
    border-radius: 10px;
    padding: 10px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    /* small */
    bottom: 10px;
    left: 10px;
    width: 95%;
    height: 50vh;
  }

  .title {
    flex-grow: 1;
    text-align: end;
    padding-right: 5px;
  }

  .title::after {
    color: var(--external-link-color);
    font-size: 0.5rem;
    content: ' ↗';
    vertical-align: super;
    margin-left: 0.2rem;
  }

  .window-header {
    display: flex;
    align-items: center;
    padding-bottom: 10px;
  }

  @media (min-width: 768px) {
    iframe {
      width: 100%;
      height: 100%;
    }

    .popover {
      width: 50vw;
      height: 85vh;
      bottom: 20px;
      left: 20px;
    }
  }
</style>
