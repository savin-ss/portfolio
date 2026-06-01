"use client";

import React, { useState } from "react";
import Spotlight from "@/components/ui/Spotlight";
import { Brain, BarChart3, Cloud, Check } from "lucide-react";

interface SkillItem {
  name: string;
  level: number; // Percentage
  desc: string;
}

interface SkillCategory {
  title: string;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
  skills: SkillItem[];
}

const skillCategories: SkillCategory[] = [
  {
    title: "AI / Machine Learning",
    icon: Brain,
    color: "text-accent-cyan",
    skills: [
      { name: "Python Development", level: 95, desc: "Primary language; built over 15 ML models, scrapers, and pipelines." },
      { name: "PyTorch & TensorFlow", level: 88, desc: "Designed CNN classifiers and LSTM time-series architectures." },
      { name: "Computer Vision (OpenCV)", level: 90, desc: "Implemented gaze-trackers, leaf segmenters, and object bounds." },
      { name: "Scikit-Learn", level: 92, desc: "Experienced in regression, clustering, random forest models, and SVMs." },
      { name: "Explainable AI (Grad-CAM)", level: 85, desc: "Exposed visual activation zones to audit diagnostic predictions." },
      { name: "Natural Language Processing", level: 80, desc: "Coded text metrics, sentiment analyses, and word embeddings." },
    ],
  },
  {
    title: "Data Analytics & Telemetry",
    icon: BarChart3,
    color: "text-accent-purple",
    skills: [
      { name: "SQL (Server & MySQL)", level: 90, desc: "Wrote database schemas, indexes, and complex analytics queries." },
      { name: "Power BI & Tableau", level: 92, desc: "Designed interactive corporate KPI reports and visual data tables." },
      { name: "Pandas & NumPy", level: 95, desc: "Engineered feature selections, cleanings, and mathematical profiles." },
      { name: "Statistical Analysis", level: 85, desc: "Applied ANOVA tests, correlation analysis, and regression metrics." },
      { name: "Excel Advanced Formulas", level: 90, desc: "Conducted pivots, data tables, and lookup telemetry." },
    ],
  },
  {
    title: "Cloud & Infrastructure",
    icon: Cloud,
    color: "text-accent-cyan",
    skills: [
      { name: "AWS Cloud Services", level: 82, desc: "AWS Architect candidate. Configured EC2, S3, IAM, and VPCs." },
      { name: "Docker Containers", level: 80, desc: "Containerized Flask and React architectures for secure environments." },
      { name: "Git & Version Control", level: 90, desc: "Managed branches, tags, and PR commits on GitHub repositories." },
      { name: "REST API Integration", level: 88, desc: "Connected systems with Twilio SMS endpoints and REST models." },
    ],
  },
];

export default function Skills() {
  const [selectedSkill, setSelectedSkill] = useState<SkillItem | null>(null);

  return (
    <section id="skills" className="py-24 bg-bg-secondary relative border-y border-glass-border/40">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="mb-16">
          <span className="text-accent-cyan font-mono text-xs font-bold tracking-widest uppercase mb-2 block">
            03 / Core Competencies
          </span>
          <h2 className="text-3xl md:text-4xl font-bold font-space text-white">Technical Skills</h2>
          <div className="w-12 h-1 bg-accent-cyan mt-3 rounded-full" />
        </div>

        {/* Dashboard Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left: Skills Category list */}
          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            {skillCategories.map((cat) => {
              const CatIcon = cat.icon;
              return (
                <Spotlight key={cat.title} className="p-6 bg-glass-bg border border-glass-border h-full">
                  <h3 className="text-lg font-bold font-space text-white flex items-center gap-2 mb-6 border-b border-glass-border/40 pb-3">
                    <CatIcon className={`w-5 h-5 ${cat.color}`} /> {cat.title}
                  </h3>
                  
                  <div className="space-y-4">
                    {cat.skills.map((skill) => (
                      <div
                        key={skill.name}
                        onClick={() => setSelectedSkill(skill)}
                        className="group cursor-pointer select-none space-y-1.5"
                      >
                        <div className="flex justify-between items-center text-xs">
                          <span className="text-zinc-300 font-medium group-hover:text-accent-cyan transition-colors">
                            {skill.name}
                          </span>
                          <span className="text-zinc-500 font-mono">{skill.level}%</span>
                        </div>
                        
                        {/* Progress Bar Container */}
                        <div className="h-1.5 w-full bg-zinc-950 rounded-full overflow-hidden border border-glass-border/20">
                          <div
                            className={`h-full rounded-full transition-all duration-500 bg-gradient-to-r from-accent-cyan to-accent-purple`}
                            style={{ width: `${skill.level}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </Spotlight>
              );
            })}
          </div>

          {/* Right: Interactive Inspector Info Panel */}
          <div className="lg:col-span-4 lg:sticky lg:top-24">
            <Spotlight className="p-6 bg-glass-bg border border-accent-cyan/15 min-h-[300px] flex flex-col justify-between">
              {selectedSkill ? (
                <div className="space-y-4">
                  <span className="px-2 py-0.5 rounded bg-accent-cyan/10 border border-accent-cyan/30 text-accent-cyan text-[10px] font-mono font-bold uppercase tracking-wider">
                    Skill Inspector Active
                  </span>
                  <h4 className="text-xl font-bold font-space text-white pt-2">{selectedSkill.name}</h4>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between items-center text-xs font-mono">
                      <span className="text-zinc-500">Calculated Proficiency:</span>
                      <span className="text-white font-bold">{selectedSkill.level}%</span>
                    </div>
                    <div className="h-1.5 w-full bg-zinc-950 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-accent-cyan"
                        style={{ width: `${selectedSkill.level}%` }}
                      />
                    </div>
                  </div>

                  <p className="text-text-muted text-xs md:text-sm leading-relaxed pt-2">
                    {selectedSkill.desc}
                  </p>
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center text-center py-12 text-zinc-500 space-y-4">
                  <Brain className="w-12 h-12 text-zinc-600 animate-pulse" />
                  <div>
                    <h4 className="text-sm font-bold font-space text-zinc-400">Select a skill to inspect</h4>
                    <p className="text-[10px] font-mono mt-1 max-w-[200px]">
                      Click on any skill parameter slider on the left to load operational details.
                    </p>
                  </div>
                </div>
              )}

              <div className="text-[10px] text-zinc-600 font-mono border-t border-glass-border/40 pt-4 mt-6">
                Status: System Online
              </div>
            </Spotlight>
          </div>
        </div>
      </div>
    </section>
  );
}
