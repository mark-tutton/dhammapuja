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
    expect(parseLine("      Pūjā ca pūjanīyānaṁ")).toEqual({
      kind: "pali",
      time: null,
      text: "Pūjā ca pūjanīyānaṁ",
    });
  });

  it("reads > as english, with or without a timestamp", () => {
    expect(parseLine("    > May I be free from enmity")).toEqual({
      kind: "english",
      time: null,
      text: "May I be free from enmity",
    });
    expect(parseLine("[00:21.0] >May I be free")).toEqual({
      kind: "english",
      time: 21,
      text: "May I be free",
    });
  });

  it("reads >> as a response line", () => {
    expect(parseLine("[0:28.5] >> Namo tassa")).toEqual({
      kind: "response",
      time: 28.5,
      text: "Namo tassa",
    });
    expect(parseLine(">> Namo tassa")).toEqual({
      kind: "response",
      time: null,
      text: "Namo tassa",
    });
  });

  it("treats > with nothing after it as plain text", () => {
    expect(parseLine("[00:01.0] >")).toEqual({ kind: "pali", time: 1, text: ">" });
  });

  it("reads three or more dashes as a divider", () => {
    expect(parseLine("---")).toEqual({ kind: "divider" });
    expect(parseLine("    -----  ")).toEqual({ kind: "divider" });
    expect(parseLine("[00:01.0] ---")).toEqual({ kind: "divider" });
  });

  it("does not read dashes with other text as a divider", () => {
    expect(parseLine("--")?.kind).toBe("pali");
    expect(parseLine("--- more")?.kind).toBe("pali");
  });

  it("gives null time for an unreadable timestamp", () => {
    expect(parseLine("[soon] Namo tassa")).toEqual({
      kind: "pali",
      time: null,
      text: "Namo tassa",
    });
  });

  it("trims trailing whitespace", () => {
    expect(parseLine("[00:01.0] Namo tassa  \r")).toMatchObject({ text: "Namo tassa" });
  });

  it("leaves tone marks and underscores untouched", () => {
    expect(parseLine("[00:01.0] S^aṅghaṃ _n`amāmi_")).toMatchObject({
      text: "S^aṅghaṃ _n`amāmi_",
    });
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
      "    ---",
      "",
      "    [00:02.0] Namo tassa",
      "    [00:12.5]   Homage to him",
      "    ",
    ].join("\n");

    expect(parseChant(source)).toEqual([
      { kind: "heading", depth: 3, time: 0, text: "Morning Puja" },
      { kind: "divider" },
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
