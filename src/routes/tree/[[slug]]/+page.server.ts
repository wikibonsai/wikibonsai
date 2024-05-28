import type { EntryGenerator, PageServerLoad, Tree } from './$types';
import { error } from '@sveltejs/kit';
import { trees } from '$lib/data/trees';


// note: need to explicitly tell svelte-kit to render tree pages (besides the index)
//       https://kit.svelte.dev/docs/page-options#entries
export const entries: EntryGenerator = () => {
  return trees.map((tree: Tree) => {
    return { slug: tree.slug };
  });
};

// ref:
//  - https://github.com/sveltejs/kit/issues/11745
//  - https://discord.com/channels/457912077277855764/1200506885707673750/1200506885707673750
export const load: PageServerLoad = async ({ params: { slug }}) => {
  const findSlug: string = (slug === undefined) ? '' : slug;
  const tree: Tree | undefined = trees.find((tree: Tree) => tree.slug === findSlug);
  // if page doesn't exist, 404
  if (tree === undefined) {
    throw error(404, 'Page not found');
  }
  return { tree };
};
