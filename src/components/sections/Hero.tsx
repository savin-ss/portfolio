"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import ParticleBackground from "@/components/ui/ParticleBackground";
import { FileText, ArrowRight, Calendar, Globe } from "lucide-react";

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

const Linkedin = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={props.className}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const roles = [
  "AI/ML Engineer",
  "Data Engineer",
  "Python Developer",
];

export default function Hero() {
  const [roleIdx, setRoleIdx] = useState(0);
  const [displayedRole, setDisplayedRole] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    const currentFullRole = roles[roleIdx];

    if (isDeleting) {
      timer = setTimeout(() => {
        setDisplayedRole(currentFullRole.substring(0, displayedRole.length - 1));
        setTypingSpeed(40);
      }, typingSpeed);
    } else {
      timer = setTimeout(() => {
        setDisplayedRole(currentFullRole.substring(0, displayedRole.length + 1));
        setTypingSpeed(100);
      }, typingSpeed);
    }

    if (!isDeleting && displayedRole === currentFullRole) {
      timer = setTimeout(() => setIsDeleting(true), 1500); // Wait before starting delete
    } else if (isDeleting && displayedRole === "") {
      setIsDeleting(false);
      setRoleIdx((prev) => (prev + 1) % roles.length);
    }

    return () => clearTimeout(timer);
  }, [displayedRole, isDeleting, roleIdx, typingSpeed]);

  return (
    <section
      id="home"
      className="relative min-h-[95vh] flex items-center justify-center overflow-hidden pt-28 pb-12 bg-bg-primary"
    >
      {/* Background Particles Canvas */}
      <ParticleBackground />

      {/* Background Radial Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(6,182,212,0.03)_0%,transparent_70%)] pointer-events-none z-0" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Columns - Text content */}
        <div className="lg:col-span-7 flex flex-col items-start text-left">
          {/* Availability Status Tags */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-wrap gap-3 mb-6"
          >
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-semibold tracking-wider font-mono uppercase bg-accent-purple/10 border border-accent-purple/30 text-purple-300">
              <Globe className="w-3 h-3" /> Open to Global Opportunities
            </span>
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-semibold tracking-wider font-mono uppercase bg-accent-cyan/10 border border-accent-cyan/30 text-accent-cyan">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-cyan opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-cyan"></span>
              </span>
              Available for AI Internships
            </span>
          </motion.div>

          {/* Name Header */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-7xl font-extrabold font-space tracking-tight text-white mb-3"
          >
            Savin S S
          </motion.h1>

          {/* Role Rotator */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl md:text-3xl font-bold font-space text-accent-cyan h-10 mb-6 flex items-center"
          >
            <span>{displayedRole}</span>
            <span className="w-1 h-6 bg-accent-cyan ml-1 animate-pulse" />
          </motion.h2>

          {/* Brief Bio */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-base md:text-lg text-text-muted max-w-xl leading-relaxed mb-8"
          >
            Building scalable AI systems, explainable machine learning platforms, intelligent automation pipelines, and enterprise-grade analytics architectures.
          </motion.p>

          {/* Quick Skills Pill Container */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap gap-2 mb-8 max-w-xl"
          >
            {["Python", "PyTorch", "TensorFlow", "SQL", "Power BI", "OpenCV", "Pandas", "AWS", "Docker"].map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 rounded bg-zinc-950/60 border border-glass-border/80 text-zinc-400 font-mono text-xs font-semibold hover:border-accent-cyan/40 hover:text-white transition-colors cursor-default"
              >
                {tech}
              </span>
            ))}
          </motion.div>

          {/* Action CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-wrap items-center gap-4 w-full"
          >
            <a
              href="#projects"
              className="px-6 py-3 rounded-xl bg-accent-cyan text-bg-primary font-bold text-sm tracking-wider uppercase inline-flex items-center gap-2 hover:bg-white hover:shadow-lg hover:shadow-accent-cyan/10 transition-all group"
            >
              Explore Projects <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="/savin_cv.pdf"
              download="Savin_SS_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-xl bg-zinc-950/60 border border-glass-border text-white font-bold text-sm tracking-wider uppercase inline-flex items-center gap-2 hover:border-accent-cyan/40 hover:bg-zinc-900 transition-all"
            >
              <FileText className="w-4 h-4" /> Download Resume
            </a>
          </motion.div>

          {/* Quick social links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex items-center gap-4 mt-8 pt-6 border-t border-glass-border/40 w-full max-w-md text-zinc-500 font-mono text-xs"
          >
            <span className="uppercase tracking-wider font-semibold">Connect:</span>
            <a
              href="https://github.com/savin-ss"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-muted hover:text-accent-cyan transition-colors"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href="https://linkedin.com/in/savin-s-s"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-muted hover:text-accent-cyan transition-colors"
            >
              <Linkedin className="w-4 h-4" />
            </a>
          </motion.div>
        </div>

        {/* Right Columns - Visual Profile Picture */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="lg:col-span-5 flex justify-center lg:justify-end relative"
        >
          {/* Subtle floating glow overlay under picture */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full bg-radial from-accent-purple/10 to-transparent blur-3xl z-0 pointer-events-none" />

          {/* Picture Box container */}
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-2xl border border-glass-border bg-glass-bg overflow-hidden p-2 shadow-2xl z-10 group hover:border-accent-cyan/40 transition-colors">
            <div className="relative w-full h-full rounded-xl overflow-hidden">
              <Image
                src="/assets/images/savin_new.png"
                alt="Savin S S"
                fill
                priority
                sizes="(max-width: 768px) 256px, 320px"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
