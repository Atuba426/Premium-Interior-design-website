import Navbar from "../components/layout/Navbar";
import Hero from "../components/sections/Hero";
import TrustNumbers from "../components/sections/TrustNumbers";
import FeaturedProjects from "../components/sections/FeaturedProjects";
import ExploreDesigns from "../components/sections/ExploreDesigns";
import Sevices from "../components/sections/service";
import HowWeWork from "../components/sections/HowWeWork";

import BeforeAfter from "../components/sections/BeforeAfter";
import Testimonials from "../components/sections/Testimonials";
import Pricing from "../components/sections/Pricing";
import FAQ from "../components/sections/FAQ";
import CTASection from "../components/sections/CTASection";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TrustNumbers />
        <FeaturedProjects />
        <ExploreDesigns />
        <Sevices />
        <HowWeWork />

        <BeforeAfter />
        <Testimonials />
        <Pricing />
        <FAQ />
        <CTASection />
      </main>
    </>
  );
}
