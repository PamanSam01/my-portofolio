"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Loader } from "@/components/Loader";
import { CustomCursor } from "@/components/CustomCursor";
import { FloatingNav } from "@/components/FloatingNav";
import { PageTransition } from "@/components/PageTransition";
import { ThreeAtmosphere } from "@/components/three/ThreeAtmosphere";
import { useLenis } from "@/hooks/useLenis";
import dynamic from "next/dynamic";

import { Hero } from "@/sections/Hero";

const About = dynamic(() => import("@/sections/About").then((mod) => mod.About), { ssr: false });
const Skills = dynamic(() => import("@/sections/Skills").then((mod) => mod.Skills), { ssr: false });
const Projects = dynamic(() => import("@/sections/Projects").then((mod) => mod.Projects), { ssr: false });
const Experience = dynamic(() => import("@/sections/Experience").then((mod) => mod.Experience), { ssr: false });
const Stats = dynamic(() => import("@/sections/Stats").then((mod) => mod.Stats), { ssr: false });
const Contact = dynamic(() => import("@/sections/Contact").then((mod) => mod.Contact), { ssr: false });
const Footer = dynamic(() => import("@/sections/Footer").then((mod) => mod.Footer), { ssr: false });

export default function Home() {
  const [loading, setLoading] = useState(true);
  useLenis();

  useEffect(() => {
    const timeout = window.setTimeout(() => setLoading(false), 2850);
    return () => window.clearTimeout(timeout);
  }, []);

  return (
    <main className="relative min-h-screen overflow-hidden bg-ink text-bone selection:bg-blood selection:text-white">
      <CustomCursor />
      <ThreeAtmosphere />
      <div className="noise-layer" />
      <AnimatePresence mode="wait">{loading && <Loader />}</AnimatePresence>
      <AnimatePresence>{!loading && <PageTransition />}</AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: loading ? 0 : 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        <FloatingNav />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Stats />
        <Contact />
        <Footer />
      </motion.div>
    </main>
  );
}
