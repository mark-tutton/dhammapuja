import { data } from "react-router";
import { ChantPlayer } from "../chant/ChantPlayer";
import { chantPath, findChant } from "../chants/catalog";
import { loadChant } from "../chants/load";
import { pageMeta, SITE_NAME } from "../site/seo";
import "../styles/chant.css";
import type { Route } from "./+types/chant";

export async function loader({ params }: Route.LoaderArgs) {
  const loaded = await loadChant(params["*"]);
  if (!loaded) throw data(null, { status: 404 });
  return loaded;
}

// In the browser: unknown chant is a 404 before any data file is asked for.
// Without this, the missing data file would surface as a crash, not a 404.
export async function clientLoader({ params, serverLoader }: Route.ClientLoaderArgs) {
  if (!findChant(params["*"])) throw data(null, { status: 404 });
  return serverLoader();
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
        <ChantPlayer audio={chant.audio} title={chant.title} lines={lines} />
      </main>
    </div>
  );
}
