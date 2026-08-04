import Container from "@/components/shared/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import DesignCard from "@/components/cards/DesignCard";
import { homeTypes, designStyles } from "@/data/explore";

export default function ExploreDesigns() {
  return (
    <section id="explore" className="bg-white py-24 lg:py-32">
      <Container>
        <SectionHeading
          eyebrow="Browse By"
          title="Explore Our Designs"
          description="Start with the shape of your home or the mood you're after — every path leads to a portfolio built around it."
          align="center"
        />

        <div className="mt-16 flex flex-col gap-14">
          <div>
            <h3 className="mb-6 text-[15px] font-semibold uppercase tracking-[0.14em] text-text-secondary">
              Home Types
            </h3>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
              {homeTypes.map((item, i) => (
                <DesignCard key={item.id} item={item} index={i} />
              ))}
            </div>
          </div>

          <div>
            <h3 className="mb-6 text-[15px] font-semibold uppercase tracking-[0.14em] text-text-secondary">
              Design Styles
            </h3>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
              {designStyles.map((item, i) => (
                <DesignCard key={item.id} item={item} index={i} />
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
