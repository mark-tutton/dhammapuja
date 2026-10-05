import { describe, expect, it } from "vitest";
import { parseChant, parseLine } from "./parse";

describe("parseLine", () => {
  it("reads one space after the timestamp as pali", () => {
    expect(parseLine("    [00:02.0] (Yo so) bhagavā")).toEqual({
      kind: "pali",
      time: 2,
      text: "(Yo so) bhagavā",
    });
  });

  it("reads two or more spaces after the timestamp as english", () => {
    expect(parseLine("    [00:12.5]   To the Blessed One")).toEqual({
      kind: "english",
      time: 12.5,
      text: "To the Blessed One",
    });
    expect(parseLine("[00:12.5]  To the Blessed One")?.kind).toBe("english");
  });

  it("reads no space after the timestamp as pali", () => {
    expect(parseLine("[01:00.0]Namo tassa")).toEqual({
      kind: "pali",
      time: 60,
      text: "Namo tassa",
    });
  });

  it("reads leading hashes as heading depth", () => {
    expect(parseLine("    [00:00.8] #### Dedication of Offerings")).toEqual({
      kind: "heading",
      depth: 4,
      time: 0.8,
      text: "Dedication of Offerings",
    });
    expect(parseLine("###Morning Puja")).toEqual({
      kind: "heading",
      depth: 3,
      time: null,
      text: "Morning Puja",
    });
  });

  it("treats hashes with no title as plain text", () => {
    expect(parseLine("[00:01.0] #")).toEqual({ kind: "pali", time: 1, text: "#" });
  });

  it("keeps lines without a timestamp, time null, as pali", () => {
    expect(parseLine("      <hr />")).toEqual({
      kind: "pali",
      time: null,
      text: "<hr />",
    });
  });

  it("gives null time for an unreadable timestamp", () => {
    expect(parseLine("[soon] Namo tassa")).toEqual({
      kind: "pali",
      time: null,
      text: "Namo tassa",
    });
  });

  it("trims trailing whitespace", () => {
    expect(parseLine("[00:01.0] Namo tassa  \r")?.text).toBe("Namo tassa");
  });

  it("leaves tone marks, underscores and html untouched", () => {
    expect(parseLine("[00:01.0] S^aṅghaṃ _n`amāmi_ <i>x</i>")?.text).toBe(
      "S^aṅghaṃ _n`amāmi_ <i>x</i>",
    );
  });

  it("returns null for blank lines", () => {
    expect(parseLine("")).toBeNull();
    expect(parseLine("     ")).toBeNull();
  });
});

describe("parseChant", () => {
  it("parses each line in order and skips blanks", () => {
    const source = [
      "",
      "    [00:00.0] ### Morning Puja",
      "      <hr />",
      "",
      "    [00:02.0] Namo tassa",
      "    [00:12.5]   Homage to him",
      "    ",
    ].join("\n");

    expect(parseChant(source)).toEqual([
      { kind: "heading", depth: 3, time: 0, text: "Morning Puja" },
      { kind: "pali", time: null, text: "<hr />" },
      { kind: "pali", time: 2, text: "Namo tassa" },
      { kind: "english", time: 12.5, text: "Homage to him" },
    ]);
  });

  it("handles windows line endings", () => {
    expect(parseChant("[00:01.0] a\r\n[00:02.0] b")).toEqual([
      { kind: "pali", time: 1, text: "a" },
      { kind: "pali", time: 2, text: "b" },
    ]);
  });

  it("returns an empty list for empty input", () => {
    expect(parseChant("")).toEqual([]);
  });
});
