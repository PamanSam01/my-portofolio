"use client";

import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import {
  KonohaLeafIcon,
  ShurikenIcon,
  SealingStamp,
  CloudWatermark,
} from "@/components/ornaments/KonohaIcons";
import {
  ChevronDown,
  Wrench,
  Compass,
  Code2,
  Terminal,
  Bot,
  Calendar,
  CheckCircle2,
  Sparkles,
  Quote,
  BookOpen,
  ArrowRight,
} from "lucide-react";

export interface ShinobiMilestone {
  id: string;
  year: string;
  kanjiChapter: string;
  chapterNumber: string;
  sealKanji: string;
  icon: any;
  badge: { en: string; id: string };
  title: { en: string; id: string };
  tagline: { en: string; id: string };
  summary: { en: string; id: string };
  details: {
    en: {
      story: string;
      focusAreas: string[];
      reflection: string;
      attestation: string;
    };
    id: {
      story: string;
      focusAreas: string[];
      reflection: string;
      attestation: string;
    };
  };
  tags: string[];
  status: "verified" | "exploration" | "builder" | "current";
  statusLabel: { en: string; id: string };
}

export const shinobiMilestones: ShinobiMilestone[] = [
  {
    id: "milestone-2015",
    year: "2015",
    kanjiChapter: "巻ノ一",
    chapterNumber: "CHAPTER 01",
    sealKanji: "基",
    icon: Wrench,
    badge: {
      en: "FOUNDATIONAL DISCIPLINE",
      id: "DISIPLIN DASAR",
    },
    title: {
      en: "Automotive Vocational Competency",
      id: "Uji Kompetensi Kejuruan Otomotif",
    },
    tagline: {
      en: "Tunas Toyota × SMK Mahardhika Bandung Barat",
      id: "Tunas Toyota × SMK Mahardhika Bandung Barat",
    },
    summary: {
      en: "Passed industrial vocational competency assessment in automotive engineering with a Satisfactory result, establishing core discipline in mechanical precision, electrical diagnostics, and systematic troubleshooting.",
      id: "Menyelesaikan uji kompetensi kejuruan industri bidang otomotif dengan predikat Memuaskan, membentuk disiplin utama presisi mekanikal, diagnostik kelistrikan, dan pemecahan masalah sistematis.",
    },
    details: {
      en: {
        story:
          "Trained under Tunas Toyota's industrial assessment curriculum at SMK Mahardhika. Rigorously tested across petrol engine tune-ups (score 91), manual transmission maintenance & repair (score 98), and vehicle body electrical systems (score 100). This hands-on mechanical era established an obsessive respect for system tolerances, tracing electrical faults down to the schematic level, and understanding complex physical machines.",
        focusAreas: [
          "Petrol Engine Diagnostics",
          "Manual Transmission Systems",
          "Body Electrical Wiring & Diagnostics",
          "Schematic Analysis & Fault Isolation",
        ],
        reflection:
          "Real engineering isn't guesswork; it's understanding every circuit and mechanical link under the hood before turning the key.",
        attestation:
          "Verified Document: Certificate No. TUNAS/TYT-CM/UJK-SMK-MHD/1500013 (Available in Credentials archive)",
      },
      id: {
        story:
          "Menjalani kurikulum pelatihan dan uji kompetensi industri resmi Tunas Toyota di SMK Mahardhika. Diuji secara ketat pada tune-up mesin bensin (nilai 91), perawatan & perbaikan transmisi manual (nilai 98), dan sistem kelistrikan bodi kendaraan (nilai 100). Era mekanikal ini menanamkan kebiasaan teliti menganalisis toleransi sistem, melacak korsleting hingga tingkat skematik, dan memahami mesin kompleks.",
        focusAreas: [
          "Diagnostik Mesin Bensin",
          "Sistem Transmisi Manual",
          "Kelistrikan Bodi & Wiring",
          "Analisis Skematik & Isolasi Masalah",
        ],
        reflection:
          "Rekayasa sejati bukanlah tebakan; ini tentang memahami setiap sirkuit dan mata rantai mekanis di balik sistem sebelum menyalakan mesin.",
        attestation:
          "Dokumen Terverifikasi: Sertifikat No. TUNAS/TYT-CM/UJK-SMK-MHD/1500013 (Tersedia di arsip Credentials)",
      },
    },
    tags: ["Precision Mechanics", "Electrical Systems", "Toyota Standards", "Diagnostics"],
    status: "verified",
    statusLabel: {
      en: "OFFICIALLY VERIFIED",
      id: "TERVERIFIKASI RESMI",
    },
  },
  {
    id: "milestone-2023-2024",
    year: "2023 — 2024",
    kanjiChapter: "巻ノ二",
    chapterNumber: "CHAPTER 02",
    sealKanji: "探",
    icon: Compass,
    badge: {
      en: "DIGITAL FRONTIER",
      id: "BATAS DIGITAL",
    },
    title: {
      en: "Web3 Ecosystem Exploration",
      id: "Eksplorasi Ekosistem Web3",
    },
    tagline: {
      en: "Decentralized Protocols & Digital Identity",
      id: "Protokol Desentralisasi & Identitas Digital",
    },
    summary: {
      en: "Entered the decentralized frontier through community immersion, onchain governance, testnet participation, and exploring how blockchain redefines digital ownership, censorship-resistance, and identity.",
      id: "Memasuki dunia desentralisasi melalui partisipasi komunitas, tata kelola onchain, keterlibatan testnet, dan mempelajari bagaimana blockchain meredefinisi kepemilikan digital serta kedaulatan data.",
    },
    details: {
      en: {
        story:
          "Immersed deeply in Web3 developer networks, Discord alpha guilds, and early testnet protocol deployments. Explored how cryptographic state machines, EVM gas mechanics, smart contract events, and non-custodial wallets give users verifiable sovereignty. Formed the bridge from consumer interest to independent creator ambitions.",
        focusAreas: [
          "Blockchain & Distributed Ledger Concepts",
          "EVM Architecture & Gas Dynamics",
          "Wallet UX & Key Management",
          "Community DAO Governance & Onchain Culture",
        ],
        reflection:
          "Understanding onchain rails shifted my perspective from passive internet consumption to wanting to craft tools that guarantee user autonomy.",
        attestation: "Exploration Phase (Self-Directed Research & Active Community Contribution)",
      },
      id: {
        story:
          "Mendalami jaringan pengembang Web3, guild komunitas Discord, dan pengujian protokol testnet awal. Mempelajari bagaimana mesin status kriptografis, dinamika gas EVM, event smart contract, dan dompet non-kustodian memberi pengguna kedaulatan yang dapat diverifikasi secara matematis.",
        focusAreas: [
          "Konsep Blockchain & Buku Besar Terdistribusi",
          "Arsitektur EVM & Mekanisme Gas",
          "UX Dompet & Pengelolaan Kunci",
          "Tata Kelola DAO & Budaya Onchain",
        ],
        reflection:
          "Memahami protokol onchain mengubah cara pandang saya dari sekadar pengguna pasif menjadi keinginan menciptakan produk yang memberi kemandirian nyata.",
        attestation: "Fase Eksplorasi (Riset Mandiri & Partisipasi Aktif Komunitas)",
      },
    },
    tags: ["Web3 Culture", "EVM", "Wallets", "Decentralization", "Onchain"],
    status: "exploration",
    statusLabel: {
      en: "ECOSYSTEM EXPLORER",
      id: "PENJELAJAH EKOSISTEM",
    },
  },
  {
    id: "milestone-2024-2025",
    year: "2024 — 2025",
    kanjiChapter: "巻ノ三",
    chapterNumber: "CHAPTER 03",
    sealKanji: "創",
    icon: Code2,
    badge: {
      en: "SHINOBI CRAFTSMAN",
      id: "PENGRAJIN SHINOBI",
    },
    title: {
      en: "Onchain Builder & Tactile Frontend Craft",
      id: "Onchain Builder & UI Sinematik",
    },
    tagline: {
      en: "Multi-Chain dApps & Immersive Interfaces",
      id: "dApp Multi-Chain & Antarmuka Imersif",
    },
    summary: {
      en: "Transitioned from observer to active builder: crafting tactile, high-performance web frontends, interactive Three.js environments, and multi-chain dApp integrations across Ethereum, Solana, Aptos, and Sui networks.",
      id: "Beralih dari pengamat menjadi pembuat aktif: merancang antarmuka web taktis berkinerja tinggi, atmosfer Three.js interaktif, dan integrasi dApp multi-chain di jaringan Ethereum, Solana, Aptos, dan Sui.",
    },
    details: {
      en: {
        story:
          "Applied mechanical precision to modern frontend engineering. Architected reactive, bespoke Web3 web applications using Next.js, React, and TypeScript styled with Tailwind CSS, orchestrated with GSAP & Framer Motion, and enriched with anime-inspired cinematic atmospheres. Integrated smart contract ABIs, RPC connections, and multi-chain ecosystems (EVM, Solana @solana/web3.js, Sui @mysten/sui, and Aptos TS SDK).",
        focusAreas: [
          "React 18 & Next.js App Router",
          "TypeScript Strict Typing",
          "Tailwind CSS & Bespoke Design Systems",
          "GSAP, Framer Motion & Three.js Canvas",
          "Multi-Chain Integration (EVM, Solana, Sui, Aptos)",
        ],
        reflection:
          "A decentralized application shouldn't feel like a cold corporate spreadsheet; it should feel alive, responsive, tactile, and cinematic.",
        attestation: "Active Codebases & Deployed Web Applications (PamanSam Portfolio & Multi-Chain Docks)",
      },
      id: {
        story:
          "Menerapkan presisi mekanikal ke dalam rekayasa frontend modern. Merancang aplikasi web Web3 reaktif menggunakan Next.js, React, dan TypeScript dengan Tailwind CSS, animasi GSAP & Framer Motion, serta diperkaya atmosfer sinematik Three.js bernuansa anime. Mengintegrasikan ABI smart contract, koneksi RPC, dan ekosistem multi-chain (EVM, Solana, Sui, dan Aptos).",
        focusAreas: [
          "React 18 & Next.js App Router",
          "TypeScript Strict Typing",
          "Tailwind CSS & Desain Sistem Kustom",
          "Animasi GSAP, Framer Motion & Three.js Canvas",
          "Integrasi Multi-Chain (EVM, Solana, Sui, Aptos)",
        ],
        reflection:
          "Aplikasi desentralisasi tidak seharusnya terasa kaku seperti lembar akuntansi dingin; antarmuka harus terasa hidup, responsif, taktis, dan sinematik.",
        attestation: "Basis Kode Aktif & Aplikasi Web Terdeploy (Portofolio PamanSam & Dok Multi-Chain)",
      },
    },
    tags: ["React", "Next.js", "TypeScript", "Tailwind", "Solana", "Sui", "Aptos"],
    status: "builder",
    statusLabel: {
      en: "ACTIVE BUILDER",
      id: "PEMBUAT AKTIF",
    },
  },
  {
    id: "milestone-2025",
    year: "2025",
    kanjiChapter: "巻ノ四",
    chapterNumber: "CHAPTER 04",
    sealKanji: "術",
    icon: Terminal,
    badge: {
      en: "CHAKRA EXPANSION",
      id: "EKSPANSI KEKUATAN",
    },
    title: {
      en: "AI & Automation Exploration",
      id: "Eksplorasi AI & Otomasi Sistem",
    },
    tagline: {
      en: "Python Backends, FastAPI & Agentic Scripts",
      id: "Backend Python, FastAPI & Skrip Agentik",
    },
    summary: {
      en: "Expanded beyond frontend frontiers into Python backend engineering, FastAPI services, PostgreSQL databases, automated workflows, and LLM integrations to maximize builder leverage as an independent developer from Indonesia.",
      id: "Melangkah melampaui ranah frontend menuju rekayasa backend Python, layanan FastAPI, database PostgreSQL, alur kerja otomatis, dan integrasi LLM untuk melipatgandakan daya cipta mandiri.",
    },
    details: {
      en: {
        story:
          "Recognized that solo builders achieve immense creative leverage by orchestrating intelligent automation. Developed asynchronous backend microservices in Python using FastAPI, structured relational schemas in PostgreSQL, deployed Linux VPS servers, and engineered prompts and scripts that automate repetitive development cycles. Experimented with local model inference and cloud AI APIs to power real-time data enrichment.",
        focusAreas: [
          "Python 3 Systems & Scripting",
          "FastAPI Asynchronous Microservices",
          "PostgreSQL Relational Design",
          "Linux Server Administration & VPS Deployment",
          "Prompt Orchestration & Developer Automation",
        ],
        reflection:
          "AI does not replace the artisan; it acts as a chakra amplifier that turns a solo ninja into an entire autonomous squad.",
        attestation: "System Architecture & Automation Pipelines (FastAPI Workflows & Scripts)",
      },
      id: {
        story:
          "Menyadari bahwa builder mandiri memperoleh daya ungkit luar biasa lewat otomasi cerdas. Mengembangkan layanan mikro backend asinkron dengan Python dan FastAPI, merancang skema relasional PostgreSQL, mengelola server VPS Linux, serta merancang skrip yang mengotomasi siklus pengembangan berulang. Mengeksplorasi inferensi model lokal dan API AI cloud untuk pengayaan data real-time.",
        focusAreas: [
          "Sistem & Skrip Python 3",
          "Layanan Mikro Asinkron FastAPI",
          "Desain Relasional PostgreSQL",
          "Administrasi Server Linux & Deployment VPS",
          "Orkestrasi Prompt & Otomasi Pengembang",
        ],
        reflection:
          "AI bukan pengganti sang pengrajin; AI adalah pelipat ganda chakra yang mengubah seorang shinobi tunggal menjadi satu skuad otonom penuh.",
        attestation: "Arsitektur Sistem & Pipeline Otomasi (Alur Kerja FastAPI & Skrip)",
      },
    },
    tags: ["Python", "FastAPI", "PostgreSQL", "Linux", "Automation", "LLM APIs"],
    status: "builder",
    statusLabel: {
      en: "SYSTEMS BUILDER",
      id: "ARSITEK SISTEM",
    },
  },
  {
    id: "milestone-2026",
    year: "2026",
    kanjiChapter: "巻ノ五",
    chapterNumber: "CHAPTER 05",
    sealKanji: "極",
    icon: Bot,
    badge: {
      en: "CURRENT FRONTIER",
      id: "GARIS DEPAN SAAT INI",
    },
    title: {
      en: "AI Agent Development & #JuaraVibeCoding",
      id: "Pengembangan AI Agent & #JuaraVibeCoding",
    },
    tagline: {
      en: "Autonomous Agents, Hermes & Google Developer Groups",
      id: "Agen Otonom, Hermes & Google Developer Groups",
    },
    summary: {
      en: "Developing autonomous AI agent workflows (Hermes Agent) and actively participating in Google Developer Groups' #JuaraVibeCoding, bridging conversational machine cognition with reactive, cinematic web frontends.",
      id: "Mengembangkan alur kerja agen AI otonom (Hermes Agent) dan berpartisipasi aktif dalam #JuaraVibeCoding Google Developer Groups, memadukan kognisi mesin percakapan dengan frontend web sinematik yang reaktif.",
    },
    details: {
      en: {
        story:
          "Pushing into autonomous agent architectures capable of multi-step reasoning, external tool invocation, and self-correcting task execution. Earned official recognition as an active participant in Google Developer Groups' #JuaraVibeCoding initiative (verified certificate issued May 2026). Currently advancing agent workflows with Hermes Agent, pairing fast prototyping with deep fullstack craft.",
        focusAreas: [
          "Autonomous Agent Architectures",
          "Hermes Agent Framework Integration",
          "Google Cloud & Gemini API Interactions",
          "Rapid AI Vibe Coding & Prototyping",
          "Agent-Assisted Fullstack Development",
        ],
        reflection:
          "The future belongs to builders who can synthesize physical engineering discipline, decentralized rails, and machine cognition into experiences that feel effortless.",
        attestation:
          "Verified Attestation: Google Developer Groups #JuaraVibeCoding Certificate (Credential ID: JVC2605-WQRZ-JWRT)",
      },
      id: {
        story:
          "Menjelajahi arsitektur agen otonom yang mampu bernalar bertahap, memanggil alat kerja eksternal, dan mengeksekusi tugas secara adaptif. Meraih pengakuan resmi sebagai partisipan aktif dalam inisiatif Google Developer Groups #JuaraVibeCoding (sertifikat terverifikasi terbit Mei 2026). Saat ini terus memajukan integrasi Hermes Agent, memadukan prototyping cepat dengan ketelitian rekayasa fullstack.",
        focusAreas: [
          "Arsitektur Agen AI Otonom",
          "Integrasi Framework Hermes Agent",
          "Interaksi Google Cloud & Gemini API",
          "Prototyping Cepat AI Vibe Coding",
          "Pengembangan Fullstack Berbantuan Agen",
        ],
        reflection:
          "Masa depan milik builder yang mampu memadukan disiplin rekayasa fisik, fondasi desentralisasi, dan kognisi mesin menjadi pengalaman digital yang memukau.",
        attestation:
          "Atribusi Terverifikasi: Sertifikat Google Developer Groups #JuaraVibeCoding (ID: JVC2605-WQRZ-JWRT)",
      },
    },
    tags: ["AI Agents", "Hermes Agent", "#JuaraVibeCoding", "Google Dev Groups", "Gemini API"],
    status: "current",
    statusLabel: {
      en: "ACTIVE MISSION • CURRENT",
      id: "MISI BERJALAN • AKTIF",
    },
  },
];

