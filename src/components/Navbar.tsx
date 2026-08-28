"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

const navLinks = [
  { href: "#about", label: "Profil" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Competences" },
  { href: "#projects", label: "Projets" },
  { href: "#education", label: "Formations" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-bg/80 backdrop-blur-sm border-b border-text-muted/10">
      <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
        {/* Logo / Nom */}
        <a href="#hero" className="font-display text-md font-semibold text-text">
          Ny Avo SAROBIDY
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-mono text-md text-text-muted hover:text-text transition-colors"
            >
              {link.label}
            </a>
          ))}
          <ThemeToggle />
        </div>

        {/* Mobile toggle */}
        <div className="flex items-center gap-3 md:hidden">
          <ThemeToggle />
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-1.5 rounded-md border border-text-muted/20"
            aria-label="Menu"
          >
            {isOpen ? (
              <X className="w-4 h-4 text-text-muted" />
            ) : (
              <Menu className="w-4 h-4 text-text-muted" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden border-t border-text-muted/10 bg-bg/95 backdrop-blur-sm">
          <div className="px-6 py-4 space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block font-mono text-sm text-text-muted hover:text-text transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
