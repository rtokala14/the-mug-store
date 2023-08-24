import type { LinksFunction } from "@remix-run/cloudflare";
import { cssBundleHref } from "@remix-run/css-bundle";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  type V2_MetaFunction,
} from "@remix-run/react";

import styles from "./globals.css";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

export const meta: V2_MetaFunction = () => {
  return [
    { title: "The Mug Store" },
    { name: "description", content: "Welcome to the Mug store!" },
  ];
};

export const links: LinksFunction = () => [
  ...(cssBundleHref ? [{ rel: "stylesheet", href: cssBundleHref }] : []),
  { rel: "stylesheet", href: styles },
];

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <div className="page">
          <main className="flex flex-col flex-grow min-h-[90vh]">
            <Header />
            <Outlet />
          </main>
          <div className="section dark">
            <div className="container">
              <Footer />
            </div>
          </div>
        </div>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
