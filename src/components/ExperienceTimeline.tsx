"use client";

import { motion } from "framer-motion";
import { profile } from "@/data/profile";
import { Briefcase, ExternalLink } from "lucide-react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
};

export default function ExperienceTimeline() {
  const { experiences } = profile;

  return (
    <section
      id="experience"
      className="px-6 py-24 md:px-12 lg:px-24 border-t border-text-muted/10"
    >
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="font-display text-2xl md:text-3xl font-semibold text-text mb-12 flex items-center gap-3"
      >
        <Briefcase className="w-6 h-6 text-signal-teal" />
        Experience
      </motion.h2>

      <motion.div
        className="space-y-0"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {experiences.map((exp, index) => (
          <motion.div
            key={`${exp.company}-${index}`}
            variants={itemVariants}
            className="relative pl-8 pb-12 border-l-2 border-text-muted/20 last:pb-0 hover:border-signal-teal/40 transition-colors"
          >
            {/* Point de timeline */}
            <span
              className={`absolute left-px top-1 w-3 h-3 -translate-x-1/2 rounded-full border-2 ${
                index === 0
                  ? "bg-signal-teal border-signal-teal"
                  : "bg-bg border-text-muted/40"
              }`}
              aria-hidden="true"
            />

            {/* Card */}
            <div className="p-5 rounded-xl bg-surface/50 border border-text-muted/10 hover:border-signal-teal/20 transition-all hover:shadow-lg hover:shadow-signal-teal/5">
              <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 mb-2">
                <h3 className="font-display text-lg font-semibold text-text">
                  {exp.role}
                </h3>
                <span className="font-mono text-xs text-text-muted px-2 py-0.5 rounded-full bg-bg">
                  {exp.period}
                </span>
              </div>

              <p className="font-mono text-sm text-signal-teal mb-3">
                {exp.company} · {exp.location}
              </p>

              <ul className="space-y-1.5 mb-3">
                {exp.highlights.map((h, i) => (
                  <li key={i} className="text-text-muted text-sm leading-relaxed">
                    — {h}
                  </li>
                ))}
              </ul>

              {exp.links.length > 0 && (
                <div className="flex flex-wrap gap-2 mt-3">
                  {exp.links.map((link) => (
                    <a
                      key={link.url}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 font-mono text-xs text-signal-teal hover:text-signal-teal/80 bg-signal-teal/10 px-2.5 py-1 rounded-full"
                    >
                      <ExternalLink className="w-3 h-3" />
                      {link.label}
                    </a>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
