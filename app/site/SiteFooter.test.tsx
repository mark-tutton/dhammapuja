import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it } from "vitest";
import { SiteFooter } from "./SiteFooter";

describe("SiteFooter", () => {
  const out = renderToStaticMarkup(<SiteFooter />);
  const link = (text: string) =>
    out.match(new RegExp(`<a [^>]*href="([^"]+)"[^>]*>${text}</a>`))?.[1];

  it("says what the site is", () => {
    expect(out).toContain("Dhammapuja is a tool for learning Theravadin chants.");
  });

  it("links to the project pages", () => {
    expect(link("Resources")).toContain("/wiki/Chanting-Resources");
    expect(link("Wiki")).toMatch(/\/wiki$/);
    expect(link("Credits")).toMatch(/\/wiki\/Credits$/);
    expect(link("GitHub")).toMatch(/github\.com\/[\w-]+\/dhammapuja$/);
    expect(link("Why Chant\\?")).toMatch(/\/wiki#why-chant$/);
  });

  it("links to the licence", () => {
    expect(link("GPL-3.0")).toBe("https://gnu.org/licenses/quick-guide-gplv3.html");
  });
});
