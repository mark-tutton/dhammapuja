import type { Config } from "@react-router/dev/config";
import { chantPath, chants } from "./app/chants/catalog";

export default {
  // GitHub Pages static only: no runtime server, prerender each route to HTML.
  ssr: false,
  prerender: ["/", "/chanting/", ...chants.map(chantPath)],
} satisfies Config;
