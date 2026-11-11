"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { ExternalLink, Github, ArrowUpRight } from "lucide-react";
import { projects } from "@/data/projects";

export default function InteractiveProjectShowcase() {
  const containerRef = useRef(null);
  const shouldReduceMotion = useReducedMotion();
  const featured = projects.filter((p) => p.featured);
  const total = featured.length;

  const [activeIndex, setActiveIndex] = useState(0);

  // Desktop Pinned Scroll: Pinned only for 160vh (just enough to glide through the 4 cards)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Calculate dynamic active index based on scroll
  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (latest) => {
      const idx = Math.min(Math.floor(latest * total * 1.05), total - 1);
      setActiveIndex(Math.max(0, idx));
    });
    return () => unsubscribe();
  }, [scrollYProgress, total]);

  // Translate horizontal track: At progress = 1.0, the 4th card is fully centered, immediately unpinning
  const xTranslate = useTransform(
    scrollYProgress,
    [0, 1],
    shouldReduceMotion ? ["0%", "0%"] : ["0%", `-${(total - 1) * 73}%`]
  );

  // Card themes alternating in Positivus style: Charcoal, Lime, White, Charcoal
  const cardThemes = [
    {
      bg: "bg-[#191A23] text-white border-2 border-[#191A23]",
      titlePill: "bg-[#B9FF66] text-[#191A23]",
      arrowBtn: "bg-[#B9FF66] text-[#191A23] hover:bg-white",
      tagBg: "bg-white/10 text-white border-white/20",
    },
    {
      bg: "bg-[#B9FF66] text-[#191A23] border-2 border-[#191A23]",
      titlePill: "bg-white text-[#191A23]",
      arrowBtn: "bg-[#191A23] text-white hover:bg-white hover:text-[#191A23]",
      tagBg: "bg-black/10 text-[#191A23] border-[#191A23]/20",
    },
    {
      bg: "bg-white text-[#191A23] border-2 border-[#191A23]",
      titlePill: "bg-[#B9FF66] text-[#191A23]",
      arrowBtn: "bg-[#191A23] text-white hover:bg-[#B9FF66] hover:text-[#191A23]",
      tagBg: "bg-[#191A23]/5 text-[#191A23] border-[#191A23]/15",
    },
    {
      bg: "bg-[#191A23] text-white border-2 border-[#191A23]",
      titlePill: "bg-[#B9FF66] text-[#191A23]",
      arrowBtn: "bg-[#B9FF66] text-[#191A23] hover:bg-white",
      tagBg: "bg-white/10 text-white border-white/20",
    },
  ];

  return (
    <section
      id="works"
      ref={containerRef}
      className="relative w-full bg-white text-[#191A23] border-b border-[#191A23]/15 transition-colors duration-500 lg:h-[180vh]"
    >
      {/* ── DESKTOP PINNED VIEWPORT / MOBILE STATIC FLOW ── */}
      <div className="lg:sticky lg:top-0 lg:h-screen w-full flex flex-col justify-between overflow-hidden px-6 md:px-12 lg:px-20 xl:px-28 py-10 md:py-12">
        
        {/* ── POSITIVUS HEADER: Lime Pill Badge + Heading + Paragraph ── */}
        <div className="relative z-20 flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-6 border-b border-[#191A23]/15">
          <div className="flex flex-col sm:flex-row sm:items-center gap-4">
            <span className="px-3 py-1 rounded-md bg-[#B9FF66] text-[#191A23] font-heading font-extrabold text-lg uppercase tracking-wide border border-[#191A23] shadow-sm">
              Selected Works
            </span>
            <p className="text-[#191A23]/70 text-sm sm:text-base font-sans max-w-lg leading-relaxed">
              Explore featured web development applications built with modern engineering workflows and clean interfaces.
            </p>
          </div>

          <div className="flex items-center gap-4 text-xs font-mono">
            <span className="font-bold text-[#191A23]">
              0{activeIndex + 1} &mdash; 0{total}
            </span>
            <div className="hidden sm:block w-28 h-[3px] bg-[#191A23]/15 rounded-full overflow-hidden">
              <motion.div
                style={{ scaleX: scrollYProgress, transformOrigin: "left" }}
                className="h-full bg-[#191A23]"
              />
            </div>
          </div>
        </div>

        {/* ── DESKTOP HORIZONTAL TRACK / MOBILE SWIPE SNAP ── */}
        <div className="relative z-10 my-auto py-6 w-full">
          
          {/* Desktop: Pinned Motion Translate */}
          <div className="hidden lg:block overflow-visible">
            <motion.div
              style={{ x: xTranslate }}
              className="flex items-center gap-10 w-max"
            >
              {featured.map((project, idx) => {
                const theme = cardThemes[idx % cardThemes.length];

                return (
                  <div
                    key={project.id}
                    className={`w-[60vw] max-w-[880px] aspect-[16/9] rounded-[36px] ${theme.bg} shadow-positivus-lg p-8 sm:p-10 flex items-center justify-between gap-8 relative overflow-hidden`}
                  >
                    {/* Left: Metadata & Links */}
                    <div className="w-[50%] flex flex-col justify-between h-full space-y-4 relative z-10">
                      <div className="space-y-3">
                        <span className={`px-3 py-1 rounded-md font-mono text-xs font-bold uppercase tracking-wider inline-block border border-black/20 ${theme.titlePill}`}>
                          {project.title}
                        </span>

                        <p className="text-sm font-sans opacity-85 leading-relaxed line-clamp-3">
                          {project.description}
                        </p>

                        {/* Tech Tags */}
                        <div className="flex flex-wrap gap-1.5 pt-2">
                          {project.tech.map((t) => (
                            <span
                              key={t}
                              className={`text-[10px] font-mono px-2.5 py-0.5 rounded-md border ${theme.tagBg}`}
                            >
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Action Button: Circular Positivus Arrow Button */}
                      <div className="flex items-center gap-4 pt-4">
                        {project.link && (
                          <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-3 group text-xs font-heading font-bold uppercase tracking-wider"
                          >
                            <span className={`w-11 h-11 rounded-full ${theme.arrowBtn} border-2 border-[#191A23] flex items-center justify-center transition-transform group-hover:scale-105 shadow-sm`}>
                              <ArrowUpRight size={18} />
                            </span>
                            <span>Live Demo</span>
                          </a>
                        )}

                        {project.github && (
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="View source code"
                            className="w-10 h-10 rounded-full border-2 border-current flex items-center justify-center opacity-70 hover:opacity-100 transition-opacity"
                          >
                            <Github size={16} />
                          </a>
                        )}
                      </div>
                    </div>

                    {/* Right: High-Res Project Screenshot */}
                    <div className="w-[48%] h-full rounded-2xl overflow-hidden border-2 border-[#191A23] relative shadow-md bg-black">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        sizes="450px"
                        priority={idx === 0}
                        quality={85}
                        className="object-cover object-top transition-transform duration-700 ease-out hover:scale-105"
                      />
                    </div>
                  </div>
                );
              })}
            </motion.div>
          </div>

          {/* Mobile (< 1024px): Touch-Friendly Horizontal Swipe Strip */}
          <div className="lg:hidden flex gap-5 overflow-x-auto snap-x snap-mandatory py-4 -mx-6 px-6 no-scrollbar">
            {featured.map((project, idx) => {
              const theme = cardThemes[idx % cardThemes.length];

              return (
                <div
                  key={project.id}
                  className={`snap-center shrink-0 w-[85vw] max-w-[360px] rounded-[28px] ${theme.bg} shadow-positivus p-6 flex flex-col justify-between gap-5`}
                >
                  <div className="space-y-3">
                    <span className={`px-3 py-1 rounded-md font-mono text-xs font-bold uppercase tracking-wider inline-block border border-black/20 ${theme.titlePill}`}>
                      {project.title}
                    </span>

                    <div className="w-full aspect-[16/10] rounded-xl overflow-hidden border-2 border-[#191A23] relative shadow-sm bg-black">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        sizes="340px"
                        quality={80}
                        className="object-cover object-top"
                      />
                    </div>

                    <p className="text-xs font-sans opacity-85 leading-relaxed line-clamp-3">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {project.tech.map((t) => (
                        <span
                          key={t}
                          className={`text-[9px] font-mono px-2 py-0.5 rounded-md border ${theme.tagBg}`}
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-3 border-t border-current/20">
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-xs font-heading font-bold uppercase tracking-wider"
                      >
                        <span className={`w-9 h-9 rounded-full ${theme.arrowBtn} border-2 border-[#191A23] flex items-center justify-center`}>
                          <ArrowUpRight size={15} />
                        </span>
                        <span>Live Demo</span>
                      </a>
                    )}

                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="View source code"
                        className="w-9 h-9 rounded-full border-2 border-current flex items-center justify-center opacity-70"
                      >
                        <Github size={15} />
                      </a>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

        </div>

        {/* ── BOTTOM ANCHOR: Full Archive Link ── */}
        <div className="relative z-20 flex items-center justify-between pt-4 border-t border-[#191A23]/15 text-xs font-mono">
          <span className="text-[#191A23]/50 hidden sm:inline-block">
            4 Selected Works &bull; Continuous Scroll
          </span>

          <Link
            href="/projects"
            className="inline-flex items-center gap-1.5 text-[#191A23] hover:text-[#3157D5] transition-colors font-bold uppercase tracking-wider group"
          >
            <span>View All 16 Projects in Archive</span>
            <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </div>

      </div>
    </section>
  );
}
