function Candle({
  className,
  heightClass,
}: {
  className?: string;
  heightClass: string;
}) {
  return (
    <div className={["hero-candle relative flex flex-col items-center", className].join(" ")}>
      <div className="candle-aura absolute bottom-6 h-24 w-24 rounded-full" />
      <div className={["relative w-8 rounded-t-[18px] rounded-b-[10px] border border-[rgba(248,245,240,0.18)] bg-[linear-gradient(180deg,rgba(223,210,188,0.98),rgba(179,160,137,0.92)_62%,rgba(118,96,80,0.9))] shadow-[0_8px_24px_rgba(0,0,0,0.45)]", heightClass].join(" ")}>
        <div className="absolute inset-x-[6px] top-[10px] h-3 rounded-full bg-[linear-gradient(180deg,rgba(255,255,255,0.38),transparent)] opacity-50" />
        <div className="absolute inset-x-1.5 bottom-3 h-[72%] rounded-[14px] bg-[linear-gradient(180deg,rgba(255,255,255,0.12),rgba(255,255,255,0))]" />
        <div className="absolute left-[7px] top-[16px] h-6 w-1 rounded-full bg-[rgba(161,132,104,0.54)]" />
        <div className="absolute right-[8px] top-[28px] h-8 w-1 rounded-full bg-[rgba(146,116,94,0.44)]" />
        <div className="absolute left-1/2 top-[-9px] h-4 w-px -translate-x-1/2 bg-[rgba(41,25,14,0.85)]" />
        <div className="candle-flame absolute left-1/2 top-[-25px] h-6 w-4 -translate-x-1/2 rounded-[999px_999px_999px_999px/1200px_1200px_650px_650px]" />
      </div>
      <div className="mt-2 h-2 w-14 rounded-full bg-[rgba(0,0,0,0.55)] blur-sm" />
    </div>
  );
}

function CandleCluster({ side }: { side: "left" | "right" }) {
  const sideClass = side === "left" ? "left-0 sm:left-6" : "right-0 sm:right-6";

  return (
    <div className={["pointer-events-none absolute bottom-4 flex items-end gap-2 px-2 sm:bottom-6 sm:gap-3 sm:px-0", sideClass].join(" ")} aria-hidden="true">
      {side === "left" ? (
        <>
          <Candle heightClass="h-24 sm:h-28" className="translate-y-4 scale-[0.72] sm:scale-[0.88]" />
          <Candle heightClass="h-28 sm:h-36" className="scale-[0.76] sm:scale-100" />
        </>
      ) : (
        <>
          <Candle heightClass="h-28 sm:h-36" className="scale-[0.76] sm:scale-100" />
          <Candle heightClass="h-24 sm:h-28" className="translate-y-5 scale-[0.7] sm:scale-[0.86]" />
        </>
      )}
    </div>
  );
}

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="absolute inset-0" aria-hidden="true">
        <div className="ambient-red-drift absolute inset-[-10%] opacity-60" />
        <div className="absolute inset-0 bg-[radial-gradient(960px_680px_at_50%_30%,rgba(139,0,0,0.16),transparent_58%)]" />
        <div className="absolute left-1/2 top-[8%] h-[38vh] w-[58vw] -translate-x-1/2 bg-[radial-gradient(circle,rgba(255,255,255,0.08),transparent_62%)] blur-3xl opacity-70" />
        <div className="absolute right-[4%] top-[8%] h-[36vh] w-[18%] bg-[linear-gradient(116deg,rgba(255,255,255,0.16),transparent_58%)] blur-2xl opacity-46" />
        <div className="absolute inset-0 bg-[radial-gradient(1200px_900px_at_50%_42%,rgba(0,0,0,0.08),rgba(0,0,0,0.92))]" />
      </div>

      <div className="relative mx-auto flex min-h-[calc(100svh-5rem)] w-full max-w-6xl flex-col items-center justify-center px-6 pb-36 pt-40 text-center sm:min-h-[calc(100vh-4rem)] sm:pb-32 sm:pt-32 sm:px-10">
        <div className="cathedral-title-halo pointer-events-none absolute left-1/2 top-[23%] h-[240px] w-[540px] max-w-[92vw] -translate-x-1/2 rounded-full" aria-hidden="true" />
        <p className="font-[family-name:var(--font-accent)] text-[11px] tracking-[0.55em] text-[#8B0000]">
          SACRED INK ATELIER
        </p>

        <h1 className="cathedral-heading mt-5 font-[family-name:var(--font-display)] text-5xl leading-[0.88] tracking-tight text-[var(--paper)] sm:text-7xl">
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

        <CandleCluster side="left" />
        <CandleCluster side="right" />
      </div>
    </section>
  );
}
