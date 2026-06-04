<script lang='ts'>
  import Footer from '$lib/components/section/Footer.svelte';
  import Header from '$lib/components/section/Header.svelte';

  let formSubmitted = false;
</script>

<Header />
<main class="main-content">
  <section class="description">
    <h1 class="description-title">Cultivate Your Knowledge</h1>
    <p class="description-lede">
      Your team's knowledge is probably scattered across docs, wikis, and chat threads, which makes it hard for people to navigate and expensive for AI agents to use well.
    </p>
    <p class="description-body">
      We help organizations structure their knowledge so it's findable by humans, parseable by machines, and durable over time. The same architecture that makes your docs useful to a new hire also makes your organizational knowledge transparent to AI agents.
    </p>
    <p class="description-body">
      Your docs are hard to navigate and your AI tools return garbage for the same reason: unstructured knowledge. We help you organize it once, in plain text, so your team can find what they need and your AI agents can actually use it. No vendor lock-in, no proprietary formats.
    </p>
    <p class="description-body">
      Start with a free discovery call. We'll look at what you have, what's broken, and whether we can help.
    </p>
  </section>

  <section class="contact">
    {#if formSubmitted}
      <div class="form-success">
        <h2>Thanks for reaching out!</h2>
        <p>I'll get back to you soon.</p>
      </div>
    {:else}
      <h2 class="contact-title">Get in Touch</h2>
      <p class="contact-subtitle">Schedule a free discovery call, or describe what you're looking for.</p>
      <form
        name="consult"
        method="POST"
        data-netlify="true"
        netlify-honeypot="bot-field"
        on:submit|preventDefault={() => {
          const form = document.querySelector('form[name="consult"]');
          if (!form) return;
          const formData = new FormData(form);
          fetch('/', {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: new URLSearchParams(formData).toString(),
          })
          .then(() => { formSubmitted = true; })
          .catch((err) => alert('Something went wrong. Try DM on X instead.'));
        }}
      >
        <input type="hidden" name="form-name" value="consult" />
        <!-- honeypot: hidden from humans, catches bots -->
        <p class="honey" aria-hidden="true">
          <label>Don't fill this out: <input name="bot-field" tabindex="-1" autocomplete="off" /></label>
        </p>
        <div class="form-group">
          <label for="name">Name</label>
          <input type="text" id="name" name="name" required placeholder="Your name" />
        </div>
        <div class="form-group">
          <label for="email">Email</label>
          <input type="email" id="email" name="email" required placeholder="you@example.com" />
        </div>
        <div class="form-group">
          <label for="interest">I'm interested in...</label>
          <select id="interest" name="interest">
            <option value="discovery">Free discovery call</option>
            <option value="knowledge-arch">Knowledge architecture</option>
            <option value="other">Something else</option>
          </select>
        </div>
        <div class="form-group">
          <label for="message">Message</label>
          <textarea id="message" name="message" rows="4" placeholder="Tell me a bit about your situation..."></textarea>
        </div>
        <div class="form-actions">
          <button type="submit" class="btn">Send</button>
        </div>
      </form>
    {/if}
  </section>
</main>
<Footer />

<style>
  .description {
    padding: 1rem;
  }

  .description-title {
    font-weight: bold;
    margin-bottom: 1rem;
    font-size: 2rem;
    line-height: 1.2;
  }

  .description-lede {
    font-size: 1.3rem;
    margin-bottom: 1.5rem;
    opacity: 0.85;
  }

  .description-body {
    font-size: 1.1rem;
    margin-bottom: 1.5rem;
    line-height: 1.6;
  }

  .main-content {
    padding: 1rem;
  }

  /* contact form */

  .contact {
    padding: 1rem;
    margin-top: 1rem;
  }

  .contact-title {
    font-weight: bold;
    margin-bottom: 0.5rem;
    font-size: 1.75rem;
  }

  .contact-subtitle {
    font-size: 1.1rem;
    margin-bottom: 1.5rem;
    opacity: 0.8;
  }

  .form-group {
    display: flex;
    flex-direction: column;
    margin-bottom: 1rem;
  }

  .form-group label {
    font-size: 0.95rem;
    font-weight: 600;
    margin-bottom: 0.35rem;
  }

  .form-group input,
  .form-group select,
  .form-group textarea {
    padding: 0.6rem 0.75rem;
    border: 1px solid var(--border-color, #444);
    border-radius: 0.5rem;
    background: var(--bg-color-secondary, rgba(255,255,255,0.05));
    color: inherit;
    font-size: 1rem;
    font-family: inherit;
    resize: vertical;
  }

  .form-group input:focus,
  .form-group select:focus,
  .form-group textarea:focus {
    outline: none;
    border-color: var(--btn-color, #0f766e);
    box-shadow: 0 0 0 2px rgba(15, 118, 110, 0.25);
  }

  .form-actions {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-top: 0.5rem;
  }

  /* honeypot: hide from humans */
  .honey {
    position: absolute;
    left: -9999px;
    overflow: hidden;
    height: 0;
  }

  .form-success {
    padding: 2rem;
    text-align: center;
  }

  .form-success h2 {
    margin-bottom: 0.5rem;
  }

  @media (min-width: 768px) {

    .description {
      padding: 3rem 2rem;
    }

    .description-title {
      font-size: 2.5rem;
    }

    .description-lede {
      font-size: 1.4rem;
    }

    .contact {
      padding: 0 2rem 3rem;
    }

    .main-content {
      margin: auto;
      max-width: 1200px;
    }

  }
</style>
