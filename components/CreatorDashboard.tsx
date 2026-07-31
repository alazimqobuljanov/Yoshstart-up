"use client";

import { useEffect, useState } from "react";
import type { Startup } from "@/lib/types";
import { Header } from "./Header";
import { StartupForm } from "./StartupForm";
import { StartupCard } from "./StartupCard";
import { EmptyState } from "./EmptyState";
import { useToast } from "@/app/providers";

interface CreatorDashboardProps {
  name: string;
  email: string;
  onSwitchRole: () => void;
}

export function CreatorDashboard({ name, email, onSwitchRole }: CreatorDashboardProps) {
  const [mine, setMine] = useState<Startup[]>([]);
  const [editing, setEditing] = useState<Startup | null>(null);
  const [loading, setLoading] = useState(true);
  const { showToast } = useToast();

  async function load() {
    setLoading(true);
    try {
      const res = await fetch("/api/startups");
      const data = await res.json();
      const all: Startup[] = data.startups ?? [];
      setMine(all.filter((s) => s.creatorEmail === email));
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    load();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function handleSubmit(payload: {
    title: string;
    desc: string;
    category: string;
    need: string;
    creatorEmail: string;
  }) {
    try {
      if (editing) {
        const res = await fetch(`/api/startups/${editing.id}`, {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });
        if (!res.ok) throw new Error();
        showToast("Loyiha yangilandi!");
        setEditing(null);
      } else {
        const res = await fetch("/api/startups", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });
        if (!res.ok) throw new Error();
        showToast("Loyiha taxtaga pinlandi!");
      }
      await load();
    } catch {
      showToast("Xatolik yuz berdi, qayta urinib ko'ring.", "err");
    }
  }

  async function handleDelete(id: string) {
    if (!confirm("Bu loyihani o'chirishga ishonchingiz komilmi?")) return;
    try {
      const res = await fetch(`/api/startups/${id}`, { method: "DELETE" });
      if (!res.ok) throw new Error();
      if (editing?.id === id) setEditing(null);
      showToast("Loyiha o'chirildi");
      await load();
    } catch {
      showToast("O'chirishda xatolik yuz berdi.", "err");
    }
  }

  return (
    <>
      <Header name={name} email={email} role="creator" onSwitchRole={onSwitchRole} />
      <main className="flex-1 bg-bg py-8 pb-16">
        <div className="container">
          <StartupForm
            userEmail={email}
            editing={editing}
            onCancelEdit={() => setEditing(null)}
            onSubmit={handleSubmit}
          />

          <div className="mb-4 flex items-baseline justify-between gap-2">
            <h2 className="font-display text-[20px] font-bold text-ink">Mening loyihalarim</h2>
            <span className="font-mono text-[12px] text-muted">{mine.length} ta</span>
          </div>

          {loading ? (
            <p className="text-sm text-muted">Yuklanmoqda...</p>
          ) : mine.length ? (
            <div className="grid grid-cols-1 gap-5 pt-1 sm:grid-cols-2 lg:grid-cols-3">
              {mine.map((s, i) => (
                <StartupCard
                  key={s.id}
                  startup={s}
                  index={i}
                  mode="owner"
                  onEdit={setEditing}
                  onDelete={handleDelete}
                />
              ))}
            </div>
          ) : (
            <EmptyState
              title="Hali birorta loyiha yo'q"
              desc="Yuqoridagi shakl orqali birinchi g'oyangizni pinlang."
            />
          )}
        </div>
      </main>
      <footer className="border-t border-border bg-card py-4 text-center font-mono text-[11px] text-muted">
        Loyihalar barcha foydalanuvchilarga umumiy ko&apos;rinadi.
      </footer>
    </>
  );
}
