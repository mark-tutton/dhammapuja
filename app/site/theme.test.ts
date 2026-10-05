import { describe, expect, it } from "vitest";
import { readTheme, storeTheme } from "./theme";

const fakeStorage = (initial: Record<string, string> = {}) => {
  const data = new Map(Object.entries(initial));
  return {
    getItem: (key: string) => data.get(key) ?? null,
    setItem: (key: string, value: string) => void data.set(key, value),
  };
};

const brokenStorage = {
  getItem: () => {
    throw new Error("blocked");
  },
  setItem: () => {
    throw new Error("blocked");
  },
};

describe("readTheme", () => {
  it("is day when nothing is stored", () => {
    expect(readTheme(fakeStorage())).toBe("day");
  });

  it("is night only when night was stored", () => {
    expect(readTheme(fakeStorage({ theme: "night" }))).toBe("night");
    expect(readTheme(fakeStorage({ theme: "day" }))).toBe("day");
    expect(readTheme(fakeStorage({ theme: "purple" }))).toBe("day");
  });

  it("is day when storage is blocked", () => {
    expect(readTheme(brokenStorage)).toBe("day");
  });
});

describe("storeTheme", () => {
  it("stores under the key the old site used", () => {
    const storage = fakeStorage();
    storeTheme(storage, "night");
    expect(storage.getItem("theme")).toBe("night");
    expect(readTheme(storage)).toBe("night");
  });

  it("does not throw when storage is blocked", () => {
    expect(() => storeTheme(brokenStorage, "night")).not.toThrow();
  });
});
