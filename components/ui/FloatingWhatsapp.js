"use client";

import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import { STUDIO } from "@/lib/utils";

export default function FloatingWhatsApp() {
  const message = encodeURIComponent(
    "Hi Interio Design Studio, I'd like to book a free consultation for my home."
  );
  const href = `https://wa.me/${STUDIO.whatsapp}?text=${message}`;

  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_8px_24px_rgba(0,0,0,0.35)]"
    >
      <motion.span
        className="absolute inset-0 rounded-full bg-[#25D366]"
        animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
        transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
      />
      <MessageCircle size={26} className="relative" fill="white" />
    </motion.a>
  );
}
