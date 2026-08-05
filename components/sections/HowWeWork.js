"use client";

import { motion } from "framer-motion";
import Container from "@/components/shared/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { workSteps } from "@/data/services";

export default function HowWeWork() {
  return (
    <section id="how-we-work" className="bg-white py-14 lg:py-22">
      <Container>
        <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-end">
          <SectionHeading
            eyebrow="Our Process"
            title="How We Work"
            description="Seven stages, one dedicated project manager, and full visibility from your first call to the day you move in."
          />
          <div className="flex shrink-0 flex-col items-start gap-1 rounded-card border border-border bg-footer-text px-7 py-5 lg:items-end">
            <span className="text-[13px] font-semibold uppercase tracking-[0.14em] text-text-secondary">
              Average Timeline
            </span>
            <span className="font-heading text-[30px] text-text-primary">
              45–60 Days
            </span>
          </div>
        </div>

        <div className="relative mt-16 pl-10 sm:pl-14">
          <div className="absolute left-1.75 top-2 bottom-2 w-px bg-border sm:left-2.75" />
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
            style={{ transformOrigin: "top" }}
            className="absolute left-1.75 top-2 bottom-2 w-px bg-accent sm:left-2.75"
          />

          <div className="flex flex-col gap-12">
            {workSteps.map((step, i) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: i * 0.05 }}
                className="relative"
              >
                <span className="absolute -left-10 top-0.5 flex h-4 w-4 items-center justify-center rounded-full border-2 border-accent bg-white sm:-left-14 sm:h-6 sm:w-6">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent sm:h-2 sm:w-2" />
                </span>
                <div className="flex flex-col gap-1.5 sm:flex-row sm:items-baseline sm:gap-4">
                  <span className="text-[13.5px] font-semibold text-accent">
                    0{step.id}
                  </span>
                  <h3 className="font-heading text-[22px] text-text-primary">
                    {step.title}
                  </h3>
                </div>
                <p className="mt-2 max-w-lg text-[15px] leading-relaxed text-text-secondary">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
