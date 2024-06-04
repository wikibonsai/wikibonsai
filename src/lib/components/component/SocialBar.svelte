<script lang='ts'>
  import { URL_SOCIAL_GITHUB, URL_SOCIAL_X } from '$lib/util/const';
  import { theme } from '$lib/util/store';

  $: logoGitHub = `/img/social/github-mark-${$theme}.svg`;
  $: logoX = `/img/social/x-${$theme}.png`;
</script>

<div class="social-bar-container">
  <div class="social-links">
    <a href={URL_SOCIAL_GITHUB} class="social-link img-btn" aria-label="GitHub">
      <img src={logoGitHub} class="social-icon" alt="GitHub">
    </a>
    <a href={URL_SOCIAL_X} class="social-link img-btn" aria-label="X">
      <img src={logoX} class="social-icon" alt="X">
    </a>
  </div>
</div>

<style>
  .social-bar-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1rem;
  }

  .social-icon {
    height: 20px;
    width: 20px;
  }

  .social-link {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0.5rem 0;
  }

  .social-link img {
    height: 20px;
    width: 20px;
  }

  .social-links {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    margin-bottom: 1rem;
  }
</style>
