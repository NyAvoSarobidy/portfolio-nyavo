"use client";

import { motion } from "framer-motion";
import { profile } from "@/data/profile";
import { GraduationCap, Award, ExternalLink } from "lucide-react";

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

export default function EducationList() {
  const { education, certifications } = profile;

  return (
    <section
      id="education"
      className="px-6 py-24 md:px-12 lg:px-24 border-t border-text-muted/10"
    >
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="font-display text-2xl md:text-3xl font-semibold text-text mb-12 flex items-center gap-3"
      >
        <GraduationCap className="w-6 h-6 text-signal-teal" />
        Formations &amp; Certifications
      </motion.h2>

      <div className="grid lg:grid-cols-2 gap-10">
        {/* Formations */}
        <div>
          <h3 className="font-mono text-xs text-text-muted uppercase tracking-wider mb-6 flex items-center gap-2">
            <GraduationCap className="w-4 h-4 text-signal-teal" />
            Formations
          </h3>
          <motion.div
            className="space-y-4"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {education.map((edu) => (
              <motion.div
                key={edu.degree}
                variants={itemVariants}
                className="p-5 rounded-xl bg-surface/50 border border-text-muted/10 hover:border-signal-teal/20 transition-all"
              >
                <p className="font-display text-sm font-semibold text-text">
                  {edu.degree}
                </p>
                <p className="font-mono text-xs text-signal-teal mt-1">
                  {edu.institution} · {edu.period}
                </p>
                {edu.detail && (
                  <p className="text-text-muted text-sm mt-2">{edu.detail}</p>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Certifications */}
        <div>
          <h3 className="font-mono text-xs text-text-muted uppercase tracking-wider mb-6 flex items-center gap-2">
            <Award className="w-4 h-4 text-signal-teal" />
            Certifications
          </h3>
          <motion.div
            className="space-y-4"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {certifications.map((cert) => (
              <motion.div
                key={cert.name}
                variants={itemVariants}
                className="p-5 rounded-xl bg-surface/50 border border-text-muted/10 hover:border-signal-teal/20 transition-all"
              >
                {cert.url ? (
                  <a
                    href={cert.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-display text-sm font-semibold text-text hover:text-signal-teal transition-colors inline-flex items-center gap-1.5"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    {cert.name}
                  </a>
                ) : (
                  <p className="font-display text-sm font-semibold text-text">
                    {cert.name}
                  </p>
                )}
                <p className="font-mono text-xs text-text-muted mt-1">
                  {cert.issuer && <span>{cert.issuer} · </span>}
                  {cert.date}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
