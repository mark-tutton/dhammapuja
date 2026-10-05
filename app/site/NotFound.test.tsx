import { renderToStaticMarkup } from "react-dom/server";
import { MemoryRouter } from "react-router";
import { describe, expect, it } from "vitest";
import { NotFound } from "./NotFound";

describe("NotFound", () => {
  const out = renderToStaticMarkup(
    <MemoryRouter>
      <NotFound />
    </MemoryRouter>,
  );

  it("says the page is missing", () => {
    expect(out).toContain("<h1>404</h1>");
    expect(out).toContain("The page you are looking for could not be found.");
  });

  it("titles the page and keeps it out of search results", () => {
    expect(out).toContain("<title>Page Not Found | Dhammapuja</title>");
    expect(out).toContain('<meta name="robots" content="noindex"/>');
  });

  it("offers a way home and to the chant index", () => {
    expect(out).toMatch(/<a [^>]*href="\/"[^>]*>home<\/a>/);
    expect(out).toMatch(/<a [^>]*href="\/chanting\/"[^>]*>chant index<\/a>/);
  });
});
