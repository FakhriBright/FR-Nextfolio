"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { ArrowDown, Download } from "lucide-react";

export default function Hero() {
  const containerRef = useRef(null);
  const shouldReduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const portraitY = useTransform(
    scrollYProgress,
    [0, 1],
    shouldReduceMotion ? ["0%", "0%"] : ["0%", "-14%"]
  );

  return (
    <section
      ref={containerRef}
      className="relative min-h-[92vh] w-full flex flex-col justify-between px-6 md:px-12 lg:px-20 xl:px-28 pt-8 pb-12 bg-[#F5F5F0] text-[#191919]"
    >
      {/* ── TOP METADATA ── */}
      <div className="flex items-center justify-between text-xs font-mono uppercase tracking-widest text-[#777873] pt-2">
        <span>Moh. Fakhri Rizkian</span>
        <span className="hidden sm:inline-block">SMK TI BAZMA &times; Tugu Pratama</span>
        <span className="text-[#191919] font-medium">Web Developer</span>
      </div>

      {/* ── MAIN EDITORIAL COMPOSITION ── */}
      <div className="my-auto py-12 lg:py-6 w-full flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
        
        {/* Left Column: Clear Editorial Typography & Short Bio */}
        <div className="w-full lg:max-w-2xl xl:max-w-3xl space-y-8">
          <div className="space-y-4">
            <span className="text-xs font-mono uppercase tracking-widest text-[#777873]">
              Portfolio 2026
            </span>

            <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-[7rem] xl:text-[8rem] font-black font-display tracking-tight text-[#191919] leading-[0.88] uppercase">
              Web
              <br />
              <span className="font-serif italic font-normal text-[#191919]/75 lowercase">developer</span>
              <br />
              &amp; Builder.
            </h1>
          </div>

          <p className="text-[#777873] text-sm sm:text-base md:text-lg max-w-xl font-sans leading-relaxed">
            Student in Information Systems, Networking, and Applications at{" "}
            <strong className="text-[#191919] font-semibold">SMK TI BAZMA</strong> and intern at{" "}
            <strong className="text-[#191919] font-semibold">PT Asuransi Tugu Pratama Indonesia</strong>. Focused on clean frontend architecture, web standards, and responsive digital interfaces.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <a
              href="#works"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#191919] text-[#F5F5F0] font-heading font-semibold text-xs uppercase tracking-widest hover:bg-[#B7F36B] hover:text-[#191919] transition-all duration-200 shadow-sm group"
            >
              <span>View Selected Projects</span>
              <ArrowDown size={14} className="group-hover:translate-y-0.5 transition-transform" />
            </a>

            <a
              href="/cv/web-developer-cv.pdf"
              download="M-Fakhri-Rizkian-CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full border border-[#191919]/20 bg-white/70 hover:bg-white text-[#191919] font-heading font-semibold text-xs uppercase tracking-widest transition-colors duration-200"
            >
              <Download size={14} />
              <span>Resume / CV</span>
            </a>
          </div>
        </div>

        {/* Right Column: Natural Photographic Composition */}
        <motion.div
          style={{ y: portraitY }}
          className="relative w-full max-w-[320px] sm:max-w-[380px] lg:max-w-[420px] aspect-[4/5] flex items-end justify-center select-none"
        >
          {/* Subtle Tone Plate */}
          <div className="absolute inset-0 rounded-[2rem] bg-[#E9E9E4] border border-[#191919]/10 shadow-sm overflow-hidden" />

          {/* Portrait Photo */}
          <div className="relative z-10 w-full h-full flex items-end justify-center p-4 pb-0">
            <Image
              src="/home.png"
              alt="Moh. Fakhri Rizkian"
              width={420}
              height={525}
              priority
              className="w-full h-auto object-contain max-h-[97%] filter contrast-[1.02]"
            />
          </div>

          {/* Subtle Accent Pill */}
          <div className="absolute bottom-4 inset-x-4 z-20 flex items-center justify-between px-4 py-2 rounded-xl bg-[#F5F5F0]/95 backdrop-blur-sm border border-[#191919]/10 text-[11px] font-mono">
            <span className="font-semibold text-[#191919]">M. Fakhri Rizkian</span>
            <span className="text-[#777873]">Web Developer</span>
          </div>
        </motion.div>

      </div>

      {/* ── CORE STACK TICKER ── */}
      <div className="pt-6 border-t border-[#191919]/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs font-mono">
        <span className="text-[#777873] uppercase tracking-wider">
          Core Technologies
        </span>
        <div className="flex items-center flex-wrap gap-x-6 gap-y-2 text-[#777873]">
          {["Next.js", "React", "Laravel", "Vue.js", "Tailwind CSS", "PostgreSQL", "PHP", "Git"].map((tech) => (
            <span key={tech} className="hover:text-[#191919] transition-colors cursor-default">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
