import React from "react";
import { Github } from "lucide-react";

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

export const navItems = ["home", "about", "skills", "credentials", "blog", "projects", "contact"];

export type SkillLevel = "CORE" | "ACTIVE" | "EXPLORING";

export interface SkillItem {
  name: string;
  level: SkillLevel;
}

export interface SkillCategory {
  id: string;
  num: string;
  kanji: string;
  title: {
    en: string;
    id: string;
  };
  subtitle: {
    en: string;
    id: string;
  };
  description: {
    en: string;
    id: string;
  };
  skills: SkillItem[];
}

export const skillCategories: SkillCategory[] = [
  {
    id: "frontend",
    num: "01",
    kanji: "界面工学",
    title: {
      en: "Frontend Development",
      id: "Frontend Development"
    },
    subtitle: {
      en: "CLIENT ARCHITECTURE",
      id: "ARSITEKTUR KLIEN"
    },
    description: {
      en: "High-performance web apps, responsive interfaces, and production-ready component systems.",
      id: "Aplikasi web berkinerja tinggi, antarmuka responsif, dan sistem komponen siap produksi."
    },
    skills: [
      { name: "React", level: "CORE" },
      { name: "Next.js", level: "CORE" },
      { name: "TypeScript", level: "CORE" },
      { name: "Tailwind CSS", level: "CORE" },
      { name: "GSAP", level: "ACTIVE" },
      { name: "Responsive UI", level: "CORE" }
    ]
  },
  {
    id: "web3",
    num: "02",
    kanji: "分散台帳",
    title: {
      en: "Web3 & Blockchain",
      id: "Web3 & Blockchain"
    },
    subtitle: {
      en: "ON-CHAIN PROTOCOLS",
      id: "PROTOKOL ON-CHAIN"
    },
    description: {
      en: "Decentralized applications, on-chain contract integrations, and multi-ecosystem protocols.",
      id: "Aplikasi terdesentralisasi, integrasi smart contract on-chain, dan protokol multi-ekosistem."
    },
    skills: [
      { name: "Ethereum", level: "CORE" },
      { name: "Solana", level: "ACTIVE" },
      { name: "Aptos", level: "ACTIVE" },
      { name: "Sui", level: "ACTIVE" },
      { name: "Smart Contract Integration", level: "ACTIVE" },
      { name: "dApp Development", level: "CORE" }
    ]
  },
  {
    id: "ai",
    num: "03",
    kanji: "知能自律",
    title: {
      en: "AI Agents & Automation",
      id: "AI Agents & Otomasi"
    },
    subtitle: {
      en: "AUTONOMOUS AGENTS",
      id: "AGEN OTONOM"
    },
    description: {
      en: "Autonomous agentic workflows, LLM orchestration, and intelligent system automation pipelines.",
      id: "Alur kerja agen otonom, orkestrasi LLM, dan otomatisasi sistem cerdas terintegrasi."
    },
    skills: [
      { name: "Python", level: "CORE" },
      { name: "LLM Integration", level: "ACTIVE" },
      { name: "Hermes Agent", level: "EXPLORING" },
      { name: "FastAPI", level: "ACTIVE" },
      { name: "Agent Workflows", level: "ACTIVE" },
      { name: "AI Automation", level: "ACTIVE" }
    ]
  },
  {
    id: "backend",
    num: "04",
    kanji: "基盤構造",
    title: {
      en: "Backend & Infrastructure",
      id: "Backend & Infrastruktur"
    },
    subtitle: {
      en: "SERVER & CLOUD OPS",
      id: "SERVER & OPERASI CLOUD"
    },
    description: {
      en: "Reliable REST APIs, relational databases, Linux server management, and cloud deployments.",
      id: "REST API andal, database relasional, manajemen server Linux, dan implementasi cloud."
    },
    skills: [
      { name: "Python", level: "CORE" },
      { name: "FastAPI", level: "ACTIVE" },
      { name: "PostgreSQL", level: "ACTIVE" },
      { name: "REST API", level: "CORE" },
      { name: "Linux", level: "ACTIVE" },
      { name: "VPS & Deployment", level: "ACTIVE" }
    ]
  },
  {
    id: "creative",
    num: "05",
    kanji: "視覚表現",
    title: {
      en: "Creative Technology",
      id: "Teknologi Kreatif"
    },
    subtitle: {
      en: "MOTION & 3D DESIGN",
      id: "DESAIN GERAK & 3D"
    },
    description: {
      en: "Cinematic visual design, 3D WebGL experiences, choreographed transitions, and AI prototyping.",
      id: "Desain visual sinematik, pengalaman 3D WebGL, koreografi transisi, dan prototyping AI."
    },
    skills: [
      { name: "GSAP", level: "ACTIVE" },
      { name: "Motion Design", level: "ACTIVE" },
      { name: "Three.js", level: "ACTIVE" },
      { name: "Interactive Experiences", level: "CORE" },
      { name: "AI-assisted Development", level: "ACTIVE" }
    ]
  }
];

