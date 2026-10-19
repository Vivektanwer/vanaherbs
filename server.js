// Simple SSR server. Dev: `npm run dev`. Production: `npm run build` then `npm start`.
import fs from "node:fs";
import express from "express";

const isProd = process.env.NODE_ENV === "production";
const app = express();
let vite;

if (isProd) {
  app.use(express.static("dist/client", { index: false }));
} else {
  const { createServer } = await import("vite");
  vite = await createServer({ server: { middlewareMode: true }, appType: "custom" });
  app.use(vite.middlewares);
}

app.use(async (req, res) => {
  try {
    const url = req.originalUrl;
    let template, render;
    if (isProd) {
      template = fs.readFileSync("dist/client/index.html", "utf-8");
      render = (await import("./dist/server/entry-server.js")).render;
    } else {
      template = await vite.transformIndexHtml(url, fs.readFileSync("index.html", "utf-8"));
      render = (await vite.ssrLoadModule("/src/entry-server.jsx")).render;
    }
    const { html, head } = render(url);
    res.status(200).set({ "Content-Type": "text/html" })
      .end(template.replace("<!--app-head-->", head).replace("<!--app-html-->", html));
  } catch (e) {
    vite?.ssrFixStacktrace(e);
    console.error(e);
    res.status(500).end(e.message);
  }
});

app.listen(5173, () => console.log("VanaHerbs running on http://localhost:5173"));
