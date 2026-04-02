export default function SiteNav() {
  return (
    <header className="fixed inset-x-0 top-0 z-20 border-b border-[#8B0000]/25 bg-black/90 backdrop-blur-sm">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center gap-4 px-6 sm:px-10">
        <a
          href="#top"
          className="flex items-center gap-3 font-[family-name:var(--font-display)] text-[12px] tracking-[0.24em] text-[var(--paper)]"
        >
          <span className="relative inline-flex h-7 w-7 items-center justify-center border border-[#8B0000]/65">
            <span className="absolute h-[15px] w-px bg-[#8B0000]/80" />
            <span className="absolute h-px w-[15px] bg-[#8B0000]/80" />
          </span>
          YOURMUSE
        </a>

        <nav className="ml-auto hidden items-center gap-6 md:flex">
          <a
            href="#work"
            className="font-[family-name:var(--font-caps)] text-[10px] tracking-[0.35em] text-[color:rgba(248,245,240,0.78)] transition-colors hover:text-[var(--paper)]"
          >
            Work
          </a>
          <a
            href="#process"
            className="font-[family-name:var(--font-caps)] text-[10px] tracking-[0.35em] text-[color:rgba(248,245,240,0.78)] transition-colors hover:text-[var(--paper)]"
          >
            Process
          </a>
          <a
            href="#atelier"
            className="font-[family-name:var(--font-caps)] text-[10px] tracking-[0.35em] text-[color:rgba(248,245,240,0.78)] transition-colors hover:text-[var(--paper)]"
          >
            Atelier
          </a>
          <a
            href="#book"
            className="inline-flex items-center justify-center border border-[#8B0000]/70 px-4 py-2 font-[family-name:var(--font-caps)] text-[10px] tracking-[0.35em] text-[var(--paper)] transition-all hover:border-[#8B0000] hover:bg-[#8B0000]/35"
          >
            Book
          </a>
        </nav>

        <a
          href="#book"
          className="ml-auto inline-flex items-center justify-center border border-[#8B0000]/70 px-4 py-2 font-[family-name:var(--font-caps)] text-[10px] tracking-[0.35em] text-[var(--paper)] transition-all hover:border-[#8B0000] hover:bg-[#8B0000]/35 md:hidden"
        >
          Book
        </a>
      </div>
    </header>
  );
}
