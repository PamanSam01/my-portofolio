"use client";

import React, { useEffect, useRef } from "react";

interface SakuraPetalsProps {
  /** Optional multiplier for particle density */
  density?: number;
  /** Legacy count prop */
  count?: number;
}

interface Petal {
  x: number;
  y: number;
  z: number; // Depth layer (0.4 - 1.5) for 3D parallax
  w: number;
  h: number;
  vx: number;
  vy: number;
  angle: number;
  angleSpeed: number;
  flip: number;
  flipSpeed: number;
  swayPhase: number;
  swaySpeed: number;
  swayAmp: number;
  colorIndex: number;
  opacity: number;
}

interface ChakraParticle {
  x: number;
  y: number;
  z: number;
  radius: number;
  vx: number;
  vy: number;
  pulsePhase: number;
  pulseSpeed: number;
  isOrange: boolean;
  baseOpacity: number;
}

interface GoldDust {
  x: number;
  y: number;
  radius: number;
  vx: number;
  vy: number;
  twinklePhase: number;
  twinkleSpeed: number;
  baseOpacity: number;
}

interface ChakraStreak {
  x: number;
  y: number;
  length: number;
  angle: number;
  speed: number;
  opacity: number;
  life: number;
  maxLife: number;
}

export function SakuraPetals({ density = 1.0 }: SakuraPetalsProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Respect user's motion preference
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // DPR handling capped at 2 for performance
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    ctx.scale(dpr, dpr);

    // Screen-responsive particle density
    const isMobile = width < 768;
    const isTablet = width >= 768 && width < 1024;
    const scaleFactor = (isMobile ? 0.5 : isTablet ? 0.75 : 1.0) * density;

    const PETAL_COUNT = Math.round(55 * scaleFactor);
    const CHAKRA_COUNT = Math.round(40 * scaleFactor);
    const GOLD_COUNT = Math.round(45 * scaleFactor);

    // Natural Sakura Color Palette (Soft pastel pinks & rose gradients)
    const petalColors = [
      { start: "#fff0f3", mid: "#ffccd5", end: "#ff8fa3" }, // Classic soft cherry blossom
      { start: "#fff5f7", mid: "#ffb3c1", end: "#ff758f" }, // Delicate blush pink
      { start: "#ffe8ed", mid: "#f8a5b5", end: "#f06585" }, // Warm blossom rose
      { start: "#ffeff2", mid: "#fbc2cb", end: "#e55a78" }, // Crimson-tinted petal
    ];

    // =========================================================================
    // INITIALIZE PARTICLES
    // =========================================================================

    const petals: Petal[] = [];
    for (let i = 0; i < PETAL_COUNT; i++) {
      const z = 0.5 + Math.random() * 1.0;
      petals.push({
        x: Math.random() * width,
        y: Math.random() * height,
        z,
        w: (9 + Math.random() * 8) * z,
        h: (13 + Math.random() * 10) * z,
        vx: (Math.random() - 0.5) * 0.4 + 0.3, // Slight base eastward drift
        vy: (0.7 + Math.random() * 0.9) * z,  // Downward fall speed
        angle: Math.random() * Math.PI * 2,
        angleSpeed: (Math.random() - 0.5) * 0.025,
        flip: Math.random() * Math.PI * 2,
        flipSpeed: 0.02 + Math.random() * 0.035,
        swayPhase: Math.random() * Math.PI * 2,
        swaySpeed: 0.015 + Math.random() * 0.02,
        swayAmp: 0.8 + Math.random() * 1.2,
        colorIndex: Math.floor(Math.random() * petalColors.length),
        opacity: 0.55 + Math.random() * 0.35,
      });
    }

    const chakraParticles: ChakraParticle[] = [];
    for (let i = 0; i < CHAKRA_COUNT; i++) {
      chakraParticles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        z: 0.6 + Math.random() * 0.8,
        radius: 1.2 + Math.random() * 2.2,
        vx: (Math.random() - 0.5) * 0.5 + 0.15,
        vy: -0.2 - Math.random() * 0.6, // Buoyant upward chakra drift
        pulsePhase: Math.random() * Math.PI * 2,
        pulseSpeed: 0.03 + Math.random() * 0.05,
        isOrange: Math.random() > 0.45, // 55% crimson red, 45% chakra orange
        baseOpacity: 0.4 + Math.random() * 0.45,
      });
    }

    const goldDust: GoldDust[] = [];
    for (let i = 0; i < GOLD_COUNT; i++) {
      goldDust.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: 0.8 + Math.random() * 1.4,
        vx: (Math.random() - 0.5) * 0.3 + 0.1,
        vy: 0.1 + Math.random() * 0.3,
        twinklePhase: Math.random() * Math.PI * 2,
        twinkleSpeed: 0.02 + Math.random() * 0.04,
        baseOpacity: 0.25 + Math.random() * 0.45,
      });
    }

    const streaks: ChakraStreak[] = [];

    // =========================================================================
    // WIND GUST & MOUSE DISPLACEMENT
    // =========================================================================

    let gustStrength = 0;
    let gustTarget = 0;
    let gustTimer = 0;

    let mouseX = -1000;
    let mouseY = -1000;
    let prevMouseX = -1000;
    let prevMouseY = -1000;
    let mouseSpeedX = 0;
    let mouseSpeedY = 0;

    const onPointerMove = (e: PointerEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (prevMouseX !== -1000) {
        mouseSpeedX = (mouseX - prevMouseX) * 0.25;
        mouseSpeedY = (mouseY - prevMouseY) * 0.25;
      }
      prevMouseX = mouseX;
      prevMouseY = mouseY;
    };

    const onPointerLeave = () => {
      mouseX = -1000;
      mouseY = -1000;
      mouseSpeedX = 0;
      mouseSpeedY = 0;
    };

    window.addEventListener("pointermove", onPointerMove, { passive: true });
    window.addEventListener("pointerleave", onPointerLeave, { passive: true });

    // Window resize handler
    const onResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.scale(dpr, dpr);
    };
    window.addEventListener("resize", onResize);

    // =========================================================================
    // SHAPE DRAWING HELPERS
    // =========================================================================

    // Organic Sakura Petal with natural notched tip and vein
    function drawSakuraPetal(
      context: CanvasRenderingContext2D,
      w: number,
      h: number,
      color: { start: string; mid: string; end: string }
    ) {
      context.beginPath();
      // Base stem point
      context.moveTo(0, -h * 0.48);
      // Left curve
      context.bezierCurveTo(-w * 0.55, -h * 0.25, -w * 0.58, h * 0.2, -w * 0.24, h * 0.48);
      // Notched cleft at petal tip
      context.quadraticCurveTo(0, h * 0.36, w * 0.24, h * 0.48);
      // Right curve back to base
      context.bezierCurveTo(w * 0.58, h * 0.2, w * 0.55, -h * 0.25, 0, -h * 0.48);
      context.closePath();

      // Soft vertical gradient from blush white to delicate rose
      const grad = context.createLinearGradient(0, -h * 0.5, 0, h * 0.5);
      grad.addColorStop(0, color.start);
      grad.addColorStop(0.55, color.mid);
      grad.addColorStop(1, color.end);
      context.fillStyle = grad;
      context.fill();

      // Faint translucent petal vein
      context.beginPath();
      context.moveTo(0, -h * 0.35);
      context.lineTo(0, h * 0.15);
      context.strokeStyle = "rgba(255, 120, 140, 0.3)";
      context.lineWidth = 0.75;
      context.stroke();
    }

    // =========================================================================
    // ANIMATION LOOP (60 FPS)
    // =========================================================================

    let animId: number;

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Damp mouse speeds
      mouseSpeedX *= 0.92;
      mouseSpeedY *= 0.92;

      // Wind gust cycle (every ~8-12 seconds a gentle breeze sweeps through)
      gustTimer++;
      if (gustTimer % 550 === 0) {
        gustTarget = 1.6 + Math.random() * 1.2;
      }
      if (gustTimer % 550 === 180) {
        gustTarget = 0;
      }
      gustStrength += (gustTarget - gustStrength) * 0.02;

      // Periodically spawn a subtle chakra streak
      if (Math.random() < 0.008 && streaks.length < 3) {
        streaks.push({
          x: Math.random() * (width * 0.8),
          y: Math.random() * (height * 0.7),
          length: 25 + Math.random() * 35,
          angle: 0.3 + (Math.random() - 0.5) * 0.2, // Drifting diagonally down-right
          speed: 3.5 + Math.random() * 2.0,
          opacity: 0,
          life: 0,
          maxLife: 45 + Math.random() * 30,
        });
      }

      // ───────────────────────────────────────────────────────────────────────
      // 1. RENDER CHAKRA ENERGY STREAKS
      // ───────────────────────────────────────────────────────────────────────
      for (let i = streaks.length - 1; i >= 0; i--) {
        const s = streaks[i];
        s.life++;
        s.x += Math.cos(s.angle) * s.speed + gustStrength * 0.8;
        s.y += Math.sin(s.angle) * s.speed;

        // Fade in and out
        const progress = s.life / s.maxLife;
        const alpha = Math.sin(progress * Math.PI) * 0.65;

        const tailX = s.x - Math.cos(s.angle) * s.length;
        const tailY = s.y - Math.sin(s.angle) * s.length;

        const grad = ctx.createLinearGradient(tailX, tailY, s.x, s.y);
        grad.addColorStop(0, "rgba(255, 56, 56, 0)");
        grad.addColorStop(0.6, "rgba(255, 120, 68, 0.45)");
        grad.addColorStop(1, "rgba(255, 240, 200, 0.85)");

        ctx.save();
        ctx.strokeStyle = grad;
        ctx.lineWidth = 1.4;
        ctx.lineCap = "round";
        ctx.globalAlpha = alpha;
        ctx.beginPath();
        ctx.moveTo(tailX, tailY);
        ctx.lineTo(s.x, s.y);
        ctx.stroke();
        ctx.restore();

        if (s.life >= s.maxLife) {
          streaks.splice(i, 1);
        }
      }

      // ───────────────────────────────────────────────────────────────────────
      // 2. RENDER SUBTLE GOLDEN AMBER DUST
      // ───────────────────────────────────────────────────────────────────────
      for (let i = 0; i < goldDust.length; i++) {
        const d = goldDust[i];
        d.twinklePhase += d.twinkleSpeed;
        const twinkle = 0.5 + Math.sin(d.twinklePhase) * 0.5;
        const alpha = d.baseOpacity * (0.6 + twinkle * 0.4);

        d.x += d.vx + gustStrength * 0.25;
        d.y += d.vy;

        // Mouse displacement
        if (mouseX !== -1000) {
          const dx = d.x - mouseX;
          const dy = d.y - mouseY;
          const distSq = dx * dx + dy * dy;
          if (distSq < 10000) {
            const force = (1 - Math.sqrt(distSq) / 100) * 0.8;
            d.x += dx * force * 0.04 + mouseSpeedX * 0.15;
            d.y += dy * force * 0.04 + mouseSpeedY * 0.15;
          }
        }

        // Wrap around bounds
        if (d.x > width + 10) d.x = -10;
        if (d.x < -10) d.x = width + 10;
        if (d.y > height + 10) d.y = -10;
        if (d.y < -10) d.y = height + 10;

        ctx.save();
        ctx.globalAlpha = alpha;
        ctx.fillStyle = "#f5b041";
        ctx.beginPath();
        ctx.arc(d.x, d.y, d.radius, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }

      // ───────────────────────────────────────────────────────────────────────
      // 3. RENDER CHAKRA PARTICLES (Crimson Red & Warm Orange Glow)
      // ───────────────────────────────────────────────────────────────────────
      for (let i = 0; i < chakraParticles.length; i++) {
        const c = chakraParticles[i];
        c.pulsePhase += c.pulseSpeed;
        const pulse = 0.65 + Math.sin(c.pulsePhase) * 0.35;
        const currentAlpha = c.baseOpacity * pulse;

        c.x += c.vx + gustStrength * 0.45;
        c.y += c.vy;

        // Mouse displacement
        if (mouseX !== -1000) {
          const dx = c.x - mouseX;
          const dy = c.y - mouseY;
          const distSq = dx * dx + dy * dy;
          if (distSq < 14400) {
            const force = (1 - Math.sqrt(distSq) / 120) * 1.1;
            c.x += dx * force * 0.05 + mouseSpeedX * 0.2;
            c.y += dy * force * 0.05 + mouseSpeedY * 0.2;
          }
        }

        // Float up and recycle at bottom
        if (c.y < -20) {
          c.y = height + 15;
          c.x = Math.random() * width;
        }
        if (c.x > width + 20) c.x = -20;
        if (c.x < -20) c.x = width + 20;

        // Draw glowing chakra orb with soft radial gradient
        const glowRad = c.radius * 3.8 * c.z;
        const radGrad = ctx.createRadialGradient(c.x, c.y, 0, c.x, c.y, glowRad);

        if (c.isOrange) {
          radGrad.addColorStop(0, "rgba(255, 245, 220, 0.95)");
          radGrad.addColorStop(0.35, "rgba(255, 120, 68, 0.7)");
          radGrad.addColorStop(1, "rgba(255, 87, 34, 0)");
        } else {
          radGrad.addColorStop(0, "rgba(255, 240, 240, 0.95)");
          radGrad.addColorStop(0.35, "rgba(255, 56, 56, 0.75)");
          radGrad.addColorStop(1, "rgba(214, 20, 20, 0)");
        }

        ctx.save();
        ctx.globalAlpha = currentAlpha;
        ctx.fillStyle = radGrad;
        ctx.beginPath();
        ctx.arc(c.x, c.y, glowRad, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }

      // ───────────────────────────────────────────────────────────────────────
      // 4. RENDER SAKURA PETALS (Natural 3D Tumbling, Flutter & Parallax)
      // ───────────────────────────────────────────────────────────────────────
      for (let i = 0; i < petals.length; i++) {
        const p = petals[i];

        // 3D rotation & oscillation
        p.angle += p.angleSpeed;
        p.flip += p.flipSpeed;
        p.swayPhase += p.swaySpeed;

        const sway = Math.sin(p.swayPhase) * p.swayAmp;
        p.x += p.vx + sway + gustStrength * (0.8 + p.z * 0.6);
        p.y += p.vy + Math.abs(sway * 0.2);

        // Mouse displacement breeze
        if (mouseX !== -1000) {
          const dx = p.x - mouseX;
          const dy = p.y - mouseY;
          const distSq = dx * dx + dy * dy;
          if (distSq < 16900) {
            const force = (1 - Math.sqrt(distSq) / 130) * 1.4;
            p.x += dx * force * 0.05 + mouseSpeedX * 0.3;
            p.y += dy * force * 0.03 + mouseSpeedY * 0.2;
            p.flip += 0.06; // Quick flutter when disturbed by mouse
          }
        }

        // Loop petals naturally from top to bottom
        if (p.y > height + 30) {
          p.y = -30;
          p.x = Math.random() * width;
        }
        if (p.x > width + 40) p.x = -30;
        if (p.x < -40) p.x = width + 30;

        // 3D projection: scale Y by cos(flip) to create authentic flipping & tumbling
        const cosFlip = Math.cos(p.flip);
        const flipScale = Math.max(0.12, Math.abs(cosFlip));

        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate(p.angle);
        ctx.scale(1, cosFlip < 0 ? -flipScale : flipScale);
        ctx.globalAlpha = p.opacity * (0.7 + Math.abs(cosFlip) * 0.3);

        // Subtle soft petal shadow for depth
        ctx.shadowColor = "rgba(220, 50, 70, 0.25)";
        ctx.shadowBlur = 4 * p.z;

        drawSakuraPetal(ctx, p.w, p.h, petalColors[p.colorIndex]);
        ctx.restore();
      }

      animId = requestAnimationFrame(render);
    };

    animId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerleave", onPointerLeave);
      window.removeEventListener("resize", onResize);
    };
  }, [density]);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-20 overflow-hidden"
      style={{ pointerEvents: "none" }}
      aria-hidden="true"
    />
  );
}
