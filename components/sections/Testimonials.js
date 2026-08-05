import Container from "@/components/shared/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import TestimonialCard from "@/components/cards/TestimonialCard";
import { testimonials } from "@/data/testimonials";

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-14 lg:py-12">
      <Container>
        <SectionHeading
          eyebrow="Client Stories"
          title="What Our Clients Say"
          description="Real reviews from homeowners we've worked with across Mumbai and beyond."
          align="center"
        />

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <TestimonialCard key={t.id} testimonial={t} index={i} />
          ))}
        </div>
      </Container>
    </section>
  );
}
