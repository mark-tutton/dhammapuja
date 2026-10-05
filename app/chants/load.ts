import { type ChantLine, parseChant } from "../chant/parse";
import { type Chant, findChant } from "./catalog";
import { loadChantSource } from "./sources";

export type LoadedChant = { chant: Chant; lines: ChantLine[] };

// Slug as it appears in the url after /chanting/. Null if no such chant.
export async function loadChant(slug: string): Promise<LoadedChant | null> {
  const chant = findChant(slug.replace(/\/$/, ""));
  if (!chant) return null;
  return { chant, lines: parseChant(await loadChantSource(chant.slug)) };
}
