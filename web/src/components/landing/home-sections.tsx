type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  copy: string;
};

function SectionHeading({ eyebrow, title, copy }: SectionHeadingProps) {
  return (
    <div className="relative max-w-2xl">
      <div
        className="pointer-events-none absolute -left-8 top-6 h-px w-24 bg-gradient-to-r from-transparent via-[rgba(248,245,240,0.45)] to-transparent"
        aria-hidden="true"
      />
      <p className="font-[family-name:var(--font-caps)] text-[11px] tracking-[0.48em] text-[#9f1a1a]">
        {eyebrow}
      </p>
      <h2 className="cathedral-heading mt-5 text-4xl leading-[0.92] tracking-tight text-[var(--paper)] sm:text-5xl">
        {title}
      </h2>
      <p className="mt-5 max-w-xl text-[17px] leading-8 text-[color:rgba(248,245,240,0.72)]">
        {copy}
      </p>
    </div>
  );
}

function ArtistPortrait() {
  return (
    <div className="cathedral-portrait relative overflow-hidden rounded-[28px] border border-[rgba(248,245,240,0.18)] bg-[linear-gradient(180deg,rgba(16,12,12,0.94),rgba(6,6,6,0.98))] shadow-[0_34px_90px_rgba(0,0,0,0.46)]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_52%_28%,rgba(255,248,236,0.18),transparent_26%),radial-gradient(circle_at_50%_45%,rgba(139,0,0,0.16),transparent_55%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),transparent_26%,rgba(0,0,0,0.46)_76%)]" />
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 520 660"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="portraitLight" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="rgba(248,245,240,0.4)" />
            <stop offset="100%" stopColor="rgba(248,245,240,0)" />
          </linearGradient>
          <linearGradient id="portraitShadow" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="rgba(3,3,3,0)" />
            <stop offset="100%" stopColor="rgba(3,3,3,0.84)" />
          </linearGradient>
        </defs>
        <path
          d="M146 630 C162 520 172 398 208 288 C225 236 250 188 284 158 C313 133 355 118 392 131 C431 145 460 178 471 220 C486 277 471 345 459 425 C450 484 448 552 458 630 Z"
          fill="rgba(8,8,8,0.72)"
        />
        <path
          d="M234 626 C237 566 241 520 236 478 C229 420 202 378 188 326 C180 295 179 262 190 233 C206 191 247 155 294 145 C352 132 408 161 428 212 C444 252 438 293 429 338 C420 385 405 429 386 468 C366 509 343 564 345 626 Z"
          fill="rgba(12,10,10,0.86)"
        />
        <path
          d="M262 171 C291 160 325 163 349 182 C374 202 387 235 385 269 C384 294 375 318 360 338 C342 362 315 382 286 386 C259 389 233 376 217 356 C201 337 193 311 194 286 C194 234 216 188 262 171 Z"
          fill="rgba(31,26,24,0.96)"
        />
        <path
          d="M272 189 C294 180 319 180 337 194 C359 211 367 243 363 270 C359 299 345 328 323 345 C303 360 277 364 258 352 C238 340 228 316 228 291 C229 247 241 203 272 189 Z"
          fill="rgba(210,182,161,0.12)"
        />
        <path
          d="M235 412 C267 396 309 391 344 406 C370 417 389 437 399 461 C370 470 345 487 321 503 C291 523 264 548 234 564 C202 582 161 595 123 580 C136 533 167 480 235 412 Z"
          fill="rgba(19,17,17,0.86)"
        />
        <path
          d="M111 592 C164 580 205 545 238 503 C255 482 275 463 298 449 C326 432 359 423 392 425 C411 426 429 430 446 437"
          stroke="rgba(248,245,240,0.22)"
          strokeWidth="1.8"
        />
        <path
          d="M263 243 C278 232 298 226 316 229 C334 232 349 246 353 264"
          stroke="rgba(248,245,240,0.12)"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
        <path
          d="M256 306 C274 319 297 324 318 320"
          stroke="rgba(248,245,240,0.11)"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
        <path d="M0 0 H520 V660 H0 Z" fill="url(#portraitShadow)" />
        <path d="M0 0 H520 V660 H0 Z" fill="url(#portraitLight)" opacity="0.6" />
      </svg>
      <div className="absolute bottom-0 left-0 right-0 p-6">
        <div className="rounded-2xl border border-[rgba(248,245,240,0.12)] bg-[rgba(5,5,5,0.6)] p-5 backdrop-blur-[2px]">
          <p className="font-[family-name:var(--font-caps)] text-[10px] tracking-[0.42em] text-[rgba(248,245,240,0.62)]">
            RESIDENT ARTIST
          </p>
          <p className="mt-3 font-[family-name:var(--font-display)] text-2xl tracking-tight text-[var(--paper)]">
            Nadia Vale
          </p>
        </div>
      </div>
    </div>
  );
}

