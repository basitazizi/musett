export default function SiteNav() {
  return (
    <header className="fixed inset-x-0 top-0 z-30">
      <div className="mx-auto flex h-20 w-full max-w-5xl items-center justify-between px-4 sm:px-6">
        <a
          href="#top"
          className="flex items-center gap-2.5 rounded-full border border-[rgba(248,245,240,0.1)] bg-[rgba(8,8,8,0.54)] px-3 py-2 backdrop-blur-md"
        >
          <span className="relative inline-flex h-7 w-7 items-center justify-center rounded-full border border-[#8B0000]/55 bg-[rgba(32,4,4,0.34)]">
            <span className="absolute h-[13px] w-px bg-[#8B0000]/80" />
            <span className="absolute h-px w-[13px] bg-[#8B0000]/80" />
          </span>
          <span className="font-[family-name:var(--font-display)] text-[11px] tracking-[0.22em] text-[rgba(248,245,240,0.82)]">
            YOURMUSE
          </span>
        </a>

        <a
          href="#book"
          className="inline-flex items-center justify-center rounded-full border border-[rgba(248,245,240,0.18)] bg-[rgba(248,245,240,0.04)] px-4 py-2 font-[family-name:var(--font-caps)] text-[10px] tracking-[0.34em] text-[var(--paper)] transition-all hover:border-[rgba(248,245,240,0.36)] hover:bg-[rgba(248,245,240,0.1)] hover:shadow-[0_0_26px_rgba(139,0,0,0.16)]"
        >
          Book
        </a>
      </div>
    </header>
  );
}
