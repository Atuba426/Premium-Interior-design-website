"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Star, Quote } from "lucide-react";

export default function TestimonialCard({ testimonial, index = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 26 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay: (index % 3) * 0.1 }}
      className="flex h-full flex-col gap-6 rounded-[18px] border border-[#E8E2D9] bg-white p-8 card-shadow"
    >
      <Quote size={28} className="text-[#B68D40]/40" strokeWidth={1.5} />

      <div className="flex items-center gap-1">
        {Array.from({ length: testimonial.rating }).map((_, i) => (
          <Star key={i} size={14} className="fill-[#B68D40] text-[#B68D40]" />
        ))}
      </div>

      <p className="flex-1 text-[15.5px] leading-relaxed text-[#1F1F1F]/85">
        "{testimonial.review}"
      </p>

      <div className="flex items-center gap-3 border-t border-[#E8E2D9] pt-5">
        <div className="relative h-11 w-11 shrink-0 overflow-hidden rounded-full">
          <Image
            src={testimonial.image}
            alt={testimonial.name}
            fill
            sizes="44px"
            className="object-cover"
          />
        </div>
        <div>
          <p className="text-[14.5px] font-semibold text-[#1F1F1F]">
            {testimonial.name}
          </p>
          <p className="text-[13px] text-[#6B6B6B]">{testimonial.location}</p>
        </div>
      </div>
    </motion.div>
  );
}
