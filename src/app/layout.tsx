import type { Metadata } from "next";
import { Inter, Sora, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/context/ThemeContext";
import Navbar from "@/components/Navbar";
import ParticlesBackground from "@/components/ParticlesBackground";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ny Avo Sarobidy Andriatsilavo | ML/AI Engineer & Full-Stack Developer",
  description:
    "Portfolio de Ny Avo Sarobidy Andriatsilavo, ingenieur ML et developpeur Full-Stack. Conception de solutions IA de bout en bout, deploiement et monitoring sur Google Cloud, developpement Next.js, React, FastAPI.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={`${inter.variable} ${sora.variable} ${jetbrainsMono.variable}`}>
      <body>
        <ThemeProvider>
          <ParticlesBackground />
          <div className="relative z-10">
            <Navbar />
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
