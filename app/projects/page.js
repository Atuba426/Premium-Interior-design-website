import PageHero from "@/components/shared/PageHero";
import Container from "@/components/shared/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import ProjectCard from "@/components/cards/ProjectCard";
import VideoPlayer from "@/components/ui/VideoPlayer";
import CTASection from "@/components/sections/CTASection";
import { projects } from "@/data/projects";
import { portfolioVideo } from "@/data/portfolioExtras";

export const metadata = {
  title: "Portfolio",
  description:
    "Browse completed homes designed and built by Interio Design Studio across Mumbai, Thane, and Alibaug — including a video walkthrough.",
};

export default function PortfolioPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Work"
        title="Homes We've Designed & Built"
        description="A closer look at completed projects across Mumbai, Thane, and Alibaug — from compact 1BHKs to full villas."
      />

      <section className="pb-24 lg:pb-32">
        <Container>
          <SectionHeading
            eyebrow="Walkthrough"
            title="Step Inside a Project"
            description="A short video tour of one of our recent homes — watch how the spaces actually feel, not just how they photograph."
          />

          <div className="mt-10">
            <VideoPlayer
              src={portfolioVideo.src}
              poster={portfolioVideo.poster}
              title={portfolioVideo.title}
            />
            <div className="mt-5 max-w-2xl">
              <h3 className="font-heading text-[20px] text-text-primary">
                {portfolioVideo.title}
              </h3>
              <p className="mt-1 text-[14.5px] leading-relaxed text-text-secondary">
                {portfolioVideo.description}
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-surface py-24 lg:py-32">
        <Container>
          <SectionHeading
            eyebrow="Full Portfolio"
            title="All Projects"
            description="Every home listed here was designed, sourced, and executed in-house by our own team."
            align="center"
          />

          <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} />
            ))}
          </div>
        </Container>
      </section>

      <CTASection />
    </>
  );
}
