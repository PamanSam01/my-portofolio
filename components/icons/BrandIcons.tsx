import React from "react";

// ============================================================================
// OFFICIAL TECH STACK & BLOCKCHAIN ECOSYSTEM BRAND LOGOS
// Verified vector paths from Simple Icons & Web3 Icons official specifications
// ============================================================================

// 1. React Official Logo (#61DAFB)
export function ReactIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg viewBox="-11.5 -10.23174 23 20.46348" fill="none" className={className} aria-label="React">
      <circle cx="0" cy="0" r="2.05" fill="#61DAFB" />
      <g stroke="#61DAFB" strokeWidth="1" fill="none">
        <ellipse rx="11" ry="4.2" />
        <ellipse rx="11" ry="4.2" transform="rotate(60)" />
        <ellipse rx="11" ry="4.2" transform="rotate(120)" />
      </g>
    </svg>
  );
}

// 2. TypeScript Official Logo (#3178C6)
export function TypeScriptIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-label="TypeScript">
      {/* Crisp white underlying card for letters */}
      <rect width="24" height="24" rx="3" fill="#FFFFFF" />
      {/* Official Simple Icons TypeScript path with #3178C6 brand blue */}
      <path
        fill="#3178C6"
        d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z"
      />
    </svg>
  );
}

// 3. Python Official Dual-Snake Logo (#3776AB Blue & #FFD438 Yellow)
export function PythonIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 128 128" className={className} aria-label="Python">
      <path
        d="M63.2 5.5c-28.5 0-26.7 12.3-26.7 12.3l.1 12.8h27.3v3.9H25.3S5.5 32.2 5.5 60.9c0 28.7 17.3 27.6 17.3 27.6h10.3v-14.5s-.6-17.3 17.1-17.3h26.7s16.5-.2 16.5-16.1V21.6S95 5.5 63.2 5.5zm-14.7 8.5c2.7 0 4.9 2.2 4.9 4.9 0 2.7-2.2 4.9-4.9 4.9-2.7 0-4.9-2.2-4.9-4.9 0-2.7 2.2-4.9 4.9-4.9z"
        fill="#3776AB"
      />
      <path
        d="M64.8 122.5c28.5 0 26.7-12.3 26.7-12.3l-.1-12.8H64.1v-3.9h38.6s19.8 2.3 19.8-26.4c0-28.7-17.3-27.6-17.3-27.6h-10.3v14.5s.6 17.3-17.1 17.3H51.1s-16.5.2-16.5 16.1v19s-1.6 16.1 30.2 16.1zm14.7-8.5c-2.7 0-4.9-2.2-4.9-4.9 0-2.7 2.2-4.9 4.9-4.9 2.7 0 4.9 2.2 4.9 4.9 0 2.7-2.2 4.9-4.9 4.9z"
        fill="#FFD438"
      />
    </svg>
  );
}

// 4. Next.js Official Logo (Simple Icons / Vercel spec)
export function NextJsIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-label="Next.js">
      <circle cx="12" cy="12" r="11.5" fill="#000000" stroke="#FFFFFF" strokeWidth="0.8" strokeOpacity="0.25" />
      <path
        d="M18.665 21.978C16.758 23.255 14.465 24 12 24 5.377 24 0 18.623 0 12S5.377 0 12 0s12 5.377 12 12c0 3.583-1.574 6.801-4.067 9.001L9.219 7.2H7.2v9.596h1.615V9.251l9.85 12.727Zm-3.332-8.533 1.6 2.061V7.2h-1.6v6.245Z"
        fill="#FFFFFF"
      />
    </svg>
  );
}

// 5. Tailwind CSS Official Dual-Wave Logo (#06B6D4)
export function TailwindIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-label="Tailwind CSS">
      <path
        d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z"
        fill="#06B6D4"
      />
    </svg>
  );
}

