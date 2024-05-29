<script lang='ts'>
  import {
    URL_REPO_CAML,
    URL_REPO_SEMTREE,
    URL_REPO_TREEHOUZE,
    URL_REPO_WIKIREFS,
  } from '../lib/util/const';
  let hovered: boolean = false;
</script>

<div class="workflow-container" role="list">
  <div class="workflow"
       on:click="{() => window.location.href = URL_REPO_WIKIREFS}"
       on:mouseover="{() => hovered = 1}"
       on:mouseout="{() => hovered = 0}"
       on:focus="{() => hovered = 2}"
       on:blur="{() => hovered = 0}"
       role="listitem"
       tabindex="-1">
    <h2 class="workflow-title">Concept Webs</h2>
    <p class="workflow-description">Extend markdown with <code>[[wikirefs]]</code> for quick associative linking</p>
  </div>
  <div class="workflow"
       on:click="{() => window.location.href = URL_REPO_SEMTREE}"
       on:mouseover="{() => hovered = 2}"
       on:mouseout="{() => hovered = 0}"
       on:focus="{() => hovered = 2}"
       on:blur="{() => hovered = 0}"
       role="listitem"
       tabindex="-1">
    <h2 class="workflow-title">Semantic Trees</h2>
    <p class="workflow-description">Cultivate and train a unified knowledge bonsai across a collection of markdown files</p>
  </div>
  <div class="workflow"
       on:click="{() => window.location.href = URL_REPO_CAML}"
       on:mouseover="{() => hovered = 2}"
       on:mouseout="{() => hovered = 0}"
       on:focus="{() => hovered = 2}"
       on:blur="{() => hovered = 0}"
       role="listitem"
       tabindex="-1">
    <h2 class="workflow-title">Attribute Metadata</h2>
    <p class="workflow-description">Defines <code>:semantic::attributes</code> for clean, lean, yaml-like structured data</p>
  </div>
  <div class="workflow"
       on:click="{() => window.location.href = URL_REPO_TREEHOUZE}"
       on:mouseover="{() => hovered = 3}"
       on:mouseout="{() => hovered = 0}"
       on:focus="{() => hovered = 2}"
       on:blur="{() => hovered = 0}"
       role="listitem"
       tabindex="-1">
    <h2 class="workflow-title">Memory Palaces</h2>
    <p class="workflow-description">Experience and interact with a unified visual-spatial representation that emerges from the relationships formed across markdown notes</p>
  </div>
  <!-- #todo: germinator -->
  <!-- <div class="workflow"
       on:mouseover="{() => hovered = 4}"
       on:mouseout="{() => hovered = 0}"
       on:focus="{() => hovered = 2}"
       on:blur="{() => hovered = 0}"
       role="listitem"
       tabindex="-1">
    <h2 class="workflow-title">AI-Enabled</h2>
    <p class="workflow-description">Assisted concept analysis with LLMs</p>
  </div> -->
</div>

<style>
  .workflow-container {
    cursor: pointer;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
    padding: 2rem;
  }

  .workflow {
    /* workflow content */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    /* workflow */
    height: 150px;
    background-color: var(--background-color);
    border: 1px solid var(--accent-color-dark);
    border-radius: 8px;
    padding: 1rem;
    margin: 1rem;
    text-align: center;
    transition: background-color 0.3s ease;
    transition: color 0.3s ease; /* transition for hover */
    /* small */
    width: 100%;
  }

  .workflow:hover .workflow-title {
    color: var(--hover-color);
  }

  .workflow:hover, .workflow:focus {
    background-color: var(--accent-color-light); /* Tint color on hover/focus */
  }

  .workflow-title {
    color: var(--text-color);
    font-size: 1.25rem;
    font-weight: bold;
    margin-bottom: 0.5rem;
  }

  .workflow-description {
    color: var(--text-color);
    font-size: 1rem;
    margin-bottom: 1rem;
  }

  @media (min-width: 768px) {
    .workflow-section {
      justify-content: space-between;
    }

    .workflow {
      width: 45%; /* Adjust for two columns */
    }
  }
</style>