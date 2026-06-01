"use client";

import React, { useEffect, useState, useRef } from "react";

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isHovering, setIsHovering] = useState(false);
  const [isHidden, setIsHidden] = useState(true);
  const [isMobile, setIsMobile] = useState(true);
  const cursorRingRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Check if device supports touch
    const checkDevice = () => {
      const mobile = window.matchMedia("(max-width: 768px)").matches || 
                     ("ontouchstart" in window) || 
                     (navigator.maxTouchPoints > 0);
      setIsMobile(mobile);
    };

    checkDevice();
    window.addEventListener("resize", checkDevice);

    if (isMobile) return;

    const handleMouseMove = (e: MouseEvent) => {
      setIsHidden(false);
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseLeave = () => {
      setIsHidden(true);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest('a, button, input, select, textarea, [role="button"], .clickable')) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("resize", checkDevice);
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseover", handleMouseOver);
    };
  }, [isMobile]);

  if (isMobile || isHidden) return null;

  return (
    <>
      {/* Outer Glow Ring */}
      <div
        ref={cursorRingRef}
        className="fixed w-8 h-8 rounded-full border border-accent-cyan/60 pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 will-change-transform"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: `translate3d(-50%, -50%, 0) scale(${isHovering ? 1.6 : 1})`,
          backgroundColor: isHovering ? "rgba(6, 182, 212, 0.08)" : "transparent",
          boxShadow: isHovering ? "0 0 15px rgba(6, 182, 212, 0.3)" : "none",
          transition: "transform 0.15s ease-out, background-color 0.2s, box-shadow 0.2s",
        }}
      />
      {/* Inner Solid Dot */}
      <div
        className="fixed w-1.5 h-1.5 bg-accent-cyan rounded-full pointer-events-none z-[10000] -translate-x-1/2 -translate-y-1/2 will-change-transform"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: "translate3d(-50%, -50%, 0)",
        }}
      />
    </>
  );
}
