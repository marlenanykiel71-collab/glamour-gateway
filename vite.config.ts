// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - tanstackStart, viteReact, tailwindcss, tsConfigPaths, nitro (build-only using cloudflare as a default target),
//     componentTagger (dev-only), VITE_* env injection, @ path alias, React/TanStack dedupe,
//     error logger plugins, and sandbox detection (port/host/strictPort).
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

// When STATIC_EXPORT=1 (used by the GitHub Pages workflow) we produce a fully
// static, FTP-ready build: relative asset paths (./assets/...), prerendered
// index.html, no Cloudflare/Nitro server output.
const isStaticExport = process.env.STATIC_EXPORT === "1";

export default defineConfig({
  vite: {
    // Relative base so the built site works from any subdirectory / FTP root.
    base: isStaticExport ? "./" : "/",
  },
  tanstackStart: {
    server: { entry: "server" },
    // Prerender "/" into a static index.html during build.
    prerender: {
      enabled: true,
      crawlLinks: true,
      autoSubfolderIndex: false,
    },
    pages: [{ path: "/", prerender: { enabled: true } }],
    spa: { enabled: true },
  },
  // Force the static Nitro preset on GH Actions so the deploy is a plain
  // bundle of HTML + assets/ (no Cloudflare Worker output).
  nitro: isStaticExport ? { preset: "static" } : undefined,
});
