import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./sections/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "#080606",
        blood: "#e52e2e",
        bone: "#f7f3ea",
        smoke: "#141010",
        neon: "#ff3838",
        konoha: {
          dark: "#0b0808",
          charcoal: "#140f0f",
          card: "rgba(20, 15, 16, 0.72)",
          cardHover: "rgba(28, 20, 22, 0.85)",
          red: "#e52e2e",
          crimson: "#ff2a3d",
          orange: "#ff6b35",
          amber: "#ffa502",
          border: "rgba(229, 46, 46, 0.25)",
          borderGlow: "rgba(255, 75, 75, 0.6)",
        },
        sakura: {
          light: "#ffeef2",
          DEFAULT: "#ffb7c5",
          dark: "#f38ba0",
        }
      },
      fontFamily: {
        display: ["var(--font-bebas)", "Impact", "sans-serif"],
        body: ["var(--font-inter)", "Arial", "sans-serif"]
      },
      boxShadow: {
        slash: "12px 12px 0 #050505",
        redline: "0 0 25px rgba(229, 46, 46, 0.25)",
        konohaGlow: "0 0 35px rgba(255, 75, 43, 0.35)",
        cardGlow: "0 10px 30px -10px rgba(0, 0, 0, 0.7), 0 0 15px rgba(229, 46, 46, 0.15)",
        sunGlow: "0 0 100px 30px rgba(255, 110, 40, 0.6)"
      },
      keyframes: {
        grain: {
          "0%, 100%": { transform: "translate(0, 0)" },
          "10%": { transform: "translate(-5%, -10%)" },
          "30%": { transform: "translate(3%, -15%)" },
          "50%": { transform: "translate(12%, 9%)" },
          "70%": { transform: "translate(9%, 4%)" },
          "90%": { transform: "translate(-1%, 7%)" }
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" }
        },
        cursorPulse: {
          "0%, 100%": { transform: "translate(-50%, -50%) scale(1)" },
          "50%": { transform: "translate(-50%, -50%) scale(1.5)" }
        },
        floatPetal: {
          "0%": { transform: "translate(0, -10px) rotate(0deg)", opacity: "0" },
          "15%": { opacity: "0.85" },
          "85%": { opacity: "0.85" },
          "100%": { transform: "translate(-120px, 105vh) rotate(360deg)", opacity: "0" }
        },
        pulseGlow: {
          "0%, 100%": { opacity: "0.6", transform: "scale(1)" },
          "50%": { opacity: "0.9", transform: "scale(1.05)" }
        }
      },
      animation: {
        grain: "grain 7s steps(10) infinite",
        marquee: "marquee 18s linear infinite",
        cursorPulse: "cursorPulse 1.2s ease-in-out infinite",
        petal: "floatPetal 10s ease-in-out infinite",
        pulseGlow: "pulseGlow 4s ease-in-out infinite"
      }
    }
  },
  plugins: []
};

export default config;
