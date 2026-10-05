import { describe, expect, it } from "vitest";
import { humanToTime, timeToHuman } from "./time";

describe("humanToTime", () => {
  it("reads minutes and seconds", () => {
    expect(humanToTime("01:07.5")).toBe(67.5);
  });

  it("reads zero timestamp as 0, not null", () => {
    expect(humanToTime("00:00.0")).toBe(0);
  });

  it("allows spaces around parts", () => {
    expect(humanToTime(" 2 : 05 ")).toBe(125);
  });

  it("reads bare seconds", () => {
    expect(humanToTime("12.5")).toBe(12.5);
    expect(humanToTime("0")).toBe(0);
  });

  it("returns null for missing or unreadable input", () => {
    expect(humanToTime(undefined)).toBeNull();
    expect(humanToTime("")).toBeNull();
    expect(humanToTime("soon")).toBeNull();
  });
});

describe("timeToHuman", () => {
  it("pads seconds and keeps one decimal", () => {
    expect(timeToHuman(0)).toBe("0:00.0");
    expect(timeToHuman(9.5)).toBe("0:09.5");
    expect(timeToHuman(75.5)).toBe("1:15.5");
  });

  it("does not pad minutes", () => {
    expect(timeToHuman(600)).toBe("10:00.0");
    expect(timeToHuman(3725.25)).toBe("62:05.3");
  });

  it("carries into minutes when seconds round up to 60", () => {
    expect(timeToHuman(59.96)).toBe("1:00.0");
    expect(timeToHuman(119.99)).toBe("2:00.0");
  });
});
