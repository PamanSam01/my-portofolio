"use client";

import { motion } from "framer-motion";
import { socials } from "@/lib/data";

import { useLanguage } from "@/lib/i18n/LanguageContext";

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="relative z-10 overflow-hidden bg-transparent px-5 py-32 text-bone sm:px-8 lg:px-14">
      {/* Cinematic Ambient Fade to black at the very bottom */}
      <div className="absolute inset-0 bg-gradient-to-b from-ink/90 via-ink/95 to-[#050505] pointer-events-none" />
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-blood/40 to-transparent" />
      
      <div className="absolute inset-y-0 left-0 w-[200%] animate-marquee whitespace-nowrap font-display text-[12vw] uppercase leading-none text-bone/5 opacity-50 mix-blend-overlay">
        Ferdy A // {t('footer.role')} // END_OF_TRANSMISSION //&nbsp;
      </div>
      
      <div className="relative mx-auto flex max-w-7xl flex-col items-center gap-16 text-center">
        
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col items-center"
        >
          <span className="mb-4 text-xs tracking-[0.4em] text-blood uppercase">{t('footer.shutdown')}</span>
          <h2 className="font-display text-5xl sm:text-7xl lg:text-8xl uppercase leading-none tracking-tight text-white shadow-[0_0_40px_rgba(255,255,255,0.1)]">
            {t('footer.nextLayerPrefix')} <br />
            <span className="text-blood mix-blend-screen">{t('footer.nextLayerHighlight')}</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 1 }}
          viewport={{ once: true }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          {socials.map(({ label, href, icon: Icon }) => (
            <a 
              key={label} 
              href={href} 
              className="group relative grid h-14 w-14 place-items-center border border-bone/20 bg-ink/50 text-bone/60 transition-all hover:-translate-y-1 hover:border-blood hover:text-white" 
              aria-label={label}
            >
              <div className="absolute inset-0 bg-blood opacity-0 transition-opacity group-hover:opacity-20 blur-md" />
              <Icon className="relative z-10 h-5 w-5" />
            </a>
          ))}
        </motion.div>

        <div className="mt-20 flex w-full items-center justify-between border-t border-bone/10 pt-8 font-mono text-[10px] sm:text-xs uppercase tracking-widest text-bone/40">
          <p>© {new Date().getFullYear()} FERDY A. SYSTEM_OFLINE.</p>
          <div className="flex gap-4">
            <span className="animate-pulse text-blood">REC</span>
            <span>00:00:00</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
