import { describe, expect, it } from "vitest";
import { underline, vocalize } from "./markup";

const tone = (char: string, dir: string) =>
  `<span class="t">${char}<span><span class="${dir}"></span></span></span>`;

describe("vocalize", () => {
  it("marks the letter after ^ as rising", () => {
    expect(vocalize("S^aṅghaṃ")).toBe(`S${tone("a", "u")}ṅghaṃ`);
  });

  it("marks the letter after ` as falling", () => {
    expect(vocalize("bh`agavā")).toBe(`bh${tone("a", "d")}gavā`);
  });

  it("doubles the direction for a repeated mark", () => {
    expect(vocalize("b``ow")).toBe(`b${tone("o", "dd")}w`);
    expect(vocalize("^^a")).toBe(tone("a", "uu"));
  });

  it("handles several marks in one line", () => {
    expect(vocalize("^a `b")).toBe(`${tone("a", "u")} ${tone("b", "d")}`);
  });

  it("leaves unmarked text alone", () => {
    expect(vocalize("Namo tassa")).toBe("Namo tassa");
  });
});

describe("underline", () => {
  it("wraps text between underscores", () => {
    expect(underline("a _b c_ d")).toBe('a <span class="un">b c</span> d');
  });

  it("wraps each pair separately", () => {
    expect(underline("_a_ and _b_")).toBe(
      '<span class="un">a</span> and <span class="un">b</span>',
    );
  });

  it("leaves a lone underscore alone", () => {
    expect(underline("a_b")).toBe("a_b");
  });
});
