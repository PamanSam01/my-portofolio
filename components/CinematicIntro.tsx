"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useIntro } from "@/components/intro/IntroContext";
import { KonohaSealEmblem } from "@/components/intro/KonohaSealEmblem";

export function CinematicIntro() {
  const { phase, isComplete, skipIntro } = useIntro();

  // Once intro is complete, completely unmount all intro overlays from the DOM
  if (isComplete) {
    return null;
  }

  // Pre-configured floating sakura petals for the awakening scene (matching reference image)
  const introPetals = [
    { id: 1, x: "12%", y: "24%", size: 16, rot: 35, delay: 0.1 },
    { id: 2, x: "28%", y: "42%", size: 14, rot: -20, delay: 0.4 },
    { id: 3, x: "82%", y: "28%", size: 18, rot: 45, delay: 0.2 },
    { id: 4, x: "18%", y: "68%", size: 15, rot: 15, delay: 0.5 },
    { id: 5, x: "74%", y: "78%", size: 17, rot: -40, delay: 0.3 },
    { id: 6, x: "88%", y: "62%", size: 13, rot: 25, delay: 0.6 },
    { id: 7, x: "38%", y: "84%", size: 14, rot: -15, delay: 0.7 },
  ];

  return (
    <div className="pointer-events-none fixed inset-0 z-[100] overflow-hidden select-none">
      
      {/* ── CINEMATIC LETTERBOX BARS (2.39:1 Anamorphic Format) ── */}
      {/* Top Black Bar */}
      <motion.div
        initial={{ y: 0 }}
        animate={{
          y: phase === "transition" ? "-100%" : 0,
        }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-0 inset-x-0 h-[8vh] sm:h-[10vh] bg-black border-b border-[#ff3838]/20 z-[120] pointer-events-none"
      >
        <div className="w-full h-full flex items-center justify-between px-3 sm:px-6 pointer-events-auto text-[8px] sm:text-[10px]">
          <span className="font-mono tracking-widest text-zinc-500 uppercase truncate max-w-[120px] sm:max-w-none">
            KONOHA ARCHIVE // 2026.PROD
          </span>
          <span className="font-mono text-[#ff7844] tracking-wider truncate max-w-[180px] sm:max-w-none">
            {phase === "awakening" && "SCENE 01 // KONOHA_SEAL_AWAKENING"}
            {phase === "shinobi" && "SCENE 02 // SHINOBI_ENTRANCE"}
            {phase === "identity" && "SCENE 03 // IDENTITY_SYNCHRONIZED"}
            {phase === "transition" && "LIVE // TRANSMISSION"}
          </span>
        </div>
      </motion.div>

      {/* Bottom Black Bar */}
      <motion.div
        initial={{ y: 0 }}
        animate={{
          y: phase === "transition" ? "100%" : 0,
        }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="fixed bottom-0 inset-x-0 h-[8vh] sm:h-[10vh] bg-black border-t border-[#ff3838]/20 z-[120] pointer-events-none"
      >
        <div className="w-full h-full flex items-center justify-between px-3 sm:px-6 pointer-events-auto text-[8px] sm:text-[10px]">
          <div className="flex items-center gap-1.5 sm:gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#ff3838] animate-ping" />
            <span className="font-mono tracking-widest text-zinc-400">
              CHAKRA FREQUENCY: 432HZ
            </span>
          </div>
          <span className="font-mono text-zinc-500 hidden xs:inline">
            0xPamanSam • Konoha Seal
          </span>
        </div>
      </motion.div>

      {/* ── SKIP INTRO BUTTON (Top-Right, Immediately accessible) ── */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: phase === "transition" ? 0 : 1, y: 0 }}
        transition={{ delay: 0.15 }}
        className="fixed top-3 sm:top-4 right-4 sm:right-6 z-[130] pointer-events-auto"
      >
        <button
          type="button"
          onClick={skipIntro}
          className="group inline-flex items-center gap-1.5 px-3 sm:px-4 py-1.5 rounded-full bg-[#120a0c]/85 border border-[#ff3838]/40 hover:border-[#ff3838] text-xs font-mono text-zinc-300 hover:text-white shadow-[0_0_15px_rgba(255,56,56,0.35)] backdrop-blur-md transition-all hover:scale-105 cursor-pointer"
          aria-label="Skip Introduction"
        >
          <span className="text-[#ff7844] group-hover:rotate-45 transition-transform duration-300">✦</span>
          <span>Skip Intro</span>
          <span className="text-zinc-500 text-[10px] hidden sm:inline ml-0.5 border border-zinc-700 px-1 rounded">ESC</span>
        </button>
      </motion.div>

      {/* ── SCENE 1: KONOHA SEAL AWAKENING (MATCHING REFERENCE IMAGE) ── */}
      <AnimatePresence>
        {phase === "awakening" && (
          <motion.div
            key="awakening-overlay"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="fixed inset-0 z-[110] flex flex-col items-center justify-center bg-[#070304] pointer-events-none overflow-hidden"
          >
            {/* Atmospheric Charcoal Smoky Backdrop (Reference Image Texture) */}
            <div
              className="absolute inset-0 pointer-events-none opacity-45 mix-blend-screen"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 50% 50%, rgba(45,35,40,0.8) 0%, rgba(10,5,8,0.95) 70%, #050203 100%)",
              }}
            />

            {/* Subtle swirling smoke clouds */}
            <div
              className="absolute inset-0 pointer-events-none opacity-25"
              style={{
                background:
                  "radial-gradient(ellipse at 50% 85%, rgba(255,30,30,0.22) 0%, rgba(200,20,20,0.1) 40%, transparent 70%)",
                filter: "blur(40px)",
              }}
            />

            {/* Glowing Red Sakura Petals Drifting Across Scene */}
            {introPetals.map((petal) => (
              <motion.div
                key={petal.id}
                initial={{ opacity: 0, y: -20, rotate: petal.rot }}
                animate={{
                  opacity: [0, 0.85, 0.65],
                  y: [0, 15, 30],
                  x: [0, 8, -6],
                  rotate: [petal.rot, petal.rot + 15, petal.rot - 10],
                }}
                transition={{
                  duration: 3.5,
                  delay: petal.delay,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut",
                }}
                className="absolute pointer-events-none drop-shadow-[0_0_8px_rgba(255,56,56,0.8)]"
                style={{
                  left: petal.x,
                  top: petal.y,
                  width: petal.size,
                  height: petal.size * 1.5,
                }}
              >
                <svg viewBox="0 0 30 45" fill="none" className="w-full h-full">
                  <path
                    d="M15 0 C25 15, 30 30, 15 45 C0 30, 5 15, 15 0 Z"
                    fill="url(#sakuraRedGrad)"
                  />
                  <defs>
                    <linearGradient id="sakuraRedGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#ff7675" />
                      <stop offset="60%" stopColor="#ff3838" />
                      <stop offset="100%" stopColor="#b71c1c" />
                    </linearGradient>
                  </defs>
                </svg>
              </motion.div>
            ))}

            {/* Redesigned Central Konoha Seal Emblem with GSAP Animation */}
            <div className="relative z-10">
              <KonohaSealEmblem />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── SCENE 2: SHINOBI ENTRANCE CHAKRA SMOKE MIST (Right Rock Area) ── */}
      <AnimatePresence>
        {phase === "shinobi" && (
          <motion.div
            key="chakra-mist"
            initial={{ opacity: 0.75, scale: 1.05 }}
            animate={{ opacity: 0.25, scale: 1.25 }}
            exit={{ opacity: 0, scale: 1.4 }}
            transition={{ duration: 1.0, ease: "easeOut" }}
            className="fixed right-0 bottom-0 w-[55vw] h-[55vh] pointer-events-none z-[105]"
            style={{
              background: "radial-gradient(circle at 75% 75%, rgba(255,120,68,0.35) 0%, rgba(255,56,56,0.18) 35%, transparent 70%)",
              filter: "blur(40px)",
            }}
          />
        )}
      </AnimatePresence>

      {/* ── SCENE 3: FLASH ACCENT ON IDENTITY REVEAL ── */}
      <AnimatePresence>
        {phase === "identity" && (
          <motion.div
            key="identity-shimmer"
            initial={{ opacity: 0.2 }}
            animate={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="fixed inset-0 bg-gradient-to-r from-[#ff3838]/15 via-transparent to-transparent pointer-events-none z-[102]"
          />
        )}
      </AnimatePresence>

    </div>
  );
}
