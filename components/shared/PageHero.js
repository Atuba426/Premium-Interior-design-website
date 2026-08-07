"use client";

import { motion } from "framer-motion";
import Container from "@/components/shared/Container";

export default function PageHero({ eyebrow, title, description }) {
  return (
    <section className="pt-10 pb-16 lg:pt-30 lg:pb-5">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto flex max-w-2xl flex-col items-center gap-4 text-center"
        >
          {eyebrow && (
            <span className="tracked-caps text-[13px] font-semibold text-accent">
              {eyebrow}
            </span>
          )}
          <h1 className="font-heading text-[40px] leading-[1.1] text-text-primary text-balance sm:text-[52px] lg:text-[60px]">
            {title}
          </h1>
          {description && (
            <p className="max-w-xl text-[17px] leading-relaxed text-text-secondary">
              {description}
            </p>
          )}
        </motion.div>
      </Container>
    </section>
  );
}
