import { Link } from "react-router";
import { ChevronRight } from "../icons";
import { chantPath, findChant } from "./catalog";

// Chants by slug, each linked under its index-page name.
export function ChantLinkList({ slugs }: { slugs: readonly string[] }) {
  return (
    <ul>
      {slugs.map((slug) => {
        const chant = findChant(slug);
        if (!chant) return null;
        return (
          <li key={slug}>
            <ChevronRight />
            <Link to={chantPath(chant)}>{chant.indexTitle}</Link>
          </li>
        );
      })}
    </ul>
  );
}
