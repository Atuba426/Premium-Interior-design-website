"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function FAQAccordion({ faqs }) {
  const [open, setOpen] = useState(0);

  return (
    <div>

      {faqs.map((faq, index) => {

        const active = open === index;

        return (

          <div
            key={faq.question}
            className="border-b border-[rgba(0,0,0,.08)] last:border-none"
          >

            <button
              onClick={() => setOpen(active ? -1 : index)}
              className="group flex w-full items-center justify-between py-8 text-left"
            >

              <h3 className="font-heading text-[30px] leading-tight text-text-primary transition group-hover:text-accent">

                {faq.question}

              </h3>

              <motion.div
                animate={{
                  rotate: active ? 180 : 0,
                }}
                transition={{
                  duration: .35,
                }}
                className="text-accent"
              >

                <ChevronDown size={22} />

              </motion.div>

            </button>

            <AnimatePresence initial={false}>

              {active && (

                <motion.div
                  initial={{
                    opacity:0,
                    height:0
                  }}
                  animate={{
                    opacity:1,
                    height:"auto"
                  }}
                  exit={{
                    opacity:0,
                    height:0
                  }}
                  transition={{
                    duration:.35
                  }}
                  className="overflow-hidden"
                >

                  <p className="max-w-3xl pb-8 text-lg leading-9 text-text-secondary">

                    {faq.answer}

                  </p>

                </motion.div>

              )}

            </AnimatePresence>

          </div>

        );

      })}

    </div>
  );
}