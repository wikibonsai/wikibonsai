<script lang='ts'>
  import {
    // URL_REPO_WIKIBONSAI,
    // URL_REPO_GERMINATOR,
    // URL_REPO_VSCODE,
    // URL_REPO_TENDR,
    // URL_REPO_ASTRO,
    // URL_REPO_ELEVENTY,
    // URL_REPO_JEKYLL,
    URL_DOCS_CITE,
    URL_DOCS_DESIGN,
    URL_DOCS_PHIL,
    URL_DOCS_USE,
  } from '$lib/util/const';

  import Logo from '$lib/components/element/Logo.svelte';
  import SocialBar from '$lib/components/component/SocialBar.svelte';
</script>

<footer class="footer">
  <div class="footer-content">
    <div class="footer-column">
      <Logo size={'small'} wTxt={true}></Logo>
      <SocialBar />
    </div>
    <div class="footer-column links">
      <!-- <div class="footer-column">
        <span class="footer-title">Projects</span>
        <a href={URL_REPO_WIKIBONSAI}>WikiBonsai</a>
        <a href={URL_REPO_GERMINATOR}>Germinator</a>
        <a href={URL_REPO_VSCODE}>vscode-tendr</a>
        <a href={URL_REPO_TENDR}>tendr-cli</a>
        <a href={URL_REPO_ASTRO}>astro-wikibonsai</a>
        <a href={URL_REPO_ELEVENTY}>eleventy-wikibonsai</a>
        <a href={URL_REPO_JEKYLL}>jekyll-wikibonsai</a>
      </div> -->
      <div class="footer-column">
        <span class="footer-title">How To</span>
        <a href={URL_DOCS_USE}>Get Started</a>
      </div>
      <div class="footer-column">
        <span class="footer-title">About</span>
        <a href={URL_DOCS_PHIL}>Philosophy</a>
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
    z-index: var(--footer-z);
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