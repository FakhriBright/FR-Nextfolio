"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, ArrowUpRight, Linkedin } from "lucide-react";

export default function ProfileStory() {
  const [openIndex, setOpenIndex] = useState(0);

  const milestones = [
    {
      id: "01",
      role: "Web Developer Intern",
      institution: "PT Asuransi Tugu Pratama Indonesia",
      period: "Nov 2025 — Present",
      description:
        "Developing and refining enterprise web application interfaces, writing modular and responsive frontend components, and collaborating within a corporate IT development workflow.",
      highlights: ["Enterprise Web Applications", "Responsive Frontend Components", "Production Workflows"],
    },
    {
      id: "02",
      role: "SIJA Vocational Student",
      institution: "SMK TI BAZMA",
      period: "Vocational High School",
      description:
        "Enrolled in the Information Systems, Networking, and Applications (SIJA) 4-year vocational program. Rigorous curriculum focused on full web development, relational database engineering, and Linux system fundamentals.",
      highlights: ["Web Application Engineering", "Database Systems (PostgreSQL)", "Network Architecture"],
    },
    {
      id: "03",
      role: "Student Council President (Ketua OSIS)",
      institution: "SMK TI BAZMA",
      period: "2024 — 2025",
      description:
        "Elected to lead the student council organization. Managed cross-functional committees, coordinated student development events, and represented student interests across vocational activities.",
      highlights: ["Executive Leadership", "Event Coordination", "Team Governance"],
    },
  ];

  const skillCategories = [
    {
      category: "Frontend Development",
      items: ["HTML5", "CSS3", "JavaScript (ES6+)", "React", "Next.js", "Vue.js", "Tailwind CSS"],
    },
    {
      category: "Backend & Database",
      items: ["PHP", "Laravel", "PostgreSQL", "REST APIs", "MVC Architecture"],
    },
    {
      category: "Workflow & Tools",
      items: ["Git & GitHub", "Figma to Code", "Responsive UI", "REST Integration"],
    },
  ];

  return (
    <section id="profile" className="py-20 md:py-28 w-full px-6 md:px-12 lg:px-20 xl:px-28 bg-[#F3F3F3] text-[#191A23] border-b border-[#191A23]/15">
      
      {/* ── POSITIVUS HEADER: Lime Pill Badge + Title + Subtitle ── */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16 pb-6 border-b border-[#191A23]/15">
        <div className="flex flex-col sm:flex-row sm:items-center gap-4">
          <span className="px-3 py-1 rounded-md bg-[#B9FF66] text-[#191A23] font-heading font-extrabold text-lg uppercase tracking-wide border border-[#191A23] shadow-sm">
            About &amp; Journey
          </span>
          <p className="text-[#191A23]/70 text-sm sm:text-base font-sans max-w-lg leading-relaxed">
            Vocational background, professional internship experience, and technical capabilities as a Web Developer.
          </p>
        </div>
      </div>

      {/* ── TOP EDITORIAL GRID: Team Profile Card + Narrative ── */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch mb-20">
        
        {/* Left: Positivus Team Card Style with Portrait */}
        <div className="lg:col-span-5 rounded-[36px] border-2 border-[#191A23] bg-white p-8 shadow-positivus flex flex-col justify-between gap-6">
          <div className="flex items-center gap-5 pb-6 border-b border-[#191A23]/15">
            <div className="relative w-20 h-20 rounded-2xl bg-[#B9FF66] border-2 border-[#191A23] overflow-hidden shrink-0 shadow-sm">
              <Image
                src="/profile.png"
                alt="Moh. Fakhri Rizkian"
                fill
                sizes="80px"
                quality={85}
                className="object-contain object-bottom"
              />
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="font-heading font-bold text-xl text-[#191A23] truncate">
                M. Fakhri Rizkian
              </h3>
              <p className="text-xs font-mono text-[#191A23]/70 uppercase tracking-wider font-semibold">
                Web Developer
              </p>
            </div>
            <a
              href="https://www.linkedin.com/in/m-fakhri-rizkian/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="w-9 h-9 rounded-full bg-[#191A23] text-white flex items-center justify-center hover:bg-[#B9FF66] hover:text-[#191A23] transition-colors shrink-0"
            >
              <Linkedin size={16} />
            </a>
          </div>

          <p className="text-sm font-sans text-[#191A23]/80 leading-relaxed">
            Vocational student in Information Systems, Networking, and Applications (SIJA) at SMK TI BAZMA, currently undertaking an internship at PT Asuransi Tugu Pratama Indonesia. Focused on clean web architectures, modern component systems, and accessible user experiences.
          </p>

          <div className="pt-2 flex items-center justify-between text-xs font-mono text-[#191A23]/60">
            <span>SMK TI BAZMA &times; Tugu Pratama</span>
            <span className="font-bold text-[#191A23]">2026</span>
          </div>
        </div>

        {/* Right: Technical Competencies with Positivus Service Cards ── */}
        <div className="lg:col-span-7 flex flex-col justify-between gap-4">
          <div className="text-xs font-mono uppercase tracking-widest text-[#191A23]/60 font-bold mb-1">
            Technical Stack Overview
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 h-full">
            {skillCategories.map((cat, i) => (
              <div
                key={cat.category}
                className={`rounded-[28px] border-2 border-[#191A23] p-6 shadow-positivus flex flex-col justify-between gap-4 ${
                  i === 0
                    ? "bg-[#B9FF66] text-[#191A23]"
                    : i === 1
                    ? "bg-white text-[#191A23]"
                    : "bg-[#191A23] text-white"
                }`}
              >
                <div className="space-y-3">
                  <span className={`px-2.5 py-0.5 rounded-md font-mono text-xs font-bold uppercase tracking-wider inline-block border border-current/20 ${
                    i === 0 ? "bg-white text-[#191A23]" : i === 1 ? "bg-[#B9FF66] text-[#191A23]" : "bg-white/15 text-white"
                  }`}>
                    {cat.category}
                  </span>

                  <ul className="space-y-1.5 text-xs font-mono pt-1">
                    {cat.items.map((item) => (
                      <li key={item} className="flex items-center gap-1.5 opacity-90">
                        <span>&bull;</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="text-[10px] font-mono uppercase tracking-wider opacity-60 pt-2 border-t border-current/20">
                  Verified Tooling
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* ── POSITIVUS WORKING PROCESS ACCORDION (Step-by-Step Experience) ── */}
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-8">
          <span className="px-3 py-1 rounded-md bg-[#B9FF66] text-[#191A23] font-heading font-extrabold text-base uppercase tracking-wide border border-[#191A23]">
            Track Record
          </span>
          <h3 className="text-2xl sm:text-3xl font-bold font-heading text-[#191A23]">
            Experience &amp; Milestones
          </h3>
        </div>

        <div className="space-y-5">
          {milestones.map((m, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div
                key={m.id}
                className={`rounded-[32px] border-2 border-[#191A23] transition-all duration-300 shadow-positivus overflow-hidden ${
                  isOpen ? "bg-[#B9FF66] text-[#191A23]" : "bg-white text-[#191A23] hover:bg-[#F8F8F8]"
                }`}
              >
                {/* Header Row */}
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? -1 : idx)}
                  className="w-full px-6 sm:px-10 py-6 sm:py-8 flex items-center justify-between gap-4 text-left focus:outline-none"
                >
                  <div className="flex items-center gap-6 sm:gap-8">
                    <span className="text-3xl sm:text-5xl font-extrabold font-heading text-[#191A23]">
                      {m.id}
                    </span>
                    <div>
                      <h4 className="text-lg sm:text-2xl font-bold font-heading text-[#191A23]">
                        {m.role}
                      </h4>
                      <p className="text-xs sm:text-sm font-sans font-medium text-[#191A23]/70">
                        {m.institution} &bull; <span className="font-mono">{m.period}</span>
                      </p>
                    </div>
                  </div>

                  {/* Circular Plus/Minus Toggle Button in Positivus Style */}
                  <div className="w-11 h-11 rounded-full bg-white border-2 border-[#191A23] flex items-center justify-center shrink-0 shadow-sm text-[#191A23]">
                    {isOpen ? <Minus size={18} /> : <Plus size={18} />}
                  </div>
                </button>

                {/* Expanded Content with Clean Animation */}
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <div className="px-6 sm:px-10 pb-8 pt-2 border-t-2 border-[#191A23]/20 space-y-4">
                        <p className="text-sm sm:text-base font-sans text-[#191A23]/85 leading-relaxed max-w-3xl">
                          {m.description}
                        </p>

                        <div className="flex flex-wrap gap-2 pt-2">
                          {m.highlights.map((h) => (
                            <span
                              key={h}
                              className="px-3 py-1 rounded-full bg-white border border-[#191A23] text-xs font-mono font-medium text-[#191A23] shadow-sm"
                            >
                              {h}
                            </span>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>

    </section>
  );
}
