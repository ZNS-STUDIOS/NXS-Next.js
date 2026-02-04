import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { TrustBadges } from "@/components/TrustBadges";
import { MarchingBanner } from "@/components/MarchingBanner";
import { Services } from "@/components/Services";
import { Process } from "@/components/Process";
import { WhyUs } from "@/components/WhyUs";
import { Testimonials } from "@/components/Testimonials";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-zns-dark text-white">
      <Navigation />
      <Hero />
      <TrustBadges />
      <Services />
      <Process />
      <WhyUs />
      <Testimonials />
      <FAQ />
      <Footer />
    </main>
  );
}
