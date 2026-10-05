// Ported from legacy/app/_assets/_scripts/modules/header-scroll.js.

export type NavScroll = { hidden: boolean; lastY: number };

type Page = { navHeight: number; viewportHeight: number; documentHeight: number };

// Moves this small are ignored, so jitter does not flicker the nav.
const DELTA = 5;

// Scroll down past the nav: hide it. Scroll up: show it, unless the page is
// overscrolled past its bottom (rubber-band bounce).
export function nextNavScroll(prev: NavScroll, y: number, page: Page): NavScroll {
  if (Math.abs(prev.lastY - y) <= DELTA) return prev;
  if (y > prev.lastY && y > page.navHeight) return { hidden: true, lastY: y };
  if (y + page.viewportHeight < page.documentHeight) return { hidden: false, lastY: y };
  return { hidden: prev.hidden, lastY: y };
}
