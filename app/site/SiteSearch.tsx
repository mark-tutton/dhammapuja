import { useState } from "react";
import { Link } from "react-router";
import { chantPath, chants } from "../chants/catalog";
import { Search } from "../icons";
import { searchChants } from "./search";

// Parent gives this a key per page, so the query clears on navigation.
export function SiteSearch() {
  const [query, setQuery] = useState("");
  const results = searchChants(chants, query);
  const searching = query.trim() !== "";

  return (
    <div className="search">
      <input
        type="search"
        name="q"
        className="search__input"
        aria-label="Search chants"
        placeholder="Search..."
        autoComplete="off"
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        onKeyDown={(event) => {
          if (event.key === "Escape") setQuery("");
        }}
      />
      <Search />
      {searching && (
        <ul className="search__results">
          {results.map((chant) => (
            <li key={chant.slug}>
              <Link to={chantPath(chant)}>{chant.title}</Link>
            </li>
          ))}
          {results.length === 0 && <li className="search__none">No results found</li>}
        </ul>
      )}
    </div>
  );
}
