"use client";

import React, { useState } from "react";
import Spotlight from "@/components/ui/Spotlight";
import { Briefcase, GraduationCap, Award, Calendar, MapPin, ExternalLink, ZoomIn } from "lucide-react";

interface TimelineEvent {
  id: string;
  type: "experience" | "education" | "publication";
  date: string;
  title: string;
  subtitle: string;
  location?: string;
  description: string[];
  badges: string[];
  logo?: string;
  links?: { label: string; url: string; isCertificate?: boolean }[];
}

const timelineEvents: TimelineEvent[] = [
  {
    id: "exp-pyspiders",
    type: "experience",
    date: "2026 — Present",
    title: "Python with Data Science Intern",
    subtitle: "PySpiders",
    location: "Bengaluru, India",
    logo: "/assets/images/qspiders.jpg",
    badges: ["EDA", "Power BI", "SQL Analytics", "ML Pipelines", "Model Validation"],
    description: [
      "Performed exploratory data analysis, preprocessing, and large-scale data wrangling using Pandas and NumPy.",
      "Engineered interactive Power BI dashboards integrated with SQL databases for telemetry analytics and KPI reporting.",
      "Developed machine learning classification pipelines using Scikit-Learn with model evaluation and validation workflows."
    ]
  },
  {
    id: "exp-jpmorgan",
    type: "experience",
    date: "2025",
    title: "Software Engineering Virtual Intern",
    subtitle: "JPMorgan Chase",
    logo: "/assets/images/JP%20MORGAN.png",
    badges: ["Python", "React", "API Integration", "Git", "Agile"],
    description: [
      "Configured development environments and integrated financial APIs to improve workflow efficiency and onboarding speed.",
      "Worked with Python, React, Git workflows, and Agile engineering practices to simulate enterprise software engineering environments.",
      "Improved data visualization and debugging workflows for financial data systems."
    ]
  },
  {
    id: "pub-ieee",
    type: "publication",
    date: "2025",
    title: "IEEE DISCOVER 2025 Paper Presentation",
    subtitle: "IEEE Mangalore Subsection International Conference",
    location: "Mangalore, India",
    logo: "/assets/images/ieee%20logo.jpg",
    badges: ["Research Paper", "Deep Learning", "Computer Vision", "Agricultural IoT"],
    description: [
      "Published research paper on intelligent indoor plant health monitoring using deep learning and computer vision.",
      "Designed CNN-based disease detection workflows with automated telemetry and monitoring pipelines."
    ],
    links: [
      { label: "IEEE Xplore", url: "https://ieeexplore.ieee.org/abstract/document/11258976" },
      { label: "ResearchGate", url: "https://www.researchgate.net/publication/398260566_An_Intelligent_Indoor_Plant_Health_Monitoring_System_Using_Deep_Learning_and_Computer_Vision" },
      { label: "View Certificate", url: "#", isCertificate: true }
    ]
  },
  {
    id: "edu-pace",
    type: "education",
    date: "2022 — 2026",
    title: "Bachelor of Engineering (B.E.) — AI & Machine Learning",
    subtitle: "P.A. College of Engineering",
    location: "Mangalore, India",
    logo: "/assets/images/pa%20college.jpg",
    badges: ["AI / ML Major", "Data Science", "Computer Vision", "Explainable AI"],
    description: [
      "Pursuing undergraduate studies in Artificial Intelligence & Machine Learning with focus on machine learning systems, backend engineering, and applied AI development.",
      "Active involvement in technical projects, AI engineering workflows, and research-oriented development."
    ]
  }
];

