import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Play, Code2, Cpu } from "lucide-react";
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

// This is required for Next.js App Router dynamic routes if using SSG, but here it's just standard server/client fetching.
// Since data is local, we can just find it.
export default async function ProjectDetail({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const proj = projects.find((p) => p.id === resolvedParams.id);

  if (!proj) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-bg-primary pt-24 pb-24">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Navigation & Header */}
        <div className="mb-16 text-center">
          <Link href="/projects" className="inline-flex items-center gap-2 text-zinc-500 hover:text-accent-cyan font-mono text-xs uppercase tracking-widest transition-colors mb-10">
            <ArrowLeft className="w-4 h-4" /> Back to Projects
          </Link>
          
          <h1 className="text-4xl md:text-6xl font-bold font-space text-white mb-6 tracking-tight">
            {proj.title}
          </h1>
          <p className="text-accent-cyan font-mono text-sm tracking-widest uppercase">
            {proj.tagline}
          </p>
        </div>

        {/* 2-Column Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Left Column: Image/Visuals */}
          <div className="lg:col-span-7">
            <div className="sticky top-24">
              <div className="relative w-full aspect-video bg-zinc-950 border border-glass-border/60 rounded-2xl overflow-hidden shadow-[0_0_40px_rgba(34,211,238,0.05)]">
                {proj.image ? (
                  <img
                    src={proj.image}
                    alt={proj.title}
                    className="w-full h-full object-contain bg-black/40"
                    referrerPolicy="no-referrer"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-zinc-900/40">
                    <Cpu className="w-16 h-16 text-zinc-800" />
                  </div>
                )}
              </div>

              {/* Action Buttons for Left Col */}
              <div className="flex items-center gap-4 mt-8">
                <a
                  href={proj.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-4 rounded-xl bg-gradient-to-r from-blue-600/20 to-indigo-600/20 border border-blue-500/30 font-bold text-xs uppercase tracking-wider flex justify-center items-center gap-3 text-white hover:border-blue-400/50 hover:shadow-[0_0_20px_rgba(59,130,246,0.15)] transition-all"
                >
                  <Github className="w-4 h-4" /> View Repository
                </a>
                {proj.demo && (
                  <a
                    href={proj.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-4 rounded-xl bg-white text-bg-primary font-bold text-xs uppercase tracking-wider flex justify-center items-center gap-3 hover:bg-zinc-200 transition-all"
                  >
                    <Play className="w-4 h-4 fill-bg-primary" /> Live Demo
                  </a>
                )}
              </div>
            </div>
          </div>

          {/* Right Column: Details */}
          <div className="lg:col-span-5 space-y-12">
            
            {/* Description */}
            <section>
              <h2 className="text-xl font-bold font-space text-white mb-4 border-b border-glass-border/40 pb-2">Overview</h2>
              <p className="text-text-muted text-base leading-relaxed">
                {proj.description}
              </p>
            </section>

            {/* Problem Statement */}
            <section>
              <h2 className="text-xl font-bold font-space text-white mb-4 border-b border-glass-border/40 pb-2">The Problem</h2>
              <p className="text-text-muted text-base leading-relaxed">
                {proj.problem}
              </p>
            </section>

            {/* Technical Implementation */}
            <section>
              <h2 className="text-xl font-bold font-space text-white mb-4 border-b border-glass-border/40 pb-2">Engineering Workflow</h2>
              <ul className="space-y-4 text-base text-text-muted list-none">
                {proj.architecture.map((step, idx) => (
                  <li key={idx} className="flex gap-4">
                    <span className="text-accent-cyan font-mono opacity-60">{(idx + 1).toString().padStart(2, '0')}</span>
                    <span className="leading-relaxed">{step}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Outcomes */}
            <section>
              <h2 className="text-xl font-bold font-space text-white mb-4 border-b border-glass-border/40 pb-2">Impact & Outcomes</h2>
              <p className="text-text-muted text-base leading-relaxed">
                {proj.impact}
              </p>
            </section>

            {/* Metrics (Optional) */}
            {proj.metrics && proj.metrics.length > 0 && (
              <section>
                <h2 className="text-xl font-bold font-space text-white mb-6 border-b border-glass-border/40 pb-2">Key Metrics</h2>
                <div className="grid grid-cols-2 gap-4">
                  {proj.metrics.map((m, idx) => (
                    <div key={idx} className="bg-zinc-900/50 border border-glass-border/60 p-4 rounded-xl">
                      <p className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest mb-1">{m.label}</p>
                      <p className="text-lg font-bold font-space text-accent-cyan">{m.value}</p>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Skills & Tech Stack */}
            <section>
              <h2 className="text-xl font-bold font-space text-white mb-6 border-b border-glass-border/40 pb-2">Tech Stack</h2>
              <div className="flex flex-wrap gap-3">
                {proj.tech.map((t, idx) => (
                  <div key={idx} className="flex items-center gap-2 px-4 py-2 rounded-lg bg-zinc-900/80 border border-glass-border/60 text-sm text-zinc-300 shadow-sm">
                    {/* Subtle glow dot */}
                    <div className="w-1.5 h-1.5 rounded-full bg-accent-cyan shadow-[0_0_8px_rgba(6,182,212,0.8)]" />
                    <Code2 className="w-3.5 h-3.5 opacity-50" />
                    <span className="font-mono">{t}</span>
                  </div>
                ))}
              </div>
            </section>

          </div>
        </div>
      </div>
    </div>
  );
}
