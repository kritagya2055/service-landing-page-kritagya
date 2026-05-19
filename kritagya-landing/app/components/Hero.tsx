"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  ContentIcon,
  EmailIcon,
  GoogleAdsIcon,
  LandingPageIcon,
  MetaAdsIcon,
  SeoIcon,
  SocialMediaIcon,
  WebsiteIcon,
} from "./ServiceIcons";

type Service = {
  name: string;
  description: string;
  Icon: React.FC<{ size?: number; className?: string }>;
};

const LEFT_SERVICES: Service[] = [
  {
    name: "Social Media Marketing",
    description: "Grow your brand on Facebook, Instagram and TikTok",
    Icon: SocialMediaIcon,
  },
  {
    name: "SEO",
    description: "Rank higher on Google and get free organic traffic",
    Icon: SeoIcon,
  },
  {
    name: "Meta Ads",
    description: "Run profitable Facebook and Instagram ad campaigns",
    Icon: MetaAdsIcon,
  },
  {
    name: "Content Creation",
    description: "Create engaging content that attracts your ideal clients",
    Icon: ContentIcon,
  },
];

const RIGHT_SERVICES: Service[] = [
  {
    name: "Google Ads",
    description: "Get instant traffic with targeted Google campaigns",
    Icon: GoogleAdsIcon,
  },
  {
    name: "Landing Page Design",
    description: "Convert visitors into leads with high converting pages",
    Icon: LandingPageIcon,
  },
  {
    name: "Website Design",
    description: "Build a professional website that works for your business",
    Icon: WebsiteIcon,
  },
  {
    name: "Email Marketing",
    description: "Build and nurture your email list automatically",
    Icon: EmailIcon,
  },
];

const ALL_SERVICES: Service[] = [
  LEFT_SERVICES[0],
  RIGHT_SERVICES[0],
  LEFT_SERVICES[1],
  RIGHT_SERVICES[1],
  LEFT_SERVICES[2],
  RIGHT_SERVICES[2],
  LEFT_SERVICES[3],
  RIGHT_SERVICES[3],
];

function scrollToForm() {
  const el = document.getElementById("form");
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
}

// Each badge sits at a fixed anchor on its side and orbits around it.
// `delay` shifts the badge's position along the orbit so the four badges
// on each side never collide.
type OrbitConfig = {
  side: "left" | "right";
  anchor: React.CSSProperties; // position of orbit center on screen
  delay: number; // negative seconds — start partway through the orbit
};

const ORBIT_DURATION_S = 28;

const LEFT_ORBITS: OrbitConfig[] = [
  { side: "left", anchor: { top: "18%", left: "9%" }, delay: 0 },
  { side: "left", anchor: { top: "40%", left: "11%" }, delay: -7 },
  { side: "left", anchor: { top: "60%", left: "11%" }, delay: -14 },
  { side: "left", anchor: { top: "80%", left: "9%" }, delay: -21 },
];

const RIGHT_ORBITS: OrbitConfig[] = [
  { side: "right", anchor: { top: "18%", right: "9%" }, delay: -3 },
  { side: "right", anchor: { top: "40%", right: "11%" }, delay: -10 },
  { side: "right", anchor: { top: "60%", right: "11%" }, delay: -17 },
  { side: "right", anchor: { top: "80%", right: "9%" }, delay: -24 },
];

function OrbitingBadge({
  service,
  orbit,
  index,
}: {
  service: Service;
  orbit: OrbitConfig;
  index: number;
}) {
  // Tooltip aligns toward screen center so it never clips the viewport edge.
  const tooltipAlignClass =
    orbit.side === "left" ? "left-0" : "right-0";

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.85 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1.0 + index * 0.08, duration: 0.6 }}
      className="absolute"
      style={orbit.anchor}
    >
      <div
        className="orbit-host group relative"
        style={{
          animation: `orbit-${orbit.side} ${ORBIT_DURATION_S}s linear ${orbit.delay}s infinite`,
        }}
      >
        <BadgeCard service={service} />

        {/* Tooltip */}
        <div
          role="tooltip"
          className={`pointer-events-none absolute bottom-full mb-3 w-64 rounded-xl border border-white/25 bg-black/75 p-4 text-left opacity-0 backdrop-blur-md transition-opacity duration-300 group-hover:opacity-100 ${tooltipAlignClass}`}
          style={{ boxShadow: "0 0 28px rgba(192,192,192,0.3)" }}
        >
          <p className="text-sm font-bold text-white">{service.name}</p>
          <p className="mt-1 text-xs text-silver leading-relaxed">
            {service.description}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

function BadgeCard({ service }: { service: Service }) {
  const { Icon } = service;
  return (
    <div
      className="flex w-[160px] cursor-default flex-col items-center gap-2 rounded-2xl border border-white/20 bg-black/50 px-4 py-3 text-center backdrop-blur-md transition-all duration-300 hover:border-white/50 hover:shadow-[0_0_28px_rgba(192,192,192,0.45),0_0_56px_rgba(192,192,192,0.18)]"
      style={{ boxShadow: "0 0 14px rgba(192,192,192,0.18)" }}
    >
      <Icon size={22} className="text-silver" />
      <div className="h-px w-8 bg-gradient-to-r from-transparent via-silver to-transparent" />
      <p className="text-xs font-bold text-white leading-tight">
        {service.name}
      </p>
    </div>
  );
}

function StaticBadgeCard({ service }: { service: Service }) {
  // Mobile grid version — no orbit/tooltip; shows description inline.
  const { Icon } = service;
  return (
    <div
      className="flex flex-col items-center gap-2 rounded-2xl border border-white/20 bg-black/50 px-3 py-4 text-center backdrop-blur-md"
      style={{ boxShadow: "0 0 14px rgba(192,192,192,0.15)" }}
    >
      <Icon size={22} className="text-silver" />
      <div className="h-px w-8 bg-gradient-to-r from-transparent via-silver to-transparent" />
      <p className="text-[11px] font-bold text-white leading-tight">
        {service.name}
      </p>
    </div>
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
      <div className="absolute inset-0 bg-black/70" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-black" />

      {/* Orbital badges — desktop only */}
      <div className="absolute inset-0 hidden lg:block z-10 pointer-events-none">
        {LEFT_SERVICES.map((service, i) => (
          <div key={service.name} className="pointer-events-auto">
            <OrbitingBadge service={service} orbit={LEFT_ORBITS[i]} index={i} />
          </div>
        ))}
        {RIGHT_SERVICES.map((service, i) => (
          <div key={service.name} className="pointer-events-auto">
            <OrbitingBadge
              service={service}
              orbit={RIGHT_ORBITS[i]}
              index={i + 4}
            />
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

        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 1.5 }}
          onClick={scrollToForm}
          className="mt-10 silver-gradient-bg silver-glow-strong rounded-full px-8 sm:px-10 py-4 text-base sm:text-lg font-bold text-black transition-transform hover:scale-[1.03] active:scale-[0.98]"
        >
          Book Your FREE Call Now
        </motion.button>

        {/* Mobile badges grid — shown below the CTA */}
        <div className="mt-10 grid grid-cols-2 gap-3 w-full max-w-md lg:hidden">
          {ALL_SERVICES.map((service) => (
            <StaticBadgeCard key={service.name} service={service} />
          ))}
        </div>
      </div>

      {/* Bouncing down arrow */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 animate-bounce-down hidden lg:block">
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
