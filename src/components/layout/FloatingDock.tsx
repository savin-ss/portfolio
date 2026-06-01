"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Home, User, Briefcase, Cpu, Award, MessageSquare } from "lucide-react";

interface DockItem {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  href: string;
}

const items: DockItem[] = [
  { icon: Home, label: "Home", href: "#home" },
  { icon: User, label: "About", href: "#about" },
  { icon: Briefcase, label: "Projects", href: "#projects" },
  { icon: Cpu, label: "Skills", href: "#skills" },
  { icon: Award, label: "Certificates", href: "#certifications" },
  { icon: MessageSquare, label: "Contact", href: "#contact" },
];

export default function FloatingDock() {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40 hidden md:block">
      <div className="flex items-center gap-4 bg-zinc-950/70 border border-glass-border px-4 py-3 rounded-2xl shadow-xl shadow-black/40 backdrop-blur-lg">
        {items.map((item, idx) => {
          const Icon = item.icon;
          const isHovered = hoveredIdx === idx;

          return (
            <a
              key={item.label}
              href={item.href}
              onMouseEnter={() => setHoveredIdx(idx)}
              onMouseLeave={() => setHoveredIdx(null)}
              className="relative p-2 rounded-xl text-text-muted hover:text-accent-cyan transition-colors"
            >
              {/* Icon */}
              <motion.div
                animate={{
                  scale: isHovered ? 1.25 : 1,
                  y: isHovered ? -5 : 0,
                }}
                transition={{ type: "spring", stiffness: 300, damping: 15 }}
              >
                <Icon className="w-5 h-5" />
              </motion.div>

              {/* Tooltip */}
              {isHovered && (
                <motion.span
                  initial={{ opacity: 0, y: 10, x: "-50%" }}
                  animate={{ opacity: 1, y: -35, x: "-50%" }}
                  className="absolute left-1/2 bg-zinc-900 border border-glass-border text-white text-[10px] font-mono font-bold tracking-wider px-2 py-0.5 rounded uppercase pointer-events-none whitespace-nowrap"
                >
                  {item.label}
                </motion.span>
              )}
            </a>
          );
        })}
      </div>
    </div>
  );
}
