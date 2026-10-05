import { type ReactNode, useEffect, useRef } from "react";
import { parallaxOffset } from "./parallax";

// Photo band whose photo drifts slower than the page as it scrolls by.
// Without script, or when the visitor asks for reduced motion, the photo
// simply fills the band and stays put.
export function ParallaxBand({ className, children }: { className: string; children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const band = ref.current;
    const image = band?.querySelector("img");
    if (!band || !image) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let frame = 0;
    const update = () => {
      frame = 0;
      const offset = parallaxOffset({
        bandTop: band.getBoundingClientRect().top + window.scrollY,
        bandHeight: band.offsetHeight,
        imageHeight: image.offsetHeight,
        scrollY: window.scrollY,
        viewportHeight: window.innerHeight,
      });
      if (offset !== null) image.style.transform = `translate3d(0, ${offset}px, 0)`;
    };
    // At most one update per painted frame, however fast scroll events arrive.
    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    band.classList.add("hero--parallax");
    update();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    image.addEventListener("load", schedule);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      image.removeEventListener("load", schedule);
      band.classList.remove("hero--parallax");
      image.style.transform = "";
    };
  }, []);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
