"use client";

import React, { createContext, useContext, useState, useEffect, useCallback, useMemo, useRef } from "react";

export type IntroPhase = "awakening" | "shinobi" | "identity" | "transition" | "completed";

interface IntroContextValue {
  phase: IntroPhase;
  isComplete: boolean;
  skipIntro: () => void;
}

const IntroContext = createContext<IntroContextValue>({
  phase: "completed",
  isComplete: true,
  skipIntro: () => {},
});

export function IntroProvider({ children }: { children: React.ReactNode }) {
  // Fresh browser load starts in "awakening"
  // Client-side navigation in Next.js keeps layout.tsx and this provider mounted,
  // so isComplete remains true during client-side route transitions without replaying.
  const [phase, setPhase] = useState<IntroPhase>("awakening");
  const [isComplete, setIsComplete] = useState<boolean>(false);
  const completedRef = useRef(false);

  const skipIntro = useCallback(() => {
    if (completedRef.current) return;
    completedRef.current = true;
    setIsComplete(true);
    setPhase("completed");
  }, []);

  useEffect(() => {
    // Check prefers-reduced-motion
    if (typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      skipIntro();
      return;
    }

    // Keyboard ESC listener to skip intro immediately
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        skipIntro();
      }
    };
    window.addEventListener("keydown", handleKeyDown);

    // Timed cinematic sequence:
    // Scene 1: Awakening (0.0s - 1.6s) - Dark atmosphere & Konoha Seal Awakening
    // Scene 2: Shinobi Entrance (1.6s - 2.7s) - Naruto appears on the rocky ledge
    const tShinobi = setTimeout(() => {
      if (!completedRef.current) setPhase("shinobi");
    }, 1600);

    // Scene 3: Identity Reveal (2.7s - 3.7s) - Typography, buttons, & skill docks reveal
    const tIdentity = setTimeout(() => {
      if (!completedRef.current) setPhase("identity");
    }, 2700);

    // Scene 4: Cinematic Handover (3.7s - 4.3s) - Letterbox bars slide off screen
    const tTransition = setTimeout(() => {
      if (!completedRef.current) setPhase("transition");
    }, 3700);

    // Completion: Interactive landing page
    const tDone = setTimeout(() => {
      skipIntro();
    }, 4400);

    // Guaranteed safety fallback: under any condition, never get stuck
    const tFallback = setTimeout(() => {
      skipIntro();
    }, 5500);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      clearTimeout(tShinobi);
      clearTimeout(tIdentity);
      clearTimeout(tTransition);
      clearTimeout(tDone);
      clearTimeout(tFallback);
    };
  }, [skipIntro]);

  const value = useMemo(
    () => ({
      phase,
      isComplete,
      skipIntro,
    }),
    [phase, isComplete, skipIntro]
  );

  return <IntroContext.Provider value={value}>{children}</IntroContext.Provider>;
}

export function useIntro() {
  return useContext(IntroContext);
}

