// Ported from legacy/app/_assets/_scripts/modules/chanting.js.
import { humanToTime } from "./time";

export type ChantLine =
  | { kind: "divider" }
  | { kind: "heading"; depth: number; text: string; time: number | null }
  | { kind: "pali" | "english" | "response"; text: string; time: number | null };

// Optional [timestamp], gap, then text up to last non-space character.
const LINE = /^\s*(?:\[(.+?)\])?(\s*)(.*\S)\s*$/;
const HEADING = /^(#+)\s*(.+)$/;
const DIVIDER = /^-{3,}$/;
const MARKED = /^(>{1,2})\s*(.+)$/;

// Line forms, first match wins:
//   ---        divider
//   ## text    heading, depth = number of hashes
//   > text     english
//   >> text    response: pali repeated back after the leader
// Otherwise gap after timestamp picks language: two or more spaces english, else pali.
// Text returned raw: tone marks and underscores left for the renderer.
// Blank line gives null. Legacy rendered an empty paragraph for those.
export function parseLine(line: string): ChantLine | null {
  const match = line.match(LINE);
  if (!match) return null;
  const [, stamp, gap, body] = match;
  if (DIVIDER.test(body)) return { kind: "divider" };
  const time = humanToTime(stamp);
  const heading = body.match(HEADING);
  if (heading) {
    return { kind: "heading", depth: heading[1].length, text: heading[2], time };
  }
  const marked = body.match(MARKED);
  if (marked) {
    return { kind: marked[1] === ">>" ? "response" : "english", text: marked[2], time };
  }
  return { kind: gap.length > 1 ? "english" : "pali", text: body, time };
}

export function parseChant(source: string): ChantLine[] {
  return source
    .split("\n")
    .map(parseLine)
    .filter((line) => line !== null);
}
