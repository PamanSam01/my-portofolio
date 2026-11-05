"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { useIntro } from "@/components/intro/IntroContext";
import { LanguageToggle } from "./LanguageToggle";
import { KonohaLeafIcon } from "./ornaments/KonohaIcons";

export function FloatingNav() {
  const { t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const { phase, isComplete } = useIntro();

  const navVisible = isComplete || phase === "transition";

  // Exact synchronized navigation order
  const navLinks = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "credentials", label: "Credentials" },
    { id: "blog", label: "Blog" },
    { id: "projects", label: "Projects" },
  ];

  // Track active section on scroll with height and navbar compensation
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      // Top of page: Home is always active
      if (scrollPosition < 120) {
        setActiveSection("home");
        return;
      }

      // Bottom of page: Projects is active
      if (scrollPosition + windowHeight >= documentHeight - 100) {
        setActiveSection("projects");
        return;
      }

      // Focal point: 35% down viewport (below floating navbar)
      const targetOffset = scrollPosition + windowHeight * 0.35;
      const navIds = ["home", "about", "skills", "credentials", "blog", "projects"];

      let current = "home";
      for (const id of navIds) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= targetOffset) {
          current = id;
        }
      }

      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock scroll on mobile menu open
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

  // Smooth scroll handler accounting for floating navbar height
  const handleNavClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
      e.preventDefault();
      const el = document.getElementById(id);
      if (el) {
        const navbarHeight = 85;
        const top = el.getBoundingClientRect().top + window.scrollY - navbarHeight;
        window.scrollTo({
          top: Math.max(0, top),
          behavior: "smooth",
        });
        setActiveSection(id);
        setIsOpen(false);
      }
    },
    []
  );

  return (
    <>
      {/* Primary Floating Island Navbar */}
      <motion.header
        initial={{ y: -70, opacity: 0 }}
        animate={{ y: navVisible ? 0 : -70, opacity: navVisible ? 1 : 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-4 sm:top-6 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none"
      >
        <div className="pointer-events-auto flex items-center justify-between w-full max-w-5xl px-4 sm:px-6 py-2.5 rounded-full bg-[#110c0d]/75 border border-white/10 shadow-[0_10px_35px_rgba(0,0,0,0.6),0_0_20px_rgba(229,46,46,0.18)] backdrop-blur-xl">
          
          {/* Left Brand Identity: Konoha Badge + PamanSam */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, "home")}
            className="flex items-center gap-3 group"
          >
            <div className="relative flex items-center justify-center w-9 h-9 rounded-full bg-black/60 border border-[#ff3838]/40 shadow-[0_0_12px_rgba(255,56,56,0.4)] group-hover:border-[#ff3838] group-hover:shadow-[0_0_20px_rgba(255,56,56,0.7)] transition-all">
              <KonohaLeafIcon className="w-5 h-5 text-[#ff3838] group-hover:scale-110 transition-transform" color="#ff3838" />
              <div className="absolute inset-0 rounded-full bg-[#ff3838]/10 opacity-0 group-hover:opacity-100 transition-opacity blur-[2px]" />
            </div>
            <div className="flex flex-col">
              <span className="text-sm sm:text-base font-semibold tracking-tight text-white group-hover:text-[#ff6b6b] transition-colors leading-tight flex items-center gap-1.5">
                <span>Paman<span className="text-[#ff3838]">Sam</span></span>
                <span className="text-[10px] px-1.5 py-0.2 rounded bg-[#ff3838]/15 border border-[#ff3838]/30 text-[#ff7844] font-mono">忍</span>
              </span>
              <span className="text-[10px] text-zinc-400 font-mono tracking-wider -mt-0.5">
                0xSam • Konoha Grid
              </span>
            </div>
          </a>

          {/* Center Navigation Links (Desktop) */}
          <nav className="hidden md:flex items-center gap-1 sm:gap-1.5 lg:gap-2">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  onClick={(e) => handleNavClick(e, link.id)}
                  className={`relative px-3 sm:px-3.5 py-1.5 text-xs sm:text-sm font-medium transition-all ${
                    isActive ? "text-white" : "text-zinc-400 hover:text-white"
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="absolute bottom-0 left-3 right-3 h-[2px] bg-gradient-to-r from-[#ff3838] via-[#ff7675] to-[#ff3838] shadow-[0_0_10px_rgba(255,56,56,0.9)]"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    >
                      <div className="absolute -top-0.5 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-[#ff7844] shadow-[0_0_6px_#ff3838]" />
                    </motion.div>
                  )}
                </a>
              );
            })}
          </nav>

          {/* Right Action: Language Toggle & "Let's Build ↗" Button */}
          <div className="flex items-center gap-2.5 sm:gap-3">
            <LanguageToggle />

            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, "contact")}
              className="hidden sm:inline-flex items-center gap-1.5 px-4 sm:px-5 py-1.5 rounded-full text-xs sm:text-sm font-semibold text-white border border-[#ff3838]/60 bg-gradient-to-r from-[#ff3838]/30 via-[#e52e2e]/25 to-[#ff7844]/20 hover:from-[#ff3838] hover:via-[#e52e2e] hover:to-[#ff7844] shadow-[0_0_15px_rgba(255,56,56,0.35)] hover:shadow-[0_0_25px_rgba(255,56,56,0.7)] transition-all hover:scale-105 cursor-pointer"
            >
              <span>Let&apos;s Build</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#ff7675]" />
            </a>

            {/* Mobile Hamburger Trigger */}
            <button
              onClick={() => setIsOpen(true)}
              className="flex md:hidden p-2 rounded-full border border-white/10 bg-black/40 text-zinc-300 hover:text-white hover:border-[#ff3838]/50 transition"
              aria-label="Open Navigation Menu"
            >
              <Menu size={18} />
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Drawer / Portal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-[260] flex flex-col justify-between bg-[#0e090a]/98 p-6 pt-10 backdrop-blur-2xl md:hidden border-l border-[#ff3838]/30 overflow-y-auto"
          >
            {/* Ambient Background Glow */}
            <div className="absolute top-1/4 right-0 w-64 h-64 bg-[#ff3838]/10 rounded-full blur-[90px] pointer-events-none" />

            {/* Header */}
            <div className="relative z-10 flex items-center justify-between border-b border-white/10 pb-5">
              <div className="flex items-center gap-2.5">
                <KonohaLeafIcon className="w-5 h-5 text-[#ff3838]" color="#ff3838" />
                <span className="font-semibold text-white tracking-tight">PamanSam Portfolio</span>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2.5 rounded-full border border-[#ff3838]/40 bg-[#ff3838]/10 text-white min-w-[44px] min-h-[44px] flex items-center justify-center cursor-pointer"
                aria-label="Close menu"
              >
                <X size={18} />
              </button>
            </div>

            {/* Nav Links */}
            <div className="relative z-10 my-auto flex flex-col gap-3 sm:gap-4 pl-2 py-4">
              {navLinks.map((link, idx) => (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  onClick={(e) => handleNavClick(e, link.id)}
                  className={`flex items-center gap-3 text-2xl font-display uppercase tracking-wider transition-colors min-h-[44px] py-1 ${
                    activeSection === link.id ? "text-[#ff4d4d]" : "text-zinc-300 hover:text-[#ff4d4d]"
                  }`}
                >
                  <span className="text-xs font-mono text-[#ff3838]/70">0{idx + 1}.</span>
                  <span>{link.label}</span>
                  {activeSection === link.id && (
                    <span className="text-xs text-[#ff3838] font-mono ml-auto mr-4">• ACTIVE</span>
                  )}
                </a>
              ))}
              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, "contact")}
                className="mt-4 inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-base font-semibold text-white bg-gradient-to-r from-[#ff3838] to-[#e52e2e] shadow-[0_0_20px_rgba(255,56,56,0.4)]"
              >
                <span>Let&apos;s Build</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>

            {/* Footer */}
            <div className="relative z-10 border-t border-white/10 pt-4 text-xs font-mono text-zinc-500 flex justify-between">
              <span>KONOHA SECURE NET</span>
              <span>© {new Date().getFullYear()} PAMANSAM</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
