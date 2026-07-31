import { promises as fs } from "fs";
import path from "path";
import type { Startup } from "./types";

/**
 * Demo uchun oddiy JSON-fayl bazasi.
 *
 * DIQQAT: Bu faqat local development / bitta-serverli hosting uchun ishlaydi.
 * Vercel kabi serverless platformalarda fayl tizimi vaqtinchalik bo'ladi va
 * deploy'lar orasida ma'lumot saqlanmaydi. Productionga chiqarishdan oldin
 * buni Postgres (Supabase/Neon), PlanetScale yoki boshqa haqiqiy bazaga
 * almashtiring — interfeys (getStartups/saveStartups) bir xil qoladi,
 * shuning uchun faqat shu faylni almashtirish kifoya.
 */

const DB_PATH = path.join(process.cwd(), "data", "startups.json");

async function ensureFile() {
  try {
    await fs.access(DB_PATH);
  } catch {
    await fs.mkdir(path.dirname(DB_PATH), { recursive: true });
    await fs.writeFile(DB_PATH, "[]", "utf-8");
  }
}

export async function getStartups(): Promise<Startup[]> {
  await ensureFile();
  const raw = await fs.readFile(DB_PATH, "utf-8");
  try {
    return JSON.parse(raw) as Startup[];
  } catch {
    return [];
  }
}

export async function saveStartups(startups: Startup[]): Promise<void> {
  await ensureFile();
  await fs.writeFile(DB_PATH, JSON.stringify(startups, null, 2), "utf-8");
}