export function Experience() {
  const { lang } = useLanguage();
  const shouldReduceMotion = useReducedMotion();
  const [expandedIds, setExpandedIds] = useState<Record<string, boolean>>({
    "milestone-2026": true, // Expand current active frontier by default
  });

  const toggleExpand = (id: string) => {
    setExpandedIds((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const expandAll = () => {
    const allExpanded = shinobiMilestones.reduce((acc, item) => {
      acc[item.id] = true;
      return acc;
    }, {} as Record<string, boolean>);
    setExpandedIds(allExpanded);
  };

  const collapseAll = () => {
    setExpandedIds({});
  };

  const isAllExpanded = shinobiMilestones.every((item) => expandedIds[item.id]);

  return (
    <section
      id="blog"
      className="relative z-10 px-5 py-20 md:py-32 text-white sm:px-8 lg:px-14 bg-[#0a0607] border-t border-[#ff3838]/15 overflow-hidden"
    >
      {/* Anchor aliases for backwards compatibility and seamless navbar linking */}
      <div id="experience" className="absolute top-0 pointer-events-none" />
      <div id="milestones" className="absolute top-0 pointer-events-none" />

      {/* Atmospheric ambient glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-[#ff3838]/5 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 w-[500px] h-[500px] bg-[#ff7844]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative mx-auto max-w-6xl z-10">
        {/* ========================================================
            SECTION HEADER: Japanese Subtitle + Main Title + Desc
            ======================================================== */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 sm:mb-24">
          <div className="flex flex-col items-start max-w-2xl">
            <div className="flex items-center gap-2.5 mb-2.5">
              <span className="h-[2px] w-8 bg-[#ff3838]" />
              <span className="text-xs sm:text-sm font-semibold tracking-[0.25em] text-[#ff3838] uppercase drop-shadow-[0_0_10px_rgba(255,56,56,0.7)] flex items-center gap-1.5">
                <ShurikenIcon className="w-3.5 h-3.5 text-[#ff7844] animate-spin-slow" />
                <span>忍の軌跡 • SHINOBI JOURNEY CHRONICLE</span>
              </span>
              <span className="h-[2px] w-8 bg-[#ff3838]" />
            </div>

            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white font-display">
              {lang === "id" ? "Linimasa Perjalanan" : "Milestones & Journey"}
            </h2>

            <p className="mt-4 text-sm sm:text-base text-zinc-400 leading-relaxed">
              {lang === "id"
                ? "Catatan linimasa perjalanan seorang builder mandiri dari Indonesia: berakar dari disiplin rekayasa mekanikal otomotif, menjelajah Web3 multi-chain, hingga merakit sistem otomasi dan agen AI cerdas."
                : "A chronological shinobi mission archive of an independent builder from Indonesia: anchored in physical mechanical discipline, multi-chain Web3 exploration, and autonomous AI agent systems."}
            </p>
          </div>

          {/* Quick Expand / Collapse Controls */}
          <div className="flex items-center gap-2 shrink-0">
            <button
              type="button"
              onClick={isAllExpanded ? collapseAll : expandAll}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-medium text-zinc-300 hover:text-white bg-[#140b0d] border border-white/10 hover:border-[#ff3838]/50 shadow-[0_0_15px_rgba(0,0,0,0.5)] transition-all cursor-pointer"
            >
              <BookOpen className="w-3.5 h-3.5 text-[#ff7844]" />
              <span>
                {isAllExpanded
                  ? lang === "id"
                    ? "Tutup Semua Gulungan"
                    : "Collapse All Scrolls"
                  : lang === "id"
                  ? "Buka Semua Gulungan"
                  : "Expand All Scrolls"}
              </span>
            </button>
          </div>
        </div>

        {/* ========================================================
            CHAKRA TIMELINE CONTAINER
            ======================================================== */}
        <div className="relative">
          {/* Top Sealing Knot */}
          <div className="absolute -top-3 left-6 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-[#ff3838] border-2 border-[#120a0d] shadow-[0_0_16px_#ff3838] z-20 flex items-center justify-center">
            <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
          </div>

          {/* Red Glowing Chakra Spine Line */}
          <div className="absolute top-0 bottom-0 left-6 md:left-1/2 -translate-x-1/2 w-[3px] bg-gradient-to-b from-[#ff3838] via-[#ff7844] via-60% to-[#ff3838]/30 shadow-[0_0_14px_rgba(255,56,56,0.65)]" />

          {/* Bottom Sealing Knot */}
          <div className="absolute -bottom-3 left-6 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-[#ff7844] border-2 border-[#120a0d] shadow-[0_0_16px_#ff7844] z-20 flex items-center justify-center">
            <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
          </div>

          {/* Milestones List */}
          <div className="flex flex-col gap-12 sm:gap-16 pt-6 pb-8">
            {shinobiMilestones.map((milestone, index) => {
              const isEven = index % 2 === 0;
              const isExpanded = Boolean(expandedIds[milestone.id]);
              const Icon = milestone.icon;
              const isCurrent = milestone.status === "current";

              return (
                <motion.article
                  key={milestone.id}
                  initial={
                    shouldReduceMotion
                      ? { opacity: 0 }
                      : { opacity: 0, y: 40, x: isEven ? -30 : 30 }
                  }
                  whileInView={{ opacity: 1, y: 0, x: 0 }}
                  viewport={{ once: true, margin: "-10%" }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  className={`relative grid gap-6 md:grid-cols-2 items-start ${
                    isEven ? "" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Central Node on Chakra Spine */}
                  <div
                    className={`absolute left-6 top-8 md:left-1/2 -translate-x-1/2 flex items-center justify-center w-11 h-11 rounded-full z-20 group transition-all duration-300 ${
                      isCurrent
                        ? "bg-[#251014] border-2 border-[#ff3838] shadow-[0_0_25px_rgba(255,56,56,0.9)]"
                        : "bg-[#140b0d] border-2 border-[#ff3838]/70 hover:border-[#ff3838] shadow-[0_0_15px_rgba(255,56,56,0.4)]"
                    }`}
                  >
                    {/* Ambient pulse halo for current mission */}
                    {isCurrent && (
                      <div className="absolute -inset-1.5 rounded-full bg-[#ff3838]/30 blur-sm animate-ping pointer-events-none" />
                    )}
                    <Icon
                      className={`w-5 h-5 transition-transform group-hover:scale-110 ${
                        isCurrent ? "text-[#ff3838] animate-pulse" : "text-[#ff7844]"
                      }`}
                    />
                  </div>

                  {/* Card Container */}
                  <div
                    className={`pl-11 sm:pl-14 md:pl-0 ${
                      isEven
                        ? "md:pr-12 md:text-left"
                        : "md:col-start-2 md:pl-12 md:text-left"
                    }`}
                  >
                    <div className="group relative overflow-hidden rounded-2xl bg-[#120a0d]/90 border border-[#ff3838]/25 hover:border-[#ff3838]/70 p-4 sm:p-7 shadow-[0_10px_35px_rgba(0,0,0,0.7)] hover:shadow-[0_0_35px_rgba(255,56,56,0.25)] backdrop-blur-xl transition-all duration-300">
                      {/* Ninja Scroll Corner Brackets */}
                      <div className="pointer-events-none absolute top-0 left-0 h-4 w-4 border-t-2 border-l-2 border-[#ff3838]/40 group-hover:border-[#ff3838] transition-colors" />
                      <div className="pointer-events-none absolute top-0 right-0 h-4 w-4 border-t-2 border-r-2 border-[#ff3838]/40 group-hover:border-[#ff3838] transition-colors" />
                      <div className="pointer-events-none absolute bottom-0 left-0 h-4 w-4 border-b-2 border-l-2 border-[#ff3838]/40 group-hover:border-[#ff3838] transition-colors" />
                      <div className="pointer-events-none absolute bottom-0 right-0 h-4 w-4 border-b-2 border-r-2 border-[#ff3838]/40 group-hover:border-[#ff3838] transition-colors" />

                      {/* Background Watermark */}
                      <div className="absolute -bottom-8 -right-8 text-[#ff3838] opacity-5 group-hover:opacity-10 transition-opacity pointer-events-none">
                        <CloudWatermark className="w-48 h-32" color="currentColor" />
                      </div>

                      {/* Kanji Seal Stamp (Top-Right) */}
                      <div className="absolute top-4 right-4 pointer-events-none">
                        <SealingStamp
                          label={milestone.sealKanji}
                          className="w-7 h-7 text-[11px] opacity-70 group-hover:opacity-100 transition-opacity"
                        />
                      </div>

                      {/* Header: Chapter, Year & Status */}
                      <div className="flex flex-wrap items-center gap-2 mb-3 pr-10">
                        {/* Chapter Calligraphy Badge */}
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded text-xs font-mono font-bold bg-[#ff3838]/15 border border-[#ff3838]/30 text-[#ff7844]">
                          <KonohaLeafIcon className="w-3 h-3 text-[#ff3838]" color="#ff3838" />
                          <span>{milestone.kanjiChapter}</span>
                          <span className="text-zinc-500">•</span>
                          <span>{milestone.chapterNumber}</span>
                        </span>

                        {/* Year Badge */}
                        <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded text-xs font-mono font-semibold bg-white/5 border border-white/10 text-white">
                          <Calendar className="w-3 h-3 text-[#ff7844]" />
                          <span>{milestone.year}</span>
                        </span>

                        {/* Mission Status Badge */}
                        <span
                          className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-mono tracking-wider uppercase ${
                            milestone.status === "verified"
                              ? "bg-emerald-500/15 border border-emerald-500/40 text-emerald-400"
                              : milestone.status === "current"
                              ? "bg-[#ff3838]/20 border border-[#ff3838]/60 text-[#ff7844] shadow-[0_0_12px_rgba(255,56,56,0.3)]"
                              : "bg-white/5 border border-white/10 text-zinc-400"
                          }`}
                        >
                          <span
                            className={`w-1.5 h-1.5 rounded-full ${
                              milestone.status === "verified"
                                ? "bg-emerald-400"
                                : milestone.status === "current"
                                ? "bg-[#ff3838] animate-pulse"
                                : "bg-amber-400"
                            }`}
                          />
                          <span>{milestone.statusLabel[lang as "en" | "id"]}</span>
                        </span>
                      </div>

                      {/* Title & Tagline */}
                      <h3 className="font-display text-2xl sm:text-3xl lg:text-4xl uppercase leading-tight tracking-wide text-white group-hover:text-[#ff6b6b] transition-colors mt-2">
                        {milestone.title[lang as "en" | "id"]}
                      </h3>

                      <p className="mt-1 text-xs sm:text-sm font-mono text-[#ff7844] tracking-wide">
                        {milestone.tagline[lang as "en" | "id"]}
                      </p>

                      {/* Main Summary */}
                      <p className="mt-3.5 text-xs sm:text-sm leading-relaxed text-zinc-300">
                        {milestone.summary[lang as "en" | "id"]}
                      </p>

                      {/* Tech Tags */}
                      <div className="mt-4 flex flex-wrap items-center gap-1.5">
                        {milestone.tags.map((tag, tagIdx) => (
                          <span
                            key={tagIdx}
                            className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 border border-white/10 text-zinc-400"
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>

                      {/* Expandable Mission Log Drawer */}
                      <button
                        type="button"
                        onClick={() => toggleExpand(milestone.id)}
                        className="w-full mt-5 pt-3.5 border-t border-white/10 flex items-center justify-between text-xs font-mono text-[#ff7844] hover:text-white transition-colors cursor-pointer group/btn"
                        aria-expanded={isExpanded}
                      >
                        <span className="flex items-center gap-2 font-semibold">
                          <BookOpen className="w-3.5 h-3.5 text-[#ff3838]" />
                          <span>
                            {isExpanded
                              ? lang === "id"
                                ? "Gulung Catatan Misi"
                                : "Roll Up Mission Chronicle"
                              : lang === "id"
                              ? "Buka Arsip Misi & Refleksi"
                              : "Unroll Mission Chronicle & Reflection"}
                          </span>
                        </span>
                        <ChevronDown
                          className={`w-4 h-4 text-zinc-400 group-hover/btn:text-white transition-transform duration-300 ${
                            isExpanded ? "rotate-180 text-[#ff3838]" : ""
                          }`}
                        />
                      </button>

                      {/* Expanded Content with Smooth Height Animation */}
                      <AnimatePresence>
                        {isExpanded && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden"
                          >
                            <div className="mt-4 pt-4 border-t border-white/5 flex flex-col gap-4 text-xs font-mono">
                              {/* Deep Dive Story */}
                              <div>
                                <span className="text-[10px] uppercase tracking-wider text-zinc-400 flex items-center gap-1.5 mb-1.5">
                                  <Sparkles className="w-3 h-3 text-[#ff3838]" />
                                  <span>{lang === "id" ? "Catatan Lapangan & Konteks" : "Mission Log & Context"}</span>
                                </span>
                                <p className="text-zinc-300 leading-relaxed font-sans text-xs sm:text-sm">
                                  {milestone.details[lang as "en" | "id"].story}
                                </p>
                              </div>

                              {/* Focus Areas */}
                              <div>
                                <span className="text-[10px] uppercase tracking-wider text-zinc-400 block mb-1.5">
                                  {lang === "id" ? "Disiplin & Lingkup Utama" : "Core Focus Areas"}
                                </span>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                                  {milestone.details[lang as "en" | "id"].focusAreas.map(
                                    (area, aIdx) => (
                                      <div
                                        key={aIdx}
                                        className="flex items-center gap-1.5 px-2.5 py-1.5 rounded bg-black/40 border border-white/10 text-zinc-300 text-[11px]"
                                      >
                                        <span className="w-1.5 h-1.5 rounded-full bg-[#ff3838]" />
                                        <span className="truncate">{area}</span>
                                      </div>
                                    )
                                  )}
                                </div>
                              </div>

                              {/* Philosophical Reflection Quote */}
                              <div className="relative p-3.5 rounded-xl bg-[#1b0e12]/80 border-l-2 border-[#ff3838] border-y border-r border-white/10 text-zinc-200">
                                <Quote className="w-4 h-4 text-[#ff3838] opacity-50 absolute top-2 right-2 pointer-events-none" />
                                <span className="text-[10px] uppercase text-[#ff7844] block mb-1">
                                  {lang === "id" ? "Refleksi Shinobi" : "Shinobi Reflection"}
                                </span>
                                <p className="italic text-zinc-300 font-sans text-xs leading-relaxed">
                                  &ldquo;{milestone.details[lang as "en" | "id"].reflection}&rdquo;
                                </p>
                              </div>

                              {/* Attestation / Ground Truth Note */}
                              <div className="flex items-start gap-2 pt-2 border-t border-white/5 text-[11px] text-zinc-400">
                                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                                <span className="leading-snug">
                                  <strong className="text-zinc-200">
                                    {lang === "id" ? "Bukti Terkait: " : "Attestation: "}
                                  </strong>
                                  {milestone.details[lang as "en" | "id"].attestation}
                                </span>
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>

        {/* Section Bottom Shinobi Oath / Footer Note */}
        <div className="mt-12 sm:mt-16 p-5 sm:p-6 rounded-2xl bg-[#110a0c]/60 border border-[#ff3838]/20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#ff3838]/10 border border-[#ff3838]/30 flex items-center justify-center text-[#ff3838] shrink-0">
              <ShurikenIcon className="w-5 h-5 text-[#ff7844]" />
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-semibold text-white">
                {lang === "id" ? "Evolusi Tanpa Batas — Jalan Ninja PamanSam" : "Continuous Evolution — The PamanSam Nindō"}
              </span>
              <span className="text-xs text-zinc-400">
                {lang === "id"
                  ? "Setiap babak dibangun di atas fondasi sebelumnya: dari presisi mekanikal hingga kognisi agen otonom."
                  : "Every chapter builds upon the last: from mechanical precision to autonomous agent cognition."}
              </span>
            </div>
          </div>

          <a
            href="#projects"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-mono font-medium text-white bg-[#ff3838]/20 hover:bg-[#ff3838] border border-[#ff3838]/40 transition-all hover:scale-105 shrink-0"
          >
            <span>{lang === "id" ? "Lihat Proyek Terpilih" : "Inspect Projects"}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
}
