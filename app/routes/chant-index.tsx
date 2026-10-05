import { Fragment } from "react";
import { Link } from "react-router";
import { chantPath, findChant } from "../chants/catalog";
import { indexRows } from "../chants/index-rows";
import { ChevronRight } from "../icons";
import { SiteFooter } from "../site/SiteFooter";
import "../styles/chant-index.css";
import "../styles/footer.css";

export function meta() {
  return [
    { title: "Chanting | Dhammapuja" },
    { name: "description", content: "Index of Chants in Pali and English" },
  ];
}

export default function ChantIndex() {
  return (
    <>
      <main>
        <div className="container">
          {indexRows.map((row, index) => (
            <Fragment key={index}>
              {index > 0 && !row.joined && <div className="divider" />}
              <div className={row.columns ? "row row--columns" : "row"}>
                {row.groups.map((group) => (
                  <section key={group.heading} className="chant-list flow-text">
                    <h4>{group.heading}</h4>
                    <ul>
                      {group.slugs.map((slug) => {
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
                  </section>
                ))}
              </div>
            </Fragment>
          ))}
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
