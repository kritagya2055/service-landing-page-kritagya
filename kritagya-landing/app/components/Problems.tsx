"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

const PAIN_POINTS = [
  "Posting on Facebook and Instagram but getting no real inquiries.",
  "Boosting posts but seeing no actual sales.",
  "Confused about which marketing strategy to use.",
  "Getting random leads but not serious customers.",
  "Depending only on referrals and word of mouth.",
  "No idea how to run ads, create content or build a funnel.",
];

function XIcon() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#ef4444"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="shrink-0"
      aria-hidden
    >
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );
}

export default function Problems() {
  return (
    <section className="relative z-10 w-full bg-background py-28 px-6">
      <div className="mx-auto max-w-3xl">
        <SectionHeading>Does This Sound Like You?</SectionHeading>

        <div className="relative mt-16 pl-8 sm:pl-12">
          {/* Vertical silver line connecting items */}
          <div
            aria-hidden
            className="absolute left-0 top-2 bottom-2 w-px bg-gradient-to-b from-silver/10 via-silver/40 to-silver/10"
          />

          <ul className="flex flex-col">
            {PAIN_POINTS.map((point, i) => (
              <motion.li
                key={point}
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.6, delay: i * 0.08, ease: "easeOut" }}
                className={`flex items-center gap-5 sm:gap-6 py-6 sm:py-7 ${
                  i < PAIN_POINTS.length - 1
                    ? "border-b border-silver/15"
                    : ""
                }`}
              >
                <XIcon />
                <p className="text-lg sm:text-xl md:text-2xl font-semibold text-white tracking-tight leading-snug">
                  {point}
                </p>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
