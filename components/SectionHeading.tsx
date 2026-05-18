"use client";

import { motion } from "framer-motion";

type SectionHeadingProps = {
  kicker: string;
  title: string;
  align?: "left" | "center";
};

export function SectionHeading({ kicker, title, align = "left" }: SectionHeadingProps) {
  return (
    <div className={align === "center" ? "mx-auto max-w-4xl text-center" : "max-w-4xl"}>
      <motion.p
        initial={{ opacity: 0, x: -36 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-20%" }}
        className="mb-3 font-display text-2xl uppercase tracking-[0.28em] text-blood"
      >
        {kicker}
      </motion.p>
      <motion.h2
        initial={{ clipPath: "inset(0 100% 0 0)" }}
        whileInView={{ clipPath: "inset(0 0% 0 0)" }}
        viewport={{ once: true, margin: "-20%" }}
        transition={{ duration: 0.8, ease: [0.83, 0, 0.17, 1] }}
        className="glitch font-display text-6xl uppercase leading-[0.82] sm:text-8xl lg:text-9xl"
        data-text={title}
      >
        {title}
      </motion.h2>
    </div>
  );
}
