// Replaces legacy vocalize/underline, which built html strings.
// Same marks, returned as data so react renders elements itself.

export type Inline =
  | string
  | { type: "tone"; char: string; direction: "up" | "down"; double: boolean }
  | { type: "underline"; children: Inline[] };

// _text_ underlines. Tone marks allowed inside.
export function parseInline(text: string): Inline[] {
  const out: Inline[] = [];
  let last = 0;
  for (const match of text.matchAll(/_(.+?)_/g)) {
    out.push(...parseTones(text.slice(last, match.index)));
    out.push({ type: "underline", children: parseTones(match[1]) });
    last = match.index + match[0].length;
  }
  out.push(...parseTones(text.slice(last)));
  return out;
}

// ^ rising, ` falling, on the next character. Repeated mark doubles.
function parseTones(text: string): Inline[] {
  const out: Inline[] = [];
  let last = 0;
  for (const match of text.matchAll(/([\^`]+)(.)/g)) {
    if (match.index > last) out.push(text.slice(last, match.index));
    const [, marks, char] = match;
    out.push({
      type: "tone",
      char,
      direction: marks[0] === "^" ? "up" : "down",
      double: marks.length > 1,
    });
    last = match.index + match[0].length;
  }
  if (last < text.length) out.push(text.slice(last));
  return out;
}
