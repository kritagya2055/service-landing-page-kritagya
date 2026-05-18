"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const SERVICES = [
  "Social Media Marketing",
  "Meta Ads",
  "SEO",
  "Email Marketing",
  "Landing Page Design",
  "Content Creation",
  "Google Ads",
  "Website Design",
];

// Positions chosen to scatter badges around the hero on desktop.
// Badges are hidden on small screens for legibility.
const BADGE_POSITIONS = [
  { top: "18%", left: "6%" },
  { top: "26%", right: "8%" },
  { top: "45%", left: "3%" },
  { top: "52%", right: "5%" },
  { top: "70%", left: "8%" },
  { top: "72%", right: "10%" },
  { top: "34%", left: "14%" },
  { top: "60%", right: "16%" },
];

function scrollToForm() {
  const el = document.getElementById("form");
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
}

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen overflow-hidden flex flex-col items-center justify-center text-center px-6">
      {/* Background video */}
      <video
        // TODO: Replace /kritagya_video_animation.mp4 in /public if needed
        className="absolute inset-0 h-full w-full object-cover"
        src="/kritagya_video_animation.mp4"
        autoPlay
        muted
        loop
        playsInline
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/70" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-black" />

      {/* Floating service badges */}
      <div className="absolute inset-0 hidden md:block">
        {SERVICES.map((service, i) => (
          <motion.div
            key={service}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 + i * 0.1, duration: 0.6 }}
            className="absolute"
            style={BADGE_POSITIONS[i]}
          >
            <div
              className="animate-float rounded-full border border-silver/40 bg-card/70 px-4 py-2 text-xs lg:text-sm text-silver backdrop-blur-sm"
              style={{
                boxShadow: "0 0 16px rgba(192,192,192,0.25)",
                animationDelay: `${i * 0.4}s`,
              }}
            >
              {service}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center max-w-4xl">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="mb-8"
        >
          <Image
            src="/kritagya_logo.png"
            alt="Kritagya Bhandari logo"
            width={120}
            height={120}
            priority
            className="h-[120px] w-auto"
          />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4, ease: "easeOut" }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight text-white"
        >
          Struggling to Get Consistent
          <br className="hidden sm:block" /> Leads & Sales Online?
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.9, delay: 0.9 }}
          className="mt-6 text-lg sm:text-xl md:text-2xl font-semibold silver-gradient-text"
        >
          Let&apos;s Build Your Digital Marketing Plan — 100% FREE 1:1 Call
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.9, delay: 1.2 }}
          className="mt-6 max-w-2xl text-base sm:text-lg text-zinc-300 leading-relaxed"
        >
          This isn&apos;t a generic advice call. I&apos;ll personally study your
          business, identify your biggest marketing gaps, and deliver a
          customized action plan tailored specifically for your business — so
          you can implement it the same day.
        </motion.p>

        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 1.5 }}
          onClick={scrollToForm}
          className="mt-10 silver-gradient-bg silver-glow-strong rounded-full px-8 sm:px-10 py-4 text-base sm:text-lg font-bold text-black transition-transform hover:scale-[1.03] active:scale-[0.98]"
        >
          Book Your FREE Call Now
        </motion.button>
      </div>

      {/* Bouncing down arrow */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce-down">
        <svg
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#C0C0C0"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </div>
    </section>
  );
}
