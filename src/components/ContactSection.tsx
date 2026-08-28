"use client";

import { motion } from "framer-motion";
import { profile } from "@/data/profile";
import { Mail, Phone, MapPin, Link, ExternalLink, Send, MessageCircle } from "lucide-react";

export default function ContactSection() {
  const { identity } = profile;

  return (
    <section
      id="contact"
      className="px-6 py-24 md:px-12 lg:px-24 border-t border-text-muted/10"
    >
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="font-display text-2xl md:text-3xl font-semibold text-text mb-4 flex items-center gap-3"
      >
        <MessageCircle className="w-6 h-6 text-signal-teal" />
        Contact
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="text-text-muted max-w-xl mb-10"
      >
        Pour un projet, une mission freelance ou un poste, ecrivez-moi directement
        ou passez par LinkedIn.
      </motion.p>

      <motion.div
        className="flex flex-wrap gap-4 mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <a
          href={`mailto:${identity.email}`}
          className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-signal-teal text-white font-medium text-sm hover:bg-signal-teal/90 transition-all hover:shadow-lg hover:shadow-signal-teal/25"
        >
          <Send className="w-4 h-4" />
          Envoyer un message
        </a>
        <a
          href={identity.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-text-muted/30 text-text font-medium text-sm hover:border-text-muted/60 hover:bg-surface/50 transition-all"
        >
          <Link className="w-4 h-4" />
          LinkedIn
        </a>
        <a
          href={identity.github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-text-muted/30 text-text font-medium text-sm hover:border-text-muted/60 hover:bg-surface/50 transition-all"
        >
          <ExternalLink className="w-4 h-4" />
          GitHub
        </a>
      </motion.div>

      {/* Infos brutes */}
      <motion.div
        className="p-6 rounded-xl bg-surface/50 border border-text-muted/10 max-w-md"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <h3 className="font-mono text-xs text-text-muted uppercase tracking-wider mb-4">
          Coordonnees
        </h3>
        <div className="font-mono text-sm text-text space-y-3">
          <p className="flex items-center gap-3">
            <Mail className="w-4 h-4 text-signal-teal" /> {identity.email}
          </p>
          <p className="flex items-center gap-3">
            <Phone className="w-4 h-4 text-signal-teal" /> {identity.phone}
          </p>
          <p className="flex items-center gap-3">
            <MapPin className="w-4 h-4 text-signal-teal" /> {identity.location}
          </p>
        </div>
      </motion.div>
    </section>
  );
}
