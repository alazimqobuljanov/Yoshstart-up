"use client";

import { useEffect, useMemo, useState } from "react";
import type { Startup } from "@/lib/types";
import { CATEGORIES } from "@/lib/categories";
import { Header } from "./Header";
import { StartupCard } from "./StartupCard";
import { EmptyState } from "./EmptyState";
import { Input } from "./ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Search } from "lucide-react";

interface ProviderDashboardProps {
  name: string;
  email: string;
  onSwitchRole: () => void;
}

export function ProviderDashboard({ name, email, onSwitchRole }: ProviderDashboardProps) {
  const [all, setAll] = useState<Startup[]>([]);
  const [loading, setLoading] = useState(true);
  const [filterCat, setFilterCat] = useState("Barchasi");
  const [search, setSearch] = useState("");

  useEffect(() => {
    (async () => {
      setLoading(true);
      try {
        const res = await fetch("/api/startups");
        const data = await res.json();
        setAll(data.startups ?? []);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  const list = useMemo(() => {
    let result = all;
    if (filterCat !== "Barchasi") result = result.filter((s) => s.category === filterCat);
    if (search) {
      const q = search.toLowerCase();
      result = result.filter((s) => (s.title + s.desc).toLowerCase().includes(q));
    }
    return result;
  }, [all, filterCat, search]);

  return (
    <>
      <Header name={name} email={email} role="provider" onSwitchRole={onSwitchRole} />
      <main className="flex-1 bg-bg py-8 pb-16">
        <div className="container">
          <div className="mb-4 flex items-baseline justify-between gap-2">
            <h2 className="font-display text-[20px] font-bold text-ink">Taxtadagi loyihalar</h2>
            <span className="font-mono text-[12px] text-muted">{list.length} ta topildi</span>
          </div>

          <div className="mb-6 flex flex-wrap gap-3">
            <Select value={filterCat} onValueChange={setFilterCat}>
              <SelectTrigger className="w-full sm:w-[190px]">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Barchasi">Barchasi</SelectItem>
                {CATEGORIES.map((c) => (
                  <SelectItem key={c} value={c}>
                    {c}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <div className="relative min-w-[200px] flex-1 sm:flex-none sm:w-64">
              <Search className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted" />
              <Input
                type="text"
                placeholder="Qidirish..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>

          {loading ? (
            <p className="text-sm text-muted">Yuklanmoqda...</p>
          ) : list.length ? (
            <div className="grid grid-cols-1 gap-5 pt-1 sm:grid-cols-2 lg:grid-cols-3">
              {list.map((s, i) => (
                <StartupCard key={s.id} startup={s} index={i} mode="browse" />
              ))}
            </div>
          ) : (
            <EmptyState
              title="Hozircha loyiha topilmadi"
              desc="Yosh startaperlar tez orada g'oyalarini pinlashadi."
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