export const skills = skillCategories;

export const projects = [
  {
    id: "chogram",
    title: "Chogram",
    category: "Web3",
    tagline: {
      en: "Chog Broadcast Studio • Remotion Video Engine on Monad",
      id: "Chog Broadcast Studio • Mesin Video Remotion di Monad",
    },
    tags: {
      en: ["MONAD", "REMOTION", "CHOG NFT", "REACT", "CREATIVE TECH"],
      id: ["MONAD", "REMOTION", "CHOG NFT", "REACT", "TEKNOLOGI KREATIF"],
    },
    description: {
      en: "A broadcast video production studio on Monad. Your Chog Genesis NFT is the lead actor—traits drive the character rig, rarity determines rank HUD, and live $CHOG DEX data dynamically powers video edits with five Remotion templates exported as ready-to-air MP4.",
      id: "Studio produksi video siaran di Monad. NFT Chog Genesis bertindak sebagai aktor utama—sifat menggerakkan rig karakter, kelangkaan menentukan HUD, dan data DEX $CHOG menggerakkan editan video dengan lima template Remotion siap ekspor MP4.",
    },
    features: {
      en: [
        "Chog Genesis NFT casting & generative video rig",
        "5 programmatic Remotion video broadcast templates",
        "Live $CHOG DEX pricing & onchain telemetry integration",
      ],
      id: [
        "Casting NFT Chog Genesis & rig video generatif",
        "5 template siaran video terprogram Remotion",
        "Integrasi harga $CHOG DEX & telemetri onchain realtime",
      ],
    },
    url: "https://chogram.vercel.app/",
    previewImage: "/images/projects/chogram.png",
    status: "LIVE ON MONAD",
    year: "2026",
  },
  {
    id: "arcpass",
    title: "ArcPass",
    category: "Web3",
    tagline: {
      en: "Financial Identity on Arc Testnet L1",
      id: "Identitas Finansial di Arc Testnet L1",
    },
    tags: {
      en: ["ARC TESTNET", "USDC", "SMART CONTRACTS", "EVM", "FINANCIAL IDENTITY"],
      id: ["ARC TESTNET", "USDC", "SMART CONTRACT", "EVM", "IDENTITAS FINANSIAL"],
    },
    description: {
      en: "A non-custodial financial identity protocol on Arc Testnet. Users mint permanent human-readable .arc identities linked to their wallets, enabling seamless USDC peer-to-peer transfers to names instead of intimidating 42-character hexadecimal addresses.",
      id: "Protokol identitas finansial non-kustodian di Arc Testnet. Pengguna membuat nama domain .arc permanen yang terhubung ke dompet, memungkinkan transfer stablecoin USDC ke nama manusia secara aman tanpa alamat heksadesimal.",
    },
    features: {
      en: [
        "Permanent .arc human-readable identity minting",
        "USDC payments routed to names with pre-flight simulation",
        "Zero off-chain custody: verified directly on Arc Testnet L1",
      ],
      id: [
        "Pembuatan identitas permanen ramah manusia .arc",
        "Pembayaran USDC ke nama dengan simulasi transaksi",
        "Kedaulatan penuh: diverifikasi langsung di Arc Testnet L1",
      ],
    },
    url: "https://arcpass.xyz/",
    previewImage: "/images/projects/arcpass.png",
    status: "LIVE ON ARC L1",
    year: "2026",
  },
  {
    id: "tamasave",
    title: "TamaSave",
    category: "Web3",
    tagline: {
      en: "Gamified Web3 Savings with Ritual Network • Built by 0xPamanSam",
      id: "Tabungan Web3 Tergamifikasi dengan Ritual Network • Karya 0xPamanSam",
    },
    tags: {
      en: ["RITUAL NETWORK", "RITUAL SCHEDULER", "GAMIFIED DEFI", "NEXT.JS", "SMART CONTRACTS"],
      id: ["RITUAL NETWORK", "RITUAL SCHEDULER", "DEFI GAME", "NEXT.JS", "SMART CONTRACT"],
    },
    description: {
      en: "Turn savings goals into living digital pets on Ritual Chain. TamaSave uses Ritual Scheduler to automate recurring deposit cadences without needing active app sessions, while virtual pets evolve on-chain through emotional stages (Egg, Baby, Teen, Adult, Legendary).",
      id: "Ubah target tabungan menjadi hewan peliharaan digital hidup di Ritual Chain. TamaSave memanfaatkan Ritual Scheduler untuk mengotomasi setoran berulang tanpa perlu membuka aplikasi, sementara hewan virtual berevolusi di on-chain (Egg, Baby, Teen, Adult, Legendary).",
    },
    features: {
      en: [
        "Ritual Scheduler automated deposits without active app sessions",
        "On-chain pet evolution mechanics tied to savings milestones",
        "Custom goal configuration: token, target, amount, and cadence",
      ],
      id: [
        "Setoran otomatis Ritual Scheduler tanpa sesi aplikasi aktif",
        "Mekanisme evolusi hewan peliharaan onchain sesuai target",
        "Konfigurasi target fleksibel: token, target, nominal, dan frekuensi",
      ],
    },
    url: "https://tamasave.vercel.app/",
    previewImage: "/images/projects/tamasave.png",
    status: "LIVE ON RITUAL",
    year: "2026",
  },
  {
    id: "drift",
    title: "Drift",
    category: "AI",
    tagline: {
      en: "One Day in a City, Planned by Your Taste • Powered by Qloo 250M Graph",
      id: "Satu Hari di Kota Sesuai Seleramu • Didukung Graf Qloo 250 Juta Entitas",
    },
    tags: {
      en: ["QLOO AI GRAPH", "CULTURAL TECH", "NEXT.JS", "GEOSPATIAL", "TASTE DNA"],
      id: ["GRAF AI QLOO", "TEKNOLOGI KULTUR", "NEXT.JS", "GEOSPASIAL", "DNA SELERA"],
    },
    description: {
      en: "A cultural itinerary discovery engine powered by Qloo's 250-million-entity cross-domain taste graph. A 60-second interview about the music, films, and brands you love generates an entire day in any city on Earth—coffee, museum, record store, dinner, and live music—each stop explained by taste overlap.",
      id: "Mesin perencana rute kultural bertenaga graf selera lintas domain Qloo berisi 250 juta entitas. Wawancara 60 detik tentang musik, film, dan brand favorit menghasilkan rencana perjalanan satu hari penuh di kota mana pun di dunia dengan penjelasan kecocokan selera.",
    },
    features: {
      en: [
        "60-second cultural taste DNA interview without user accounts",
        "Cross-domain affinity matching across 250M entities in Qloo graph",
        "Full-day timeline with curated stops and cultural rationale",
      ],
      id: [
        "Wawancara DNA selera kultural 60 detik tanpa perlu akun",
        "Pencocokan afinitas lintas domain dari 250 juta entitas Qloo",
        "Linimasa rute satu hari lengkap dengan alasan kecocokan kultural",
      ],
    },
    url: "https://drift-eta-two.vercel.app/",
    previewImage: "/images/projects/drift.png",
    status: "LIVE APPLICATION",
    year: "2026",
  },
  {
    id: "prooffolio",
    title: "ProofFolio",
    category: "Web3",
    tagline: {
      en: "Verifiable Professional Identity on Sui & Walrus",
      id: "Identitas Profesional Terverifikasi di Sui & Walrus",
    },
    tags: {
      en: ["SUI BLOCKCHAIN", "WALRUS STORAGE", "MOVE CONTRACTS", "CREDENTIALS", "TYPESCRIPT"],
      id: ["SUI BLOCKCHAIN", "PENYIMPANAN WALRUS", "KONTRAK MOVE", "KREDENSIAL", "TYPESCRIPT"],
    },
    description: {
      en: "Decentralized trust infrastructure to issue, store, and query verifiable professional credentials on Sui blockchain and Walrus storage. Eliminates forgeable PDF resumes through cryptographically signed proofs, immutable onchain reputation weight, and deterministic talent discovery.",
      id: "Infrastruktur reputasi desentralisasi untuk menerbitkan, menyimpan, dan memvalidasi kredensial profesional terverifikasi di blockchain Sui dan Walrus. Menggantikan resume PDF yang mudah dipalsukan dengan bukti bertanda tangan kriptografis dan reputasi onchain yang abadi.",
    },
    features: {
      en: [
        "Cryptographically signed professional passport on Sui",
        "Decentralized credential persistence secured by Walrus storage",
        "Deterministic talent discovery graph for verified employers",
      ],
      id: [
        "Paspor profesional bertanda tangan kriptografis di Sui",
        "Penyimpanan kredensial terdesentralisasi diamankan Walrus",
        "Graf penemuan talenta terpercaya untuk perekrut profesional",
      ],
    },
    url: "https://prooffolio-ten.vercel.app/",
    previewImage: "/images/projects/prooffolio.png",
    status: "LIVE ON SUI",
    year: "2026",
  },
];

