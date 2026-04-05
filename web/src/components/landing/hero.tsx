function HeroBackdropFrame() {
  return (
    <svg
      className="pointer-events-none absolute inset-0 h-full w-full"
      viewBox="0 0 430 932"
      preserveAspectRatio="none"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <filter id="heroFrameGlow" x="-40%" y="-40%" width="180%" height="180%">
          <feGaussianBlur stdDeviation="2.8" />
        </filter>
      </defs>

      <path d="M215 74 V876" stroke="rgba(248,245,240,0.1)" strokeWidth="1.2" />
      <path d="M44 820 H386" stroke="rgba(248,245,240,0.08)" strokeWidth="1.1" />

      <path
        d="M70 932 V248 Q70 162 128 110 Q166 76 215 34 Q264 76 302 110 Q360 162 360 248 V932"
        stroke="rgba(248,245,240,0.16)"
        strokeWidth="1.9"
      />
      <path
        d="M102 932 V292 Q102 218 148 172 Q178 140 215 102 Q252 140 282 172 Q328 218 328 292 V932"
        stroke="rgba(248,245,240,0.11)"
        strokeWidth="1.4"
      />

      <path
        d="M10 932 V396 Q10 342 48 308 Q78 282 116 258"
        stroke="rgba(248,245,240,0.08)"
        strokeWidth="1.25"
      />
      <path
        d="M420 932 V396 Q420 342 382 308 Q352 282 314 258"
        stroke="rgba(248,245,240,0.08)"
        strokeWidth="1.25"
      />

      <path
        d="M215 116 Q178 144 150 174 Q118 210 92 254"
        stroke="rgba(248,245,240,0.08)"
        strokeWidth="1.05"
      />
      <path
        d="M215 116 Q252 144 280 174 Q312 210 338 254"
        stroke="rgba(248,245,240,0.08)"
        strokeWidth="1.05"
      />

      <path
        d="M70 932 V248 Q70 162 128 110 Q166 76 215 34 Q264 76 302 110 Q360 162 360 248 V932"
        stroke="rgba(139,0,0,0.14)"
        strokeWidth="10"
        filter="url(#heroFrameGlow)"
      />
    </svg>
  );
}

function HeroDoorArt() {
  return (
    <svg
      className="absolute inset-0 h-full w-full"
      viewBox="0 0 360 520"
      preserveAspectRatio="none"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="doorStroke" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="rgba(248,245,240,0.2)" />
          <stop offset="100%" stopColor="rgba(248,245,240,0.07)" />
        </linearGradient>
        <linearGradient id="doorFill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="rgba(22,16,16,0.82)" />
          <stop offset="100%" stopColor="rgba(8,8,8,0.92)" />
        </linearGradient>
      </defs>

      <path
        d="M40 520 V194 Q40 138 76 104 Q112 70 180 18 Q248 70 284 104 Q320 138 320 194 V520 Z"
        fill="url(#doorFill)"
        stroke="url(#doorStroke)"
        strokeWidth="1.6"
      />
      <path
        d="M58 500 V206 Q58 156 92 124 Q122 96 180 50 Q238 96 268 124 Q302 156 302 206 V500"
        stroke="rgba(248,245,240,0.09)"
        strokeWidth="1.15"
      />
      <path d="M180 112 V500" stroke="rgba(248,245,240,0.07)" strokeWidth="1" />
      <path d="M102 322 H258" stroke="rgba(248,245,240,0.06)" strokeWidth="1" />
      <path d="M92 462 H268" stroke="rgba(248,245,240,0.06)" strokeWidth="1" />
    </svg>
  );
}

