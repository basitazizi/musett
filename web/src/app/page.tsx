import Hero from "@/components/landing/hero";
import Marquee from "@/components/landing/marquee";
import SiteNav from "@/components/landing/site-nav";

export default function Home() {
  return (
    <div className="relative min-h-screen">
      <SiteNav />
      <main className="pt-16">
        <Hero />
        <Marquee />

        <section className="mx-auto w-full max-w-6xl px-6 pb-24 pt-16 sm:px-10">
          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-[#8B0000]/25 bg-black/45 p-7 backdrop-blur-[1px]">
              <p className="font-[family-name:var(--font-caps)] text-[11px] tracking-[0.45em] text-[#8B0000]">
                CRAFT
              </p>
              <h2 className="mt-4 font-[family-name:var(--font-display)] text-2xl tracking-tight">
                Ritual-grade detail
              </h2>
              <p className="mt-3 text-[15px] leading-7 text-[color:rgba(248,245,240,0.62)]">
                Blackwork, fine line, and bespoke iconography, built around your
                anatomy and the story you want to carry.
              </p>
            </div>

            <div className="rounded-2xl border border-[color:rgba(248,245,240,0.14)] bg-black/35 p-7">
              <p className="font-[family-name:var(--font-caps)] text-[11px] tracking-[0.45em] text-[color:rgba(248,245,240,0.55)]">
                EXPERIENCE
              </p>
              <h2 className="mt-4 font-[family-name:var(--font-display)] text-2xl tracking-tight">
                Quiet, cinematic, precise
              </h2>
              <p className="mt-3 text-[15px] leading-7 text-[color:rgba(248,245,240,0.62)]">
                A dark-luxe studio flow with clean lines, intentional pacing,
                and no visual noise.
              </p>
            </div>

            <div className="rounded-2xl border border-[#8B0000]/25 bg-black/45 p-7 backdrop-blur-[1px]">
              <p className="font-[family-name:var(--font-caps)] text-[11px] tracking-[0.45em] text-[#8B0000]">
                BOOKING
              </p>
              <h2 className="mt-4 font-[family-name:var(--font-display)] text-2xl tracking-tight">
                Appointment-first
              </h2>
              <p className="mt-3 text-[15px] leading-7 text-[color:rgba(248,245,240,0.62)]">
                Submit your concept and placement; we reply with a session plan
                and the next available dates.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

