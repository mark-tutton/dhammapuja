import { describe, expect, it } from "vitest";
import { parseChant } from "../chant/parse";
import { chants, findChant } from "./catalog";
import { indexRows } from "./index-rows";
import { loadChantSource, sourceSlugs } from "./sources";

describe("catalog", () => {
  it("has unique slugs", () => {
    const slugs = chants.map((chant) => chant.slug);
    expect(new Set(slugs).size).toBe(slugs.length);
  });

  it("has a text file for every chant, and no stray text files", () => {
    expect([...sourceSlugs].sort()).toEqual(chants.map((chant) => chant.slug).sort());
  });

  it("fills in every field", () => {
    for (const chant of chants) {
      expect(chant.title, chant.slug).not.toBe("");
      expect(chant.label, chant.slug).not.toBe("");
      expect(chant.indexTitle, chant.slug).not.toBe("");
      expect(chant.description, chant.slug).not.toBe("");
      expect(chant.audio, chant.slug).toMatch(/^\/assets\/audio\/[\w/-]+$/);
    }
  });

  it("finds a chant by slug", () => {
    expect(findChant("morning")?.title).toBe("Morning Puja");
    expect(findChant("nope")).toBeUndefined();
  });

  it("finds a chant by slug with a trailing slash, as urls have", () => {
    expect(findChant("blessings/metta-sutta-pali/")?.slug).toBe("blessings/metta-sutta-pali");
    expect(findChant("")).toBeUndefined();
    expect(findChant("/")).toBeUndefined();
  });
});

describe("indexRows", () => {
  const slugs = indexRows.flatMap((row) => row.groups.flatMap((group) => group.slugs));

  it("lists every listed chant exactly once, and no unlisted one", () => {
    const listed = chants.filter((chant) => chant.listed).map((chant) => chant.slug);
    expect([...slugs].sort()).toEqual([...listed].sort());
  });

  it("gives every group a heading", () => {
    for (const row of indexRows) {
      for (const group of row.groups) expect(group.heading).not.toBe("");
    }
  });
});

describe("loadChantSource", () => {
  it("rejects an unknown slug", async () => {
    await expect(loadChantSource("nope")).rejects.toThrow("nope");
  });
});

describe.each(chants.map((chant) => chant.slug))("chant text %s", (slug) => {
  it("opens with a top heading", async () => {
    const [first] = parseChant(await loadChantSource(slug));
    expect(first).toMatchObject({ kind: "heading", depth: 3 });
  });

  it("has timestamps, in order", async () => {
    const times = parseChant(await loadChantSource(slug)).flatMap((line) =>
      line.kind !== "divider" && line.time !== null ? [line.time] : [],
    );
    expect(times.length).toBeGreaterThan(0);
    expect(times).toEqual([...times].sort((a, b) => a - b));
  });

  it("has no html left in it", async () => {
    for (const line of parseChant(await loadChantSource(slug))) {
      if (line.kind !== "divider") expect(line.text).not.toMatch(/[<>]/);
    }
  });
});
