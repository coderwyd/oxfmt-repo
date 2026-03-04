import vue from "@vitejs/plugin-vue";
import unoCSS from "unocss/vite";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  return {
    plugins: [vue(), unoCSS()],
  };
});
