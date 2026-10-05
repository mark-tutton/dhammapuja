import { Fragment } from "react";
import { ChantLinkList } from "../chants/ChantLinkList";
import { indexRows } from "../chants/index-rows";
import { SiteFooter } from "../site/SiteFooter";
import { pageMeta } from "../site/seo";
import "../styles/chant-index.css";
import "../styles/footer.css";

export function meta() {
  return pageMeta({
    title: "Chanting",
    description: "Index of Chants in Pali and English",
    path: "/chanting/",
  });
}

export default function ChantIndex() {
  return (
    <>
      <main>
        <div className="container">
          {indexRows.map((row, index) => (
            <Fragment key={row.groups[0].heading}>
              {index > 0 && !row.joined && <div className="divider" />}
              <div className={row.columns ? "row row--columns" : "row"}>
                {row.groups.map((group) => (
                  <section key={group.heading} className="chant-list flow-text">
                    <h4>{group.heading}</h4>
                    <ChantLinkList slugs={group.slugs} />
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
