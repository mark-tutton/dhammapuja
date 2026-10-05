import { copyFile } from "node:fs/promises";
import { join } from "node:path";
import type { Config } from "@react-router/dev/config";
import { chantPath, chants } from "./app/chants/catalog";

export default {
  // GitHub Pages static only: no runtime server, prerender each route to HTML.
  ssr: false,
  prerender: ["/", "/chanting/", ...chants.map(chantPath)],
  // GitHub Pages serves 404.html for any unknown url. Give it the app shell,
  // which boots at whatever url it was served for and shows the not-found page.
  async buildEnd({ reactRouterConfig }) {
    const client = join(reactRouterConfig.buildDirectory, "client");
    await copyFile(join(client, "__spa-fallback.html"), join(client, "404.html"));
  },
} satisfies Config;
