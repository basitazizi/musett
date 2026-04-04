import CathedralRoomFrame from "@/components/landing/cathedral-room-frame";
import Hero from "@/components/landing/hero";
import HomeSections from "@/components/landing/home-sections";
import Marquee from "@/components/landing/marquee";
import SiteNav from "@/components/landing/site-nav";
import DustParticles from "@/components/visual/dust-particles";

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <CathedralRoomFrame />
      <DustParticles visible count={20} />
      <SiteNav />
      <main className="relative z-10 pt-20 sm:pt-16">
        <Hero />
        <Marquee />
        <HomeSections />
      </main>
    </div>
  );
}
