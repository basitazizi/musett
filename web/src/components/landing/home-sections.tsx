function SectionEyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="font-[family-name:var(--font-caps)] text-[10px] tracking-[0.42em] text-[rgba(232,198,124,0.8)] sm:text-[11px]">
      {children}
    </p>
  );
}

function CathedralSectionHeading({
  eyebrow,
  title,
  copy,
}: {
  eyebrow: string;
  title: string;
  copy: string;
}) {
  return (
    <div className="relative z-10 max-w-xl">
      <SectionEyebrow>{eyebrow}</SectionEyebrow>
      <h2 className="cathedral-heading mt-4 text-[clamp(2.4rem,8vw,4.8rem)] leading-[0.9] tracking-tight text-[var(--paper)]">
        {title}
      </h2>
      <p className="mt-5 max-w-lg text-[15px] leading-7 text-[rgba(248,245,240,0.72)] sm:text-[17px] sm:leading-8">
        {copy}
      </p>
    </div>
  );
}

function BloodDrips({ align = "left" }: { align?: "left" | "right" | "center" }) {
  const positionClass =
    align === "left"
      ? "left-0"
      : align === "right"
        ? "right-0"
        : "left-1/2 -translate-x-1/2";

  return (
    <div className={["pointer-events-none absolute top-0 flex gap-4 opacity-70", positionClass].join(" ")} aria-hidden="true">
      <span className="h-10 w-px rounded-full bg-[linear-gradient(180deg,rgba(139,0,0,0.72),rgba(139,0,0,0))]" />
      <span className="mt-2 h-16 w-px rounded-full bg-[linear-gradient(180deg,rgba(139,0,0,0.42),rgba(139,0,0,0))]" />
      <span className="h-7 w-px rounded-full bg-[linear-gradient(180deg,rgba(139,0,0,0.55),rgba(139,0,0,0))]" />
    </div>
  );
}

function CathedralLines({
  className,
  mirrored = false,
}: {
  className?: string;
  mirrored?: boolean;
}) {
  return (
    <svg
      className={[
        "pointer-events-none absolute h-full w-full",
        mirrored ? "scale-x-[-1]" : "",
        className ?? "",
      ].join(" ")}
      viewBox="0 0 520 760"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M86 760 V224 Q86 154 140 112 Q182 78 256 30 Q330 78 372 112 Q426 154 426 224 V760"
        stroke="rgba(232,198,124,0.18)"
        strokeWidth="1.6"
      />
      <path
        d="M132 760 V270 Q132 214 170 178 Q204 146 256 94 Q308 146 342 178 Q380 214 380 270 V760"
        stroke="rgba(248,245,240,0.14)"
        strokeWidth="1.2"
      />
      <path d="M256 100 V760" stroke="rgba(232,198,124,0.12)" strokeWidth="1.1" />
      <path d="M166 346 H346" stroke="rgba(248,245,240,0.08)" strokeWidth="1" />
      <path d="M148 544 H364" stroke="rgba(232,198,124,0.08)" strokeWidth="1" />
    </svg>
  );
}

function ArtistFigure() {
  return (
    <div className="relative mx-auto aspect-[0.78] w-full max-w-[20rem]">
      <div className="absolute inset-0 rounded-[48%_48%_36%_36%/18%_18%_12%_12%] bg-[radial-gradient(circle_at_50%_18%,rgba(255,244,220,0.14),transparent_20%),linear-gradient(180deg,rgba(12,10,10,0.92),rgba(6,6,6,0.98))]" />
      <div className="absolute inset-x-[10%] top-[8%] bottom-[6%] rounded-[44%_44%_28%_28%/14%_14%_10%_10%] border border-[rgba(248,245,240,0.14)]" />
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 420 520"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          d="M196 126 C222 114 255 117 278 136 C303 156 315 189 314 223 C312 253 299 282 279 302 C257 324 226 338 196 336 C166 333 141 315 126 290 C111 265 106 235 110 207 C115 168 145 138 196 126 Z"
          fill="rgba(35,29,27,0.98)"
        />
        <path
          d="M182 332 C218 327 255 334 286 353 C322 375 345 413 354 456 C321 467 291 483 265 504 C241 522 220 546 198 568 C160 536 130 495 120 448 C111 405 130 360 182 332 Z"
          fill="rgba(15,13,13,0.96)"
        />
        <path
          d="M98 454 C122 438 153 430 182 432 C216 434 245 447 272 467"
          stroke="rgba(248,245,240,0.14)"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M188 176 C204 166 225 164 240 170 C255 176 268 189 272 204"
          stroke="rgba(248,245,240,0.1)"
          strokeWidth="1.4"
          strokeLinecap="round"
        />
      </svg>
      <div className="absolute bottom-[8%] left-1/2 w-[76%] -translate-x-1/2 text-center">
        <SectionEyebrow>RESIDENT ARTIST</SectionEyebrow>
        <p className="mt-3 font-[family-name:var(--font-display)] text-3xl tracking-tight text-[var(--paper)]">
          Nadia Vale
        </p>
      </div>
    </div>
  );
}

