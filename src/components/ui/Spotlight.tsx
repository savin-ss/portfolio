"use client";

import React, { useRef, useState, MouseEvent } from "react";
import { cn } from "@/lib/utils";

interface SpotlightProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  glowColor?: string;
}

export default function Spotlight({
  children,
  className,
  glowColor = "rgba(6, 182, 212, 0.15)",
  ...props
}: SpotlightProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [isFocused, setIsFocused] = useState(false);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    setCoords({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsFocused(true)}
      onMouseLeave={() => setIsFocused(false)}
      className={cn(
        "relative rounded-2xl border border-glass-border bg-glass-bg overflow-hidden transition-all duration-300",
        className
      )}
      {...props}
    >
      {isFocused && (
        <div
          className="pointer-events-none absolute -inset-px rounded-2xl transition duration-300 z-10"
          style={{
            background: `radial-gradient(400px circle at ${coords.x}px ${coords.y}px, ${glowColor}, transparent 80%)`,
          }}
        />
      )}
      {isFocused && (
        <div
          className="pointer-events-none absolute -inset-px rounded-2xl transition duration-300 z-0 opacity-100"
          style={{
            background: `radial-gradient(150px circle at ${coords.x}px ${coords.y}px, rgba(255, 255, 255, 0.08), transparent 80%)`,
          }}
        />
      )}
      <div className="relative z-20 w-full h-full">{children}</div>
    </div>
  );
}
