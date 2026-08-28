"use client";

import { motion } from "framer-motion";
import { Heart, Code } from "lucide-react";

export default function Footer() {
  return (
    <footer className="px-6 py-10 md:px-12 lg:px-24 border-t border-text-muted/10">
      <motion.div
        className="flex flex-col md:flex-row items-center justify-between gap-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <p className="font-mono text-xs text-text-muted flex items-center gap-1.5">
          © {new Date().getFullYear()} Ny Avo Sarobidy Andriatsilavo
        </p>
      
      </motion.div>
    </footer>
  );
}