// 6. Node.js Official Logo (#5FA04E Green - Simple Icons)
export function NodeJsIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-label="Node.js">
      <path
        fill="#5FA04E"
        d="M11.998 24c-.321 0-.641-.084-.922-.247l-2.936-1.737c-.438-.245-.224-.332-.08-.383c.585-.203.703-.25 1.328-.604c.065-.037.151-.023.218.017l2.256 1.339c.082.045.197.045.272 0l8.795-5.076c.082-.047.134-.141.134-.238V6.921c0-.099-.053-.192-.137-.242l-8.791-5.072a.29.29 0 0 0-.271 0L3.075 6.68a.28.28 0 0 0-.139.241v10.15c0 .097.054.189.139.235l2.409 1.392c1.307.654 2.108-.116 2.108-.89V7.787c0-.142.114-.253.256-.253h1.115c.139 0 .255.112.255.253v10.021c0 1.745-.95 2.745-2.604 2.745c-.508 0-.909 0-2.026-.551L2.28 18.675c-.57-.329-.922-.945-.922-1.604V6.921c0-.659.353-1.275.922-1.603l8.795-5.082a1.86 1.86 0 0 1 1.848 0l8.794 5.082c.57.329.924.944.924 1.603v10.15c0 .659-.354 1.273-.924 1.604l-8.794 5.078c-.28.163-.6.247-.925.247zM19.099 13.993c0-1.9-1.284-2.406-3.987-2.763c-2.731-.361-3.009-.548-3.009-1.187c0-.528.235-1.233 2.258-1.233c1.807 0 2.473.389 2.747 1.607a.25.25 0 0 0 .247.199h1.141c.071 0 .138-.031.186-.081c.048-.054.074-.123.067-.196c-.177-2.098-1.571-3.076-4.388-3.076c-2.508 0-4.004 1.058-4.004 2.833c0 1.925 1.488 2.457 3.895 2.695c2.88.282 3.103.703 3.103 1.269c0 .983-.789 1.402-2.642 1.402c-2.327 0-2.839-.584-3.011-1.742a.26.26 0 0 0-.253-.215h-1.137a.25.25 0 0 0-.254.253c0 1.482.806 3.248 4.655 3.248c2.951 0 4.549-1.097 4.549-3.014z"
      />
    </svg>
  );
}

// 7. AI / LLM Autonomous Agent Star (#FF9F43 to #FF3838 Chakra Gradient)
export function AiLlmIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" fill="none" className={className} aria-label="AI / LLM">
      <defs>
        <linearGradient id="aiGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFA502" />
          <stop offset="50%" stopColor="#FF6B35" />
          <stop offset="100%" stopColor="#FF3838" />
        </linearGradient>
      </defs>
      {/* 4-point neural AI star with central core */}
      <path
        d="M50 4C50 28 28 50 4 50C28 50 50 72 50 96C50 72 72 50 96 50C72 50 50 28 50 4Z"
        fill="url(#aiGrad)"
      />
      <circle cx="50" cy="50" r="10" fill="#FFFFFF" />
      <circle cx="50" cy="50" r="5" fill="#FF3838" />
      {/* Micro satellite sparks */}
      <path d="M78 14C78 22 70 28 62 28C70 28 78 34 78 42C78 34 86 28 94 28C86 28 78 22 78 14Z" fill="#FFA502" />
      <path d="M22 68C22 74 16 80 10 80C16 80 22 86 22 92C22 86 28 80 34 80C28 80 22 74 22 68Z" fill="#FF7844" />
    </svg>
  );
}

// 8. Ethereum Official Crystal Logo (#627EEA / #8A92B2 / #454A75 Facets)
export function EthereumIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 784 1277" fill="none" className={className} aria-label="Ethereum">
      <path d="M392.07 0L383.5 29.11V874.74L392.07 883.33L784.13 651.54L392.07 0Z" fill="#8A92B2" />
      <path d="M392.07 0L0 651.54L392.07 883.33V472.33V0Z" fill="#62688F" />
      <path d="M392.07 956.17L387.24 962.06V1270.82L392.07 1276.89L784.37 724.89L392.07 956.17Z" fill="#8A92B2" />
      <path d="M392.07 1276.89V956.17L0 724.89L392.07 1276.89Z" fill="#62688F" />
      <path d="M392.07 883.33L784.13 651.54L392.07 472.33V883.33Z" fill="#454A75" />
      <path d="M0 651.54L392.07 883.33V472.33L0 651.54Z" fill="#62688F" />
    </svg>
  );
}

