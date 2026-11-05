"use client";

import { CinematicIntro } from "@/components/CinematicIntro";
import { CustomCursor } from "@/components/CustomCursor";
import { FloatingNav } from "@/components/FloatingNav";
import { ThreeAtmosphere } from "@/components/three/ThreeAtmosphere";
import { SakuraPetals } from "@/components/SakuraPetals";
import { JapaneseDivider } from "@/components/ornaments/KonohaIcons";
import { useLenis } from "@/hooks/useLenis";
import dynamic from "next/dynamic";

import { Hero } from "@/sections/Hero";

const About = dynamic(() => import("@/sections/About").then((mod) => mod.About), { ssr: false });
const Projects = dynamic(() => import("@/sections/Projects").then((mod) => mod.Projects), { ssr: false });
const Skills = dynamic(() => import("@/sections/Skills").then((mod) => mod.Skills), { ssr: false });
const Credentials = dynamic(() => import("@/sections/Credentials").then((mod) => mod.Credentials), { ssr: false });
const Experience = dynamic(() => import("@/sections/Experience").then((mod) => mod.Experience), { ssr: false });
const Contact = dynamic(() => import("@/sections/Contact").then((mod) => mod.Contact), { ssr: false });
const Footer = dynamic(() => import("@/sections/Footer").then((mod) => mod.Footer), { ssr: false });

export default function Home() {
  useLenis();

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#080506] text-bone selection:bg-[#ff3838] selection:text-white">
      <CustomCursor />
      <CinematicIntro />
      <ThreeAtmosphere />
      <SakuraPetals count={22} />
      <div className="noise-layer opacity-15" />
      
      <div className="relative z-10">
        <FloatingNav />
        <Hero />
        <About />
        <div className="px-5"><JapaneseDivider motif="leaf" className="max-w-4xl mx-auto opacity-75 my-0" /></div>
        <Skills />
        <div className="px-5"><JapaneseDivider motif="shuriken" className="max-w-4xl mx-auto opacity-75 my-0" /></div>
        <Credentials />
        <div className="px-5"><JapaneseDivider motif="leaf" className="max-w-4xl mx-auto opacity-75 my-0" /></div>
        <Experience />
        <div className="px-5"><JapaneseDivider motif="kunai" className="max-w-4xl mx-auto opacity-75 my-0" /></div>
        <Projects />
        <div className="px-5"><JapaneseDivider motif="leaf" className="max-w-4xl mx-auto opacity-75 my-0" /></div>
        <Contact />
        <Footer />
      </div>
    </main>
  );
}
