<script lang='ts'>
  import { URL_DOCS_STD_BED, URL_SOCIAL_GITHUB } from '$lib/util/const';

  const ossImgSrc: string = '/img/logo/oss.svg';
</script>

<a class="oss-logo" href={URL_SOCIAL_GITHUB}>
  <img class="img-btn" src={ossImgSrc} alt="oss" />
</a>
<div class="oss-description">
  This project follows the Unix Philosophy: Modular by design, built to work across browser, desktop, mobile, and headset. The goal is to further the state of PKM as a whole by building on <a href={URL_DOCS_STD_BED}>"standardization bedrock."</a>
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
