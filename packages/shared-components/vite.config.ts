import react from "@vitejs/plugin-react";
import { resolve } from "path";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      formats: ["es"],
    },
    rollupOptions: {
      external: ["react", "react-dom", "react/jsx-runtime"],
      output: {
        entryFileNames: "[name].js",
        assetFileNames: "assets/[name][extname]",
        globals: {
          react: "React",
          "react-dom": "React-dom",
          "react/jsx-runtime": "react/jsx-runtime",
        },
      },
    },
    sourcemap: true,
    emptyOutDir: true,
    minify: true,
    cssMinify: true,
  },
  plugins: [react(), tsconfigPaths({ root: "." })],
});
