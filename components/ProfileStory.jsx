"use client";

import Image from "next/image";

export default function ProfileStory() {
  const skills = [
    {
      category: "Frontend Development",
      items: ["HTML5", "CSS3", "JavaScript", "React", "Next.js", "Vue.js", "Tailwind CSS"],
    },
    {
      category: "Backend & Database",
      items: ["PHP", "Laravel", "PostgreSQL", "REST APIs"],
    },
    {
      category: "Workflow & Tools",
      items: ["Git", "GitHub", "Responsive Design", "Web Standards"],
    },
  ];

  return (
    <section
      id="profile"
      className="py-24 md:py-32 w-full px-6 md:px-12 lg:px-20 xl:px-28 bg-[#F5F5F0] text-[#191919] border-t border-[#191919]/10"
    >
      {/* ── SECTION HEADER ── */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-20 pb-8 border-b border-[#191919]/10">
        <div className="space-y-3">
          <span className="text-xs font-mono uppercase tracking-widest text-[#777873]">
            About &amp; Background
          </span>
          <h2 className="text-4xl sm:text-6xl md:text-7xl font-black font-display uppercase tracking-tight text-[#191919] leading-[0.9]">
            My journey <span className="font-serif italic font-normal text-[#191919]/70 lowercase">&amp; experience</span>
          </h2>
        </div>

        <p className="text-[#777873] text-sm sm:text-base font-sans max-w-md leading-relaxed">
          Vocational education in SIJA at SMK TI BAZMA paired with practical web application development in an enterprise internship.
        </p>
      </div>

      {/* ── EDITORIAL GRID ── */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        
        {/* Left Column: Natural Photographic Portrait (5 cols) */}
        <div className="lg:col-span-5 relative">
          <div className="relative w-full max-w-[400px] mx-auto aspect-[4/5] rounded-[2rem] bg-[#E9E9E4] border border-[#191919]/10 overflow-hidden shadow-sm p-4 flex flex-col justify-between">
            <div className="relative w-full h-[90%] flex items-end justify-center">
              <Image
                src="/profile.png"
                alt="Moh. Fakhri Rizkian"
                width={400}
                height={500}
                quality={85}
                className="w-full h-auto object-contain max-h-[98%] filter contrast-[1.02]"
              />
            </div>

            <div className="pt-3 px-2 flex items-center justify-between text-xs font-mono text-[#777873] border-t border-[#191919]/10">
              <span className="text-[#191919] font-medium">Moh. Fakhri Rizkian</span>
              <span>Web Developer</span>
            </div>
          </div>
        </div>

        {/* Right Column: Narrative, Editorial Timeline & Skills (7 cols) */}
        <div className="lg:col-span-7 space-y-16">
          
          {/* Brief Factual Intro */}
          <div className="space-y-3 text-base sm:text-lg text-[#191919]/80 font-sans leading-relaxed">
            <p>
              I am a <strong className="text-[#191919] font-semibold">Web Developer</strong> and student in Information Systems, Networking, and Applications (SIJA) at <strong className="text-[#191919] font-semibold">SMK TI BAZMA</strong>.
            </p>
            <p className="text-sm sm:text-base text-[#777873]">
              Currently undertaking an internship at <strong className="text-[#191919] font-semibold">PT Asuransi Tugu Pratama Indonesia</strong>, collaborating on web application interface workflows and building responsive, accessible components.
            </p>
          </div>

          {/* ── EDITORIAL VERTICAL TIMELINE ── */}
          <div className="space-y-6">
            <h3 className="text-xs font-mono uppercase tracking-widest text-[#777873]">
              Experience &amp; Milestones
            </h3>

            <div className="border-l-2 border-[#191919]/15 pl-6 sm:pl-8 space-y-10 relative">
              
              {/* Item 1: Internship */}
              <div className="relative space-y-2">
                <div className="absolute -left-[31px] sm:-left-[39px] top-1 w-3.5 h-3.5 rounded-full bg-[#191919] border-2 border-[#F5F5F0]" />
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                  <h4 className="text-xl sm:text-2xl font-bold font-heading text-[#191919]">
                    Web Developer Intern
                  </h4>
                  <span className="text-xs font-mono text-[#777873]">
                    Nov 2025 &mdash; Present
                  </span>
                </div>
                <p className="text-sm font-medium text-[#191919]">
                  PT Asuransi Tugu Pratama Indonesia
                </p>
                <p className="text-sm text-[#777873] leading-relaxed pt-1">
                  Frontend interface development and responsive web application components within an enterprise corporate environment.
                </p>
              </div>

              {/* Item 2: Education */}
              <div className="relative space-y-2">
                <div className="absolute -left-[31px] sm:-left-[39px] top-1 w-3.5 h-3.5 rounded-full bg-[#777873] border-2 border-[#F5F5F0]" />
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                  <h4 className="text-xl sm:text-2xl font-bold font-heading text-[#191919]">
                    SIJA Program Student
                  </h4>
                  <span className="text-xs font-mono text-[#777873]">
                    Vocational Education
                  </span>
                </div>
                <p className="text-sm font-medium text-[#191919]">
                  SMK TI BAZMA
                </p>
                <p className="text-sm text-[#777873] leading-relaxed pt-1">
                  Curriculum focused on web development, relational database systems, network engineering, and system administration.
                </p>
              </div>

              {/* Item 3: Leadership */}
              <div className="relative space-y-2">
                <div className="absolute -left-[31px] sm:-left-[39px] top-1 w-3.5 h-3.5 rounded-full bg-[#777873] border-2 border-[#F5F5F0]" />
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                  <h4 className="text-xl sm:text-2xl font-bold font-heading text-[#191919]">
                    Student Council President (Ketua OSIS)
                  </h4>
                  <span className="text-xs font-mono text-[#777873]">
                    2024 &mdash; 2025
                  </span>
                </div>
                <p className="text-sm font-medium text-[#191919]">
                  SMK TI BAZMA
                </p>
                <p className="text-sm text-[#777873] leading-relaxed pt-1">
                  Student organization governance, event coordination, project management, and team leadership.
                </p>
              </div>

            </div>
          </div>

          {/* ── TECHNICAL COMPETENCIES: EDITORIAL CATEGORY TILES ── */}
          <div className="space-y-6 pt-6 border-t border-[#191919]/10">
            <h3 className="text-xs font-mono uppercase tracking-widest text-[#777873]">
              Technical Skills &amp; Tools
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {skills.map((grp) => (
                <div key={grp.category} className="space-y-3">
                  <span className="text-xs font-mono uppercase tracking-wider text-[#191919] font-semibold block">
                    {grp.category}
                  </span>
                  <ul className="space-y-1.5 text-xs font-mono text-[#777873]">
                    {grp.items.map((item) => (
                      <li
                        key={item}
                        className="py-1 px-2.5 rounded-md bg-[#E9E9E4] text-[#191919] hover:bg-[#B7F36B] transition-colors duration-150 inline-block mr-1.5 mb-1.5"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
