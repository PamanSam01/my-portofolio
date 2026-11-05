"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Layout,
  Blocks,
  Bot,
  Server,
  Sparkles,
  ShieldCheck,
  Globe,
  Workflow,
  Cpu,
  Network,
  Activity,
  Flame,
  Wand2,
} from "lucide-react";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { skillCategories, type SkillCategory, type SkillItem } from "@/lib/data";
import { ShurikenIcon, CloudWatermark } from "@/components/ornaments/KonohaIcons";
import {
  ReactIcon,
  TypeScriptIcon,
  PythonIcon,
  NextJsIcon,
  TailwindIcon,
  EthereumIcon,
  SolanaIcon,
  AptosIcon,
  SuiIcon,
  AiLlmIcon,
  FastApiIcon,
  PostgreSqlIcon,
  ThreeJsIcon,
  GsapIcon,
  LinuxIcon,
} from "@/components/icons/BrandIcons";

// Category Header Icon Mapper
function getCategoryIcon(id: string) {
  switch (id) {
    case "frontend":
      return Layout;
    case "web3":
      return Blocks;
    case "ai":
      return Bot;
    case "backend":
      return Server;
    case "creative":
      return Sparkles;
    default:
      return Sparkles;
  }
}

// Individual Skill Icon Mapper (Prioritizes official brand SVG logos)
function getSkillIcon(name: string): React.ComponentType<{ className?: string }> {
  switch (name) {
    case "React":
      return ReactIcon;
    case "Next.js":
      return NextJsIcon;
    case "TypeScript":
      return TypeScriptIcon;
    case "Tailwind CSS":
      return TailwindIcon;
    case "GSAP":
      return GsapIcon;
    case "Responsive UI":
      return Layout;
    case "Ethereum":
      return EthereumIcon;
    case "Solana":
      return SolanaIcon;
    case "Aptos":
      return AptosIcon;
    case "Sui":
      return SuiIcon;
    case "Smart Contract Integration":
      return ShieldCheck;
    case "dApp Development":
      return Globe;
    case "Python":
      return PythonIcon;
    case "LLM Integration":
      return AiLlmIcon;
    case "Hermes Agent":
      return Bot;
    case "FastAPI":
      return FastApiIcon;
    case "Agent Workflows":
      return Workflow;
    case "AI Automation":
      return Cpu;
    case "PostgreSQL":
      return PostgreSqlIcon;
    case "REST API":
      return Network;
    case "Linux":
      return LinuxIcon;
    case "VPS & Deployment":
      return Server;
    case "Motion Design":
      return Activity;
    case "Three.js":
      return ThreeJsIcon;
    case "Interactive Experiences":
      return Flame;
    case "AI-assisted Development":
      return Wand2;
    default:
      return Sparkles;
  }
}

