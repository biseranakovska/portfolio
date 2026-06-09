import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  root: "src",
  build: {
    emptyOutDir: true,
    assetsInlineLimit: 0,
    rollupOptions: {
      input: {
        main: resolve(__dirname, "src/index.html"),
        // projectSingle: resolve(__dirname, "src/pages/projectSingle.html"),
      },
    },
    outDir: "../build",
  },
  base: "/portfolio/",
});
