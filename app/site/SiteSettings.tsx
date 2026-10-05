import { useEffect, useState } from "react";
import { ChevronUp, Moon, Settings, Sun } from "../icons";
import { NIGHT_CLASS, readTheme, storeTheme, type Theme } from "./theme";

// Floating button, bottom right: opens jump-to-top and night mode.
export function SiteSettings() {
  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useState<Theme>("day");

  useEffect(() => setTheme(readTheme(sessionStorage)), []);

  const toggleTheme = () => {
    const next = theme === "night" ? "day" : "night";
    setTheme(next);
    storeTheme(sessionStorage, next);
    document.documentElement.classList.toggle(NIGHT_CLASS, next === "night");
  };

  // Also stops and rewinds a playing chant, as the old site did.
  const jumpToTop = () => {
    for (const audio of document.querySelectorAll("audio")) {
      if (audio.paused) continue;
      audio.pause();
      audio.currentTime = 0;
    }
    window.scrollTo(0, 0);
  };

  return (
    <div className="settings">
      <ul id="settings-actions" hidden={!open}>
        <li>
          <button type="button" aria-label="Jump to top" onClick={jumpToTop}>
            <ChevronUp />
          </button>
        </li>
        <li>
          <button
            type="button"
            aria-label="Night mode"
            aria-pressed={theme === "night"}
            onClick={toggleTheme}
          >
            {theme === "night" ? <Sun /> : <Moon />}
          </button>
        </li>
      </ul>
      <button
        type="button"
        aria-label="Site options"
        aria-controls="settings-actions"
        aria-expanded={open}
        onClick={() => setOpen((value) => !value)}
      >
        <Settings />
      </button>
    </div>
  );
}
