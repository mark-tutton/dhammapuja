import { pageUrl } from "./seo";

const escapeXml = (text: string) =>
  text.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

// Old site got this from jekyll-sitemap. Written into the build by react-router.config.ts.
export function sitemapXml(paths: readonly string[]): string {
  const urls = paths.map((path) => `<url>\n<loc>${escapeXml(pageUrl(path))}</loc>\n</url>`);
  return [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    ...urls,
    "</urlset>",
    "",
  ].join("\n");
}