function Candle({
  className,
  bodyClass,
}: {
  className?: string;
  bodyClass: string;
}) {
  return (
    <div className={["hero-candle relative flex flex-col items-center", className].join(" ")}>
      <div className="absolute bottom-4 h-16 w-16 rounded-full bg-[radial-gradient(circle,rgba(255,212,148,0.12),transparent_72%)] blur-xl" />
      <div
        className={[
          "relative w-5 rounded-t-[11px] rounded-b-[7px] border border-[rgba(248,245,240,0.22)] bg-[linear-gradient(180deg,rgba(236,228,211,0.98),rgba(206,188,164,0.95)_40%,rgba(148,124,100,0.92)_76%,rgba(98,78,62,0.92))] shadow-[0_8px_18px_rgba(0,0,0,0.42)]",
          bodyClass,
        ].join(" ")}
      >
        <div className="absolute inset-x-[3px] top-[5px] h-2 rounded-full bg-[linear-gradient(180deg,rgba(255,255,255,0.4),rgba(255,255,255,0.02))]" />
        <div className="absolute inset-x-0 top-[-15px] flex justify-center">
          <div className="absolute h-6 w-6 rounded-full bg-[radial-gradient(circle,rgba(255,236,194,0.18),transparent_72%)] blur-md" />
          <div className="absolute top-[6px] h-2.5 w-px rounded-full bg-[rgba(48,28,16,0.9)]" />
          <div className="candle-flame relative h-4.5 w-3 rounded-[999px_999px_999px_999px/1000px_1000px_600px_600px]" />
          <div className="candle-flame-core absolute top-[2px] h-2 w-1.5 rounded-full" />
        </div>
      </div>
      <div className="mt-1.5 h-2 w-8 rounded-full bg-[rgba(0,0,0,0.38)] blur-sm" />
    </div>
  );
}

function CandleCluster({ side }: { side: "left" | "right" }) {
  const sideClass = side === "left" ? "left-6 sm:left-12" : "right-6 sm:right-12";

  return (
    <div
      className={["hero-fade-up pointer-events-none absolute bottom-8 flex items-end gap-3", sideClass].join(" ")}
      style={{ animationDelay: "220ms" }}
      aria-hidden="true"
    >
      {side === "left" ? (
        <>
          <Candle bodyClass="h-[4.25rem] sm:h-[5.2rem]" className="scale-[0.82]" />
          <Candle bodyClass="h-[3rem] sm:h-[3.8rem]" className="translate-y-1.5 scale-[0.66]" />
        </>
      ) : (
        <>
          <Candle bodyClass="h-[3rem] sm:h-[3.8rem]" className="translate-y-1.5 scale-[0.66]" />
          <Candle bodyClass="h-[4.25rem] sm:h-[5.2rem]" className="scale-[0.82]" />
        </>
      )}
    </div>
  );
}

