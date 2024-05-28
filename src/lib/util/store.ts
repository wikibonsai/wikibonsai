import type { Writable } from 'svelte/store';
import { writable } from 'svelte/store';

// colors

export const isDark: Writable<boolean> = writable(false);
export const theme: Writable<string> = writable('light');

// result

export const isMarkdown: Writable<boolean> = writable(true);
export const resultMkdn: Writable<Record<string, string>> = writable({
  all: '',
  ancestors: '',
  descendants: '',
  atom: '',
});
export const resultMkmp: Writable<SVGSVGElement | null> = writable(null);
