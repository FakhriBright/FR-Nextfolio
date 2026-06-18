"use client";
import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import TransitionProvider from "@/components/TransitionProvider";
import Link from "next/link";
import DownloadCV from "@/components/DownloadCV";
import ProfileFrame from "@/components/ProfileFrame";
import HeroSection from "@/components/about/HeroSection";
import CertificationsGrid from "@/components/about/CertificationsGrid";
import ProjectsShowcase from "@/components/about/ProjectsShowcase";
import GalleryCarousel from "@/components/about/GalleryCarousel";
import EducationCarousel from "@/components/about/EducationCarousel";

// Reusable scroll-reveal wrapper
function ScrollReveal({ children, delay = 0, className = "" }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
      transition={{
        duration: 0.9,
        ease: [0.16, 1, 0.3, 1],
        delay,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// Animated section divider with scroll progress indicator
function SectionDivider({ label }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scaleX: 0 }}
      animate={isInView ? { opacity: 1, scaleX: 1 } : { opacity: 0, scaleX: 0 }}
      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
      style={{ transformOrigin: "left" }}
      className="w-full flex items-center gap-6 py-12"
    >
      <div className="h-[1px] flex-1 bg-gradient-to-r from-primary/40 via-border/60 to-transparent" />
      <span className="text-[9px] font-mono tracking-[0.3em] text-muted-foreground uppercase shrink-0">
        {label}
      </span>
      <div className="h-[1px] flex-1 bg-gradient-to-l from-primary/40 via-border/60 to-transparent" />
    </motion.div>
  );
}

