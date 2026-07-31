"use client";

import { useState } from "react";
import { useClerk } from "@clerk/nextjs";
import Link from "next/link";
import type { Role } from "@/lib/types";
import { RefreshCw, LogOut, MoreVertical } from "lucide-react";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";

interface HeaderProps {
  name: string;
  email: string;
  role: Role;
  onSwitchRole: () => void;
}

function initials(name: string) {
  return name
    .trim()
    .split(/\s+/)
    .map((w) => w[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

export function Header({ name, email, role, onSwitchRole }: HeaderProps) {
  const { signOut } = useClerk();
  const [menuOpen, setMenuOpen] = useState(false);
  const roleLabel = role === "creator" ? "Yaratuvchi" : "Beruvchi";

  return (
    <header className="sticky top-0 z-30 border-b border-border bg-card/90 backdrop-blur-md">
      <div className="container flex items-center justify-between gap-3 py-3.5">
        <Link href="/" className="flex items-center gap-2 font-display text-lg font-bold text-ink">
          <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-gradient-to-br from-brand to-amber text-[12px] font-black text-white">
            Y
          </span>
          YoshStart
        </Link>

        <div className="flex items-center gap-2.5">
          <Badge variant={role === "creator" ? "brand" : "amber"}>{roleLabel}</Badge>

          <div className="hidden items-center gap-2 text-right sm:flex">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-navy-900 font-mono text-xs font-bold text-white">
              {initials(name)}
            </div>
            <div className="min-w-0">
              <b className="block max-w-[140px] truncate text-[13.5px] font-semibold text-ink">
                {name}
              </b>
              <span className="block max-w-[140px] truncate text-[11px] text-muted">{email}</span>
            </div>
          </div>

          <div className="hidden items-center gap-2 sm:flex">
            <Button variant="outline" size="sm" onClick={onSwitchRole} className="gap-1.5">
              <RefreshCw className="h-3.5 w-3.5" /> Rolni almashtirish
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => signOut({ redirectUrl: "/" })}
              className="gap-1.5"
            >
              <LogOut className="h-3.5 w-3.5" /> Chiqish
            </Button>
          </div>

          <div className="relative sm:hidden">
            <button
              aria-label="Menyu"
              onClick={() => setMenuOpen((v) => !v)}
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-card"
            >
              <MoreVertical className="h-4 w-4" />
            </button>
            {menuOpen && (
              <div className="absolute right-0 top-[50px] flex min-w-[190px] flex-col gap-0.5 rounded-xl border border-border bg-card p-1.5 shadow-card-hover">
                <button
                  onClick={() => {
                    setMenuOpen(false);
                    onSwitchRole();
                  }}
                  className="flex items-center gap-2 rounded-lg px-3 py-2.5 text-left text-[13.5px] font-medium hover:bg-bg"
                >
                  <RefreshCw className="h-4 w-4 text-muted" /> Rolni almashtirish
                </button>
                <button
                  onClick={() => signOut({ redirectUrl: "/" })}
                  className="flex items-center gap-2 rounded-lg px-3 py-2.5 text-left text-[13.5px] font-medium hover:bg-bg"
                >
                  <LogOut className="h-4 w-4 text-muted" /> Chiqish
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
