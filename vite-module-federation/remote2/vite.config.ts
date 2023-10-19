import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";
import tsconfigPaths from "vite-tsconfig-paths";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "remote2",
      filename: "remoteEntry.js",
      exposes: {
        "./WeatherWidget": "./src/components/WeatherWidget.tsx",
      },
      shared: ["react", "react-dom"],
    }),
    tsconfigPaths(),
  ],
  server: {
    port: 5002,
  },
  build: {
    modulePreload: false,
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
  },
});
