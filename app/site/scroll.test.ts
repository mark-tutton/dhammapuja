import { describe, expect, it } from "vitest";
import { nextNavScroll } from "./scroll";

const page = { navHeight: 64, viewportHeight: 800, documentHeight: 3000 };
const shown = (lastY: number) => ({ hidden: false, lastY });
const hidden = (lastY: number) => ({ hidden: true, lastY });

describe("nextNavScroll", () => {
  it("hides the nav when scrolling down past its own height", () => {
    expect(nextNavScroll(shown(0), 200, page)).toEqual(hidden(200));
  });

  it("keeps the nav while still within its own height", () => {
    expect(nextNavScroll(shown(0), 50, page)).toEqual(shown(50));
  });

  it("shows the nav again when scrolling up", () => {
    expect(nextNavScroll(hidden(500), 400, page)).toEqual(shown(400));
  });

  it("ignores moves of 5px or less, without forgetting where it was", () => {
    expect(nextNavScroll(shown(200), 205, page)).toEqual(shown(200));
    expect(nextNavScroll(hidden(200), 196, page)).toEqual(hidden(200));
  });

  it("does not show the nav on a bounce past the bottom of the page", () => {
    expect(nextNavScroll(hidden(2250), 2200, page)).toEqual(hidden(2200));
  });
});
