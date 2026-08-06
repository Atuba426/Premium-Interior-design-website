"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function TeamCard({ member, index = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.6, delay: (index % 4) * 0.1 }}
      className="group flex flex-col gap-4"
    >
      <div className="relative aspect-4/5 w-full overflow-hidden rounded-card card-shadow">
        <Image
          src={member.image}
          alt={member.name}
          fill
          sizes="(min-width: 1024px) 280px, 45vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>
      <div>
        <h3 className="font-heading text-[19px] text-text-primary">
          {member.name}
        </h3>
        <p className="text-[13.5px] font-medium text-accent">
          {member.role}
        </p>
        <p className="mt-2 text-[14px] leading-relaxed text-text-secondary">
          {member.bio}
        </p>
      </div>
    </motion.div>
  );
}
