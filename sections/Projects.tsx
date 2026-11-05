"use client";

import { useState, useMemo, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ExternalLink,
  Search,
  Sparkles,
  Maximize2,
  X,
  CheckCircle2,
  Globe,
  Layers,
  ArrowRight,
  MousePointer2,
  Monitor,
  RefreshCw,
} from "lucide-react";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import {
  KonohaLeafIcon,
  ShurikenIcon,
  SealingStamp,
  CloudWatermark,
} from "@/components/ornaments/KonohaIcons";
import { projects } from "@/lib/data";

export interface ProjectShowcaseItem {
  id: string;
  title: string;
  category: string;
  tagline: { en: string; id: string };
  tags: { en: string[]; id: string[] };
  description: { en: string; id: string };
  features: { en: string[]; id: string[] };
  url: string;
  previewImage: string;
  status: string;
  year: string;
  chapter: string;
  sealKanji: string;
}

export const liveProjectsData: ProjectShowcaseItem[] = [
  {
    ...projects[0],
    chapter: "巻ノ一",
    sealKanji: "創",
  },
  {
    ...projects[1],
    chapter: "巻ノ二",
    sealKanji: "探",
  },
  {
    ...projects[2],
    chapter: "巻ノ三",
    sealKanji: "術",
  },
  {
    ...projects[3],
    chapter: "巻ノ四",
    sealKanji: "基",
  },
  {
    ...projects[4],
    chapter: "巻ノ五",
    sealKanji: "極",
  },
];

