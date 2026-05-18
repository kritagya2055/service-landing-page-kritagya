"use client";

import { motion } from "framer-motion";

export default function PageLoadFade({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.9, ease: "easeOut" }}
      className="flex flex-col flex-1"
    >
      {children}
    </motion.div>
  );
}
