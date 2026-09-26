import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Bundle all deps into the SSR build used for pre-rendering, so CJS-only
  // packages (e.g. react-scroll) don't need Node ESM interop.
  ssr: { noExternal: true },
})
