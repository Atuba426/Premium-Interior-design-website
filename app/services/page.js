import PageHero from "@/components/shared/PageHero";
import Container from "@/components/shared/Container";
import ServiceCard from "@/components/cards/ServiceCard";
import BeforeAfterShowcase from "@/components/sections/BeforeAfterShowcase";
import CTASection from "@/components/sections/CTASection";
import { servicesList } from "@/data/servicesList";

export const metadata = {
  title: "Services",
  description:
    "Full-home interiors, modular kitchens, custom wardrobes, lighting design, 3D visualization, and renovation services from Interio Design Studio.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="What We Do"
        title="Services Built For How You Live"
        description="From a single modular kitchen to a full home renovation — every service is delivered by our own in-house team, with one project manager coordinating it all."
      />

      <section className="pb-24 lg:pb-32">
        <Container>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {servicesList.map((service, i) => (
              <ServiceCard key={service.id} service={service} index={i} />
            ))}
          </div>
        </Container>
      </section>

      <BeforeAfterShowcase />

      <CTASection />
    </>
  );
}
