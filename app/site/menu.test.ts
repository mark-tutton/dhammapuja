import { describe, expect, it } from "vitest";
import { chants } from "../chants/catalog";
import { menuGroups } from "./menu";

const chant = (slug: string, listed = true) => ({
  slug,
  title: slug,
  label: slug,
  indexTitle: slug,
  description: slug,
  audio: "/assets/audio/x",
  listed,
});

describe("menuGroups", () => {
  it("groups neighbouring chants that share a folder", () => {
    const groups = menuGroups([chant("a"), chant("b"), chant("x/c"), chant("x/d"), chant("y/e")]);
    expect(groups.map((group) => group.map((item) => item.slug))).toEqual([
      ["a", "b"],
      ["x/c", "x/d"],
      ["y/e"],
    ]);
  });

  it("leaves out unlisted chants", () => {
    const groups = menuGroups([chant("a"), chant("x/hidden", false), chant("x/c")]);
    expect(groups.map((group) => group.map((item) => item.slug))).toEqual([["a"], ["x/c"]]);
  });

  it("returns nothing for no chants", () => {
    expect(menuGroups([])).toEqual([]);
  });

  it("splits the real catalog into the seven menu sections", () => {
    expect(menuGroups(chants).map((group) => group.length)).toEqual([3, 3, 9, 2, 3, 1, 1]);
  });
});
