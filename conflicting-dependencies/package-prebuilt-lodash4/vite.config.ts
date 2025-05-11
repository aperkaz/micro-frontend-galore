import { defineConfig } from "vite";
import dts from "vite-plugin-dts";

export default defineConfig({
  build: {
    lib: {
      entry: "src/main.ts",
      name: "package-prebuilt-lodash4",
      fileName: "package-prebuilt-lodash4",
      formats: ["es", "cjs"],
    },
  },
  plugins: [dts()],
});