type PortfolioTileProps = {
  title: string;
  placement: string;
  motif: string;
  accents: string;
};

function PortfolioTile({ title, placement, motif, accents }: PortfolioTileProps) {
  return (
    <article className="group cathedral-panel relative overflow-hidden rounded-[24px] border border-[rgba(248,245,240,0.14)] bg-[linear-gradient(180deg,rgba(12,10,10,0.96),rgba(4,4,4,0.98))] shadow-[0_24px_70px_rgba(0,0,0,0.42)]">
      <div className="portfolio-image absolute inset-0 transition-transform duration-700 group-hover:scale-[1.06]" />
      <div className={`absolute inset-0 ${accents}`} />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),transparent_26%,rgba(0,0,0,0.62)_84%)]" />
      <div className="absolute inset-0 opacity-80">
        <svg
          className="h-full w-full"
          viewBox="0 0 420 520"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            d={motif}
            stroke="rgba(248,245,240,0.54)"
            strokeWidth="1.9"
            strokeLinecap="round"
            strokeLinejoin="round"
            filter="url(#portfolioGlow)"
          />
          <path
            d="M48 32 H372 M48 488 H372 M62 32 V488 M358 32 V488"
            stroke="rgba(248,245,240,0.12)"
            strokeWidth="1.2"
          />
          <defs>
            <filter id="portfolioGlow" x="-50%" y="-50%" width="200%" height="200%">
              <feDropShadow
                dx="0"
                dy="0"
                stdDeviation="2.4"
                floodColor="rgba(248,245,240,0.34)"
                floodOpacity="0.42"
              />
            </filter>
          </defs>
        </svg>
      </div>
      <div className="relative z-10 flex min-h-[360px] flex-col justify-end p-6">
        <p className="font-[family-name:var(--font-caps)] text-[10px] tracking-[0.4em] text-[#9f1a1a]">
          {placement}
        </p>
        <h3 className="mt-3 font-[family-name:var(--font-display)] text-3xl tracking-tight text-[var(--paper)]">
          {title}
        </h3>
      </div>
    </article>
  );
}

const PORTFOLIO_ITEMS: PortfolioTileProps[] = [
  {
    title: "Sainted Spine",
    placement: "BACK PIECE",
    motif: "M210 86 C168 134 152 186 154 238 C156 304 195 356 210 418 C225 356 264 304 266 238 C268 186 252 134 210 86 Z M134 238 H286 M168 168 H252 M182 314 H238",
    accents:
      "bg-[radial-gradient(circle_at_50%_20%,rgba(255,255,255,0.12),transparent_26%),radial-gradient(circle_at_52%_58%,rgba(139,0,0,0.22),transparent_44%)]",
  },
  {
    title: "Rose Oath",
    placement: "FOREARM",
    motif: "M210 130 C232 108 269 104 293 128 C319 154 316 196 290 221 C260 251 221 276 210 325 C199 276 160 251 130 221 C104 196 101 154 127 128 C151 104 188 108 210 130 Z M145 170 C178 189 196 221 210 252 C224 221 242 189 275 170",
    accents:
      "bg-[radial-gradient(circle_at_28%_24%,rgba(248,245,240,0.08),transparent_24%),radial-gradient(circle_at_70%_72%,rgba(139,0,0,0.24),transparent_38%)]",
  },
  {
    title: "Midnight Sigil",
    placement: "CHEST",
    motif: "M210 102 L258 168 L334 182 L278 238 L292 316 L210 278 L128 316 L142 238 L86 182 L162 168 L210 102 Z M210 146 V270 M166 190 H254",
    accents:
      "bg-[radial-gradient(circle_at_50%_36%,rgba(255,255,255,0.1),transparent_24%),radial-gradient(circle_at_50%_72%,rgba(139,0,0,0.2),transparent_46%)]",
  },
  {
    title: "Cathedral Veil",
    placement: "LEG PANEL",
    motif: "M108 422 V188 Q210 66 312 188 V422 M144 422 V218 Q210 126 276 218 V422 M210 126 V422 M152 252 H268 M138 328 H282",
    accents:
      "bg-[radial-gradient(circle_at_54%_18%,rgba(248,245,240,0.12),transparent_20%),radial-gradient(circle_at_40%_78%,rgba(139,0,0,0.24),transparent_34%)]",
  },
];

