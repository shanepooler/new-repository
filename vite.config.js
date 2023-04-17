import react from '@vitejs/plugin-react-swc';
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // This allows you to do imports with from "@/components/MyComponent" (instead of from "../../../components/MyComponent", etc.)
      "@": "/src"
    },
  }
});
