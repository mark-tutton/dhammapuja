import { describe, expect, it } from "vitest";
import { chants } from "../chants/catalog";
import { searchChants } from "./search";

const titles = (query: string) => searchChants(chants, query).map((chant) => chant.title);

describe("searchChants", () => {
  it("finds chants whose title contains the text, in catalog order", () => {
    expect(titles("sutta")).toEqual([
      "Metta Sutta (Pali)",
      "Metta Sutta (Eng.)",
      "Dhammacakkappavattana Sutta",
    ]);
  });

  it("ignores case and surrounding spaces", () => {
    expect(titles("  MORNING ")).toEqual(["Morning Puja"]);
  });

  it("needs every word, in any order", () => {
    expect(titles("puja morning")).toEqual(["Morning Puja"]);
    expect(titles("morning sutta")).toEqual([]);
  });

  it("also matches the url path", () => {
    expect(titles("parittas")).toEqual(["Invitation to Devas", "Namo Tassa", "The Three Refuges"]);
  });

  it("treats accented and plain letters alike", () => {
    expect(titles("pāḷi")).toEqual(titles("pali"));
    expect(titles("pali").length).toBeGreaterThan(0);
  });

  it("returns nothing for an empty query", () => {
    expect(titles("")).toEqual([]);
    expect(titles("   ")).toEqual([]);
  });

  it("returns nothing when no chant matches", () => {
    expect(titles("zzz")).toEqual([]);
  });

  it("leaves out unlisted chants", () => {
    expect(titles("mangala")).toEqual([]);
  });

  it("returns at most ten", () => {
    expect(searchChants(chants, "a")).toHaveLength(10);
  });
});
