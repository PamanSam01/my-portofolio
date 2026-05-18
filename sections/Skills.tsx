"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/SectionHeading";
import { skills } from "@/lib/data";

import { useLanguage } from "@/lib/i18n/LanguageContext";

export function Skills() {
  const { t, lang } = useLanguage();

  return (
    <section id="skills" className="relative z-10 overflow-hidden px-5 py-16 md:py-28 text-ink clip-slash sm:px-8 lg:px-14 bg-bone/85 backdrop-blur-md">
      <div className="absolute inset-0 bg-gradient-to-t from-transparent to-bone/80 pointer-events-none" />
      <div className="absolute inset-0 opacity-20 halftone" />
      <div className="relative mx-auto max-w-7xl">
        <SectionHeading kicker={t('skills.kicker')} title={t('skills.title')} />
        <div className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {skills.map((skill, index) => (
            <motion.article
              key={skill.title}
              initial={{ opacity: 0, y: 50, rotate: index % 2 ? 2 : -2 }}
              whileInView={{ opacity: 1, y: 0, rotate: index % 2 ? -1 : 1 }}
              whileHover={{ y: -12, rotate: 0, scale: 1.02 }}
              viewport={{ once: true, margin: "-15%" }}
              transition={{ duration: 0.55, delay: index * 0.05 }}
              className="group relative min-h-[23rem] overflow-hidden border-2 border-ink bg-ink p-5 text-bone shadow-redline"
            >
              <div className="absolute inset-x-0 top-0 h-2 origin-left bg-blood transition-transform duration-300 group-hover:scale-x-150" />
              <skill.icon className="mb-8 h-10 w-10 text-blood" />
              <h3 className="font-display text-5xl uppercase leading-none">{skill.title}</h3>
              <div className="mt-8 h-4 border border-bone/40 p-0.5">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.value}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.15 }}
                  className="h-full bg-blood"
                />
              </div>
              <p className="mt-3 font-display text-3xl text-blood">{skill.value}%</p>
              <div className="absolute bottom-5 left-5 right-5 flex flex-wrap gap-2">
                {skill.tags[lang as keyof typeof skill.tags].map((tag: string) => (
                  <span key={tag} className="border border-bone/25 px-2 py-1 text-xs uppercase tracking-[0.16em] text-bone/70">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
