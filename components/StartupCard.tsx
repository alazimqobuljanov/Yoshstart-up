import type { Startup } from "@/lib/types";
import { Mail, Trash2, Pencil } from "lucide-react";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";

function timeAgo(iso: string) {
  const diff = Date.now() - new Date(iso).getTime();
  const min = Math.floor(diff / 60000);
  if (min < 1) return "hozirgina";
  if (min < 60) return `${min} daq. oldin`;
  const hr = Math.floor(min / 60);
  if (hr < 24) return `${hr} soat oldin`;
  const day = Math.floor(hr / 24);
  if (day < 30) return `${day} kun oldin`;
  return new Date(iso).toLocaleDateString("uz-UZ");
}

interface StartupCardProps {
  startup: Startup;
  index: number;
  mode: "owner" | "browse";
  onEdit?: (s: Startup) => void;
  onDelete?: (id: string) => void;
}

export function StartupCard({ startup, index, mode, onEdit, onDelete }: StartupCardProps) {
  return (
    <Card className="flex flex-col gap-3 p-5 hover:-translate-y-1 hover:shadow-card-hover">
      <div className="flex flex-wrap gap-1.5">
        <Badge variant="brand">{startup.category}</Badge>
        <Badge variant="amber">{startup.need}</Badge>
      </div>
      <h3 className="font-display text-[16px] font-bold leading-snug text-ink">{startup.title}</h3>
      <p className="flex-1 text-[13.5px] leading-relaxed text-muted">{startup.desc}</p>
      <div className="mt-1.5 flex items-center justify-between gap-2.5 border-t border-border pt-3.5">
        <span className="truncate font-mono text-[11px] text-muted">
          {startup.creatorName} • {timeAgo(startup.createdAt)}
        </span>
        {mode === "owner" ? (
          <span className="flex flex-shrink-0 gap-1">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => onEdit?.(startup)}
              aria-label="Tahrirlash"
              className="text-muted hover:text-brand"
            >
              <Pencil className="h-3.5 w-3.5" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => onDelete?.(startup.id)}
              aria-label="O'chirish"
              className="text-muted hover:text-danger"
            >
              <Trash2 className="h-3.5 w-3.5" />
            </Button>
          </span>
        ) : (
          <a
            href={`mailto:${startup.creatorEmail}?subject=${encodeURIComponent(
              "YoshStart: " + startup.title
            )}`}
            className="inline-flex flex-shrink-0 items-center gap-1.5 rounded-full bg-amber-50 px-3.5 py-2 text-[12.5px] font-bold text-amber-700 transition-transform hover:-translate-y-0.5"
          >
            <Mail className="h-3.5 w-3.5" /> Bog&apos;lanish
          </a>
        )}
      </div>
    </Card>
  );
}
