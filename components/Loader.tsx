"use client";

import { useLayoutEffect, useRef, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import gsap from "gsap";

const bootSequence = [
  "SYSTEM_BOOT SEQUENCE INITIATED...",
  "BYPASSING SECURITY PROTOCOLS...",
  "ESTABLISHING NEURAL LINK...",
  "LOADING TACTICAL INTERFACE...",
  "SYNCHRONIZING WORLD LAYER...",
  "SIGNAL_CONNECTED."
];

export function Loader() {
  const root = useRef<HTMLDivElement>(null);
  const [lines, setLines] = useState<string[]>([]);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let currentLine = 0;
    const interval = setInterval(() => {
      if (currentLine < bootSequence.length) {
        setLines(prev => [...prev, bootSequence[currentLine]]);
        setProgress(Math.floor(((currentLine + 1) / bootSequence.length) * 100));
        currentLine++;
      } else {
        clearInterval(interval);
      }
    }, 400);

    return () => clearInterval(interval);
  }, []);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.timeline()
        .to(".loader-mark", { rotation: 360, duration: 4, ease: "linear", repeat: -1 })
        .to(".loader-flash", { opacity: 1, duration: 0.08, repeat: 5, yoyo: true }, "+=2.2")
        .to(".loader-slice", { xPercent: 100, stagger: 0.1, duration: 0.8, ease: "power4.inOut" }, "+=2.5");
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <motion.div
      ref={root}
      exit={{ y: "-100%", transition: { duration: 0.8, ease: [0.83, 0, 0.17, 1] } }}
      className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden bg-ink text-bone font-mono"
    >
      <div className="loader-flash pointer-events-none absolute inset-0 z-20 bg-blood opacity-0 mix-blend-color-burn" />
      
      {/* Background Slices for transition */}
      {[0, 1, 2, 3, 4].map((item) => (
        <div
          key={item}
          className="loader-slice absolute left-0 h-[21vh] w-full bg-[#030303] z-10"
          style={{ top: `${item * 20}%` }}
        />
      ))}

      <div className="relative z-30 flex flex-col items-center justify-center w-full max-w-3xl px-8">
        
        {/* Futuristic Hex/Circle Loader */}
        <div className="relative mb-12 flex h-40 w-40 items-center justify-center">
          <div className="loader-mark absolute h-full w-full rounded-full border border-blood/30 border-t-blood border-r-blood" />
          <div className="loader-mark absolute h-32 w-32 rounded-full border border-bone/20 border-b-bone" style={{ animationDirection: "reverse" }} />
          <div className="absolute h-16 w-16 bg-blood shadow-[0_0_30px_rgba(229,9,20,0.8)] blur-md animate-pulse" />
          <span className="z-10 font-display text-4xl text-bone">0X</span>
        </div>

        {/* Terminal Boot Sequence */}
        <div className="w-full text-left font-mono text-sm uppercase tracking-widest text-bone/70 h-48 flex flex-col justify-end">
          <AnimatePresence>
            {lines.map((line, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="mb-2 flex items-center gap-4"
              >
                <span className="text-blood">[{idx + 1}]</span>
                <span>{line}</span>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Progress Bar */}
        <div className="mt-8 w-full border border-bone/20 h-2 p-0.5 relative overflow-hidden">
          <motion.div 
            className="h-full bg-blood shadow-[0_0_10px_rgba(229,9,20,0.8)]"
            initial={{ width: "0%" }}
            animate={{ width: `${progress}%` }}
            transition={{ ease: "linear", duration: 0.4 }}
          />
        </div>
        
        <div className="mt-4 flex w-full justify-between text-xs tracking-[0.3em] text-bone/40 uppercase">
          <span>Neural Engine</span>
          <span>{progress}%</span>
          <span>Online</span>
        </div>
      </div>
      
      {/* Scanline Overlay */}
      <div className="pointer-events-none absolute inset-0 z-50 bg-[url('/noise.png')] opacity-10 mix-blend-overlay" />
      <div className="pointer-events-none absolute inset-0 z-50 bg-[linear-gradient(rgba(255,255,255,0)_50%,rgba(0,0,0,0.1)_50%)] bg-[length:100%_4px]" />
    </motion.div>
  );
}