export default function Experience() {
  const [showCertificate, setShowCertificate] = useState(false);

  return (
    <section id="experience" className="py-24 bg-bg-primary relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="mb-16">
          <span className="text-accent-cyan font-mono text-xs font-bold tracking-widest uppercase mb-2 block">
            04 / Chronology &amp; Achievements
          </span>
          <h2 className="text-3xl md:text-4xl font-bold font-space text-white">Experience &amp; Education</h2>
          <div className="w-12 h-1 bg-accent-cyan mt-3 rounded-full" />
        </div>

        {/* Timeline body */}
        <div className="relative border-l border-glass-border max-w-4xl mx-auto pl-6 md:pl-10 space-y-12">
          {timelineEvents.map((event) => {
            return (
              <div key={event.id} className="relative group">
                {/* Timeline icon indicator */}
                <div className="absolute -left-[35px] md:-left-[51px] top-1.5 w-7 h-7 md:w-10 md:h-10 rounded-full bg-zinc-950 border border-glass-border flex items-center justify-center text-accent-cyan group-hover:border-accent-cyan transition-colors z-10 shadow shadow-black">
                  {event.type === "experience" && <Briefcase className="w-3.5 h-3.5 md:w-5 md:h-5" />}
                  {event.type === "education" && <GraduationCap className="w-3.5 h-3.5 md:w-5 md:h-5" />}
                  {event.type === "publication" && <Award className="w-3.5 h-3.5 md:w-5 md:h-5" />}
                </div>

                {/* Event Card */}
                <Spotlight className="p-6 bg-glass-bg border border-glass-border group-hover:border-accent-cyan/20 transition-colors">
                  <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-5">
                    
                    {/* Header with optional Logo */}
                    <div className="flex items-start gap-4">
                      {event.logo && (
                        <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg overflow-hidden flex-shrink-0 bg-white border border-glass-border/40 mt-1 flex items-center justify-center p-1">
                          <img 
                            src={event.logo} 
                            alt={event.subtitle} 
                            className="w-full h-full object-contain grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500" 
                          />
                        </div>
                      )}
                      <div>
                        <span className="text-accent-cyan font-mono text-[10px] md:text-xs font-semibold flex items-center gap-1.5 mb-1.5 uppercase tracking-wider">
                          <Calendar className="w-3.5 h-3.5" /> {event.date}
                        </span>
                        <h3 className="text-lg md:text-xl font-bold font-space text-white leading-tight">{event.title}</h3>
                        <h4 className="text-sm font-semibold text-zinc-400 font-space mt-1">{event.subtitle}</h4>
                      </div>
                    </div>

                    {event.location && (
                      <span className="text-zinc-500 font-mono text-[10px] md:text-xs flex items-center gap-1.5 self-start md:self-auto shrink-0 md:mt-1">
                        <MapPin className="w-3.5 h-3.5" /> {event.location}
                      </span>
                    )}
                  </div>

                  {/* Bullet points */}
                  <ul className="space-y-3 text-xs md:text-sm text-text-muted list-none mb-6 leading-relaxed">
                    {event.description.map((pt, idx) => (
                      <li key={idx} className="flex gap-3">
                        <span className="text-accent-cyan/50 select-none">•</span>
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Badges */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {event.badges.map((b) => (
                      <span key={b} className="px-2.5 py-1 rounded-md bg-zinc-950 border border-glass-border/60 font-mono text-[10px] text-zinc-400">
                        {b}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  {event.links && (
                    <div className="flex flex-wrap gap-3 pt-4 border-t border-glass-border/40">
                      {event.links.map((link) => (
                        <button
                          key={link.label}
                          onClick={() => {
                            if (link.isCertificate) {
                              setShowCertificate(true);
                            } else {
                              window.open(link.url, "_blank");
                            }
                          }}
                          className={`px-3 py-1.5 rounded-lg text-[10px] md:text-xs font-bold font-mono tracking-wide uppercase transition-all flex items-center gap-2 cursor-pointer ${
                            link.isCertificate
                              ? "bg-accent-cyan text-bg-primary hover:bg-white"
                              : "bg-zinc-900 border border-glass-border text-zinc-300 hover:text-white hover:border-accent-cyan/40"
                          }`}
                        >
                          {link.isCertificate ? <ZoomIn className="w-3.5 h-3.5" /> : <ExternalLink className="w-3.5 h-3.5" />}
                          {link.label}
                        </button>
                      ))}
                    </div>
                  )}
                </Spotlight>
              </div>
            );
          })}
        </div>
      </div>

      {/* IEEE Certificate Lightbox Modal */}
      {showCertificate && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div
            className="absolute inset-0 bg-black/90 backdrop-blur-md"
            onClick={() => setShowCertificate(false)}
          />
          <div className="relative w-full max-w-4xl bg-zinc-950 border border-glass-border rounded-2xl p-4 md:p-6 z-10 flex flex-col items-center">
            <button
              onClick={() => setShowCertificate(false)}
              className="absolute top-2 right-2 md:top-4 md:right-4 text-zinc-500 hover:text-white transition-colors cursor-pointer text-sm font-mono uppercase"
            >
              ✕ Close
            </button>
            <div className="mt-6 w-full flex justify-center items-center overflow-auto">
              <img
                src="/assets/images/ieee.png"
                alt="IEEE DISCOVER 2025 Certificate"
                className="max-w-full max-h-[70vh] object-contain rounded-lg shadow-2xl border border-glass-border/30"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
