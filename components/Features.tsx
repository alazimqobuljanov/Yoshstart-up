import { Card } from "./ui/card";
import { Pin as PinIcon, Search, MessageCircle, ShieldCheck, Layers, Sparkles } from "lucide-react";

const features = [
  {
    icon: PinIcon,
    title: "G'oyangizni pinlang",
    desc: "Startup loyihangizni bir necha daqiqada taxtaga joylang: nom, tavsif, yo'nalish va nimaga muhtojligingiz.",
    accent: "brand" as const,
  },
  {
    icon: Search,
    title: "Kategoriya bo'yicha qidiring",
    desc: "Mentor va investorlar yo'nalish, kalit so'z va ehtiyoj turi bo'yicha loyihalarni tez topadi.",
    accent: "amber" as const,
  },
  {
    icon: MessageCircle,
    title: "To'g'ridan-to'g'ri bog'laning",
    desc: "Vositachisiz — bir bosishda email orqali muallif bilan aloqaga chiqing.",
    accent: "brand" as const,
  },
  {
    icon: Layers,
    title: "Ikkita rol, bitta platforma",
    desc: "Xohlasangiz g'oya taqdim eting, xohlasangiz yordam bering — istalgan payt rolni almashtiring.",
    accent: "amber" as const,
  },
  {
    icon: ShieldCheck,
    title: "Ochiq va shaffof",
    desc: "Barcha pinlangan loyihalar platformadagi har bir foydalanuvchiga ochiq — yashirin narx yo'q.",
    accent: "brand" as const,
  },
  {
    icon: Sparkles,
    title: "Tez va soddaligi",
    desc: "Ortiqcha bosqichlarsiz: ro'yxatdan o'ting, rolni tanlang va bir zumda ishni boshlang.",
    accent: "amber" as const,
  },
];

const steps = [
  {
    n: "01",
    title: "Google bilan kiring",
    desc: "Bitta bosish — ro'yxatdan o'tish shart emas, parol ham kerak emas.",
  },
  {
    n: "02",
    title: "Rolingizni tanlang",
    desc: "G'oya egasimisiz yoki yordam berishga tayyor mentor/investormisiz?",
  },
  {
    n: "03",
    title: "Pinlang yoki toping",
    desc: "Loyihangizni taxtaga qo'ying yoki kerakli g'oyani qidiruv orqali toping.",
  },
  {
    n: "04",
    title: "Aloqaga chiqing",
    desc: "To'g'ridan-to'g'ri email orqali bog'lanib, hamkorlikni boshlang.",
  },
];

export function Features() {
  return (
    <section id="imkoniyatlar" className="bg-bg py-24">
      <div className="container">
        <div className="mx-auto mb-14 max-w-xl text-center">
          <span className="mb-3 inline-block font-mono text-xs font-bold uppercase tracking-widest text-brand">
            Imkoniyatlar
          </span>
          <h2 className="mb-4 font-display text-[clamp(28px,3.6vw,40px)] font-bold text-ink">
            Sayt nima qila oladi?
          </h2>
          <p className="text-[15px] leading-relaxed text-muted">
            YoshStart — g&apos;oya va yordamni bir joyda uchrashtiradigan minimal, tez va ochiq
            taxta.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <Card key={f.title} className="group p-6 hover:-translate-y-1 hover:shadow-card-hover">
              <div
                className={`mb-4 flex h-11 w-11 items-center justify-center rounded-xl ${
                  f.accent === "brand" ? "bg-brand-50 text-brand" : "bg-amber-50 text-amber-600"
                }`}
              >
                <f.icon className="h-5 w-5" />
              </div>
              <h3 className="mb-2 font-display text-[16.5px] font-bold text-ink">{f.title}</h3>
              <p className="text-[13.5px] leading-relaxed text-muted">{f.desc}</p>
            </Card>
          ))}
        </div>

        <div id="qanday-ishlaydi" className="mt-28 scroll-mt-20">
          <div className="mx-auto mb-14 max-w-xl text-center">
            <span className="mb-3 inline-block font-mono text-xs font-bold uppercase tracking-widest text-amber-600">
              Jarayon
            </span>
            <h2 className="font-display text-[clamp(28px,3.6vw,40px)] font-bold text-ink">
              Qanday ishlaydi
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-10 md:grid-cols-4">
            {steps.map((s, i) => (
              <div key={s.n} className="relative">
                <div className="mb-4 flex items-center gap-3">
                  <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-ink font-mono text-[13px] font-bold text-white">
                    {s.n}
                  </span>
                  {i < steps.length - 1 && (
                    <span className="relative hidden h-0 flex-1 border-t-2 border-dashed border-border md:block">
                      <span className="absolute -top-[3px] left-1/2 h-1.5 w-1.5 -translate-x-1/2 animate-pulse rounded-full bg-brand" />
                    </span>
                  )}
                </div>
                <h3 className="mb-1.5 font-display text-[15.5px] font-bold text-ink">{s.title}</h3>
                <p className="text-[13.5px] leading-relaxed text-muted">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
