import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// GitHub Pages serves a project repo from /<repo>/, so the build needs to know
// that prefix. The deploy workflow sets VITE_BASE; local builds and a custom
// domain use the root.
const base = process.env.VITE_BASE || '/';

export default defineConfig({
  base,
  plugins: [react()],
  server: { port: 5173 },
  build: {
    outDir: 'dist',
    assetsDir: 'assets/build',
  },
});