export default function HomePage() {
  const words = ["developer", "designer", "engineer"];
  const [wordIndex, setWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);

  const aboutRef = useRef(null);

  const scrollToAbout = () => {
    aboutRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  useEffect(() => {
    let timer;
    const activeWord = words[wordIndex];

    const handleType = () => {
      if (!isDeleting) {
        setCurrentText(activeWord.substring(0, currentText.length + 1));
        setTypingSpeed(100);

        if (currentText === activeWord) {
          timer = setTimeout(() => setIsDeleting(true), 2000);
          return;
        }
      } else {
        setCurrentText(activeWord.substring(0, currentText.length - 1));
        setTypingSpeed(50);

        if (currentText === "") {
          setIsDeleting(false);
          setWordIndex((prev) => (prev + 1) % words.length);
          setTypingSpeed(300);
          return;
        }
      }

      timer = setTimeout(handleType, typingSpeed);
    };

    timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, wordIndex, typingSpeed]);

  return (
    <TransitionProvider>
      {/* ============================================================ */}
      {/* HERO SECTION                                                  */}
      {/* ============================================================ */}
      <main className="relative overflow-hidden max-w-7xl mx-auto px-6 py-16 md:py-24 min-h-[90vh] flex items-center">
        {/* Ambient Grid overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808006_1px,transparent_1px),linear-gradient(to_bottom,#80808006_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center relative z-10 w-full">
          {/* LEFT SECTION — TEXT (7 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 space-y-8 text-left"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-border bg-card/65 backdrop-blur-md text-[10px] font-bold tracking-widest text-muted-foreground uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              Creative Developer
            </div>

            <div className="space-y-4">
              <h1 className="text-6xl sm:text-7xl lg:text-8xl xl:text-9xl font-black font-display text-foreground leading-[0.85] tracking-tighter uppercase">
                CREATIVE
                <br />
                <span className="font-serif italic font-light lowercase text-primary">
                  {currentText}
                </span>
                <span className="inline-block w-[3px] h-[0.75em] bg-primary ml-1 align-baseline animate-pulse" />
              </h1>

              <div className="flex items-center gap-4">
                <div className="h-[1px] w-12 bg-primary/50" />
                <h2 className="text-xs uppercase font-bold tracking-[0.25em] text-foreground/80 font-heading">
                  Moh. Fakhri Rizkian
                </h2>
              </div>
            </div>

            <p className="text-muted-foreground max-w-xl text-base md:text-lg leading-relaxed font-sans font-normal">
              An Information Systems, Networking, and Applications student at
              <span className="font-semibold text-foreground"> SMK TI BAZMA</span>, passionate about
              <span className="font-semibold text-primary"> UI/UX Design</span> and modern web development.
              I specialize in crafting high-end, responsive interactive web interfaces using
              <span className="font-semibold text-foreground"> React &amp; Next.js</span>, and scalable backends with
              <span className="font-semibold text-accent"> Laravel</span>.
            </p>

            {/* CTA BUTTONS */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <DownloadCV />

              <motion.button
                onClick={scrollToAbout}
                whileHover={{ scale: 1.03, y: -1 }}
                whileTap={{ scale: 0.98 }}
                className="px-6 py-3.5 rounded-none border border-border bg-card/50 hover:bg-secondary/80 text-foreground transition-all duration-300 font-heading text-xs font-bold tracking-widest uppercase flex items-center gap-2"
              >
                Get Started
                <motion.span
                  className="text-primary"
                  animate={{ y: [0, 4, 0] }}
                  transition={{ repeat: Infinity, duration: 1.4, ease: "easeInOut" }}
                >
                  ↓
                </motion.span>
              </motion.button>
            </div>
          </motion.div>

          {/* RIGHT SECTION — CREATIVE PROFILE FRAME (5 cols) */}
          <div className="lg:col-span-5 w-full flex justify-center lg:justify-end relative z-10">
            <ProfileFrame />
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer"
          onClick={scrollToAbout}
        >
          <span className="text-[8px] font-mono tracking-[0.3em] text-muted-foreground uppercase">Scroll</span>
          <motion.div
            className="w-[1px] h-10 bg-gradient-to-b from-primary/60 to-transparent"
            animate={{ scaleY: [0, 1, 0], opacity: [0, 1, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            style={{ transformOrigin: "top" }}
          />
        </motion.div>
      </main>

      {/* ============================================================ */}
      {/* ABOUT SECTIONS — Scroll-revealed                              */}
      {/* ============================================================ */}
      <div ref={aboutRef} className="max-w-7xl mx-auto px-6 pb-24 space-y-0">

        {/* ── DIVIDER: ABOUT ── */}
        <SectionDivider label="[ About Me ]" />

        {/* About Hero */}
        <ScrollReveal delay={0}>
          <HeroSection />
        </ScrollReveal>

        {/* ── DIVIDER: CREDENTIALS ── */}
        <SectionDivider label="[ Credentials & Achievements ]" />

        {/* Certifications */}
        <ScrollReveal delay={0}>
          <CertificationsGrid />
        </ScrollReveal>

        {/* ── DIVIDER: PROJECTS ── */}
        <SectionDivider label="[ Featured Creations ]" />

        {/* Projects Showcase */}
        <ScrollReveal delay={0}>
          <ProjectsShowcase />
        </ScrollReveal>

        {/* ── DIVIDER: GALLERY ── */}
        <SectionDivider label="[ Visual Gallery ]" />

        {/* Gallery */}
        <ScrollReveal delay={0}>
          <GalleryCarousel />
        </ScrollReveal>

        {/* ── DIVIDER: EDUCATION ── */}
        <SectionDivider label="[ Academic Timeline ]" />

        {/* Education */}
        <ScrollReveal delay={0}>
          <EducationCarousel />
        </ScrollReveal>

        {/* Final CTA */}
        <ScrollReveal delay={0} className="pt-8">
          <div className="border border-border/40 bg-card/20 backdrop-blur-md p-10 md:p-16 text-center relative overflow-hidden border-t-2 border-l-2 border-primary/20">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent pointer-events-none" />
            <span className="text-[9px] font-mono tracking-widest text-primary uppercase">[ Let's Work Together ]</span>
            <h2 className="text-4xl md:text-6xl font-black font-display uppercase tracking-tighter text-foreground mt-4 mb-4">
              Have a project
              <br />
              <span className="font-serif italic font-light lowercase text-primary">in mind?</span>
            </h2>
            <p className="text-muted-foreground font-sans text-sm md:text-base max-w-md mx-auto mb-8 leading-relaxed">
              I'm open to collaborations, freelance work, and new opportunities. Let's build something great together.
            </p>
            <Link href="/contact">
              <motion.button
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="px-10 py-4 bg-primary text-primary-foreground font-heading font-bold text-xs tracking-widest uppercase hover:bg-primary/90 transition-all duration-300"
              >
                Start a Conversation →
              </motion.button>
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </TransitionProvider>
  );
}
