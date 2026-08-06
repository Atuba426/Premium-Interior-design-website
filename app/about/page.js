import Image from "next/image";
import PageHero from "@/components/shared/PageHero";
import Container from "@/components/shared/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import TeamCard from "@/components/cards/TeamCard";
import TrustNumbers from "@/components/sections/TrustNumbers";
import HowWeWork from "@/components/sections/HowWeWork";
import CTASection from "@/components/sections/CTASection";
import { aboutStory, teamMembers } from "@/data/team";

export const metadata = {
  title: "About Us",
  description:
    "Meet Interio Design Studio — a Mumbai-based interior design team building homes since 2016.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero eyebrow="About Us" title="About Interio Design Studio" />

      <section className="pb-24 lg:pb-32">
        <Container>
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="relative aspect-4/3 w-full overflow-hidden rounded-card card-shadow-lg">
              <Image
                src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=1200&auto=format&fit=crop"
                alt="Interio Design Studio team reviewing a floor plan"
                fill
                sizes="(min-width: 1024px) 560px, 100vw"
                className="object-cover"
              />
            </div>

            <div className="flex flex-col gap-5">
              <span className="tracked-caps text-[13px] font-semibold text-accent">
                {aboutStory.eyebrow}
              </span>
              <h2 className="font-heading text-[32px] leading-tight text-text-primary sm:text-[40px]">
                {aboutStory.title}
              </h2>
              {aboutStory.paragraphs.map((p, i) => (
                <p
                  key={i}
                  className="text-[15.5px] leading-relaxed text-text-secondary"
                >
                  {p}
                </p>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <TrustNumbers />

      <section className="py-24 lg:py-32">
        <Container>
          <SectionHeading
            eyebrow="The Team"
            title="The People Behind Every Project"
            description="A small, senior team — you'll work directly with these people, not a rotating cast of account managers."
            align="center"
          />

          <div className="mt-14 grid grid-cols-2 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {teamMembers.map((member, i) => (
              <TeamCard key={member.id} member={member} index={i} />
            ))}
          </div>
        </Container>
      </section>

      <HowWeWork />

      <CTASection />
    </>
  );
}
