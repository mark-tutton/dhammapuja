import { Links, Meta, Outlet, Scripts, ScrollRestoration } from "react-router";
import type { Route } from "./+types/root";
import { SiteNav } from "./site/SiteNav";
import { SiteSettings } from "./site/SiteSettings";
import { themeBootScript } from "./site/theme";
import "./styles/base.css";
import "./styles/nav.css";
import "./styles/settings.css";

export const links: Route.LinksFunction = () => [
  { rel: "apple-touch-icon", sizes: "152x152", href: "/assets/img/apple-touch-icon.png" },
  { rel: "icon", type: "image/png", sizes: "32x32", href: "/assets/img/favicon-32x32.png" },
  { rel: "icon", type: "image/png", sizes: "16x16", href: "/assets/img/favicon-16x16.png" },
  { rel: "manifest", href: "/assets/img/manifest.json" },
  { rel: "mask-icon", href: "/assets/img/safari-pinned-tab.svg", color: "#5bbad5" },
  { rel: "shortcut icon", href: "/assets/img/favicon.ico" },
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css?family=Nunito:400|Open+Sans:300,400,600&display=swap",
  },
];

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#cccccc" />
        <meta name="msapplication-config" content="/assets/img/browserconfig.xml" />
        <Meta />
        <Links />
        <script dangerouslySetInnerHTML={{ __html: themeBootScript }} />
      </head>
      <body>
        <header>
          <SiteNav />
        </header>
        {children}
        <SiteSettings />
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}
