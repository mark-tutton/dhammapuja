// Night mode. Ported from legacy/app/_assets/_scripts/modules/night-mode.js.
// Kept per tab (sessionStorage), under the same key, as the old site did.

export type Theme = "day" | "night";

type ThemeStorage = Pick<Storage, "getItem" | "setItem">;

const KEY = "theme";

// Class goes on <html>, set before first paint by the snippet below, so a
// reload in night mode does not flash the day colours.
export const NIGHT_CLASS = "night";

export const themeBootScript = `try{if(sessionStorage.getItem("${KEY}")==="night")document.documentElement.classList.add("${NIGHT_CLASS}")}catch(e){}`;

// Storage can throw when the browser blocks it. Then: day, nothing saved.
export function readTheme(storage: ThemeStorage): Theme {
  try {
    return storage.getItem(KEY) === "night" ? "night" : "day";
  } catch {
    return "day";
  }
}

export function storeTheme(storage: ThemeStorage, theme: Theme): void {
  try {
    storage.setItem(KEY, theme);
  } catch {
    // Blocked storage: theme still applies for this page view.
  }
}
