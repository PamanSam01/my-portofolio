"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { stats } from "@/lib/data";



import { useLanguage } from "@/lib/i18n/LanguageContext";

export function Stats() {
  const { lang } = useLanguage();

  return (
    <section className="relative z-10 px-5 py-24 sm:px-8 lg:px-14">
      <div className="mx-auto grid max-w-7xl gap-4 grid-cols-2 md:grid-cols-4">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.top}
            initial={{ opacity: 0, y: 45, rotate: index % 2 ? 3 : -3 }}
            whileInView={{ opacity: 1, y: 0, rotate: 0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05, y: -5, boxShadow: "0 0 20px rgba(229,9,20,0.6)" }}
            transition={{ duration: 0.4, type: "spring", stiffness: 200 }}
            className="group border-2 border-bone bg-bone p-6 text-ink shadow-redline transition-colors hover:bg-bone/90 hover:border-blood"
          >
            <p className="glitch font-display text-7xl leading-none tracking-tight text-ink drop-shadow-[0_0_10px_rgba(229,9,20,0.5)] transition-colors group-hover:text-blood" data-text={stat.top}>
              {stat.top}
            </p>
            <p className="mt-2 font-display text-xl uppercase tracking-widest text-blood transition-colors group-hover:text-blood/80">{stat.bottom[lang as keyof typeof stat.bottom]}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
