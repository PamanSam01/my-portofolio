import type { Metadata } from "next";
import type { ReactNode } from "react";
import "@/styles/globals.css";
import { LanguageProvider } from "@/lib/i18n/LanguageContext";
import { IntroProvider } from "@/components/intro/IntroContext";
import { CinematicOverlay } from "@/components/CinematicOverlay";

export const metadata: Metadata = {
  title: "PamanSam (0xSam) | Web3 Developer • AI Builder • Indie Hacker",
  description:
    "Building onchain products, AI agents, and creative tools that bridge real utility with Web3 innovation.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Inter:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-body bg-[#0a0607] text-[#f7f3ea] selection:bg-[#ff3838] selection:text-white">
        <LanguageProvider>
          <IntroProvider>
            <CinematicOverlay />
            {children}
          </IntroProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
