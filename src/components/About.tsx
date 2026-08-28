"use client";

import { motion } from "framer-motion";
import { profile } from "@/data/profile";
import { BookOpen, Languages, Heart } from "lucide-react";

export default function About() {
  const { languages, qualities, about } = profile;


  return (
    <section
      id="about"
      className="px-6 py-24 md:px-12 lg:px-24 border-t border-text-muted/10"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="w-full"
      >
        <h2 className="font-display text-2xl md:text-3xl font-semibold text-text mb-8 flex items-center gap-3">
          <BookOpen className="w-6 h-6 text-signal-teal" />
          A propos
        </h2>
         <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="text-text-muted text-lg md:text-xl max-w-6xl mt-6 leading-relaxed text-center lg:text-left"
          >
            {about}
          </motion.p>

        <div className="grid md:grid-cols-2 gap-10 mt-12">
         
          {/* Langues */}
          <div className="p-6 rounded-xl bg-surface/50 border border-text-muted/10">
            <h3 className="font-mono text-xs text-text-muted uppercase tracking-wider mb-4 flex items-center gap-2">
              <Languages className="w-4 h-4 text-signal-teal" />
              Langues
            </h3>
            <ul className="space-y-2">
              {languages.map((lang) => (
                <li key={lang.name} className="text-text">
                  <span className="font-medium">{lang.name}</span>
                  <span className="text-text-muted"> — {lang.level}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Qualités */}
          <div className="p-6 rounded-xl bg-surface/50 border border-text-muted/10">
            <h3 className="font-mono text-xs text-text-muted uppercase tracking-wider mb-4 flex items-center gap-2">
              <Heart className="w-4 h-4 text-signal-teal" />
              Qualites
            </h3>
            <ul className="flex flex-wrap gap-2">
              {qualities.map((q) => (
                <li
                  key={q}
                  className="px-3 py-1.5 rounded-full bg-bg border border-text-muted/15 text-sm text-text-muted font-mono hover:border-signal-teal/30 hover:text-signal-teal transition-colors"
                >
                  {q}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </motion.div>
    </section>
  );
}