// 9. Solana Official 3-Bar Gradient Logo (#00FFA3 to #DC1FFF - Simple Icons)
export function SolanaIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-label="Solana">
      <defs>
        <linearGradient id="solGradOfficial" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#00FFA3" />
          <stop offset="100%" stopColor="#DC1FFF" />
        </linearGradient>
      </defs>
      <path
        fill="url(#solGradOfficial)"
        d="m23.8764 18.0313-3.962 4.1393a.9201.9201 0 0 1-.306.2106.9407.9407 0 0 1-.367.0742H.4599a.4689.4689 0 0 1-.2522-.0733.4513.4513 0 0 1-.1696-.1962.4375.4375 0 0 1-.0314-.2545.4438.4438 0 0 1 .117-.2298l3.9649-4.1393a.92.92 0 0 1 .3052-.2102.9407.9407 0 0 1 .3658-.0746H23.54a.4692.4692 0 0 1 .2523.0734.4531.4531 0 0 1 .1697.196.438.438 0 0 1 .0313.2547.4442.4442 0 0 1-.1169.2297zm-3.962-8.3355a.9202.9202 0 0 0-.306-.2106.941.941 0 0 0-.367-.0742H.4599a.4687.4687 0 0 0-.2522.0734.4513.4513 0 0 0-.1696.1961.4376.4376 0 0 0-.0314.2546.444.444 0 0 0 .117.2297l3.9649 4.1394a.9204.9204 0 0 0 .3052.2102c.1154.049.24.0744.3658.0746H23.54a.469.469 0 0 0 .2523-.0734.453.453 0 0 0 .1697-.1961.4382.4382 0 0 0 .0313-.2546.4444.4444 0 0 0-.1169-.2297zM.46 6.7225h18.7815a.9411.9411 0 0 0 .367-.0742.9202.9202 0 0 0 .306-.2106l3.962-4.1394a.4442.4442 0 0 0 .117-.2297.4378.4378 0 0 0-.0314-.2546.453.453 0 0 0-.1697-.196.469.469 0 0 0-.2523-.0734H4.7596a.941.941 0 0 0-.3658.0745.9203.9203 0 0 0-.3052.2102L.1246 5.9687a.4438.4438 0 0 0-.1169.2295.4375.4375 0 0 0 .0312.2544.4512.4512 0 0 0 .1692.196.4689.4689 0 0 0 .2518.0739z"
      />
    </svg>
  );
}

// 10. Aptos Official Logo (Official Web3 Icons / Aptos Foundation Chevron Plates)
export function AptosIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-label="Aptos">
      {/* Official Aptos segmented chevron horizontal plates */}
      <path
        fill="#FFFFFF"
        d="M15.336 9.02a.65.65 0 0 1-.483-.217l-.643-.726a.507.507 0 0 0-.757 0l-.552.623a.95.95 0 0 1-.713.322h-8.68a9 9 0 0 0-.473 2.221h8.196a.53.53 0 0 0 .38-.163l.764-.796a.5.5 0 0 1 .365-.155h.031c.145 0 .283.061.379.17l.643.726a.65.65 0 0 0 .483.218h6.69a9 9 0 0 0-.473-2.221zm-7.341 6.894a.53.53 0 0 0 .38-.163l.764-.796a.5.5 0 0 1 .365-.156h.031c.145 0 .283.062.379.17l.643.727a.65.65 0 0 0 .483.218h9.066c.34-.702.588-1.456.736-2.244h-8.701a.65.65 0 0 1-.483-.217l-.643-.727a.507.507 0 0 0-.757 0l-.552.624a.95.95 0 0 1-.713.321H3.158c.148.789.397 1.542.737 2.243zm6.431-9.32a.53.53 0 0 0 .382-.163l.763-.796a.5.5 0 0 1 .364-.155h.032c.144 0 .283.061.378.17l.643.727a.65.65 0 0 0 .484.217h1.723A8.99 8.99 0 0 0 12.001 3a8.99 8.99 0 0 0-7.195 3.594zm-5.82 11.544a.65.65 0 0 1-.484-.218l-.643-.726a.507.507 0 0 0-.756 0l-.552.623a.95.95 0 0 1-.713.321h-.037A8.97 8.97 0 0 0 12.001 21a8.97 8.97 0 0 0 6.578-2.862z"
      />
    </svg>
  );
}

