import { defineConfig } from "vite";
import dts from "vite-plugin-dts";

export default defineConfig({
  build: {
    lib: {
      entry: "src/main.ts",
      name: "package-c",
      fileName: "package-c",
      formats: ["es", "cjs"],
    },
  },
  plugins: [dts()],
});
