import { defineConfig } from 'vite';

export default defineConfig({
  base: './',
  // Repo ichidagi ota papkada (Yoshstart-up) Tailwind uchun postcss.config.js bor —
  // PostCSS papkalarni yuqoriga qarab qidirgani uchun o'shani topib olishi mumkin edi.
  // Shu yerda bo'sh CSS konfiguratsiyasini aniq belgilab, o'sha faylni butunlay chetlab o'tamiz.
  css: {
    postcss: {}
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets'
  }
});