// 11. Sui Official Water Droplet Logo (#4BA2FF Sui Blue - Simple Icons / Web3 Icons)
export function SuiIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-label="Sui">
      {/* Official Sui droplet with interlocking ribbon waves */}
      <path
        fill="#4BA2FF"
        d="M17.636 10.009a7.16 7.16 0 0 1 1.565 4.474a7.2 7.2 0 0 1-1.608 4.53l-.087.106l-.023-.135a7 7 0 0 0-.07-.349c-.502-2.21-2.142-4.106-4.84-5.642c-1.823-1.034-2.866-2.278-3.14-3.693c-.177-.915-.046-1.834.209-2.62c.254-.787.631-1.446.953-1.843l1.05-1.284a.46.46 0 0 1 .713 0l5.28 6.456zm1.66-1.283L12.26.123a.336.336 0 0 0-.52 0L4.704 8.726l-.023.029a9.33 9.33 0 0 0-2.07 5.872C2.612 19.803 6.816 24 12 24s9.388-4.197 9.388-9.373a9.32 9.32 0 0 0-2.07-5.871zM6.389 9.981l.63-.77l.018.142q.023.17.055.34c.408 2.136 1.862 3.917 4.294 5.297c2.114 1.203 3.345 2.586 3.7 4.103a5.3 5.3 0 0 1 .109 1.801l-.004.034l-.03.014A7.2 7.2 0 0 1 12 21.67c-3.976 0-7.2-3.218-7.2-7.188c0-1.705.594-3.27 1.587-4.503z"
      />
    </svg>
  );
}

// 12. EVM (Ethereum Virtual Machine) Ecosystem Hex Node
export function EvmIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" fill="none" className={className} aria-label="EVM">
      <defs>
        <linearGradient id="evmGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#627EEA" />
          <stop offset="100%" stopColor="#EC4899" />
        </linearGradient>
      </defs>
      {/* Hexagonal multi-chain EVM node */}
      <path
        d="M50 6L88 28V72L50 94L12 72V28L50 6Z"
        fill="#120A0C"
        stroke="url(#evmGrad)"
        strokeWidth="3.5"
      />
      {/* Inner Ethereum crystal */}
      <path d="M50 20L32 50L50 60L68 50L50 20Z" fill="#627EEA" />
      <path d="M50 20L50 60L68 50L50 20Z" fill="#8A92B2" />
      <path d="M50 64L32 54L50 80L50 64Z" fill="#627EEA" />
      <path d="M50 64L68 54L50 80L50 64Z" fill="#8A92B2" />
      {/* Satellite network nodes */}
      <circle cx="50" cy="6" r="3.5" fill="#EC4899" />
      <circle cx="88" cy="28" r="3.5" fill="#EC4899" />
      <circle cx="88" cy="72" r="3.5" fill="#627EEA" />
      <circle cx="50" cy="94" r="3.5" fill="#627EEA" />
      <circle cx="12" cy="72" r="3.5" fill="#EC4899" />
      <circle cx="12" cy="28" r="3.5" fill="#627EEA" />
    </svg>
  );
}

// 13. FastAPI Official Logo (#009688)
export function FastApiIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-label="FastAPI">
      <circle cx="12" cy="12" r="11" fill="#009688" />
      <path d="M11.171 5.454h7.55l-7.58 5.328h5.182L5.28 18.544q2.946-6.545 5.891-13.09" fill="#FFFFFF" />
    </svg>
  );
}

