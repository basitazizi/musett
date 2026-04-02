export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="absolute inset-0" aria-hidden="true">
        <div className="absolute inset-0 bg-[radial-gradient(920px_660px_at_50%_34%,rgba(139,0,0,0.12),transparent_58%)]" />
        <div className="absolute right-[6%] top-[10%] h-[34vh] w-[16%] bg-[linear-gradient(116deg,rgba(255,255,255,0.12),transparent_56%)] blur-2xl opacity-40" />
        <div className="absolute inset-0 bg-[radial-gradient(1200px_900px_at_50%_50%,rgba(0,0,0,0.16),rgba(0,0,0,0.9))]" />
      </div>

      <div className="relative mx-auto flex min-h-[calc(100vh-4rem)] w-full max-w-6xl flex-col items-center justify-center px-6 py-28 text-center sm:py-24 sm:px-10">
        <p className="font-[family-name:var(--font-accent)] text-[11px] tracking-[0.55em] text-[#8B0000]">
          SACRED INK ATELIER
        </p>

        <h1 className="mt-5 font-[family-name:var(--font-display)] text-5xl leading-[0.88] tracking-tight text-[var(--paper)] drop-shadow-[0_10px_38px_rgba(255,255,255,0.08)] sm:text-7xl">
          YourMuse Tattoo
        </h1>

        <p className="mt-5 max-w-xl font-[family-name:var(--font-accent)] text-[15px] italic leading-7 text-[color:rgba(248,245,240,0.82)] sm:text-[16px]">
          Cathedral-dark luxury for blackwork, fine line, and custom iconography.
          Precision first. Atmosphere always.
        </p>

        <div className="mt-10 flex flex-col items-center gap-3 sm:flex-row">
          <a
            href="#book"
            className="group relative inline-flex items-center justify-center border border-[color:rgba(248,245,240,0.22)] bg-[color:rgba(248,245,240,0.92)] px-8 py-3 font-[family-name:var(--font-caps)] text-[11px] tracking-[0.45em] text-[var(--ink)] transition-all hover:bg-[var(--paper)] hover:shadow-[0_0_30px_var(--blood-glow)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8B0000]/70"
          >
            <span className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 cathedral-button-glow" />
            <span className="relative">Book a Session</span>
          </a>
          <a
            href="#work"
            className="inline-flex items-center justify-center border border-[color:rgba(248,245,240,0.18)] bg-black/25 px-8 py-3 font-[family-name:var(--font-caps)] text-[11px] tracking-[0.45em] text-[color:rgba(248,245,240,0.7)] transition-all hover:border-[color:rgba(248,245,240,0.32)] hover:text-[var(--paper)]"
          >
            View Work
          </a>
        </div>

        <div className="mt-14 flex items-center gap-3">
          <span className="h-px w-14 bg-gradient-to-r from-transparent to-[#8B0000]" />
          <span className="h-[7px] w-[7px] rotate-45 border border-[#8B0000]/85" />
          <span className="h-[3px] w-[3px] rotate-45 bg-[#8B0000]" />
          <span className="h-[7px] w-[7px] rotate-45 border border-[#8B0000]/85" />
          <span className="h-px w-14 bg-gradient-to-l from-transparent to-[#8B0000]" />
        </div>

        <p className="mt-6 text-[11px] tracking-[0.4em] text-[color:rgba(248,245,240,0.32)]">
          Scroll
        </p>
      </div>
    </section>
  );
}
