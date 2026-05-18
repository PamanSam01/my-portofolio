import React from "react";
import { Code2, Github, Layers3, Rocket, Sparkles, TerminalSquare } from "lucide-react";

const XIcon = (props: any) => React.createElement(
  "svg",
  { viewBox: "0 0 24 24", fill: "currentColor", ...props },
  React.createElement("path", {
    d: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"
  })
);

export const socials = [
  { label: "GitHub", href: "https://github.com/PamanSam01", icon: Github },
  { label: "X", href: "https://x.com/MrSamweb3", icon: XIcon }
];

export const navItems = ["hero", "about", "skills", "projects", "timeline", "contact"];

export const skills = [
  { title: "Cinematic UI", value: 96, icon: Layers3, tags: { en: ["Motion", "Aesthetics", "GSAP"], id: ["Gerak", "Estetika", "GSAP"] } },
  { title: "Frontend Eng", value: 94, icon: Code2, tags: { en: ["React", "Next.js", "TypeScript"], id: ["React", "Next.js", "TypeScript"] } },
  { title: "WebGL & 3D", value: 86, icon: Sparkles, tags: { en: ["Three.js", "R3F", "Shaders"], id: ["Three.js", "R3F", "Shaders"] } },
  { title: "Systems Craft", value: 91, icon: Rocket, tags: { en: ["Architecture", "Perf", "Scale"], id: ["Arsitektur", "Kinerja", "Skala"] } },
  { title: "Interactive UX", value: 88, icon: TerminalSquare, tags: { en: ["Prototyping", "A11y", "Tooling"], id: ["Prototipe", "A11y", "Alat"] } }
];

export const projects = [
  {
    title: "ShelbyOS",
    category: "Web3",
    tags: { en: ["WEB3", "ON-CHAIN STORAGE", "TACTICAL UI"], id: ["WEB3", "PENYIMPANAN ON-CHAIN", "UI TAKTIS"] },
    description: {
      en: "A decentralized browser desktop built on Shelby Network, combining fully on-chain storage, encrypted file systems, and retro tactical interfaces inspired by classic operating systems.",
      id: "Desktop peramban terdesentralisasi yang dibangun di atas Jaringan Shelby, menggabungkan penyimpanan on-chain sepenuhnya, sistem file terenkripsi, dan antarmuka taktis retro yang terinspirasi oleh sistem operasi klasik."
    },
    image: "radial-gradient(circle at 20% 10%, #fff 0 4%, transparent 5%), linear-gradient(135deg, #e50914 0 34%, #050505 35% 64%, #f7f3ea 65% 100%)",
    livePreviewUrl: "https://shelbyos-webapp.vercel.app/",
    previewType: "dashboard",
    github: "https://github.com",
    demo: "https://shelbyos-webapp.vercel.app/",
    year: "2026"
  },
  {
    title: "Arc Pass",
    category: "Web3",
    tags: { en: ["WEB3", "IDENTITY", "PAYMENTS"], id: ["WEB3", "IDENTITAS", "PEMBAYARAN"] },
    description: {
      en: "A cinematic identity and payment protocol on Arc Testnet enabling human-readable .arc identities, seamless stablecoin transfers, and enterprise-grade Web3 onboarding.",
      id: "Protokol identitas dan pembayaran sinematik di Arc Testnet yang memungkinkan identitas .arc yang dapat dibaca manusia, transfer stablecoin yang mulus, dan orientasi Web3 tingkat perusahaan."
    },
    image: "linear-gradient(150deg, #050505 0 24%, #e50914 25% 54%, #f7f3ea 55% 68%, #050505 69% 100%)",
    livePreviewUrl: "https://arc-pass.vercel.app/",
    previewType: "gateway",
    github: "https://github.com",
    demo: "https://arc-pass.vercel.app/",
    year: "2026"
  },
  {
    title: "Giwa Identity",
    category: "Web3",
    tags: { en: ["WEB3", "IDENTITY SYSTEM", "ON-CHAIN"], id: ["WEB3", "SISTEM IDENTITAS", "ON-CHAIN"] },
    description: {
      en: "A high-fidelity Web3 identity protocol featuring universal on-chain passports, reputation systems, tactical mission hubs, and holographic cyberpunk interfaces with zero off-chain dependency.",
      id: "Protokol identitas Web3 tingkat tinggi yang menampilkan paspor on-chain universal, sistem reputasi, hub misi taktis, dan antarmuka cyberpunk holografik tanpa ketergantungan off-chain."
    },
    image: "linear-gradient(120deg, #e50914 0 10%, #050505 11% 100%)",
    previewImage: "/images/projects/giwa-identity-mobile.png",
    previewType: "identity",
    github: "https://github.com",
    demo: "https://giwa-identity-flame.vercel.app/",
    year: "2026"
  },
  {
    title: "InboxAI",
    category: "AI",
    tags: { en: ["AI", "BUSINESS", "REALTIME"], id: ["AI", "BISNIS", "WAKTU-NYATA"] },
    description: {
      en: "An AI-powered business assistant for Indonesian UMKM, combining realtime analytics, smart customer automation, and premium responsive dashboards powered by Gemini AI and Firebase.",
      id: "Asisten bisnis bertenaga AI untuk UMKM Indonesia, menggabungkan analitik waktu-nyata, otomatisasi pelanggan cerdas, dan dasbor responsif premium yang didukung oleh Gemini AI dan Firebase."
    },
    image: "linear-gradient(to right, #050505, #e50914)",
    livePreviewUrl: "https://inboxai-177438365434.asia-southeast2.run.app/",
    previewType: "dashboard",
    github: "https://github.com",
    demo: "https://inboxai-177438365434.asia-southeast2.run.app/",
    year: "2026"
  },
  {
    title: "IN PROGRESS_02",
    category: "Locked",
    tags: { en: ["LOCKED", "2026"], id: ["TERKUNCI", "2026"] },
    description: { en: "ACCESS DENIED.", id: "AKSES DITOLAK." },
    image: "",
    github: "",
    demo: "",
    year: "2026",
    locked: true
  },
  {
    title: "IN PROGRESS_03",
    category: "Locked",
    tags: { en: ["LOCKED", "2026"], id: ["TERKUNCI", "2026"] },
    description: { en: "ACCESS DENIED.", id: "AKSES DITOLAK." },
    image: "",
    github: "",
    demo: "",
    year: "2026",
    locked: true
  },
  {
    title: "IN PROGRESS_04",
    category: "Locked",
    tags: { en: ["LOCKED", "2026"], id: ["TERKUNCI", "2026"] },
    description: { en: "ACCESS DENIED.", id: "AKSES DITOLAK." },
    image: "",
    github: "",
    demo: "",
    year: "2026",
    locked: true
  }
];

