"use client";

import Image from "next/image";
import Link from "next/link";
import { ExternalLink, Github, ArrowUpRight } from "lucide-react";
import { projects } from "@/data/projects";

export default function InteractiveProjectShowcase() {
  const featured = projects.filter((p) => p.featured);

  return (
    <section
      id="works"
      className="py-24 md:py-32 w-full px-6 md:px-12 lg:px-20 xl:px-28 bg-[#191919] text-[#F5F5F0] transition-colors duration-300"
    >
      {/* ── SECTION HEADER ── */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-20 pb-8 border-b border-white/10">
        <div className="space-y-3">
          <span className="text-xs font-mono uppercase tracking-widest text-[#777873]">
            Selected Works
          </span>
          <h2 className="text-4xl sm:text-6xl md:text-7xl font-black font-display uppercase tracking-tight text-white leading-[0.9]">
            Recent <span className="font-serif italic font-normal text-white/70 lowercase">projects</span>
          </h2>
        </div>

        <p className="text-[#777873] text-sm sm:text-base font-sans max-w-md leading-relaxed">
          Curated web applications and digital interfaces built during vocational education and practical development.
        </p>
      </div>

      {/* ── EDITORIAL ASYMMETRIC PROJECT LIST ── */}
      <div className="space-y-24 md:space-y-32">
        {featured.map((project, idx) => {
          const isEven = idx % 2 === 1;

          return (
            <article
              key={project.id}
              className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center ${
                isEven ? "lg:grid-flow-dense" : ""
              }`}
            >
              {/* Visual Showcase (7 cols) */}
              <div className={`lg:col-span-7 ${isEven ? "lg:col-start-6" : ""}`}>
                <div className="group relative w-full aspect-[16/10] rounded-2xl overflow-hidden bg-[#242624] border border-white/10 transition-all duration-300 hover:border-white/25">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 60vw"
                    priority={idx === 0}
                    quality={85}
                    className="object-cover object-top filter contrast-[1.02] transition-transform duration-500 ease-out group-hover:scale-[1.02]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#191919]/60 via-transparent to-transparent pointer-events-none" />
                </div>
              </div>

              {/* Context & Metadata (5 cols) */}
              <div
                className={`lg:col-span-5 space-y-6 ${
                  isEven ? "lg:col-start-1 lg:row-start-1" : ""
                }`}
              >
                <div className="flex items-center gap-3 text-xs font-mono text-[#777873]">
                  <span className="font-bold text-[#B7F36B]">0{idx + 1}</span>
                  <span>&bull;</span>
                  <span className="uppercase tracking-wider">{project.category}</span>
                </div>

                <div className="space-y-3">
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold font-heading text-white tracking-tight">
                    {project.title}
                  </h3>
                  <p className="text-[#777873] text-sm sm:text-base font-sans leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 pt-1">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs font-mono px-3 py-1 rounded-md bg-white/5 border border-white/10 text-white/80"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex items-center gap-4 pt-2">
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-[#191919] font-heading font-semibold text-xs uppercase tracking-wider hover:bg-[#B7F36B] transition-colors duration-200"
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
                      className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full border border-white/20 bg-transparent hover:bg-white/10 text-white font-heading font-semibold text-xs uppercase tracking-wider transition-colors duration-200"
                    >
                      <Github size={14} />
                      <span>Code</span>
                    </a>
                  )}
                </div>
              </div>
            </article>
          );
        })}
      </div>

      {/* ── FOOTER LINK TO ALL ARCHIVE ── */}
      <div className="mt-24 pt-8 border-t border-white/10 flex items-center justify-between text-xs font-mono">
        <span className="text-[#777873]">Selected works showcase</span>
        <Link
          href="/projects"
          className="inline-flex items-center gap-1.5 text-white hover:text-[#B7F36B] transition-colors font-semibold uppercase tracking-wider group"
        >
          <span>View All 16 Projects in Archive</span>
          <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </Link>
      </div>
    </section>
  );
}
