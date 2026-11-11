"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { ArrowDown, Download, ArrowUpRight } from "lucide-react";
import HeroIllustration from "./illustrations/HeroIllustration";

export default function Hero() {
  const containerRef = useRef(null);
  const shouldReduceMotion = useReducedMotion();

  // Scroll tracking through the hero viewport
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Layer 0: Kinetic typography translation across scroll
  const bgTextX = useTransform(
    scrollYProgress,
    [0, 1],
    shouldReduceMotion ? ["0%", "0%"] : ["0%", "-18%"]
  );

  // Layer 1: Illustration & graphic objects drift
  const graphicY = useTransform(
    scrollYProgress,
    [0, 1],
    shouldReduceMotion ? ["0%", "0%"] : ["0%", "24%"]
  );
  const graphicRotate = useTransform(
    scrollYProgress,
    [0, 1],
    shouldReduceMotion ? [0, 0] : [0, 8]
  );

  // Layer 2: Portrait vertical depth & scale
  const portraitY = useTransform(
    scrollYProgress,
    [0, 1],
    shouldReduceMotion ? ["0%", "0%"] : ["0%", "-15%"]
  );
  const portraitScale = useTransform(
    scrollYProgress,
    [0, 1],
    shouldReduceMotion ? [1, 1] : [1, 1.08]
  );

  // Layer 3: Foreground headline elevation
  const contentY = useTransform(
    scrollYProgress,
    [0, 1],
    shouldReduceMotion ? ["0%", "0%"] : ["0%", "-10%"]
  );
  const contentOpacity = useTransform(scrollYProgress, [0, 0.75], [1, 0.2]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-[95vh] w-full flex flex-col justify-between overflow-hidden px-6 md:px-12 lg:px-20 xl:px-28 pt-8 pb-12 bg-white text-[#191A23]"
    >
      {/* ── PARALLAX LAYER 0: Background Giant Monogram Typography ── */}
      <motion.div
        style={{ x: bgTextX }}
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none select-none flex flex-col justify-center whitespace-nowrap z-0 opacity-[0.035]"
      >
        <span className="text-[20vw] font-black font-heading tracking-tighter uppercase leading-[0.8] text-[#191A23]">
          WEB DEVELOPER
        </span>
        <span className="text-[20vw] font-black font-heading tracking-tighter uppercase leading-[0.8] text-[#191A23] pl-[15vw]">
          M. FAKHRI RIZKIAN
        </span>
      </motion.div>

      {/* ── TOP BAR: Author Identity ── */}
      <div className="relative z-20 flex items-center justify-between text-xs font-mono uppercase tracking-widest text-[#191A23]/60 pt-2">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-[#B9FF66] border border-[#191A23]" />
          <span className="font-bold text-[#191A23]">Moh. Fakhri Rizkian</span>
        </div>
        <span className="hidden sm:inline-block text-[#191A23]/50">
          SMK TI BAZMA &bull; Tugu Pratama Indonesia
        </span>
        <span className="font-bold text-[#191A23] px-2.5 py-0.5 rounded-md bg-[#B9FF66]">
          Web Developer
        </span>
      </div>

      {/* ── CENTER: Positivus Layout (Asymmetric Headline + Layered Visual Composition) ── */}
      <div className="relative z-10 my-auto py-6 sm:py-10 lg:py-6 w-full flex flex-col lg:flex-row items-center justify-between gap-8 sm:gap-12 lg:gap-14">
        
        {/* Left Column: Bold Positivus Headline & Natural Bio (order-2 on mobile, order-1 on desktop) */}
        <motion.div
          style={{ y: contentY, opacity: contentOpacity }}
          className="w-full lg:max-w-2xl xl:max-w-3xl space-y-6 sm:space-y-7 order-2 lg:order-1 text-center lg:text-left flex flex-col items-center lg:items-start"
        >
          <div className="space-y-4">
            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-[5.4rem] xl:text-[6.2rem] font-bold font-heading tracking-tight text-[#191A23] leading-[1.05] lg:leading-[1.02]">
              Navigating the
              <br />
              <span className="relative inline-block">
                <span className="relative z-10">digital landscape</span>
                <span className="absolute bottom-1.5 sm:bottom-2 inset-x-0 h-3 sm:h-5 md:h-6 bg-[#B9FF66] -z-0 rounded-sm" />
              </span>
              <br />
              for web success
            </h1>
          </div>

          <p className="text-[#191A23]/75 text-sm sm:text-base md:text-lg max-w-xl font-sans leading-relaxed">
            Vocational student at <strong className="text-[#191A23] font-semibold">SMK TI BAZMA</strong> and intern at{" "}
            <strong className="text-[#191A23] font-semibold">PT Asuransi Tugu Pratama Indonesia</strong>. Focused on modern web interfaces, responsive architectures, and accessible interactive development.
          </p>

          {/* Action CTAs in Positivus Neo-Brutalist Style */}
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-4 pt-1 sm:pt-2">
            <a
              href="#works"
              className="inline-flex items-center gap-2.5 px-6 sm:px-7 py-3.5 sm:py-4 rounded-2xl bg-[#191A23] text-white font-heading font-bold text-xs uppercase tracking-wider hover:bg-[#B9FF66] hover:text-[#191A23] transition-all duration-300 border-2 border-[#191A23] shadow-positivus group"
            >
              <span>Explore Works</span>
              <ArrowDown size={14} className="group-hover:translate-y-0.5 transition-transform" />
            </a>

            <a
              href="/cv/web-developer-cv.pdf"
              download="M-Fakhri-Rizkian-CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-5 sm:px-6 py-3.5 sm:py-4 rounded-2xl border-2 border-[#191A23] bg-white text-[#191A23] font-heading font-bold text-xs uppercase tracking-wider hover:bg-[#F3F3F3] transition-colors shadow-positivus"
            >
              <Download size={14} />
              <span>Download CV</span>
            </a>
          </div>
        </motion.div>

        {/* Right Column: Layered Multi-Planar Composition (Portrait + Positivus Vector Objects) (order-1 on mobile, order-2 on desktop) */}
        <div className="relative w-full max-w-[290px] sm:max-w-[380px] lg:max-w-[480px] aspect-square flex items-center justify-center order-1 lg:order-2 shrink-0">
          
          {/* Layer 1: Floating Positivus Illustration Backdrop (Rotates & drifts on scroll) */}
          <motion.div
            style={{ y: graphicY, rotate: graphicRotate }}
            className="absolute inset-0 z-0 flex items-center justify-center"
          >
            <HeroIllustration />
          </motion.div>

          {/* Layer 2: Authentic Portrait in Sculptural Positivus Frame */}
          <motion.div
            style={{ y: portraitY, scale: portraitScale }}
            className="relative z-10 w-[78%] aspect-[4/5] rounded-[32px] border-2 border-[#191A23] bg-white/90 backdrop-blur-sm shadow-positivus-lg overflow-hidden flex items-end justify-center group"
          >
            <div className="absolute top-4 left-4 z-20">
              <span className="px-2.5 py-1 rounded-md bg-[#B9FF66] text-[#191A23] font-mono text-[10px] font-bold uppercase tracking-wider border border-[#191A23]">
                Web Developer
              </span>
            </div>

            <Image
              src="/home.png"
              alt="Moh. Fakhri Rizkian"
              width={420}
              height={525}
              priority
              className="w-full h-auto object-contain max-h-[96%] drop-shadow-xl transition-transform duration-700 ease-out group-hover:scale-105"
            />

            {/* In-Frame Coordinate Label */}
            <div className="absolute bottom-3 inset-x-4 z-20 flex items-center justify-between px-3 py-1.5 rounded-xl bg-white border border-[#191A23] text-[10px] font-mono">
              <span className="font-bold text-[#191A23]">M. FAKHRI RIZKIAN</span>
              <span className="text-[#191A23]/60">PORTFOLIO</span>
            </div>
          </motion.div>

        </div>

      </div>

      {/* ── BOTTOM ANCHOR: Positivus Logo Ribbon / Partner Tech Strip ── */}
      <div className="relative z-20 pt-8 mt-6 border-t border-[#191A23]/15">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          <span className="text-xs font-mono uppercase tracking-wider text-[#191A23]/50 font-bold shrink-0">
            Production Stack:
          </span>

          {/* Clean Monochrome Partner Strip */}
          <div className="flex items-center flex-wrap gap-x-8 gap-y-3 text-sm md:text-base font-heading font-bold text-[#191A23]/70">
            {["Next.js", "React", "Laravel", "Vue.js", "Tailwind CSS", "PostgreSQL", "PHP", "Git"].map((tech) => (
              <span
                key={tech}
                className="hover:text-[#191A23] transition-colors cursor-default"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-2 text-xs font-mono text-[#191A23]/60">
            <span>Scroll down</span>
            <ArrowDown size={12} className="animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  );
}