export const timeline = [
  {
    year: "2022",
    title: { en: "WEB3 INITIATE", id: "INISIASI WEB3" },
    body: {
      en: "Entered the Web3 ecosystem through blockchain gaming and early decentralized communities. Began exploring digital identity, online economies, and interactive internet culture.",
      id: "Memasuki ekosistem Web3 melalui permainan blockchain dan komunitas desentralisasi awal. Mulai menjelajahi identitas digital, ekonomi online, dan budaya internet interaktif."
    }
  },
  {
    year: "2024",
    title: { en: "CREATIVE DEVELOPER", id: "PENGEMBANG KREATIF" },
    body: {
      en: "Built cinematic frontend systems, immersive UI experiences, realtime dashboards, and experimental WebGL interfaces inspired by anime storytelling and cyberpunk aesthetics.",
      id: "Membangun sistem frontend sinematik, pengalaman UI imersif, dasbor waktu-nyata, dan antarmuka WebGL eksperimental yang terinspirasi oleh penceritaan anime dan estetika cyberpunk."
    }
  },
  {
    year: "2026",
    title: { en: "INTERACTIVE SYSTEMS ARCHITECT", id: "ARSITEK SISTEM INTERAKTIF" },
    body: {
      en: "Evolving beyond frontend engineering into AI-powered systems, immersive digital ecosystems, and next-generation interactive experiences.",
      id: "Berevolusi melampaui rekayasa frontend menuju sistem berbasis AI, ekosistem digital imersif, dan pengalaman interaktif generasi berikutnya."
    }
  }
];

export const stats = [
  { top: "5YR", bottom: { en: "WEB3 EVOLUTION", id: "EVOLUSI WEB3" } },
  { top: "AI+", bottom: { en: "SYSTEMS BUILT", id: "SISTEM DIBANGUN" } },
  { top: "R3F", bottom: { en: "IMMERSIVE UI", id: "UI IMERSIF" } },
  { top: "24/7", bottom: { en: "CREATIVE SIGNAL", id: "SINYAL KREATIF" } }
];
