import { NextResponse } from "next/server";
import { currentUser } from "@clerk/nextjs/server";
import { getRole, setRole } from "@/lib/roles";
import type { Role } from "@/lib/types";

export async function GET() {
  const user = await currentUser();
  const email = user?.primaryEmailAddress?.emailAddress;
  if (!email) {
    return NextResponse.json({ error: "Ruxsat yo'q" }, { status: 401 });
  }
  const role = await getRole(email);
  return NextResponse.json({ role });
}

export async function POST(req: Request) {
  const user = await currentUser();
  const email = user?.primaryEmailAddress?.emailAddress;
  if (!email) {
    return NextResponse.json({ error: "Ruxsat yo'q" }, { status: 401 });
  }
  const body = await req.json();
  const role = body.role as Role;
  if (role !== "creator" && role !== "provider") {
    return NextResponse.json({ error: "Noto'g'ri rol" }, { status: 400 });
  }
  await setRole(email, role);
  return NextResponse.json({ ok: true, role });
}
