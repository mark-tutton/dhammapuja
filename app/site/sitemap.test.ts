import { describe, expect, it } from "vitest";
import { sitemapXml } from "./sitemap";

describe("sitemapXml", () => {
  const xml = sitemapXml(["/", "/chanting/morning/"]);

  it("is a sitemap document", () => {
    expect(xml).toMatch(/^<\?xml version="1\.0" encoding="UTF-8"\?>\n<urlset xmlns="http:\/\/www\.sitemaps\.org\/schemas\/sitemap\/0\.9">/);
    expect(xml.trimEnd()).toMatch(/<\/urlset>$/);
  });

  it("lists each path as a full address, in order", () => {
    expect(xml.match(/<loc>[^<]+<\/loc>/g)).toEqual([
      "<loc>https://dhammapuja.com/</loc>",
      "<loc>https://dhammapuja.com/chanting/morning/</loc>",
    ]);
  });

  it("escapes characters xml reserves", () => {
    expect(sitemapXml(["/a&b/"])).toContain("<loc>https://dhammapuja.com/a&amp;b/</loc>");
  });
});
