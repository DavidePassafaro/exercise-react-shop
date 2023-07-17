import react from "@vitejs/plugin-react";
import * as path from "path";
import { defineConfig } from "vite";

// https://vitejs.dev/config/

export default defineConfig({
  resolve: {
    alias: [
      { find: "@shared", replacement: path.resolve(__dirname, "src/shared") },
      { find: "@assets", replacement: path.resolve(__dirname, "src/assets") },
    ],
  },
  envDir: "environments",
  plugins: [react()],
});
