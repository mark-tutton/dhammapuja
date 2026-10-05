import { Link } from "react-router";
import "../styles/not-found.css";
import { SITE_NAME } from "./seo";

export function NotFound() {
  return (
    <main className="container not-found">
      {/* React lifts these two into <head>. Works from a route and from the error boundary. */}
      <title>{`Page Not Found | ${SITE_NAME}`}</title>
      <meta name="robots" content="noindex" />
      <h1>404</h1>
      <h2 className="flow-text">The page you are looking for could not be found.</h2>
      <ul>
        <li className="flow-text">
          Go <Link to="/">home</Link>
        </li>
        <li className="flow-text">
          Go to the <Link to="/chanting/">chant index</Link>
        </li>
      </ul>
    </main>
  );
}
