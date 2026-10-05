import { type Chant, chantPath } from "../chants/catalog";

const LIMIT = 10;

// Lower case, accents stripped: "Pāḷi" and "pali" compare equal.
const fold = (text: string) =>
  text
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase();

// Listed chants whose title or url contains every word of the query.
// Old site matched the query as one phrase, accents exact. This is looser.
export function searchChants(chants: readonly Chant[], query: string): Chant[] {
  const words = fold(query).split(/\s+/).filter(Boolean);
  if (words.length === 0) return [];
  return chants
    .filter((chant) => {
      if (!chant.listed) return false;
      const haystack = fold(`${chant.title} ${chantPath(chant)}`);
      return words.every((word) => haystack.includes(word));
    })
    .slice(0, LIMIT);
}
