# YoshStart

Yosh startaperlarni mentorlar va investorlar bilan bog'laydigan platforma.
Next.js 14 (App Router) + TypeScript + Tailwind CSS + Clerk (autentifikatsiya) asosida qurilgan.

## Tuzilma

```
app/
  page.tsx                — bosh (gate) sahifa
  sign-in/[[...sign-in]]  — Clerk kirish sahifasi
  sign-up/[[...sign-up]]  — Clerk ro'yxatdan o'tish sahifasi
  dashboard/page.tsx      — rol tanlash + dashboard (server component)
  api/startups/           — loyihalar CRUD API
  api/role/               — foydalanuvchi rolini saqlash
components/                — UI qismlari (Header, StartupCard, forms, ...)
lib/                       — turlar, konstantalar, DB konfiguratsiyasi
data/                      — JSON-fayl bazasi (demo uchun)
middleware.ts               — Clerk middleware (/dashboard va /api/role himoyalangan)
```

## O'rnatish

```bash
npm install
cp .env.local.example .env.local
```

## Clerk sozlash

1. [Clerk Dashboard](https://dashboard.clerk.com) → yangi ilova yarating (yoki mavjudini oching).
2. **API Keys** bo'limidan **Publishable key** va **Secret key**'ni oling.
3. Ularni `.env.local` fayliga qo'ying:
   ```
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_...
   CLERK_SECRET_KEY=sk_test_...
   ```
4. Kirish usullarini yoqish uchun **User & Authentication → Social Connections** bo'limidan
   Google (yoki boshqa provayderlarni) yoqing.
5. Ro'yxatdan o'tish/kirish sahifalari avtomatik ravishda `/sign-up` va `/sign-in` manzillarida ishlaydi,
   muvaffaqiyatli kirishdan so'ng foydalanuvchi `/dashboard`ga yo'naltiriladi.

## Ishga tushirish

```bash
npm run dev
```

`http://localhost:3000` manzilida ochiladi.

## Ma'lumotlar bazasi haqida eslatma

`lib/db.ts` va `lib/roles.ts` hozircha `data/` papkasidagi JSON fayllardan foydalanadi — bu faqat
local development yoki bitta-serverli hosting uchun ishlaydi. **Vercel kabi serverless
platformalarga chiqarishdan oldin** buni haqiqiy bazaga (masalan, [Supabase](https://supabase.com),
[Neon](https://neon.tech) yoki [PlanetScale](https://planetscale.com)) almashtiring — bu ikki fayldagi
funksiyalar interfeysini saqlab qolgan holda ichki implementatsiyani o'zgartirish kifoya.

## Deploy

Eng oson yo'l — [Vercel](https://vercel.com):

```bash
npm install -g vercel
vercel
```

Deploy paytida `.env.local`dagi barcha o'zgaruvchilarni Vercel loyihasining
**Environment Variables** bo'limiga qo'shishni unutmang, va `NEXTAUTH_URL`ni
haqiqiy domeningizga o'zgartiring.
