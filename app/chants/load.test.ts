import { describe, expect, it } from "vitest";
import { chantPath, chants } from "./catalog";
import { loadChant } from "./load";

describe("chantPath", () => {
  it("gives the legacy url, trailing slash included", () => {
    expect(chantPath(chants[0])).toBe("/chanting/morning/");
    expect(chantPath({ slug: "blessings/metta-sutta-pali" })).toBe(
      "/chanting/blessings/metta-sutta-pali/",
    );
  });
});

describe("loadChant", () => {
  it("returns the catalog entry and parsed lines", async () => {
    const loaded = await loadChant("morning");
    expect(loaded?.chant.title).toBe("Morning Puja");
    expect(loaded?.lines[0]).toMatchObject({ kind: "heading", text: "Morning Puja" });
  });

  it("accepts nested slugs and a trailing slash", async () => {
    expect((await loadChant("blessings/metta-sutta-pali/"))?.chant.slug).toBe(
      "blessings/metta-sutta-pali",
    );
  });

  it("returns null for an unknown chant", async () => {
    expect(await loadChant("nope")).toBeNull();
    expect(await loadChant("")).toBeNull();
  });
});
