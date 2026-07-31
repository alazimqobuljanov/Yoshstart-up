import { SignInButton } from "./SignInButton";
import { PinCard } from "./PinCard";
import { Connector } from "./Connector";
import { Badge } from "./ui/badge";

export function Hero({ startupCount }: { startupCount: number }) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-navy-950 via-navy-900 to-navy-700">
      <div className="pointer-events-none absolute inset-0 bg-hero-radial" />
      <div className="pointer-events-none absolute inset-0 bg-hero-grid bg-[length:44px_44px] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_0%,black,transparent)]" />

      <div className="container relative flex flex-col gap-14 py-20 sm:py-28 lg:flex-row lg:items-center">
        <div className="max-w-[560px] animate-in-up">
          <Badge variant="white" className="mb-6">
            Yoshlar startup platformasi
          </Badge>
          <h1 className="mb-6 font-display text-[clamp(38px,5.6vw,64px)] font-bold leading-[1.05] text-white">
            G&apos;oyangizni pinlang.
            <br />
            <span className="bg-gradient-to-r from-brand-100 via-white to-amber-100 bg-clip-text text-transparent">
              Yordamni toping.
            </span>
          </h1>
          <p className="mb-9 max-w-[440px] text-[16.5px] leading-relaxed text-white/60">
            YoshStart — yosh startaperlar g&apos;oyalarini raqamli taxtaga joylaydigan, mentor va
            investorlar esa ularni topib, aynan kerakli yordamni taklif qiladigan platforma.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <SignInButton />
            <span className="text-[13px] text-white/40">
              Bepul • Google orqali 10 soniyada ro&apos;yxatdan o&apos;ting
            </span>
          </div>
          {startupCount > 0 && (
            <div className="mt-10 flex items-center gap-3 text-sm text-white/50">
              <span className="flex h-2 w-2 animate-pulse rounded-full bg-brand-100" />
              Hozirda taxtada <b className="font-display text-white">{startupCount}</b> ta g&apos;oya
              faol
            </div>
          )}
        </div>

        <div className="relative mx-auto h-[300px] w-full max-w-[440px] flex-1 sm:h-[360px] lg:mx-0">
          <Connector className="absolute left-[6%] top-[8%] h-[70%] w-[80%] text-white" />
          <PinCard
            label="G'oya"
            title="EcoBox — qayta ishlash"
            desc="Plastik chiqindilarni yig'ib qayta ishlovchi mobil servis."
            variant="creator"
            className="absolute left-0 top-2 -rotate-3 animate-float"
          />
          <PinCard
            label="Yordam"
            title="Mentor kerak: Moliya"
            desc="Investitsiya va biznes-reja bo'yicha ko'mak beraman."
            variant="provider"
            className="absolute bottom-2 right-0 rotate-2 animate-float [animation-delay:-3s]"
          />
        </div>
      </div>
    </section>
  );
}
