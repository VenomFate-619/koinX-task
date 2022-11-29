import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { viteCommonjs } from "@originjs/vite-plugin-commonjs";


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: [
          [
            "babel-plugin-styled-components",
            {
              ssr: false,
              pure: true,
              displayName: true,
              fileName: true,
            },
          ],
        ],
      },
    }),
    viteCommonjs(),
  ],
  resolve: {
    alias: {
      "@src": path.resolve(__dirname, "./src"),
    },
  },
});