export default function Hero() {
  return (
    <section id="top" className="relative isolate overflow-hidden">
      <div className="absolute inset-0" aria-hidden="true">
        <div className="absolute inset-0 bg-[linear-gradient(180deg,#010101_0%,#070202_40%,#150303_68%,#020202_100%)]" />
        <div className="hero-breathe-glow absolute inset-x-[4%] top-[22%] h-[54%] rounded-full bg-[radial-gradient(circle,rgba(124,16,16,0.16),rgba(38,6,6,0.06)_44%,transparent_74%)] blur-3xl" />
        <HeroBackdropFrame />
        <div className="hero-center-line absolute left-1/2 top-24 bottom-12 w-px -translate-x-1/2" />
        <div className="absolute inset-x-0 bottom-0 h-36 bg-[linear-gradient(180deg,rgba(0,0,0,0),rgba(0,0,0,0.94)_72%,#000_100%)]" />
      </div>

      <div className="relative mx-auto flex min-h-screen w-full max-w-md flex-col items-center justify-center px-5 pb-28 pt-24 text-center sm:max-w-3xl sm:px-8">
        <div
          className="hero-fade-up relative w-full max-w-[23rem] sm:max-w-[26rem]"
          style={{ animationDelay: "80ms" }}
        >
          <div className="relative aspect-[0.72] w-full">
            <HeroDoorArt />

            <div className="absolute left-1/2 top-[52%] flex w-[72%] -translate-x-1/2 -translate-y-1/2 flex-col items-center sm:hidden">
              <h1 className="cathedral-heading font-[family-name:var(--font-display)] text-[clamp(2rem,9.6vw,3rem)] leading-[0.9] tracking-tight text-[var(--paper)]">
                YourMuse Tattoo
              </h1>

              <p className="mt-3 max-w-[13.5rem] text-[11px] leading-5 tracking-[0.05em] text-[rgba(248,245,240,0.68)]">
                Blackwork, fine line, and custom iconography shaped inside a calm,
                appointment-only studio.
              </p>

              <div
                className="hero-fade-up mt-6 flex w-full flex-col gap-3"
                style={{ animationDelay: "160ms" }}
              >
                <a
                  href="#book"
                  className="group relative inline-flex min-h-11 w-full items-center justify-center overflow-hidden rounded-full border border-[rgba(248,245,240,0.22)] bg-[rgba(248,245,240,0.94)] px-4 py-3 font-[family-name:var(--font-caps)] text-[9px] tracking-[0.34em] text-[var(--ink)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[var(--paper)] hover:shadow-[0_0_30px_rgba(139,0,0,0.16)]"
                >
                  <span className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 cathedral-button-glow" />
                  <span className="relative">Book a Session</span>
                </a>
                <a
                  href="#work"
                  className="inline-flex min-h-11 w-full items-center justify-center rounded-full border border-[rgba(248,245,240,0.16)] bg-[rgba(248,245,240,0.04)] px-4 py-3 font-[family-name:var(--font-caps)] text-[9px] tracking-[0.32em] text-[rgba(248,245,240,0.82)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[rgba(248,245,240,0.3)] hover:bg-[rgba(248,245,240,0.08)]"
                >
                  View Work
                </a>
              </div>
            </div>

            <div className="absolute inset-x-[14%] inset-y-[12%] hidden flex-col items-center justify-center sm:flex">
              <div className="flex w-full flex-col items-center">
                <h1 className="cathedral-heading font-[family-name:var(--font-display)] text-[clamp(2.35rem,11vw,3.6rem)] leading-[0.88] tracking-tight text-[var(--paper)]">
                  YourMuse Tattoo
                </h1>

                <p className="mt-4 max-w-[15rem] text-[12px] leading-6 tracking-[0.06em] text-[rgba(248,245,240,0.68)] sm:max-w-[16.5rem] sm:text-[13px]">
                  Blackwork, fine line, and custom iconography shaped inside a calm,
                  appointment-only studio.
                </p>

                <div
                  className="hero-fade-up mt-7 flex w-full flex-col gap-3"
                  style={{ animationDelay: "160ms" }}
                >
                  <a
                    href="#book"
                    className="group relative inline-flex min-h-12 w-full items-center justify-center overflow-hidden rounded-full border border-[rgba(248,245,240,0.22)] bg-[rgba(248,245,240,0.94)] px-5 py-3 font-[family-name:var(--font-caps)] text-[10px] tracking-[0.36em] text-[var(--ink)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[var(--paper)] hover:shadow-[0_0_30px_rgba(139,0,0,0.16)]"
                  >
                    <span className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 cathedral-button-glow" />
                    <span className="relative">Book a Session</span>
                  </a>
                  <a
                    href="#work"
                    className="inline-flex min-h-12 w-full items-center justify-center rounded-full border border-[rgba(248,245,240,0.16)] bg-[rgba(248,245,240,0.04)] px-5 py-3 font-[family-name:var(--font-caps)] text-[10px] tracking-[0.34em] text-[rgba(248,245,240,0.82)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[rgba(248,245,240,0.3)] hover:bg-[rgba(248,245,240,0.08)]"
                  >
                    View Work
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <CandleCluster side="left" />
        <CandleCluster side="right" />
      </div>
    </section>
  );
}
