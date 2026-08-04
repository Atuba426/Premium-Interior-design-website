"use client";

import { motion } from "framer-motion";
import { Phone, MessageCircle, ArrowRight } from "lucide-react";
import Container from "@/components/shared/Container";
import Button from "@/components/ui/Button";
import { STUDIO } from "@/lib/utils";

export default function CTASection() {
  return (
    <section id="contact" className="py-24 lg:py-32 bg-accent">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative overflow-hidden rounded-[28px] bg-footer px-8 py-16 text-center sm:px-16 sm:py-24"
        >
          <div className="pointer-events-none absolute -top-24 left-1/2 h-105 w-105 -translate-x-1/2 rounded-full bg-accent/20 blur-3xl" />

          <span className="relative text-[13px] font-semibold uppercase tracking-[0.18em] text-accent">
            Let's Get Started
          </span>

          <h2 className="relative mx-auto mt-5 max-w-2xl font-heading text-[36px] leading-[1.15] text-footer-text text-balance sm:text-[48px] lg:text-[56px]">
            Ready to Transform Your Home?
          </h2>

          <p className="relative mx-auto mt-5 max-w-md text-[16px] leading-relaxed text-footer-text/60">
            Book a free consultation and get a detailed quote within 48 hours —
            no obligation, no pressure.
          </p>

          <div className="relative mt-10 flex flex-wrap items-center justify-center gap-4">
            <Button href="#" variant="accent" icon={ArrowRight}>
              Book Consultation
            </Button>
            <a
              href={`tel:${STUDIO.phone.replace(/\s/g, "")}`}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-7 py-3.5 text-[16px] font-semibold text-footer-text transition-colors hover:border-white/40 hover:bg-white/10"
            >
              <Phone size={17} /> Call Us
            </a>
            <a
              href={`https://wa.me/${STUDIO.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-7 py-3.5 text-[16px] font-semibold text-footer-text transition-colors hover:border-white/40 hover:bg-white/10"
            >
              <MessageCircle size={17} /> WhatsApp
            </a>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
