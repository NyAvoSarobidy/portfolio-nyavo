"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

interface CounterProps {
  end: number;
  duration?: number;
  suffix?: string;
  label: string;
}

function AnimatedCounter({ end, duration = 2000, suffix = "", label }: CounterProps) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number;
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [isVisible, end, duration]);

  return (
    <div ref={ref} className="text-center">
      <p className="font-display text-3xl md:text-4xl font-bold text-signal-teal">
        {count}{suffix}
      </p>
      <p className="font-mono text-xs text-text-muted mt-1">{label}</p>
    </div>
  );
}

export default function StatsCounter() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="grid grid-cols-2 md:grid-cols-4 gap-6 p-6 rounded-xl bg-surface/50 border border-text-muted/10"
    >
      <AnimatedCounter end={6} suffix="+" label="Experiences" />
      <AnimatedCounter end={5} suffix="" label="Projets" />
      <AnimatedCounter end={15} suffix="+" label="Technologies" />
      <AnimatedCounter end={3} suffix="" label="Certifications" />
    </motion.div>
  );
}
