"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import Button from "@/components/ui/Button";

export default function PricingCard({ plan, index = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 26 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className={`relative flex flex-col gap-7 rounded-card p-8 transition-all duration-300 hover:-translate-y-1.5 ${
        plan.featured
          ? "border-2 border-accent bg-white card-shadow-lg lg:scale-105"
          : "border border-border bg-white card-shadow"
      }`}
    >
      {plan.featured && (
        <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-accent px-4 py-1.5 text-[12.5px] font-semibold text-white">
          Most Popular
        </span>
      )}

      <div>
        <h3 className="font-heading text-[24px] text-text-primary">
          {plan.name}
        </h3>
        <p className="mt-1 text-[13.5px] text-text-secondary">{plan.priceNote}</p>
        <p className="mt-3 font-heading text-[38px] text-text-primary">
          {plan.price}
        </p>
      </div>

      <p className="text-[14.5px] leading-relaxed text-text-secondary">
        {plan.description}
      </p>

      <ul className="flex flex-col gap-3">
        {plan.features.map((feature) => (
          <li key={feature} className="flex items-start gap-2.5 text-[14.5px] text-text-primary/85">
            <Check size={17} className="mt-0.5 shrink-0 text-accent" />
            {feature}
          </li>
        ))}
      </ul>

      <Button
        href="#contact"
        variant={plan.featured ? "primary" : "secondary"}
        className="mt-auto w-full"
      >
        Get Free Estimate
      </Button>
    </motion.div>
  );
}
