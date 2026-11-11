"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { Briefcase, GraduationCap, Award, ArrowUpRight } from "lucide-react";

export default function ProfileStory() {
  const containerRef = useRef(null);
  const shouldReduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Parallax transforms for portrait and background graphics
  const portraitY = useTransform(
    scrollYProgress,
    [0, 1],
    shouldReduceMotion ? ["0px", "0px"] : ["60px", "-90px"]
  );
  const bgTextX = useTransform(
    scrollYProgress,
    [0, 1],
    shouldReduceMotion ? ["0%", "0%"] : ["-8%", "12%"]
  );

  // Technical skills data
  const frontendSkills = [
    "Next.js", "React", "Vue.js", "JavaScript (ES6+)", "Tailwind CSS", "HTML5 & CSS3", "Responsive UI",
  ];
  const backendSkills = [
    "Laravel", "PHP", "PostgreSQL", "RESTful APIs", "Relational Database Design", "MVC Architecture",
  ];
  const workflowSkills = [
    "Git & GitHub", "Figma to Code", "Component Design Systems", "API Integration", "Web Accessibility",
  ];

  return (
    <section
      id="profile"
      ref={containerRef}
      className="relative min-h-[145vh] py-28 md:py-36 w-full px-6 md:px-12 lg:px-20 xl:px-28 bg-[#3157D5] text-[#F3EFE5] overflow-hidden transition-colors duration-500"
    >
      {/* ── BACKGROUND PARALLAX WATERMARK ── */}
      <motion.div
        style={{ x: bgTextX }}
        aria-hidden="true"
        className="absolute top-16 left-0 pointer-events-none select-none text-[22vw] font-black font-display text-white/[0.06] uppercase whitespace-nowrap leading-none z-0"
      >
        JOURNEY &bull; FOUNDATION
      </motion.div>

      {/* Atmospheric Lighting Orbs */}
      <div
        aria-hidden="true"
        className="absolute top-1/4 -right-24 w-[600px] h-[600px] rounded-full bg-[#B9FF66]/15 blur-[180px] pointer-events-none"
      />
      <div
        aria-hidden="true"
        className="absolute bottom-1/4 -left-24 w-[500px] h-[500px] rounded-full bg-[#E98B45]/15 blur-[180px] pointer-events-none"
      />

      {/* ── SECTION HEADER: Editorial & Dynamic ── */}
      <div className="relative z-10 flex flex-col md:flex-row md:items-end justify-between gap-6 mb-20 pb-8 border-b border-white/20">
        <div className="space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[#B9FF66] text-xs font-mono font-bold tracking-wider uppercase">
            <span>My Journey</span>
            <span>&bull;</span>
            <span>Trajectory</span>
          </div>

          <h2 className="text-4xl sm:text-6xl md:text-7xl font-black font-display uppercase tracking-tighter text-white leading-[0.9]">
            Background
            <br />
            <span className="font-serif italic font-light lowercase text-[#B9FF66]">
              &amp; experience
            </span>
          </h2>
        </div>

        <p className="text-white/80 text-sm sm:text-base font-sans max-w-md leading-relaxed">
          Information Systems, Networking, and Applications student at SMK TI BAZMA with hands-on enterprise development experience.
        </p>
      </div>

      {/* ── EDITORIAL ASYMMETRIC GRID ── */}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        
        {/* Left Column: Organic Portrait with Sculptural Aura (5 cols) */}
        <div className="lg:col-span-5 relative">
          <motion.div
            style={{ y: portraitY }}
            className="relative w-full max-w-[420px] mx-auto aspect-[4/5] rounded-[2.5rem] bg-gradient-to-b from-white/15 to-white/5 border border-white/25 shadow-2xl p-6 flex flex-col justify-between overflow-hidden group select-none"
          >
            {/* Inner Atmospheric Ambient Glow */}
            <div className="absolute top-0 right-0 w-48 h-48 rounded-full bg-[#B9FF66]/20 blur-2xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full bg-[#E98B45]/20 blur-2xl pointer-events-none" />

            {/* Top Index Corner */}
            <div className="relative z-20 flex items-center justify-between text-xs font-mono text-white/70">
              <span className="font-bold text-[#B9FF66]">M. Fakhri Rizkian</span>
              <span>Web Developer</span>
            </div>

            {/* Authentic Cutout Portrait */}
            <div className="relative z-10 w-full h-[85%] flex items-end justify-center">
              <Image
                src="/profile.png"
                alt="Moh. Fakhri Rizkian"
                width={420}
                height={525}
                quality={85}
                className="w-full h-auto object-contain max-h-[98%] drop-shadow-[0_20px_30px_rgba(0,0,0,0.4)] transition-transform duration-700 ease-out group-hover:scale-105 filter contrast-[1.03]"
              />
            </div>

            {/* Bottom Grounded Label Plate */}
            <div className="relative z-20 px-4 py-2 rounded-xl bg-black/50 backdrop-blur-md border border-white/20 flex items-center justify-between text-[11px] font-mono">
              <span className="text-white font-semibold">SMK TI BAZMA &times; Tugu Pratama</span>
              <span className="text-[#B9FF66] font-bold">2026</span>
            </div>
          </motion.div>
        </div>

        {/* Right Column: Layered Editorial Milestones (7 cols) */}
        <div className="lg:col-span-7 space-y-12">
          
          {/* Narrative Overview */}
          <div className="space-y-4 text-base sm:text-lg text-white/90 font-sans leading-relaxed">
            <p>
              I am a <strong className="text-white font-bold underline decoration-[#B9FF66] decoration-2 underline-offset-4">Web Developer</strong> focused on building accessible, high-performance web applications and clean digital interfaces.
            </p>
            <p className="text-sm sm:text-base text-white/80">
              Currently interning at <strong className="text-white font-semibold">PT Asuransi Tugu Pratama Indonesia</strong> while completing the SIJA vocational curriculum at <strong className="text-white font-semibold">SMK TI BAZMA</strong>.
            </p>
          </div>

          {/* ── ANIMATED LAYERED MILESTONES (Distinct Visual Personalities) ── */}
          <div className="space-y-5">
            <h3 className="text-xs font-mono uppercase tracking-widest text-[#B9FF66] font-bold">
              Milestones &amp; Track Record
            </h3>

            {/* Milestone 01: Internship (Flagship Current Role) */}
            <div className="relative p-6 sm:p-8 rounded-3xl bg-white/10 backdrop-blur-md border border-white/25 hover:border-[#B9FF66] transition-all duration-300 space-y-4 shadow-xl group">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <span className="px-3 py-1 rounded-full bg-[#B9FF66] text-[#171918] font-mono font-black text-xs uppercase tracking-wider">
                    01 &bull; Active
                  </span>
                  <span className="text-xs font-mono text-white/70 uppercase">
                    Industry Internship
                  </span>
                </div>
                <span className="text-xs font-mono text-[#B9FF66] font-bold">
                  Nov 2025 &mdash; Present
                </span>
              </div>

              <div>
                <h4 className="text-2xl sm:text-3xl font-black font-heading text-white group-hover:text-[#B9FF66] transition-colors">
                  Web Developer Intern
                </h4>
                <p className="text-base font-semibold text-white/90 font-sans mt-0.5">
                  PT Asuransi Tugu Pratama Indonesia
                </p>
              </div>

              <p className="text-sm text-white/80 font-sans leading-relaxed">
                Contributing to enterprise web application interface workflows, developing clean and responsive component architectures, and collaborating on corporate frontend systems.
              </p>

              <div className="flex flex-wrap gap-2 pt-1">
                {["Frontend Workflows", "Responsive Components", "Enterprise Web Apps"].map((tag) => (
                  <span
                    key={tag}
                    className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-white/10 border border-white/15 text-white/90"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Milestone 02: Education (Vocational Program) */}
            <div className="relative p-6 sm:p-8 rounded-3xl bg-white/[0.07] backdrop-blur-md border border-white/15 hover:border-white/35 transition-all duration-300 space-y-4 shadow-lg group">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <span className="px-3 py-1 rounded-full bg-white/20 text-white font-mono font-bold text-xs uppercase tracking-wider">
                    02 &bull; Vocational
                  </span>
                  <span className="text-xs font-mono text-white/70 uppercase">
                    Major: SIJA
                  </span>
                </div>
                <span className="text-xs font-mono text-white/70">
                  SMK TI BAZMA
                </span>
              </div>

              <div>
                <h4 className="text-xl sm:text-2xl font-bold font-heading text-white">
                  Information Systems, Networking, and Applications
                </h4>
                <p className="text-sm font-semibold text-white/80 font-sans mt-0.5">
                  SMK TI BAZMA
                </p>
              </div>

              <p className="text-sm text-white/75 font-sans leading-relaxed">
                Specialized vocational program covering full web application engineering, database administration, server architectures, and network systems.
              </p>

              <div className="flex flex-wrap gap-2 pt-1">
                {["Web Engineering", "PostgreSQL & Database Systems", "Network Architecture"].map((tag) => (
                  <span
                    key={tag}
                    className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-white/80"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Milestone 03: Leadership (Student Council President) */}
            <div className="relative p-6 sm:p-8 rounded-3xl bg-white/[0.07] backdrop-blur-md border border-white/15 hover:border-white/35 transition-all duration-300 space-y-4 shadow-lg group">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <span className="px-3 py-1 rounded-full bg-white/20 text-white font-mono font-bold text-xs uppercase tracking-wider">
                    03 &bull; Governance
                  </span>
                  <span className="text-xs font-mono text-white/70 uppercase">
                    Elected Leadership
                  </span>
                </div>
                <span className="text-xs font-mono text-white/70">
                  2024 &mdash; 2025
                </span>
              </div>

              <div>
                <h4 className="text-xl sm:text-2xl font-bold font-heading text-white">
                  Student Council President (Ketua OSIS)
                </h4>
                <p className="text-sm font-semibold text-white/80 font-sans mt-0.5">
                  SMK TI BAZMA
                </p>
              </div>

              <p className="text-sm text-white/75 font-sans leading-relaxed">
                Led student governance, cross-organizational event planning, team management, and inter-school academic coordination.
              </p>

              <div className="flex flex-wrap gap-2 pt-1">
                {["Executive Leadership", "Event Coordination", "Team Governance"].map((tag) => (
                  <span
                    key={tag}
                    className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-white/80"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>

      {/* ── TECHNICAL COMPETENCIES: Kinetic Technical Stream ── */}
      <div className="relative z-10 mt-28 pt-12 border-t border-white/20 space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div className="space-y-1">
            <span className="text-xs font-mono uppercase tracking-widest text-[#B9FF66] font-bold">
              Engineering Tooling
            </span>
            <h3 className="text-2xl sm:text-4xl font-black font-display uppercase tracking-tight text-white">
              Technical <span className="font-serif italic font-light lowercase text-[#B9FF66]">competencies</span>
            </h3>
          </div>
          <p className="text-xs font-mono text-white/70 uppercase tracking-wider">
            Verified Production Technologies
          </p>
        </div>

        {/* 3 Dynamic Stream Rows */}
        <div className="space-y-4">
          
          {/* Stream 1: Frontend */}
          <div className="p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <span className="text-xs font-mono uppercase tracking-widest text-[#B9FF66] font-bold shrink-0 md:w-44">
              Frontend &bull; Interface
            </span>
            <div className="flex items-center flex-wrap gap-2">
              {frontendSkills.map((skill) => (
                <span
                  key={skill}
                  className="px-3.5 py-1.5 rounded-xl bg-white/15 text-white font-mono text-xs font-medium border border-white/20 hover:border-[#B9FF66] hover:bg-[#B9FF66] hover:text-[#171918] transition-all duration-200 cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Stream 2: Backend & Database */}
          <div className="p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <span className="text-xs font-mono uppercase tracking-widest text-[#E98B45] font-bold shrink-0 md:w-44">
              Backend &bull; Architecture
            </span>
            <div className="flex items-center flex-wrap gap-2">
              {backendSkills.map((skill) => (
                <span
                  key={skill}
                  className="px-3.5 py-1.5 rounded-xl bg-white/15 text-white font-mono text-xs font-medium border border-white/20 hover:border-[#E98B45] hover:bg-[#E98B45] hover:text-[#171918] transition-all duration-200 cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Stream 3: Workflow & Systems */}
          <div className="p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <span className="text-xs font-mono uppercase tracking-widest text-white/80 font-bold shrink-0 md:w-44">
              Workflow &bull; Standards
            </span>
            <div className="flex items-center flex-wrap gap-2">
              {workflowSkills.map((skill) => (
                <span
                  key={skill}
                  className="px-3.5 py-1.5 rounded-xl bg-white/15 text-white font-mono text-xs font-medium border border-white/20 hover:border-white hover:bg-white hover:text-[#171918] transition-all duration-200 cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
