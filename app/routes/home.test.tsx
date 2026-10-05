import { renderToStaticMarkup } from "react-dom/server";
import { MemoryRouter } from "react-router";
import { describe, expect, it } from "vitest";
import { chants } from "../chants/catalog";
import Home from "./home";

describe("home page", () => {
  const out = renderToStaticMarkup(
    <MemoryRouter>
      <Home />
    </MemoryRouter>,
  );

  it("welcomes the visitor", () => {
    expect(out).toContain("Welcome to Dhammapuja");
    expect(out).toContain("A tool for learning Theravadin chants");
  });

  it("links every listed chant once, and no unlisted one", () => {
    for (const chant of chants) {
      const count = out.split(`href="/chanting/${chant.slug}/"`).length - 1;
      expect(count, chant.slug).toBe(chant.listed ? 1 : 0);
    }
  });

  it("puts chants in eight groups that open one at a time", () => {
    expect(out.match(/<details name="home-chants"/g)).toHaveLength(8);
    expect(out).toContain("<summary>Reflections</summary>");
  });

  it("describes both photos", () => {
    expect(out).toContain('alt="Ta Prohm Buddhist Temple"');
    expect(out).toContain('alt="Radial Buddha statue"');
  });

  it("has the footer", () => {
    expect(out).toContain('class="page-footer"');
  });
});
