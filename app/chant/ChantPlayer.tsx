import { useCallback, useEffect, useRef, useState } from "react";
import { ChantLines } from "./ChantLines";
import type { ChantLine } from "./parse";
import { timeToHuman } from "./time";
import { activeLineIndex } from "./timeline";

type Props = {
  // Audio path without extension.
  audio: string;
  lines: readonly ChantLine[];
};

// Gap kept between active line and screen edge before scrolling to it. Same as legacy.
const EDGE = 150;

export function ChantPlayer({ audio, lines }: Props) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const listRef = useRef<HTMLDivElement>(null);
  // Null until audio first reports a time: nothing highlighted before play.
  const [time, setTime] = useState<number | null>(null);
  const activeIndex = time === null ? null : activeLineIndex(lines, time);

  const seek = useCallback((to: number) => {
    const player = audioRef.current;
    if (!player) return;
    player.currentTime = to;
    void player.play();
  }, []);

  useEffect(() => {
    const active = listRef.current?.querySelector("li.highlight");
    if (!active) return;
    const { top, bottom } = active.getBoundingClientRect();
    if (top < EDGE || bottom > window.innerHeight - EDGE) {
      active.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  }, [activeIndex]);

  return (
    <>
      <div id="audio">
        <audio
          ref={audioRef}
          controls
          preload="auto"
          onTimeUpdate={(event) => setTime(event.currentTarget.currentTime)}
        >
          <source src={`${audio}.mp3`} type="audio/mpeg" />
          <source src={`${audio}.ogg`} type="audio/ogg" />
          Your browser does not support the <code>audio</code> element.
        </audio>
      </div>
      <div id="time">{timeToHuman(time ?? 0)}</div>
      <div ref={listRef}>
        <ChantLines lines={lines} activeIndex={activeIndex} onSeek={seek} />
      </div>
    </>
  );
}
