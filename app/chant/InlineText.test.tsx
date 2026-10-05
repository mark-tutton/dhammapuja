import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it } from "vitest";
import { InlineText } from "./InlineText";
import { parseInline } from "./inline";

const html = (text: string) => renderToStaticMarkup(<InlineText segments={parseInline(text)} />);

describe("InlineText", () => {
  it("renders plain text as is", () => {
    expect(html("Namo tassa")).toBe("Namo tassa");
  });

  it("escapes html in text", () => {
    expect(html("a <b> c")).toBe("a &lt;b&gt; c");
  });

  it("renders tone marks with the legacy class names", () => {
    expect(html("^a")).toBe('<span class="t">a<span><span class="u"></span></span></span>');
    expect(html("`a")).toBe('<span class="t">a<span><span class="d"></span></span></span>');
    expect(html("^^a")).toBe('<span class="t">a<span><span class="uu"></span></span></span>');
    expect(html("``a")).toBe('<span class="t">a<span><span class="dd"></span></span></span>');
  });

  it("renders underline, with marks inside it", () => {
    expect(html("_`all_ x")).toBe(
      '<span class="un"><span class="t">a<span><span class="d"></span></span></span>ll</span> x',
    );
  });
});
