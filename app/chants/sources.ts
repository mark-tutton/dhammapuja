// Chant text files, loaded on demand so one chant's text does not ship with every page.
const files = import.meta.glob<string>("./**/*.txt", {
  query: "?raw",
  import: "default",
});

const toSlug = (path: string) => path.slice("./".length, -".txt".length);

export const sourceSlugs: readonly string[] = Object.keys(files).map(toSlug);

export function loadChantSource(slug: string): Promise<string> {
  const load = files[`./${slug}.txt`];
  if (!load) return Promise.reject(new Error(`No chant text for "${slug}"`));
  return load();
}
