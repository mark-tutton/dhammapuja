import { Fragment, useEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router";
import { chantPath, chants } from "../chants/catalog";
import { ChevronDown, Home, Menu } from "../icons";
import { menuGroups } from "./menu";
import { type NavScroll, nextNavScroll } from "./scroll";

const groups = menuGroups(chants);

export function SiteNav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [chantsOpen, setChantsOpen] = useState(false);
  const hidden = useNavHidden();
  const { pathname } = useLocation();

  useEffect(() => setMenuOpen(false), [pathname]);

  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <div className={hidden ? "navbar navbar--hidden" : "navbar"}>
        <nav aria-label="Main">
          <Link to="/" className="brand-logo">
            Dhammapuja
          </Link>
          <ul className="navbar__links">
            <li>
              <NavLink to="/" end>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/chanting/" end>
                Chanting
              </NavLink>
            </li>
          </ul>
          <button
            type="button"
            className="navbar__trigger"
            aria-label="Open menu"
            aria-controls="side-menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(true)}
          >
            <Menu />
          </button>
        </nav>
      </div>

      {menuOpen && <div className="side-menu__overlay" onClick={() => setMenuOpen(false)} />}

      <aside
        id="side-menu"
        className={menuOpen ? "side-menu side-menu--open" : "side-menu"}
        inert={!menuOpen}
      >
        <ul>
          <li>
            <NavLink to="/" end>
              <Home />
              Home
            </NavLink>
          </li>
          <li>
            <div className="side-menu__header">
              <button
                type="button"
                aria-label="Chant list"
                aria-controls="side-menu-chants"
                aria-expanded={chantsOpen}
                onClick={() => setChantsOpen((open) => !open)}
              >
                <ChevronDown />
              </button>
              <NavLink to="/chanting/" end>
                Chanting
              </NavLink>
            </div>
            <ul id="side-menu-chants" className="side-menu__chants" hidden={!chantsOpen}>
              {groups.map((group, index) => (
                <Fragment key={group[0].slug}>
                  {index > 0 && <li className="divider" role="separator" />}
                  {group.map((chant) => (
                    <li key={chant.slug}>
                      <NavLink to={chantPath(chant)}>{chant.label}</NavLink>
                    </li>
                  ))}
                </Fragment>
              ))}
            </ul>
          </li>
        </ul>
      </aside>
    </>
  );
}

function useNavHidden(): boolean {
  const [hidden, setHidden] = useState(false);
  const state = useRef<NavScroll>({ hidden: false, lastY: 0 });

  useEffect(() => {
    const onScroll = () => {
      state.current = nextNavScroll(state.current, window.scrollY, {
        navHeight: document.querySelector(".navbar")?.clientHeight ?? 0,
        viewportHeight: window.innerHeight,
        documentHeight: document.documentElement.scrollHeight,
      });
      setHidden(state.current.hidden);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return hidden;
}
