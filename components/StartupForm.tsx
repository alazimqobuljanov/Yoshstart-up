"use client";

import { useEffect, useState } from "react";
import { CATEGORIES, NEEDS } from "@/lib/categories";
import type { Startup } from "@/lib/types";
import { Card } from "./ui/card";
import { Input, Textarea } from "./ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";

interface StartupFormProps {
  userEmail: string;
  editing: Startup | null;
  onCancelEdit: () => void;
  onSubmit: (data: {
    title: string;
    desc: string;
    category: string;
    need: string;
    creatorEmail: string;
  }) => Promise<void>;
}

const label = "mb-1.5 block font-mono text-[11px] font-bold uppercase tracking-wide text-muted";

export function StartupForm({ userEmail, editing, onCancelEdit, onSubmit }: StartupFormProps) {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [category, setCategory] = useState<string>(CATEGORIES[0]);
  const [need, setNeed] = useState<string>(NEEDS[0]);
  const [email, setEmail] = useState(userEmail);
  const [titleInvalid, setTitleInvalid] = useState(false);
  const [descInvalid, setDescInvalid] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    if (editing) {
      setTitle(editing.title);
      setDesc(editing.desc);
      setCategory(editing.category);
      setNeed(editing.need);
      setEmail(editing.creatorEmail);
    } else {
      setTitle("");
      setDesc("");
      setCategory(CATEGORIES[0]);
      setNeed(NEEDS[0]);
      setEmail(userEmail);
    }
  }, [editing, userEmail]);

  async function handleSubmit() {
    const t = title.trim();
    const d = desc.trim();
    let ok = true;
    if (!t) { setTitleInvalid(true); ok = false; }
    if (!d) { setDescInvalid(true); ok = false; }
    if (!ok) return;

    setSubmitting(true);
    try {
      await onSubmit({ title: t, desc: d, category, need, creatorEmail: email || userEmail });
      if (!editing) {
        setTitle("");
        setDesc("");
        setCategory(CATEGORIES[0]);
        setNeed(NEEDS[0]);
      }
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <Card className="mb-8 p-6 sm:p-7">
      <div className="mb-5 flex items-baseline justify-between gap-2">
        <h2 className="font-display text-[20px] font-bold text-ink">
          {editing ? "Loyihani tahrirlash" : "Yangi loyiha pinlash"}
        </h2>
        {editing && (
          <Button variant="outline" size="sm" onClick={onCancelEdit}>
            Bekor qilish
          </Button>
        )}
      </div>

      <div className="mb-4">
        <label className={label}>Loyiha nomi</label>
        <Input
          type="text"
          maxLength={80}
          value={title}
          onChange={(e) => { setTitle(e.target.value); setTitleInvalid(false); }}
          placeholder="Masalan: EcoBox — qayta ishlash servisi"
          className={cn(titleInvalid && "border-danger ring-4 ring-danger/10")}
        />
      </div>

      <div className="mb-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <label className={label}>Kategoriya</label>
          <Select value={category} onValueChange={setCategory}>
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {CATEGORIES.map((c) => (
                <SelectItem key={c} value={c}>
                  {c}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div>
          <label className={label}>Nima kerak?</label>
          <Select value={need} onValueChange={setNeed}>
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {NEEDS.map((n) => (
                <SelectItem key={n} value={n}>
                  {n}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="mb-4">
        <label className={label}>Qisqacha tavsif</label>
        <Textarea
          maxLength={500}
          value={desc}
          onChange={(e) => { setDesc(e.target.value); setDescInvalid(false); }}
          placeholder="Loyihangiz nima qiladi, muammoni qanday hal etadi?"
          className={cn("min-h-[100px] resize-y", descInvalid && "border-danger ring-4 ring-danger/10")}
        />
        <div className="mt-1 text-right font-mono text-[11px] text-muted">{desc.length}/500</div>
      </div>

      <div className="mb-6">
        <label className={label}>Aloqa uchun email</label>
        <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </div>

      <Button variant="brand" size="lg" onClick={handleSubmit} disabled={submitting} className="w-full sm:w-auto">
        {submitting ? "Yuborilmoqda..." : editing ? "Yangilash" : "Taxtaga pinlash"}
      </Button>
    </Card>
  );
}
