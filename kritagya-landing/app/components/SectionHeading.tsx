"use client";

import { motion } from "framer-motion";

export default function SectionHeading({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.h2
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className={`text-3xl sm:text-4xl md:text-5xl font-bold text-white text-center tracking-tight ${className}`}
    >
      {children}
    </motion.h2>
  );
}
