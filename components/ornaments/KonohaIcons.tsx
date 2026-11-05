import React from "react";

// Konoha Leaf Symbol (Village Hidden in the Leaves)
export function KonohaLeafIcon({ className = "w-6 h-6", color = "currentColor" }: { className?: string; color?: string }) {
  return (
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path
        d="M50 12C32 12 18 24 16 42C14 60 26 78 44 84C62 90 80 80 84 62C88 44 78 28 64 24C52 20 40 28 38 40C36 50 44 60 54 60C62 60 68 54 66 46C64 38 56 36 50 40C46 42 46 48 50 50"
        stroke={color}
        strokeWidth="6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Triangular leaf tip pointing up-left */}
      <path
        d="M32 18L14 12L22 28"
        stroke={color}
        strokeWidth="6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

// Akatsuki / Ninja Stylized Cloud Watermark
export function CloudWatermark({ className = "w-24 h-16 opacity-10", color = "currentColor" }: { className?: string; color?: string }) {
  return (
    <svg viewBox="0 0 120 70" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path
        d="M24 55C12 55 4 46 4 36C4 26 13 18 23 18C25 10 33 4 43 4C55 4 64 12 66 22C72 16 80 14 88 16C98 18 106 27 106 37C112 39 116 45 116 52C116 60 110 66 102 66L24 66C18 66 12 62 10 56"
        stroke={color}
        strokeWidth="3.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M38 48C44 48 50 44 52 38C54 32 50 26 44 26"
        stroke={color}
        strokeWidth="2.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

// 4-Point Ninja Shuriken
export function ShurikenIcon({ className = "w-5 h-5", color = "currentColor" }: { className?: string; color?: string }) {
  return (
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <defs>
        <linearGradient id="shurikenBlade" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ff4d4d" />
          <stop offset="50%" stopColor="#b71c1c" />
          <stop offset="100%" stopColor="#1a0f0f" />
        </linearGradient>
      </defs>
      {/* 4 curved blades */}
      <path
        d="M50 8C50 32 32 50 8 50C32 50 50 68 50 92C50 68 68 50 92 50C68 50 50 32 50 8Z"
        fill="url(#shurikenBlade)"
        stroke={color}
        strokeWidth="2.5"
        strokeLinejoin="round"
      />
      {/* Blade bevel facets */}
      <path d="M50 8L50 92M8 50L92 50" stroke="#ff7844" strokeWidth="1" strokeOpacity="0.5" />
      <path d="M22 22L78 78M22 78L78 22" stroke="#ff7844" strokeWidth="0.8" strokeOpacity="0.4" />
      {/* Center hole */}
      <circle cx="50" cy="50" r="8" fill="#0a0607" stroke={color} strokeWidth="2.5" />
      <circle cx="50" cy="50" r="3" fill="#ff3838" />
    </svg>
  );
}

// Ninja Kunai Dagger
export function KunaiIcon({ className = "w-5 h-5", color = "currentColor" }: { className?: string; color?: string }) {
  return (
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <defs>
        <linearGradient id="kunaiBlade" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#ff5722" />
          <stop offset="50%" stopColor="#e52e2e" />
          <stop offset="100%" stopColor="#7a1414" />
        </linearGradient>
      </defs>
      {/* Diamond blade */}
      <path
        d="M50 6L64 42L50 50L36 42L50 6Z"
        fill="url(#kunaiBlade)"
        stroke={color}
        strokeWidth="2"
        strokeLinejoin="round"
      />
      {/* Blade center ridge */}
      <line x1="50" y1="6" x2="50" y2="50" stroke="#ffd166" strokeWidth="1.2" opacity="0.6" />
      {/* Handle with wrapped cloth effect */}
      <rect x="47" y="50" width="6" height="26" fill="#1f1819" stroke={color} strokeWidth="1.5" />
      <line x1="47" y1="56" x2="53" y2="54" stroke="#ff7844" strokeWidth="1.2" />
      <line x1="47" y1="62" x2="53" y2="60" stroke="#ff7844" strokeWidth="1.2" />
      <line x1="47" y1="68" x2="53" y2="66" stroke="#ff7844" strokeWidth="1.2" />
      <line x1="47" y1="74" x2="53" y2="72" stroke="#ff7844" strokeWidth="1.2" />
      {/* Ring pommel */}
      <circle cx="50" cy="85" r="9" stroke={color} strokeWidth="2.5" fill="none" />
      <circle cx="50" cy="85" r="4.5" fill="#0a0607" />
    </svg>
  );
}

// Shinobi Red Sealing Stamp / Formula Mark (封 / 印 / 忍)
export function SealingStamp({
  label = "忍",
  className = "w-8 h-8",
}: {
  label?: string;
  className?: string;
}) {
  return (
    <div
      className={`relative inline-flex items-center justify-center rounded border-2 border-[#ff3838] bg-[#ff3838]/10 text-[#ff3838] font-bold text-xs shadow-[0_0_12px_rgba(255,56,56,0.4)] backdrop-blur-sm select-none ${className}`}
      style={{ fontFamily: "'Noto Serif JP', serif, sans-serif" }}
    >
      <div className="absolute inset-0.5 border border-[#ff3838]/40 pointer-events-none" />
      <span>{label}</span>
    </div>
  );
}

// Uzumaki / Sealing Spiral Formula Emblem
export function SealingSpiralFormula({
  className = "w-10 h-10",
  color = "#ff3838",
}: {
  className?: string;
  color?: string;
}) {
  return (
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* Outer concentric rune ring */}
      <circle cx="50" cy="50" r="46" stroke={color} strokeWidth="1.5" strokeDasharray="3 3" opacity="0.6" />
      <circle cx="50" cy="50" r="41" stroke={color} strokeWidth="1" opacity="0.4" />
      {/* Sealing formula marks along the perimeter */}
      <path d="M50 4L50 9M96 50L91 50M50 96L50 91M4 50L9 50" stroke={color} strokeWidth="2" />
      {/* Swirling Uzumaki spiral */}
      <path
        d="M50 50C48 44 54 40 60 42C68 44 70 54 66 62C60 72 46 72 36 64C24 54 26 36 38 24C52 10 74 12 88 28"
        stroke={color}
        strokeWidth="3"
        strokeLinecap="round"
        fill="none"
      />
      <circle cx="50" cy="50" r="3" fill={color} />
    </svg>
  );
}

// Japanese Section Divider with Shuriken / Kunai center
export function JapaneseDivider({
  motif = "shuriken",
  className = "w-full my-8",
}: {
  motif?: "shuriken" | "leaf" | "kunai";
  className?: string;
}) {
  return (
    <div className={`relative flex items-center justify-center gap-3 ${className}`}>
      <div className="flex-1 h-[1px] bg-gradient-to-r from-transparent via-[#ff3838]/40 to-[#ff3838]" />
      <div className="p-1 rounded-full bg-[#140b0d] border border-[#ff3838]/60 shadow-[0_0_12px_rgba(255,56,56,0.5)]">
        {motif === "shuriken" ? (
          <ShurikenIcon className="w-4 h-4 text-[#ff3838] animate-spin-slow" />
        ) : motif === "leaf" ? (
          <KonohaLeafIcon className="w-4 h-4 text-[#ff3838]" color="#ff3838" />
        ) : (
          <KunaiIcon className="w-4 h-4 text-[#ff3838]" />
        )}
      </div>
      <div className="flex-1 h-[1px] bg-gradient-to-l from-transparent via-[#ff3838]/40 to-[#ff3838]" />
    </div>
  );
}

// Japanese Torii Gate Ornament
export function ToriiGate({ className = "w-32 h-32" }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 180" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <defs>
        <linearGradient id="toriiGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ff4d4d" />
          <stop offset="100%" stopColor="#b71c1c" />
        </linearGradient>
        <linearGradient id="toriiCap" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#1a0f0f" />
          <stop offset="100%" stopColor="#080404" />
        </linearGradient>
      </defs>
      {/* Kasagi - Top Curved Beam */}
      <path
        d="M10 28C45 22 155 22 190 28L186 16C150 10 50 10 14 16L10 28Z"
        fill="url(#toriiCap)"
        stroke="#ff4d4d"
        strokeWidth="2"
      />
      {/* Shimaki - Upper Secondary Beam */}
      <rect x="22" y="32" width="156" height="14" rx="2" fill="url(#toriiGrad)" />
      {/* Nuki - Lower Straight Tie Beam */}
      <rect x="18" y="64" width="164" height="10" rx="1" fill="url(#toriiGrad)" />
      {/* Gakuzuka - Center Plaque Tablet */}
      <rect x="94" y="46" width="12" height="18" rx="1" fill="#140f0f" stroke="#ff4d4d" strokeWidth="1.5" />
      {/* Hashira - Two Main Left and Right Pillars */}
      <path d="M48 34L44 165H58L54 34H48Z" fill="url(#toriiGrad)" />
      <path d="M146 34L142 165H156L152 34H146Z" fill="url(#toriiGrad)" />
      {/* Nemaki - Black Base Sleeves */}
      <rect x="42" y="145" width="18" height="20" rx="2" fill="#140f0f" stroke="#ff4d4d" strokeWidth="1" />
      <rect x="140" y="145" width="18" height="20" rx="2" fill="#140f0f" stroke="#ff4d4d" strokeWidth="1" />
      {/* Ground platform / stones */}
      <rect x="36" y="165" width="30" height="6" rx="2" fill="#2d1f21" />
      <rect x="134" y="165" width="30" height="6" rx="2" fill="#2d1f21" />
    </svg>
  );
}

// Ninja Makimono Scroll Component
export function NinjaScroll({ className = "w-64 h-80", title = "KONOHA SCROLL", children }: { className?: string; title?: string; children?: React.ReactNode }) {
  return (
    <div className={`relative flex flex-col items-center justify-between p-6 ${className}`}>
      {/* Top Wooden Rod Handle */}
      <div className="relative z-20 flex items-center justify-center w-full">
        <div className="h-4 w-5 bg-gradient-to-r from-[#5a1e1e] to-[#8b2626] rounded-l-full shadow-md" />
        <div className="h-5 flex-1 bg-gradient-to-b from-[#b73229] via-[#8b1e17] to-[#490d09] border-y border-[#ff6b6b]/40 shadow-lg" />
        <div className="h-4 w-5 bg-gradient-to-l from-[#5a1e1e] to-[#8b2626] rounded-r-full shadow-md" />
      </div>

      {/* Parchment Paper Body */}
      <div className="relative z-10 w-[92%] -mt-1 -mb-1 flex-1 bg-gradient-to-b from-[#f3e3ca] via-[#ebd2b0] to-[#dfc49e] text-[#2c1a16] p-6 shadow-2xl border-x-4 border-[#7a221b] flex flex-col items-center justify-between overflow-hidden">
        {/* Paper texture overlay */}
        <div className="absolute inset-0 bg-repeat opacity-25 mix-blend-multiply pointer-events-none" style={{ backgroundImage: "radial-gradient(#b08865 0.75px, transparent 0.75px)", backgroundSize: "12px 12px" }} />
        
        {/* Red border line */}
        <div className="absolute inset-2 border border-[#9c2d25]/30 pointer-events-none" />

        {/* Large faint Konoha emblem in parchment center */}
        <div className="absolute inset-0 flex items-center justify-center opacity-15 pointer-events-none">
          <KonohaLeafIcon className="w-48 h-48" color="#681b15" />
        </div>

        {/* Scroll Content */}
        <div className="relative z-10 w-full flex flex-col items-center text-center">
          <p className="font-display text-sm tracking-[0.25em] text-[#85231c] uppercase border-b border-[#85231c]/30 pb-1 w-full">
            {title}
          </p>
          <div className="my-4">
            <KonohaLeafIcon className="w-16 h-16 mx-auto text-[#7e1f18]" color="#7e1f18" />
          </div>
          {children}
        </div>

        {/* Seal stamp in bottom corner */}
        <div className="relative z-10 self-end mt-2 w-8 h-8 rounded border-2 border-[#b02219] flex items-center justify-center text-[#b02219] font-bold text-[10px] tracking-tighter rotate-6">
          印
        </div>
      </div>

      {/* Bottom Wooden Rod Handle */}
      <div className="relative z-20 flex items-center justify-center w-full">
        <div className="h-4 w-5 bg-gradient-to-r from-[#5a1e1e] to-[#8b2626] rounded-l-full shadow-md" />
        <div className="h-5 flex-1 bg-gradient-to-b from-[#b73229] via-[#8b1e17] to-[#490d09] border-y border-[#ff6b6b]/40 shadow-lg" />
        <div className="h-4 w-5 bg-gradient-to-l from-[#5a1e1e] to-[#8b2626] rounded-r-full shadow-md" />
      </div>
    </div>
  );
}

// Tech Stack Icons (React, TS, Python, Solana, Ethereum)
export function ReactIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg viewBox="-11.5 -10.23174 23 20.46348" fill="none" className={className}>
      <circle cx="0" cy="0" r="2.05" fill="#61dafb" />
      <g stroke="#61dafb" strokeWidth="1" fill="none">
        <ellipse rx="11" ry="4.2" />
        <ellipse rx="11" ry="4.2" transform="rotate(60)" />
        <ellipse rx="11" ry="4.2" transform="rotate(120)" />
      </g>
    </svg>
  );
}

