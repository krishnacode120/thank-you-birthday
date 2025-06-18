// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

export default defineConfig({
  base: '/thank-you-birthday/', // 👈 Change this to your GitHub repo name exactly
  plugins: [react()],
});
