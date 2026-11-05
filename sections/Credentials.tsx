"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Award,
  Trophy,
  Users,
  ShieldCheck,
  ExternalLink,
  Eye,
  X,
  FileCheck2,
  Calendar,
  Building,
  GraduationCap,
  Sparkles,
  CheckCircle2,
  FileText,
  User,
  ZoomIn,
  ZoomOut,
  RotateCcw,
  Maximize2,
  Minimize2,
  ChevronLeft,
  ChevronRight,
  Check,
} from "lucide-react";
import {
  KonohaLeafIcon,
  ShurikenIcon,
  SealingStamp,
  CloudWatermark,
} from "@/components/ornaments/KonohaIcons";

export type CredentialCategory =
  | "All"
  | "Certifications"
  | "Participation"
  | "Achievements"
  | "Programs & Training";

export interface CompetencyScore {
  name: string;
  originalName?: string;
  score: number;
  average?: number;
}

export interface CredentialImage {
  label: string;
  url: string;
}

export interface CredentialItem {
  id: string;
  category: "Certifications" | "Participation" | "Achievements" | "Programs & Training";
  title: string;
  recipient: string;
  issuer: string;
  institution?: string;
  issueDate: string;
  examDate?: string;
  result?: string;
  credentialId?: string;
  verificationUrl?: string;
  pdfUrl?: string;
  thumbnailUrl?: string;
  images?: CredentialImage[];
  competencies?: CompetencyScore[];
  type: string;
  status: "verified" | "pending" | "placeholder";
  description: string;
  skills: string[];
}

export const credentialsList: CredentialItem[] = [
  {
    id: "cred-toyota-01",
    category: "Certifications",
    title: "Automotive Vocational Competency Certificate",
    recipient: "Ferdy Afrizal",
    issuer: "Tunas Toyota",
    institution: "SMK Mahardhika Kabupaten Bandung Barat",
    issueDate: "March 2015",
    examDate: "16–18 February 2015",
    credentialId: "TUNAS/TYT-CM/UJK-SMK-MHD/1500013",
    result: "MEMUASKAN",
    type: "Vocational Competency Assessment",
    status: "verified",
    thumbnailUrl: "/certificates/tunas-toyota-vocational-cert-front.jpg",
    images: [
      {
        label: "Certificate Front",
        url: "/certificates/tunas-toyota-vocational-cert-front.jpg",
      },
      {
        label: "Certificate Back / Assessment Results",
        url: "/certificates/tunas-toyota-vocational-cert-back.jpg",
      },
    ],
    competencies: [
      {
        name: "Engine Tune Up – Petrol Engine",
        originalName: "Engine Tune Up Mesin Bensin",
        score: 91,
        average: 85,
      },
      {
        name: "Manual Transmission Maintenance / Repair",
        originalName: "Pemeliharaan / Perbaikan Transmisi Manual",
        score: 98,
        average: 88,
      },
      {
        name: "Body Electrical System Maintenance / Repair",
        originalName: "Perawatan / Perbaikan Sistem Kelistrikan Bodi",
        score: 100,
        average: 85,
      },
    ],
    description:
      "Completed an automotive vocational competency assessment organized by Tunas Toyota in collaboration with SMK Mahardhika Kabupaten Bandung Barat, achieving a Satisfactory result.",
    skills: [
      "Engine Diagnostics",
      "Manual Transmission",
      "Body Electrical Systems",
      "Precision Mechanics",
      "Automotive Systems",
    ],
  },
  {
    id: "cred-jvc-01",
    category: "Participation",
    title: "#JuaraVibeCoding Participant",
    recipient: "Ferdy Afrizal",
    issuer: "Google Developer Groups",
    issueDate: "May 2026",
    credentialId: "JVC2605-WQRZ-JWRT",
    verificationUrl: "https://goo.gle/jvc-cert-verifier",
    pdfUrl: "/certificates/juara-vibecoding-ferdy-afrizal.pdf",
    thumbnailUrl: "/certificates/juara-vibecoding-thumbnail.jpg",
    type: "Certificate of Completion",
    status: "verified",
    description:
      "Official certificate presented by Google Developer Groups in recognition of dedication, creative ideas, and active contribution to #JuaraVibeCoding.",
    skills: ["AI Vibe Coding", "Rapid Prototyping", "Google Cloud", "Community"],
  },
  {
    id: "cred-cert-01",
    category: "Certifications",
    title: "Web3 & Smart Contract Developer Certification",
    recipient: "PamanSam (Ferdy A)",
    issuer: "Official Certification Authority (Pending Upload)",
    issueDate: "2026 Season",
    credentialId: "PENDING_VERIFICATION",
    type: "Professional Certification",
    status: "placeholder",
    description:
      "Reserved slot for verified smart contract engineering, EVM security audits, and decentralized protocol certifications.",
    skills: ["Solidity", "Security", "EVM", "Smart Contracts"],
  },
  {
    id: "cred-hack-01",
    category: "Participation",
    title: "Global Web3 & AI Hackathon Entry",
    recipient: "PamanSam (Ferdy A)",
    issuer: "Hackathon Consortium (Awaiting Onchain Attestation)",
    issueDate: "2026 Hackathon Track",
    credentialId: "HASH_PENDING_MINT",
    type: "Hackathon Participation",
    status: "placeholder",
    description:
      "Dedicated verification space for hackathon placements, bounty track submissions, and decentralized application prototypes.",
    skills: ["AI Agents", "Hackathon", "Indie Hacker", "Rapid Prototyping"],
  },
  {
    id: "cred-comm-01",
    category: "Achievements",
    title: "Ecosystem Builder & Community Contributor",
    recipient: "PamanSam (Ferdy A)",
    issuer: "Decentralized Protocol DAO & Builder Network",
    issueDate: "Active Contributor",
    credentialId: "SOULBOUND_BADGE_PENDING",
    type: "Community Achievement",
    status: "placeholder",
    description:
      "Proof of contribution to open-source Web3 ecosystems, developer relations, testnet node validation, and governance participation.",
    skills: ["Ecosystem Support", "Open Source", "DAO Governance", "Community"],
  },
  {
    id: "cred-prof-01",
    category: "Achievements",
    title: "Independent Web3 Builder & Systems Architect",
    recipient: "PamanSam (Ferdy A)",
    issuer: "Professional Guild & Peer Proof-of-Work",
    issueDate: "2024 — Present",
    credentialId: "POW_PAMANSAM_01",
    type: "Professional Achievement",
    status: "placeholder",
    description:
      "Documented milestone achievement in architecting high-performance decentralized frontends, tactile web applications, and AI integrations.",
    skills: ["Fullstack Architecture", "Interactive UX", "Web3 Systems"],
  },
  {
    id: "cred-train-01",
    category: "Programs & Training",
    title: "Advanced AI Agent & Web3 Engineering Fellowship",
    recipient: "PamanSam (Ferdy A)",
    issuer: "Web3 & AI Developer Academy",
    issueDate: "2026 Cohort",
    credentialId: "TRAIN_COHORT_2026",
    type: "Developer Training Program",
    status: "placeholder",
    description:
      "Structured training curriculum covering autonomous AI workflows, multi-agent coordination, and smart contract protocol architecture.",
    skills: ["AI Workflows", "FastAPI", "Protocol Design", "Bootcamp"],
  },
];

