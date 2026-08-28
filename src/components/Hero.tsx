"use client";

import { motion } from "framer-motion";
import { profile } from "@/data/profile";
import { MapPin, Sparkles } from "lucide-react";
import TerminalTyping from "./TerminalTyping";
import StatsCounter from "./StatsCounter";

export default function Hero() {
  const { identity, about } = profile;

  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-center px-4 py-20 pt-24 sm:px-6 md:px-12 lg:px-24 lg:py-24 lg:pt-28 relative overflow-hidden"
    >
      {/* Layout split: intro en haut, portrait en bas sur mobile / côte à côte sur desktop */}
      <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16 z-10">
        {/* Portrait - visible en premier sur mobile, en haut sur desktop */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative shrink-0 order-1 lg:order-2"
        >
          <div className="relative">
            {/* Glow */}
            <div className="absolute -inset-3 bg-gradient-to-br from-signal-teal/20 via-signal-teal/5 to-transparent rounded-full blur-2xl" />
            
            {/* Photo */}
            <div className="relative w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 rounded-full bg-surface border-2 border-signal-teal/20 overflow-hidden shadow-2xl">
              <img src="/images/CV.jpeg" alt="Portrait" className="w-full h-full object-cover object-top" />
            </div>

          
          </div>
        </motion.div>

        {/* Intro texte */}
        <div className="flex-1 text-center lg:text-left order-2 lg:order-1">
          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-text leading-tight"
          >
            {identity.name}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="font-mono text-xs sm:text-sm md:text-base text-signal-teal mt-2 sm:mt-3 tracking-wide flex items-center gap-2 justify-center lg:justify-start"
          >
           
            {identity.title}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="flex items-center gap-1.5 text-text-muted text-xs sm:text-sm mt-2 justify-center lg:justify-start"
          >
            <MapPin className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
            {identity.location}
          </motion.p>

           <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="font-mono mt-2 items-center gap-1.5 text-text-muted text-xs sm:text-sm mt-2 justify-center lg:justify-start"
          >
            Disponible pour des missions freelance et des postes en CDI
          </motion.p>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-wrap gap-3 sm:gap-4 mt-6 sm:mt-8 justify-center lg:justify-start"
          >
            <a
              href="#contact"
              className="px-5 py-2.5 sm:px-6 sm:py-3 rounded-lg bg-signal-teal text-white font-medium text-xs sm:text-sm hover:bg-signal-teal/90 transition-all hover:shadow-lg hover:shadow-signal-teal/25"
            >
              Me contacter
            </a>
            <a
              href="#projects"
              className="px-5 py-2.5 sm:px-6 sm:py-3 rounded-lg border border-text-muted/30 text-text font-medium text-xs sm:text-sm hover:border-text-muted/60 hover:bg-surface/50 transition-all"
            >
              Voir mes projets
            </a>
          </motion.div>

          {/* Terminal */}
          {/* <TerminalTyping /> */}
        </div>
      </div>

      {/* Stats counter */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1 }}
        className="mt-12 sm:mt-16 z-10"
      >
        <StatsCounter />
      </motion.div>
    </section>
  );
}
