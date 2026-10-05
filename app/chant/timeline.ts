// Ported from legacy/app/_assets/_scripts/modules/chanting.js.

// Latest line started at given time. Before first line starts, first line.
// Lines must be sorted by time ascending.
export function findLineByTime<T extends { time: number }>(
  lines: readonly T[],
  time: number,
): T | null {
  if (lines.length === 0) return null;
  let low = 0;
  let high = lines.length - 1;
  while (low < high) {
    const mid = Math.ceil((low + high) / 2);
    if (lines[mid].time <= time) low = mid;
    else high = mid - 1;
  }
  return lines[low];
}
