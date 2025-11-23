import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { MarchingBanner } from "@/components/MarchingBanner";
import { Services } from "@/components/Services";
import { Process } from "@/components/Process";
import { WhyUs } from "@/components/WhyUs";
import { Testimonials } from "@/components/Testimonials";
import { FAQ } from "@/components/FAQ";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-zns-dark text-white">
      <Navigation />
      <Hero />
      <MarchingBanner />
      <Services />
      <Process />
      <WhyUs />
      <Testimonials />
      <FAQ />
      <FinalCTA />
      <Footer />
    </main>
  );
}
