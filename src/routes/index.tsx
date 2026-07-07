import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import { Trust } from "@/components/site/Trust";
import { Services } from "@/components/site/Services";
import { Portfolio } from "@/components/site/Portfolio";
import { Process } from "@/components/site/Process";
import { WhyUs } from "@/components/site/WhyUs";
import { Testimonials } from "@/components/site/Testimonials";
import { Stats } from "@/components/site/Stats";
import { About } from "@/components/site/About";
import { CTA } from "@/components/site/CTA";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <main>
        <Hero />
        <Trust />
        <Services />
        <Portfolio />
        <Process />
        <WhyUs />
        <Testimonials />
        <Stats />
        <About />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
