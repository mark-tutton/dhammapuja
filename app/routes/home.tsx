import { ChantLinkList } from "../chants/ChantLinkList";
import { indexRows } from "../chants/index-rows";
import { ParallaxBand } from "../site/ParallaxBand";
import { SiteFooter } from "../site/SiteFooter";
import { pageMeta, SITE_DESCRIPTION, SITE_NAME } from "../site/seo";
import "../styles/footer.css";
import "../styles/home.css";

const groups = indexRows.flatMap((row) => row.groups);

const photo = (name: string, sizes: readonly [string, number][]) =>
  sizes.map(([file, width]) => `/assets/img/home/${name}/${file}.jpg ${width}w`).join(", ");

export function meta() {
  return pageMeta({ title: SITE_NAME, description: SITE_DESCRIPTION, path: "/" });
}

export default function Home() {
  return (
    <>
      <main>
        <ParallaxBand className="hero hero--top">
          <img
            src="/assets/img/home/ta-prohm/ta-prohm-medium--500-g.jpg"
            srcSet={photo("ta-prohm", [
              ["ta-prohm-medium--640-g", 640],
              ["ta-prohm-large--1024-g", 1024],
              ["ta-prohm-large--1600-g", 1600],
              ["ta-prohm-large--2048-g", 2048],
            ])}
            sizes="100vw"
            alt="Ta Prohm Buddhist Temple"
          />
          <div className="hero__text">
            <h3>Welcome to Dhammapuja</h3>
            <h5>A tool for learning Theravadin chants</h5>
          </div>
        </ParallaxBand>

        <div className="home-chants">
          <div className="container">
            {groups.map((group) => (
              <details key={group.heading} name="home-chants">
                <summary>{group.heading}</summary>
                <ChantLinkList slugs={group.slugs} />
              </details>
            ))}
          </div>
        </div>

        <ParallaxBand className="hero">
          <img
            src="/assets/img/home/buddha-radial/buddha-radial-medium--500.jpg"
            srcSet={photo("buddha-radial", [
              ["buddha-radial-medium--640", 640],
              ["buddha-radial-medium--800", 800],
              ["buddha-radial-large--1024", 1024],
              ["buddha-radial-large--1600", 1600],
              ["buddha-radial-large--2048", 2048],
            ])}
            sizes="100vw"
            loading="lazy"
            alt="Radial Buddha statue"
          />
        </ParallaxBand>
      </main>
      <SiteFooter />
    </>
  );
}
