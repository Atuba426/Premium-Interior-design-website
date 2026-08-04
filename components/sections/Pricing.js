import Container from "@/components/shared/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import PricingCard from "@/components/cards/PricingCard";
import { pricingPlans } from "@/data/pricing";

export default function Pricing() {
  return (
    <section id="pricing" className="bg-white py-24 lg:py-32">
      <Container>
        <SectionHeading
          eyebrow="Investment"
          title="Starting From"
          description="Transparent, itemized pricing with no hidden costs — every quote is locked once you sign."
          align="center"
        />

        <div className="mt-14 grid grid-cols-1 gap-8 lg:grid-cols-3 lg:gap-6">
          {pricingPlans.map((plan, i) => (
            <PricingCard key={plan.id} plan={plan} index={i} />
          ))}
        </div>
      </Container>
    </section>
  );
}
