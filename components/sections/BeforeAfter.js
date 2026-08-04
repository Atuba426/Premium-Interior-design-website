import Container from "@/components/shared/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import BeforeAfterSlider from "@/components/ui/BeforeAfterSlider";

export default function BeforeAfter() {
  return (
    <section className="bg-white py-24 lg:py-32">
      <Container>
        <SectionHeading
          eyebrow="The Transformation"
          title="Before & After"
          description="Drag the slider to see how a dated 2BHK in Chembur was reimagined into a warm, light-filled home."
          align="center"
        />

        <div className="mx-auto mt-14 max-w-4xl">
          <BeforeAfterSlider
            before="https://images.unsplash.com/photo-1484154218962-a197022b5858?q=80&w=1400&auto=format&fit=crop"
            after="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1400&auto=format&fit=crop"
            beforeLabel="Before"
            afterLabel="After"
          />
        </div>
      </Container>
    </section>
  );
}
