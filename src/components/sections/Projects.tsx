"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Play, Eye, ChartBar, BrainCircuit, Leaf, ArrowRight, Cpu } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Spotlight from "@/components/ui/Spotlight";

const Github = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={props.className}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);
import { projects, Project } from "@/data/projects";

const IconMap: Record<string, React.ElementType> = {
  Eye,
  ChartBar,
  BrainCircuit,
  Leaf
};

export default function Projects() {
  const [selectedProj, setSelectedProj] = useState<Project | null>(null);
  const featuredProjects = projects.filter(p => p.isFeatured);

  return (
    <section id="projects" className="py-24 bg-bg-primary relative min-h-screen border-t border-glass-border/40">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="mb-16">
          <span className="text-accent-cyan font-mono text-xs font-bold tracking-widest uppercase mb-2 block">
            03 / Showcase
          </span>
          <h2 className="text-3xl md:text-4xl font-bold font-space text-white mb-4">Featured Projects</h2>
          <p className="text-text-muted text-sm leading-relaxed max-w-2xl">
            Selected engineering case studies highlighting expertise in deep learning, 
            telemetry architectures, and production-ready intelligent systems.
          </p>
          <div className="w-12 h-1 bg-accent-cyan mt-6 rounded-full" />
        </div>

        {/* Minimal Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {featuredProjects.map((proj) => {
            const Icon = IconMap[proj.iconName] || Cpu;
            return (
              <Spotlight key={proj.id} className="p-8 bg-glass-bg border border-glass-border hover:border-accent-cyan/20 flex flex-col group h-full transition-all">
                
                {/* Tech & Icon Header */}
                <div className="flex justify-between items-start mb-6">
                  <div className="w-12 h-12 rounded-xl bg-zinc-950/80 border border-glass-border flex items-center justify-center text-accent-cyan">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div className="flex gap-2 flex-wrap justify-end max-w-[60%]">
                    {proj.tech.slice(0, 3).map((t) => (
                      <span key={t} className="px-2 py-1 rounded-md bg-zinc-900 border border-glass-border/40 font-mono text-[10px] text-zinc-400">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Content */}
                <div className="flex-grow">
                  <h3 className="text-2xl font-bold font-space text-white group-hover:text-accent-cyan transition-colors mb-2">{proj.title}</h3>
                  <p className="text-xs font-mono text-accent-cyan/80 font-semibold mb-4">{proj.tagline}</p>
                  <p className="text-sm text-text-muted leading-relaxed mb-8">{proj.description}</p>
                </div>

                {/* Action Links */}
                <div className="flex items-center gap-4 pt-6 border-t border-glass-border/40">
                  <a
                    href={proj.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-3 rounded-lg bg-zinc-900 border border-glass-border font-bold text-xs uppercase tracking-wider flex justify-center items-center gap-2 text-white hover:border-accent-cyan/40 transition-colors"
                  >
                    <Github className="w-4 h-4" /> Codebase
                  </a>
                  <button
                    onClick={() => setSelectedProj(proj)}
                    className="flex-1 py-3 rounded-lg bg-transparent border border-glass-border/60 font-bold text-xs uppercase tracking-wider flex justify-center items-center gap-2 text-zinc-400 hover:text-white hover:border-glass-border transition-colors cursor-pointer"
                  >
                    <Eye className="w-4 h-4" /> Details
                  </button>
                </div>
              </Spotlight>
            );
          })}
        </div>

        {/* View All Button */}
        <div className="flex justify-center mt-12">
          <Link
            href="/projects"
            className="group px-8 py-4 rounded-full bg-zinc-900 border border-glass-border hover:border-accent-cyan/40 transition-all font-mono text-xs uppercase tracking-widest text-zinc-400 hover:text-white flex items-center gap-3"
          >
            [ View All Projects ]
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>

      {/* Case Study Detail Modal (Restored) */}
      <AnimatePresence>
        {selectedProj && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProj(null)}
              className="absolute inset-0 bg-black/90 backdrop-blur-md cursor-pointer"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-5xl max-h-[90vh] overflow-y-auto bg-zinc-950 border border-glass-border rounded-2xl p-6 md:p-8 z-10 no-scrollbar shadow-2xl text-left"
            >
              <button
                onClick={() => setSelectedProj(null)}
                className="absolute top-4 right-4 text-zinc-500 hover:text-white transition-colors cursor-pointer font-mono text-sm uppercase"
              >
                ✕ Close
              </button>

              <div className="space-y-2 mb-8">
                <h3 className="text-2xl md:text-4xl font-bold font-space text-white">{selectedProj.title}</h3>
                <p className="text-sm font-mono text-accent-cyan/80">{selectedProj.tagline}</p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-8">
                {/* Left Col - Details */}
                <div className="lg:col-span-7 space-y-8">
                  <div>
                    <h4 className="text-xs font-mono font-bold text-accent-cyan uppercase tracking-wider mb-3">
                      PROBLEM STATEMENT
                    </h4>
                    <p className="text-text-muted text-sm leading-relaxed">{selectedProj.problem}</p>
                  </div>
                  <div>
                    <h4 className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-wider mb-3">
                      SOLUTION ARCHITECTURE
                    </h4>
                    <ul className="space-y-3 text-sm text-text-muted font-mono list-none">
                      {selectedProj.architecture.map((step, idx) => (
                        <li key={idx} className="flex gap-3 leading-relaxed">
                          <span className="text-emerald-400 opacity-50">{(idx + 1).toString().padStart(2, '0')}</span>
                          {step}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-xs font-mono font-bold text-indigo-400 uppercase tracking-wider mb-3">
                      IMPACT & OUTCOMES
                    </h4>
                    <p className="text-text-muted text-sm leading-relaxed">{selectedProj.impact}</p>
                  </div>
                </div>

                {/* Right Col - Visuals & Metrics */}
                <div className="lg:col-span-5 space-y-6">
                  {/* Image/Visual Container */}
                  <div className="relative h-56 w-full bg-zinc-900 border border-glass-border/60 rounded-xl overflow-hidden shadow-inner flex items-center justify-center">
                    {selectedProj.image ? (
                      <img
                        src={selectedProj.image}
                        alt={selectedProj.title}
                        className="object-contain w-full h-full bg-black/40"
                        referrerPolicy="no-referrer"
                      />
                    ) : (
                      <div className="flex flex-col items-center gap-3 text-zinc-600">
                        <Cpu className="w-12 h-12" />
                        <span className="text-[10px] font-mono uppercase tracking-widest">Image Pending</span>
                      </div>
                    )}
                  </div>

                  <div className="bg-zinc-900/60 border border-glass-border p-5 rounded-xl space-y-4">
                    <h4 className="text-[10px] font-mono font-bold text-zinc-500 uppercase tracking-widest border-b border-glass-border/40 pb-2">
                      Key Telemetry Metrics
                    </h4>
                    <div className="space-y-3">
                      {selectedProj.metrics.map((m) => (
                        <div key={m.label} className="flex justify-between items-center text-sm">
                          <span className="text-zinc-400 font-mono">{m.label}</span>
                          <span className="text-white font-bold font-space">{m.value}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <a
                      href={selectedProj.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 py-3 rounded-xl bg-zinc-900 border border-glass-border font-bold text-[10px] md:text-xs uppercase tracking-wider inline-flex justify-center items-center gap-2 text-white hover:border-accent-cyan/40 transition-colors"
                    >
                      <Github className="w-4 h-4" /> Source
                    </a>
                    {selectedProj.demo && (
                      <a
                        href={selectedProj.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 py-3 rounded-xl bg-accent-cyan text-bg-primary font-bold text-[10px] md:text-xs uppercase tracking-wider inline-flex justify-center items-center gap-2 hover:bg-white transition-colors"
                      >
                        <Play className="w-4 h-4 fill-bg-primary" /> Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
