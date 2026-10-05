import { describe, expect, it } from "vitest";
import { parallaxOffset } from "./parallax";

// Numbers measured off the old site: 400px band at top 64, photo 1389px tall,
// window 1251px tall, not scrolled. Old site moved the photo down 711.05px.
const band = { bandTop: 64, bandHeight: 400, imageHeight: 1389, viewportHeight: 1251 };

describe("parallaxOffset", () => {
  it("matches the old site at the top of the page", () => {
    expect(parallaxOffset({ ...band, scrollY: 0 })).toBeCloseTo(711.05, 1);
  });

  it("moves the photo further down as the page scrolls", () => {
    const top = parallaxOffset({ ...band, scrollY: 0 }) as number;
    const later = parallaxOffset({ ...band, scrollY: 200 }) as number;
    expect(later).toBeGreaterThan(top);
  });

  it("runs from none to the photo's full spare height while the band crosses the screen", () => {
    const below = { ...band, bandTop: 3000 };
    // band's top edge just reaching the bottom of the window
    expect(parallaxOffset({ ...below, scrollY: 3000 - 1251 + 1 })).toBeLessThan(1);
    // band's bottom edge just leaving the top of the window
    expect(parallaxOffset({ ...below, scrollY: 3000 + 400 - 1 })).toBeGreaterThan(988);
    expect(parallaxOffset({ ...below, scrollY: 3000 + 400 - 1 })).toBeLessThanOrEqual(989);
  });

  it("gives null while the band is off screen", () => {
    expect(parallaxOffset({ ...band, bandTop: 3000, scrollY: 0 })).toBeNull();
    expect(parallaxOffset({ ...band, scrollY: 2000 })).toBeNull();
  });

  it("does not move a photo no taller than its band", () => {
    expect(parallaxOffset({ ...band, imageHeight: 400, scrollY: 100 })).toBe(0);
    expect(parallaxOffset({ ...band, imageHeight: 300, scrollY: 100 })).toBe(0);
  });
});
