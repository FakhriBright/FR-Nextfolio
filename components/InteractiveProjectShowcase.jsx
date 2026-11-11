"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { ExternalLink, Github, ArrowRight, ArrowLeft, ArrowUpRight } from "lucide-react";
import { projects } from "@/data/projects";

export default function InteractiveProjectShowcase() {
  const containerRef = useRef(null);
  const trackRef = useRef(null);
  const shouldReduceMotion = useReducedMotion();
  const featured = projects.filter((p) => p.featured);
  const total = featured.length;

  const [activeIndex, setActiveIndex] = useState(0);

  // Proportional pinned height: 210vh for 4 projects ensures smooth pacing with zero trailing dead scroll
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Dynamic active index calculation
  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (latest) => {
      const idx = Math.min(Math.floor(latest * total * 1.05), total - 1);
      setActiveIndex(Math.max(0, idx));
    });
    return () => unsubscribe();
  }, [scrollYProgress, total]);

  // Exact translation mapping: At progress = 1.0, the 4th card is fully centered, immediately releasing the pin
  // Cards: 4 items. Total scroll distance: (total - 1) * 78% of card width
  const xTranslate = useTransform(
    scrollYProgress,
    [0, 1],
    shouldReduceMotion ? ["0%", "0%"] : ["0%", `-${(total - 1) * 74}%`]
  );

  // Watermark moves smoothly alongside
  const bgWatermarkX = useTransform(
    scrollYProgress,
    [0, 1],
    shouldReduceMotion ? ["0%", "0%"] : ["4%", "-16%"]
  );

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!containerRef.current) return;
      const containerTop = containerRef.current.offsetTop;
      const containerHeight = containerRef.current.offsetHeight;
      const scrollStep = containerHeight / (total - 0.15);

      if (e.key === "ArrowRight" || e.key === "ArrowDown") {
        const nextIdx = Math.min(activeIndex + 1, total - 1);
        window.scrollTo({
          top: containerTop + nextIdx * scrollStep,
          behavior: "smooth",
        });
      } else if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
        const prevIdx = Math.max(activeIndex - 1, 0);
        window.scrollTo({
          top: containerTop + prevIdx * scrollStep,
          behavior: "smooth",
        });
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeIndex, total]);

  const scrollToCard = (index) => {
    if (!containerRef.current) return;
    const containerTop = containerRef.current.offsetTop;
    const containerHeight = containerRef.current.offsetHeight;
    const scrollStep = (containerHeight - window.innerHeight) / (total - 1);
    window.scrollTo({
      top: containerTop + index * scrollStep,
      behavior: "smooth",
    });
  };

  return (
    <section
      id="works"
      ref={containerRef}
      className="relative h-[210vh] bg-[#171918] text-[#F3EFE5] transition-colors duration-500"
    >
      {/* ── STICKY VIEWPORT CONTAINER ── */}
      <div className="sticky top-0 h-screen w-full flex flex-col justify-between overflow-hidden px-6 md:px-12 lg:px-20 xl:px-28 py-8 md:py-10">
        
        {/* Background Watermark */}
        <motion.div
          style={{ x: bgWatermarkX }}
          aria-hidden="true"
          className="absolute -bottom-10 left-0 pointer-events-none select-none text-[20vw] font-black font-display text-white/[0.03] uppercase whitespace-nowrap leading-none z-0"
        >
          FEATURED PROJECTS
        </motion.div>

        {/* ── TOP BAR: Header, Counter & Animated Lime Progress Track ── */}
        <div className="relative z-20 flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-6 border-b border-white/10">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#B9FF66]" />
              <span className="text-xs font-mono uppercase tracking-widest text-[#B9FF66] font-bold">
                Selected Works
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-black font-display uppercase tracking-tight text-white leading-none">
              Engineered <span className="font-serif italic font-light lowercase text-[#B9FF66]">creations</span>
            </h2>
          </div>

          <div className="flex items-center gap-6">
            <div className="flex flex-col items-end gap-1.5">
              <span className="text-xs font-mono text-white/70">
                Project 0{activeIndex + 1} &mdash; 0{total}
              </span>
              {/* Animated Lime Progress Track */}
              <div className="w-32 h-[3px] bg-white/15 rounded-full overflow-hidden">
                <motion.div
                  style={{ scaleX: scrollYProgress, transformOrigin: "left" }}
                  className="h-full bg-[#B9FF66]"
                />
              </div>
            </div>

            {/* Manual Navigation Buttons */}
            <div className="hidden md:flex items-center gap-2">
              <button
                onClick={() => scrollToCard(Math.max(activeIndex - 1, 0))}
                disabled={activeIndex === 0}
                aria-label="Previous project"
                className="p-2.5 rounded-full border border-white/15 bg-white/5 text-white disabled:opacity-30 hover:border-[#B9FF66] hover:text-[#B9FF66] transition-colors"
              >
                <ArrowLeft size={14} />
              </button>
              <button
                onClick={() => scrollToCard(Math.min(activeIndex + 1, total - 1))}
                disabled={activeIndex === total - 1}
                aria-label="Next project"
                className="p-2.5 rounded-full border border-white/15 bg-white/5 text-white disabled:opacity-30 hover:border-[#B9FF66] hover:text-[#B9FF66] transition-colors"
              >
                <ArrowRight size={14} />
              </button>
            </div>
          </div>
        </div>

        {/* ── CENTER: Pinned Horizontal Kinetic Track ── */}
        <div className="relative z-10 my-auto py-2 w-full overflow-visible">
          <motion.div
            ref={trackRef}
            style={{ x: xTranslate }}
            className="flex items-center gap-8 md:gap-12 w-max cursor-grab active:cursor-grabbing"
          >
            {featured.map((project, idx) => {
              const isCurrent = idx === activeIndex;

              return (
                <div
                  key={project.id}
                  className={`w-[86vw] sm:w-[74vw] md:w-[68vw] lg:w-[58vw] max-w-[920px] aspect-[16/11] sm:aspect-[16/9] rounded-3xl overflow-hidden border transition-all duration-500 relative flex flex-col justify-between p-6 sm:p-10 shadow-2xl ${
                    isCurrent
                      ? "border-[#B9FF66]/50 bg-[#1E211F]"
                      : "border-white/10 bg-[#141615] opacity-80"
                  }`}
                >
                  {/* Background Image with Depth Gradient */}
                  <div className="absolute inset-0 z-0 overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 920px"
                      priority={idx === 0}
                      quality={85}
                      className="object-cover object-top filter contrast-[1.04] transition-transform duration-700 ease-out hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#171918] via-[#171918]/65 to-[#171918]/25 pointer-events-none" />
                  </div>

                  {/* Top Bar inside Card */}
                  <div className="relative z-10 flex items-center justify-between text-xs font-mono">
                    <span className="px-3.5 py-1.5 rounded-full bg-black/80 backdrop-blur-md border border-[#B9FF66]/30 text-[#B9FF66] font-bold uppercase tracking-wider">
                      0{idx + 1} &bull; {project.category}
                    </span>
                    <span className="text-white/60 hidden sm:inline-block">
                      {idx < total - 1 ? "Scroll down to advance \u2192" : "Final project \u2014 scroll to profile"}
                    </span>
                  </div>

                  {/* Bottom Content inside Card */}
                  <div className="relative z-10 space-y-4 max-w-2xl">
                    <h3 className="text-2xl sm:text-4xl md:text-5xl font-bold font-heading text-white tracking-tight leading-none drop-shadow-md">
                      {project.title}
                    </h3>

                    <p className="text-white/80 text-xs sm:text-sm md:text-base font-sans line-clamp-2 sm:line-clamp-3 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Tech Badges with Lime / Ivory Accents */}
                    <div className="flex flex-wrap gap-2 pt-1">
                      {project.tech.map((t) => (
                        <span
                          key={t}
                          className="px-2.5 py-1 rounded-md bg-black/75 backdrop-blur-md border border-white/15 text-white/90 font-mono text-[11px] font-medium"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    {/* Action Links */}
                    <div className="flex flex-wrap items-center gap-3 pt-2">
                      {project.link && (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-5 py-2.5 sm:px-6 sm:py-3 rounded-full bg-[#B9FF66] text-[#171918] font-heading font-bold text-xs uppercase tracking-widest hover:bg-white transition-all duration-300 shadow-md"
                        >
                          <span>Live Demo</span>
                          <ExternalLink size={13} />
                        </a>
                      )}

                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-4 py-2.5 sm:px-5 sm:py-3 rounded-full border border-white/20 bg-black/60 hover:bg-black/90 text-white font-heading font-bold text-xs uppercase tracking-widest transition-colors"
                        >
                          <Github size={14} />
                          <span>Code</span>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </motion.div>
        </div>

        {/* ── BOTTOM ANCHOR: Seamless Exit to Next Chapter ── */}
        <div className="relative z-20 flex items-center justify-between pt-4 border-t border-white/10 text-xs font-mono">
          <span className="text-white/50">
            {activeIndex === total - 1
              ? "Completed project reel \u2014 scroll into My Journey"
              : "Continuous scroll advances through project strip"}
          </span>

          <Link
            href="/projects"
            className="inline-flex items-center gap-1.5 text-white hover:text-[#B9FF66] transition-colors group font-semibold uppercase tracking-wider"
          >
            <span>View All 16 Projects</span>
            <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </div>

      </div>
    </section>
  );
}
