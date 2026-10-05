import type { Config } from "@react-router/dev/config";

export default {
  // GitHub Pages static only: no runtime server, prerender each route to HTML.
  ssr: false,
  prerender: true,
} satisfies Config;
