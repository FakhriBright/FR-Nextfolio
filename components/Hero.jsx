"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { ArrowDown, Download } from "lucide-react";

export default function Hero() {
  const containerRef = useRef(null);
  const shouldReduceMotion = useReducedMotion();

  // Scroll tracking through the extended hero canvas
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Layer 0: Kinetic typography translating in counter directions
  const bgText1X = useTransform(
    scrollYProgress,
    [0, 1],
    shouldReduceMotion ? ["0%", "0%"] : ["-4%", "20%"]
  );
  const bgText2X = useTransform(
    scrollYProgress,
    [0, 1],
    shouldReduceMotion ? ["0%", "0%"] : ["14%", "-16%"]
  );
  const bgTextY = useTransform(
    scrollYProgress,
    [0, 1],
    shouldReduceMotion ? ["0%", "0%"] : ["0%", "40%"]
  );
  const bgOpacity = useTransform(scrollYProgress, [0, 0.75], [0.08, 0.015]);

  // Layer 1: Portrait silhouette depth movement, projection & scale
  const portraitY = useTransform(
    scrollYProgress,
    [0, 1],
    shouldReduceMotion ? ["0%", "0%"] : ["0%", "-28%"]
  );
  const portraitScale = useTransform(
    scrollYProgress,
    [0, 1],
    shouldReduceMotion ? [1, 1] : [1, 1.14]
  );
  const portraitMaskOpacity = useTransform(scrollYProgress, [0, 0.8], [0.95, 0.4]);

  // Layer 2: Foreground content elevation
  const contentY = useTransform(
    scrollYProgress,
    [0, 1],
    shouldReduceMotion ? ["0%", "0%"] : ["0%", "-16%"]
  );
  const contentOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0.25]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-[125vh] w-full flex flex-col justify-between overflow-hidden px-6 md:px-12 lg:px-20 xl:px-28 pt-8 pb-16 bg-[#F3EFE5] text-[#171918]"
    >
      {/* ── PARALLAX LAYER 0: Massive Counter-Moving Typography ── */}
      <motion.div
        style={{ y: bgTextY, opacity: bgOpacity }}
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none select-none flex flex-col justify-center whitespace-nowrap z-0"
      >
        <motion.div style={{ x: bgText1X }}>
          <span className="text-[20vw] font-black font-display tracking-tighter uppercase leading-[0.78] text-[#171918] block">
            WEB DEVELOPER
          </span>
        </motion.div>
        <motion.div style={{ x: bgText2X }}>
          <span className="text-[20vw] font-black font-display tracking-tighter uppercase leading-[0.78] text-[#171918] block pl-[14vw]">
            FAKHRI RIZKIAN
          </span>
        </motion.div>
      </motion.div>

      {/* ── TOP BAR: Author Metadata ── */}
      <div className="relative z-20 flex items-center justify-between text-xs font-mono uppercase tracking-widest text-[#171918]/60 pt-2">
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-[#3157D5]" />
          <span className="font-bold text-[#171918]">Moh. Fakhri Rizkian</span>
        </div>
        <span className="hidden sm:inline-block text-[#171918]/50">SMK TI BAZMA &times; Tugu Pratama Indonesia</span>
        <span className="font-semibold text-[#E98B45]">Web Developer</span>
      </div>

      {/* ── CENTER EDITORIAL CANVAS ── */}
      <div className="relative z-10 my-auto py-12 lg:py-6 w-full flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
        
        {/* Left: Bold Editorial Headline */}
        <motion.div
          style={{ y: contentY, opacity: contentOpacity }}
          className="w-full lg:max-w-2xl xl:max-w-3xl space-y-8"
        >
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#B9FF66]/30 border border-[#B9FF66] text-[#171918] text-xs font-mono font-bold tracking-wider uppercase">
              <span>Personal Portfolio</span>
              <span className="text-[#3157D5]">&bull;</span>
              <span>2026</span>
            </div>

            <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-[7rem] xl:text-[8rem] font-black font-display tracking-tighter uppercase text-[#171918] leading-[0.85]">
              Web
              <br />
              <span className="font-serif italic font-light lowercase text-[#3157D5]">
                developer
              </span>
              <br />
              &amp; Builder.
            </h1>
          </div>

          <p className="text-[#171918]/75 text-sm sm:text-base md:text-lg max-w-xl font-sans leading-relaxed">
            Vocational student in Information Systems, Networking, and Applications at{" "}
            <strong className="text-[#171918] font-semibold">SMK TI BAZMA</strong> and intern at{" "}
            <strong className="text-[#171918] font-semibold">PT Asuransi Tugu Pratama Indonesia</strong>. Focused on modern web interfaces, responsive architectures, and accessible interactive development.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <a
              href="#works"
              className="inline-flex items-center gap-2 px-7 py-4 rounded-full bg-[#171918] text-[#F3EFE5] font-heading font-bold text-xs uppercase tracking-widest hover:bg-[#3157D5] transition-all duration-300 shadow-md group"
            >
              <span>Explore Projects</span>
              <ArrowDown size={14} className="group-hover:translate-y-0.5 transition-transform" />
            </a>

            <a
              href="/cv/web-developer-cv.pdf"
              download="M-Fakhri-Rizkian-CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-4 rounded-full border border-[#171918]/25 bg-white/70 hover:bg-white text-[#171918] font-heading font-bold text-xs uppercase tracking-widest transition-colors shadow-sm"
            >
              <Download size={14} />
              <span>Download CV</span>
            </a>
          </div>
        </motion.div>

        {/* Right: Silhouette Portrait with Organic Architectural Integration */}
        <motion.div
          style={{ y: portraitY, scale: portraitScale }}
          className="relative w-full max-w-[340px] sm:max-w-[400px] lg:max-w-[460px] xl:max-w-[500px] aspect-[4/5] flex items-end justify-center select-none"
        >
          {/* Asymmetric Organic Architectural Pedestal */}
          <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-tr from-[#3157D5]/10 via-[#B9FF66]/15 to-transparent border border-[#171918]/15 shadow-2xl overflow-hidden">
            {/* Subtle Inner Lighting Aura */}
            <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-3/4 h-1/2 bg-[#B9FF66]/20 blur-3xl rounded-full pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#F3EFE5] via-transparent to-transparent opacity-80 z-10" />
            
            {/* Architectural Coordinates Inscription */}
            <div className="absolute top-6 left-6 text-[10px] font-mono uppercase tracking-widest text-[#171918]/45">
              Ref. 01 / Primary
            </div>
            <div className="absolute top-6 right-6 text-[10px] font-mono uppercase tracking-widest text-[#E98B45] font-bold">
              SIJA &bull; Web
            </div>
          </div>

          {/* Authentic Portrait Cutout with Organic Lighting Blend */}
          <motion.div
            style={{ opacity: portraitMaskOpacity }}
            className="relative z-10 w-full h-full flex items-end justify-center p-6 pb-0"
          >
            <Image
              src="/home.png"
              alt="Moh. Fakhri Rizkian"
              width={500}
              height={625}
              priority
              className="w-full h-auto object-contain max-h-[97%] drop-shadow-[0_20px_35px_rgba(23,25,24,0.35)] transition-transform duration-700 ease-out"
            />
          </motion.div>

          {/* Integrated Identity Ribbon at Base */}
          <div className="absolute -bottom-4 inset-x-6 z-20 flex items-center justify-between px-4 py-2.5 rounded-xl bg-white/95 backdrop-blur-md border border-[#171918]/15 text-[11px] font-mono shadow-xl">
            <span className="font-bold text-[#171918]">MOH. FAKHRI RIZKIAN</span>
            <span className="font-bold text-[#3157D5]">WEB DEVELOPER</span>
          </div>
        </motion.div>

      </div>

      {/* ── BOTTOM ANCHOR: Tools & Scroll Indicator ── */}
      <div className="relative z-20 pt-6 mt-8 border-t border-[#171918]/10">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-[11px] font-mono uppercase tracking-wider text-[#171918]/60 font-medium">
            <span className="w-2 h-2 rounded-full bg-[#B9FF66] inline-block" />
            <span>Core Technologies</span>
          </div>

          <div className="flex items-center flex-wrap gap-x-6 gap-y-2 text-xs font-mono uppercase tracking-wider text-[#171918]/75">
            {["Next.js", "React", "Laravel", "Vue.js", "Tailwind CSS", "PostgreSQL", "PHP", "Git"].map((tech) => (
              <span key={tech} className="hover:text-[#3157D5] transition-colors cursor-default">
                {tech}
              </span>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-2 text-[11px] font-mono text-[#171918]/55">
            <span>Scroll to dive into works</span>
            <ArrowDown size={12} className="animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  );
}
