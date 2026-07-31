import { cn } from "@/lib/utils";
import { Lightbulb, HandHeart } from "lucide-react";

interface PinCardProps {
  label: string;
  title: string;
  desc: string;
  variant: "creator" | "provider";
  className?: string;
}

export function PinCard({ label, title, desc, variant, className = "" }: PinCardProps) {
  const isCreator = variant === "creator";
  return (
    <div
      className={cn(
        "w-[230px] rounded-2xl bg-white/95 p-4 shadow-card-hover backdrop-blur sm:w-[260px]",
        className
      )}
    >
      <div className="mb-3 flex items-center gap-2">
        <span
          className={cn(
            "flex h-7 w-7 items-center justify-center rounded-full",
            isCreator ? "bg-brand-50 text-brand" : "bg-amber-50 text-amber-600"
          )}
        >
          {isCreator ? <Lightbulb className="h-3.5 w-3.5" /> : <HandHeart className="h-3.5 w-3.5" />}
        </span>
        <span
          className={cn(
            "font-mono text-[10px] font-bold uppercase tracking-wider",
            isCreator ? "text-brand" : "text-amber-600"
          )}
        >
          {label}
        </span>
      </div>
      <h4 className="mb-1.5 font-display text-[15px] font-bold leading-snug text-navy-900">
        {title}
      </h4>
      <p className="text-xs leading-relaxed text-muted">{desc}</p>
    </div>
  );
}
