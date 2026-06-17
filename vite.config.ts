// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

// STATIC_EXPORT=1 → produce a fully static, FTP-ready build for GitHub Pages:
// relative asset paths (./assets/...), prerendered index.html, no server output.
const isStaticExport = process.env.STATIC_EXPORT === "1";

export default defineConfig({
  vite: {
    base: isStaticExport ? "./" : "/",
  },
  tanstackStart: {
    server: { entry: "server" },
    ...(isStaticExport
      ? {
          prerender: { enabled: true, crawlLinks: true, autoSubfolderIndex: false },
          pages: [{ path: "/", prerender: { enabled: true } }],
          spa: { enabled: true },
        }
      : {}),
  },
  nitro: isStaticExport ? { preset: "static" } : undefined,
});
