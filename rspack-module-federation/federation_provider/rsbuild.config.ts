import { defineConfig } from "@rsbuild/core";
import { pluginReact } from "@rsbuild/plugin-react";
import { pluginModuleFederation } from "@module-federation/rsbuild-plugin";

export default defineConfig({
  // tools: {
  //   rspack: {
  //     plugins: [
  //       new rspack.DefinePlugin({
  //         // @ts-ignore
  //         "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV),
  //       }),
  //     ],
  //   },
  // },
  plugins: [
    pluginReact(),
    pluginModuleFederation({
      name: "federation_provider",
      exposes: {
        "./button": "./src/button.tsx",
      },
      shared: ["react", "react-dom", "react-dom/client"],
    }),
  ],
  dev: {
    assetPrefix: "http://localhost:3000/",
  },
  output: {
    assetPrefix: "http://localhost:3000/",
  },
  server: {
    port: 3000,
  },
});
