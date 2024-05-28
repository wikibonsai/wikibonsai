<script lang='ts'>
  import { resultMkdn } from '$lib/util/store';
  import AbtBtn from '$lib/components/element/AbtBtn.svelte';
  import CpyBtn from '$lib/components/element/CpyBtn.svelte';
  import MkdnFrmtBtn from '$lib/components/element/MkdnFrmtBtn.svelte';
  import RsltFrmtBtn from '$lib/components/element/RsltFrmtBtn.svelte';
</script>

<div class="flex justify-end items-center mb-4">
  <AbtBtn></AbtBtn>
  <MkdnFrmtBtn></MkdnFrmtBtn>
  <RsltFrmtBtn></RsltFrmtBtn>
  <CpyBtn markdown={$resultMkdn.all}></CpyBtn>
</div>
