import { NextResponse } from "next/server";
import { currentUser } from "@clerk/nextjs/server";
import { getStartups, saveStartups } from "@/lib/db";
import { CATEGORIES, NEEDS } from "@/lib/categories";
import type { StartupInput } from "@/lib/types";

export async function PATCH(req: Request, { params }: { params: { id: string } }) {
  const user = await currentUser();
  const userEmail = user?.primaryEmailAddress?.emailAddress;
  if (!userEmail) {
    return NextResponse.json({ error: "Ruxsat yo'q" }, { status: 401 });
  }

  const startups = await getStartups();
  const idx = startups.findIndex((s) => s.id === params.id);
  if (idx === -1) {
    return NextResponse.json({ error: "Topilmadi" }, { status: 404 });
  }
  // Faqat loyiha egasi tahrirlay oladi
  if (startups[idx].creatorEmail !== userEmail) {
    return NextResponse.json({ error: "Bu loyiha sizga tegishli emas" }, { status: 403 });
  }

  const body = (await req.json()) as Partial<StartupInput>;
  const title = (body.title ?? startups[idx].title).trim();
  const desc = (body.desc ?? startups[idx].desc).trim();
  const category = body.category ?? startups[idx].category;
  const need = body.need ?? startups[idx].need;
  const creatorEmail = (body.creatorEmail ?? startups[idx].creatorEmail).trim();

  if (!title || !desc) {
    return NextResponse.json({ error: "Nomi va tavsifi majburiy" }, { status: 400 });
  }
  if (!CATEGORIES.includes(category as (typeof CATEGORIES)[number])) {
    return NextResponse.json({ error: "Noto'g'ri kategoriya" }, { status: 400 });
  }
  if (!NEEDS.includes(need as (typeof NEEDS)[number])) {
    return NextResponse.json({ error: "Noto'g'ri ehtiyoj turi" }, { status: 400 });
  }

  startups[idx] = {
    ...startups[idx],
    title: title.slice(0, 80),
    desc: desc.slice(0, 500),
    category,
    need,
    creatorEmail,
  };
  await saveStartups(startups);

  return NextResponse.json({ startup: startups[idx] });
}

export async function DELETE(_req: Request, { params }: { params: { id: string } }) {
  const user = await currentUser();
  const userEmail = user?.primaryEmailAddress?.emailAddress;
  if (!userEmail) {
    return NextResponse.json({ error: "Ruxsat yo'q" }, { status: 401 });
  }

  const startups = await getStartups();
  const target = startups.find((s) => s.id === params.id);
  if (!target) {
    return NextResponse.json({ error: "Topilmadi" }, { status: 404 });
  }
  if (target.creatorEmail !== userEmail) {
    return NextResponse.json({ error: "Bu loyiha sizga tegishli emas" }, { status: 403 });
  }

  const filtered = startups.filter((s) => s.id !== params.id);
  await saveStartups(filtered);

  return NextResponse.json({ ok: true });
}
