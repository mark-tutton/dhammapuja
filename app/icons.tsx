// Icons from the Feather set (MIT), inline so they take size and colour from text.
import type { ReactNode } from "react";

function Icon({ children }: { children: ReactNode }) {
  return (
    <svg
      className="icon"
      viewBox="0 0 24 24"
      width="1em"
      height="1em"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {children}
    </svg>
  );
}

export function ChevronRight() {
  return (
    <Icon>
      <polyline points="9 18 15 12 9 6" />
    </Icon>
  );
}

export function ChevronDown() {
  return (
    <Icon>
      <polyline points="6 9 12 15 18 9" />
    </Icon>
  );
}

export function Menu() {
  return (
    <Icon>
      <line x1="3" y1="12" x2="21" y2="12" />
      <line x1="3" y1="6" x2="21" y2="6" />
      <line x1="3" y1="18" x2="21" y2="18" />
    </Icon>
  );
}

export function Home() {
  return (
    <Icon>
      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </Icon>
  );
}
