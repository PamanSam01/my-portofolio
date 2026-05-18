"use client";

import { motion, AnimatePresence } from "framer-motion";
import { navItems } from "@/lib/data";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { LanguageToggle } from "./LanguageToggle";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export function FloatingNav() {
  const { t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", handleResize, { passive: true });
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const menuVariants = {
    closed: {
      opacity: 0,
      x: "100%",
      transition: {
        duration: 0.4,
        ease: [0.16, 1, 0.3, 1],
        staggerChildren: 0.05,
        staggerDirection: -1,
      },
    },
    open: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: [0.16, 1, 0.3, 1],
        staggerChildren: 0.08,
      },
    },
  };

  const itemVariants = {
    closed: { x: 50, opacity: 0 },
    open: { x: 0, opacity: 1, transition: { duration: 0.3, ease: "easeOut" } },
  };

  return (
    <>
      {/* 1. Dedicated Mobile Header Bar (Cyberpunk Red Border & Safe Area Support) */}
      <div 
        className="fixed top-0 left-0 right-0 z-[100] flex md:hidden h-16 w-full items-center justify-between border-b border-blood/30 bg-ink/90 px-5 shadow-redline backdrop-blur-xl pt-[env(safe-area-inset-top)]" 
        aria-label="Mobile navigation header"
      >
        {/* Mobile Left Identity HUD */}
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-blood animate-pulse shadow-[0_0_8px_rgba(229,9,20,0.8)]" />
          <span className="font-display text-xs uppercase tracking-[0.25em] text-bone">
            0X / SAM
          </span>
        </div>

        {/* Mobile Right Controls */}
        <div className="flex items-center gap-3">
          <LanguageToggle />
          
          {/* Tactical Hamburger Trigger */}
          <button
            onClick={() => setIsOpen(true)}
            className="flex h-10 w-10 items-center justify-center border border-blood/40 bg-blood/10 text-blood shadow-[0_0_10px_rgba(229,9,20,0.15)] transition hover:bg-blood hover:text-white"
            aria-label="Open mobile portal"
          >
            <Menu size={20} />
          </button>
        </div>
      </div>

      {/* 2. Primary Floating Nav Bar (Desktop Only - Hidden on Mobile) */}
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 3, type: "spring", stiffness: 130, damping: 15 }}
        className="fixed left-1/2 top-4 z-50 hidden md:flex w-auto -translate-x-1/2 items-center justify-center gap-1 border border-bone/20 bg-ink/80 px-2 py-2 shadow-redline backdrop-blur-xl"
        aria-label="Primary desktop navigation"
      >
        {navItems.map((item) => (
          <a
            key={item}
            href={`#${item}`}
            className="group relative overflow-hidden px-3 py-2 font-display text-sm uppercase tracking-[0.16em] text-bone/70 transition hover:text-white"
          >
            <span className="relative z-10">{t(`nav.${item}`)}</span>
            <span className="absolute inset-0 -z-0 translate-y-full bg-blood transition-transform duration-200 group-hover:translate-y-0" />
          </a>
        ))}
        <div className="ml-2 pl-2 border-l border-bone/20">
          <LanguageToggle />
        </div>
      </motion.nav>

      {/* 3. Fullscreen Cinematic Cyberpunk Mobile Portal Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            className="fixed inset-0 z-[250] flex flex-col justify-between bg-ink/98 p-8 pt-[calc(2.5rem+env(safe-area-inset-top))] backdrop-blur-2xl md:hidden border-l-4 border-blood"
          >
            {/* Tactical Grid Background lines */}
            <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />

            {/* Fullscreen Overlay Header */}
            <div className="relative z-10 flex items-center justify-between border-b border-bone/10 pb-6">
              <div className="flex flex-col">
                <span className="font-display text-2xl tracking-[0.25em] text-blood">
                  SYSTEM_PORTAL
                </span>
                <span className="font-mono text-[9px] tracking-widest text-bone/40 uppercase mt-0.5">
                  SECURE NET DIRECTIVE // 0XSAM
                </span>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="flex h-10 w-10 items-center justify-center border border-blood bg-blood/10 text-blood shadow-redline transition hover:bg-blood hover:text-white"
                aria-label="Close menu"
              >
                <X size={20} />
              </button>
            </div>

            {/* Tactical Portal Menu Link Elements */}
            <div className="relative z-10 my-auto flex flex-col gap-6 pl-4">
              {navItems.map((item, index) => (
                <motion.div key={item} variants={itemVariants}>
                  <a
                    href={`#${item}`}
                    onClick={() => setIsOpen(false)}
                    className="group flex items-baseline gap-4 py-2 font-display text-4xl uppercase tracking-[0.2em] text-bone/60 transition hover:text-blood"
                  >
                    <span className="font-mono text-xs text-blood">
                      {String(index + 1).padStart(2, "0")}.
                    </span>
                    <span className="glitch group-hover:text-bone" data-text={t(`nav.${item}`)}>
                      {t(`nav.${item}`)}
                    </span>
                  </a>
                </motion.div>
              ))}
            </div>

            {/* Fullscreen Overlay Footer */}
            <div className="relative z-10 border-t border-bone/10 pt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 font-mono text-[10px] tracking-[0.2em] text-bone/30 uppercase">
              <span>STATUS: SECURE GATEWAY ENCRYPTED</span>
              <span>ALL SYSTEMS NOMINAL // {new Date().getFullYear()}</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
