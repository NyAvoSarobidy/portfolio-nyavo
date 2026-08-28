"use client";

import { motion } from "framer-motion";
import { profile } from "@/data/profile";
import { Brain, Database, Bot, Code, Cloud, FileCode, Wrench } from "lucide-react";

const categoryIcons: Record<string, React.ReactNode> = {
  "Machine Learning & IA": <Brain className="w-5 h-5" />,
  "Donnees & DevOps": <Database className="w-5 h-5" />,
  "AI Automation": <Bot className="w-5 h-5" />,
  "Developpement Full-Stack": <Code className="w-5 h-5" />,
  "Google Cloud Platform": <Cloud className="w-5 h-5" />,
  "Langages": <FileCode className="w-5 h-5" />,
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function SkillsGrid() {
  const { skills } = profile;

  return (
    <section
      id="skills"
      className="px-6 py-24 md:px-12 lg:px-24 border-t border-text-muted/10"
    >
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="font-display text-2xl md:text-3xl font-semibold text-text mb-12 flex items-center gap-3"
      >
        <Wrench className="w-6 h-6 text-signal-teal" />
        Competences
      </motion.h2>

      <motion.div
        className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {skills.map((group) => (
          <motion.div
            key={group.category}
            variants={itemVariants}
            className="p-6 rounded-xl bg-surface/50 border border-text-muted/10 hover:border-signal-teal/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-signal-teal/5"
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="p-2 rounded-lg bg-signal-teal/10 text-signal-teal">
                {categoryIcons[group.category] || <Code className="w-5 h-5" />}
              </span>
              <h3 className="font-mono text-xs text-signal-teal uppercase tracking-wider">
                {group.category}
              </h3>
            </div>
            <ul className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <li
                  key={item}
                  className="px-2.5 py-1 rounded-full bg-bg text-text-muted text-sm font-mono hover:bg-signal-teal/10 hover:text-signal-teal transition-colors"
                >
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
