import Container from "@/components/shared/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import FeatureCard from "@/components/cards/FeatureCard";
import { whyChooseUs } from "@/data/services";

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="py-24 lg:py-32">
      <Container>
        <SectionHeading
          eyebrow="Why Interio"
          title="Why Choose Us"
          description="Six commitments we hold ourselves to on every single project, regardless of size or budget."
          align="center"
        />

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {whyChooseUs.map((feature, i) => (
            <FeatureCard key={feature.id} feature={feature} index={i} />
          ))}
        </div>
      </Container>
    </section>
  );
}
