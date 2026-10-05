import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it } from "vitest";
import { SiteSettings } from "./SiteSettings";

describe("SiteSettings", () => {
  const out = renderToStaticMarkup(<SiteSettings />);

  it("starts closed, in day mode", () => {
    expect(out).toContain('aria-label="Site options"');
    expect(out).toContain('aria-expanded="false"');
    expect(out).toContain('aria-pressed="false"');
    expect(out).toMatch(/<ul id="settings-actions" hidden=""/);
  });

  it("labels both actions", () => {
    expect(out).toContain('aria-label="Jump to top"');
    expect(out).toContain('aria-label="Night mode"');
  });
});
