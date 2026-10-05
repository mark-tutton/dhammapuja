import type { Inline } from "./inline";

// Class names match legacy css: t = toned letter, u/d = up/down, doubled = stronger.
export function InlineText({ segments }: { segments: readonly Inline[] }) {
  return segments.map((segment, index) => {
    if (typeof segment === "string") return segment;
    if (segment.type === "underline") {
      return (
        <span key={index} className="un">
          <InlineText segments={segment.children} />
        </span>
      );
    }
    const dir = segment.direction === "up" ? "u" : "d";
    return (
      <span key={index} className="t">
        {segment.char}
        <span>
          <span className={segment.double ? dir + dir : dir} />
        </span>
      </span>
    );
  });
}
