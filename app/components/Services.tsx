"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

const SERVICES = [
  {
    icon: "📱",
    name: "Social Media Marketing",
    description: "Grow your brand presence across all platforms.",
  },
  {
    icon: "🎯",
    name: "Meta Ads",
    description: "Run profitable Facebook and Instagram ad campaigns.",
  },
  {
    icon: "🔍",
    name: "SEO",
    description: "Rank higher on Google and get free organic traffic.",
  },
  {
    icon: "📧",
    name: "Email Marketing",
    description: "Build and nurture your email list automatically.",
  },
  {
    icon: "🧲",
    name: "Landing Page Design",
    description: "Convert visitors into leads with high converting pages.",
  },
  {
    icon: "🎬",
    name: "Content Creation",
    description: "Create engaging content that attracts your ideal clients.",
  },
  {
    icon: "🔎",
    name: "Google Ads",
    description: "Get instant visibility with targeted Google ad campaigns.",
  },
  {
    icon: "💻",
    name: "Website Design",
    description: "Build a professional website that works for your business.",
  },
];

export default function Services() {
  return (
    <section className="relative z-10 w-full bg-background py-24 px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeading>What I Can Do For Your Business</SectionHeading>
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {SERVICES.map((service, i) => (
            <motion.div
              key={service.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="rounded-xl border border-border-soft bg-card p-6 card-hover"
            >
              <div className="text-3xl mb-4">{service.icon}</div>
              <h3 className="text-lg font-bold text-white">{service.name}</h3>
              <p className="mt-2 text-sm text-silver leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
