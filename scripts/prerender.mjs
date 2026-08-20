// Postbuild step: server-renders <App/> with react-dom/server and bakes the
// resulting HTML into dist/index.html. AI crawlers (GPTBot, ClaudeBot,
// PerplexityBot) do not execute JavaScript, so without this they only ever
// see an empty <div id="root">. react-dom/server's renderToString inserts
// the hydration boundary markers React needs, so the client cleanly
// hydrates over this markup afterward (see src/main.jsx's hydrateRoot path).
import { build } from "vite";
import { readFile, writeFile, rm } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { join } from "node:path";

const ROOT = fileURLToPath(new URL("..", import.meta.url));
const SSR_OUT_DIR = "dist-ssr";

async function main() {
  // Build a Node-compatible (non-hashed, non-browser-target) bundle of the
  // server entry so we can import it directly below.
  await build({
    root: ROOT,
    build: {
      ssr: "src/entry-server.jsx",
      outDir: SSR_OUT_DIR,
      emptyOutDir: true,
      rollupOptions: {
        output: { entryFileNames: "entry-server.js" },
      },
    },
    logLevel: "warn",
  });

  const entryPath = join(ROOT, SSR_OUT_DIR, "entry-server.js");
  const { render } = await import(`${entryPath}?t=${Date.now()}`);
  const appHTML = render();

  const indexPath = join(ROOT, "dist", "index.html");
  const html = await readFile(indexPath, "utf-8");
  const prerendered = html.replace(
    '<div id="root"></div>',
    `<div id="root">${appHTML}</div>`
  );

  if (prerendered === html) {
    throw new Error(
      'Could not find <div id="root"></div> placeholder in dist/index.html'
    );
  }

  await writeFile(indexPath, prerendered);
  await rm(join(ROOT, SSR_OUT_DIR), { recursive: true, force: true });

  console.log(
    `[prerender] Baked ${appHTML.length.toLocaleString()} chars of server-rendered HTML into dist/index.html`
  );
}

main().catch((err) => {
  console.error("[prerender] Failed:", err);
  process.exit(1);
});
