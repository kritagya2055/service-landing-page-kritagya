"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
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

type ServiceCard = {
  name: string;
  description: string;
  Icon: React.FC<{ size?: number; className?: string }>;
};

const SERVICES: ServiceCard[] = [
  {
    name: "Social Media Marketing",
    description: "Grow your brand presence across all platforms.",
    Icon: SocialMediaIcon,
  },
  {
    name: "Meta Ads",
    description: "Run profitable Facebook and Instagram ad campaigns.",
    Icon: MetaAdsIcon,
  },
  {
    name: "SEO",
    description: "Rank higher on Google and get free organic traffic.",
    Icon: SeoIcon,
  },
  {
    name: "Email Marketing",
    description: "Build and nurture your email list automatically.",
    Icon: EmailIcon,
  },
  {
    name: "Landing Page Design",
    description: "Convert visitors into leads with high converting pages.",
    Icon: LandingPageIcon,
  },
  {
    name: "Content Creation",
    description: "Create engaging content that attracts your ideal clients.",
    Icon: ContentIcon,
  },
  {
    name: "Google Ads",
    description: "Get instant visibility with targeted Google ad campaigns.",
    Icon: GoogleAdsIcon,
  },
  {
    name: "Website Design",
    description: "Build a professional website that works for your business.",
    Icon: WebsiteIcon,
  },
];

export default function Services() {
  return (
    <section className="relative z-10 w-full bg-background py-28 px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeading>What I Can Do For Your Business</SectionHeading>
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((service, i) => {
            const { Icon } = service;
            return (
              <motion.div
                key={service.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                className="group rounded-2xl border border-white/10 bg-[#0d0d0d] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-silver/50 hover:shadow-[0_0_32px_rgba(192,192,192,0.18),0_0_64px_rgba(192,192,192,0.08)]"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-silver transition-colors duration-300 group-hover:border-silver/40 group-hover:text-white">
                  <Icon size={22} />
                </div>
                <h3 className="mt-6 text-lg font-bold text-white tracking-tight">
                  {service.name}
                </h3>
                <p className="mt-2 text-sm text-silver leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