const PROCESS_STEPS = [
  {
    step: "01",
    title: "Inquiry",
    copy: "Share placement, scale, reference mood, and the story you want the work to hold.",
  },
  {
    step: "02",
    title: "Direction",
    copy: "We refine the concept, align on composition, and reserve the right session length.",
  },
  {
    step: "03",
    title: "Session",
    copy: "Stencil, placement, and execution happen slowly and precisely inside a calm studio flow.",
  },
  {
    step: "04",
    title: "Healing",
    copy: "You leave with clear aftercare guidance, product notes, and a touch-up path if needed.",
  },
];

const AFTERCARE_POINTS = [
  "Detailed healing guidance tailored to blackwork and fine line pieces.",
  "Calm, practical product recommendations without overloading the client.",
  "Touch-up timing explained clearly so results stay intentional long after the session.",
];

export default function HomeSections() {
  return (
    <div className="relative z-10">
      <section id="atelier" className="relative mx-auto w-full max-w-6xl px-6 pb-12 pt-16 sm:px-10 sm:pt-20">
        <div className="cathedral-section-shell p-8 sm:p-10">
          <SectionHeading
            eyebrow="ATELIER"
            title="A cathedral environment, not a flat landing page."
            copy="The linework, lighting, and spacing are treated like architecture. Every section belongs to the same room, with enough restraint to stay premium."
          />

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <div className="cathedral-card p-7">
              <p className="font-[family-name:var(--font-caps)] text-[11px] tracking-[0.45em] text-[#9f1a1a]">
                CRAFT
              </p>
              <h3 className="mt-4 font-[family-name:var(--font-display)] text-2xl tracking-tight">
                Ritual-grade detail
              </h3>
              <p className="mt-3 text-[15px] leading-7 text-[color:rgba(248,245,240,0.64)]">
                Blackwork, fine line, and bespoke iconography shaped to anatomy, movement, and long-term readability.
              </p>
            </div>

            <div className="cathedral-card p-7">
              <p className="font-[family-name:var(--font-caps)] text-[11px] tracking-[0.45em] text-[color:rgba(248,245,240,0.66)]">
                EXPERIENCE
              </p>
              <h3 className="mt-4 font-[family-name:var(--font-display)] text-2xl tracking-tight">
                Quiet, cinematic, precise
              </h3>
              <p className="mt-3 text-[15px] leading-7 text-[color:rgba(248,245,240,0.64)]">
                The room stays dark, calm, and intentional so the design process feels focused instead of overstimulating.
              </p>
            </div>

            <div className="cathedral-card p-7">
              <p className="font-[family-name:var(--font-caps)] text-[11px] tracking-[0.45em] text-[#9f1a1a]">
                BOOKING
              </p>
              <h3 className="mt-4 font-[family-name:var(--font-display)] text-2xl tracking-tight">
                Appointment-first
              </h3>
              <p className="mt-3 text-[15px] leading-7 text-[color:rgba(248,245,240,0.64)]">
                Concepts are reviewed in advance so session pacing, placement, and healing expectations are clear before the needle starts.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="artist" className="relative mx-auto w-full max-w-6xl px-6 py-12 sm:px-10 sm:py-16">
        <div className="cathedral-section-shell grid gap-10 p-8 sm:p-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
          <ArtistPortrait />

          <div>
            <SectionHeading
              eyebrow="MEET THE ARTIST"
              title="A precise hand with a reverent design philosophy."
              copy="Every piece begins with proportion, symbolism, and how the tattoo should live with the body. The work aims for permanence, clarity, and restraint rather than spectacle."
            />

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="cathedral-card p-5">
                <p className="font-[family-name:var(--font-caps)] text-[10px] tracking-[0.38em] text-[rgba(248,245,240,0.54)]">
                  SPECIALTY
                </p>
                <p className="mt-3 text-[15px] leading-7 text-[color:rgba(248,245,240,0.72)]">
                  Blackwork structures, sacred motifs, and elegant line systems with strong silhouette.
                </p>
              </div>
              <div className="cathedral-card p-5">
                <p className="font-[family-name:var(--font-caps)] text-[10px] tracking-[0.38em] text-[rgba(248,245,240,0.54)]">
                  APPROACH
                </p>
                <p className="mt-3 text-[15px] leading-7 text-[color:rgba(248,245,240,0.72)]">
                  Collaborative direction, careful spacing, and a premium studio rhythm from consult to healing.
                </p>
              </div>
            </div>

            <div className="mt-8">
              <a
                href="#book"
                className="group relative inline-flex items-center justify-center border border-[rgba(248,245,240,0.2)] bg-[rgba(8,8,8,0.42)] px-8 py-3 font-[family-name:var(--font-caps)] text-[11px] tracking-[0.42em] text-[var(--paper)] transition-all duration-300 hover:border-[#8B0000]/85 hover:shadow-[0_0_34px_rgba(139,0,0,0.18)]"
              >
                <span className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 cathedral-button-glow" />
                <span className="relative">View Artist</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="work" className="relative mx-auto w-full max-w-6xl px-6 py-12 sm:px-10 sm:py-16">
        <div className="cathedral-section-shell p-8 sm:p-10">
          <SectionHeading
            eyebrow="PORTFOLIO PREVIEW"
            title="Minimal previews, strong silhouette, deliberate glow."
            copy="The portfolio cards stay clean, but the lighting and linework keep them alive. Hover brings them closer without breaking the mood."
          />

          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {PORTFOLIO_ITEMS.map((item) => (
              <PortfolioTile key={item.title} {...item} />
            ))}
          </div>
        </div>
      </section>

      <section id="process" className="relative mx-auto w-full max-w-6xl px-6 py-12 sm:px-10 sm:py-16">
        <div className="cathedral-section-shell p-8 sm:p-10">
          <SectionHeading
            eyebrow="BOOKING PROCESS"
            title="Four steps. Clean, clear, and easy to scan."
            copy="Nothing hidden, nothing chaotic. The process is structured so the work stays custom while the experience stays simple."
          />

          <div className="mt-10 grid gap-5 lg:grid-cols-4">
            {PROCESS_STEPS.map((item) => (
              <article key={item.step} className="cathedral-card flex min-h-[240px] flex-col p-6">
                <p className="font-[family-name:var(--font-display)] text-4xl leading-none text-[rgba(248,245,240,0.32)]">
                  {item.step}
                </p>
                <h3 className="mt-6 font-[family-name:var(--font-display)] text-2xl tracking-tight text-[var(--paper)]">
                  {item.title}
                </h3>
                <p className="mt-4 text-[15px] leading-7 text-[color:rgba(248,245,240,0.66)]">
                  {item.copy}
                </p>
              </article>
            ))}
          </div>

          <div id="book" className="mt-10 flex flex-col items-start justify-between gap-5 rounded-[24px] border border-[rgba(248,245,240,0.14)] bg-[linear-gradient(180deg,rgba(14,10,10,0.86),rgba(7,7,7,0.96))] p-6 shadow-[0_24px_80px_rgba(0,0,0,0.34)] sm:flex-row sm:items-center">
            <div>
              <p className="font-[family-name:var(--font-caps)] text-[10px] tracking-[0.4em] text-[#9f1a1a]">
                READY TO BOOK
              </p>
              <p className="mt-3 max-w-2xl text-[16px] leading-7 text-[color:rgba(248,245,240,0.72)]">
                Bring the concept, placement, and mood. We will shape the session around the piece rather than forcing it into a generic format.
              </p>
            </div>

            <a
              href="mailto:booking@yourmusetattoo.com"
              className="inline-flex items-center justify-center border border-[#8B0000]/78 bg-[rgba(139,0,0,0.16)] px-7 py-3 font-[family-name:var(--font-caps)] text-[11px] tracking-[0.42em] text-[var(--paper)] transition-all hover:border-[#b62424] hover:bg-[rgba(139,0,0,0.28)] hover:shadow-[0_0_28px_rgba(139,0,0,0.24)]"
            >
              Start Inquiry
            </a>
          </div>
        </div>
      </section>

      <section id="aftercare" className="relative mx-auto w-full max-w-6xl px-6 pb-24 pt-12 sm:px-10 sm:pb-28 sm:pt-16">
        <div className="cathedral-section-shell grid gap-10 p-8 sm:p-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <SectionHeading
              eyebrow="AFTERCARE"
              title="Trust is built after the session, not only during it."
              copy="Healing support stays simple, direct, and designed to protect the finish of the work. Clients leave knowing what to do, what to avoid, and when to check back in."
            />
          </div>

          <div className="grid gap-4">
            {AFTERCARE_POINTS.map((point) => (
              <div key={point} className="cathedral-card flex items-start gap-4 p-5">
                <div className="mt-2 h-2.5 w-2.5 shrink-0 rotate-45 bg-[#8B0000] shadow-[0_0_12px_rgba(139,0,0,0.38)]" />
                <p className="text-[15px] leading-7 text-[color:rgba(248,245,240,0.7)]">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
