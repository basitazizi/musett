import Hero from "@/components/landing/hero";
import HomeSections from "@/components/landing/home-sections";
import SiteNav from "@/components/landing/site-nav";

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <SiteNav />
      <main className="relative z-10">
        <Hero />
        <HomeSections />
      </main>
    </div>
  );
}
