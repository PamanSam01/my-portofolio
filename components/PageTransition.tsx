"use client";

import { motion } from "framer-motion";

export function PageTransition() {
  return (
    <motion.div
      initial={{ scaleX: 1 }}
      animate={{ scaleX: 0 }}
      transition={{ delay: 2.75, duration: 0.75, ease: [0.83, 0, 0.17, 1] }}
      className="fixed inset-0 z-[80] origin-right bg-bone"
    />
  );
}
