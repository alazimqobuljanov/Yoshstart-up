"use client";

import { useState } from "react";
import type { Role } from "@/lib/types";
import { Lightbulb, HandHeart } from "lucide-react";
import { Card } from "./ui/card";

export function RoleSelect({
  firstName,
  onSelect,
}: {
  firstName: string;
  onSelect: (role: Role) => void;
}) {
  const [loading, setLoading] = useState<Role | null>(null);

  async function choose(role: Role) {
    setLoading(role);
    try {
      const res = await fetch("/api/role", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ role }),
      });
      if (!res.ok) throw new Error("failed");
      onSelect(role);
    } catch {
      setLoading(null);
    }
  }

  return (
    <div className="flex flex-1 flex-col items-center justify-center bg-bg px-5 py-16 text-center">
      <h2 className="mb-2 font-display text-[clamp(24px,5vw,34px)] font-bold text-ink">
        Xush kelibsiz, {firstName}!
      </h2>
      <p className="mb-10 text-[15px] text-muted">Platformada qaysi rolda ishtirok etasiz?</p>
      <div className="flex w-full max-w-[660px] flex-wrap justify-center gap-5">
        <button
          disabled={loading !== null}
          onClick={() => choose("creator")}
          className="flex-1 basis-[260px] text-left disabled:opacity-60"
        >
          <Card className="max-w-[300px] p-6 transition-all hover:-translate-y-1 hover:border-brand/30 hover:shadow-card-hover">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-brand-50 text-brand">
              <Lightbulb className="h-5 w-5" />
            </div>
            <h3 className="mb-2 font-display text-[17px] font-bold text-ink">
              Men g&apos;oyamni taqdim etaman
            </h3>
            <p className="text-[13.5px] leading-relaxed text-muted">
              Startup loyihangizni pinlang, mentor yoki investor toping.
            </p>
          </Card>
        </button>

        <button
          disabled={loading !== null}
          onClick={() => choose("provider")}
          className="flex-1 basis-[260px] text-left disabled:opacity-60"
        >
          <Card className="max-w-[300px] p-6 transition-all hover:-translate-y-1 hover:border-amber/30 hover:shadow-card-hover">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-amber-50 text-amber-600">
              <HandHeart className="h-5 w-5" />
            </div>
            <h3 className="mb-2 font-display text-[17px] font-bold text-ink">
              Men yordam beraman
            </h3>
            <p className="text-[13.5px] leading-relaxed text-muted">
              Mentor yoki investor sifatida yosh startaperlarga ko&apos;mak bering.
            </p>
          </Card>
        </button>
      </div>
    </div>
  );
}
