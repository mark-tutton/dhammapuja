// Ported from legacy/app/_assets/_scripts/modules/chanting.js.
import { humanToTime } from "./time";

export type ChantLine =
  | { kind: "heading"; depth: number; text: string; time: number | null }
  | { kind: "pali" | "english"; text: string; time: number | null };

// Optional [timestamp], gap, then text up to last non-space character.
const LINE = /^\s*(?:\[(.+?)\])?(\s*)(.*\S)\s*$/;
const HEADING = /^(#+)\s*(.+)$/;

// Gap after timestamp picks language: two or more spaces english, else pali.
// Text returned raw: tone marks, underscores and html left for the renderer.
// Blank line gives null. Legacy rendered an empty paragraph for those.
export function parseLine(line: string): ChantLine | null {
  const match = line.match(LINE);
  if (!match) return null;
  const [, stamp, gap, body] = match;
  const time = humanToTime(stamp);
  const heading = body.match(HEADING);
  if (heading) {
    return { kind: "heading", depth: heading[1].length, text: heading[2], time };
  }
  return { kind: gap.length > 1 ? "english" : "pali", text: body, time };
}

export function parseChant(source: string): ChantLine[] {
  return source
    .split("\n")
    .map(parseLine)
    .filter((line) => line !== null);
}
