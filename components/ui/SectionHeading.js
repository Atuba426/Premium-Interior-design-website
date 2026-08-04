"use client";

import { motion } from "framer-motion";

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  light = false,
}) {
  const alignment = align === "center" ? "items-center text-center mx-auto" : "items-start text-left";

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={`flex flex-col gap-4 max-w-2xl ${alignment}`}
    >
      {eyebrow && (
        <span
          className={`text-[13px] font-semibold uppercase tracking-[0.18em] ${
            light ? "text-accent" : "text-accent"
          }`}
        >
          {eyebrow}
        </span>
      )}
      <h2
        className={`font-heading text-[34px] leading-[1.15] sm:text-[42px] lg:text-[52px] text-balance ${
          light ? "text-footer-text" : "text-text-primary"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`text-[17px] leading-relaxed lg:text-[18px] ${
            light ? "text-footer-text/70" : "text-text-secondary"
          }`}
        >
          {description}
        </p>
      )}
    </motion.div>
  );
}
