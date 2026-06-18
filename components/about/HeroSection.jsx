"use client";

import { motion } from "framer-motion";

export default function HeroSection() {
  const skills = [
    "HTML", "CSS", "JavaScript", "React", "Next.js", "Laravel", "Tailwind CSS",
    "Figma", "UI/UX Design", "Firebase", "GitHub", "Node.js", "Express.js",
    "Arduino", "C++", "Public Speaking", "Event Management"
  ];

  // Framer Motion Animation Variants for smooth fade-up
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <motion.section 
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={containerVariants}
      className="relative w-full flex flex-col items-center justify-between py-10 md:py-16 select-none bg-background text-foreground"
    >
      {/* 📐 Top Row Metadata Headers (Modern magazine design) */}
      <div className="w-full flex justify-between items-center text-[10px] sm:text-xs uppercase font-bold tracking-[0.25em] text-muted-foreground/80 border-b border-border/10 pb-5 mb-10 md:mb-16">
        <motion.span variants={itemVariants}>
          [ ABOUT ME ]
        </motion.span>
        <motion.span variants={itemVariants} className="text-right font-sans font-medium text-[9px] sm:text-[10px] tracking-widest text-muted-foreground/60 hidden sm:inline-block">
          Information Systems, Networking & Applications Student
        </motion.span>
      </div>

      {/* 🖼️ SECTION 1: Hero Cover Area */}
      <div className="relative w-full flex flex-col items-center justify-center min-h-[350px] sm:min-h-[450px] md:min-h-[500px]">
        
        {/* Giant background text: ABOUT (Fully visible, not cropped) */}
        <h1 className="absolute select-none pointer-events-none text-[15vw] font-black uppercase text-center leading-none tracking-tighter text-foreground/[0.04] dark:text-foreground/[0.025] z-0 font-display whitespace-nowrap">
          ABOUT
        </h1>

        {/* Circular line accents behind portrait for depth */}
        <div className="absolute w-[290px] h-[290px] sm:w-[380px] sm:h-[380px] md:w-[440px] md:h-[440px] border border-dashed border-primary/20 rounded-full animate-[spin_80s_linear_infinite] z-0 pointer-events-none" />
        <div className="absolute w-[240px] h-[240px] sm:w-[320px] sm:h-[320px] md:w-[380px] md:h-[380px] border border-cyan-500/10 rounded-full z-0 pointer-events-none" />
        <div className="absolute w-[340px] h-[340px] sm:w-[440px] sm:h-[440px] md:w-[500px] md:h-[500px] border border-border/15 rounded-full z-0 pointer-events-none" />

        {/* Large Portrait Image (Visual focal point) */}
        <motion.div
          variants={itemVariants}
          className="relative z-10 w-64 h-64 sm:w-80 sm:h-80 md:w-[400px] md:h-[400px] flex items-center justify-center group"
        >
          <img
            src="/profile.png"
            alt="Foto Profil Fakhri Rizkian"
            className="relative w-[95%] h-auto object-contain filter grayscale dark:brightness-95 contrast-105 group-hover:grayscale-0 transition-all duration-700 ease-out z-10"
          />
        </motion.div>
      </div>

      {/* Title / Name & Role Area (Below Hero Image, completely separate to prevent overlapping) */}
      <motion.div 
        variants={itemVariants}
        className="w-full text-center mt-8 md:mt-12 space-y-3 z-10"
      >
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tighter uppercase font-display text-foreground">
          Moh. Fakhri Rizkian
        </h2>
        <p className="text-xs sm:text-sm font-semibold tracking-wider font-heading uppercase text-[#F4A261]">
          Frontend Developer • UI/UX Enthusiast • Event Organizer
        </p>
        
        {/* Elegant thin divider line */}
        <div className="w-20 h-[1.5px] bg-[#F4A261] mx-auto mt-6" />
      </motion.div>

      {/* 📝 SECTION 2: Balanced Two-Column Introduction (Large whitespace, editorial styling) */}
      <motion.div
        variants={itemVariants}
        className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 pt-12 md:pt-16 border-t border-border/10 mt-12 md:mt-16 text-muted-foreground font-sans text-sm sm:text-base leading-relaxed text-left z-10"
      >
        {/* Left Column */}
        <div className="space-y-4">
          <h3 className="text-lg font-bold font-heading text-foreground uppercase tracking-widest border-l-2 border-[#F4A261] pl-3">
            Who Am I?
          </h3>
          <p className="pl-4">
            I am a final-year Information Systems, Networking, and Applications student at{" "}
            <span className="font-semibold text-foreground">SMK TI BAZMA</span> with a strong interest in
            frontend development and user experience design. I enjoy building interfaces that are visually engaging,
            responsive, and easy to use while continuously exploring modern web technologies.
          </p>
        </div>

        {/* Right Column */}
        <div className="space-y-4">
          <h3 className="text-lg font-bold font-heading text-foreground uppercase tracking-widest border-l-2 border-[#F4A261] pl-3">
            Beyond Development
          </h3>
          <p className="pl-4">
            Outside of development, I actively contribute to event organizing and collaborative initiatives.
            These experiences have helped me develop leadership, communication, teamwork, and project coordination
            skills that complement my technical background.
          </p>
        </div>
      </motion.div>

      {/* 🏷️ SECTION 3: Modern Skill Badges (Capsules) */}
      <motion.div
        variants={itemVariants}
        className="w-full flex flex-wrap gap-2 justify-center pt-10 border-t border-border/5 mt-10 md:mt-16 z-10"
      >
        {skills.map((skill, index) => (
          <span
            key={index}
            className="px-3.5 py-2 bg-card/45 border border-border/60 text-muted-foreground hover:text-[#F4A261] hover:border-[#F4A261]/50 hover:bg-[#F4A261]/5 font-heading font-semibold text-[10px] sm:text-xs uppercase tracking-wider transition-all duration-300 cursor-default shadow-sm hover:shadow-[#F4A261]/10 rounded-none"
          >
            {skill}
          </span>
        ))}
      </motion.div>
    </motion.section>
  );
}
