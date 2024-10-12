import react from "@vitejs/plugin-react";
import path from "path";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@mono/shared-components/**": path.resolve(
        __dirname,
        "../../packages/shared-components/*",
      ),
    },
  },
});
