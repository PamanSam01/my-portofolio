"use client";

import { useState } from "react";
import type { CSSProperties } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, ChevronLeft, ChevronRight, Lock } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { projects } from "@/lib/data";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const { t, lang } = useLanguage();

  const categories = [
    { id: "All", labelKey: "projects.filterAll" },
    { id: "Web3", labelKey: "projects.filterWeb3" },
    { id: "AI", labelKey: "projects.filterAI" },
    { id: "SaaS", labelKey: "projects.filterSaaS" },
    { id: "Business", labelKey: "projects.filterBusiness" },
    { id: "Creative", labelKey: "projects.filterCreative" },
    { id: "Experimental", labelKey: "projects.filterExperimental" },
  ];

  const filteredProjects = projects.filter(
    (p) => (activeCategory === "All" || p.category === activeCategory) && !(p as any).locked
  );

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % filteredProjects.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + filteredProjects.length) % filteredProjects.length);
  };

  const setCategory = (cat: string) => {
    setDirection(1);
    setActiveCategory(cat);
    setCurrentIndex(0);
  };

  const project = filteredProjects[currentIndex];

  const variants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 40 : -40,
      opacity: 0,
      filter: "blur(8px)",
      scale: 0.97
    }),
    center: {
      x: 0,
      opacity: 1,
      filter: "blur(0px)",
      scale: 1
    },
    exit: (dir: number) => ({
      x: dir < 0 ? 40 : -40,
      opacity: 0,
      filter: "blur(8px)",
      scale: 0.97
    })
  };

  return (
    <section id="projects" className="relative z-10 overflow-hidden px-5 py-16 md:py-28 sm:px-8 lg:px-14 cinematic-bg">
      {/* Manga-Panel Tactical Wipe Transition */}
      <motion.div 
        initial={{ scaleY: 1 }}
        whileInView={{ scaleY: 0 }}
        viewport={{ once: true, margin: "0px 0px -200px 0px" }}
        transition={{ duration: 0.8, ease: [0.83, 0, 0.17, 1] }}
        className="absolute inset-0 z-[60] origin-top bg-blood"
      />
      <motion.div 
        initial={{ scaleY: 1 }}
        whileInView={{ scaleY: 0 }}
        viewport={{ once: true, margin: "0px 0px -200px 0px" }}
        transition={{ duration: 0.8, delay: 0.1, ease: [0.83, 0, 0.17, 1] }}
        className="absolute inset-0 z-[60] origin-top bg-white"
      />

      <div className="relative mx-auto max-w-7xl z-10">
        <SectionHeading kicker={t('projects.kicker')} title={t('projects.title')} />
        
        {/* Cyberpunk Filter System */}
        <div className="mt-12 flex flex-wrap items-center gap-3 border-b-2 border-bone/20 pb-6">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setCategory(cat.id)}
              className={`relative px-5 py-2 font-display text-xl uppercase tracking-wider transition-colors duration-300 ${
                activeCategory === cat.id ? "text-bone" : "text-bone/40 hover:text-bone/80"
              }`}
            >
              {activeCategory === cat.id && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute inset-0 -z-10 bg-blood shadow-redline"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
              <span className="relative z-10">{t(cat.labelKey)}</span>
            </button>
          ))}
        </div>

        {/* Project Navigation Controls */}
        <div className="mt-8 flex items-center justify-between gap-4 w-full border-t border-bone/10 pt-6">
          <div className="flex gap-3">
            <button onClick={handlePrev} className="manga-border group grid h-14 w-14 place-items-center bg-ink transition-colors hover:bg-blood">
              <ChevronLeft className="h-6 w-6 text-bone transition-transform group-hover:-translate-x-1" />
            </button>
            <button onClick={handleNext} className="manga-border group grid h-14 w-14 place-items-center bg-ink transition-colors hover:bg-blood">
              <ChevronRight className="h-6 w-6 text-bone transition-transform group-hover:translate-x-1" />
            </button>
          </div>
          
          <div className="flex items-center gap-4">
             <div className="font-display text-5xl text-blood">
               {String(currentIndex + 1).padStart(2, '0')}
               <span className="text-3xl text-bone/40">/{String(filteredProjects.length).padStart(2, '0')}</span>
             </div>
             <div className="h-1.5 w-32 bg-bone/20">
               <motion.div 
                 className="h-full bg-blood" 
                 initial={{ width: 0 }}
                 animate={{ width: `${((currentIndex + 1) / (filteredProjects.length || 1)) * 100}%` }}
                 transition={{ duration: 0.3 }}
               />
             </div>
          </div>
        </div>

        {/* Dynamic Project Showcase */}
        <div className="relative mt-10 w-full overflow-hidden min-h-0 h-auto lg:h-[42rem] lg:min-h-[42rem]">
          <AnimatePresence custom={direction}>
            {project && (
              <motion.article
                key={project.title}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="group relative lg:absolute lg:inset-0 flex flex-col lg:grid lg:grid-cols-[1.05fr_0.95fr] overflow-hidden border-2 border-bone bg-ink/88 shadow-redline backdrop-blur"
              >
                {/* Left Side: Visual Preview */}
                <div className="relative h-[200px] sm:h-[300px] lg:h-full w-full overflow-hidden shrink-0 border-b border-bone/20 lg:border-b-0 lg:border-r lg:border-bone/20">
                  {"previewType" in project && project.previewType === "dashboard" && project.livePreviewUrl ? (
                    <motion.div
                      className="absolute inset-0 bg-ink p-3 md:p-6"
                      whileHover={{ scale: 1.03 }}
                      transition={{ duration: 0.5, ease: "easeOut" }}
                    >
                       <div className="group/frame relative h-full w-full overflow-hidden border border-bone/30 bg-black shadow-[0_0_40px_rgba(229,9,20,0.15)] transition-all duration-500 hover:border-blood/50 hover:shadow-[0_0_60px_rgba(229,9,20,0.3)]">
                          {/* Browser Header Bar */}
                          <div className="flex h-8 items-center gap-2 border-b border-bone/20 bg-ink px-4">
                             <div className="h-2.5 w-2.5 rounded-full bg-blood/80 transition-colors duration-300 group-hover/frame:bg-blood" />
                             <div className="h-2.5 w-2.5 rounded-full bg-bone/30 transition-colors duration-300 group-hover/frame:bg-bone/50" />
                             <div className="h-2.5 w-2.5 rounded-full bg-bone/30 transition-colors duration-300 group-hover/frame:bg-bone/50" />
                             <div className="ml-auto font-display text-[10px] uppercase tracking-widest text-bone/40">{lang === 'id' ? 'Umpan Langsung' : 'Live Feed'}</div>
                          </div>
                          {/* Iframe Preview */}
                          <div className="relative h-[calc(100%-2rem)] w-full overflow-hidden">
                            <iframe 
                              src={project.livePreviewUrl} 
                              className="pointer-events-none absolute left-0 top-0 h-[200%] w-[200%] origin-top-left scale-50 border-none opacity-85 transition-opacity duration-500 group-hover/frame:opacity-100" 
                              tabIndex={-1} 
                              loading="lazy"
                            />
                            {/* Scanlines & Holographic overlays */}
                            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:100%_4px]" />
                            <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-blood/10 via-transparent to-transparent opacity-60 transition-opacity duration-500 group-hover/frame:opacity-30" />
                            <div className="pointer-events-none absolute inset-0 shadow-[inset_0_0_40px_rgba(5,5,5,0.9)]" />
                          </div>
                       </div>
                    </motion.div>
                  ) : "previewType" in project && project.previewType === "gateway" && project.livePreviewUrl ? (
                    <motion.div
                      className="absolute inset-0 flex items-center justify-center bg-ink p-4 md:p-8"
                      whileHover={{ scale: 1.04 }}
                      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    >
                       <div className="group/gateway relative h-[90%] w-[90%] overflow-hidden rounded-xl border border-bone/20 bg-black/50 shadow-[0_0_30px_rgba(229,9,20,0.1)] backdrop-blur-md transition-all duration-700 hover:border-bone/50 hover:bg-black/80 hover:shadow-[0_0_80px_rgba(255,255,255,0.15)]">
                          {/* Gateway Holographic Accents */}
                          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-bone/50 to-transparent opacity-50" />
                          <div className="absolute inset-y-0 left-0 w-px bg-gradient-to-b from-transparent via-blood/80 to-transparent opacity-50" />
                          
                          {/* Corner Accents */}
                          <div className="absolute -left-2 -top-2 h-4 w-4 border-b border-r border-blood opacity-80" />
                          <div className="absolute -bottom-2 -right-2 h-4 w-4 border-l border-t border-bone opacity-80" />

                          {/* Animated Light Sweep (Glassmorphism overlay) */}
                          <div className="pointer-events-none absolute -inset-full z-20 block h-[300%] w-[50%] -translate-x-[150%] -rotate-45 bg-gradient-to-r from-transparent via-white/5 to-transparent transition-transform duration-[1.5s] ease-in-out group-hover/gateway:translate-x-[350%]" />

                          {/* Iframe Preview */}
                          <div className="relative h-full w-full overflow-hidden rounded-lg">
                            <iframe 
                              src={project.livePreviewUrl} 
                              className="pointer-events-none absolute left-1/2 top-1/2 h-[150%] w-[150%] -translate-x-1/2 -translate-y-1/2 scale-[0.65] border-none opacity-80 transition-all duration-700 group-hover/gateway:scale-[0.7] group-hover/gateway:opacity-100" 
                              tabIndex={-1} 
                              loading="lazy"
                            />
                            {/* Holographic / Cyan-Red Vignette Overlay specific to Arc Pass auth */}
                            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(5,5,5,0.8)_100%)] transition-opacity duration-700 group-hover/gateway:opacity-40" />
                            <div className="pointer-events-none absolute inset-0 mix-blend-overlay shadow-[inset_0_0_50px_rgba(229,9,20,0.2)]" />
                          </div>
                          
                          {/* Access Terminal Text Banner */}
                          <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 items-center gap-3 rounded-full border border-bone/20 bg-ink/80 px-4 py-1.5 backdrop-blur-sm">
                            <div className="h-1.5 w-1.5 animate-pulse rounded-full bg-blood" />
                            <span className="font-display text-[10px] uppercase tracking-[0.3em] text-bone/60">{lang === 'id' ? 'Gateway Arc Aktif' : 'Arc Gateway Active'}</span>
                          </div>
                       </div>
                    </motion.div>
                  ) : "previewType" in project && project.previewType === "identity" && ("livePreviewUrl" in project || "previewImage" in project) ? (
                    <motion.div
                      className="absolute inset-0 flex items-center justify-center overflow-hidden bg-[radial-gradient(ellipse_at_center,#1a0b0c_0%,#050505_100%)] p-4 md:p-8"
                      whileHover={{ scale: 1.04 }}
                      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    >
                       {/* Wide Cinematic UI Panel */}
                       <div className="group/identity relative flex h-[90%] w-[90%] shrink-0 flex-col overflow-hidden rounded-xl border border-blood/30 bg-black/80 shadow-[0_0_50px_rgba(229,9,20,0.15)] backdrop-blur-xl transition-all duration-700 hover:border-blood/60 hover:shadow-[0_0_100px_rgba(229,9,20,0.3)]">
                          
                          {/* Panel Header */}
                          <div className="relative z-30 flex h-10 w-full shrink-0 items-center justify-between border-b border-blood/20 bg-ink/90 px-5 backdrop-blur-md">
                             <div className="flex items-center gap-3">
                                <div className="h-1.5 w-1.5 animate-pulse rounded-full bg-blood shadow-redline" />
                                <span className="font-display text-[10px] uppercase tracking-[0.3em] text-blood/80">GIWA_SECURE_TERMINAL</span>
                             </div>
                             <div className="flex gap-1.5">
                                <div className="h-1 w-5 bg-bone/30" />
                                <div className="h-1 w-5 bg-bone/30" />
                             </div>
                          </div>

                          {/* Interface Content */}
                          <div className="relative h-full w-full overflow-hidden bg-black">
                            {"livePreviewUrl" in project && project.livePreviewUrl ? (
                              <div className="absolute left-1/2 top-1/2 h-[844px] w-[390px] -translate-x-1/2 -translate-y-1/2 scale-[0.65] transition-transform duration-[1.2s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover/identity:scale-[0.7]">
                                <iframe 
                                  src={project.livePreviewUrl as string} 
                                  className="pointer-events-none h-full w-full border-none opacity-90 transition-opacity duration-[1.2s] group-hover/identity:opacity-100" 
                                  tabIndex={-1} 
                                  loading="lazy"
                                />
                              </div>
                            ) : "previewImage" in project && project.previewImage ? (
                               <img 
                                 src={project.previewImage as string} 
                                 alt={`${project.title} Preview`}
                                 className="pointer-events-none absolute left-0 top-0 h-full w-full scale-[1.02] object-cover object-top opacity-85 transition-all duration-[1.2s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover/identity:scale-[1.06] group-hover/identity:opacity-100" 
                               />
                            ) : null}
                            
                            {/* Holographic Security Overlays */}
                            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(229,9,20,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(229,9,20,0.05)_1px,transparent_1px)] bg-[size:24px_24px]" />
                            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 sm:from-black/90 via-transparent to-transparent opacity-80" />
                            <div className="pointer-events-none absolute inset-0 mix-blend-overlay shadow-[inset_0_0_40px_rgba(229,9,20,0.2)] sm:shadow-[inset_0_0_80px_rgba(229,9,20,0.3)]" />
                            
                            {/* Animated Glass Sweep */}
                            <div className="pointer-events-none absolute -inset-full z-20 block h-[300%] w-[50%] -translate-x-[150%] -rotate-45 bg-gradient-to-r from-transparent via-white/5 to-transparent transition-transform duration-[2s] ease-in-out group-hover/identity:translate-x-[350%]" />

                            {/* Animated Scanline */}
                            <div className="pointer-events-none absolute inset-0 -translate-y-full bg-gradient-to-b from-transparent via-blood/20 to-transparent opacity-0 transition-all duration-[2.5s] ease-in-out group-hover/identity:translate-y-full group-hover/identity:opacity-100" />
                          </div>
                          
                          {/* Panel Footer */}
                          <div className="absolute bottom-0 left-0 z-30 flex w-full shrink-0 justify-between border-t border-blood/20 bg-ink/90 px-5 py-2.5 font-mono text-[9px] uppercase tracking-widest text-bone/50 backdrop-blur-md">
                             <span>{t('projects.terminalFooterSec')}</span>
                             <span className="text-blood">{t('projects.terminalFooterStatus')}</span>
                          </div>
                          
                          {/* Corner Target Brackets */}
                          <div className="pointer-events-none absolute left-0 top-0 z-40 h-6 w-6 rounded-tl-xl border-l-2 border-t-2 border-blood/50 transition-colors duration-700 group-hover/identity:border-blood" />
                          <div className="pointer-events-none absolute right-0 top-0 z-40 h-6 w-6 rounded-tr-xl border-r-2 border-t-2 border-blood/50 transition-colors duration-700 group-hover/identity:border-blood" />
                          <div className="pointer-events-none absolute bottom-0 left-0 z-40 h-6 w-6 rounded-bl-xl border-b-2 border-l-2 border-blood/50 transition-colors duration-700 group-hover/identity:border-blood" />
                          <div className="pointer-events-none absolute bottom-0 right-0 z-40 h-6 w-6 rounded-br-xl border-b-2 border-r-2 border-blood/50 transition-colors duration-700 group-hover/identity:border-blood" />
                       </div>
                    </motion.div>
                  ) : (
                    <motion.div
                      className="absolute inset-0"
                      style={{ background: project.image } as CSSProperties}
                      whileHover={{ scale: 1.08, rotate: -1 }}
                      transition={{ duration: 0.5 }}
                    />
                  )}
                  <div className="pointer-events-none absolute inset-0 halftone opacity-30 mix-blend-multiply" />
                  <div className="pointer-events-none absolute left-3 top-3 sm:left-5 sm:top-5 z-10 bg-bone px-3 py-1 sm:px-4 sm:py-2 font-display text-xl sm:text-3xl uppercase text-ink shadow-redline">
                    0{(projects.findIndex(p => p.title === project.title) + 1)}
                  </div>
                  <div className="pointer-events-none absolute bottom-0 left-0 right-0 z-10 h-6 sm:h-10 md:h-14 lg:h-20 -skew-y-1 sm:-skew-y-2 lg:-skew-y-3 bg-blood opacity-80 sm:opacity-95 lg:opacity-100 transition-all duration-300" />
                </div>
                
                {/* Right Side: Text & Actions */}
                <div className="relative flex flex-col justify-between p-4 sm:p-7 md:p-10 overflow-y-auto lg:overflow-visible">
                  <div>
                    {/* Primary Category (Emphasized) */}
                    <div className="mb-2 sm:mb-4 inline-block border-2 border-blood bg-blood/10 px-3 py-1 sm:px-4 sm:py-1.5 shadow-[0_0_15px_rgba(229,9,20,0.2)]">
                      <span className="font-display text-sm sm:text-lg uppercase tracking-[0.2em] text-blood">
                        [ {"category" in project ? (project.category === "Locked" ? t('about.classified') : project.category) : t('about.classified')} ]
                      </span>
                    </div>

                    {/* Secondary Tags */}
                    <div className="mb-3 sm:mb-6 flex flex-wrap gap-1.5 sm:gap-2">
                      {project.tags[lang as keyof typeof project.tags].map((tag: string) => (
                        <span key={tag} className="border border-bone/25 px-2 py-0.5 sm:px-3 sm:py-1 text-[9px] sm:text-[11px] uppercase tracking-[0.18em] text-bone/60">
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-end justify-between gap-4">
                      <h3 className="font-display text-3xl sm:text-5xl md:text-7xl lg:text-8xl uppercase leading-none text-bone">{project.title}</h3>
                      {"year" in project && (
                         <span className="mb-1 font-display text-sm sm:text-2xl text-bone/40 shrink-0">'{project.year.slice(-2)}</span>
                      )}
                    </div>
                    <p className="mt-3 sm:mt-6 max-w-xl text-xs sm:text-sm md:text-lg leading-relaxed md:leading-8 text-bone/76">{project.description[lang as keyof typeof project.description]}</p>
                  </div>
                  <div className="mt-4 sm:mt-8 grid grid-cols-2 sm:flex sm:flex-wrap gap-2 sm:gap-4 z-10 w-full">
                    <a href={project.github} className="inline-flex items-center justify-center gap-1.5 sm:gap-2 border border-bone bg-bone px-3 py-2 sm:px-5 sm:py-3 font-display text-sm sm:text-lg md:text-xl uppercase text-ink transition hover:-translate-y-1 hover:bg-blood hover:text-white">
                      <Github className="h-4 w-4 sm:h-5 sm:w-5" /> {t('projects.github')}
                    </a>
                    <a href={project.demo} className="inline-flex items-center justify-center gap-1.5 sm:gap-2 border border-bone px-3 py-2 sm:px-5 sm:py-3 font-display text-sm sm:text-lg md:text-xl uppercase text-bone transition hover:-translate-y-1 hover:bg-bone hover:text-ink">
                      <ExternalLink className="h-4 w-4 sm:h-5 sm:w-5" /> {t('projects.viewProject')}
                    </a>
                  </div>
                  <div className="pointer-events-none absolute -right-12 top-6 rotate-12 font-display text-5xl sm:text-8xl uppercase text-blood/10 transition group-hover:scale-110">
                    {lang === 'id' ? 'EKSEKUSI' : 'EXECUTE'}
                  </div>
                </div>
              </motion.article>
            )}
          </AnimatePresence>
        </div>

        {/* Scalable Project Archive */}
        <div className="mt-32">
          <SectionHeading kicker={t('projects.kicker')} title={t('projects.archiveTitle')} />
          <div className="mt-12 border-t-2 border-bone/20">
            {projects.map((p, idx) => {
              if ((p as any).locked) {
                return (
                  <div 
                    key={p.title} 
                    className="group relative flex flex-col justify-between border-b-2 border-bone/10 px-4 py-6 md:flex-row md:items-center bg-ink/40 opacity-70 cursor-not-allowed overflow-hidden transition-colors hover:bg-blood/5"
                  >
                    <div className="relative z-10 flex items-center gap-6 md:gap-12">
                      <span className="font-display text-2xl text-bone/20">
                        {(idx + 1).toString().padStart(2, '0')}
                      </span>
                      <h4 className="font-display text-3xl uppercase text-bone/30 md:text-5xl">
                        {t("projects.inProgress")}
                      </h4>
                    </div>
                    
                    <div className="relative z-10 mt-4 flex items-center justify-between md:mt-0 md:justify-end md:gap-12">
                      <div className="hidden flex-wrap gap-2 md:flex">
                        <span className="flex items-center gap-2 border border-blood/20 bg-blood/5 px-2 py-1 text-[10px] uppercase tracking-widest text-blood/60">
                          <span className="h-1 w-1 rounded-full bg-blood animate-pulse" />
                          {t("projects.locked")}
                        </span>
                        <span className="border border-bone/10 px-2 py-1 text-[10px] uppercase tracking-widest text-bone/30">
                          2026
                        </span>
                      </div>
                      
                      <div className="flex items-center gap-6">
                        <span className="font-display text-xl text-bone/20">
                          '26
                        </span>
                        <Lock className="h-6 w-6 text-blood/40" />
                      </div>
                    </div>
                    
                    <div className="absolute inset-0 z-20 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-blood/5 backdrop-blur-[1px]">
                      <span className="font-mono text-sm uppercase tracking-[0.3em] text-blood drop-shadow-[0_0_8px_rgba(229,9,20,0.8)]">
                        {t("projects.accessDenied")}
                      </span>
                    </div>
                  </div>
                );
              }

              return (
                <a 
                  key={p.title} 
                  href={p.demo} 
                  className="group flex flex-col justify-between border-b-2 border-bone/20 px-4 py-6 transition-colors hover:bg-blood/5 md:flex-row md:items-center"
                >
                  <div className="flex items-center gap-6 md:gap-12">
                    <span className="font-display text-2xl text-bone/30 transition-colors group-hover:text-blood">
                      {(idx + 1).toString().padStart(2, '0')}
                    </span>
                    <h4 className="font-display text-3xl uppercase text-bone transition-transform group-hover:translate-x-2 md:text-5xl">
                      {p.title}
                    </h4>
                  </div>
                  
                  <div className="mt-4 flex items-center justify-between md:mt-0 md:justify-end md:gap-12">
                    <div className="hidden flex-wrap gap-2 md:flex">
                      <span className="border border-blood/20 bg-blood/10 px-2 py-1 text-[10px] uppercase tracking-widest text-blood">
                        {p.category}
                      </span>
                      {p.tags[lang as keyof typeof p.tags].slice(0, 2).map((tag: string) => (
                        <span key={tag} className="border border-bone/20 px-2 py-1 text-[10px] uppercase tracking-widest text-bone/50">
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex items-center gap-6">
                      <span className="font-display text-xl text-bone/40 transition-colors group-hover:text-blood">
                        '{p.year?.slice(-2) || "XX"}
                      </span>
                      <ExternalLink className="h-6 w-6 text-bone/20 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-blood" />
                    </div>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
