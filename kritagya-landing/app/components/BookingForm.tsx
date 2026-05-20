"use client";

import { motion } from "framer-motion";
import FlodeskForm from "./FlodeskForm";

export default function BookingForm() {
  return (
    <section
      id="form"
      className="relative z-10 w-full bg-background py-24 px-6 scroll-mt-12"
    >
      <div className="mx-auto max-w-3xl text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7 }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight"
        >
          Book Your FREE Consultation Call
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-4 italic text-silver"
        >
          Limited spots available — only 3 seats remaining this month!
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mx-auto mt-10 max-w-[640px] rounded-2xl border border-border-soft bg-card p-2 sm:p-4 text-left"
          style={{ boxShadow: "0 0 32px rgba(192,192,192,0.08)" }}
        >
          <FlodeskForm />
        </motion.div>

        <p className="mt-4 text-xs text-zinc-400">
          No credit card required. 100% FREE.
        </p>
      </div>
    </section>
  );
}
