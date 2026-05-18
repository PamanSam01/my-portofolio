import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Bebas_Neue, Inter } from "next/font/google";
import "@/styles/globals.css";

const bebas = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-bebas",
  display: "swap"
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap"
});

export const metadata: Metadata = {
  title: "0xSam | Cinematic Frontend Engineer",
  description:
    "Cinematic anime-inspired portfolio of 0xSam. Specializing in interactive web experiences, creative development, and motion UI."
};

import { LanguageProvider } from "@/lib/i18n/LanguageContext";
import { CinematicOverlay } from "@/components/CinematicOverlay";
import { GlobalBackground } from "@/components/GlobalBackground";

export default function RootLayout({
  children
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${bebas.variable} ${inter.variable} bg-ink`}>
        <LanguageProvider>
          <CinematicOverlay />
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