// 14. PostgreSQL Official Logo (#4169E1)
export function PostgreSqlIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-label="PostgreSQL">
      <path
        fill="#4169E1"
        d="M23.5594 14.7228a.5269.5269 0 0 0-.0563-.1191c-.139-.2632-.4768-.3418-1.0074-.2321-1.6533.3411-2.2935.1312-2.5256-.0191 1.342-2.0482 2.445-4.522 3.0411-6.8297.2714-1.0507.7982-3.5237.1222-4.7316a1.5641 1.5641 0 0 0-.1509-.235C21.6931.9086 19.8007.0248 17.5099.0005c-1.4947-.0158-2.7705.3461-3.1161.4794a9.449 9.449 0 0 0-.5159-.0816 8.044 8.044 0 0 0-1.3114-.1278c-1.1822-.0184-2.2038.2642-3.0498.8406-.8573-.3211-4.7888-1.645-7.2219.0788C.9359 2.1526.3086 3.8733.4302 6.3043c.0409.818.5069 3.334 1.2423 5.7436.4598 1.5065.9387 2.7019 1.4334 3.582.553.9942 1.1259 1.5933 1.7143 1.7895.4474.1491 1.1327.1441 1.8581-.7279.8012-.9635 1.5903-1.8258 1.9446-2.2069.4351.2355.9064.3625 1.39.3772a.0569.0569 0 0 0 .0004.0041 11.0312 11.0312 0 0 0-.2472.3054c-.3389.4302-.4094.5197-1.5002.7443-.3102.064-1.1344.2339-1.1464.8115-.0025.1224.0329.2309.0919.3268.2269.4231.9216.6097 1.015.6331 1.3345.3335 2.5044.092 3.3714-.6787-.017 2.231.0775 4.4174.3454 5.0874.2212.5529.7618 1.9045 2.4692 1.9043.2505 0 .5263-.0291.8296-.0941 1.7819-.3821 2.5557-1.1696 2.855-2.9059.1503-.8707.4016-2.8753.5388-4.1012.0169-.0703.0357-.1207.057-.1362.0007-.0005.0697-.0471.4272.0307a.3673.3673 0 0 0 .0443.0068l.2539.0223.0149.001c.8468.0384 1.9114-.1426 2.5312-.4308.6438-.2988 1.8057-1.0323 1.5951-1.6698z"
      />
    </svg>
  );
}

// 15. Three.js Official Wireframe Logo
export function ThreeJsIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-label="Three.js">
      <path d="M.38 0a.268.268 0 0 0-.256.332l2.894 11.716a.268.268 0 0 0 .01.04l2.89 11.708a.268.268 0 0 0 .447.128L23.802 7.15a.268.268 0 0 0-.112-.45l-5.784-1.667a.268.268 0 0 0-.123-.035L6.38 1.715a.268.268 0 0 0-.144-.04L.456.01A.268.268 0 0 0 .38 0zm.374.654L5.71 2.08 1.99 5.664zM6.61 2.34l4.864 1.4-3.65 3.515zm-.522.12l1.217 4.926-4.877-1.4zm6.28 1.538l4.878 1.404-3.662 3.53zm-.52.13l1.208 4.9-4.853-1.392zm6.3 1.534l4.947 1.424-3.715 3.574zm-.524.12l1.215 4.926-4.876-1.398zm-15.432.696l4.964 1.424-3.726 3.586zM8.047 8.15l4.877 1.4-3.66 3.527zm-.518.137l1.236 5.017-4.963-1.432zm6.274 1.535l4.965 1.425-3.73 3.586zm-.52.127l1.235 5.012-4.958-1.43zm-9.63 2.438l4.873 1.406-3.656 3.523zm5.854 1.687l4.863 1.403-3.648 3.51zm-.54.04l1.214 4.927-4.875-1.4zm-3.896 4.02l5.037 1.442-3.782 3.638z" />
    </svg>
  );
}

// 16. GSAP (GreenSock Animation Platform) Logo (#0AE448)
export function GsapIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-label="GSAP">
      <rect x="2" y="2" width="20" height="20" rx="6" fill="#08180E" stroke="#0AE448" strokeWidth="1.2" strokeOpacity="0.4" />
      <path
        d="M7 13.5C7 10 9 7.5 12 7.5C14.5 7.5 16 9 16.5 10.5L14.5 11.2C14.2 10.2 13.3 9.3 12 9.3C10.2 9.3 8.9 10.8 8.9 13C8.9 15.2 10.2 16.7 12 16.7C13.5 16.7 14.5 15.8 14.8 14.5H12V12.7H16.8V15.5C15.8 17.5 14.1 18.5 12 18.5C9 18.5 7 16.5 7 13.5Z"
        fill="#0AE448"
      />
    </svg>
  );
}

// 17. Linux Ecosystem Icon (#F5A623)
export function LinuxIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-label="Linux">
      <rect x="2.5" y="3.5" width="19" height="17" rx="3" stroke="#F5A623" strokeWidth="1.5" fill="#140E0A" />
      <path d="M7 8.5l4 3.5-4 3.5" stroke="#F5A623" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M13 15.5h4" stroke="#F5A623" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}
