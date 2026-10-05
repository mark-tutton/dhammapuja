import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it } from "vitest";
import { ChantLines } from "./ChantLines";
import { parseChant } from "./parse";

const html = (source: string, activeIndex: number | null = null) =>
  renderToStaticMarkup(
    <ChantLines lines={parseChant(source)} activeIndex={activeIndex} onSeek={() => {}} />,
  );

describe("ChantLines", () => {
  it("wraps lines in the display list", () => {
    expect(html("")).toBe('<ul class="display"></ul>');
  });

  it("renders a heading at its depth", () => {
    expect(html("#### Homage")).toBe('<ul class="display"><li><h4>Homage</h4></li></ul>');
  });

  it("renders pali, english and response lines with their classes", () => {
    expect(html("a")).toContain('<p class="pali flow-text">a</p>');
    expect(html("> a")).toContain('<p class="en flow-text">a</p>');
    expect(html(">> a")).toContain('<p class="en stud flow-text">a</p>');
  });

  it("renders a divider", () => {
    expect(html("---")).toBe('<ul class="display"><li><hr/></li></ul>');
  });

  it("shows the time before a timed line, and none on an untimed one", () => {
    expect(html("[01:07.5] a")).toBe(
      '<ul class="display"><li><div class="time">1:07.5</div><p class="pali flow-text">a</p></li></ul>',
    );
    expect(html("a")).not.toContain('class="time"');
  });

  it("renders tone marks in line text", () => {
    expect(html("^a")).toContain('<span class="t">a');
  });

  it("highlights only the active line", () => {
    const out = html("a\nb\nc", 1);
    expect(out).toBe(
      '<ul class="display">' +
        '<li><p class="pali flow-text">a</p></li>' +
        '<li class="highlight"><p class="pali flow-text">b</p></li>' +
        '<li><p class="pali flow-text">c</p></li>' +
        "</ul>",
    );
  });
});
