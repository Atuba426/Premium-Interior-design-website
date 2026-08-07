import Container from "@/components/shared/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import BeforeAfterSlider from "@/components/ui/BeforeAfterSlider";
import { beforeAfterCases } from "@/data/portfolioExtras";

export default function BeforeAfterShowcase() {
  return (
    <section className="bg-surface py-24 lg:py-32">
      <Container>
        <SectionHeading
          eyebrow="Real Transformations"
          title="See The Difference"
          description="Drag each slider to see how these spaces looked before we started, and how they look now."
          align="center"
        />

        <div className="mt-14 grid grid-cols-1 gap-14 lg:grid-cols-2">
          {beforeAfterCases.map((item) => (
            <div key={item.id} className="flex flex-col gap-4">
              <BeforeAfterSlider before={item.before} after={item.after} />
              <div>
                <h3 className="font-heading text-[20px] text-text-primary">
                  {item.title}
                </h3>
                <p className="text-[14px] text-text-secondary">
                  {item.location}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
