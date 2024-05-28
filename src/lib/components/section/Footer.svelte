<script lang='ts'>
  import {
    // URL_REPO_WIKIBONSAI,
    // URL_REPO_VSCODE,
    // URL_REPO_TENDR,
    // URL_REPO_ASTRO,
    // URL_REPO_ELEVENTY,
    // URL_REPO_JEKYLL,
    URL_DOCS_CITE,
    URL_DOCS_DESIGN,
    URL_DOCS_PHILOSOPHY,
    URL_DOCS_USE,
    URL_SOCIAL_GITHUB,
    URL_SOCIAL_X,
  } from '$lib/util/const';

  import { theme } from '$lib/util/store';
  import Logo from '$lib/components/element/Logo.svelte';

  $: logoGitHub = `/img/social/github-mark-${$theme}.svg`;
  $: logoX = `/img/social/x-${$theme}.png`;
</script>

<footer class="footer">
  <div class="footer-content">
    <div class="footer-column">
      <Logo size={'small'} wTxt={true}></Logo>
      <div class="connect-container">
        <div class="social-links">
          <a href={URL_SOCIAL_GITHUB} class="social-link img-btn" aria-label="GitHub">
            <img src={logoGitHub} alt="GitHub" style="height:20px;width:20px;">
          </a>
          <a href={URL_SOCIAL_X} class="social-link img-btn" aria-label="X">
            <img src={logoX} alt="X" style="height:20px;width:20px;">
          </a>
        </div>
      </div>
    </div>
    <div class="footer-column links">
      <!-- <div class="footer-column">
        <span class="footer-title">Projects</span>
        <a href={URL_REPO_WIKIBONSAI}>WikiBonsai</a>
        <a href={URL_REPO_VSCODE}>vscode-wikibonsai</a>
        <a href={URL_REPO_TENDR}>tendr-cli</a>
        <a href={URL_REPO_ASTRO}>astro-wikibonsai</a>
        <a href={URL_REPO_ELEVENTY}>eleventy-wikibonsai</a>
        <a href={URL_REPO_JEKYLL}>jekyll-wikibonsai</a>
      </div> -->
      <div class="footer-column">
        <span class="footer-title">How To</span>
        <a href={URL_DOCS_USE}>Getting Started</a>
      </div>
      <div class="footer-column">
        <span class="footer-title">About</span>
        <a href={URL_DOCS_PHILOSOPHY}>Philosophy</a>
        <a href={URL_DOCS_DESIGN}>Design</a>
        <a href={URL_DOCS_CITE}>Influences</a>
      </div>
    </div>
  </div>
  <div class="copyright">
    © 2024 WikiBonsai
  </div>
</footer>

<style>
  .connect-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1rem;
  }

  .copyright {
    color: var(--accent-text-color);
    width: 100%;
    font-size: 0.75rem;
    /* small */
    text-align: center;
  }

  .footer {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    z-index: 2;
    padding: 1rem 0;
  }

  .footer-column {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 1rem;
    padding: 1rem 1.5rem;
  }

  .footer-column a {
    text-decoration: none;
    color: var(--text-color);
    margin-bottom: 0;
    padding: 0.25rem 0;
  }

  .footer-column a:hover {
    color: var(--hover-color);
  }

  .footer-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    /* small */
    flex-direction: column-reverse; /* stack logo at the bottom on small screens */
  }

  .footer-title {
    color: var(--accent-text-color);
    font-weight: 600;
    margin-bottom: 0.5rem;
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

  @media (min-width: 768px) {
    .copyright {
      justify-content: start;
      text-align: left;
      padding: 0 4rem;
    }

    .footer {
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      padding: 2rem 0;
    }

    .footer-column {
      align-items: flex-start;
      margin-bottom: 0;
    }

    .footer-content {
      flex-direction: row;
      justify-content: space-between;
      align-items: flex-start;
      padding: 0 2rem;
    }

    .links {
      flex-direction: row;
      justify-content: flex-end;
      width: 50%;
    }
  }
</style>