export const visibleCredentials = credentialsList.filter(
  (item) => item.status === "verified" && Boolean(item.thumbnailUrl || (item.images && item.images.length > 0))
);

export function Credentials() {
  const [activeCategory, setActiveCategory] = useState<CredentialCategory>("All");
  const [selectedCredential, setSelectedCredential] = useState<CredentialItem | null>(null);
  const [activeImageIndex, setActiveImageIndex] = useState<number>(0);
  const [zoomLevel, setZoomLevel] = useState<number>(1);
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);

  // Open credential modal with resets
  const handleOpenModal = (cred: CredentialItem) => {
    setSelectedCredential(cred);
    setActiveImageIndex(0);
    setZoomLevel(1);
    setIsFullscreen(false);
  };

  // Close modal on ESC key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        if (isFullscreen) {
          setIsFullscreen(false);
        } else {
          setSelectedCredential(null);
        }
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isFullscreen]);

  const categories: { id: CredentialCategory; label: string; icon: any }[] = [
    { id: "All", label: "All", icon: Sparkles },
    { id: "Certifications", label: "Certifications", icon: Award },
    { id: "Participation", label: "Participation", icon: Users },
    { id: "Achievements", label: "Achievements", icon: Trophy },
    { id: "Programs & Training", label: "Programs & Training", icon: GraduationCap },
  ];

  const getCategoryCount = (catId: CredentialCategory) => {
    if (catId === "All") return visibleCredentials.length;
    return visibleCredentials.filter((item) => item.category === catId).length;
  };

  // Only display category tabs that contain actual verified certificates, plus "All"
  const availableCategories = categories.filter(
    (cat) => cat.id === "All" || getCategoryCount(cat.id) > 0
  );

  const filteredCredentials =
    activeCategory === "All"
      ? visibleCredentials
      : visibleCredentials.filter((item) => item.category === activeCategory);

  // Dynamic responsive grid layout: balanced 2 columns for 2 items, 1 centered column for 1 item
  const getGridColsClass = (count: number) => {
    if (count === 1) return "grid-cols-1 max-w-xl mx-auto";
    if (count === 2) return "grid-cols-1 md:grid-cols-2 max-w-5xl mx-auto";
    return "grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto";
  };

  // Active image for modal
  const activeImages = selectedCredential?.images && selectedCredential.images.length > 0
    ? selectedCredential.images
    : selectedCredential?.thumbnailUrl
    ? [{ label: "Certificate", url: selectedCredential.thumbnailUrl }]
    : [];

  const currentImage = activeImages[activeImageIndex] || activeImages[0];

  return (
    <section
      id="credentials"
      className="relative z-10 overflow-hidden px-5 py-20 md:py-32 sm:px-8 lg:px-14 bg-[#080506] border-t border-[#ff3838]/15"
    >
      {/* Ambient background glows */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-[#ff3838]/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-[#ff7844]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative mx-auto max-w-7xl z-10">
        {/* ========================================================
            SECTION HEADING: Japanese Subtitle + Main Title + Desc
            ======================================================== */}
        <div className="flex flex-col items-start mb-10 sm:mb-14">
          <div className="flex items-center gap-2.5 mb-2.5">
            <span className="h-[2px] w-8 bg-[#ff3838]" />
            <span className="text-xs sm:text-sm font-semibold tracking-[0.25em] text-[#ff3838] uppercase drop-shadow-[0_0_10px_rgba(255,56,56,0.7)] flex items-center gap-1.5">
              <ShurikenIcon className="w-3.5 h-3.5 text-[#ff7844] animate-spin-slow" />
              <span>資格と実績 • CERTIFIED SHINOBI ARCHIVE</span>
            </span>
            <span className="h-[2px] w-8 bg-[#ff3838]" />
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white font-display">
            Credentials & Certifications
          </h2>

          <p className="mt-4 text-sm sm:text-base text-zinc-400 max-w-2xl leading-relaxed">
            A digital archive of verified completions, vocational competence assessments, and official certifications.
          </p>
        </div>

        {/* ========================================================
            INTERACTIVE CATEGORY FILTER TABS (WITH ITEM COUNTS)
            ======================================================== */}
        <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-10 pb-3 border-b border-white/10">
          {availableCategories.map((cat) => {
            const Icon = cat.icon;
            const isActive = activeCategory === cat.id;
            const count = getCategoryCount(cat.id);
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveCategory(cat.id)}
                className={`relative inline-flex items-center gap-2 px-3.5 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all cursor-pointer ${
                  isActive
                    ? "text-white bg-[#1b0e11] border border-[#ff3838]/60 shadow-[0_0_15px_rgba(255,56,56,0.3)]"
                    : "text-zinc-400 hover:text-white bg-black/40 border border-white/10 hover:border-white/20"
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${isActive ? "text-[#ff3838]" : "text-zinc-500"}`} />
                <span>{cat.label}</span>
                <span
                  className={`text-[10px] font-mono px-1.5 py-0.5 rounded-full ${
                    isActive ? "bg-[#ff3838]/25 text-[#ff7844]" : "bg-white/10 text-zinc-400"
                  }`}
                >
                  {count}
                </span>
                {isActive && (
                  <motion.div
                    layoutId="activeCredCategory"
                    className="absolute inset-0 rounded-full border border-[#ff3838] pointer-events-none"
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* ========================================================
            CREDENTIAL CARDS GRID (RESPONSIVE BALANCED GRID)
            Desktop: 2 balanced cols, Tablet: 2 cols, Mobile: 1 col
            ======================================================== */}
        <div className={`grid gap-6 sm:gap-8 ${getGridColsClass(filteredCredentials.length)}`}>
          <AnimatePresence mode="popLayout">
            {filteredCredentials.map((cred) => (
              <motion.div
                key={cred.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="group relative overflow-hidden rounded-2xl bg-[#120a0d]/85 border border-[#ff3838]/20 hover:border-[#ff3838]/70 p-5 sm:p-6 shadow-[0_10px_35px_rgba(0,0,0,0.6)] hover:shadow-[0_0_30px_rgba(255,56,56,0.25)] backdrop-blur-xl transition-all duration-300 flex flex-col justify-between"
              >
                {/* Background Watermark */}
                <div className="absolute -bottom-6 -right-6 text-[#ff3838] opacity-5 group-hover:opacity-15 transition-opacity pointer-events-none">
                  <CloudWatermark className="w-44 h-28" color="currentColor" />
                </div>

                <div>
                  {/* Card Header: Category & Status Badge */}
                  <div className="flex items-center justify-between gap-2 mb-3.5">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-mono tracking-wider uppercase bg-[#ff3838]/10 border border-[#ff3838]/30 text-[#ff7844]">
                      <KonohaLeafIcon className="w-3 h-3 text-[#ff3838]" color="#ff3838" />
                      <span>{cred.category}</span>
                    </span>

                    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-mono bg-emerald-500/15 border border-emerald-500/40 text-emerald-400 shadow-[0_0_10px_rgba(16,185,129,0.2)]">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      <span>VERIFIED</span>
                    </span>
                  </div>

                  {/* Thumbnail Container */}
                  <div className="relative w-full h-44 sm:h-48 rounded-xl overflow-hidden bg-gradient-to-br from-[#1c0f13] via-[#12080a] to-[#0a0507] border border-white/10 group-hover:border-[#ff3838]/40 transition-colors flex items-center justify-center mb-4">
                    {cred.thumbnailUrl ? (
                      <div className="relative w-full h-full overflow-hidden">
                        <img
                          src={cred.thumbnailUrl}
                          alt={cred.title}
                          className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0507] via-transparent to-transparent opacity-60 pointer-events-none" />

                        {/* Multi-page badge indicator if 2 images exist */}
                        {cred.images && cred.images.length > 1 && (
                          <div className="absolute bottom-2 right-2 px-2 py-0.5 rounded-md bg-black/80 backdrop-blur-md border border-white/20 text-[10px] font-mono text-zinc-300 flex items-center gap-1">
                            <FileText className="w-3 h-3 text-[#ff7844]" />
                            <span>2 Pages (Front & Back)</span>
                          </div>
                        )}
                      </div>
                    ) : (
                      /* Sealing Stamp Overlay for Placeholders */
                      <div className="relative flex flex-col items-center justify-center text-center p-4">
                        <SealingStamp
                          label="資格証明"
                          className="w-16 h-16 opacity-75 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300"
                        />
                        <span className="text-[10px] font-mono text-zinc-400 tracking-widest uppercase mt-2">
                          KONOHA PROTOCOL ARCHIVE
                        </span>
                        <span className="text-[9px] font-mono text-[#ff7844]/80 mt-0.5">
                          [RESERVED CREDENTIAL SLOT]
                        </span>
                      </div>
                    )}

                    {/* Quick Inspect Hover Button */}
                    <button
                      type="button"
                      onClick={() => handleOpenModal(cred)}
                      className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 backdrop-blur-sm transition-opacity flex items-center justify-center gap-2 text-white text-xs font-mono font-semibold cursor-pointer"
                      aria-label={`View ${cred.title}`}
                    >
                      <Eye className="w-4 h-4 text-[#ff3838]" />
                      <span>View Certificate</span>
                    </button>
                  </div>

                  {/* Title */}
                  <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-[#ff6b6b] transition-colors leading-snug line-clamp-2">
                    {cred.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-2 text-xs text-zinc-400 leading-relaxed line-clamp-2">
                    {cred.description}
                  </p>

                  {/* Metadata: Issuer, Institution & Date */}
                  <div className="mt-4 pt-3 border-t border-white/10 flex flex-col gap-1.5 text-xs font-mono text-zinc-300">
                    <div className="flex items-center gap-2 truncate">
                      <Building className="w-3.5 h-3.5 text-[#ff3838] shrink-0" />
                      <span className="truncate">{cred.issuer}</span>
                    </div>
                    {cred.institution && (
                      <div className="flex items-center gap-2 truncate text-zinc-400">
                        <GraduationCap className="w-3.5 h-3.5 text-[#ff7844] shrink-0" />
                        <span className="truncate">{cred.institution}</span>
                      </div>
                    )}
                    <div className="flex items-center gap-2">
                      <Calendar className="w-3.5 h-3.5 text-[#ff7844] shrink-0" />
                      <span>{cred.issueDate}</span>
                    </div>
                  </div>
                </div>

                {/* Footer: Skills & View Certificate Button */}
                <div className="mt-5 pt-3.5 border-t border-white/5 flex items-center justify-between gap-3">
                  <div className="flex flex-wrap items-center gap-1">
                    {cred.skills.slice(0, 2).map((skill, idx) => (
                      <span
                        key={idx}
                        className="text-[9px] font-mono px-2 py-0.5 rounded bg-white/5 border border-white/10 text-zinc-400 truncate max-w-[110px]"
                      >
                        #{skill}
                      </span>
                    ))}
                    {cred.skills.length > 2 && (
                      <span className="text-[9px] font-mono text-zinc-500">
                        +{cred.skills.length - 2}
                      </span>
                    )}
                  </div>

                  <button
                    type="button"
                    onClick={() => handleOpenModal(cred)}
                    className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-[#ff7844] hover:text-white px-3 py-1.5 rounded-lg bg-[#ff3838]/10 hover:bg-[#ff3838] border border-[#ff3838]/30 transition-all cursor-pointer shrink-0"
                  >
                    <span>View Certificate</span>
                    <ExternalLink className="w-3 h-3" />
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Informative Note / Contact Link */}
        <div className="mt-12 p-5 sm:p-6 rounded-2xl bg-[#110a0c]/60 border border-[#ff3838]/20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 max-w-5xl mx-auto">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#ff3838]/10 border border-[#ff3838]/30 flex items-center justify-center text-[#ff3838] shrink-0">
              <FileCheck2 className="w-5 h-5" />
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-semibold text-white">
                Verifiable Attestations & Certified Credentials
              </span>
              <span className="text-xs text-zinc-400">
                Official completion records, vocational competence documents, and tech credentials can be verified through authentic issuing organizations.
              </span>
            </div>
          </div>

          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-mono font-medium text-white bg-[#ff3838]/20 hover:bg-[#ff3838] border border-[#ff3838]/40 transition-all hover:scale-105 shrink-0"
          >
            <span>Request Credential Verification ↗</span>
          </a>
        </div>
      </div>

      {/* ========================================================
          ENHANCED CERTIFICATE PREVIEW MODAL / LIGHTBOX
          Supports Multi-Page (Front / Back), Zoom Controls & Fullscreen
          ======================================================== */}
      <AnimatePresence>
        {selectedCredential && (
          <div
            className={`fixed inset-0 z-[250] flex items-center justify-center ${
              isFullscreen ? "p-0" : "p-3 sm:p-6"
            }`}
          >
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => {
                if (isFullscreen) {
                  setIsFullscreen(false);
                } else {
                  setSelectedCredential(null);
                }
              }}
              className="absolute inset-0 bg-black/90 backdrop-blur-md"
            />

            {/* Modal Dialog */}
            <motion.div
              initial={{ opacity: 0, scale: 0.94, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, y: 20 }}
              transition={{ duration: 0.25 }}
              className={`relative w-full overflow-y-auto rounded-2xl bg-[#120a0d] border border-[#ff3838]/40 p-4 sm:p-7 shadow-[0_20px_60px_rgba(0,0,0,0.95),0_0_40px_rgba(255,56,56,0.25)] z-10 scrollbar-thin scrollbar-thumb-zinc-700 ${
                isFullscreen
                  ? "fixed inset-2 sm:inset-4 max-w-none max-h-none h-[calc(100vh-16px)] sm:h-[calc(100vh-32px)] flex flex-col"
                  : "max-w-4xl max-h-[92vh]"
              }`}
            >
              {/* Top Controls: Fullscreen & Close */}
              <div className="absolute top-3 sm:top-4 right-3 sm:right-4 flex items-center gap-2 z-30">
                <button
                  type="button"
                  onClick={() => setIsFullscreen(!isFullscreen)}
                  className="p-2 rounded-full bg-white/5 hover:bg-[#ff3838]/20 text-zinc-400 hover:text-white border border-white/10 transition-colors cursor-pointer"
                  title={isFullscreen ? "Exit Fullscreen" : "Fullscreen Preview"}
                  aria-label={isFullscreen ? "Exit Fullscreen" : "Fullscreen Preview"}
                >
                  {isFullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
                </button>

                <button
                  type="button"
                  onClick={() => setSelectedCredential(null)}
                  className="p-2 rounded-full bg-white/5 hover:bg-[#ff3838]/20 text-zinc-400 hover:text-white border border-white/10 transition-colors cursor-pointer"
                  title="Close Preview [ESC]"
                  aria-label="Close Preview"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="flex flex-col gap-5">
                {/* Header Information */}
                <div className="pr-20">
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <span className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full text-xs font-mono tracking-wider uppercase bg-[#ff3838]/15 border border-[#ff3838]/40 text-[#ff7844]">
                      <KonohaLeafIcon className="w-3.5 h-3.5 text-[#ff3838]" color="#ff3838" />
                      <span>{selectedCredential.category}</span>
                    </span>
                    <span className="text-xs font-mono text-zinc-400">
                      • {selectedCredential.type}
                    </span>
                    {selectedCredential.result && (
                      <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-mono font-semibold bg-emerald-500/15 border border-emerald-500/40 text-emerald-300">
                        <Check className="w-3 h-3" />
                        <span>PREDIKAT: {selectedCredential.result}</span>
                      </span>
                    )}
                  </div>

                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white font-display">
                    {selectedCredential.title}
                  </h3>

                  <div className="mt-1 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs font-mono text-zinc-300">
                    <div className="flex items-center gap-1.5">
                      <User className="w-3.5 h-3.5 text-[#ff7844]" />
                      <span>Recipient: <strong className="text-white">{selectedCredential.recipient}</strong></span>
                    </div>
                    {selectedCredential.institution && (
                      <div className="flex items-center gap-1.5 text-zinc-400">
                        <GraduationCap className="w-3.5 h-3.5 text-[#ff3838]" />
                        <span>Institution: <strong className="text-zinc-200">{selectedCredential.institution}</strong></span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Multi-page Tab Switcher & Navigation Controls */}
                {activeImages.length > 1 && (
                  <div className="flex flex-wrap items-center justify-between gap-3 p-2.5 rounded-xl bg-black/60 border border-white/10">
                    {/* Front / Back Tabs */}
                    <div className="flex items-center gap-2">
                      {activeImages.map((img, idx) => {
                        const isCurrent = activeImageIndex === idx;
                        return (
                          <button
                            key={idx}
                            type="button"
                            onClick={() => {
                              setActiveImageIndex(idx);
                              setZoomLevel(1);
                            }}
                            className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono font-semibold transition-all cursor-pointer ${
                              isCurrent
                                ? "bg-[#ff3838] text-white shadow-[0_0_15px_rgba(255,56,56,0.4)]"
                                : "bg-white/5 text-zinc-400 hover:text-white hover:bg-white/10 border border-white/10"
                            }`}
                          >
                            <FileText className="w-3.5 h-3.5" />
                            <span>{img.label}</span>
                          </button>
                        );
                      })}
                    </div>

                    {/* Prev / Next Buttons */}
                    <div className="flex items-center gap-1 text-xs font-mono text-zinc-400">
                      <span>
                        Page {activeImageIndex + 1} of {activeImages.length}
                      </span>
                      <button
                        type="button"
                        onClick={() => {
                          setActiveImageIndex((prev) => (prev > 0 ? prev - 1 : activeImages.length - 1));
                          setZoomLevel(1);
                        }}
                        className="p-1 rounded-md bg-white/5 hover:bg-white/15 text-white transition-colors cursor-pointer ml-2"
                        title="Previous page"
                        aria-label="Previous page"
                      >
                        <ChevronLeft className="w-4 h-4" />
                      </button>
                      <button
                        type="button"
                        onClick={() => {
                          setActiveImageIndex((prev) => (prev < activeImages.length - 1 ? prev + 1 : 0));
                          setZoomLevel(1);
                        }}
                        className="p-1 rounded-md bg-white/5 hover:bg-white/15 text-white transition-colors cursor-pointer"
                        title="Next page"
                        aria-label="Next page"
                      >
                        <ChevronRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                )}

                {/* Main Visual Display Container with Zoom Controls */}
                <div className="relative w-full rounded-xl overflow-hidden bg-black/80 border border-white/10 flex flex-col items-center justify-center p-2 sm:p-4">
                  {/* Floating Zoom Toolbar */}
                  {currentImage && (
                    <div className="absolute top-3 right-3 z-20 flex items-center gap-1 p-1 rounded-lg bg-black/80 backdrop-blur-md border border-white/15 shadow-xl">
                      <button
                        type="button"
                        onClick={() => setZoomLevel((z) => Math.max(1, Number((z - 0.25).toFixed(2))))}
                        disabled={zoomLevel <= 1}
                        className="p-1.5 rounded text-zinc-300 hover:text-white hover:bg-white/10 disabled:opacity-30 disabled:hover:bg-transparent cursor-pointer"
                        title="Zoom out"
                        aria-label="Zoom out"
                      >
                        <ZoomOut className="w-3.5 h-3.5" />
                      </button>
                      <span className="text-[10px] font-mono text-zinc-300 px-1 select-none min-w-[42px] text-center">
                        {Math.round(zoomLevel * 100)}%
                      </span>
                      <button
                        type="button"
                        onClick={() => setZoomLevel((z) => Math.min(2.5, Number((z + 0.25).toFixed(2))))}
                        disabled={zoomLevel >= 2.5}
                        className="p-1.5 rounded text-zinc-300 hover:text-white hover:bg-white/10 disabled:opacity-30 disabled:hover:bg-transparent cursor-pointer"
                        title="Zoom in"
                        aria-label="Zoom in"
                      >
                        <ZoomIn className="w-3.5 h-3.5" />
                      </button>
                      {zoomLevel !== 1 && (
                        <button
                          type="button"
                          onClick={() => setZoomLevel(1)}
                          className="p-1.5 rounded text-[#ff7844] hover:bg-white/10 cursor-pointer"
                          title="Reset zoom"
                          aria-label="Reset zoom"
                        >
                          <RotateCcw className="w-3.5 h-3.5" />
                        </button>
                      )}
                    </div>
                  )}

                  {/* Image Display Area with Pan/Zoom scroll */}
                  {currentImage ? (
                    <div
                      className={`relative w-full overflow-auto flex items-center justify-center ${
                        isFullscreen
                          ? "max-h-[68vh] min-h-[400px]"
                          : "max-h-[500px] min-h-[260px] sm:min-h-[340px]"
                      }`}
                    >
                      <div
                        style={{
                          transform: `scale(${zoomLevel})`,
                          transformOrigin: "center center",
                          transition: "transform 0.2s ease-out",
                        }}
                        className="max-w-full flex items-center justify-center"
                      >
                        <img
                          src={currentImage.url}
                          alt={`${selectedCredential.title} - ${currentImage.label}`}
                          className="w-full h-auto max-h-[480px] sm:max-h-[560px] object-contain rounded-lg border border-white/10 shadow-2xl cursor-zoom-in"
                          onClick={() => setZoomLevel((z) => (z === 1 ? 1.6 : 1))}
                          title="Click to toggle 1.6x zoom"
                        />
                      </div>
                    </div>
                  ) : (
                    /* Placeholder Shield for Pending Items */
                    <div className="py-12 px-6 flex flex-col items-center justify-center text-center">
                      <SealingStamp label="資格証明" className="w-24 h-24 opacity-80 mb-3" />
                      <span className="text-xs font-mono text-zinc-300 tracking-widest uppercase">
                        KONOHA PROTOCOL ARCHIVE
                      </span>
                      <p className="mt-2 text-xs text-zinc-400 max-w-md">
                        {selectedCredential.description}
                      </p>
                    </div>
                  )}

                  {/* Caption & Navigation Hint */}
                  {currentImage && (
                    <div className="w-full mt-2 pt-2 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-zinc-400 px-1">
                      <span className="text-zinc-300 font-semibold">{currentImage.label}</span>
                      <span className="text-zinc-500">
                        {zoomLevel > 1 ? "Scroll / drag to inspect document details" : "Click image or use toolbar to zoom"}
                      </span>
                    </div>
                  )}
                </div>

                {/* ========================================================
                    COMPETENCY ASSESSMENT BREAKDOWN TABLE (DAFTAR NILAI)
                    Rendered if competencies exist (e.g. Automotive Cert)
                    ======================================================== */}
                {selectedCredential.competencies && selectedCredential.competencies.length > 0 && (
                  <div className="rounded-xl overflow-hidden bg-black/60 border border-[#ff3838]/30 p-4 sm:p-5">
                    <div className="flex flex-wrap items-center justify-between gap-2 pb-3 mb-3 border-b border-white/10">
                      <div className="flex items-center gap-2">
                        <Award className="w-4 h-4 text-[#ff3838]" />
                        <span className="text-xs sm:text-sm font-bold font-mono tracking-wider uppercase text-white">
                          Vocational Competency Assessment Results (Daftar Nilai)
                        </span>
                      </div>
                      <div className="flex items-center gap-2 text-xs font-mono">
                        <span className="text-zinc-400">Exam Date:</span>
                        <span className="text-[#ff7844] font-semibold">
                          {selectedCredential.examDate || "16–18 February 2015"}
                        </span>
                      </div>
                    </div>

                    {/* Competency Table */}
                    <div className="overflow-x-auto">
                      <table className="w-full text-left text-xs font-mono">
                        <thead>
                          <tr className="border-b border-white/10 text-zinc-400 text-[10px] uppercase">
                            <th className="py-2 px-2.5 w-12 text-center">No</th>
                            <th className="py-2 px-3">Competency Exam Area (Materi Ujian Praktek)</th>
                            <th className="py-2 px-3 text-center">Score (Nilai)</th>
                            <th className="py-2 px-3 text-center">Benchmark (Rata-rata)</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-white/5 text-zinc-200">
                          {selectedCredential.competencies.map((comp, idx) => (
                            <tr key={idx} className="hover:bg-white/[0.02] transition-colors">
                              <td className="py-3 px-2.5 text-center text-zinc-500 font-bold">
                                {idx + 1}
                              </td>
                              <td className="py-3 px-3">
                                <div className="font-semibold text-white">{comp.name}</div>
                                {comp.originalName && (
                                  <div className="text-[10px] text-zinc-400 italic">
                                    {comp.originalName}
                                  </div>
                                )}
                              </td>
                              <td className="py-3 px-3 text-center">
                                <span className="inline-flex items-center justify-center px-2.5 py-1 rounded-md bg-[#ff3838]/15 border border-[#ff3838]/40 text-[#ff7844] font-bold text-sm shadow-[0_0_10px_rgba(255,56,56,0.2)]">
                                  {comp.score}
                                </span>
                              </td>
                              <td className="py-3 px-3 text-center text-zinc-400">
                                {comp.average ?? "85"}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>

                    {/* Assessment Summary Footer */}
                    <div className="mt-4 pt-3 border-t border-white/10 flex flex-wrap items-center justify-between gap-3 text-xs font-mono text-zinc-400">
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                        <span>Overall Result:</span>
                        <strong className="text-emerald-400 uppercase tracking-wide">
                          {selectedCredential.result || "MEMUASKAN (Satisfactory)"}
                        </strong>
                      </div>
                      <div className="text-[11px] text-zinc-500">
                        Assessed by Tunas Toyota Assessor Coordinator (Riki Mulyana) & Workshop Head (Carto)
                      </div>
                    </div>
                  </div>
                )}

                {/* Metadata Ledger Grid */}
                <div className="p-4 rounded-xl bg-black/50 border border-white/10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-xs font-mono text-zinc-300">
                  <div className="flex flex-col">
                    <span className="text-[10px] text-zinc-500 uppercase">ISSUING BODY</span>
                    <span className="text-white font-semibold truncate mt-0.5">
                      {selectedCredential.issuer}
                    </span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] text-zinc-500 uppercase">ISSUE DATE</span>
                    <span className="text-white font-semibold mt-0.5">
                      {selectedCredential.issueDate}
                    </span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] text-zinc-500 uppercase">RECORD / CERT NUMBER</span>
                    <span className="text-[#ff7844] font-semibold mt-0.5 truncate" title={selectedCredential.credentialId}>
                      {selectedCredential.credentialId || "N/A"}
                    </span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] text-zinc-500 uppercase">STATUS</span>
                    <span
                      className={`font-semibold mt-0.5 flex items-center gap-1.5 ${
                        selectedCredential.status === "verified" ? "text-emerald-400" : "text-amber-400"
                      }`}
                    >
                      <span
                        className={`w-1.5 h-1.5 rounded-full ${
                          selectedCredential.status === "verified"
                            ? "bg-emerald-400 animate-pulse"
                            : "bg-amber-400"
                        }`}
                      />
                      <span>
                        {selectedCredential.status === "verified"
                          ? "VERIFIED ATTESTATION"
                          : "RESERVED SLOT"}
                      </span>
                    </span>
                  </div>
                </div>

                {/* Skills Tags */}
                <div className="flex flex-wrap gap-1.5">
                  {selectedCredential.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="text-xs font-mono px-2.5 py-1 rounded bg-[#ff3838]/10 border border-[#ff3838]/30 text-zinc-200"
                    >
                      #{skill}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="pt-3 border-t border-white/10 flex flex-wrap items-center justify-between gap-3">
                  <div className="flex flex-wrap items-center gap-2">
                    {/* PDF Document Button */}
                    {selectedCredential.pdfUrl && (
                      <a
                        href={selectedCredential.pdfUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-mono font-semibold text-white bg-[#1a0e12] hover:bg-[#281319] border border-[#ff3838]/40 hover:border-[#ff3838] transition-all"
                      >
                        <FileText className="w-3.5 h-3.5 text-[#ff3838]" />
                        <span>Open PDF ↗</span>
                      </a>
                    )}

                    {/* View Original Image High-Res */}
                    {currentImage && (
                      <a
                        href={currentImage.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-mono font-semibold text-white bg-[#1a0e12] hover:bg-[#281319] border border-white/20 hover:border-[#ff3838] transition-all"
                      >
                        <ExternalLink className="w-3.5 h-3.5 text-[#ff7844]" />
                        <span>Open Raw Image ↗</span>
                      </a>
                    )}

                    {/* Online Verification Link */}
                    {selectedCredential.verificationUrl && (
                      <a
                        href={selectedCredential.verificationUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-mono font-semibold text-white bg-gradient-to-r from-[#ff3838] to-[#e52e2e] shadow-[0_0_15px_rgba(255,56,56,0.4)] hover:scale-105 transition-all"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        <span>Verify Certificate ↗</span>
                      </a>
                    )}
                  </div>

                  <button
                    type="button"
                    onClick={() => {
                      if (isFullscreen) {
                        setIsFullscreen(false);
                      } else {
                        setSelectedCredential(null);
                      }
                    }}
                    className="px-4 py-2 rounded-xl text-xs font-mono text-zinc-400 hover:text-white bg-white/5 border border-white/10 transition-colors cursor-pointer"
                  >
                    Close [ESC]
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
