"use client";

import React from "react";
import Spotlight from "@/components/ui/Spotlight";
import { GitBranch, Star, BookOpen, GitCommit, GitPullRequest, Terminal } from "lucide-react";

interface PinnedRepo {
  name: string;
  desc: string;
  lang: string;
  langColor: string;
  stars: number;
  forks: number;
  url: string;
}

const pinnedRepos: PinnedRepo[] = [
  {
    name: "LuminaDia",
    desc: "Explainable AI Diagnostic Retina Scanner. Pairs DenseNet backbones with custom Grad-CAM overlays to reveal auditable lesions.",
    lang: "Python",
    langColor: "bg-[#3572A5]",
    stars: 12,
    forks: 4,
    url: "https://github.com/savin-ss/LuminaDia"
  },
  {
    name: "AI-Based-ADHD-Detection-and-Classification-System",
    desc: "Diagnostic computer vision platform tracking behavioral patterns and pupil centers using OpenCV gaze-tracking algorithms.",
    lang: "Python",
    langColor: "bg-[#3572A5]",
    stars: 8,
    forks: 2,
    url: "https://github.com/savin-ss/AI-Based-ADHD-Detection-and-Classification-System"
  },
  {
    name: "Smart-Indoort-Plant-Care-System",
    desc: "Agricultural IoT environment pairing deep network leaf segmenters with Twilio SMS notification warnings.",
    lang: "Python",
    langColor: "bg-[#3572A5]",
    stars: 6,
    forks: 1,
    url: "https://github.com/savin-ss/Smart-Indoort-Plant-Care-System"
  },
  {
    name: "nlp-essay-scoring",
    desc: "Automated text scoring and semantic token analysis pipeline using scikit-learn models.",
    lang: "TypeScript",
    langColor: "bg-[#3178C6]",
    stars: 4,
    forks: 0,
    url: "https://github.com/savin-ss/nlp-essay-scoring"
  }
];

export default function Github() {
  return (
    <section id="github" className="py-24 bg-bg-primary relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="mb-16">
          <span className="text-accent-cyan font-mono text-xs font-bold tracking-widest uppercase mb-2 block">
            06 / Open Source &amp; Projects
          </span>
          <h2 className="text-3xl md:text-4xl font-bold font-space text-white">GitHub Contributions</h2>
          <div className="w-12 h-1 bg-accent-cyan mt-3 rounded-full" />
        </div>

        {/* GitHub Stats Row */}
        <div className="mb-12">
          <Spotlight className="p-6 md:p-8 bg-glass-bg border border-glass-border">
            <h3 className="text-sm font-bold font-mono text-white flex items-center gap-2 mb-6 border-b border-glass-border/40 pb-3">
              <Terminal className="w-4 h-4 text-accent-cyan" /> developer-metrics
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="space-y-4">
                <div className="flex justify-between items-center text-xs">
                  <span className="text-zinc-500 font-mono flex items-center gap-1.5"><GitCommit className="w-3.5 h-3.5" /> Commits (YTD):</span>
                  <span className="text-white font-bold font-mono">1,120+</span>
                </div>
                <div className="flex justify-between items-center text-xs">
                  <span className="text-zinc-500 font-mono flex items-center gap-1.5"><GitPullRequest className="w-3.5 h-3.5" /> Pull Requests:</span>
                  <span className="text-white font-bold font-mono">84</span>
                </div>
                <div className="flex justify-between items-center text-xs">
                  <span className="text-zinc-500 font-mono flex items-center gap-1.5"><Star className="w-3.5 h-3.5" /> Total Stars:</span>
                  <span className="text-white font-bold font-mono">42</span>
                </div>
                <div className="flex justify-between items-center text-xs">
                  <span className="text-zinc-500 font-mono flex items-center gap-1.5"><GitBranch className="w-3.5 h-3.5" /> Repositories:</span>
                  <span className="text-white font-bold font-mono">18</span>
                </div>
              </div>

              {/* Language breakdown */}
              <div className="space-y-3">
                <h4 className="text-[10px] font-mono font-bold text-zinc-500 uppercase tracking-widest">
                  Primary Languages
                </h4>
                
                <div className="space-y-2">
                  {[
                    { name: "Python", pct: 76, color: "bg-[#3572A5]" },
                    { name: "TypeScript / JS", pct: 15, color: "bg-[#3178C6]" },
                    { name: "SQL / Others", pct: 9, color: "bg-[#e34c26]" }
                  ].map((lang) => (
                    <div key={lang.name} className="space-y-1">
                      <div className="flex justify-between items-center text-[10px] font-mono text-zinc-400">
                        <span>{lang.name}</span>
                        <span>{lang.pct}%</span>
                      </div>
                      <div className="h-1 w-full bg-zinc-950 rounded-full overflow-hidden">
                        <div className={`h-full ${lang.color}`} style={{ width: `${lang.pct}%` }} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Spotlight>
        </div>

        {/* Pinned Repos Grid */}
        <span className="text-zinc-500 font-mono text-xs font-bold tracking-widest uppercase mb-6 block">
          ★ Pinned Repositories
        </span>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {pinnedRepos.map((repo) => (
            <a
              key={repo.name}
              href={repo.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group block"
            >
              <Spotlight className="p-6 bg-glass-bg border border-glass-border hover:border-accent-cyan/20 h-full flex flex-col justify-between group-hover:shadow-lg transition-all">
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <BookOpen className="w-4 h-4 text-zinc-500 group-hover:text-accent-cyan transition-colors" />
                    <span className="text-sm font-bold font-space text-white group-hover:text-accent-cyan transition-colors">
                      {repo.name}
                    </span>
                  </div>

                  <p className="text-text-muted text-xs leading-relaxed line-clamp-2">
                    {repo.desc}
                  </p>
                </div>

                <div className="border-t border-glass-border/40 pt-4 mt-6 flex justify-between items-center text-[10px] font-mono text-zinc-500">
                  <div className="flex items-center gap-3">
                    <span className="flex items-center gap-1">
                      <span className={`w-2.5 h-2.5 rounded-full ${repo.langColor}`} />
                      {repo.lang}
                    </span>
                    <span className="flex items-center gap-1"><Star className="w-3.5 h-3.5" /> {repo.stars}</span>
                    <span className="flex items-center gap-1"><GitBranch className="w-3.5 h-3.5" /> {repo.forks}</span>
                  </div>
                  <span className="text-accent-cyan font-bold uppercase tracking-wider group-hover:underline">
                    View on GitHub
                  </span>
                </div>
              </Spotlight>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
