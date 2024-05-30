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
  <InfoIcon class="w-6 h-6"></InfoIcon>
</button>

<AbtModal bind:isOpen={isAbtMdlOpen}></AbtModal>
