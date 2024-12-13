import { goto } from '$app/navigation';


export function goTo(url: string): () => void {
  // local url
  if (url.startsWith('/')) {
    return () => {
      console.debug('goto: ', url);
      goto(url);
    }
  // external url
  } else {
    console.debug('window.location.href: ', url);
    return () => window.location.href = url;
  }
}

export function slugify(text: string): string {
  // remove diacritics (accents) from the text
  const normalizedText = text.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  // replace non-word characters with hyphens
  const slug = normalizedText.replace(/\W+/g, '-').toLowerCase();
  // remove leading and trailing hyphens
  return slug.replace(/^-+|-+$/g, '');
}