export function TypeScriptIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 128 128" className={className}>
      <rect width="128" height="128" rx="20" fill="#3178c6" />
      <path d="M1.5 64C1.5 29.5 29.5 1.5 64 1.5S126.5 29.5 126.5 64 98.5 126.5 64 126.5 1.5 98.5 1.5 64z" fill="none" />
      <path d="M68 64h15v-8H47v8h15v40h6V64zm34 16c0-7-4-10-12-12-6-2-8-3-8-6 0-3 2-4 6-4 4 0 7 2 8 5l5-4c-2-4-7-6-13-6-8 0-13 4-13 11 0 7 4 10 12 12 6 2 8 3 8 6 0 3-3 4-6 4-5 0-8-3-9-6l-5 4c2 5 7 7 14 7 9 0 14-4 14-11z" fill="#ffffff" />
    </svg>
  );
}

export function PythonIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 128 128" className={className}>
      <path d="M63.2 5.5c-28.5 0-26.7 12.3-26.7 12.3l.1 12.8h27.3v3.9H25.3S5.5 32.2 5.5 60.9c0 28.7 17.3 27.6 17.3 27.6h10.3v-14.5s-.6-17.3 17.1-17.3h26.7s16.5-.2 16.5-16.1V21.6S95 5.5 63.2 5.5zm-14.7 8.5c2.7 0 4.9 2.2 4.9 4.9 0 2.7-2.2 4.9-4.9 4.9-2.7 0-4.9-2.2-4.9-4.9 0-2.7 2.2-4.9 4.9-4.9z" fill="#387eb8" />
      <path d="M64.8 122.5c28.5 0 26.7-12.3 26.7-12.3l-.1-12.8H64.1v-3.9h38.6s19.8 2.3 19.8-26.4c0-28.7-17.3-27.6-17.3-27.6h-10.3v14.5s.6 17.3-17.1 17.3H51.1s-16.5.2-16.5 16.1v19s-1.6 16.1 30.2 16.1zm14.7-8.5c-2.7 0-4.9-2.2-4.9-4.9 0-2.7 2.2-4.9 4.9-4.9 2.7 0 4.9 2.2 4.9 4.9 0 2.7-2.2 4.9-4.9 4.9z" fill="#ffe052" />
    </svg>
  );
}

