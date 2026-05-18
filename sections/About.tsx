"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/SectionHeading";

import TextType from "@/components/TextType";

import { useLanguage } from "@/lib/i18n/LanguageContext";

export function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="relative z-10 px-5 py-16 md:py-28 sm:px-8 lg:px-14 cinematic-bg">
      <div className="diagonal-band top-10 opacity-90" />
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.88fr_1.12fr] lg:items-center">
        <SectionHeading kicker={t('about.kicker')} title={t('about.title')} />
        <motion.div
          initial={{ opacity: 0, x: 70, rotate: 3 }}
          whileInView={{ opacity: 1, x: 0, rotate: -1 }}
          viewport={{ once: true, margin: "-20%" }}
          transition={{ duration: 0.75, ease: [0.83, 0, 0.17, 1] }}
          className="clip-hard border-2 border-bone bg-bone p-2 text-ink shadow-redline"
        >
          <div className="clip-hard bg-ink p-8 text-bone md:p-12">
            <div className="mb-8 relative overflow-hidden bg-ink border-2 border-bone/20 group">
              <img 
                src="/banner.jpg" 
                alt={t('about.bannerAlt')} 
                className="block w-full h-auto transition-transform duration-700 group-hover:scale-105" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/20 to-transparent pointer-events-none" />
              <div className="absolute inset-0 halftone opacity-40 mix-blend-overlay pointer-events-none" />
            </div>
            <div className="flex min-h-[300px] flex-col gap-6 md:min-h-[280px]">
              <TextType 
                as="p"
                text={t('about.p1')}
                className="max-w-3xl text-lg leading-relaxed text-bone/90 md:text-xl md:leading-9"
                loop={false}
                typingSpeed={10}
                startOnVisible={true}
                cursorCharacter="█"
                cursorClassName="text-blood animate-pulse"
              />
            </div>
            <div className="mt-10 flex flex-wrap gap-2.5 md:gap-3">
              {t('about.tags').map((tag: string) => (
                <span key={tag} className="-skew-x-12 bg-blood px-3 py-1.5 font-display text-sm uppercase tracking-wider text-white md:px-4 md:py-2 md:text-base">
                  <span className="inline-block skew-x-12">{tag}</span>
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
