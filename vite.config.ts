import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  base: "./",
  resolve: {
    alias: [
      { find: '@', replacement: '/src' },
    ],
    extensions: [".mjs", ".js", ".ts", ".jsx", ".tsx", ".json", ".vue"],
  },
  server: {
    host: "localhost",
    port: 8080,
  },
  build: {
    outDir: "dist",
  },
});