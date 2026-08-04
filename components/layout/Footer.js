"use client";

import { useState } from "react";
import { Instagram, Facebook, Linkedin, ArrowRight, MapPin, Phone, Mail } from "lucide-react";
import Container from "@/components/shared/Container";
import { STUDIO } from "@/lib/utils";

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "Projects", href: "#projects" },
  { label: "About", href: "#how-we-work" },
  { label: "Reviews", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

const serviceLinks = [
  { label: "Modular Kitchens", href: "#included" },
  { label: "Full Home Interiors", href: "#pricing" },
  { label: "Villa Design", href: "#explore" },
  { label: "3D Visualization", href: "#why-us" },
];

export default function Footer() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
    setEmail("");
  };

  return (
    <footer className="bg-[#111111] pt-20 text-[#F8F5F1]">
      <Container>
        <div className="grid grid-cols-1 gap-12 pb-16 sm:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col gap-5 sm:col-span-2 lg:col-span-1">
            <span className="font-[family-name:var(--font-heading)] text-[22px] font-semibold">
              Interio<span className="text-[#B68D40]">.</span>
            </span>
            <p className="max-w-xs text-[15px] leading-relaxed text-[#F8F5F1]/60">
              Warm, high-craft interiors for homes across Mumbai — designed
              around how you actually live.
            </p>
            <div className="flex items-center gap-3 pt-1">
              {[Instagram, Facebook, Linkedin].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label="Social link"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-[#F8F5F1]/70 transition-colors hover:border-[#B68D40] hover:text-[#B68D40]"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="mb-5 text-[14px] font-semibold uppercase tracking-[0.14em] text-[#F8F5F1]/50">
              Quick Links
            </h4>
            <ul className="flex flex-col gap-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-[15px] text-[#F8F5F1]/75 transition-colors hover:text-[#B68D40]"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-5 text-[14px] font-semibold uppercase tracking-[0.14em] text-[#F8F5F1]/50">
              Services
            </h4>
            <ul className="flex flex-col gap-3">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-[15px] text-[#F8F5F1]/75 transition-colors hover:text-[#B68D40]"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-5 text-[14px] font-semibold uppercase tracking-[0.14em] text-[#F8F5F1]/50">
              Stay Updated
            </h4>
            <p className="mb-4 text-[15px] text-[#F8F5F1]/60">
              Studio notes and finished projects, once a month.
            </p>
            <form onSubmit={handleSubmit} className="flex items-center gap-2">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email"
                className="w-full rounded-full border border-white/15 bg-white/5 px-4 py-2.5 text-[14px] text-[#F8F5F1] placeholder:text-[#F8F5F1]/40 outline-none focus:border-[#B68D40]"
              />
              <button
                type="submit"
                aria-label="Subscribe"
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#B68D40] text-white transition-colors hover:bg-[#A37A2F]"
              >
                <ArrowRight size={16} />
              </button>
            </form>
            {submitted && (
              <p className="mt-3 text-[13px] text-[#B68D40]">Thanks — you're on the list.</p>
            )}

            <div className="mt-6 flex flex-col gap-3 text-[14px] text-[#F8F5F1]/60">
              <span className="flex items-center gap-2">
                <MapPin size={14} className="shrink-0 text-[#B68D40]" /> {STUDIO.address}
              </span>
              <span className="flex items-center gap-2">
                <Phone size={14} className="shrink-0 text-[#B68D40]" /> {STUDIO.phone}
              </span>
              <span className="flex items-center gap-2">
                <Mail size={14} className="shrink-0 text-[#B68D40]" /> {STUDIO.email}
              </span>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/10 py-6 text-[13px] text-[#F8F5F1]/45 sm:flex-row">
          <span>© {new Date().getFullYear()} Interio Design Studio. All rights reserved.</span>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-[#F8F5F1]/80">Privacy Policy</a>
            <a href="#" className="hover:text-[#F8F5F1]/80">Terms of Service</a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
