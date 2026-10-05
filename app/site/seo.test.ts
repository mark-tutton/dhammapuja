import { describe, expect, it } from "vitest";
import { pageMeta, pageUrl } from "./seo";

const find = (tags: ReturnType<typeof pageMeta>, key: string, value: string) =>
  tags.find((tag) => (tag as Record<string, unknown>)[key] === value) as
    | Record<string, unknown>
    | undefined;

describe("pageUrl", () => {
  it("puts the path on the site address", () => {
    expect(pageUrl("/")).toBe("https://dhammapuja.com/");
    expect(pageUrl("/chanting/morning/")).toBe("https://dhammapuja.com/chanting/morning/");
  });
});

describe("pageMeta", () => {
  const tags = pageMeta({
    title: "Morning Puja",
    description: "Karaoke for Chanting the Morning Puja",
    path: "/chanting/morning/",
  });

  it("adds the site name to the browser title", () => {
    expect(tags).toContainEqual({ title: "Morning Puja | Dhammapuja" });
  });

  it("does not repeat the site name when the page is the site", () => {
    const home = pageMeta({ title: "Dhammapuja", description: "x", path: "/" });
    expect(home).toContainEqual({ title: "Dhammapuja" });
  });

  it("describes the page for search engines and link previews", () => {
    expect(find(tags, "name", "description")?.content).toBe(
      "Karaoke for Chanting the Morning Puja",
    );
    expect(find(tags, "property", "og:title")?.content).toBe("Morning Puja");
    expect(find(tags, "property", "og:description")?.content).toBe(
      "Karaoke for Chanting the Morning Puja",
    );
    expect(find(tags, "property", "og:site_name")?.content).toBe("Dhammapuja");
    expect(find(tags, "property", "og:locale")?.content).toBe("en_US");
  });

  it("names the one true address of the page", () => {
    const url = "https://dhammapuja.com/chanting/morning/";
    expect(find(tags, "rel", "canonical")).toEqual({ tagName: "link", rel: "canonical", href: url });
    expect(find(tags, "property", "og:url")?.content).toBe(url);
  });

  it("includes structured data, WebPage by default and WebSite for home", () => {
    const data = (list: ReturnType<typeof pageMeta>) =>
      list.map((tag) => (tag as Record<string, unknown>)["script:ld+json"]).find(Boolean);
    expect(data(tags)).toEqual({
      "@context": "https://schema.org",
      "@type": "WebPage",
      headline: "Morning Puja",
      description: "Karaoke for Chanting the Morning Puja",
      url: "https://dhammapuja.com/chanting/morning/",
    });
    const home = pageMeta({ title: "Dhammapuja", description: "x", path: "/" });
    expect(data(home)).toMatchObject({ "@type": "WebSite", name: "Dhammapuja" });
  });
});
