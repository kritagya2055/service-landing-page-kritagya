"use client";

import { motion } from "framer-motion";

const HEADLINE = "Don't Worry — I Am Here With You";

const PARAGRAPH =
  "I have helped Nepal businesses generate consistent leads and sales through smart digital marketing. In this free call, I will personally diagnose your business and hand you a clear roadmap to grow — completely FREE.";

export default function Bridge() {
  // Reveal each character on its own, then animate the accent line + paragraph.
  const chars = Array.from(HEADLINE);
  const typingDuration = chars.length * 0.04 + 0.2; // total seconds before accent

  return (
    <section className="relative z-10 w-full bg-background py-28 px-6">
      <div className="mx-auto max-w-3xl text-center">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          aria-label={HEADLINE}
          className="inline-flex flex-wrap justify-center text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.04 } },
          }}
        >
          {chars.map((c, i) => (
            <motion.span
              key={i}
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1 },
              }}
              className={c === " " ? "inline-block w-[0.3em]" : undefined}
              aria-hidden
            >
              {c}
            </motion.span>
          ))}
          <span className="typing-caret" aria-hidden />
        </motion.h2>

        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          whileInView={{ scaleX: 1, opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{
            duration: 0.7,
            delay: typingDuration,
            ease: "easeOut",
          }}
          className="mx-auto mt-8 h-px w-32 origin-left bg-gradient-to-r from-transparent via-silver to-transparent"
          style={{ boxShadow: "0 0 12px rgba(192,192,192,0.5)" }}
        />

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{
            duration: 0.8,
            delay: typingDuration + 0.3,
            ease: "easeOut",
          }}
          className="mx-auto mt-8 max-w-2xl text-base sm:text-lg text-zinc-300 leading-relaxed"
        >
          {PARAGRAPH}
        </motion.p>
      </div>
    </section>
  );
}
