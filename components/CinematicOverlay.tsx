"use client";

import { useEffect, useRef } from "react";

export function CinematicOverlay() {
  const vignetteRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const onPointerMove = (e: PointerEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 5 + 50;
      const y = (e.clientY / window.innerHeight - 0.5) * 5 + 50;
      if (vignetteRef.current) {
        vignetteRef.current.style.background = `radial-gradient(circle at ${x}% ${y}%, transparent 30%, rgba(5,5,5,0.7) 90%, rgba(5,5,5,0.95) 100%)`;
      }
    };

    window.addEventListener("pointermove", onPointerMove, { passive: true });
    return () => window.removeEventListener("pointermove", onPointerMove);
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-[200] overflow-hidden">
      {/* 1. Global Scanline Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0)_50%,rgba(0,0,0,0.08)_50%)] bg-[length:100%_4px] opacity-60 mix-blend-overlay" />
      
      {/* 2. Film Noise */}
      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.03] mix-blend-screen" />

      {/* 3. Cinematic Vignette (Soft edges, dark corners) */}
      <div 
        ref={vignetteRef}
        className="absolute inset-0 mix-blend-multiply opacity-80 transition-all duration-75 ease-out"
        style={{
          background: "radial-gradient(circle at 50% 50%, transparent 30%, rgba(5,5,5,0.7) 90%, rgba(5,5,5,0.95) 100%)"
        }}
      />

      {/* 4. Very subtle Chromatic Aberration at edges (using inset shadows with colors) */}
      <div className="absolute inset-0 shadow-[inset_4px_0_15px_rgba(255,0,0,0.05),inset_-4px_0_15px_rgba(0,255,255,0.05)] mix-blend-screen" />
      
      {/* 5. Live System-Console Ambience (Subtle UI feed) */}
      <div className="absolute bottom-4 left-4 flex flex-col gap-1 font-mono text-[8px] sm:text-[10px] uppercase tracking-widest text-bone/20">
        <span className="flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-blood animate-pulse shadow-[0_0_8px_rgba(229,9,20,0.8)]" />
          NEURAL_LINK_ACTIVE
        </span>
        <span className="opacity-60">SYS.VER.9.4.2 // TOKYO</span>
      </div>

      <div className="absolute top-4 right-4 flex flex-col items-end gap-1 font-mono text-[8px] sm:text-[10px] uppercase tracking-widest text-bone/20">
        <span className="opacity-60">ENV_ATMOSPHERE_STABLE</span>
        <span className="opacity-40">MEM_ALLOC_OK</span>
      </div>
    </div>
  );
}
