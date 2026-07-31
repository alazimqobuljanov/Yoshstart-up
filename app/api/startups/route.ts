import { NextResponse } from "next/server";
import { currentUser } from "@clerk/nextjs/server";
import { getStartups, saveStartups } from "@/lib/db";
import { CATEGORIES, NEEDS } from "@/lib/categories";
import type { Startup, StartupInput } from "@/lib/types";

export async function GET() {
  const startups = await getStartups();
  const sorted = [...startups].sort(
    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  );
  return NextResponse.json({ startups: sorted });
}

export async function POST(req: Request) {
  const user = await currentUser();
  const userEmail = user?.primaryEmailAddress?.emailAddress;
  const userName = user ? (user.fullName ?? user.firstName) : null;
  if (!userEmail || !userName) {
    return NextResponse.json({ error: "Ruxsat yo'q" }, { status: 401 });
  }

  const body = (await req.json()) as Partial<StartupInput>;
  const title = (body.title ?? "").trim();
  const desc = (body.desc ?? "").trim();
  const category = body.category ?? "";
  const need = body.need ?? "";
  const creatorEmail = (body.creatorEmail ?? userEmail).trim();

  if (!title || !desc) {
    return NextResponse.json({ error: "Nomi va tavsifi majburiy" }, { status: 400 });
  }
  if (!CATEGORIES.includes(category as (typeof CATEGORIES)[number])) {
    return NextResponse.json({ error: "Noto'g'ri kategoriya" }, { status: 400 });
  }
  if (!NEEDS.includes(need as (typeof NEEDS)[number])) {
    return NextResponse.json({ error: "Noto'g'ri ehtiyoj turi" }, { status: 400 });
  }

  const startups = await getStartups();
  const newStartup: Startup = {
    id: crypto.randomUUID(),
    title: title.slice(0, 80),
    desc: desc.slice(0, 500),
    category,
    need,
    creatorName: userName,
    creatorEmail,
    createdAt: new Date().toISOString(),
  };
  startups.push(newStartup);
  await saveStartups(startups);

  return NextResponse.json({ startup: newStartup }, { status: 201 });
}
