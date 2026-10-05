import { InlineText } from "./InlineText";
import { parseInline } from "./inline";
import type { ChantLine } from "./parse";
import { timeToHuman } from "./time";

type Props = {
  lines: readonly ChantLine[];
  activeIndex: number | null;
  onSeek: (time: number) => void;
};

// Markup and class names match legacy so its css carries over.
const TEXT_CLASS = {
  pali: "pali flow-text",
  english: "en flow-text",
  response: "en stud flow-text",
} as const;

export function ChantLines({ lines, activeIndex, onSeek }: Props) {
  return (
    <ul className="display">
      {lines.map((line, index) => {
        const time = line.kind === "divider" ? null : line.time;
        return (
          // biome-ignore lint/a11y/useKeyWithClickEvents: known gap, lines cannot be reached by keyboard yet. Needs its own change to markup.
          <li
            // biome-ignore lint/suspicious/noArrayIndexKey: lines have no id and never reorder
            key={index}
            className={index === activeIndex ? "highlight" : undefined}
            onClick={time === null ? undefined : () => onSeek(time)}
          >
            {time !== null && <div className="time">{timeToHuman(time)}</div>}
            <LineBody line={line} />
          </li>
        );
      })}
    </ul>
  );
}

function LineBody({ line }: { line: ChantLine }) {
  if (line.kind === "divider") return <hr />;
  if (line.kind === "heading") {
    const Heading = `h${Math.min(line.depth, 6)}` as "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
    return <Heading>{line.text}</Heading>;
  }
  return (
    <p className={TEXT_CLASS[line.kind]}>
      <InlineText segments={parseInline(line.text)} />
    </p>
  );
}
