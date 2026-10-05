import type { Chant } from "../chants/catalog";

const folder = (chant: Chant) => (chant.slug.includes("/") ? chant.slug.split("/")[0] : "");

// Listed chants in catalog order, split wherever the folder changes.
// Menu draws a divider between groups.
export function menuGroups(chants: readonly Chant[]): Chant[][] {
  const groups: Chant[][] = [];
  for (const chant of chants) {
    if (!chant.listed) continue;
    const last = groups.at(-1);
    if (last && folder(last[0]) === folder(chant)) last.push(chant);
    else groups.push([chant]);
  }
  return groups;
}
