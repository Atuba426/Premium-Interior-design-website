"use client";

import { motion } from "framer-motion";
import * as Icons from "lucide-react";

export default function IncludedCard({ item, index = 0 }) {
  const Icon = Icons[item.icon] || Icons.Sparkle;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: (index % 4) * 0.08 }}
      className="group flex flex-col items-start gap-4 rounded-card border border-border bg-footer-text p-6 transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:card-shadow"
    >
      <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-accent transition-colors group-hover:bg-accent group-hover:text-white">
        <Icon size={20} strokeWidth={1.75} />
      </div>
      <span className="text-[15.5px] font-semibold text-text-primary">
        {item.name}
      </span>
    </motion.div>
  );
}
