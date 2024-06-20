import type { Reroute } from '@sveltejs/kit';
import type { Tree } from '$lib/data/trees';
import { trees } from '$lib/data/trees';


export const reroute: Reroute = ({ url }) => {
  const translated: Record<string, string> = {};
  trees.map((tree: Tree) => {
    tree.concepts.forEach((concept: string) => {
      const conceptPath: string = `/tree/${concept}`;
      translated[conceptPath] = (tree.slug !== '') ? `/tree/${tree.slug}` : '/tree';
    });
  });
  if (Object.keys(translated).includes(url.pathname)) {
    return translated[url.pathname];
  }
  return null;
};
