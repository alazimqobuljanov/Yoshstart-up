import { Inbox } from "lucide-react";

export function EmptyState({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="rounded-2xl border border-dashed border-border bg-card/50 px-6 py-16 text-center">
      <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-ink/5 text-muted">
        <Inbox className="h-5 w-5" />
      </div>
      <b className="mb-1.5 block font-display text-[15px] text-ink">{title}</b>
      <p className="text-[13.5px] text-muted">{desc}</p>
    </div>
  );
}
