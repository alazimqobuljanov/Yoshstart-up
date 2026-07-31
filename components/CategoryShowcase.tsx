import { Cpu, GraduationCap, HeartPulse, Sprout, Leaf, Landmark, Shapes } from "lucide-react";
import { CATEGORIES } from "@/lib/categories";

const ICONS: Record<string, any> = {
  Texnologiya: Cpu,
  "Ta'lim": GraduationCap,
  "Sog'liqni saqlash": HeartPulse,
  "Qishloq xo'jaligi": Sprout,
  Ekologiya: Leaf,
  Moliya: Landmark,
  Boshqa: Shapes,
};

export function CategoryShowcase() {
  return (
    <section id="yonalishlar" className="border-y border-border bg-card py-20">
      <div className="container">
        <div className="mx-auto mb-12 max-w-xl text-center">
          <span className="mb-3 inline-block font-mono text-xs font-bold uppercase tracking-widest text-brand">
            Yo&apos;nalishlar
          </span>
          <h2 className="font-display text-[clamp(26px,3.2vw,36px)] font-bold text-ink">
            Har qanday sohadagi g&apos;oya uchun joy bor
          </h2>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-7">
          {CATEGORIES.map((c) => {
            const Icon = ICONS[c] ?? Shapes;
            return (
              <div
                key={c}
                className="flex flex-col items-center gap-3 rounded-2xl border border-border bg-bg px-4 py-6 text-center transition-all hover:-translate-y-1 hover:border-brand/30 hover:shadow-soft"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-brand-50 text-brand">
                  <Icon className="h-5 w-5" />
                </span>
                <span className="text-[12.5px] font-semibold leading-tight text-ink">{c}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
