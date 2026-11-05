"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";

interface KonohaSealEmblemProps {
  onPhaseComplete?: () => void;
}

export function KonohaSealEmblem({ onPhaseComplete }: KonohaSealEmblemProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const particleRef = useRef<HTMLDivElement>(null);
  const leafPathRef = useRef<SVGPathElement>(null);
  const trianglePathRef = useRef<SVGPathElement>(null);
  const innerRingRef = useRef<SVGCircleElement>(null);
  const middleRingRef = useRef<SVGGElement>(null);
  const outerRingRef = useRef<SVGGElement>(null);
  const northRuneRef = useRef<SVGGElement>(null);
  const southRuneRef = useRef<SVGGElement>(null);
  const eastRuneRef = useRef<SVGGElement>(null);
  const westRuneRef = useRef<SVGGElement>(null);
  const pulseAuraRef = useRef<HTMLDivElement>(null);
  const typographyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Initial setup for SVG stroke drawing
      const leafPath = leafPathRef.current;
      const trianglePath = trianglePathRef.current;

      const leafLen = leafPath ? leafPath.getTotalLength() : 600;
      const triLen = trianglePath ? trianglePath.getTotalLength() : 200;

      if (leafPath) {
        gsap.set(leafPath, {
          strokeDasharray: leafLen,
          strokeDashoffset: leafLen,
          opacity: 1,
        });
      }

      if (trianglePath) {
        gsap.set(trianglePath, {
          strokeDasharray: triLen,
          strokeDashoffset: triLen,
          opacity: 1,
        });
      }

      // Initial states of sealing rings and runes
      gsap.set([innerRingRef.current, middleRingRef.current, outerRingRef.current], {
        opacity: 0,
        scale: 0.8,
        transformOrigin: "center center",
      });

      gsap.set([northRuneRef.current, southRuneRef.current, eastRuneRef.current, westRuneRef.current], {
        opacity: 0,
        scale: 0.7,
        transformOrigin: "center center",
      });

      gsap.set(particleRef.current, {
        scale: 0,
        opacity: 0,
      });

      gsap.set(pulseAuraRef.current, {
        scale: 0.6,
        opacity: 0,
      });

      gsap.set(typographyRef.current, {
        opacity: 0,
        y: 12,
        filter: "blur(8px)",
      });

      // ── MASTER GSAP TIMELINE ─────────────────────────────────────────
      const tl = gsap.timeline({
        onComplete: () => {
          if (onPhaseComplete) onPhaseComplete();
        },
      });

      // PHASE 1 — CHAKRA AWAKENING (0.0s – 0.35s)
      tl.to(particleRef.current, {
        scale: 1.4,
        opacity: 1,
        duration: 0.35,
        ease: "power2.out",
      })
      .to(pulseAuraRef.current, {
        scale: 1,
        opacity: 0.45,
        duration: 0.4,
        ease: "power1.out",
      }, "-=0.2");

      // PHASE 2 — KONOHA SEAL FORMATION (0.35s – 1.0s)
      // Draw the leaf outline & triangle
      if (leafPath && trianglePath) {
        tl.to(
          [leafPath, trianglePath],
          {
            strokeDashoffset: 0,
            duration: 0.75,
            ease: "power2.inOut",
          },
          "-=0.2"
        );
      }

      // Concentric rings emerge and rotate in opposing directions
      tl.to(
        innerRingRef.current,
        {
          opacity: 1,
          scale: 1,
          duration: 0.5,
          ease: "power2.out",
        },
        "-=0.55"
      )
      .to(
        middleRingRef.current,
        {
          opacity: 0.9,
          scale: 1,
          rotation: 45,
          duration: 0.8,
          ease: "power2.out",
        },
        "-=0.5"
      )
      .to(
        outerRingRef.current,
        {
          opacity: 1,
          scale: 1,
          rotation: -30,
          duration: 0.8,
          ease: "power2.out",
        },
        "-=0.75"
      );

      // Directional markings illuminate sequentially (North, East, South, West)
      tl.to(
        northRuneRef.current,
        { opacity: 1, scale: 1, duration: 0.25, ease: "back.out(1.7)" },
        "-=0.4"
      )
      .to(
        eastRuneRef.current,
        { opacity: 1, scale: 1, duration: 0.25, ease: "back.out(1.7)" },
        "-=0.18"
      )
      .to(
        southRuneRef.current,
        { opacity: 1, scale: 1, duration: 0.25, ease: "back.out(1.7)" },
        "-=0.18"
      )
      .to(
        westRuneRef.current,
        { opacity: 1, scale: 1, duration: 0.25, ease: "back.out(1.7)" },
        "-=0.18"
      );

      // PHASE 3 — CHAKRA ACTIVATION & PULSE (1.0s – 1.4s)
      tl.to(pulseAuraRef.current, {
        scale: 1.25,
        opacity: 0.85,
        duration: 0.45,
        yoyo: true,
        repeat: 1,
        ease: "sine.inOut",
      }, "-=0.2");

      // Particle collapses into emblem
      tl.to(particleRef.current, {
        scale: 0.4,
        opacity: 0,
        duration: 0.3,
      }, "-=0.4");

      // PHASE 4 — TYPOGRAPHY REVEAL (1.1s – 1.6s)
      tl.to(
        typographyRef.current,
        {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          duration: 0.55,
          ease: "power3.out",
        },
        "-=0.35"
      );

    }, containerRef);

    return () => ctx.revert();
  }, [onPhaseComplete]);

  return (
    <div
      ref={containerRef}
      className="relative flex flex-col items-center justify-center select-none pointer-events-none"
    >
      {/* ── AMBIENT RED CHAKRA AURA GLOW ─────────────────────────── */}
      <div
        ref={pulseAuraRef}
        className="absolute w-[320px] h-[320px] sm:w-[420px] sm:h-[420px] rounded-full pointer-events-none transition-transform"
        style={{
          background:
            "radial-gradient(circle, rgba(255,56,56,0.38) 0%, rgba(255,20,20,0.18) 45%, transparent 70%)",
          filter: "blur(35px)",
        }}
      />

      {/* ── PHASE 1: CHAKRA SPARK PARTICLE AT CENTER ─────────────── */}
      <div
        ref={particleRef}
        className="absolute w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full bg-white shadow-[0_0_20px_#ff3838,0_0_35px_#ff3838] z-30"
      />

      {/* ── MAIN KONOHA SEAL SVG EMBLEM ──────────────────────────── */}
      <svg
        viewBox="-170 -170 340 340"
        className="w-[280px] h-[280px] sm:w-[350px] sm:h-[350px] md:w-[390px] md:h-[390px] overflow-visible drop-shadow-[0_0_18px_rgba(255,56,56,0.85)] drop-shadow-[0_0_36px_rgba(255,20,20,0.5)] z-20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Intense Crimson Chakra Glow Filter */}
          <filter id="chakraGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="2.5" result="blur1" />
            <feGaussianBlur in="SourceGraphic" stdDeviation="6" result="blur2" />
            <feMerge>
              <feMergeNode in="blur2" />
              <feMergeNode in="blur1" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* ── 1. INNER CONTINUOUS CIRCLE ───────────────────────── */}
        <circle
          ref={innerRingRef}
          cx="0"
          cy="0"
          r="82"
          stroke="#ff3838"
          strokeWidth="1.5"
          strokeOpacity="0.85"
        />

        {/* ── 2. MIDDLE SEGMENTED CIRCLE & COMPASS TICKS ────────── */}
        <g ref={middleRingRef}>
          {/* Dashed circular ring */}
          <circle
            cx="0"
            cy="0"
            r="114"
            stroke="#ff3838"
            strokeWidth="1.2"
            strokeDasharray="4 8"
            strokeOpacity="0.55"
          />

          {/* Diagonal 45° cross lines with fine dashed ticks */}
          <line
            x1="-128"
            y1="-128"
            x2="128"
            y2="128"
            stroke="#ff3838"
            strokeWidth="0.8"
            strokeDasharray="2 10"
            strokeOpacity="0.3"
          />
          <line
            x1="-128"
            y1="128"
            x2="128"
            y2="-128"
            stroke="#ff3838"
            strokeWidth="0.8"
            strokeDasharray="2 10"
            strokeOpacity="0.3"
          />

          {/* Radial tick marks around circle */}
          {[30, 60, 120, 150, 210, 240, 300, 330].map((deg) => (
            <line
              key={deg}
              x1="0"
              y1="-110"
              x2="0"
              y2="-118"
              stroke="#ff3838"
              strokeWidth="1"
              strokeOpacity="0.6"
              transform={`rotate(${deg})`}
            />
          ))}
        </g>

        {/* ── 3. OUTER SEGMENTED RING (4 BOLD ARCS) ────────────── */}
        <g ref={outerRingRef}>
          {/* Subtle outer baseline circle */}
          <circle
            cx="0"
            cy="0"
            r="142"
            stroke="#ff3838"
            strokeWidth="0.8"
            strokeOpacity="0.25"
          />

          {/* 4 Prominent Glowing Curved Arcs (Matching Reference Image) */}
          {/* Top-Right Arc */}
          <path
            d="M 44 -135 A 142 142 0 0 1 135 -44"
            stroke="#ff3838"
            strokeWidth="4"
            strokeLinecap="round"
            filter="url(#chakraGlow)"
          />
          {/* Bottom-Right Arc */}
          <path
            d="M 135 44 A 142 142 0 0 1 44 135"
            stroke="#ff3838"
            strokeWidth="4"
            strokeLinecap="round"
            filter="url(#chakraGlow)"
          />
          {/* Bottom-Left Arc */}
          <path
            d="M -44 135 A 142 142 0 0 1 -135 44"
            stroke="#ff3838"
            strokeWidth="4"
            strokeLinecap="round"
            filter="url(#chakraGlow)"
          />
          {/* Top-Left Arc */}
          <path
            d="M -135 -44 A 142 142 0 0 1 -44 -135"
            stroke="#ff3838"
            strokeWidth="4"
            strokeLinecap="round"
            filter="url(#chakraGlow)"
          />

          {/* Outer corner tick brackets */}
          {[45, 135, 225, 315].map((deg) => (
            <circle
              key={deg}
              cx="0"
              cy="-142"
              r="2"
              fill="#ff3838"
              transform={`rotate(${deg})`}
            />
          ))}
        </g>

        {/* ── 4. FOUR DIRECTIONAL SEALING RUNES (N, E, S, W) ───── */}
        {/* North Sealing Mark (12 o'clock) */}
        <g ref={northRuneRef} stroke="#ff3838" strokeLinecap="round" strokeLinejoin="round" filter="url(#chakraGlow)">
          <line x1="0" y1="-65" x2="0" y2="-165" strokeWidth="2" />
          <path d="M -8 -88 L 0 -83 L 8 -88" strokeWidth="1.8" />
          <path d="M -12 -108 L 0 -102 L 12 -108" strokeWidth="2" />
          <path d="M -10 -128 L 0 -123 L 10 -128" strokeWidth="1.8" />
          <path d="M -13 -144 L 0 -139 L 13 -144" strokeWidth="1.8" />
          <path d="M -5 -158 L 0 -166 L 5 -158" strokeWidth="2.2" />
        </g>

        {/* South Sealing Mark (6 o'clock) */}
        <g ref={southRuneRef} stroke="#ff3838" strokeLinecap="round" strokeLinejoin="round" filter="url(#chakraGlow)">
          <line x1="0" y1="65" x2="0" y2="165" strokeWidth="2" />
          <path d="M -8 88 L 0 83 L 8 88" strokeWidth="1.8" />
          <path d="M -12 108 L 0 102 L 12 108" strokeWidth="2" />
          <path d="M -10 128 L 0 123 L 10 128" strokeWidth="1.8" />
          <path d="M -13 144 L 0 139 L 13 144" strokeWidth="1.8" />
          <path d="M -5 158 L 0 166 L 5 158" strokeWidth="2.2" />
        </g>

        {/* East Sealing Mark (3 o'clock) */}
        <g ref={eastRuneRef} stroke="#ff3838" strokeLinecap="round" strokeLinejoin="round" filter="url(#chakraGlow)">
          <line x1="65" y1="0" x2="165" y2="0" strokeWidth="2" />
          <path d="M 88 -8 L 83 0 L 88 8" strokeWidth="1.8" />
          <path d="M 108 -12 L 102 0 L 108 12" strokeWidth="2" />
          <path d="M 128 -10 L 123 0 L 128 10" strokeWidth="1.8" />
          <path d="M 144 -13 L 139 0 L 144 13" strokeWidth="1.8" />
          <path d="M 158 -5 L 166 0 L 158 5" strokeWidth="2.2" />
        </g>

        {/* West Sealing Mark (9 o'clock) */}
        <g ref={westRuneRef} stroke="#ff3838" strokeLinecap="round" strokeLinejoin="round" filter="url(#chakraGlow)">
          <line x1="-65" y1="0" x2="-165" y2="0" strokeWidth="2" />
          <path d="M -88 -8 L -83 0 L -88 8" strokeWidth="1.8" />
          <path d="M -108 -12 L -102 0 L -108 12" strokeWidth="2" />
          <path d="M -128 -10 L -123 0 L -128 10" strokeWidth="1.8" />
          <path d="M -144 -13 L -139 0 L -144 13" strokeWidth="1.8" />
          <path d="M -158 -5 L -166 0 L -158 5" strokeWidth="2.2" />
        </g>

        {/* ── 5. AUTHENTIC KONOHAGAKURE LEAF EMBLEM (CENTER) ────── */}
        <g filter="url(#chakraGlow)">
          {/* Triangle Leaf Beak (Bottom-Left) */}
          <path
            ref={trianglePathRef}
            d="M -50 14 L 6 14 L -18 -22 Z"
            stroke="#ff3838"
            strokeWidth="7"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />

          {/* Leaf Contour, Stem Notch & Inner Chakra Spiral */}
          <path
            ref={leafPathRef}
            d="M -18 -22 C 2 -34 26 -38 36 -48 L 46 -58 L 38 -46 C 48 -22 46 8 35 24 C 22 40 -2 42 -18 34 C -34 24 -38 6 -32 -10 C -24 -26 -6 -30 12 -24 C 24 -18 26 -2 18 10 C 12 18 -2 18 -10 12 C -16 6 -14 -6 -6 -10 C 2 -14 10 -6 8 0 C 6 4 0 5 -2 2"
            stroke="#ff3838"
            strokeWidth="7"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
        </g>
      </svg>

      {/* ── PHASE 4: TYPOGRAPHY REVEAL (MATCHING REFERENCE IMAGE) ── */}
      <div
        ref={typographyRef}
        className="mt-6 sm:mt-8 flex flex-col items-center gap-2 z-20"
      >
        {/* Line 1: 封 印 解 除  •  A W A K E N I N G (with horizontal wings) */}
        <div className="flex items-center gap-3 sm:gap-4">
          <div className="h-[1px] w-8 sm:w-16 bg-gradient-to-r from-transparent to-[#ff3838]/80" />
          <div className="flex items-center gap-2 sm:gap-3 text-sm sm:text-base md:text-lg font-bold font-mono tracking-[0.25em] sm:tracking-[0.35em] text-[#ff4d4d] drop-shadow-[0_0_15px_rgba(255,56,56,0.9)]">
            <span className="text-white drop-shadow-[0_0_10px_#ff3838]">封印解除</span>
            <span className="text-[#ff7844] font-black">•</span>
            <span className="text-[#ff7844] tracking-[0.35em]">AWAKENING</span>
          </div>
          <div className="h-[1px] w-8 sm:w-16 bg-gradient-to-l from-transparent to-[#ff3838]/80" />
        </div>

        {/* Line 2: E N T E R I N G   K O N O H A   V I L L A G E */}
        <div className="text-[10px] sm:text-xs font-mono tracking-[0.35em] sm:tracking-[0.45em] text-[#ded6cf] uppercase drop-shadow-[0_0_8px_rgba(255,56,56,0.4)]">
          ENTERING KONOHA VILLAGE
        </div>
      </div>
    </div>
  );
}

