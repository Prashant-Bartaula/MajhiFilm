import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  base: "/MajhiFilm/",
  build: {
    outDir: "docs", // this must match what GitHub expects
  },
  plugins: [tailwindcss()],
});