export function Skills() {
  const { t, lang } = useLanguage();

  return (
    <section
      id="skills"
      className="relative z-10 overflow-hidden px-5 py-20 md:py-32 text-white sm:px-8 lg:px-14 bg-[#090506] border-t border-[#ff3838]/15"
    >
      {/* Background glow ambience */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-[#ff3838]/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-[#ff7844]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative mx-auto max-w-7xl z-10">
        {/* ========================================================
            SECTION HEADING: Japanese Subtitle + Main Title + Desc
            ======================================================== */}
        <div className="flex flex-col items-start mb-10 sm:mb-12">
          <div className="flex items-center gap-2.5 mb-2.5">
            <span className="h-[2px] w-8 bg-[#ff3838]" />
            <span className="text-xs sm:text-sm font-semibold tracking-[0.25em] text-[#ff3838] uppercase drop-shadow-[0_0_10px_rgba(255,56,56,0.7)] flex items-center gap-1.5">
              <ShurikenIcon className="w-3.5 h-3.5 text-[#ff7844] animate-spin-slow" />
              <span>忍の技術 • {t("skills.kicker")}</span>
            </span>
            <span className="h-[2px] w-8 bg-[#ff3838]" />
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white font-display">
            {t("skills.title")}
          </h2>

          <p className="mt-4 text-sm sm:text-base text-zinc-400 max-w-2xl leading-relaxed">
            {t("skills.subtitle")}
          </p>

          {/* Skill Proficiency Indicators Legend */}
          <div className="mt-6 flex flex-wrap items-center gap-3 sm:gap-4 p-2.5 sm:px-4 sm:py-2 rounded-xl bg-[#140b0e]/85 border border-[#ff3838]/25 shadow-[0_0_15px_rgba(255,56,56,0.1)] backdrop-blur-md text-[11px] font-mono">
            <div className="flex items-center gap-1.5 text-zinc-300">
              <span className="w-2 h-2 rounded-full bg-[#ff3838] animate-pulse shadow-[0_0_6px_#ff3838]" />
              <span className="font-bold text-[#ff6b6b]">{t("skills.coreBadge")}:</span>
              <span className="text-zinc-400">{t("skills.coreDesc")}</span>
            </div>
            <span className="text-zinc-600 hidden sm:inline">•</span>
            <div className="flex items-center gap-1.5 text-zinc-300">
              <span className="w-2 h-2 rounded-full bg-[#ff7844]" />
              <span className="font-bold text-[#ff9f43]">{t("skills.activeBadge")}:</span>
              <span className="text-zinc-400">{t("skills.activeDesc")}</span>
            </div>
            <span className="text-zinc-600 hidden sm:inline">•</span>
            <div className="flex items-center gap-1.5 text-zinc-300">
              <span className="w-2 h-2 rounded-full bg-zinc-500" />
              <span className="font-bold text-zinc-400">{t("skills.exploringBadge")}:</span>
              <span className="text-zinc-500">{t("skills.exploringDesc")}</span>
            </div>
          </div>
        </div>

        {/* ========================================================
            BALANCED 5-CARD ARSENAL GRID
            Desktop: 3 on Top Row, 2 Centered on Bottom Row
            Tablet: 2-column adaptive grid with 5th card centered
            Mobile: Clean 1-column layout
            ======================================================== */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-5 sm:gap-6">
          {skillCategories.map((category: SkillCategory, index: number) => {
            const CategoryIcon = getCategoryIcon(category.id);

            // Responsive grid column spans:
            // Desktop (lg): 3 cards in Row 1 (span 2 each), 2 cards in Row 2 (span 2 each, starting at col 2)
            // Tablet (md): 2 cards per row, 5th card centered spanning 2 cols
            const colSpanClass =
              index < 3
                ? "lg:col-span-2 md:col-span-1"
                : index === 3
                ? "lg:col-span-2 lg:col-start-2 md:col-span-1"
                : "lg:col-span-2 md:col-span-2 md:max-w-md md:mx-auto lg:max-w-none w-full";

            return (
              <motion.article
                key={category.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -6, scale: 1.015 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                className={`group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-[#ff3838]/25 bg-[#120a0c]/85 p-4 sm:p-6 text-zinc-100 shadow-[0_10px_30px_rgba(0,0,0,0.6)] hover:border-[#ff3838]/75 hover:shadow-[0_0_35px_rgba(255,56,56,0.3),0_0_50px_rgba(255,120,68,0.12)] backdrop-blur-xl transition-all duration-300 ${colSpanClass}`}
              >
                {/* Subtle Cloud Watermark in card background */}
                <div className="absolute -bottom-2 -right-2 text-[#ff3838] opacity-5 group-hover:opacity-15 transition-opacity pointer-events-none">
                  <CloudWatermark className="w-28 h-20" color="currentColor" />
                </div>

                {/* Glowing top accent strip */}
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-[#ff3838] to-transparent opacity-50 group-hover:opacity-100 transition-opacity" />
                {/* Subtle bottom chakra line */}
                <div className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-transparent via-[#ff7844] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                <div>
                  {/* Card Header: Category Badge + Icon */}
                  <div className="mb-4 flex items-center justify-between">
                    {/* Category Icon with Chakra Glow Backplate */}
                    <div className="relative">
                      <div className="absolute -inset-1 rounded-xl bg-gradient-to-r from-[#ff3838]/50 via-[#ff7844]/40 to-transparent blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <div className="relative p-2.5 rounded-xl bg-[#ff3838]/10 border border-[#ff3838]/30 text-[#ff3838] group-hover:scale-110 group-hover:bg-[#ff3838] group-hover:text-white transition-all duration-300 shadow-[0_0_15px_rgba(255,56,56,0.2)]">
                        <CategoryIcon className="h-5 w-5" />
                      </div>
                    </div>

                    {/* Ninja Skill Index Badge & Kanji */}
                    <div className="flex items-center gap-1.5">
                      <span className="text-[10px] px-1.5 py-0.5 rounded bg-[#ff3838]/15 border border-[#ff3838]/30 text-[#ff7844] font-mono">
                        {category.kanji}
                      </span>
                      <span className="font-mono text-xs font-bold text-[#ff7844]">
                        {category.num}
                      </span>
                    </div>
                  </div>

                  {/* Category Title & Subtitle */}
                  <div className="mb-4">
                    <p className="text-[10px] font-mono tracking-widest text-zinc-400 uppercase">
                      {category.subtitle[lang as "en" | "id"] || category.subtitle.en}
                    </p>
                    <h3 className="font-display text-2xl sm:text-3xl uppercase leading-tight tracking-wide text-white group-hover:text-[#ff7675] transition-colors mt-0.5">
                      {category.title[lang as "en" | "id"] || category.title.en}
                    </h3>
                    <p className="text-xs text-zinc-400 mt-1 leading-relaxed line-clamp-2">
                      {category.description[lang as "en" | "id"] || category.description.en}
                    </p>
                  </div>

                  {/* Thin Divider */}
                  <div className="h-px w-full bg-gradient-to-r from-white/10 via-[#ff3838]/30 to-transparent mb-4" />

                  {/* Skill Items List */}
                  <div className="space-y-2">
                    {category.skills.map((skill: SkillItem) => {
                      const Icon = getSkillIcon(skill.name);

                      // Indicator Badge Styling based on level
                      const badgeConfig = {
                        CORE: {
                          bg: "bg-[#ff3838]/15 border-[#ff3838]/40 text-[#ff6b6b] shadow-[0_0_8px_rgba(255,56,56,0.25)]",
                          dot: "bg-[#ff3838] animate-pulse shadow-[0_0_6px_#ff3838]",
                        },
                        ACTIVE: {
                          bg: "bg-[#ff7844]/15 border-[#ff7844]/35 text-[#ff9f43]",
                          dot: "bg-[#ff7844]",
                        },
                        EXPLORING: {
                          bg: "bg-white/5 border-white/15 text-zinc-400",
                          dot: "bg-zinc-500",
                        },
                      }[skill.level];

                      return (
                        <div
                          key={skill.name}
                          className="flex items-center justify-between py-1.5 px-2.5 rounded-lg bg-[#180e11]/70 hover:bg-[#201115] border border-white/5 hover:border-[#ff3838]/40 transition-all duration-200 group/item"
                        >
                          {/* Skill Icon & Name */}
                          <div className="flex items-center gap-2.5 min-w-0 pr-2">
                            <div className="w-5 h-5 flex items-center justify-center shrink-0">
                              <Icon className="w-4 h-4 object-contain" />
                            </div>
                            <span className="text-xs sm:text-sm font-medium text-zinc-200 group-hover/item:text-white transition-colors truncate">
                              {skill.name}
                            </span>
                          </div>

                          {/* Descriptive Indicator Badge */}
                          <span
                            className={`inline-flex items-center gap-1.5 text-[9px] sm:text-[10px] font-mono font-semibold px-2 py-0.5 rounded-full border shrink-0 tracking-wider ${badgeConfig.bg}`}
                          >
                            <span className={`w-1.5 h-1.5 rounded-full ${badgeConfig.dot}`} />
                            <span>{skill.level}</span>
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
