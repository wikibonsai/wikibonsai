<script lang='ts'>
  import AbtModal from "$lib/components/component/AbtModal.svelte";
  import InfoIcon from "../icons/InfoIcon.svelte";

  let isAbtMdlOpen: boolean = false;
  function toggleAbtMdl(): void {
    isAbtMdlOpen = !isAbtMdlOpen;
  }
</script>

<button id="aboutButton"
        class="util-btn"
        title="About"
        on:click={toggleAbtMdl}>
  <InfoIcon id="infoIcon" alt="About" class="btn-img-size" />
</button>

<AbtModal bind:isOpen={isAbtMdlOpen} />
