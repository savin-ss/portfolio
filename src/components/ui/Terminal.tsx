"use client";

import React, { useState, useRef, useEffect } from "react";

interface HistoryItem {
  command: string;
  output: React.ReactNode;
}

export default function Terminal() {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<HistoryItem[]>([
    {
      command: "system-init",
      output: (
        <div className="text-zinc-500 font-mono text-xs">
          [OK] Loaded Savin S S portfolio environment v2.6.0
          <br />
          [OK] Established secure connection to local database
          <br />
          Type <span className="text-accent-cyan font-bold">help</span> to list available commands.
        </div>
      ),
    },
  ]);
  const containerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  }, [history]);

  const focusInput = () => {
    inputRef.current?.focus();
  };

  const handleCommandSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = input.trim().toLowerCase();
    if (!cmd) return;

    let output: React.ReactNode = "";

    switch (cmd) {
      case "help":
        output = (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-zinc-300 font-mono py-1">
            <div>
              <span className="text-accent-cyan font-bold">about</span> - Biography &amp; focus
            </div>
            <div>
              <span className="text-accent-cyan font-bold">skills</span> - Grid of technical skills
            </div>
            <div>
              <span className="text-accent-cyan font-bold">resume</span> - Download CV/resume PDF
            </div>
            <div>
              <span className="text-accent-cyan font-bold">contact</span> - Contact info &amp; links
            </div>
            <div>
              <span className="text-accent-cyan font-bold">clear</span> - Clear terminal logs
            </div>
            <div>
              <span className="text-accent-cyan font-bold">paper</span> - IEEE paper info
            </div>
          </div>
        );
        break;
      case "about":
        output = (
          <div className="text-zinc-300 leading-relaxed font-mono py-1">
            Savin S S is an AI/ML Engineer with a B.E. in Artificial Intelligence &amp; Machine Learning (CGPA 8.55).
            He specializes in high-precision Computer Vision, clinician-auditable Explainable AI (XAI), and predictive deep learning.
          </div>
        );
        break;
      case "skills":
        output = (
          <div className="text-zinc-300 font-mono py-1">
            <span className="text-accent-purple font-bold">AI / ML:</span> Python, PyTorch, TensorFlow, OpenCV, Scikit-learn, NLP
            <br />
            <span className="text-accent-purple font-bold">Data Analytics:</span> SQL, Power BI, Tableau, Pandas, NumPy, Excel
            <br />
            <span className="text-accent-purple font-bold">Cloud &amp; DevOps:</span> AWS, Docker, Git, GitHub CI/CD
          </div>
        );
        break;
      case "resume":
        output = (
          <div className="text-green-400 font-mono py-1">
            Opening PDF resume... download starting.
          </div>
        );
        if (typeof window !== "undefined") {
          window.open("/savin_cv.pdf", "_blank");
        }
        break;
      case "contact":
        output = (
          <div className="text-zinc-300 font-mono py-1">
            Email:{" "}
            <a
              href="mailto:savinsreenu588@gmail.com"
              className="text-accent-cyan underline hover:text-white"
            >
              savinsreenu588@gmail.com
            </a>
            <br />
            LinkedIn:{" "}
            <a
              href="https://linkedin.com/in/savin-s-s"
              target="_blank"
              className="text-accent-cyan underline hover:text-white"
            >
              linkedin.com/in/savin-s-s
            </a>
            <br />
            GitHub:{" "}
            <a
              href="https://github.com/savin-ss"
              target="_blank"
              className="text-accent-cyan underline hover:text-white"
            >
              github.com/savin-ss
            </a>
          </div>
        );
        break;
      case "paper":
        output = (
          <div className="text-zinc-300 font-mono py-1">
            <span className="text-yellow-400 font-bold">IEEE DISCOVER 2025:</span>
            <br />
            Title: An Intelligent Indoor Plant Health Monitoring System Using Deep Learning and Computer Vision
            <br />
            Status: Presented &amp; Published in IEEE Xplore.
          </div>
        );
        break;
      case "clear":
        setHistory([]);
        setInput("");
        return;
      default:
        output = (
          <div className="text-red-400 font-mono py-1">
            Command not found: &apos;{cmd}&apos;. Type &apos;help&apos; for a list of command queries.
          </div>
        );
    }

    setHistory((prev) => [...prev, { command: input, output }]);
    setInput("");
  };

  return (
    <div
      onClick={focusInput}
      className="w-full h-80 bg-zinc-950/90 border border-zinc-800 rounded-xl overflow-hidden shadow-2xl flex flex-col cursor-text font-mono text-sm"
    >
      {/* Terminal Title Bar */}
      <div className="bg-zinc-900 px-4 py-2 border-b border-zinc-800 flex items-center justify-between">
        <div className="flex space-x-2">
          <div className="w-3 h-3 rounded-full bg-red-500/80" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
          <div className="w-3 h-3 rounded-full bg-green-500/80" />
        </div>
        <div className="text-zinc-500 text-xs font-mono font-medium">savin-ss@shell:~</div>
        <div className="w-10" />
      </div>

      {/* Terminal Logs */}
      <div
        ref={containerRef}
        className="flex-1 p-4 overflow-y-auto space-y-3 no-scrollbar"
      >
        {history.map((item, idx) => (
          <div key={idx} className="space-y-1">
            {item.command !== "system-init" && (
              <div className="flex items-center space-x-2">
                <span className="text-green-500 font-bold font-mono">➜</span>
                <span className="text-accent-cyan font-bold font-mono">~</span>
                <span className="text-zinc-100 font-mono font-medium">{item.command}</span>
              </div>
            )}
            <div className="pl-4">{item.output}</div>
          </div>
        ))}
      </div>

      {/* Terminal Input Prompt */}
      <form
        onSubmit={handleCommandSubmit}
        className="bg-zinc-900/50 border-t border-zinc-800/80 px-4 py-3 flex items-center space-x-2"
      >
        <span className="text-green-500 font-bold font-mono">➜</span>
        <span className="text-accent-cyan font-bold font-mono">~</span>
        <input
          ref={inputRef}
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-1 bg-transparent border-none outline-none text-zinc-100 font-mono focus:ring-0 p-0"
          placeholder="type a command (e.g. help, skills, contact)..."
          autoComplete="off"
          autoCorrect="off"
          autoCapitalize="off"
          spellCheck="false"
        />
      </form>
    </div>
  );
}
