"use client";

import {
  motion,
  useAnimationFrame,
  useMotionValue,
  useReducedMotion,
} from "framer-motion";
import { useCallback, useEffect, useRef, useState } from "react";
import { profile } from "@/data/profile";
import { ArrowLeft, ArrowRight, ExternalLink, FolderOpen } from "lucide-react";

/** Vitesse du défilement automatique, en pixels par seconde. */
const SPEED = 28;
/** Dimensions virtuelles de rendu de l'iframe (on simule un desktop puis on réduit). */
const FRAME_W = 1440;
const FRAME_H = 900;

type Project = {
  name: string;
  url: string;
  description: string;
  /** Capture d'écran locale (ex: "/projects/rag-langchain.png"). Prioritaire sur l'iframe. */
  image?: string;
  embed?: boolean;
  tags?: string[];
};

const clamp2 = {
  display: "-webkit-box",
  WebkitLineClamp: 2,
  WebkitBoxOrient: "vertical" as const,
  overflow: "hidden",
};

const domainOf = (url: string) =>
  url.replace(/^https?:\/\//, "").replace(/\/$/, "");

/* ------------------------------------------------------------------ */
/*  Aperçu : iframe live → capture d'écran → carte de repli dessinée   */
/* ------------------------------------------------------------------ */

function SitePreview({ project }: { project: Project }) {
  const boxRef = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  const [loaded, setLoaded] = useState(false);
  // Une capture locale court-circuite l'iframe : ni chargement distant, ni blocage possible.
  const [blocked, setBlocked] = useState(
    Boolean(project.image) || project.embed === false
  );
  const [shotFailed, setShotFailed] = useState(false);
  const [scale, setScale] = useState(0.28);

  useEffect(() => {
    const el = boxRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          io.disconnect();
        }
      },
      { rootMargin: "400px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    const el = boxRef.current;
    if (!el) return;
    const ro = new ResizeObserver(([entry]) =>
      setScale(entry.contentRect.width / FRAME_W)
    );
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  // Aucun rendu au bout de 7 s → le site refuse probablement l'embed.
  useEffect(() => {
    if (!inView || loaded || blocked) return;
    const t = setTimeout(() => setBlocked(true), 7000);
    return () => clearTimeout(t);
  }, [inView, loaded, blocked]);

  // Capture locale si elle existe, sinon capture générée à la volée.
  const shotUrl =
    project.image ??
    `https://api.microlink.io/?url=${encodeURIComponent(
      project.url
    )}&screenshot=true&meta=false&embed=screenshot.url&viewport.width=1280&viewport.height=800`;

  const showFallbackCard = blocked && shotFailed;

  return (
    <div
      ref={boxRef}
      className="relative aspect-[16/10] w-full overflow-hidden bg-surface"
    >
      {/* Squelette de chargement */}
      {!loaded && !showFallbackCard && (
        <div className="absolute inset-0 animate-pulse bg-text-muted/5" />
      )}

      {inView && !blocked && (
        <iframe
          src={project.url}
          title={`Aperçu de ${project.name}`}
          loading="lazy"
          referrerPolicy="no-referrer"
          sandbox="allow-scripts allow-same-origin allow-popups"
          onLoad={() => setLoaded(true)}
          onError={() => setBlocked(true)}
          className="pointer-events-none absolute left-0 top-0 origin-top-left border-0"
          style={{
            width: FRAME_W,
            height: FRAME_H,
            transform: `scale(${scale})`,
            opacity: loaded ? 1 : 0,
            transition: "opacity .5s ease",
          }}
        />
      )}

      {inView && blocked && !shotFailed && (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={shotUrl}
          alt={`Page d'accueil de ${project.name}`}
          loading="lazy"
          decoding="async"
          draggable={false}
          onLoad={() => setLoaded(true)}
          onError={() => setShotFailed(true)}
          className="absolute inset-0 h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.04]"
        />
      )}

      {/* Dernier recours : une carte dessinée, jamais un trou vide */}
      {showFallbackCard && (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 bg-gradient-to-br from-signal-teal/10 via-surface to-surface">
          <span className="font-display text-3xl font-semibold text-signal-teal/40">
            {project.name.slice(0, 2).toUpperCase()}
          </span>
          <span className="font-mono text-[10px] uppercase tracking-widest text-text-muted/60">
            Ouvrir le site
          </span>
        </div>
      )}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Carte projet                                                       */
/* ------------------------------------------------------------------ */

function ProjectCard({ project }: { project: Project }) {
  return (
    <a
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      draggable={false}
      className="group flex h-full w-[78vw] max-w-[400px] flex-shrink-0 flex-col overflow-hidden rounded-xl border border-text-muted/10 bg-surface/60 transition-all duration-300 hover:-translate-y-1 hover:border-signal-teal/40 hover:shadow-xl hover:shadow-signal-teal/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-signal-teal sm:w-[340px] lg:w-[400px]"
    >
      {/* Mini-chrome de navigateur : l'aperçu se lit comme une fenêtre */}
      <div className="flex items-center gap-2 border-b border-text-muted/10 bg-text-muted/5 px-3 py-2">
        <span className="flex gap-1">
          <span className="h-2 w-2 rounded-full bg-text-muted/25" />
          <span className="h-2 w-2 rounded-full bg-text-muted/25" />
          <span className="h-2 w-2 rounded-full bg-text-muted/25" />
        </span>
        <span className="truncate font-mono text-[10px] text-text-muted/70">
          {domainOf(project.url)}
        </span>
      </div>

      <SitePreview project={project} />

      <div className="flex flex-1 flex-col p-5">
        <div className="mb-2 flex items-start justify-between gap-3">
          <h3 className="font-display text-base font-semibold text-text transition-colors group-hover:text-signal-teal">
            {project.name}
          </h3>
          <ExternalLink className="mt-0.5 h-4 w-4 flex-shrink-0 text-text-muted transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-signal-teal" />
        </div>

        <p className="mb-4 text-sm leading-relaxed text-text-muted" style={clamp2}>
          {project.description}
        </p>

        {project.tags && project.tags.length > 0 && (
          <div className="mt-auto flex flex-wrap gap-1.5">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-text-muted/15 px-2 py-0.5 font-mono text-[10px] uppercase tracking-wide text-text-muted transition-colors group-hover:border-signal-teal/25 group-hover:text-signal-teal/80"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </a>
  );
}

/* ------------------------------------------------------------------ */
/*  Carrousel infini                                                   */
/* ------------------------------------------------------------------ */

export default function ProjectsCarousel() {
  const projects = profile.projects as Project[];
  const reduceMotion = useReducedMotion();

  const x = useMotionValue(0);
  const copyRef = useRef<HTMLDivElement>(null);
  const halfRef = useRef(0);
  const pausedRef = useRef(false);
  const draggingRef = useRef(false);
  const pendingRef = useRef(0); // déplacement demandé par les flèches
  const resumeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Largeur exacte d'une copie de la liste (mesurée, pas devinée).
  useEffect(() => {
    const el = copyRef.current;
    if (!el) return;
    const ro = new ResizeObserver(() => {
      halfRef.current = el.offsetWidth;
    });
    ro.observe(el);
    halfRef.current = el.offsetWidth;
    return () => ro.disconnect();
  }, []);

  useEffect(() => {
    const onVisibility = () => {
      pausedRef.current = document.hidden;
    };
    document.addEventListener("visibilitychange", onVisibility);
    return () => document.removeEventListener("visibilitychange", onVisibility);
  }, []);

  useAnimationFrame((_, delta) => {
    const half = halfRef.current;
    if (!half) return;

    let next = x.get();

    // Flèches : décélération douce, sans conflit avec le défilement continu.
    if (pendingRef.current !== 0) {
      const step = pendingRef.current * 0.14;
      next += step;
      pendingRef.current -= step;
      if (Math.abs(pendingRef.current) < 0.5) pendingRef.current = 0;
    }

    // Défilement continu droite → gauche.
    if (!pausedRef.current && !draggingRef.current && !reduceMotion) {
      next -= (SPEED * Math.min(delta, 50)) / 1000;
    }

    // On ne reboucle pas pendant un glissement : framer recalculerait son origine.
    if (!draggingRef.current) {
      if (next <= -half) next += half;
      else if (next > 0) next -= half;
    }

    x.set(next);
  });

  const pause = () => {
    if (resumeTimer.current) clearTimeout(resumeTimer.current);
    pausedRef.current = true;
  };
  const resume = (delay = 0) => {
    if (resumeTimer.current) clearTimeout(resumeTimer.current);
    resumeTimer.current = setTimeout(() => {
      pausedRef.current = false;
    }, delay);
  };

  const nudge = useCallback((direction: 1 | -1) => {
    const card = copyRef.current?.querySelector<HTMLElement>("[data-card]");
    const amount = (card?.offsetWidth ?? 360) + 24;
    pendingRef.current += -direction * amount;
  }, []);

  // Un glissement ne doit pas déclencher l'ouverture du lien.
  const onClickCapture = (e: React.MouseEvent) => {
    if (draggingRef.current) {
      e.preventDefault();
      e.stopPropagation();
    }
  };

  const cards = projects.map((project) => (
    <div key={project.url} data-card className="flex">
      <ProjectCard project={project} />
    </div>
  ));

  return (
    <section id="projects" className="border-t border-text-muted/10 py-24">
      <div className="mb-10 flex items-end justify-between gap-6 px-6 md:px-12 lg:px-24">
        <div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 font-display text-2xl font-semibold text-text md:text-3xl"
          >
            <FolderOpen className="h-6 w-6 text-signal-teal" />
            Projets
          </motion.h2>
          <p className="mt-2 font-mono text-xs text-text-muted/70">
            {projects.length} réalisations — aperçus en direct, cliquez pour ouvrir
          </p>
        </div>

        <div className="hidden gap-2 sm:flex">
          <button
            type="button"
            onClick={() => nudge(-1)}
            aria-label="Projet précédent"
            className="rounded-full border border-text-muted/15 p-2 text-text-muted transition-colors hover:border-signal-teal/40 hover:text-signal-teal focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-signal-teal"
          >
            <ArrowLeft className="h-4 w-4" />
          </button>
          <button
            type="button"
            onClick={() => nudge(1)}
            aria-label="Projet suivant"
            className="rounded-full border border-text-muted/15 p-2 text-text-muted transition-colors hover:border-signal-teal/40 hover:text-signal-teal focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-signal-teal"
          >
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </div>

      {/* Le masque CSS remplace les dégradés colorés : il marche dans les deux thèmes. */}
      <div
        className="mx-auto w-full max-w-6xl overflow-hidden py-2"
        onMouseEnter={pause}
        onMouseLeave={() => resume()}
        onFocusCapture={pause}
        onBlurCapture={() => resume()}
        onClickCapture={onClickCapture}
       
      >
        <motion.div
          className="flex w-max cursor-grab items-stretch active:cursor-grabbing"
          style={{ x }}
          drag="x"
          dragElastic={0}
          dragMomentum={false}
          onDragStart={() => {
            draggingRef.current = true;
            pause();
          }}
          onDragEnd={() => {
            const half = halfRef.current;
            if (half) {
              let v = x.get();
              while (v <= -half) v += half;
              while (v > 0) v -= half;
              x.set(v);
            }
            draggingRef.current = false;
            resume(1500);
          }}
        >
          <div ref={copyRef} className="flex items-stretch gap-6 pr-6">
            {cards}
          </div>
          <div className="flex items-stretch gap-6 pr-6" aria-hidden="true">
            {cards}
          </div>
        </motion.div>
      </div>

      <p className="mt-6 px-6 text-center font-mono text-xs text-text-muted/50 md:px-12 lg:px-24">
        Glissez pour parcourir — le défilement se met en pause au survol
      </p>
    </section>
  );
}