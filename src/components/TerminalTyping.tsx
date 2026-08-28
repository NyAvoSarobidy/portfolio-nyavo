"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const terminalLines = [
  "> initialisation pipeline ML...",
  "> chargement donnees... OK",
  "> entrainement modeles... OK",
  "> deploiement Vertex AI... OK",
  "> monitoring actif...",
  "> statut: ONLINE",
];

export default function TerminalTyping() {
  const [displayedLines, setDisplayedLines] = useState<string[]>([]);
  const [currentLine, setCurrentLine] = useState(0);
  const [currentChar, setCurrentChar] = useState(0);

  useEffect(() => {
    if (currentLine >= terminalLines.length) return;

    const line = terminalLines[currentLine];
    if (currentChar >= line.length) {
      setTimeout(() => {
        setDisplayedLines((prev) => [...prev, line]);
        setCurrentLine((prev) => prev + 1);
        setCurrentChar(0);
      }, 300);
      return;
    }

    const timeout = setTimeout(() => {
      setCurrentChar((prev) => prev + 1);
    }, 30 + Math.random() * 20);

    return () => clearTimeout(timeout);
  }, [currentLine, currentChar]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.8 }}
      className="mt-8 p-4 rounded-xl bg-bg/80 border border-text-muted/10 font-mono text-xs max-w-md backdrop-blur-sm"
    >
      <div className="flex items-center gap-2 mb-3 pb-2 border-b border-text-muted/10">
        <span className="w-2.5 h-2.5 rounded-full bg-red-400/80" />
        <span className="w-2.5 h-2.5 rounded-full bg-yellow-400/80" />
        <span className="w-2.5 h-2.5 rounded-full bg-green-400/80" />
        <span className="text-text-muted/60 ml-2">pipeline-status</span>
      </div>
      <div className="space-y-1">
        {displayedLines.map((line, i) => (
          <p key={i} className="text-signal-teal/80">{line}</p>
        ))}
        {currentLine < terminalLines.length && (
          <p className="text-signal-teal/80">
            {terminalLines[currentLine].slice(0, currentChar)}
            <span className="animate-pulse">▊</span>
          </p>
        )}
      </div>
    </motion.div>
  );
}
