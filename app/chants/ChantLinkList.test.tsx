import { renderToStaticMarkup } from "react-dom/server";
import { MemoryRouter } from "react-router";
import { describe, expect, it } from "vitest";
import { ChantLinkList } from "./ChantLinkList";

const html = (slugs: string[]) =>
  renderToStaticMarkup(
    <MemoryRouter>
      <ChantLinkList slugs={slugs} />
    </MemoryRouter>,
  );

describe("ChantLinkList", () => {
  it("links each chant by its index name", () => {
    const out = html(["morning", "evening-pali"]);
    expect(out).toContain('href="/chanting/morning/"');
    expect(out).toContain(">Morning [Eng. &amp; Pāḷi]</a>");
    expect(out).toContain('href="/chanting/evening-pali/"');
    expect(out.match(/<li>/g)).toHaveLength(2);
  });

  it("skips slugs not in the catalog", () => {
    expect(html(["nope"])).toBe("<ul></ul>");
  });
});
