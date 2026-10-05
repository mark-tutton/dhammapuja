import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it } from "vitest";
import { ChantPlayer } from "./ChantPlayer";
import { parseChant } from "./parse";

describe("ChantPlayer", () => {
  const out = renderToStaticMarkup(
    <ChantPlayer
      audio="/assets/audio/morning-chant"
      title="Morning Puja"
      lines={parseChant("[00:00.0] ### Morning Puja\n[00:02.0] Namo tassa")}
    />,
  );

  it("renders on the server, with both audio formats", () => {
    expect(out).toContain('src="/assets/audio/morning-chant.mp3"');
    expect(out).toContain('src="/assets/audio/morning-chant.ogg"');
  });

  it("leaves controls to the player skin, not the browser", () => {
    expect(out).toMatch(/<audio[^>]*>/);
    expect(out).not.toMatch(/<audio[^>]* controls/);
  });

  it("renders the chant lines, none highlighted before play", () => {
    expect(out).toContain("<h3>Morning Puja</h3>");
    expect(out).toContain("Namo tassa");
    expect(out).not.toContain('class="highlight"');
  });
});
