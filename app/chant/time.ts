// Ported from legacy/app/_assets/_scripts/modules/chanting.js.

// "mm:ss.s" or bare seconds -> seconds. Unlike legacy, "0" gives 0, not null.
export function humanToTime(human: string | undefined): number | null {
  if (human === undefined) return null;
  const match = human.match(/^\s*(\d+)\s*:\s*([\d.]+)\s*$/);
  if (match) return parseInt(match[1], 10) * 60 + parseFloat(match[2]);
  const seconds = parseFloat(human);
  return Number.isNaN(seconds) ? null : seconds;
}

// Seconds -> "m:ss.s". Round before splitting: legacy showed 59.96 as "0:60.0".
export function timeToHuman(seconds: number): string {
  const tenths = Math.round(seconds * 10);
  const minutes = Math.floor(tenths / 600);
  const rest = (tenths % 600) / 10;
  return `${minutes}:${rest.toFixed(1).padStart(4, "0")}`;
}
