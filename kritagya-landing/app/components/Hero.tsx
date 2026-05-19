"use client";

import Image from "next/image";
import { motion } from "framer-motion";

type Service = {
  name: string;
  description: string;
};

const SERVICES: Service[] = [
  {
    name: "Social Media Marketing",
    description: "Grow your brand on Facebook, Instagram and TikTok",
  },
  {
    name: "Google Ads",
    description: "Get instant traffic with targeted Google campaigns",
  },
  {
    name: "SEO",
    description: "Rank higher on Google and get free organic traffic",
  },
  {
    name: "Landing Page Design",
    description: "Convert visitors into leads with high converting pages",
  },
  {
    name: "Meta Ads",
    description: "Run profitable Facebook and Instagram ad campaigns",
  },
  {
    name: "Website Design",
    description: "Build a professional website that works for your business",
  },
  {
    name: "Content Creation",
    description: "Create engaging content that attracts ideal clients",
  },
  {
    name: "Email Marketing",
    description: "Build and nurture your email list automatically",
  },
];

// Quadrant layout — 2 top-left, 2 top-right, 2 bottom-left, 2 bottom-right.
// Kept off the horizontal centerline so badges never cover the headline.
type BadgeLayout = {
  position: React.CSSProperties;
  duration: number; // float speed in seconds
  delay: number; // animation delay
  tooltipSide: "right" | "left" | "bottom";
};

const BADGE_LAYOUT: BadgeLayout[] = [
  // Social Media Marketing — top left (upper)
  { position: { top: "12%", left: "4%" }, duration: 5.5, delay: 0, tooltipSide: "right" },
  // Google Ads — top right (upper)
  { position: { top: "10%", right: "5%" }, duration: 6.2, delay: 0.8, tooltipSide: "left" },
  // SEO — top left (lower)
  { position: { top: "30%", left: "7%" }, duration: 4.8, delay: 1.4, tooltipSide: "right" },
  // Landing Page Design — top right (lower)
  { position: { top: "28%", right: "8%" }, duration: 5.9, delay: 0.4, tooltipSide: "left" },
  // Meta Ads — bottom left (upper)
  { position: { bottom: "28%", left: "5%" }, duration: 6.5, delay: 1.2, tooltipSide: "right" },
  // Website Design — bottom right (upper)
  { position: { bottom: "30%", right: "6%" }, duration: 5.2, delay: 0.2, tooltipSide: "left" },
  // Content Creation — bottom left (lower)
  { position: { bottom: "12%", left: "8%" }, duration: 4.6, delay: 1.6, tooltipSide: "right" },
  // Email Marketing — bottom right (lower)
  { position: { bottom: "10%", right: "7%" }, duration: 5.8, delay: 1.0, tooltipSide: "left" },
];

function scrollToForm() {
  const el = document.getElementById("form");
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
}

function Badge({
  service,
  layout,
  index,
}: {
  service: Service;
  layout?: BadgeLayout;
  index: number;
}) {
  const tooltipPositionClass =
    layout?.tooltipSide === "right"
      ? "left-full ml-3 top-1/2 -translate-y-1/2"
      : layout?.tooltipSide === "left"
      ? "right-full mr-3 top-1/2 -translate-y-1/2"
      : "top-full mt-3 left-1/2 -translate-x-1/2";

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.85 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1.2 + index * 0.08, duration: 0.5 }}
      className="group relative"
      style={{
        animation: layout
          ? `badge-float ${layout.duration}s ease-in-out ${layout.delay}s infinite, badge-pulse ${
              layout.duration * 1.4
            }s ease-in-out ${layout.delay}s infinite`
          : undefined,
      }}
    >
      <div className="cursor-default rounded-full border border-white/20 bg-black/40 px-4 py-2 text-xs lg:text-sm font-medium text-white backdrop-blur-md transition-shadow duration-300 group-hover:border-white/40 group-hover:shadow-[0_0_24px_rgba(192,192,192,0.45),0_0_48px_rgba(192,192,192,0.2)]">
        {service.name}
      </div>

      {/* Tooltip */}
      <div
        role="tooltip"
        className={`pointer-events-none absolute z-30 w-56 rounded-lg border border-white/25 bg-black/70 px-3 py-2 text-xs text-white opacity-0 backdrop-blur-md transition-opacity duration-200 group-hover:opacity-100 ${tooltipPositionClass}`}
        style={{ boxShadow: "0 0 20px rgba(192,192,192,0.25)" }}
      >
        {service.description}
      </div>
    </motion.div>
  );
}

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen overflow-hidden flex flex-col items-center justify-center text-center px-6">
      {/* Background video */}
      <video
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

      {/* Floating glassmorphism badges — desktop only */}
      <div className="absolute inset-0 hidden md:block z-10">
        {SERVICES.map((service, i) => (
          <div key={service.name} className="absolute" style={BADGE_LAYOUT[i].position}>
            <Badge service={service} layout={BADGE_LAYOUT[i]} index={i} />
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-20 flex flex-col items-center max-w-4xl">
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

        {/* Mobile badge grid — 2 cols × 4 rows */}
        <div className="mt-8 grid grid-cols-2 gap-3 w-full max-w-md md:hidden">
          {SERVICES.map((service, i) => (
            <Badge key={service.name} service={service} index={i} />
          ))}
        </div>

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
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 animate-bounce-down">
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
