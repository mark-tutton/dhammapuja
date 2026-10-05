import { describe, expect, it } from "vitest";
import { findLineByTime } from "./timeline";

const lines = [{ time: 10 }, { time: 20 }, { time: 30 }];

describe("findLineByTime", () => {
  it("returns null when there are no lines", () => {
    expect(findLineByTime([], 5)).toBeNull();
  });

  it("returns the latest line already started", () => {
    expect(findLineByTime(lines, 25)).toBe(lines[1]);
  });

  it("switches exactly on a line's start time", () => {
    expect(findLineByTime(lines, 20)).toBe(lines[1]);
    expect(findLineByTime(lines, 19.9)).toBe(lines[0]);
  });

  it("returns the first line before anything has started", () => {
    expect(findLineByTime(lines, 0)).toBe(lines[0]);
  });

  it("stays on the last line after it starts", () => {
    expect(findLineByTime(lines, 999)).toBe(lines[2]);
  });

  it("matches a linear scan for every list size", () => {
    for (let size = 1; size <= 9; size++) {
      const list = Array.from({ length: size }, (_, i) => ({ time: (i + 1) * 10 }));
      for (let time = 0; time <= (size + 1) * 10; time += 5) {
        const started = list.filter((line) => line.time <= time);
        const expected = started.at(-1) ?? list[0];
        expect(findLineByTime(list, time)).toBe(expected);
      }
    }
  });
});
