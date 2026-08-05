"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight, MapPin } from "lucide-react";

export default function ProjectCard({ project, index = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay: (index % 3) * 0.12, ease: [0.22, 1, 0.36, 1] }}
      className="group flex flex-col overflow-hidden rounded-card bg-white card-shadow transition-shadow duration-300 hover:card-shadow-lg"
    >
      <div className="relative h-70 overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          sizes="(min-width: 1024px) 400px, 100vw"
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-[12.5px] font-semibold text-text-primary backdrop-blur-sm">
          {project.category}
        </span>
      </div>

      <div className="flex flex-1 flex-col gap-3 p-6">
        <div className="flex items-center gap-1.5 text-[13.5px] text-text-secondary">
          <MapPin size={14} className="text-accent" />
          {project.location}
        </div>
        <h3 className="font-heading text-[21px] leading-snug text-text-primary">
          {project.title}
        </h3>
        <p className="text-[14.5px] leading-relaxed text-text-secondary">
          {project.description}
        </p>

        <button className="mt-2 inline-flex w-fit items-center gap-1.5 border-b border-text-primary pb-0.5 text-[14px] font-semibold text-text-primary transition-colors group-hover:border-accent group-hover:text-accent">
          View Project
          <ArrowUpRight size={15} />
        </button>
      </div>
    </motion.div>
  );
}