export function Projects() {
  const { lang } = useLanguage();
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedProject, setSelectedProject] = useState<ProjectShowcaseItem | null>(null);
  const [interactiveCards, setInteractiveCards] = useState<Record<string, boolean>>({});
  const [loadedIframes, setLoadedIframes] = useState<Record<string, boolean>>({});

  // Close modal on ESC key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedProject(null);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const categories = [
    { id: "All", labelEn: "All Projects", labelId: "Semua Proyek" },
    { id: "Web3", labelEn: "Web3 & Protocols", labelId: "Web3 & Protokol" },
    { id: "AI", labelEn: "AI & Cultural Tech", labelId: "AI & Teknologi Kultur" },
  ];

  const getCategoryCount = (catId: string) => {
    if (catId === "All") return liveProjectsData.length;
    return liveProjectsData.filter((p) => p.category === catId).length;
  };

  const filteredProjects = useMemo(() => {
    return liveProjectsData.filter((item) => {
      const matchesCategory =
        activeCategory === "All" || item.category === activeCategory;

      if (!matchesCategory) return false;

      if (!searchQuery.trim()) return true;

      const q = searchQuery.toLowerCase();
      const title = item.title.toLowerCase();
      const descEn = item.description.en.toLowerCase();
      const descId = item.description.id.toLowerCase();
      const tagsEn = item.tags.en.join(" ").toLowerCase();
      const tagsId = item.tags.id.join(" ").toLowerCase();

      return (
        title.includes(q) ||
        descEn.includes(q) ||
        descId.includes(q) ||
        tagsEn.includes(q) ||
        tagsId.includes(q)
      );
    });
  }, [activeCategory, searchQuery]);

  const toggleInteractive = (id: string, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setInteractiveCards((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <section
      id="projects"
      className="relative z-10 overflow-hidden px-5 py-20 md:py-32 sm:px-8 lg:px-14 bg-[#080506] border-t border-[#ff3838]/15"
    >
      {/* Anchor aliases for navigation compatibility */}
      <div id="catatan-misi" className="absolute top-0 pointer-events-none" />
      <div id="mission-notes" className="absolute top-0 pointer-events-none" />

      {/* Atmospheric ambient glow */}
      <div className="absolute top-1/4 left-0 w-[550px] h-[550px] bg-[#ff3838]/5 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-0 w-[550px] h-[550px] bg-[#ff7844]/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="relative mx-auto max-w-7xl z-10">
        {/* ========================================================
            SECTION HEADING: Japanese Subtitle + Main Title + Desc
            ======================================================== */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div className="flex flex-col items-start max-w-2xl">
            <div className="flex items-center gap-2.5 mb-2.5">
              <span className="h-[2px] w-8 bg-[#ff3838]" />
              <span className="text-xs sm:text-sm font-semibold tracking-[0.25em] text-[#ff3838] uppercase drop-shadow-[0_0_10px_rgba(255,56,56,0.7)] flex items-center gap-1.5">
                <ShurikenIcon className="w-3.5 h-3.5 text-[#ff7844] animate-spin-slow" />
                <span>プロジェクト実績 • LIVE SHINOBI SHOWCASE</span>
              </span>
              <span className="h-[2px] w-8 bg-[#ff3838]" />
            </div>

            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white font-display">
              {lang === "id" ? "Catatan Misi & Proyek" : "Live Projects & Mission Showcase"}
            </h2>

            <p className="mt-4 text-sm sm:text-base text-zinc-400 leading-relaxed">
              {lang === "id"
                ? "Showcase interaktif dari lima proyek dan protokol nyata yang aktif dideploy oleh Ferdy Afrizal (PamanSam): mencakup video generatif Monad, identitas finansial Arc, tabungan tergamifikasi Ritual, perencana rute kultur Qloo, dan paspor profesional Sui."
                : "An interactive portfolio showcase featuring five active production protocols and web applications engineered by Ferdy Afrizal (PamanSam)—complete with live embedded previews and authentic verified architectures."}
            </p>
          </div>

          {/* Search bar */}
          <div className="relative w-full md:w-80 shrink-0">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={lang === "id" ? "Cari proyek, stack, protokol..." : "Search project, stack, chain..."}
              className="w-full pl-10 pr-9 py-2 rounded-xl bg-black/60 border border-white/10 hover:border-[#ff3838]/40 focus:border-[#ff3838] focus:outline-none focus:ring-1 focus:ring-[#ff3838] text-xs sm:text-sm font-mono text-zinc-200 placeholder:text-zinc-500 transition-all"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-white cursor-pointer"
                aria-label="Clear search"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>

        {/* ========================================================
            FILTER TABS WITH COUNTS
            ======================================================== */}
        <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-10 pb-4 border-b border-white/10">
          {categories.map((cat) => {
            const isActive = activeCategory === cat.id;
            const count = getCategoryCount(cat.id);
            const label = lang === "id" ? cat.labelId : cat.labelEn;

            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveCategory(cat.id)}
                className={`relative inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all cursor-pointer ${
                  isActive
                    ? "text-white bg-[#1b0e11] border border-[#ff3838]/60 shadow-[0_0_15px_rgba(255,56,56,0.35)]"
                    : "text-zinc-400 hover:text-white bg-black/40 border border-white/10 hover:border-white/20"
                }`}
              >
                <KonohaLeafIcon className={`w-3.5 h-3.5 ${isActive ? "text-[#ff3838]" : "text-zinc-500"}`} color="currentColor" />
                <span>{label}</span>
                <span
                  className={`text-[10px] font-mono px-1.5 py-0.5 rounded-full ${
                    isActive ? "bg-[#ff3838]/25 text-[#ff7844]" : "bg-white/10 text-zinc-400"
                  }`}
                >
                  {count}
                </span>
                {isActive && (
                  <motion.div
                    layoutId="activeProjFilter"
                    className="absolute inset-0 rounded-full border border-[#ff3838] pointer-events-none"
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* ========================================================
            LIVE PROJECT SHOWCASE GRID
            ======================================================== */}
        {filteredProjects.length === 0 ? (
          <div className="py-20 text-center flex flex-col items-center justify-center p-6 rounded-2xl bg-[#120a0d]/40 border border-white/10">
            <SealingStamp label="無" className="w-16 h-16 opacity-60 mb-3" />
            <h4 className="text-lg font-bold text-white font-display">
              {lang === "id" ? "Proyek Tidak Ditemukan" : "No Projects Found"}
            </h4>
            <p className="mt-1 text-xs text-zinc-400 max-w-sm">
              {lang === "id"
                ? `Tidak ada proyek yang sesuai dengan kueri "${searchQuery}". Coba reset kata kunci.`
                : `No project matched "${searchQuery}". Try adjusting your keywords.`}
            </p>
            <button
              type="button"
              onClick={() => {
                setSearchQuery("");
                setActiveCategory("All");
              }}
              className="mt-4 px-4 py-2 rounded-xl text-xs font-mono font-medium text-white bg-[#ff3838]/20 hover:bg-[#ff3838] border border-[#ff3838]/40 transition-all cursor-pointer"
            >
              {lang === "id" ? "Reset Filter" : "Reset Filter"}
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, idx) => {
                const isInteractive = Boolean(interactiveCards[project.id]);
                const isIframeLoaded = Boolean(loadedIframes[project.id]);

                return (
                  <motion.article
                    key={project.id}
                    layout
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.96 }}
                    transition={{ duration: 0.4, delay: idx * 0.08 }}
                    className="group relative flex flex-col justify-between overflow-hidden rounded-2xl bg-[#120a0d]/90 border border-[#ff3838]/20 hover:border-[#ff3838]/70 p-5 sm:p-7 shadow-[0_10px_35px_rgba(0,0,0,0.75)] hover:shadow-[0_0_40px_rgba(255,56,56,0.25)] backdrop-blur-xl transition-all duration-300"
                  >
                    {/* Ninja Scroll Corner Accents */}
                    <div className="pointer-events-none absolute top-0 left-0 h-4 w-4 border-t-2 border-l-2 border-[#ff3838]/40 group-hover:border-[#ff3838] transition-colors" />
                    <div className="pointer-events-none absolute top-0 right-0 h-4 w-4 border-t-2 border-r-2 border-[#ff3838]/40 group-hover:border-[#ff3838] transition-colors" />
                    <div className="pointer-events-none absolute bottom-0 left-0 h-4 w-4 border-b-2 border-l-2 border-[#ff3838]/40 group-hover:border-[#ff3838] transition-colors" />
                    <div className="pointer-events-none absolute bottom-0 right-0 h-4 w-4 border-b-2 border-r-2 border-[#ff3838]/40 group-hover:border-[#ff3838] transition-colors" />

                    {/* Background Watermark */}
                    <div className="absolute -bottom-8 -right-8 text-[#ff3838] opacity-5 group-hover:opacity-10 transition-opacity pointer-events-none">
                      <CloudWatermark className="w-56 h-36" color="currentColor" />
                    </div>

                    <div>
                      {/* Card Header: Chapter, Status & Live Badge */}
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                        <div className="flex items-center gap-2">
                          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded text-xs font-mono font-bold bg-[#ff3838]/15 border border-[#ff3838]/30 text-[#ff7844]">
                            <KonohaLeafIcon className="w-3 h-3 text-[#ff3838]" color="#ff3838" />
                            <span>{project.chapter}</span>
                          </span>

                          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-mono tracking-wider uppercase bg-emerald-500/15 border border-emerald-500/40 text-emerald-400">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                            <span>{project.status}</span>
                          </span>
                        </div>

                        <div className="flex items-center gap-2">
                          <SealingStamp
                            label={project.sealKanji}
                            className="w-7 h-7 text-[11px] opacity-75 group-hover:opacity-100 transition-opacity"
                          />
                        </div>
                      </div>

                      {/* ========================================================
                          PROMINENT LIVE WEBSITE PREVIEW CONTAINER
                          Browser-chrome frame with live iframe + fallback screenshot
                          ======================================================== */}
                      <div className="relative w-full rounded-xl overflow-hidden bg-black/90 border border-white/10 group-hover:border-[#ff3838]/50 shadow-2xl transition-all duration-300 mb-5">
                        {/* Browser Chrome Header */}
                        <div className="flex items-center justify-between px-3.5 py-2 bg-[#180e12] border-b border-white/10 text-xs font-mono select-none">
                          <div className="flex items-center gap-1.5">
                            <span className="w-2.5 h-2.5 rounded-full bg-[#ff3838]/80" />
                            <span className="w-2.5 h-2.5 rounded-full bg-[#ff7844]/80" />
                            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                          </div>

                          {/* Address Bar Pill */}
                          <div className="flex items-center gap-1.5 px-2.5 sm:px-3 py-0.5 rounded-full bg-black/60 border border-white/10 text-[10px] sm:text-[11px] text-zinc-300 max-w-[130px] sm:max-w-[260px] md:max-w-[300px] truncate">
                            <Globe className="w-3 h-3 text-[#ff7844] shrink-0" />
                            <span className="truncate">{project.url.replace(/^https?:\/\//, '')}</span>
                          </div>

                          {/* Controls: Interactive Mode & Expand */}
                          <div className="flex items-center gap-1.5">
                            <button
                              type="button"
                              onClick={(e) => toggleInteractive(project.id, e)}
                              className={`p-1 rounded text-[10px] flex items-center gap-1 transition-colors cursor-pointer ${
                                isInteractive
                                  ? "bg-[#ff3838] text-white"
                                  : "text-zinc-400 hover:text-white bg-white/5 hover:bg-white/10"
                              }`}
                              title={isInteractive ? "Disable interactive scroll" : "Enable interactive clicks inside preview"}
                            >
                              <MousePointer2 className="w-3 h-3" />
                              <span className="hidden sm:inline">{isInteractive ? "Interactive" : "Static"}</span>
                            </button>

                            <button
                              type="button"
                              onClick={() => setSelectedProject(project)}
                              className="p-1 rounded text-zinc-400 hover:text-white bg-white/5 hover:bg-white/10 transition-colors cursor-pointer"
                              title="Expand Full Preview"
                              aria-label="Expand Preview"
                            >
                              <Maximize2 className="w-3 h-3" />
                            </button>
                          </div>
                        </div>

                        {/* Viewport Frame (Aspect Ratio 16/10) */}
                        <div className="relative w-full aspect-[16/10] bg-[#0c0709] overflow-hidden flex items-center justify-center">
                          {/* Fallback & Initial Screenshot (Zero layout shift) */}
                          <img
                            src={project.previewImage}
                            alt={`${project.title} live screenshot`}
                            className={`absolute inset-0 w-full h-full object-cover object-top transition-opacity duration-700 ${
                              isIframeLoaded ? "opacity-0 pointer-events-none" : "opacity-100"
                            }`}
                            loading="lazy"
                          />

                          {/* Embedded Live Iframe */}
                          <iframe
                            src={project.url}
                            title={`${project.title} live preview`}
                            sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
                            loading="lazy"
                            onLoad={() => {
                              setLoadedIframes((prev) => ({ ...prev, [project.id]: true }));
                            }}
                            className={`w-full h-full border-none transition-opacity duration-700 ${
                              isIframeLoaded ? "opacity-100" : "opacity-0"
                            } ${isInteractive ? "pointer-events-auto" : "pointer-events-none"}`}
                          />

                          {/* Scroll Shield & Hover Interaction Overlay when not in interactive mode */}
                          {!isInteractive && (
                            <div
                              onClick={() => setSelectedProject(project)}
                              className="absolute inset-0 bg-transparent hover:bg-black/20 transition-colors cursor-pointer flex items-center justify-center group/shield"
                              title="Click to expand preview modal or toggle interactive mode"
                            >
                              <div className="opacity-0 group-hover/shield:opacity-100 transition-opacity px-3.5 py-1.5 rounded-full bg-black/85 backdrop-blur-md border border-[#ff3838]/50 text-xs font-mono text-white shadow-xl flex items-center gap-2">
                                <Maximize2 className="w-3.5 h-3.5 text-[#ff7844]" />
                                <span>{lang === "id" ? "Buka Preview Layar Penuh" : "Click to Expand Preview"}</span>
                              </div>
                            </div>
                          )}
                        </div>
                      </div>

                      {/* Project Title & Tagline */}
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <h3 className="font-display text-2xl sm:text-3xl lg:text-4xl uppercase leading-tight tracking-wide text-white group-hover:text-[#ff6b6b] transition-colors">
                            {project.title}
                          </h3>
                          <p className="mt-1 text-xs sm:text-sm font-mono text-[#ff7844]">
                            {project.tagline[lang as "en" | "id"]}
                          </p>
                        </div>
                        <span className="font-display text-xl text-zinc-500 shrink-0">
                          '{project.year.slice(-2)}
                        </span>
                      </div>

                      {/* Project Description */}
                      <p className="mt-3.5 text-xs sm:text-sm leading-relaxed text-zinc-300">
                        {project.description[lang as "en" | "id"]}
                      </p>

                      {/* Main Verified Features */}
                      <div className="mt-4 pt-3 border-t border-white/10 flex flex-col gap-1.5">
                        <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-400">
                          {lang === "id" ? "Fitur & Kapabilitas Utama:" : "Core Capabilities & Features:"}
                        </span>
                        <ul className="flex flex-col gap-1 text-xs font-mono text-zinc-300">
                          {project.features[lang as "en" | "id"].map((feat, fIdx) => (
                            <li key={fIdx} className="flex items-start gap-2">
                              <span className="w-1.5 h-1.5 rounded-full bg-[#ff3838] shrink-0 mt-1.5" />
                              <span className="leading-snug">{feat}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Card Footer: Tech Stack Tags & Action Buttons */}
                    <div className="mt-6 pt-4 border-t border-white/10 flex flex-col gap-3.5">
                      {/* Tech Tags */}
                      <div className="flex flex-wrap items-center gap-1.5">
                        {project.tags[lang as "en" | "id"].map((tag, tIdx) => (
                          <span
                            key={tIdx}
                            className="text-[10px] font-mono px-2.5 py-0.5 rounded bg-white/5 border border-white/10 text-zinc-400"
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>

                      {/* Actions */}
                      <div className="flex items-center justify-between gap-3 pt-1">
                        <a
                          href={project.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-mono font-semibold text-white bg-gradient-to-r from-[#ff3838] to-[#e52e2e] shadow-[0_0_15px_rgba(255,56,56,0.4)] hover:scale-105 transition-all"
                        >
                          <span>{lang === "id" ? "Kunjungi Website Langsung" : "View Live Project"}</span>
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>

                        <button
                          type="button"
                          onClick={() => setSelectedProject(project)}
                          className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-mono text-zinc-300 hover:text-white bg-white/5 hover:bg-white/15 border border-white/10 transition-colors cursor-pointer"
                        >
                          <Maximize2 className="w-3.5 h-3.5 text-[#ff7844]" />
                          <span>{lang === "id" ? "Detail Lengkap" : "Full Preview"}</span>
                        </button>
                      </div>
                    </div>
                  </motion.article>
                );
              })}
            </AnimatePresence>
          </div>
        )}

        {/* Section Bottom Shinobi Note */}
        <div className="mt-14 sm:mt-18 p-5 sm:p-6 rounded-2xl bg-[#110a0c]/60 border border-[#ff3838]/20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#ff3838]/10 border border-[#ff3838]/30 flex items-center justify-center text-[#ff3838] shrink-0">
              <Layers className="w-5 h-5 text-[#ff7844]" />
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-semibold text-white">
                {lang === "id"
                  ? "Arsitektur Produksi & Eksplorasi Nyata"
                  : "Production Deployments & Verified Codebases"}
              </span>
              <span className="text-xs text-zinc-400">
                {lang === "id"
                  ? "Seluruh proyek di atas dapat diakses langsung secara onchain dan publik. Ingin berkolaborasi atau mendiskusikan integrasi?"
                  : "All five projects above are live, interactive, and verifiable onchain. Interested in collaborating or building together?"}
              </span>
            </div>
          </div>

          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-mono font-medium text-white bg-[#ff3838]/20 hover:bg-[#ff3838] border border-[#ff3838]/40 transition-all hover:scale-105 shrink-0"
          >
            <span>{lang === "id" ? "Bahas Proyek Bareng ↗" : "Let's Build Together ↗"}</span>
          </a>
        </div>
      </div>

      {/* ========================================================
          FULL PROJECT PREVIEW LIGHTBOX MODAL
          ======================================================== */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-[250] flex items-center justify-center p-2 sm:p-6">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-black/90 backdrop-blur-md"
            />

            {/* Modal Dialog */}
            <motion.div
              initial={{ opacity: 0, scale: 0.94, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, y: 20 }}
              transition={{ duration: 0.25 }}
              className="relative w-full max-w-5xl max-h-[94vh] overflow-y-auto rounded-2xl bg-[#120a0d] border border-[#ff3838]/50 p-4 sm:p-7 shadow-[0_20px_60px_rgba(0,0,0,0.95),0_0_40px_rgba(255,56,56,0.3)] z-10 scrollbar-thin scrollbar-thumb-zinc-700 flex flex-col gap-5"
            >
              {/* Header Controls */}
              <div className="flex items-center justify-between pb-3 border-b border-white/10">
                <div className="flex items-center gap-2.5">
                  <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded text-xs font-mono font-bold bg-[#ff3838]/15 border border-[#ff3838]/30 text-[#ff7844]">
                    <KonohaLeafIcon className="w-3 h-3 text-[#ff3838]" color="#ff3838" />
                    <span>{selectedProject.chapter}</span>
                  </span>
                  <h3 className="text-lg sm:text-2xl font-bold text-white font-display uppercase tracking-wide">
                    {selectedProject.title}
                  </h3>
                  <span className="hidden sm:inline-flex text-xs font-mono text-zinc-400">
                    • {selectedProject.tagline[lang as "en" | "id"]}
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <a
                    href={selectedProject.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1.5 rounded-lg bg-[#ff3838]/20 hover:bg-[#ff3838] text-white border border-[#ff3838]/40 transition-colors text-xs font-mono flex items-center gap-1.5"
                    title="Open in new window"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    <span className="hidden sm:inline">Launch Site</span>
                  </a>

                  <button
                    type="button"
                    onClick={() => setSelectedProject(null)}
                    className="p-1.5 rounded-lg bg-white/5 hover:bg-[#ff3838]/20 text-zinc-400 hover:text-white border border-white/10 transition-colors cursor-pointer"
                    aria-label="Close Preview"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Large Live Interactive Preview */}
              <div className="relative w-full rounded-xl overflow-hidden bg-black border border-white/10 shadow-2xl">
                {/* Browser bar */}
                <div className="flex items-center justify-between px-4 py-2 bg-[#180e12] border-b border-white/10 text-xs font-mono">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#ff3838]" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#ff7844]" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                  </div>

                  <div className="flex items-center gap-2 px-3.5 py-0.5 rounded-full bg-black/60 border border-white/10 text-xs text-zinc-300">
                    <Globe className="w-3 h-3 text-[#ff7844]" />
                    <span>{selectedProject.url}</span>
                  </div>

                  <span className="text-[10px] text-emerald-400 font-mono">
                    ● {selectedProject.status}
                  </span>
                </div>

                {/* Big Iframe Viewer */}
                <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] min-h-[360px] sm:min-h-[480px] bg-[#0a0507]">
                  <iframe
                    src={selectedProject.url}
                    title={`${selectedProject.title} interactive modal preview`}
                    sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
                    loading="lazy"
                    className="w-full h-full border-none"
                  />
                </div>
              </div>

              {/* Detailed Breakdown */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
                <div className="md:col-span-2 flex flex-col gap-3">
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#ff7844]">
                    {lang === "id" ? "Deskripsi & Arsitektur Sistem" : "System Architecture & Description"}
                  </span>
                  <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                    {selectedProject.description[lang as "en" | "id"]}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mt-2">
                    {selectedProject.tags[lang as "en" | "id"].map((tag, idx) => (
                      <span
                        key={idx}
                        className="text-xs font-mono px-2.5 py-1 rounded bg-[#ff3838]/10 border border-[#ff3838]/30 text-zinc-200"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-black/50 border border-white/10 flex flex-col justify-between gap-3">
                  <div>
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-white block mb-2">
                      {lang === "id" ? "Fitur Utama" : "Key Capabilities"}
                    </span>
                    <ul className="flex flex-col gap-1.5 text-xs font-mono text-zinc-300">
                      {selectedProject.features[lang as "en" | "id"].map((feat, idx) => (
                        <li key={idx} className="flex items-start gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                          <span className="leading-snug">{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <a
                    href={selectedProject.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full mt-3 inline-flex items-center justify-center gap-2 py-2 px-3 rounded-xl bg-[#ff3838] hover:bg-[#e52e2e] text-white font-mono font-semibold text-xs transition-colors"
                  >
                    <span>{lang === "id" ? "Buka di Tab Baru" : "Launch Website"}</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
