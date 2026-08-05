"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight, PlayCircle, Star } from "lucide-react";
import Container from "@/components/shared/Container";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import HeroSlider from "./HeroSlider";
const bentoImages = [
  {
    src: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=1200&auto=format&fit=crop",
    alt: "Warm living room with wooden accents designed by Interio Design Studio",
  },
  {
    src: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?q=80&w=700&auto=format&fit=crop",
    alt: "Minimal bedroom interior with soft natural light",
  },
  {
    src: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=700&auto=format&fit=crop",
    alt: "Contemporary kitchen with marble countertop",
  },
  {
    src: "https://images.unsplash.com/photo-1615873968403-89e068629265?q=80&w=700&auto=format&fit=crop",
    alt: "Dining area with natural wood table",
  },
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden pt-32 pb-5 lg:pt-28 lg:pb-18"
    >
      <div className="pointer-events-none absolute -top-40 right-0 h-130 w-130 rounded-full bg-accent/10 blur-3xl" />

      <Container>
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2 lg:gap-10">
          {/* Left Text Content */}
          <div className="flex flex-col items-start gap-7">
            <motion.span
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="rounded-full border border-border bg-white/70 px-4 py-1.5 text-[13px] font-semibold uppercase tracking-[0.14em] text-accent"
            >
              Mumbai's Interior Design Studio
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.2,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="font-heading text-[44px] leading-[1.08] text-text-primary text-balance sm:text-[56px] lg:text-[72px]"
            >
              Design Spaces That Feel Like Home.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.35 }}
              className="max-w-md text-[18px] leading-relaxed text-text-secondary"
            >
              We design and build full-home interiors across Mumbai — from first
              sketch to final handover — with transparent pricing and a
              dedicated project manager at every step.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex flex-wrap items-center gap-4 pt-1"
            >
              <Button
                href="#contact"
                className="px-5! py-2.5! text-[14.5px]! font-medium bg-[#de9b36] hover:bg-gray-950 text-stone-900 shadow-sm hover:text-white transition-all duration-300 rounded-full border-none"
                icon={ArrowRight}
              >
                Book Consultation
              </Button>
              <Button href="#projects" variant="secondary" icon={PlayCircle}>
                View Projects
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.65 }}
              className="pt-2"
            >
              <Badge />
            </motion.div>
          </div>

          {/* Right — 1 Large Image Left, 3 Small Stacked Right */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="grid grid-cols-1 sm:grid-cols-12 gap-4 h-145"
          >
            {/* Big Image Column */}

            <div className="group relative sm:col-span-7 h-full overflow-hidden rounded-3xl shadow-sm">
              <Image
                src={bentoImages[0].src}
                alt={bentoImages[0].alt}
                fill
                sizes="(min-width: 1024px) 380px, 100vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                priority
              />
              <HeroSlider />

              {/* Floating Badge */}
              <div className="absolute bottom-5 left-5 right-5 sm:right-auto bg-white/90 backdrop-blur-md p-3.5 rounded-card flex items-center gap-3 border border-white/40 shadow-lg">
                <div className="w-9 h-9 rounded-full bg-accent text-white flex items-center justify-center shrink-0">
                  <Star className="w-4 h-4 fill-white" />
                </div>
                <div>
                  <p className="font-bold text-sm text-text-primary">
                    10+ Years
                  </p>
                  <p className="text-xs text-text-secondary">
                    Designing Beautiful Homes
                  </p>
                </div>
              </div>
            </div>

            {/* 3 Small Images Vertical Column */}
            <div className="grid sm:col-span-5 grid-rows-3 gap-4 h-full">
              {bentoImages.slice(1, 4).map((img, i) => (
                <div
                  key={img.src}
                  className="group relative h-full w-full overflow-hidden rounded-[20px] shadow-sm"
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    sizes="(min-width: 1024px) 220px, 50vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
