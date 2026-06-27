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
        automotiveWebsite: resolve(
          __dirname,
          "src/pages/automotiveWebsite.html",
        ),
        dockAndBramble: resolve(__dirname, "src/pages/dockAndBramble.html"),
        gamingDashboard: resolve(__dirname, "src/pages/gamingDashboard.html"),
        labos: resolve(__dirname, "src/pages/labos.html"),
      },
    },
    outDir: "dist",
  },
  base: "/portfolio/",
});
