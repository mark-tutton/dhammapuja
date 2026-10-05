// Same sums as materialize's parallax, which the old home page used.

type Measures = {
  // Band's distance from the top of the page, and its height.
  bandTop: number;
  bandHeight: number;
  // Rendered height of the photo inside it.
  imageHeight: number;
  scrollY: number;
  viewportHeight: number;
};

// How far down (px) to shift a photo anchored to the bottom of its band.
// Photo is taller than the band; as the band crosses the screen the shift runs
// from 0 to that spare height, so the photo drifts slower than the page.
// Null while the band is off screen: nothing to do.
export function parallaxOffset(m: Measures): number | null {
  const viewportBottom = m.scrollY + m.viewportHeight;
  const onScreen = m.bandTop + m.bandHeight > m.scrollY && m.bandTop < viewportBottom;
  if (!onScreen) return null;
  const spare = Math.max(0, m.imageHeight - m.bandHeight);
  const crossed = (viewportBottom - m.bandTop) / (m.bandHeight + m.viewportHeight);
  return spare * crossed;
}