function ArtistSection() {
  return (
    <section id="artist" className="relative mx-auto w-full max-w-6xl px-6 py-20 sm:px-10 sm:py-28">
      <BloodDrips align="left" />
      <CathedralLines className="left-[2%] top-0 hidden max-w-[22rem] opacity-60 lg:block" />
      <div className="absolute inset-x-[8%] top-[18%] h-40 bg-[radial-gradient(circle_at_50%_50%,rgba(232,198,124,0.12),transparent_66%)] blur-3xl" aria-hidden="true" />
      <div className="absolute inset-x-[10%] bottom-0 h-px bg-[linear-gradient(90deg,transparent,rgba(232,198,124,0.22),transparent)]" aria-hidden="true" />

      <div className="relative z-10 grid items-center gap-14 lg:grid-cols-[0.9fr_1.1fr]">
        <ArtistFigure />

        <div className="relative">
          <CathedralSectionHeading
            eyebrow="MEET ARTIST"
            title="A steady hand under cathedral light."
            copy="Nadia builds blackwork and fine line pieces with calm pacing, anatomical balance, and a reverent eye for silhouette. The mood stays dark and cinematic, but the work stays readable for the long term."
          />

          <div className="mt-8 max-w-xl space-y-5">
            <p className="border-l border-[rgba(232,198,124,0.28)] pl-5 text-[15px] leading-7 text-[rgba(248,245,240,0.68)] sm:text-[16px] sm:leading-8">
              Specialty in sacred motifs, elegant line systems, and custom designs that feel deliberate rather than overloaded.
            </p>
            <p className="border-l border-[rgba(139,0,0,0.4)] pl-5 text-[15px] leading-7 text-[rgba(248,245,240,0.62)] sm:text-[16px] sm:leading-8">
              Each concept is refined around placement, body movement, and how the tattoo should age, not just how it looks on day one.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function BookSection() {
  return (
    <section id="book" className="relative mx-auto w-full max-w-6xl px-6 py-20 sm:px-10 sm:py-28">
      <BloodDrips align="center" />
      <CathedralLines className="right-[4%] top-0 hidden max-w-[20rem] opacity-45 lg:block" mirrored />
      <div className="absolute inset-x-0 top-[16%] h-56 bg-[radial-gradient(circle_at_50%_50%,rgba(139,0,0,0.16),transparent_62%)] blur-3xl" aria-hidden="true" />
      <div className="absolute inset-x-[6%] top-[30%] h-px bg-[linear-gradient(90deg,transparent,rgba(232,198,124,0.24),transparent)]" aria-hidden="true" />

      <div className="relative z-10 text-center">
        <CathedralSectionHeading
          eyebrow="BOOK NOW"
          title="Reserve the session under warm gold lines."
          copy="Bring your concept, placement, and preferred atmosphere. The booking flow stays direct, appointment-first, and built around the piece rather than a generic intake form."
        />

        <div className="mx-auto mt-10 flex max-w-3xl flex-col items-center gap-6">
          <a
            href="mailto:booking@yourmusetattoo.com"
            className="group relative inline-flex min-h-14 items-center justify-center overflow-hidden rounded-full border border-[rgba(232,198,124,0.3)] bg-[linear-gradient(180deg,rgba(248,245,240,0.96),rgba(230,222,210,0.92))] px-10 py-4 font-[family-name:var(--font-caps)] text-[10px] tracking-[0.42em] text-[var(--ink)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_36px_rgba(232,198,124,0.18)]"
          >
            <span className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-[radial-gradient(circle,rgba(232,198,124,0.28),transparent_70%)]" />
            <span className="relative">Start Inquiry</span>
          </a>

          <div className="max-w-2xl space-y-4">
            <p className="text-[15px] leading-7 text-[rgba(248,245,240,0.72)] sm:text-[16px] sm:leading-8">
              Expect concept review, placement discussion, and a clear recommendation on timing before anything gets booked.
            </p>
            <p className="text-[14px] tracking-[0.18em] text-[rgba(232,198,124,0.62)] uppercase">
              Appointment-only. Quiet sessions. Precision first.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function AftercareContactSection() {
  return (
    <section id="aftercare" className="relative mx-auto w-full max-w-6xl px-6 pb-24 pt-20 sm:px-10 sm:pb-32 sm:pt-28">
      <BloodDrips align="right" />
      <div className="absolute inset-x-[10%] top-[8%] h-px bg-[linear-gradient(90deg,transparent,rgba(232,198,124,0.18),transparent)]" aria-hidden="true" />
      <div className="absolute left-[4%] top-[18%] hidden h-[70%] w-px bg-[linear-gradient(180deg,transparent,rgba(232,198,124,0.14),transparent)] lg:block" aria-hidden="true" />
      <div className="absolute right-[4%] top-[18%] hidden h-[70%] w-px bg-[linear-gradient(180deg,transparent,rgba(139,0,0,0.18),transparent)] lg:block" aria-hidden="true" />
      <div className="absolute inset-x-[12%] bottom-[8%] h-44 bg-[radial-gradient(circle_at_50%_50%,rgba(232,198,124,0.08),transparent_70%)] blur-3xl" aria-hidden="true" />

      <div className="relative z-10 grid gap-14 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <CathedralSectionHeading
            eyebrow="AFTER CARE / CONTACT"
            title="Healing guidance and a clear contact path."
            copy="Aftercare stays concise, practical, and tailored to blackwork and fine line healing. You leave knowing what to do, what to avoid, and how to reach back out if the piece needs attention."
          />

          <div className="mt-8 space-y-5">
            <p className="border-l border-[rgba(232,198,124,0.26)] pl-5 text-[15px] leading-7 text-[rgba(248,245,240,0.68)] sm:text-[16px] sm:leading-8">
              Clean washing, moisture balance, and touch-up timing are explained without vague filler.
            </p>
            <p className="border-l border-[rgba(139,0,0,0.38)] pl-5 text-[15px] leading-7 text-[rgba(248,245,240,0.62)] sm:text-[16px] sm:leading-8">
              Questions after the session stay welcome. The relationship does not stop once the appointment ends.
            </p>
          </div>
        </div>

        <div className="relative flex flex-col justify-center gap-8">
          <CathedralLines className="left-0 top-[-8%] opacity-35" />
          <div className="relative z-10 space-y-6">
            <div>
              <SectionEyebrow>EMAIL</SectionEyebrow>
              <a
                href="mailto:booking@yourmusetattoo.com"
                className="mt-3 inline-block font-[family-name:var(--font-display)] text-[clamp(1.8rem,5vw,2.8rem)] leading-[0.96] tracking-tight text-[var(--paper)] transition-colors hover:text-[rgba(232,198,124,0.92)]"
              >
                booking@yourmusetattoo.com
              </a>
            </div>

            <div>
              <SectionEyebrow>FOLLOW / STUDIO</SectionEyebrow>
              <p className="mt-3 max-w-md text-[15px] leading-7 text-[rgba(248,245,240,0.66)] sm:text-[16px] sm:leading-8">
                DM for references, healed work, and atmosphere previews. Session communication stays calm, direct, and easy to follow.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function HomeSections() {
  return (
    <div className="relative z-10 overflow-hidden">
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-[linear-gradient(180deg,transparent,rgba(232,198,124,0.1)_10%,rgba(232,198,124,0.06)_90%,transparent)]" />
        <div className="absolute inset-x-0 top-[12%] h-[26rem] bg-[radial-gradient(circle_at_50%_50%,rgba(139,0,0,0.08),transparent_66%)] blur-3xl" />
      </div>

      <ArtistSection />
      <BookSection />
      <AftercareContactSection />
    </div>
  );
}
