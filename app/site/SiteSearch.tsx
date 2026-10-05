import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router";
import { chantPath, chants } from "../chants/catalog";
import { Search } from "../icons";
import { searchChants } from "./search";

export function SiteSearch() {
  const [query, setQuery] = useState("");
  const { pathname } = useLocation();
  const results = searchChants(chants, query);
  const searching = query.trim() !== "";

  useEffect(() => setQuery(""), [pathname]);

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
