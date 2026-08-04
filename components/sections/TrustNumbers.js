"use client";

import {Space_Grotesk } from "next/font/google";
import { motion } from "framer-motion";
import Container from "@/components/shared/Container";
import AnimatedCounter from "@/components/ui/AnimatedCounter";

const statFont = Space_Grotesk({
  subsets: ["latin"],
  weight: ["600", "700"],
});

const stats = [
  { value: 250, suffix: "+", label: "Homes Designed" },
  { value: 10, suffix: "+", label: "Years Experience" },
  { value: 500, suffix: "+", label: "Happy Clients" },
  { value: 4.9, suffix: "★", label: "Google Rating" },
];

export default function TrustNumbers() {
  return (
    <section className="border-y border-border bg-white py-14">
      <Container>
        <div className="grid grid-cols-2 gap-y-10 sm:grid-cols-4">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="flex flex-col items-center gap-1.5 text-center"
            >
              <AnimatedCounter
                value={stat.value}
                suffix={stat.suffix}
                className={`${statFont.className} text-[38px] font-semibold text-text-primary sm:text-[46px]`}
              />
              <span className="text-[14.5px] font-medium text-text-secondary">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}