"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Github } from "lucide-react";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { useIntro } from "@/components/intro/IntroContext";
import { ShurikenIcon, KunaiIcon } from "@/components/ornaments/KonohaIcons";
import { CharacterReveal } from "@/components/CharacterReveal";
import { AnimatedDock, type DockItem } from "@/components/ui/animated-dock";
import { HyperText } from "@/components/ui/hyper-text";
import {
  ReactIcon,
  TypeScriptIcon,
  PythonIcon,
  NextJsIcon,
  TailwindIcon,
  NodeJsIcon,
  AiLlmIcon,
  EthereumIcon,
  SolanaIcon,
  AptosIcon,
  SuiIcon,
} from "@/components/icons/BrandIcons";

export function Hero() {
  const { t } = useLanguage();
  const { phase, isComplete } = useIntro();

  // Reveal stages synchronized with CinematicIntro sequence
  const showCharacter = isComplete || phase === "shinobi" || phase === "identity" || phase === "transition";
  const showHeroUI = isComplete || phase === "identity" || phase === "transition";

  // Identity alternating transition: 0 = "PAMANSAM", 1 = "FERDY A"
  const [identityIndex, setIdentityIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIdentityIndex((prev) => (prev === 0 ? 1 : 0));
    }, 3500);

    return () => clearInterval(timer);
  }, []);

  const isPamanSam = identityIndex === 0;
  const firstName = isPamanSam ? "PAMAN" : "FERDY";
  const accentName = isPamanSam ? "SAM" : "A";

  const techStackItems: DockItem[] = [
    { name: "React", icon: ReactIcon },
    { name: "TypeScript", icon: TypeScriptIcon },
    { name: "Python", icon: PythonIcon },
    { name: "Next.js", icon: NextJsIcon },
    { name: "Tailwind CSS", icon: TailwindIcon },
    { name: "Node.js", icon: NodeJsIcon },
    { name: "AI / LLM", icon: AiLlmIcon },
  ];

  const blockchainItems: DockItem[] = [
    { name: "Ethereum", icon: EthereumIcon },
    { name: "Solana", icon: SolanaIcon },
    { name: "Aptos", icon: AptosIcon },
    { name: "Sui", icon: SuiIcon },
  ];

  return (
    <section
      id="home"
      className="relative z-10 flex flex-col justify-center min-h-screen pt-24 sm:pt-28 pb-12 sm:pb-16 px-4 sm:px-8 lg:px-14 overflow-hidden bg-[#0a0607]"
    >
      {/* Anchor alias for backwards compatibility */}
      <div id="hero" className="absolute top-0 pointer-events-none" />

      {/* ========================================================
          UNIFIED CINEMATIC SCENE STAGE (2:1 NATIVE COORDINATES: 1024x512)
          Background & Character share this single coordinate space.
          Camera framing adapts dynamically to aspect ratio.
          ======================================================== */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden z-0">
        <div
          className="absolute pointer-events-none h-full aspect-[2/1] min-w-full bottom-0 left-[55%] -translate-x-[70%] lg:left-auto lg:right-0 lg:translate-x-0"
        >
          {/* Layer 1: Konoha Sunset Landscape (1024x512) */}
          <img
            src="/images/konoha-background.webp"
            alt="Cinematic Konoha Sunset Landscape"
            className="w-full h-full object-fill block filter brightness-95 contrast-105 pointer-events-none select-none"
          />

          {/* Layer 2: Character Anchor (Permanently locked to the cliff ledge) */}
          <motion.div
            initial={false}
            animate={{
              opacity: showCharacter ? 1 : 0,
              scale: showCharacter ? 1 : 0.95,
            }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="absolute pointer-events-auto z-20"
            style={{
              left: "48.34%",
              top: "9.77%",
              width: "51.0%",
              height: "67.93%",
            }}
          >
            <CharacterReveal
              narutoSrc="/images/naruto-character.png"
              pamanSamSrc="/images/pamansam-character.png"
              className="w-full h-full"
            />
          </motion.div>
        </div>

        {/* Ambient Gradient Overlays for Razor-Sharp Typography Contrast */}
        {/* Mobile top dark gradient for navbar & hero title */}
        <div className="lg:hidden absolute top-0 inset-x-0 h-48 bg-gradient-to-b from-[#0a0607]/95 via-[#0a0607]/75 to-transparent pointer-events-none z-10" />

        {/* Desktop left dark gradient for 2-column text contrast */}
        <div className="hidden lg:block absolute inset-y-0 left-0 w-[52%] bg-gradient-to-r from-[#0a0607]/90 via-[#0a0607]/50 to-transparent pointer-events-none z-10" />

        {/* Top vignette for navbar */}
        <div className="hidden lg:block absolute top-0 inset-x-0 h-24 sm:h-28 bg-gradient-to-b from-[#0a0607]/80 to-transparent pointer-events-none z-10" />

        {/* Bottom vignette fading seamlessly into About section */}
        <div className="absolute bottom-0 inset-x-0 h-32 sm:h-40 bg-gradient-to-t from-[#0a0607] via-[#0a0607]/85 to-transparent pointer-events-none z-10" />
      </div>

      {/* ========================================================
          RESPONSIVE 2-COLUMN / 1-COLUMN ADAPTIVE GRID
          Desktop: 7 cols Left (Content) / 5 cols Right (Clear for Scene)
          Mobile & Tablet: Clean Stack (Title -> Scene Spacer -> Details)
          ======================================================== */}
      <div className="relative z-20 mx-auto w-full max-w-7xl flex flex-col justify-center my-auto pointer-events-none">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-6 lg:gap-y-6 lg:gap-x-8 items-center">
          
          {/* ── PART 1: IDENTITY & TITLE (TOP ON MOBILE / LEFT ON DESKTOP) ── */}
          <motion.div
            initial={false}
            animate={{
              opacity: showHeroUI ? 1 : 0,
              y: showHeroUI ? 0 : 20,
            }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 lg:col-start-1 lg:row-start-1 flex flex-col items-start text-left z-20 max-w-xl lg:max-w-none pointer-events-auto"
          >
            {/* Japanese Subtitle with Slowly Rotating Shuriken */}
            <div className="mb-2 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#160c0e]/80 border border-[#ff3838]/30 shadow-[0_0_15px_rgba(255,56,56,0.25)] backdrop-blur-md">
              <ShurikenIcon className="w-3.5 h-3.5 text-[#ff7844] animate-spin-slow drop-shadow-[0_0_8px_rgba(255,120,68,0.8)]" />
              <span className="text-xs sm:text-sm font-semibold tracking-[0.25em] text-[#ff7844] drop-shadow-[0_0_12px_rgba(255,120,68,0.7)]">
                ウェブ3デベロッパー
              </span>
              <span className="text-[10px] font-mono text-zinc-500">• 忍 SHINOBI</span>
            </div>

            {/* Alternating Identity Heading with Fluid Sizing */}
            <h1 className="flex items-baseline tracking-tight font-extrabold text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-white select-none leading-none">
              <HyperText
                text={firstName}
                duration={650}
                className="text-white font-extrabold tracking-tight"
              />
              <span className="relative ml-2 sm:ml-3 italic text-[#ff3333] drop-shadow-[0_0_30px_rgba(255,51,51,0.85)] font-display tracking-normal inline-flex items-baseline min-w-[1.8ch] sm:min-w-[2.2ch]">
                <HyperText
                  text={accentName}
                  duration={650}
                  className="text-[#ff3333]"
                />
                {/* Red Calligraphy Brush Swoosh Underline */}
                <svg
                  viewBox="0 0 140 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute -bottom-2 -right-1 w-24 sm:w-40 h-3.5 sm:h-4 text-[#ff3333] pointer-events-none"
                >
                  <path
                    d="M5 12C35 4, 85 6, 135 15C100 12, 60 16, 20 18"
                    stroke="currentColor"
                    strokeWidth="4"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </h1>

            {/* Subtitle with bullet dividers */}
            <p className="mt-3 sm:mt-4 text-sm sm:text-lg md:text-xl font-medium text-zinc-100 tracking-wide flex flex-wrap items-center gap-2 sm:gap-3">
              <span>Web3 Developer</span>
              <span className="text-[#ff3838] font-bold">•</span>
              <span>AI Builder</span>
              <span className="text-[#ff3838] font-bold">•</span>
              <span>Indie Hacker</span>
            </p>
          </motion.div>

          {/* ── PART 2: INTERACTIVE SCENE VIEWING WINDOW ──
              Mobile/Tablet: Height reserved so Naruto on the rock is clearly visible and interactable
              Desktop: Takes right 5 columns over the Scene Stage
          ─────────────────────────────────────────────────── */}
          <div className="h-[240px] sm:h-[300px] lg:h-auto lg:col-span-5 lg:col-start-8 lg:row-start-1 lg:row-span-2 pointer-events-none" />

          {/* ── PART 3: DESCRIPTION, ACTION BUTTONS & SKILL DOCKS ── */}
          <motion.div
            initial={false}
            animate={{
              opacity: showHeroUI ? 1 : 0,
              y: showHeroUI ? 0 : 20,
            }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 lg:col-start-1 lg:row-start-2 flex flex-col items-start text-left z-20 max-w-xl lg:max-w-none pointer-events-auto"
          >
            {/* Description Paragraph */}
            <p className="text-sm sm:text-base leading-relaxed text-zinc-300 max-w-lg">
              Building onchain products, AI agents, and creative tools that bridge real utility with Web3 innovation.
            </p>

            {/* View Projects and GitHub Buttons with Chakra Glow */}
            <div className="mt-6 sm:mt-7 flex flex-wrap items-center gap-3.5 sm:gap-4">
              <a
                href="#projects"
                className="group relative inline-flex items-center gap-2.5 px-5 sm:px-6 py-2.5 sm:py-3 rounded-full text-sm sm:text-base font-semibold text-white bg-gradient-to-r from-[#e52e2e] via-[#ff3b3b] to-[#ff5722] shadow-[0_0_25px_rgba(229,46,46,0.55)] hover:shadow-[0_0_35px_rgba(255,59,59,0.85),0_0_45px_rgba(255,120,68,0.4)] hover:scale-105 transition-all"
              >
                <KunaiIcon className="w-4 h-4 text-white -rotate-45 group-hover:rotate-0 transition-transform duration-300" />
                <span>View Projects</span>
              </a>

              <a
                href="https://github.com/PamanSam01"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2.5 px-5 sm:px-6 py-2.5 sm:py-3 rounded-full text-sm sm:text-base font-medium text-zinc-200 bg-[#161011]/85 hover:bg-[#221618] border border-white/15 hover:border-[#ff3838]/60 shadow-lg hover:shadow-[0_0_25px_rgba(255,56,56,0.4)] hover:scale-105 transition-all"
              >
                <Github className="w-4 h-4 text-white group-hover:text-[#ff7844] transition-colors" />
                <span>GitHub</span>
              </a>
            </div>

            {/* Two Categorized Animated Skill Docks */}
            <div className="mt-6 sm:mt-8 flex flex-col gap-3.5 w-full max-w-xl">
              <AnimatedDock label="TECH STACK" items={techStackItems} />
              <AnimatedDock label="BLOCKCHAIN ECOSYSTEM" items={blockchainItems} />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
