"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function DesignCard({ item, index = 0 }) {
  return (
    <motion.button
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="group relative h-47.5 w-full shrink-0 overflow-hidden rounded-card sm:h-55"
    >
      <Image
        src={item.image}
        alt={item.name}
        fill
        sizes="(min-width: 1024px) 220px, 45vw"
        className="object-cover transition-transform duration-700 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/5 to-transparent transition-opacity duration-300 group-hover:from-black/70" />
      <span className="absolute bottom-4 left-4 font-heading text-[19px] font-medium text-white">
        {item.name}
      </span>
    </motion.button>
  );
}
