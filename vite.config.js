import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  base: '/broadband/',  // Replace with your GitHub repo name
  plugins: [react(), tailwindcss()]
 
});
