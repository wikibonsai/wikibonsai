import type { Tree } from './$types';
import fs from 'fs';
import path from 'path';
import { browser } from '$app/environment';


// we require some server-side APIs to parse all metadata
// (not sure if this is actually doing anything...)
if (browser) {
  throw new Error(`trees can only be imported server-side`);
}

export const trees: Tree[] = Object.entries(import.meta.glob('/trees/**/*.md', { eager: true }))
                                   .map(([filepath, tree]) => {
                                     const fname: string = path.basename(filepath, '.md');
                                     const title: string = (fname === '_index') ? 'index' : filepath.split('/').slice(-1)[0].replace('.md', '');
                                     const slug: string =  (fname === '_index') ? '' : filepath.split('/').slice(-1)[0].replace('.md', '');
                                     const route: string = (fname === '_index') ? '/tree' : '/tree/' + slug;
                                     const markdown: string = fs.readFileSync(`./trees/${fname}.md`, 'utf-8');
                                     return {
                                       fname,
                                       title,
                                       markdown,
                                       slug,
                                       route,
                                     };
                                   });
