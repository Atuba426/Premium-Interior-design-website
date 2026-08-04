"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Button from "@/components/ui/Button";
import { NAV_LINKS } from "@/lib/utils";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (href) => {
    setOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-4 left-0 right-0 z-50 px-4"
    >
      <nav
        className={`mx-auto flex max-w-5xl items-center justify-between rounded-full px-4 py-2.5 transition-all duration-500 sm:px-6 ${
          scrolled
            ? "bg-white/90 backdrop-blur-xl border border-white/20 shadow-lg shadow-black/5"
            : "bg-transparent border border-transparent backdrop-blur-none shadow-none"
        }`}
      >
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick("#home");
          }}
          className="font-heading text-[19px] font-semibold tracking-tight text-text"
        >
          Interio<span className="text-amber-500">.</span>
        </a>

        <ul className="hidden items-center gap-1 lg:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="rounded-full px-4 py-2 text-[14.5px] font-medium text-text-primary/80 transition-colors hover:bg-black/5 hover:text-text-primary"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop Golden Button */}
        <div className="hidden lg:block">
          <Button
            href="#contact"
            className="px-5! py-2.5! text-[14.5px]! font-medium bg-[#de9b36] hover:bg-gray-950 text-stone-900 shadow-sm hover:text-white transition-all duration-300 rounded-full border-none"
          >
            Book Consultation
          </Button>
        </div>

        <button
          className="flex h-9 w-9 items-center justify-center rounded-full text-text-primary lg:hidden"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10, height: 0 }}
            animate={{ opacity: 1, y: 0, height: "auto" }}
            exit={{ opacity: 0, y: -10, height: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="mx-auto mt-2 max-w-5xl overflow-hidden rounded-3xl border border-white/20 bg-white/95 backdrop-blur-xl shadow-xl lg:hidden"
          >
            <ul className="flex flex-col gap-1 p-4">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(link.href);
                    }}
                    className="block rounded-xl px-4 py-3 text-[15px] font-medium text-text-primary hover:bg-stone-100"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li className="pt-2">
                <Button
                  href="#contact"
                  className="px-5! py-2.5! text-[14.5px]! font-medium bg-[#d4a359] hover:bg-[#c29247] text-stone-900 shadow-sm transition-all duration-300 rounded-full border-none"
                  onClick={() => setOpen(false)}
                >
                  Book Consultation
                </Button>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
