import { defineConfig } from "vitest/config";

// Separate from vite.config.ts: react router plugin not needed for unit tests.
export default defineConfig({
  test: {
    include: ["app/**/*.test.{ts,tsx}"],
  },
});
