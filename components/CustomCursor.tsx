"use client";

import { useEffect, useRef } from "react";

export function CustomCursor() {
  const cursorRingRef = useRef<HTMLDivElement>(null);
  const cursorDotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    
    // Check if user prefers reduced motion
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let ringX = mouseX;
    let ringY = mouseY;
    let hasMoved = false;

    const onPointerMove = (e: PointerEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      hasMoved = true;
      
      // Update dot instantly using GPU-accelerated translate3d
      if (cursorDotRef.current) {
        cursorDotRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) translate3d(-50%, -50%, 0)`;
      }
    };

    let rafId: number;
    const updatePosition = () => {
      if (hasMoved) {
        // High-performance spring interpolation
        ringX += (mouseX - ringX) * 0.15;
        ringY += (mouseY - ringY) * 0.15;

        if (cursorRingRef.current) {
          cursorRingRef.current.style.transform = `translate3d(${ringX}px, ${ringY}px, 0) translate3d(-50%, -50%, 0)`;
        }
      }
      rafId = requestAnimationFrame(updatePosition);
    };

    window.addEventListener("pointermove", onPointerMove, { passive: true });
    rafId = requestAnimationFrame(updatePosition);

    return () => {
      window.removeEventListener("pointermove", onPointerMove);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-[300] hidden md:block">
      {/* Outer Ring */}
      <div
        ref={cursorRingRef}
        className="fixed left-0 top-0 h-6 w-6 rounded-full border border-bone mix-blend-difference will-change-transform"
        style={{ transform: "translate3d(-100px, -100px, 0) translate3d(-50%, -50%, 0)" }}
      />
      {/* Inner Dot */}
      <div
        ref={cursorDotRef}
        className="fixed left-0 top-0 h-1.5 w-1.5 rounded-full bg-blood shadow-[0_0_8px_#e50914] will-change-transform"
        style={{ transform: "translate3d(-100px, -100px, 0) translate3d(-50%, -50%, 0)" }}
      />
    </div>
  );
}
