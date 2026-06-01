import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CustomCursor from "@/components/layout/CustomCursor";
import ScrollProgress from "@/components/layout/ScrollProgress";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Projects from "@/components/sections/Projects";
import Skills from "@/components/sections/Skills";
import Experience from "@/components/sections/Experience";
import Certifications from "@/components/sections/Certifications";
import Github from "@/components/sections/Github";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      {/* Visual Helpers */}
      <ScrollProgress />
      <CustomCursor />

      {/* Global Navbar */}
      <Navbar />

      {/* Main Sections */}
      <main className="flex-1 w-full relative z-10">
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Experience />
        <Certifications />
        <Github />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
}
