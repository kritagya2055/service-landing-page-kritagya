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
    <section className="relative z-10 w-full bg-background py-24 px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeading>Does This Sound Like You?</SectionHeading>
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {PAIN_POINTS.map((point, i) => (
            <motion.div
              key={point}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="flex items-start gap-4 rounded-xl border border-border-soft bg-card p-6 card-hover"
            >
              <XIcon />
              <p className="text-zinc-200 text-base leading-relaxed">{point}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
