"use client";

import { useRef, useEffect, useCallback, useState } from "react";

interface CharacterRevealProps {
  narutoSrc: string;
  pamanSamSrc: string;
  /** Tailwind classes for the outer wrapper */
  className?: string;
}

/** Internal high-resolution backing store matching PNG dimensions (1024×682) */
const CW = 1024;
const CH = 682;
const BASE_BRUSH_SPACING = 8;

export function CharacterReveal({
  narutoSrc,
  pamanSamSrc,
  className = "",
}: CharacterRevealProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const narutoRef = useRef<HTMLImageElement | null>(null);
  const pamanRef = useRef<HTMLImageElement | null>(null);

  /**
   * OFFSCREEN BACKING CANVASES:
   * 1. maskRef: stores user brush strokes (starts 100% transparent; retains strokes across resizes).
   * 2. pamanCanvasRef: PamanSam layer masked with destination-in (visible ONLY where brushed).
   * 3. narutoCanvasRef: Naruto layer erased with destination-out (visible ONLY where unbrushed).
   */
  const maskRef = useRef<HTMLCanvasElement | null>(null);
  const pamanCanvasRef = useRef<HTMLCanvasElement | null>(null);
  const narutoCanvasRef = useRef<HTMLCanvasElement | null>(null);

  const isDrawingRef = useRef(false);
  const lastPosRef = useRef<{ x: number; y: number } | null>(null);
  const [hasInteracted, setHasInteracted] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const animFrameIdRef = useRef<number | null>(null);

  // Detect touch capability on mount for adaptive hints and brush radius
  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsTouchDevice(
        "ontouchstart" in window || navigator.maxTouchPoints > 0
      );
    }
  }, []);

  /* ─────────────────────────────────────────────────────────────
     COMPOSITE RENDER — TRUE CLEAN DUAL-LAYER REPLACEMENT
     • Brushed area: Naruto is 100% erased (destination-out),
       PamanSam is 100% revealed (destination-in).
     • Unbrushed area: Naruto is 100% visible, PamanSam is 100% hidden.
  ───────────────────────────────────────────────────────────── */
  const render = useCallback(() => {
    const canvas = canvasRef.current;
    const mask = maskRef.current;
    const naruto = narutoRef.current;
    const paman = pamanRef.current;
    if (!canvas || !mask || !naruto || !paman) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Offscreen helper canvases initialization
    if (!pamanCanvasRef.current) {
      const pc = document.createElement("canvas");
      pc.width = CW;
      pc.height = CH;
      pamanCanvasRef.current = pc;
    }
    if (!narutoCanvasRef.current) {
      const nc = document.createElement("canvas");
      nc.width = CW;
      nc.height = CH;
      narutoCanvasRef.current = nc;
    }

    const pamanCanvas = pamanCanvasRef.current;
    const narutoCanvas = narutoCanvasRef.current;
    const pCtx = pamanCanvas.getContext("2d");
    const nCtx = narutoCanvas.getContext("2d");
    if (!pCtx || !nCtx) return;

    // 1. Prepare PamanSam Layer (visible ONLY where brushed)
    pCtx.clearRect(0, 0, CW, CH);
    pCtx.globalCompositeOperation = "source-over";
    pCtx.drawImage(paman, 0, 0, CW, CH);
    pCtx.globalCompositeOperation = "destination-in";
    pCtx.drawImage(mask, 0, 0, CW, CH);

    // 2. Prepare Naruto Layer (completely erased in brushed areas)
    nCtx.clearRect(0, 0, CW, CH);
    nCtx.globalCompositeOperation = "source-over";
    nCtx.drawImage(naruto, 0, 0, CW, CH);
    nCtx.globalCompositeOperation = "destination-out";
    nCtx.drawImage(mask, 0, 0, CW, CH);

    // 3. Composite onto main display canvas
    ctx.clearRect(0, 0, CW, CH);
    ctx.globalCompositeOperation = "source-over";
    ctx.drawImage(narutoCanvas, 0, 0, CW, CH);
    ctx.drawImage(pamanCanvas, 0, 0, CW, CH);
  }, []);

  /* ─────────────────────────────────────────────────────────────
     INIT & IMAGE ASSET LOADING (WITH CACHE RACE-CONDITION GUARD)
  ───────────────────────────────────────────────────────────── */
  useEffect(() => {
    let isMounted = true;
    let loaded = 0;

    const checkReady = () => {
      loaded++;
      if (loaded < 2 || !isMounted) return;

      const canvas = canvasRef.current;
      if (canvas) {
        canvas.width = CW;
        canvas.height = CH;
      }

      // Initialize mask canvas if not yet created
      if (!maskRef.current) {
        const mask = document.createElement("canvas");
        mask.width = CW;
        mask.height = CH;
        maskRef.current = mask;
      }

      render();
    };

    const nImg = new Image();
    const pImg = new Image();

    nImg.src = narutoSrc;
    pImg.src = pamanSamSrc;

    narutoRef.current = nImg;
    pamanRef.current = pImg;

    if (nImg.complete) {
      checkReady();
    } else {
      nImg.onload = checkReady;
    }

    if (pImg.complete) {
      checkReady();
    } else {
      pImg.onload = checkReady;
    }

    const handleResize = () => {
      render();
    };
    window.addEventListener("resize", handleResize);

    return () => {
      isMounted = false;
      window.removeEventListener("resize", handleResize);
      if (animFrameIdRef.current !== null) {
        cancelAnimationFrame(animFrameIdRef.current);
      }
    };
  }, [narutoSrc, pamanSamSrc, render]);

  /* ─────────────────────────────────────────────────────────────
     NATIVE TOUCH EVENT LOCKING ON CANVAS
     Prevents mobile browser gesture scroll specifically on the
     character canvas so touch drawing never stutters or scrolls.
  ───────────────────────────────────────────────────────────── */
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const preventTouchScroll = (e: TouchEvent) => {
      if (e.cancelable) {
        e.preventDefault();
      }
    };

    canvas.addEventListener("touchstart", preventTouchScroll, { passive: false });
    canvas.addEventListener("touchmove", preventTouchScroll, { passive: false });

    return () => {
      canvas.removeEventListener("touchstart", preventTouchScroll);
      canvas.removeEventListener("touchmove", preventTouchScroll);
    };
  }, []);

  /* ─────────────────────────────────────────────────────────────
     RESET: Clear mask → Instantly restore 100% Naruto
  ───────────────────────────────────────────────────────────── */
  const handleReset = useCallback(() => {
    const mask = maskRef.current;
    if (!mask) return;
    const ctx = mask.getContext("2d");
    if (!ctx) return;

    ctx.clearRect(0, 0, CW, CH);
    setHasInteracted(false);
    lastPosRef.current = null;
    render();
  }, [render]);

  /* ─────────────────────────────────────────────────────────────
     ACCURATE POINTER COORDINATE MAPPING
     Converts client viewport (clientX, clientY) to internal canvas (1024×682).
     Guards against scale transforms and zero-dimension layout states.
  ───────────────────────────────────────────────────────────── */
  const toCanvasPos = useCallback(
    (el: HTMLCanvasElement, clientX: number, clientY: number) => {
      const rect = el.getBoundingClientRect();
      const width = rect.width || CW;
      const height = rect.height || CH;
      const scaleX = CW / width;
      const scaleY = CH / height;

      const rawX = (clientX - rect.left) * scaleX;
      const rawY = (clientY - rect.top) * scaleY;

      return {
        x: Math.max(-25, Math.min(CW + 25, rawX)),
        y: Math.max(-25, Math.min(CH + 25, rawY)),
      };
    },
    []
  );

  /* ─────────────────────────────────────────────────────────────
     BRUSH ENGINE: Dense interpolation & feathered alpha stamp
     Adapts brush radius based on device (wider for touch).
  ───────────────────────────────────────────────────────────── */
  const doBrush = useCallback(
    (x: number, y: number) => {
      const mask = maskRef.current;
      if (!mask) return;
      const mCtx = mask.getContext("2d");
      if (!mCtx) return;

      if (!hasInteracted) {
        setHasInteracted(true);
      }

      // Responsive brush radius: larger on touch screens for natural fingertip feel
      const brushRadius = isTouchDevice ? 100 : 75;
      const brushSpacing = BASE_BRUSH_SPACING;

      const last = lastPosRef.current;
      const pts: { x: number; y: number }[] = [];
      if (last) {
        const dist = Math.hypot(x - last.x, y - last.y);
        const steps = Math.max(1, Math.ceil(dist / brushSpacing));
        for (let i = 0; i <= steps; i++) {
          const t = i / steps;
          pts.push({
            x: last.x + (x - last.x) * t,
            y: last.y + (y - last.y) * t,
          });
        }
      } else {
        pts.push({ x, y });
      }

      mCtx.globalCompositeOperation = "source-over";
      pts.forEach(({ x: px, y: py }) => {
        const g = mCtx.createRadialGradient(px, py, 0, px, py, brushRadius);
        g.addColorStop(0, "rgba(255,255,255,1)");
        g.addColorStop(0.72, "rgba(255,255,255,1)"); // Solid core
        g.addColorStop(1, "rgba(255,255,255,0)");    // Feathered edge
        mCtx.fillStyle = g;
        mCtx.beginPath();
        mCtx.arc(px, py, brushRadius, 0, Math.PI * 2);
        mCtx.fill();
      });

      lastPosRef.current = { x, y };

      if (animFrameIdRef.current === null) {
        animFrameIdRef.current = requestAnimationFrame(() => {
          render();
          animFrameIdRef.current = null;
        });
      }
    },
    [hasInteracted, isTouchDevice, render]
  );

  /* ─────────────────────────────────────────────────────────────
     UNIFIED POINTER EVENTS (MOUSE, TOUCH, STYLUS)
  ───────────────────────────────────────────────────────────── */
  const onPointerDown = (e: React.PointerEvent<HTMLCanvasElement>) => {
    isDrawingRef.current = true;
    try {
      e.currentTarget.setPointerCapture(e.pointerId);
    } catch {
      // Ignored
    }
    const pos = toCanvasPos(e.currentTarget, e.clientX, e.clientY);
    lastPosRef.current = pos;
    doBrush(pos.x, pos.y);
  };

  const onPointerMove = (e: React.PointerEvent<HTMLCanvasElement>) => {
    if (!isDrawingRef.current) return;
    const pos = toCanvasPos(e.currentTarget, e.clientX, e.clientY);
    doBrush(pos.x, pos.y);
  };

  const onPointerUp = (e: React.PointerEvent<HTMLCanvasElement>) => {
    isDrawingRef.current = false;
    lastPosRef.current = null;
    try {
      if (e.currentTarget.hasPointerCapture(e.pointerId)) {
        e.currentTarget.releasePointerCapture(e.pointerId);
      }
    } catch {
      // Ignored
    }
  };

  const onPointerCancel = () => {
    isDrawingRef.current = false;
    lastPosRef.current = null;
  };

  return (
    <div className={`select-none relative w-full h-full ${className}`}>
      {/* ── Ambient sunset rim glow ───────────────────────────── */}
      <div className="absolute -inset-4 bg-gradient-to-tr from-[#ff6b35]/25 via-[#ff9f43]/15 to-transparent rounded-full blur-2xl pointer-events-none" />
      <div className="absolute top-[8%] right-[8%] w-[55%] h-[55%] bg-[#ff7844]/15 rounded-full blur-xl pointer-events-none" />

      {/* ── FLOATING INSTRUCTION BADGE ────────────────────────── */}
      <div className="absolute -top-10 sm:-top-12 left-1/2 -translate-x-1/2 z-30 pointer-events-none flex items-center gap-2 px-3 sm:px-4 py-1.5 rounded-full bg-[#120a0c]/90 border border-[#ff3838]/40 shadow-[0_0_20px_rgba(255,56,56,0.35)] backdrop-blur-md text-zinc-200 text-xs sm:text-sm font-medium animate-float-subtle select-none whitespace-nowrap">
        <span className="text-[#ff7844] font-bold text-sm">✦</span>
        <span>
          {isTouchDevice ? "Touch & swipe Naruto to reveal 0xSam" : "Brush Naruto to reveal 0xSam"}
        </span>
      </div>

      {/* ── Shared Character Container (fills 100% of the rock ledge stage anchor) ── */}
      <div
        className="relative w-full h-full"
        style={{ touchAction: "none" }}
      >
        <canvas
          ref={canvasRef}
          width={CW}
          height={CH}
          className="absolute inset-0 w-full h-full cursor-crosshair filter drop-shadow-[0_15px_35px_rgba(0,0,0,0.85)] drop-shadow-[0_0_25px_rgba(255,107,53,0.22)] touch-none pointer-events-auto"
          style={{ touchAction: "none" }}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={onPointerUp}
          onPointerCancel={onPointerCancel}
        />

        {/* ── Contact shadows on the rock surface ─────────────── */}
        <div className="absolute -bottom-2 left-[15%] right-[5%] h-4 sm:h-6 bg-black/80 blur-md rounded-full pointer-events-none z-20" />
        <div className="absolute -bottom-0.5 left-[22%] w-[38%] h-3 bg-black/70 blur-sm rounded-full pointer-events-none z-20" />
      </div>

      {/* ── RESET BUTTON (SAFELY BELOW CHARACTER) ─────────────── */}
      <div className="absolute -bottom-10 sm:-bottom-12 left-1/2 -translate-x-1/2 h-9 flex items-center justify-center z-30 pointer-events-auto">
        {hasInteracted ? (
          <button
            type="button"
            onClick={handleReset}
            className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#ff3838] hover:bg-[#e52e2e] border border-[#ff7675] text-white text-xs sm:text-sm font-semibold tracking-wide shadow-[0_0_20px_rgba(255,56,56,0.6)] hover:shadow-[0_0_30px_rgba(255,56,56,0.9)] hover:scale-105 transition-all duration-300 cursor-pointer pointer-events-auto whitespace-nowrap"
            aria-label="Reset to Naruto"
          >
            <span className="text-base font-bold">↺</span>
            <span>Reset Naruto</span>
          </button>
        ) : (
          <span className="text-[11px] font-mono text-zinc-500 tracking-wider whitespace-nowrap">
            [INTERACTIVE SHINOBI AVATAR]
          </span>
        )}
      </div>
    </div>
  );
}