export function SolanaIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 397 311" fill="none" className={className}>
      <path d="M64.6 237.9c2.4-2.4 5.7-3.8 9.2-3.8h317.4c5.8 0 8.7 7 4.6 11.1l-62.7 62.7c-2.4 2.4-5.7 3.8-9.2 3.8H6.5c-5.8 0-8.7-7-4.6-11.1l62.7-62.7zM64.6 3.8C67 1.4 70.3 0 73.8 0h317.4c5.8 0 8.7 7 4.6 11.1l-62.7 62.7c-2.4 2.4-5.7 3.8-9.2 3.8H6.5C.7 77.6-2.2 70.6 1.9 66.5L64.6 3.8zM332.6 120.9c-2.4-2.4-5.7-3.8-9.2-3.8H6.1c-5.8 0-8.7 7-4.6 11.1l62.7 62.7c2.4 2.4 5.7 3.8 9.2 3.8h317.4c5.8 0 8.7-7 4.6-11.1l-62.8-62.7z" fill="url(#solGrad)" />
      <defs>
        <linearGradient id="solGrad" x1="392.5" y1="21.5" x2="4.5" y2="299.5" gradientUnits="userSpaceOnUse">
          <stop stopColor="#00FFA3" />
          <stop offset="1" stopColor="#DC1FFF" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export function EthereumIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 784 1277" fill="none" className={className}>
      <path d="M392.07 0L383.5 29.11V874.74L392.07 883.33L784.13 651.54L392.07 0Z" fill="#8A92B2" />
      <path d="M392.07 0L0 651.54L392.07 883.33V472.33V0Z" fill="#62688F" />
      <path d="M392.07 956.17L387.24 962.06V1270.82L392.07 1276.89L784.37 724.89L392.07 956.17Z" fill="#8A92B2" />
      <path d="M392.07 1276.89V956.17L0 724.89L392.07 1276.89Z" fill="#62688F" />
      <path d="M392.07 883.33L784.13 651.54L392.07 472.33V883.33Z" fill="#454A75" />
      <path d="M0 651.54L392.07 883.33V472.33L0 651.54Z" fill="#62688F" />
    </svg>
  );
}
