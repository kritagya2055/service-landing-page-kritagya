"use client";

import { motion } from "framer-motion";

const HEADLINE = "Don't Worry — I Am Here With You";

const PARAGRAPH =
  "I have helped Nepal businesses generate consistent leads and sales through smart digital marketing. In this free call, I will personally diagnose your business and hand you a clear roadmap to grow — completely FREE.";

export default function Bridge() {
  // Split by word so words never break mid-character. Animate each char inside.
  const words = HEADLINE.split(" ");

  // Approximate typing duration so the line + paragraph come in after.
  const totalChars = HEADLINE.length;
  const typingDuration = totalChars * 0.04 + 0.2;

  return (
    <section className="relative z-10 w-full bg-background py-28 px-6">
      <div className="mx-auto max-w-3xl text-center">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          aria-label={HEADLINE}
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.04 } },
          }}
        >
          {words.map((word, wi) => (
            <span
              key={`${word}-${wi}`}
              className="inline-block whitespace-nowrap mr-[0.25em] last:mr-0"
            >
              {Array.from(word).map((c, ci) => (
                <motion.span
                  key={ci}
                  variants={{
                    hidden: { opacity: 0 },
                    visible: { opacity: 1 },
                  }}
                  aria-hidden
                >
                  {c}
                </motion.span>
              ))}
            </span>
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
