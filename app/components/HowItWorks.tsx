"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

const STEPS = [
  {
    title: "Fill up the form below",
    description: "Tell me about you and your business in under a minute.",
  },
  {
    title: "Receive an email with your appointment link",
    description: "I'll send the booking link straight to your inbox.",
  },
  {
    title: "Complete the appointment booking form",
    description: "Pick a time that works for you and confirm your slot.",
  },
  {
    title: "Join your FREE 1:1 consultation call",
    description: "We jump on a call and dig into your business together.",
  },
  {
    title: "Get your customized digital marketing plan",
    description: "Walk away with an action plan you can implement immediately.",
  },
];

export default function HowItWorks() {
  return (
    <section className="relative z-10 w-full bg-background py-24 px-6">
      <div className="mx-auto max-w-4xl">
        <SectionHeading>How The Free Consultation Works</SectionHeading>

        <div className="relative mt-16 pl-16 sm:pl-20">
          {/* Vertical glowing silver line */}
          <div
            aria-hidden
            className="absolute left-6 sm:left-8 top-2 bottom-2 w-px bg-gradient-to-b from-silver via-silver/60 to-silver/10"
            style={{ boxShadow: "0 0 12px rgba(192,192,192,0.4)" }}
          />

          <ul className="flex flex-col gap-10">
            {STEPS.map((step, i) => (
              <motion.li
                key={step.title}
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                className="relative"
              >
                {/* Numbered silver circle */}
                <div
                  className="absolute -left-16 sm:-left-20 top-0 flex h-12 w-12 items-center justify-center rounded-full silver-gradient-bg text-black font-bold text-lg"
                  style={{
                    boxShadow: "0 0 20px rgba(192,192,192,0.5)",
                  }}
                >
                  {i + 1}
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white">
                  {step.title}
                </h3>
                <p className="mt-2 text-silver text-base leading-relaxed">
                  {step.description}
                </p>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
