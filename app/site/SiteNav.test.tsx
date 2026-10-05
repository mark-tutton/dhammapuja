import { renderToStaticMarkup } from "react-dom/server";
import { MemoryRouter } from "react-router";
import { describe, expect, it } from "vitest";
import { chants } from "../chants/catalog";
import { SiteNav } from "./SiteNav";

const html = (path: string) =>
  renderToStaticMarkup(
    <MemoryRouter initialEntries={[path]}>
      <SiteNav />
    </MemoryRouter>,
  );

const links = (out: string) =>
  [...out.matchAll(/<a [^>]*href="([^"]+)"[^>]*>/g)].map((match) => match[1]);

const activeLinks = (out: string) =>
  [...out.matchAll(/<a [^>]*>/g)]
    .filter(([tag]) => tag.includes('class="active"'))
    .map(([tag]) => tag.match(/href="([^"]+)"/)?.[1]);

describe("SiteNav", () => {
  it("links to home and the chant index from the top bar and the side menu", () => {
    const hrefs = links(html("/"));
    expect(hrefs.filter((href) => href === "/chanting/")).toHaveLength(2);
    // brand, top bar, side menu
    expect(hrefs.filter((href) => href === "/")).toHaveLength(3);
  });

  it("lists every listed chant in the side menu, and no unlisted one", () => {
    const hrefs = links(html("/"));
    for (const chant of chants) {
      const count = hrefs.filter((href) => href === `/chanting/${chant.slug}/`).length;
      expect(count, chant.slug).toBe(chant.listed ? 1 : 0);
    }
  });

  it("uses the short menu label", () => {
    expect(html("/")).toContain(">Evening (Pāḷi)</a>");
  });

  it("draws a divider between menu sections", () => {
    expect(html("/").match(/class="divider"/g)).toHaveLength(6);
  });

  it("marks only the current page as active", () => {
    expect(activeLinks(html("/chanting/morning/"))).toEqual(["/chanting/morning/"]);
  });

  it("marks home active in top bar and side menu, and not the chant index", () => {
    expect(activeLinks(html("/"))).toEqual(["/", "/"]);
  });

  it("starts with the side menu and chant list closed", () => {
    const out = html("/");
    expect(out).toContain('aria-expanded="false"');
    expect(out).not.toContain('aria-expanded="true"');
  });
});

describe("SiteNav on the chant index", () => {
  it("marks the chant index active, not home or any chant", () => {
    expect(activeLinks(html("/chanting/"))).toEqual(["/chanting/", "/chanting/"]);
  });
});

describe("SiteNav search", () => {
  it("has a labelled search box, with no results shown before typing", () => {
    const out = html("/");
    expect(out).toContain('aria-label="Search chants"');
    expect(out).not.toContain("search__results");
  });
});
