"use client";

import React from "react";
import { motion } from "framer-motion";
import Spotlight from "@/components/ui/Spotlight";
import { Award, Cpu, BookOpen, Star, Brain, CheckCircle } from "lucide-react";

interface StatItem {
  icon: React.ComponentType<{ className?: string }>;
  value: string;
  label: string;
  color: string;
}

const stats: StatItem[] = [
  { icon: Award, value: "40+", label: "Certifications", color: "text-accent-cyan" },
  { icon: Cpu, value: "15+", label: "Projects Built", color: "text-accent-purple" },
  { icon: BookOpen, value: "8.55", label: "VTU CGPA", color: "text-accent-cyan" },
  { icon: Star, value: "IEEE", label: "Published Paper", color: "text-accent-purple" },
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-bg-secondary relative border-y border-glass-border/40">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="mb-16">
          <span className="text-accent-cyan font-mono text-xs font-bold tracking-widest uppercase mb-2 block">
            01 / Professional Summary
          </span>
          <h2 className="text-3xl md:text-4xl font-bold font-space text-white">About Me</h2>
          <div className="w-12 h-1 bg-accent-cyan mt-3 rounded-full" />
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Main Biography Text */}
          <div className="lg:col-span-7 space-y-6">
            <p className="text-lg md:text-xl text-white font-medium leading-relaxed">
              I am an AI/ML Engineer and Data Analyst with a B.E. in Artificial Intelligence &amp; Machine Learning, specializing in high-precision Computer Vision systems, Deep Learning architectures, and explainable AI models.
            </p>
            <p className="text-text-muted leading-relaxed">
              During my Python with Data Science internship at PySpiders, I developed production-grade machine learning pipelines and designed interactive business intelligence dashboards. My research on deep learning-based agricultural disease diagnostics was published and presented at the IEEE DISCOVER 2025 international conference.
            </p>
            <p className="text-text-muted leading-relaxed font-semibold text-zinc-300">
              My core technical passion lies in bridging the gap between research-grade models and actual clinical/industrial applications, specifically utilizing Explainable AI techniques (like Grad-CAM and SHAP) to make deep neural networks trustworthy and verifiable.
            </p>

            {/* Stats Showcase Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6">
              {stats.map((stat, idx) => {
                const Icon = stat.icon;
                return (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                  >
                    <Spotlight className="p-4 text-center hover:border-accent-cyan/30 transition-all flex flex-col items-center">
                      <Icon className={`w-6 h-6 mb-2 ${stat.color}`} />
                      <div className="text-2xl font-extrabold font-space text-white">{stat.value}</div>
                      <div className="text-[10px] text-text-muted font-mono uppercase tracking-wider mt-1">
                        {stat.label}
                      </div>
                    </Spotlight>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Highlights Grids */}
          <div className="lg:col-span-5 grid grid-cols-1 gap-6">
            {/* Card 1: Areas of Interest */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Spotlight className="p-6 bg-glass-bg border border-glass-border">
                <h4 className="text-md font-bold font-space text-accent-cyan flex items-center gap-2 border-b border-glass-border/40 pb-3 mb-4">
                  <Brain className="w-5 h-5 text-accent-cyan" /> Core Specializations
                </h4>
                <ul className="space-y-2.5 font-mono text-xs text-zinc-300">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-3.5 h-3.5 text-accent-cyan flex-shrink-0" /> Computer Vision &amp; Tracking
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-3.5 h-3.5 text-accent-cyan flex-shrink-0" /> Explainable AI (XAI)
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-3.5 h-3.5 text-accent-cyan flex-shrink-0" /> Clinical Diagnostic Models
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-3.5 h-3.5 text-accent-cyan flex-shrink-0" /> Deep Learning &amp; Transformers
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-3.5 h-3.5 text-accent-cyan flex-shrink-0" /> NLP &amp; Automated Text Scoring
                  </li>
                </ul>
              </Spotlight>
            </motion.div>

            {/* Card 2: Seeking Opportunities */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 }}
            >
              <Spotlight className="p-6 bg-glass-bg border border-glass-border">
                <h4 className="text-md font-bold font-space text-accent-purple flex items-center gap-2 border-b border-glass-border/40 pb-3 mb-4">
                  <Star className="w-5 h-5 text-accent-purple" /> Target Roles
                </h4>
                <ul className="space-y-2.5 font-mono text-xs text-zinc-300">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-3.5 h-3.5 text-accent-purple flex-shrink-0" /> AI/ML Engineer Roles
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-3.5 h-3.5 text-accent-purple flex-shrink-0" /> Computer Vision Specialist
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-3.5 h-3.5 text-accent-purple flex-shrink-0" /> Data Analyst Positions
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-3.5 h-3.5 text-accent-purple flex-shrink-0" /> Python &amp; Data Engineer
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-3.5 h-3.5 text-accent-purple flex-shrink-0" /> Cloud/DevOps Associate
                  </li>
                </ul>
              </Spotlight>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
