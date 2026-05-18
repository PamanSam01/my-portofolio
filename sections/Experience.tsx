"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/SectionHeading";
import { timeline } from "@/lib/data";

import { useLanguage } from "@/lib/i18n/LanguageContext";

export function Experience() {
  const { t, lang } = useLanguage();

  return (
    <section id="timeline" className="relative z-10 px-5 py-16 md:py-28 text-white clip-slash sm:px-8 lg:px-14 bg-blood/85 backdrop-blur-md">
      <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-transparent to-transparent pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(115deg,transparent_0_42%,rgba(5,5,5,.58)_42%_55%,transparent_55%)] pointer-events-none" />
      <div className="relative mx-auto max-w-7xl">
        <SectionHeading kicker={t('timeline.kicker')} title={t('timeline.title')} />
        <div className="relative mt-16">
          <div className="absolute bottom-0 left-4 top-0 w-1 bg-bone md:left-1/2" />
          {timeline.map((item, index) => (
            <motion.article
              key={item.year}
              initial={{ opacity: 0, y: 60, x: index % 2 ? 50 : -50 }}
              whileInView={{ opacity: 1, y: 0, x: 0 }}
              viewport={{ once: true, margin: "-16%" }}
              transition={{ duration: 0.65, delay: index * 0.08 }}
              className={`relative mb-12 grid gap-5 md:grid-cols-2 ${index % 2 ? "" : "md:text-right"}`}
            >
              <div className={index % 2 ? "pl-8 md:pl-0 md:col-start-2" : "pl-8 md:pl-0"}>
                <div className="manga-border bg-ink p-7">
                  <p className="font-display text-5xl text-blood">{item.year}</p>
                  <h3 className="mt-2 font-display text-5xl uppercase leading-none">{item.title[lang as keyof typeof item.title]}</h3>
                  <p className="mt-4 text-lg leading-8 text-bone/76">{item.body[lang as keyof typeof item.body]}</p>
                </div>
              </div>
              <div className="absolute left-1.5 top-8 h-6 w-6 rotate-45 border-4 border-ink bg-bone md:left-[calc(50%-.7rem)]" />
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
