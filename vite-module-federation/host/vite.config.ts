import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";
import tsconfigPaths from "vite-tsconfig-paths";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "host",
      remotes: {
        remote1: "http://localhost:5001/dist/assets/remoteEntry.js",
        remote2: "http://localhost:5002/dist/assets/remoteEntry.js",
      },
      shared: ["react"],
    }),
    tsconfigPaths(),
  ],
  server: {
    port: 5000,
  },
  build: {
    modulePreload: false,
    target: "esnext",

    minify: false,
    cssCodeSplit: false,
  },
});
