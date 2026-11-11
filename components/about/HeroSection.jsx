"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Sparkles, Terminal, Compass, CheckCircle2 } from "lucide-react";

export default function HeroSection() {
  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <motion.section
      id="about"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      className="py-12 md:py-20 select-none bg-background text-foreground"
    >
      {/* Editorial Header Bar */}
      <div className="w-full flex justify-between items-center text-[10px] sm:text-xs uppercase font-mono font-bold tracking-[0.25em] text-muted-foreground border-b border-border/80 pb-5 mb-12">
        <motion.span variants={itemVariants}>
          [ 03 // ABOUT THE DEVELOPER ]
        </motion.span>
        <motion.span
          variants={itemVariants}
          className="text-right font-mono text-[9px] sm:text-[10px] tracking-widest text-muted-foreground/70 hidden sm:inline-block"
        >
          SMK TI BAZMA • TUGU PRATAMA INTERN
        </motion.span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Left Column: Portrait Frame with Agency Styling (5 cols) */}
        <motion.div
          variants={itemVariants}
          className="lg:col-span-5 flex justify-center"
        >
          <div className="relative w-full max-w-[380px] aspect-[4/5] rounded-2xl bg-card border border-border p-3 shadow-lg group hover:border-primary/40 transition-all duration-500">
            {/* Corner accents */}
            <span className="absolute top-2 left-2 w-2.5 h-2.5 border-t-2 border-l-2 border-primary/50" />
            <span className="absolute top-2 right-2 w-2.5 h-2.5 border-t-2 border-r-2 border-primary/50" />
            <span className="absolute bottom-2 left-2 w-2.5 h-2.5 border-b-2 border-l-2 border-primary/50" />
            <span className="absolute bottom-2 right-2 w-2.5 h-2.5 border-b-2 border-r-2 border-primary/50" />

            <div className="relative w-full h-full rounded-xl overflow-hidden bg-secondary/30 flex items-end justify-center">
              <Image
                src="/profile.png"
                alt="Moh. Fakhri Rizkian Portrait"
                width={360}
                height={450}
                className="w-full h-auto object-contain max-h-[95%] transition-transform duration-700 ease-out group-hover:scale-[1.03] filter contrast-[1.02]"
                quality={85}
              />
            </div>

            {/* Bottom Caption Pill */}
            <div className="absolute bottom-5 inset-x-5 z-20 flex items-center justify-between px-3 py-1.5 rounded-lg bg-background/90 backdrop-blur-md border border-border/80 text-[10px] font-mono">
              <span className="font-bold text-foreground">MOH. FAKHRI RIZKIAN</span>
              <span className="text-primary font-bold">FRONTEND DEV</span>
            </div>
          </div>
        </motion.div>

        {/* Right Column: Narrative Story & Core Principles (7 cols) */}
        <div className="lg:col-span-7 space-y-8 text-left">
          <motion.div variants={itemVariants} className="space-y-4">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tighter uppercase font-display text-foreground leading-[0.92]">
              Driven by curiosity,
              <br />
              <span className="font-serif italic font-light lowercase text-primary">
                grounded
              </span>{" "}
              in clean code.
            </h2>

            <div className="w-16 h-[2px] bg-primary" />
          </motion.div>

          <motion.div variants={itemVariants} className="space-y-5 text-muted-foreground font-sans text-sm sm:text-base leading-relaxed">
            <p>
              I am a Frontend Developer based in Indonesia, currently an Information Systems, Networking, and Applications student at{" "}
              <strong className="text-foreground font-semibold">SMK TI BAZMA</strong> and gaining industry experience as an intern at{" "}
              <strong className="text-foreground font-semibold">PT Asuransi Tugu Pratama Indonesia</strong>.
            </p>

            <p>
              My development philosophy focuses on building dependable, accessible, and fast web applications. I bridge the gap between design concepts and production code using <strong className="text-foreground font-medium">React, Next.js, and modern CSS</strong>, paying close attention to component modularity, responsiveness across mobile and desktop screens, and clean git collaboration.
            </p>

            <p>
              Beyond technical coursework, serving as <strong className="text-foreground font-medium">Student Council President (Ketua OSIS)</strong> taught me structured communication, active listening, and cross-team coordination — strengths that directly benefit daily engineering teamwork.
            </p>
          </motion.div>

          {/* Core Principles Grid */}
          <motion.div variants={itemVariants} className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            <div className="p-4 rounded-xl bg-card border border-border flex items-start gap-3">
              <div className="p-2 rounded-lg bg-secondary text-primary shrink-0">
                <Terminal size={16} />
              </div>
              <div>
                <h3 className="font-heading font-bold text-sm text-foreground mb-1">
                  Semantic &amp; Modern
                </h3>
                <p className="text-xs text-muted-foreground font-sans leading-relaxed">
                  Committed to standards-compliant HTML, modular CSS, and clean JavaScript architecture.
                </p>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-card border border-border flex items-start gap-3">
              <div className="p-2 rounded-lg bg-secondary text-primary shrink-0">
                <Compass size={16} />
              </div>
              <div>
                <h3 className="font-heading font-bold text-sm text-foreground mb-1">
                  User-Centric &amp; Accessible
                </h3>
                <p className="text-xs text-muted-foreground font-sans leading-relaxed">
                  Crafting smooth interfaces with intuitive layouts, readable contrast, and fast loading times.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
