import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.ts"],
  minify: true,
  bundle: true,
  minifyWhitespace: true,
  minifyIdentifiers: true,
  minifySyntax: true,
  dts: true,
  splitting: false,
  sourcemap: true,
  clean: true,
  outDir: "./.build",
});
