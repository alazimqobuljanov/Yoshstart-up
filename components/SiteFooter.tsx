export function SiteFooter() {
  return (
    <footer className="bg-navy-950 py-10">
      <div className="container flex flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
        <div className="flex items-center gap-2 font-display text-[15px] font-bold text-white">
          <span className="flex h-6 w-6 items-center justify-center rounded-md bg-gradient-to-br from-brand to-amber text-[11px] font-black text-white">
            Y
          </span>
          YoshStart
        </div>
        <p className="font-mono text-[11.5px] text-white/35">
          G&apos;oya + yordam = aloqa. © {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
}
