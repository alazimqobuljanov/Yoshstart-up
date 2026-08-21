# [Ismingiz] — Portfolio (Vite)

Vite asosida qurilgan portfolio sayti. Build jarayoni Vite orqali boshqariladi — dev serverda tez ishlash, production uchun esa optimallashtirilgan (minifikatsiya qilingan) fayllar chiqadi.

## Fayllar

- `index.html` — sahifa tuzilishi va matn (Vite root fayli)
- `src/style.css` — dizayn
- `src/main.js` — interaktivlik (mobil menyu, scroll animatsiyasi, loyihalarni soha bo'yicha filtrlash)
- `public/favicon.svg` — sayt ikonkasi

## 1-qadam — Kerakli paketlarni o'rnatish

Terminalda shu papkaga o'ting va quyidagini bajaring (Node.js o'rnatilgan bo'lishi kerak):

```bash
npm install
```

## 2-qadam — Lokal serverda ishga tushirish

```bash
npm run dev
```

Terminalda ko'rsatilgan manzilni (odatda `http://localhost:5173`) brauzerda oching. Fayllarga o'zgartirish kiritganingizda sahifa avtomatik yangilanadi.

## 3-qadam — Tarkibni tahrirlash

`index.html` faylini oching va kvadrat qavs ichidagi barcha joylarni ([Ismingiz], [Loyiha nomi 01] va h.k.) o'z ma'lumotlaringiz bilan almashtiring:

- **Hero bo'limi**: ismingiz, kasbingiz, qisqa tanishtiruv
- **Selected Work / Tanlangan Ishlar**: loyihalaringiz, "Code" kartochkalarida ikkita havola (jonli demo + GitHub kodi), "Design" kartochkalarida bitta havola (masalan, Figma)
- **AI-Generated Work**: video sarlavhasi, qisqa bio, aniq prompt matni, va video turgan joyga havola
- **About / Men Haqimda**: to'liqroq bio va yillar bo'yicha yutuqlar ro'yxati
- **Contact / Aloqa**: email, GitHub, LinkedIn havolalaringiz

Dizaynga tegishli barcha o'zgarishlar `src/style.css` faylida.

## 4-qadam — Production uchun build qilish

```bash
npm run build
```

Bu `dist/` papkasida optimallashtirilgan, joylashtirishga tayyor fayllarni yaratadi. Natijani lokal tekshirish uchun:

```bash
npm run preview
```

## 5-qadam — GitHub Pages'ga joylashtirish (avtomatik)

Loyihada `.github/workflows/deploy.yml` fayli bor — bu har safar `main` branch'ga push qilganingizda GitHub avtomatik ravishda `npm install`, `npm run build` ni bajarib, `dist/` papkasini Pages sifatida chiqaradi. Sizga qo'lda build qilish shart emas.

```bash
git init
git add .
git commit -m "Portfolio saytini qo'shish"
git branch -M main
git remote add origin https://github.com/FOYDALANUVCHI_NOMI/REPO_NOMI.git
git push -u origin main
```

So'ng GitHub'da repo sahifangizga o'ting → **Settings → Pages** → "Source" qismida **GitHub Actions**ni tanlang (branch emas!). Push qilingandan keyin **Actions** bo'limida workflow avtomatik ishga tushadi (1-2 daqiqa) va sayt shu manzilda ochiladi:

`https://FOYDALANUVCHI_NOMI.github.io/REPO_NOMI/`

## Muqobil — Vercel'ga joylashtirish

**A) Vercel CLI orqali (eng tezkor):**

```bash
npm install -g vercel
vercel
```

Savollarga javob bering (loyiha nomi, papka va h.k.) — Vercel avtomatik `npm run build` ni chaqiradi va `dist/` papkasini joylashtiradi. Keyingi safar `vercel --prod` bilan production'ga chiqarasiz.

**B) GitHub orqali:** yuqoridagi git buyruqlarini bajargandan so'ng [vercel.com](https://vercel.com) saytida **Add New → Project** orqali shu GitHub repositoriyani ulang. Vercel Vite loyihasini avtomatik taniydi — qo'shimcha sozlash shart emas.

## Keyinchalik yangilash

```bash
git add .
git commit -m "Yangilanish tavsifi"
git push
```

GitHub Actions (yoki Vercel ulangan bo'lsa Vercel) sayt bir necha daqiqada avtomatik yangilanadi.
