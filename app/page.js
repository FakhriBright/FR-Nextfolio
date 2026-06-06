"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import TransitionProvider from "@/components/TransitionProvider";
import Link from "next/link";
import DownloadCV from "@/components/DownloadCV";
import ProfileFrame from "@/components/ProfileFrame";

export default function HomePage() {
  const words = ["developer", "designer", "engineer"];
  const [wordIndex, setWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);

  useEffect(() => {
    let timer;
    const activeWord = words[wordIndex];

    const handleType = () => {
      if (!isDeleting) {
        // Typing word
        setCurrentText(activeWord.substring(0, currentText.length + 1));
        setTypingSpeed(100);

        if (currentText === activeWord) {
          // Finished typing, pause then set to delete
          timer = setTimeout(() => setIsDeleting(true), 2000);
          return;
        }
      } else {
        // Deleting word
        setCurrentText(activeWord.substring(0, currentText.length - 1));
        setTypingSpeed(50);

        if (currentText === "") {
          // Finished deleting, shift to next word
          setIsDeleting(false);
          setWordIndex((prev) => (prev + 1) % words.length);
          setTypingSpeed(300); // short wait before typing next
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
      <main className="relative overflow-hidden max-w-7xl mx-auto px-6 py-16 md:py-24 min-h-[90vh] flex items-center">
        {/* Ambient Grid overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808006_1px,transparent_1px),linear-gradient(to_bottom,#80808006_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center relative z-10 w-full">
          {/* ========================= */}
          {/* LEFT SECTION — TEXT (7 cols) */}
          {/* ========================= */}
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
              <span className="font-semibold text-foreground"> React & Next.js</span>, and scalable backends with
              <span className="font-semibold text-accent"> Laravel</span>.
            </p>

            {/* CTA BUTTONS */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <DownloadCV />

              <Link href="/about">
                <motion.button
                  whileHover={{ scale: 1.03, y: -1 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-6 py-3.5 rounded-none border border-border bg-card/50 hover:bg-secondary/80 text-foreground transition-all duration-300 font-heading text-xs font-bold tracking-widest uppercase flex items-center gap-2"
                >
                  Get Started
                  <span className="text-primary group-hover:translate-x-1 transition-transform">→</span>
                </motion.button>
              </Link>
            </div>
          </motion.div>

          {/* ========================= */}
          {/* RIGHT SECTION — CREATIVE PROFILE FRAME (5 cols) */}
          {/* ========================= */}
          <div className="lg:col-span-5 w-full flex justify-center lg:justify-end relative z-10">
            <ProfileFrame />
          </div>
        </div>
      </main>
    </TransitionProvider>
  );
}
