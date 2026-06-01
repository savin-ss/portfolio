"use client";

import React from "react";
import Link from "next/link";
import { ArrowLeft, Cpu, ArrowRight } from "lucide-react";
import Spotlight from "@/components/ui/Spotlight";
import { projects } from "@/data/projects";

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

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-bg-primary pt-24 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="mb-12">
          <Link href="/#projects" className="inline-flex items-center gap-2 text-zinc-500 hover:text-accent-cyan font-mono text-xs uppercase tracking-widest transition-colors mb-8">
            <ArrowLeft className="w-4 h-4" /> Back to Portfolio
          </Link>
          
          <h1 className="text-4xl md:text-5xl font-bold font-space text-white mb-4">All Projects</h1>
          <p className="text-text-muted text-sm leading-relaxed max-w-2xl">
            A comprehensive archive of engineering projects, tools, scripts, and analytical dashboards.
          </p>
          <div className="w-12 h-1 bg-accent-cyan mt-6 rounded-full" />
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((proj) => (
            <Link key={proj.id} href={`/projects/${proj.id}`} className="block h-full">
              <Spotlight className="p-0 bg-glass-bg border border-glass-border hover:border-accent-cyan/30 hover:shadow-[0_0_30px_rgba(34,211,238,0.1)] flex flex-col group h-full transition-all cursor-pointer rounded-2xl overflow-hidden">
                
                {/* Thumbnail Image */}
                <div className="relative h-48 w-full bg-zinc-950 border-b border-glass-border/40 overflow-hidden flex items-center justify-center">
                  {proj.image ? (
                    <img 
                      src={proj.image} 
                      alt={proj.title} 
                      className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                      referrerPolicy="no-referrer"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-zinc-900/50 group-hover:bg-zinc-900/80 transition-colors">
                      <Cpu className="w-12 h-12 text-zinc-700 group-hover:text-zinc-500 transition-colors" />
                    </div>
                  )}
                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 to-transparent opacity-80" />
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-lg font-bold font-space text-white group-hover:text-accent-cyan transition-colors mb-1">
                    {proj.title}
                  </h3>
                  <p className="text-[10px] font-mono text-accent-cyan/80 font-semibold mb-3">
                    {proj.tagline}
                  </p>
                  <p className="text-xs text-text-muted leading-relaxed mb-6 line-clamp-3">
                    {proj.description}
                  </p>
                  
                  {/* Footer links */}
                  <div className="mt-auto flex items-center justify-between text-xs font-mono">
                    <span className="text-zinc-500 group-hover:text-white transition-colors flex items-center gap-2">
                      View Details <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                    </span>
                    <span className="text-zinc-500 flex items-center gap-1.5">
                      <Github className="w-3.5 h-3.5" /> Code
                    </span>
                  </div>
                </div>

              </Spotlight>
            </Link>
          ))}

          {/* Coming Soon Placeholder */}
          <div className="block h-full">
            <Spotlight className="p-6 bg-glass-bg border border-glass-border border-dashed flex flex-col items-center justify-center text-center h-full min-h-[320px] rounded-2xl">
              <div className="w-12 h-12 rounded-full bg-zinc-900/50 border border-glass-border/40 flex items-center justify-center text-zinc-500 mb-4 animate-pulse">
                <Cpu className="w-5 h-5 opacity-50" />
              </div>
              <h3 className="text-lg font-bold font-space text-zinc-400 mb-2">More Projects In Development</h3>
              <p className="text-[10px] font-mono text-zinc-600 uppercase tracking-widest leading-relaxed">
                Currently engineering new AI systems &amp; pipelines.<br/> Stay Tuned.
              </p>
            </Spotlight>
          </div>
        </div>

      </div>
    </div>
  );
}
