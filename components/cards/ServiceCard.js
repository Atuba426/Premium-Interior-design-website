"use client";

import { motion } from "framer-motion";
import * as Icons from "lucide-react";

export default function ServiceCard({ service, index = 0 }) {
  const Icon = Icons[service.icon] || Icons.Sparkle;

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.6, delay: (index % 3) * 0.1 }}
      className="group flex flex-col gap-5 rounded-card border border-border bg-surface p-8 card-shadow transition-all duration-300 hover:-translate-y-1.5 hover:card-shadow-lg"
    >
      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-background text-accent transition-colors duration-300 group-hover:bg-accent group-hover:text-background">
        <Icon size={22} strokeWidth={1.75} />
      </div>
      <h3 className="font-heading text-[22px] text-text-primary">
        {service.name}
      </h3>
      <p className="text-[15px] leading-relaxed text-text-secondary">
        {service.summary}
      </p>
      <p className="text-[14px] leading-relaxed text-text-secondary/80">
        {service.details}
      </p>
    </motion.div>
  );
}
