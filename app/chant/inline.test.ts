import { describe, expect, it } from "vitest";
import { type Inline, parseInline } from "./inline";

const tone = (char: string, direction: "up" | "down", double = false): Inline => ({
  type: "tone",
  char,
  direction,
  double,
});
const underline = (...children: Inline[]): Inline => ({ type: "underline", children });

describe("parseInline", () => {
  it("returns plain text as one string", () => {
    expect(parseInline("Namo tassa")).toEqual(["Namo tassa"]);
  });

  it("returns nothing for empty text", () => {
    expect(parseInline("")).toEqual([]);
  });

  it("marks the character after ^ as rising", () => {
    expect(parseInline("S^aṅghaṃ")).toEqual(["S", tone("a", "up"), "ṅghaṃ"]);
  });

  it("marks the character after ` as falling", () => {
    expect(parseInline("bh`agavā")).toEqual(["bh", tone("a", "down"), "gavā"]);
  });

  it("doubles a repeated mark", () => {
    expect(parseInline("b``ow")).toEqual(["b", tone("o", "down", true), "w"]);
    expect(parseInline("^^a")).toEqual([tone("a", "up", true)]);
  });

  it("takes direction from the first mark", () => {
    expect(parseInline("^`a")).toEqual([tone("a", "up", true)]);
  });

  it("handles several marks in one line", () => {
    expect(parseInline("^a `b")).toEqual([tone("a", "up"), " ", tone("b", "down")]);
  });

  it("marks an accented letter", () => {
    expect(parseInline("s^ammā `ā")).toEqual(["s", tone("a", "up"), "mmā ", tone("ā", "down")]);
  });

  it("keeps a trailing mark with nothing after it as text", () => {
    expect(parseInline("a^")).toEqual(["a^"]);
  });

  it("wraps text between underscores", () => {
    expect(parseInline("a _b c_ d")).toEqual(["a ", underline("b c"), " d"]);
  });

  it("wraps each pair separately", () => {
    expect(parseInline("_a_ and _b_")).toEqual([underline("a"), " and ", underline("b")]);
  });

  it("keeps tone marks inside an underline", () => {
    expect(parseInline("_^all_ beings")).toEqual([underline(tone("a", "up"), "ll"), " beings"]);
  });

  it("keeps a lone underscore as text", () => {
    expect(parseInline("a_b")).toEqual(["a_b"]);
  });
});
