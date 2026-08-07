import PageHero from "@/components/shared/PageHero";
import Container from "@/components/shared/Container";
import Badge from "@/components/ui/Badge";
import TestimonialCard from "@/components/cards/TestimonialCard";
import TrustNumbers from "@/components/sections/TrustNumbers";
import CTASection from "@/components/sections/CTASection";
import { testimonials } from "@/data/testimonials";

export const metadata = {
  title: "Client Reviews",
  description:
    "Read what homeowners across Mumbai say about working with Interio Design Studio.",
};

export default function ReviewsPage() {
  return (
    <>
      <PageHero
        eyebrow="Client Stories"
        title="What Our Clients Say"
        description="Every review here is from a completed project — no design mockups, just homeowners living in what we built."
      />

      <section className="pb-16">
        <Container>
          <div className="flex justify-center">
            <Badge rating="4.9" label="Google Rating" reviews="500+ reviews" />
          </div>
        </Container>
      </section>

      <section className="pb-24 lg:pb-32">
        <Container>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((t, i) => (
              <TestimonialCard key={t.id} testimonial={t} index={i} />
            ))}
          </div>
        </Container>
      </section>

      <TrustNumbers />

      <CTASection />
    </>
  );
}
