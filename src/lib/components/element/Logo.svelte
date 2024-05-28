<script lang='ts'>
  import { theme } from '$lib/util/store';

  // note: 'wTxt' is short for 'with text'
  export let wTxt: boolean = false;
  export let size: string = 'medium';
  $: logo = `/img/logo/wikibonsai-${$theme}.svg`;

  $: dimensions = {
    small: { width: '50px', height: '40px' },
    medium: { width: '75px', height: '60px' },
    large: { width: '100px', height: '80px' }
  }[size] || { width: '75px', height: '60px' }; // Default to medium if size is not recognized
</script>

<div class="logo-container">
  <a href="/">
    <img id="wikibonsai-logo"
        src={logo}
        style={`width: ${dimensions.width}; height: ${dimensions.height};`}
        alt="Logo" />
  </a>
  {#if wTxt}
    <div class="logo">WikiBonsai</div>
  {/if}
</div>

<style>
  .logo {
    font-size: 1.5rem;
  }

  .logo-container {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5em;
  }
</style>
