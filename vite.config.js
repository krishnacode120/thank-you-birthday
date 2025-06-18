// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

export default defineConfig({
  base: '/thank-you-birthday/', // 👈 your repo name
  plugins: [react()],
});
