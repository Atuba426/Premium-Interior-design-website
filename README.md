# Interio Design Studio

A premium, production-ready website for a Mumbai-based interior design agency, built with Next.js 15 (App Router), JavaScript, Tailwind CSS v4, Framer Motion, and Lucide React.

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Stack

- **Next.js 15** — App Router
- **JavaScript** — no TypeScript
- **Tailwind CSS v4** — design tokens defined in `app/globals.css`
- **Framer Motion** — scroll reveals, stagger, hover, floating images
- **Lucide React** — icon set

## Structure

```
app/                Root layout, home page, global styles
components/
  layout/           Navbar, Footer
  ui/                Reusable primitives (Button, Badge, AnimatedCounter, FAQAccordion, BeforeAfterSlider, SectionHeading)
  sections/          Page sections (Hero, Pricing, FAQ, etc.)
  cards/             Card components used inside sections
  shared/            Layout helpers (Container)
data/                Realistic content: projects, testimonials, FAQs, pricing, services
lib/                 Utilities and shared constants
```

## Notes

- Images are sourced from Unsplash via `next/image` remote patterns configured in `next.config.mjs`. Swap in your own photography before launch.
- Update contact details (`lib/utils.js` → `STUDIO`) with real phone, WhatsApp, and email before deploying.
- The consultation form in the CTA links to `#`; wire it up to your booking flow or a form endpoint.
