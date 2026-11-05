"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export function About() {
  const { lang } = useLanguage();

  const isId = lang === "id";

  const bio = isId
    ? {
        p1: "Saya adalah independent builder asal Indonesia yang dikenal dengan nama PamanSam (Ferdy A) di ekosistem Web3. Fokus saya adalah membangun aplikasi terdesentralisasi, AI Agent, serta berbagai produk digital eksperimental.",
        p2: "Saya mengembangkan berbagai proyek menggunakan teknologi seperti React, Next.js, TypeScript, dan Python, sekaligus mengeksplorasi ekosistem Ethereum, Solana, Aptos, dan Sui.",
        p3: "Saya senang mengubah ide menjadi produk nyata, bereksperimen dengan teknologi baru, dan membangun solusi yang menghubungkan Web3 dan AI dengan kebutuhan dunia nyata.",
        origin: "ORIGIN // INDONESIA",
        builderTitle: "BUILDER'S MINDSET",
        builderSubtitle: "Mengubah ide menjadi produk nyata melalui eksperimen, teknologi, dan pembangunan berkelanjutan.",
        tags: ["APLIKASI WEB3", "AI AGENT", "REACT & NEXT.JS", "PYTHON", "SOLANA & EVM"],
      }
    : {
        p1: "I'm an independent builder from Indonesia, known as PamanSam (Ferdy A) in the Web3 ecosystem. My work revolves around building decentralized applications, AI-powered agents, and experimental digital products.",
        p2: "I work with technologies such as React, Next.js, TypeScript, and Python, while exploring ecosystems including Ethereum, Solana, Aptos, and Sui.",
        p3: "I enjoy turning ideas into functional products, experimenting with emerging technologies, and building solutions that connect Web3 and AI with real-world utility.",
        origin: "ORIGIN // INDONESIA",
        builderTitle: "BUILDER'S MINDSET",
        builderSubtitle: "Turning ideas into products through experimentation, technology, and continuous building.",
        tags: ["WEB3 APPS", "AI AGENTS", "REACT & NEXT.JS", "PYTHON", "SOLANA & EVM"],
      };

  return (
    <section id="about" className="relative z-10 py-16 sm:py-24 lg:py-28 px-4 sm:px-8 lg:px-14 bg-[#0a0607] overflow-hidden border-t border-[#ff3838]/15">
      {/* Background Ambience */}
      <div className="absolute top-1/2 left-0 w-72 sm:w-96 h-72 sm:h-96 bg-[#ff3838]/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-72 sm:w-96 h-72 sm:h-96 bg-[#ff7844]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative mx-auto max-w-7xl z-10">
        
        {/* Section Header with Japanese Kicker */}
        <div className="flex flex-col items-start mb-10 sm:mb-14">
          <div className="flex items-center gap-2.5 mb-2">
            <span className="h-[2px] w-8 bg-[#ff3838]" />
            <span className="text-xs sm:text-sm font-semibold tracking-[0.25em] text-[#ff3838] uppercase drop-shadow-[0_0_10px_rgba(255,56,56,0.7)]">
              私について
            </span>
            <span className="h-[2px] w-8 bg-[#ff3838]" />
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white font-display">
            About Me
          </h2>
        </div>

        {/* Responsive Composition:
            Desktop: 3 cols (Origin: 3, Bio: 5, Workspace: 4)
            Tablet: Bio full-width, Origin & Workspace side-by-side (2 cols)
            Mobile: 1-col stack (Bio -> Origin -> Workspace)
        */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-10 items-stretch">
          
          {/* BIO NARRATIVE (Full-width on tablet, Center on desktop) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="md:col-span-2 lg:col-span-5 lg:order-2 flex flex-col justify-center"
          >
            {/* Paragraph 1: Highlighted with left red accent border */}
            <div className="relative pl-4 sm:pl-5 border-l-2 border-[#ff3838] mb-4 sm:mb-5">
              <p className="text-base sm:text-lg font-medium leading-relaxed text-zinc-100">
                {bio.p1}
              </p>
            </div>

            {/* Paragraph 2: Technologies and Ecosystems */}
            <p className="text-sm sm:text-base leading-relaxed text-zinc-300 mb-4">
              {bio.p2}
            </p>

            {/* Paragraph 3: Products and Vision */}
            <p className="text-sm sm:text-base leading-relaxed text-zinc-300 mb-5 sm:mb-6">
              {bio.p3}
            </p>

            {/* Quick Badges */}
            <div className="flex flex-wrap gap-2">
              {bio.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2.5 sm:px-3 py-1 rounded-full text-xs font-mono font-medium text-[#ff7844] bg-[#ff3838]/10 border border-[#ff3838]/25"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>

          {/* ORIGIN: Indonesian Archipelago */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="md:col-span-1 lg:col-span-3 lg:order-1 flex flex-col items-center justify-between p-4 sm:p-6 rounded-2xl bg-[#120a0c]/60 border border-[#ff3838]/20 shadow-[0_10px_30px_rgba(0,0,0,0.6)] backdrop-blur-xl relative overflow-hidden group min-h-[280px] sm:min-h-[340px] lg:min-h-[380px]"
          >
            {/* Ambient glow */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#ff3838]/5 via-transparent to-[#ff3838]/10 pointer-events-none" />

            {/* Visual element: Minimalist Indonesian Archipelago Map */}
            <div className="relative z-10 w-full flex-1 flex items-center justify-center overflow-hidden rounded-xl bg-black/50 border border-white/10 group-hover:border-[#ff3838]/40 transition-colors p-3 my-2">
              <img
                src="/images/indonesia-map.jpg"
                alt="Indonesian Archipelago Map - Origin"
                className="w-full h-full object-contain max-h-[200px] sm:max-h-[240px] drop-shadow-[0_0_20px_rgba(255,56,56,0.45)] group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            <div className="relative z-10 text-center mt-3 pt-3 border-t border-white/10 w-full">
              <span className="text-xs font-mono tracking-widest text-zinc-300 uppercase flex items-center justify-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#ff3838] animate-pulse" />
                <span>ORIGIN // INDONESIA</span>
              </span>
            </div>
          </motion.div>

          {/* DEVELOPER WORKSPACE PHOTO */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="md:col-span-1 lg:col-span-4 lg:order-3 flex justify-center w-full"
          >
            <div className="relative w-full rounded-2xl p-4 sm:p-5 bg-[#120a0c]/60 border border-[#ff3838]/20 shadow-[0_10px_30px_rgba(0,0,0,0.6)] backdrop-blur-xl group overflow-hidden flex items-center justify-center min-h-[280px] sm:min-h-[340px] lg:min-h-[380px]">
              {/* Subtle ambient glow */}
              <div className="absolute inset-0 bg-gradient-to-b from-[#ff3838]/5 via-transparent to-[#ff7844]/10 pointer-events-none" />

              {/* Inner image container */}
              <div className="relative z-10 w-full h-full flex items-center justify-center overflow-hidden rounded-xl bg-black/50 border border-white/10 group-hover:border-[#ff3838]/40 transition-colors">
                <img
                  src="/images/builder-portrait.jpg"
                  alt="PamanSam (Ferdy A) - Web3 & AI Developer Workspace"
                  className="w-full h-full object-cover object-center max-h-[260px] sm:max-h-[320px] lg:max-h-[360px] rounded-xl drop-shadow-[0_10px_25px_rgba(0,0,0,0.8)] group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
