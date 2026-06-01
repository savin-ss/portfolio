"use client";

import React, { useState, FormEvent } from "react";
import Spotlight from "@/components/ui/Spotlight";
import { Mail, Send, CheckCircle2, MapPin, MessageSquare } from "lucide-react";
import confetti from "canvas-confetti";

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

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) return;

    setIsSubmitting(true);
    setIsError(false);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "40574e7c-f8d9-4e8f-8fe7-1a8a62563938",
          name: name,
          email: email,
          message: message,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setIsSubmitting(false);
        setIsSuccess(true);
        
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.8 },
          colors: ["#06b6d4", "#8b5cf6", "#ffffff"]
        });

        setName("");
        setEmail("");
        setMessage("");

        setTimeout(() => setIsSuccess(false), 5000);
      } else {
        throw new Error(result.message || "Failed to send message");
      }
    } catch (error) {
      console.error("Failed to send email:", error);
      setIsSubmitting(false);
      setIsError(true);
      setErrorMessage("Failed to send message. Please try again later.");
      setTimeout(() => setIsError(false), 5000);
    }
  };

  return (
    <section id="contact" className="pt-16 pb-12 bg-bg-secondary relative border-t border-glass-border/40">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="mb-12">
          <span className="text-accent-cyan font-mono text-xs font-bold tracking-widest uppercase mb-2 block">
            07 / Contact
          </span>
          <h2 className="text-4xl font-semibold tracking-tight font-space text-white">Get In Touch</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Info */}
          <div className="lg:col-span-5 space-y-12">
            <div>
              <p className="text-white font-space font-bold mb-6 text-lg">I'm currently open to:</p>
              <ul className="space-y-3 text-text-muted text-base font-mono list-none">
                <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-accent-cyan" /> AI/ML internships</li>
                <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-accent-cyan" /> Machine Learning Engineer roles</li>
                <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-accent-cyan" /> Applied AI opportunities</li>
                <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-accent-cyan" /> Backend AI engineering projects</li>
                <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-accent-cyan" /> Open-source collaborations</li>
              </ul>
              <p className="text-text-muted text-base mt-8 leading-relaxed">
                Feel free to connect regarding internships, projects, collaborations, or engineering opportunities.
              </p>
            </div>

            <div className="pt-8 border-t border-glass-border/40 space-y-6">
              <h3 className="text-xs font-mono font-bold text-zinc-500 uppercase tracking-widest">
                Contact Information
              </h3>
              <div className="space-y-4 font-mono text-base">
                <div className="flex items-center gap-4 text-zinc-300">
                  <div className="w-8 h-8 rounded-lg bg-zinc-900 border border-glass-border flex items-center justify-center text-accent-cyan"><MapPin className="w-4 h-4" /></div>
                  Kerala, India
                </div>
                <div className="flex items-center gap-4 text-zinc-300">
                  <div className="w-8 h-8 rounded-lg bg-zinc-900 border border-glass-border flex items-center justify-center text-accent-cyan"><Mail className="w-4 h-4" /></div>
                  <a href="mailto:savinsreenu588@gmail.com" className="hover:text-accent-cyan transition-colors">savinsreenu588@gmail.com</a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Form */}
          <div className="lg:col-span-7">
            <Spotlight className="p-6 md:p-8 bg-glass-bg border border-glass-border">
              <h3 className="text-xl font-bold font-space text-white mb-6 flex items-center gap-3">
                <MessageSquare className="w-5 h-5 text-accent-cyan" /> Send a Message
              </h3>

              {isError && (
                <div className="mb-6 p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-sm font-mono flex items-center gap-2">
                  <span>{errorMessage}</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="space-y-2">
                  <label className="text-[10px] font-mono font-bold text-zinc-500 uppercase tracking-widest block">
                    Full Name
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full bg-zinc-950/80 border border-glass-border rounded-xl px-4 py-3.5 text-base text-white placeholder-zinc-600 focus:outline-none focus:border-accent-cyan transition-colors"
                    placeholder="Enter your name"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-mono font-bold text-zinc-500 uppercase tracking-widest block">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-zinc-950/80 border border-glass-border rounded-xl px-4 py-3.5 text-base text-white placeholder-zinc-600 focus:outline-none focus:border-accent-cyan transition-colors"
                    placeholder="name@example.com"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-mono font-bold text-zinc-500 uppercase tracking-widest block">
                    Message
                  </label>
                  <textarea
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    rows={4}
                    className="w-full bg-zinc-950/80 border border-glass-border rounded-xl px-4 py-3.5 text-base text-white placeholder-zinc-600 focus:outline-none focus:border-accent-cyan transition-colors resize-none"
                    placeholder="Tell me about the opportunity or project..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting || isSuccess}
                  className="w-full py-4 rounded-xl bg-indigo-950/40 border border-indigo-500/30 text-white font-bold text-xs uppercase tracking-wider inline-flex items-center justify-center gap-2 hover:border-cyan-400/50 hover:shadow-[0_0_15px_rgba(34,211,238,0.15)] transition-all cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed mt-2"
                >
                  {isSubmitting ? (
                    <span>Sending message...</span>
                  ) : isSuccess ? (
                    <span className="inline-flex items-center gap-1.5 text-emerald-400"><CheckCircle2 className="w-4 h-4" /> Message Sent!</span>
                  ) : (
                    <>
                      <Send className="w-4 h-4" /> Send Message
                    </>
                  )}
                </button>
              </form>
            </Spotlight>
            
            {/* Optional Small Footer */}
            <div className="mt-4 text-center">
              <span className="text-zinc-600 font-mono text-[10px] uppercase tracking-widest border border-glass-border/40 px-4 py-1.5 rounded-full inline-block">
                &gt; Usually responds within 24 hours.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
