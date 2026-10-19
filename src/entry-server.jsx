import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router";
import App from "./App";
import { buildHead } from "./seo";

// Called by server.js for every request.
export function render(url) {
  const html = renderToString(
    <StaticRouter location={url}>
      <App />
    </StaticRouter>
  );
  return { html, head: buildHead(url) };
}