export const timeline = [
  {
    year: "2015",
    title: { en: "AUTOMOTIVE VOCATIONAL COMPETENCY", id: "UJI KOMPETENSI KEJURUAN OTOMOTIF" },
    body: {
      en: "Passed industrial vocational competency assessment in automotive engineering organized by Tunas Toyota and SMK Mahardhika, establishing foundational discipline in mechanical precision, electrical diagnostics, and methodical problem-solving.",
      id: "Menyelesaikan uji kompetensi kejuruan industri bidang otomotif oleh Tunas Toyota dan SMK Mahardhika, membentuk disiplin presisi mekanikal, diagnostik kelistrikan, dan pemecahan masalah metodis."
    }
  },
  {
    year: "2023 — 2024",
    title: { en: "WEB3 ECOSYSTEM EXPLORATION", id: "EKSPLORASI EKOSISTEM WEB3" },
    body: {
      en: "Entered the decentralized frontier through community immersion, onchain governance, testnet participation, and exploring how blockchain redefines digital ownership and identity.",
      id: "Memasuki dunia desentralisasi melalui partisipasi komunitas, tata kelola onchain, keterlibatan testnet, dan mempelajari bagaimana blockchain meredefinisi kepemilikan serta identitas digital."
    }
  },
  {
    year: "2024 — 2025",
    title: { en: "ONCHAIN BUILDER & TACTILE FRONTEND", id: "ONCHAIN BUILDER & UI TAKTIS" },
    body: {
      en: "Transitioned from observer to active builder: crafting tactile, high-performance web frontends and dApp interfaces across Ethereum, Solana, Aptos, and Sui networks.",
      id: "Beralih dari pengamat menjadi pembuat aktif: merancang antarmuka web taktis berkinerja tinggi dan dApp di jaringan Ethereum, Solana, Aptos, dan Sui."
    }
  },
  {
    year: "2025",
    title: { en: "AI & AUTOMATION EXPLORATION", id: "EKSPLORASI AI & OTOMASI SISTEM" },
    body: {
      en: "Expanded beyond frontend engineering into Python backend services, FastAPI microservices, workflow automation, and LLM integrations to maximize solo builder leverage.",
      id: "Melangkah melampaui rekayasa frontend menuju layanan backend Python, layanan mikro FastAPI, otomasi alur kerja, dan integrasi LLM untuk memperbesar daya cipta mandiri."
    }
  },
  {
    year: "2026",
    title: { en: "AI AGENT DEVELOPMENT & #JUARAVIBECODING", id: "PENGEMBANGAN AI AGENT & #JUARAVIBECODING" },
    body: {
      en: "Developing autonomous AI agent workflows (Hermes Agent) and actively participating in Google Developer Groups' #JuaraVibeCoding, building intelligent conversational experiences.",
      id: "Mengembangkan alur kerja agen AI otonom (Hermes Agent) dan berpartisipasi aktif dalam #JuaraVibeCoding Google Developer Groups, merakit pengalaman cerdas berbasis percakapan."
    }
  }
];


