<script lang='ts'>
  import { URL_DOCS_STD_BED, URL_SOCIAL_GITHUB } from '$lib/util/const';

  const ossImgSrc: string = '/img/logo/oss.svg';
</script>

<a class="oss-logo" href={URL_SOCIAL_GITHUB}>
  <img class="img-btn" src={ossImgSrc} alt="oss" />
</a>
<div class="oss-description">
  This project abides by the Unix Philosophy: Everything is modularized and implemented in such a way as to maximize re-use whether it be for the browser, desktop, mobile, or headset, in the hopes of benefitting the most users and developers across the digital ecosystem. It's about furthering the state of PKM as a whole by building atop <a href={URL_DOCS_STD_BED}>"standardization bedrock."</a>
</div>

<style>
  .oss-description {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    font-size: 1rem;
    padding: 2rem;
    /* text */
    font-size: 1.25rem;
    padding: 1rem;
    text-align: center;
  }

  .oss-logo {
    /* small */
    width: 25%;
    margin: 1rem;
  }

  @media (min-width: 768px) {
    .oss-logo {
      width: 100%;
      margin: 4rem;
    }
  }
</style>
