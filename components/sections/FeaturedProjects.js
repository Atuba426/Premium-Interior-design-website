import Container from "@/components/shared/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import ProjectCard from "@/components/cards/ProjectCard";
import Button from "@/components/ui/Button";
import { projects } from "@/data/projects";
import { ArrowRight } from "lucide-react";

export default function FeaturedProjects() {
  return (
    <section id="projects" className="py-24 lg:py-32">
      <Container>
        <div className="flex flex-col items-start justify-between gap-8 sm:flex-row sm:items-end">
          <SectionHeading
            eyebrow="Portfolio"
            title="Featured Projects"
            description="A selection of homes we've designed and built across Mumbai, Thane, and Alibaug — each one shaped around how its owners actually live."
          />
          <Button href="#projects" variant="secondary" icon={ArrowRight} className="hidden shrink-0 sm:inline-flex">
            All Projects
          </Button>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </Container>
    </section>
  );
}
