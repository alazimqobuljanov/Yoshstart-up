import { SignInButton } from "./SignInButton";
import { Connector } from "./Connector";

export function CTASection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-navy-900 to-navy-700 py-24">
      <div className="pointer-events-none absolute inset-0 bg-hero-radial opacity-70" />
      <Connector className="pointer-events-none absolute -right-6 top-8 h-40 w-64 text-white/40 sm:right-10" />
      <div className="container relative text-center">
        <h2 className="mx-auto mb-5 max-w-lg font-display text-[clamp(28px,3.8vw,42px)] font-bold text-white">
          G&apos;oyangiz taxtaga chiqishga tayyor
        </h2>
        <p className="mx-auto mb-9 max-w-md text-[15px] text-white/60">
          Bugun qo&apos;shiling — bir necha daqiqada loyihangizni e&apos;lon qiling yoki yordam
          berishni boshlang.
        </p>
        <div className="flex justify-center">
          <SignInButton />
        </div>
      </div>
    </section>
  );
}
