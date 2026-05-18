"use client";

import { useLayoutEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { Github, Mail } from "lucide-react";
import { ComicButton } from "@/components/ComicButton";
import dynamic from "next/dynamic";

const Lanyard = dynamic(() => import("@/components/Lanyard"), {
  ssr: false,
});

import { useLanguage } from "@/lib/i18n/LanguageContext";
import { CinematicPlayer } from "@/components/CinematicPlayer";

export function Hero() {
  const root = useRef<HTMLElement>(null);
  const { t } = useLanguage();

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap
        .timeline({ delay: 3.05 })
        .from(".hero-slice", { xPercent: -120, stagger: 0.08, duration: 0.72, ease: "power4.out" })
        .from(".hero-title span", { yPercent: 115, rotate: 4, stagger: 0.055, duration: 0.68, ease: "power4.out" }, "-=0.45")
        .from(".hero-copy", { opacity: 0, y: 28, duration: 0.45, stagger: 0.08 }, "-=0.2");
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={root}
      id="hero"
      className="relative z-10 flex min-h-[100svh] lg:min-h-screen items-center overflow-hidden px-5 pb-24 pt-28 sm:px-8 lg:px-14 cinematic-bg"
    >
      {/* Decorative Red Slash Bar */}
      <div className="hero-slice absolute left-[-10%] top-[12%] z-10 h-10 md:h-16 w-[110vw] md:w-[72vw] -rotate-6 bg-blood hidden sm:block" />
      
      {/* Interactive Cinematic Music Player Overlay */}
      <div className="hero-slice pointer-events-auto absolute bottom-[4vh] right-1/2 translate-x-1/2 md:translate-x-0 md:right-[-8%] md:bottom-[16%] z-[60] h-16 sm:h-20 md:h-24 w-[88vw] md:w-[58vw] rotate-0 md:rotate-[-10deg] overflow-hidden border-y-2 md:border-y-4 border-bone bg-ink shadow-redline">
        <CinematicPlayer />
      </div>

      <div className="absolute inset-y-0 right-0 hidden w-1/2 -skew-x-12 bg-bone/5 lg:block" />

      <div className="relative mx-auto flex flex-col lg:grid lg:grid-cols-[1.1fr_0.9fr] lg:items-center w-full max-w-[85rem] gap-6 sm:gap-10 text-center lg:text-left z-20">
        <div className="flex flex-col items-center lg:items-start w-full">
          <p className="hero-copy mb-4 sm:mb-5 inline-flex -rotate-2 bg-bone px-4 py-2 font-display text-lg sm:text-2xl uppercase tracking-[0.22em] text-ink shadow-redline mx-auto lg:mx-0">
            {t('hero.greeting')}
          </p>
          <h1 className="hero-title font-display text-[11vw] sm:text-[7rem] lg:text-[9.4rem] xl:text-[10.4rem] uppercase leading-[0.82] text-bone tracking-tighter w-full">
            {t('hero.words').map((word: string) => (
              <span key={word} className="block overflow-hidden">
                <span className="glitch inline-block" data-text={word}>
                  {word}
                </span>
              </span>
            ))}
          </h1>
          <div className="hero-copy mt-6 sm:mt-8 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4 w-full max-w-[280px] sm:max-w-none mx-auto lg:mx-0">
            <ComicButton href="#projects">{t('hero.btnExecute')}</ComicButton>
            <ComicButton href="#contact" variant="white">
              {t('hero.btnLink')}
            </ComicButton>
          </div>
        </div>
        
        {/* Interactive 3D Lanyard Card */}
        <div className="hero-copy relative h-[250px] w-[250px] sm:h-[400px] sm:w-[400px] md:h-[600px] md:w-[600px] lg:ml-16 xl:ml-24 z-50 flex items-center justify-center shrink-0 mx-auto transform scale-90 -translate-y-4 sm:scale-100 sm:translate-y-0">
          <Lanyard position={[0, 0, 11]} gravity={[0, -40, 0]} fov={23} transparent={true} />
        </div>
      </div>

      <div className="absolute bottom-6 left-0 flex w-[200%] animate-marquee whitespace-nowrap font-display text-5xl sm:text-7xl uppercase text-bone/10 pointer-events-none">
        <span>{t('hero.marquee')}</span>
        <span>{t('hero.marquee')}</span>
      </div>
    </section>
  );
}
