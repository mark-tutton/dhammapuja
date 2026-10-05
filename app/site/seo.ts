import type { MetaDescriptor } from "react-router";

export const SITE_NAME = "Dhammapuja";
export const SITE_ORIGIN = "https://dhammapuja.com";
export const SITE_DESCRIPTION = "A Karaoke for Chanting Dhamma in English and Pāli";

type Page = { title: string; description: string; path: string };

export function pageUrl(path: string): string {
  return SITE_ORIGIN + path;
}

// Head tags the old site got from jekyll-seo-tag: title, description,
// Open Graph, canonical link, schema.org data.
export function pageMeta({ title, description, path }: Page): MetaDescriptor[] {
  const url = pageUrl(path);
  const isSite = title === SITE_NAME;
  return [
    { title: isSite ? title : `${title} | ${SITE_NAME}` },
    { name: "description", content: description },
    { property: "og:title", content: title },
    { property: "og:locale", content: "en_US" },
    { property: "og:description", content: description },
    { property: "og:url", content: url },
    { property: "og:site_name", content: SITE_NAME },
    { tagName: "link", rel: "canonical", href: url },
    {
      "script:ld+json": {
        "@context": "https://schema.org",
        "@type": isSite ? "WebSite" : "WebPage",
        headline: title,
        ...(isSite ? { name: SITE_NAME } : {}),
        description,
        url,
      },
    },
  ];
}
