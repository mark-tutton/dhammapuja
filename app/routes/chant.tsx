import { data } from "react-router";
import { ChantPlayer } from "../chant/ChantPlayer";
import { chantPath } from "../chants/catalog";
import { loadChant } from "../chants/load";
import { SITE_NAME, pageMeta } from "../site/seo";
import "../styles/chant.css";
import type { Route } from "./+types/chant";

export async function loader({ params }: Route.LoaderArgs) {
  const loaded = await loadChant(params["*"]);
  if (!loaded) throw data(null, { status: 404 });
  return loaded;
}

export function meta({ loaderData }: Route.MetaArgs) {
  if (!loaderData) return [{ title: SITE_NAME }];
  const { chant } = loaderData;
  return pageMeta({
    title: chant.title,
    description: chant.description,
    path: chantPath(chant),
  });
}

export default function ChantPage({ loaderData }: Route.ComponentProps) {
  const { chant, lines } = loaderData;
  return (
    <div className="container container--chant">
      <main id="main">
        <ChantPlayer audio={chant.audio} lines={lines} />
      </main>
    </div>
  );
}
