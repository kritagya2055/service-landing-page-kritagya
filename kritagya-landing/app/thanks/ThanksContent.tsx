"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const STEPS = [
  "Check your email for the appointment link.",
  "Complete your booking form.",
  "Join the call and get your FREE plan.",
];

function WhatsAppIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M.057 24l1.687-6.163a11.867 11.867 0 0 1-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.81 11.81 0 0 1 8.413 3.488 11.82 11.82 0 0 1 3.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 0 1-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
    </svg>
  );
}

export default function ThanksContent() {
  return (
    <section className="relative z-10 w-full bg-background py-20 px-6 min-h-screen">
      <div className="mx-auto max-w-3xl flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.9 }}
        >
          <Image
            src="/kritagya_logo.png"
            alt="Kritagya Bhandari logo"
            width={100}
            height={100}
            priority
            className="h-[100px] w-auto"
          />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-8 text-4xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight"
        >
          Thank You! Your Spot Is Confirmed.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="mt-4 text-lg sm:text-xl silver-gradient-text font-semibold"
        >
          Here is what happens next.
        </motion.p>

        {/* Steps */}
        <ul className="mt-12 w-full max-w-xl flex flex-col gap-4">
          {STEPS.map((step, i) => (
            <motion.li
              key={step}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.8 + i * 0.15 }}
              className="flex items-center gap-4 rounded-xl border border-border-soft bg-card px-5 py-4 text-left card-hover"
            >
              <div
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full silver-gradient-bg text-black font-bold"
                style={{ boxShadow: "0 0 16px rgba(192,192,192,0.4)" }}
              >
                {i + 1}
              </div>
              <p className="text-zinc-200">{step}</p>
            </motion.li>
          ))}
        </ul>

        {/* Vimeo embed placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.4 }}
          className="mt-14 w-full max-w-2xl"
        >
          <div className="relative w-full overflow-hidden rounded-xl border border-border-soft bg-card aspect-video">
            {/* TODO: Replace src with your Vimeo embed URL when ready */}
            <iframe
              src=""
              title="Welcome video"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
              className="absolute inset-0 h-full w-full"
            />
            <div className="absolute inset-0 flex items-center justify-center text-silver text-sm pointer-events-none">
              Video coming soon
            </div>
          </div>
        </motion.div>

        {/* WhatsApp button placeholder */}
        <motion.a
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.6 }}
          // TODO: Replace href with your WhatsApp chat link (e.g. https://wa.me/<number>)
          href="#"
          className="mt-10 inline-flex items-center gap-3 silver-gradient-bg silver-glow rounded-full px-8 py-4 text-base font-bold text-black transition-transform hover:scale-[1.03] active:scale-[0.98]"
        >
          <WhatsAppIcon />
          Chat With Me on WhatsApp
        </motion.a>
      </div>
    </section>
  );
}
