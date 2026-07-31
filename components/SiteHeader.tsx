import Link from "next/link";
import { SignInButton } from "./SignInButton";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-navy-950/80 backdrop-blur-md">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2 font-display text-lg font-bold text-white">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-brand to-amber font-display text-sm font-black text-white">
            Y
          </span>
          YoshStart
        </Link>

        <nav className="hidden items-center gap-7 font-sans text-[14px] font-medium text-white/70 md:flex">
          <a href="#imkoniyatlar" className="transition-colors hover:text-white">
            Imkoniyatlar
          </a>
          <a href="#qanday-ishlaydi" className="transition-colors hover:text-white">
            Qanday ishlaydi
          </a>
          <a href="#yonalishlar" className="transition-colors hover:text-white">
            Yo&apos;nalishlar
          </a>
        </nav>

        <SignInButton compact />
      </div>
    </header>
  );
}
