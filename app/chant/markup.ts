// Ported from legacy/app/_assets/_scripts/modules/chanting.js.
// Both return HTML strings, same markup legacy css expects.

// Tone marks: ^ rising, ` falling, on the next character. Repeated mark doubles.
export function vocalize(text: string): string {
  return text.replace(/([\^`]+)(.)/g, (_, marks: string, char: string) => {
    const dir = marks[0] === "^" ? "u" : "d";
    const cls = marks.length > 1 ? dir + dir : dir;
    return `<span class="t">${char}<span><span class="${cls}"></span></span></span>`;
  });
}

// _text_ -> underlined span.
export function underline(text: string): string {
  return text.replace(/_(.+?)_/g, '<span class="un">$1</span>');
}
