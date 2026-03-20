<script lang='ts'>
  import { slugify } from '$lib/util/url';

  export let title: string;
  export let description: string = '';
  export let orientation: 'col' | 'row' = 'col';
  /** Optional right-side link (OpenClaw section-header pattern) */
  export let sectionLinkHref: string | undefined = undefined;
  export let sectionLinkLabel: string | undefined = undefined;
</script>

<section class="description">
  <div class="section-header">
    <h2 id={slugify(title)} class="section-title">
      <span class="section-accent" aria-hidden="true">⟩</span>
      <span class="section-title-text">{title}</span>
    </h2>
    {#if sectionLinkHref && sectionLinkLabel}
      <a href={sectionLinkHref} class="section-link">
        {sectionLinkLabel}
        <span class="section-link-arrow" aria-hidden="true">→</span>
      </a>
    {/if}
  </div>
  <div class="description-body"
       class:description-body-col={orientation === 'col'}
       class:description-body-row={orientation === 'row'}>
    {description}
    <slot />
  </div>
</section>

<style>
  .description {
    text-align: center;
    padding: 1rem;
  }

  .section-header {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    gap: 0.75rem 1rem;
    margin-bottom: 1.25rem;
    text-align: left;
  }

  .section-title {
    margin: 0;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 1.425rem;
    font-weight: 600;
    letter-spacing: -0.02em;
    line-height: 1.2;
    color: var(--text-color);
  }

  .section-accent {
    color: var(--link-color);
    font-weight: 700;
    user-select: none;
  }

  .section-link {
    font-size: 0.9375rem;
    font-weight: 500;
    color: var(--link-color);
    text-decoration: none;
    white-space: nowrap;
    transition: color 0.2s ease;
  }

  .section-link:hover {
    color: var(--hover-color);
  }

  .section-link-arrow {
    margin-left: 0.15em;
  }

  .description-body {
    height: 100%;
    display: flex;
    font-size: 1.5rem;
    margin-bottom: 1rem;
    text-align: left;
  }

  .description-body-col {
    flex-direction: column;
  }

  .description-body-row {
    justify-content: space-around;
    align-items: center;
    flex-direction: column;
  }

  @media (min-width: 768px) {
    .description {
      padding: 3rem 2rem;
    }

    .section-title {
      font-size: 1.5625rem;
    }

    .description-body-row {
      flex-direction: row;
    }
  }
</style>
