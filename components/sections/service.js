"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

const featured = {
  title: "Living Room Design",
  description:
    "Elegant living spaces crafted for comfort, entertaining, and everyday family life with timeless materials and thoughtful layouts.",
  image:
    "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1200&auto=format&fit=crop",
};

const services = [
  {
    title: "Bedroom Interiors",
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Modular Kitchen",
    image:
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Bathroom Design",
    image:
      "https://images.unsplash.com/photo-1620626011761-996317b8d101?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Wardrobes",
    image:
      "https://images.unsplash.com/photo-1484101403633-562f891dc89a?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Lighting & Ceiling",
    image:
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Complete Home",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1200&auto=format&fit=crop",
  },
];

export default function Services() {
  return (
    <section id="service" className="bg-[#faf7f3] py-32">
      <div className="container-max">

        <div className="mx-auto max-w-3xl text-center">

          <span className="text-sm font-semibold uppercase tracking-[0.3em] text-accent">
            Our Services
          </span>

          <h2 className="mt-5 text-5xl">
            Beautiful Interiors,
            <br />
            Designed Around Your Lifestyle.
          </h2>

          <p className="mx-auto mt-6 max-w-2xl">
            From one room to complete home transformations,
            we design spaces that are elegant, functional,
            and built around the way you live.
          </p>

        </div>

        <div className="mt-20 overflow-hidden rounded-4xl bg-white shadow-sm">

          <div className="grid lg:grid-cols-2">

            <div className="relative min-h-130">

              <Image
                src={featured.image}
                fill
                className="object-cover"
                alt={featured.title}
              />

            </div>

            <div className="flex flex-col justify-center p-16">

              <span className="text-sm uppercase tracking-[0.25em] text-accent">
                Featured
              </span>

              <h3 className="mt-5 text-5xl">
                {featured.title}
              </h3>

              <p className="mt-8 max-w-lg leading-8">
                {featured.description}
              </p>

              <button className="mt-10 flex items-center gap-2 text-accent font-medium">
                Explore Service

                <ArrowUpRight size={18} />

              </button>

            </div>

          </div>

        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">

          {services.map((service) => (

            <article
              key={service.title}
              className="group overflow-hidden rounded-3xl bg-white shadow-sm transition duration-500 hover:-translate-y-2 hover:shadow-xl"
            >

              <div className="relative h-60 overflow-hidden">

                <Image
                  src={service.image}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-110"
                  alt={service.title}
                />

              </div>

              <div className="flex items-center justify-between p-6">

                <h3 className="text-2xl">
                  {service.title}
                </h3>

                <ArrowUpRight
                  className="transition duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 text-accent"
                />

              </div>

            </article>

          ))}

        </div>

      </div>
    </section>
  );
}