"use client";

import { useRef, useState, useCallback } from "react";
import { motion } from "framer-motion";
import { MoveHorizontal } from "lucide-react";
import Image from "next/image";

export default function BeforeAfterSlider({ before, after, beforeLabel = "Before", afterLabel = "After" }) {
  const containerRef = useRef(null);
  const [position, setPosition] = useState(50);
  const dragging = useRef(false);

  const updatePosition = useCallback((clientX) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = Math.min(Math.max(clientX - rect.left, 0), rect.width);
    setPosition((x / rect.width) * 100);
  }, []);

  const handleMove = (e) => {
    if (!dragging.current) return;
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    updatePosition(clientX);
  };

  const startDrag = () => {
    dragging.current = true;
  };

  const stopDrag = () => {
    dragging.current = false;
  };

  return (
    <div
      ref={containerRef}
      className="relative h-95 w-full select-none overflow-hidden rounded-card card-shadow-lg sm:h-130"
      onMouseMove={handleMove}
      onMouseUp={stopDrag}
      onMouseLeave={stopDrag}
      onTouchMove={handleMove}
      onTouchEnd={stopDrag}
    >
      <div className="absolute inset-0">
        <Image src={after} alt={afterLabel} fill sizes="100vw" className="object-cover" />
        <span className="absolute bottom-5 right-5 rounded-full bg-white/90 px-3.5 py-1.5 text-[13px] font-semibold text-text-primary">
          {afterLabel}
        </span>
      </div>

      <div
        className="absolute inset-0 overflow-hidden"
        style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
      >
        <Image src={before} alt={beforeLabel} fill sizes="100vw" className="object-cover" />
        <span className="absolute bottom-5 left-5 rounded-full bg-white/90 px-3.5 py-1.5 text-[13px] font-semibold text-text-primary">
          {beforeLabel}
        </span>
      </div>

      <div
        className="absolute top-0 bottom-0 z-10 w-0.75 bg-white"
        style={{ left: `${position}%`, transform: "translateX(-50%)" }}
      >
        <motion.button
          onMouseDown={startDrag}
          onTouchStart={startDrag}
          whileTap={{ scale: 0.92 }}
          aria-label="Drag to compare before and after"
          className="absolute top-1/2 left-1/2 flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 cursor-grab items-center justify-center rounded-full bg-white text-text-primary card-shadow-lg active:cursor-grabbing"
        >
          <MoveHorizontal size={18} />
        </motion.button>
      </div>
    </div>
  );
}
