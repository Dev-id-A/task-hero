import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  test: {
    environment: "jsdom",      // <- simula el DOM
    globals: true,             // para usar describe, it, expect sin importarlos
    setupFiles: "./vitest.setup.ts", // <- importamos jest-dom
    include: ["src/**/*.test.{ts,tsx}"], // para asegurarte que corran tus tests
  },
});