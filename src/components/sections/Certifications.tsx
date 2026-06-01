"use client";

import React from "react";
import Spotlight from "@/components/ui/Spotlight";
import { Cloud, ShieldCheck, Cpu, Code, ArrowUpRight } from "lucide-react";

interface Certificate {
  title: string;
  issuer: string;
  category: "cloud" | "ml" | "devops" | "support";
  id: string;
  url: string;
  desc: string;
}

const certificates: Certificate[] = [
  {
    title: "AWS Cloud Solutions Architect",
    issuer: "Amazon Web Services (AWS)",
    category: "cloud",
    id: "HWJ1WNXVK87W",
    url: "https://www.coursera.org/account/accomplishments/professional-cert/certificate/HWJ1WNXVK87W",
    desc: "Validates cloud solutions designing capabilities on AWS infrastructure."
  },
  {
    title: "IBM DevOps & Software Engineering",
    issuer: "IBM",
    category: "devops",
    id: "RZM19UBC7Z5B",
    url: "https://coursera.org/verify/professional-cert/RZM19UBC7Z5B",
    desc: "Covers CI/CD, Docker, Kubernetes, TDD/BDD, Agile, and DevOps workflows."
  },
  {
    title: "IBM Machine Learning Professional",
    issuer: "IBM",
    category: "ml",
    id: "DJY7ON5O3SMR",
    url: "https://coursera.org/verify/specialization/DJY7ON5O3SMR",
    desc: "Covers regression, classification, clustering, deep learning, and CNN models."
  },
  {
    title: "Harvard CS50 AI Introduction",
    issuer: "Harvard University",
    category: "ml",
    id: "CS50AI-2025",
    url: "https://drive.google.com/file/d/1ZfeKrPq9k5Rea0eBEZuZlB6M5GwKIFyK/view",
    desc: "Covers search algorithms, probability, optimization, machine learning, and NLP."
  },
  {
    title: "Meta Full Stack Developer",
    issuer: "Meta",
    category: "devops",
    id: "G5F7YYX9QHIN",
    url: "https://coursera.org/verify/specialization/G5F7YYX9QHIN",
    desc: "Frontend React, backend API development, Django, Git, and deployment."
  },
  {
    title: "Google AI Essentials",
    issuer: "Google",
    category: "ml",
    id: "HUX42Y26N1MW",
    url: "https://www.coursera.org/account/accomplishments/specialization/certificate/HUX42Y26N1MW",
    desc: "Covers smart prompting, AI model validations, and operational neural tools."
  }
];

export default function Certifications() {
  return (
    <section id="certifications" className="py-24 bg-bg-secondary relative border-b border-glass-border/40">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="mb-16">
          <span className="text-accent-cyan font-mono text-xs font-bold tracking-widest uppercase mb-2 block">
            05 / Certifications &amp; Credentials
          </span>
          <h2 className="text-3xl md:text-4xl font-bold font-space text-white">Certifications &amp; Credentials</h2>
          <div className="w-12 h-1 bg-accent-cyan mt-3 rounded-full" />
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((cert) => {
            return (
              <a
                key={cert.id}
                href={cert.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group block"
              >
                <Spotlight className="p-6 bg-glass-bg border border-glass-border/80 hover:border-accent-cyan/20 h-full flex flex-col justify-between group-hover:shadow-lg group-hover:shadow-accent-cyan/5 transition-all">
                  <div className="space-y-4">
                    {/* Header */}
                    <div className="flex justify-between items-start">
                      <div className="w-9 h-9 rounded-lg bg-zinc-950/80 border border-glass-border flex items-center justify-center text-accent-cyan">
                        {cert.category === "cloud" && <Cloud className="w-4.5 h-4.5" />}
                        {cert.category === "ml" && <Cpu className="w-4.5 h-4.5" />}
                        {cert.category === "devops" && <Code className="w-4.5 h-4.5" />}
                        {cert.category === "support" && <ShieldCheck className="w-4.5 h-4.5" />}
                      </div>
                      <ArrowUpRight className="w-4 h-4 text-zinc-500 group-hover:text-accent-cyan group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                    </div>

                    <div className="space-y-1">
                      <h4 className="text-sm font-bold font-space text-white group-hover:text-accent-cyan transition-colors leading-snug">
                        {cert.title}
                      </h4>
                      <p className="text-[10px] font-mono text-zinc-500 font-semibold">{cert.issuer}</p>
                    </div>

                    <p className="text-text-muted text-xs leading-relaxed line-clamp-2">
                      {cert.desc}
                    </p>
                  </div>

                  <div className="border-t border-glass-border/40 pt-4 mt-6 flex justify-between items-center text-[9px] font-mono text-zinc-500">
                    <span>ID: {cert.id.substring(0, 12)}</span>
                    <span className="text-accent-cyan uppercase font-bold tracking-wider group-hover:underline">
                      View Credential
                    </span>
                  </div>
                </Spotlight>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
