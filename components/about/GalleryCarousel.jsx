"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";

const PHOTOS = [
  { id: 1, src: "/gallery/1.png", alt: "Teamwork & vocational moments", aspect: "aspect-[4/5]" },
  { id: 2, src: "/gallery/2.png", alt: "Presentation & activities", aspect: "aspect-[16/10]" },
  { id: 3, src: "/gallery/3.JPG", alt: "Community & student life", aspect: "aspect-[4/5]" },
  { id: 4, src: "/gallery/4.jpg", alt: "SMK TI BAZMA event", aspect: "aspect-[16/11]" },
  { id: 5, src: "/gallery/5.jpeg", alt: "Campus & collaboration", aspect: "aspect-[4/5]" },
  { id: 6, src: "/gallery/6.png", alt: "Workshop & leadership", aspect: "aspect-[16/10]" },
  { id: 7, src: "/gallery/7.png", alt: "Organization & student council", aspect: "aspect-[4/5]" },
];

export default function GalleryCarousel() {
  const containerRef = useRef(null);
  const shouldReduceMotion = useReducedMotion();

  // Track vertical scroll across the track
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Photo 1: Top-left trajectory
  const p1X = useTransform(scrollYProgress, [0, 0.45, 0.8, 1], shouldReduceMotion ? ["0vw", "0vw", "0vw", "0vw"] : ["0vw", "-30vw", "-20vw", "-10vw"]);
  const p1Y = useTransform(scrollYProgress, [0, 0.45, 0.8, 1], shouldReduceMotion ? ["0vh", "0vh", "0vh", "0vh"] : ["0vh", "-22vh", "-14vh", "-6vh"]);
  const p1Rotate = useTransform(scrollYProgress, [0, 0.5, 1], shouldReduceMotion ? [0, 0, 0] : [-8, -14, -5]);
  const p1Scale = useTransform(scrollYProgress, [0, 0.5, 1], shouldReduceMotion ? [1, 1, 1] : [0.95, 1.05, 1]);

  // Photo 2: Top-right trajectory
  const p2X = useTransform(scrollYProgress, [0, 0.48, 0.8, 1], shouldReduceMotion ? ["0vw", "0vw", "0vw", "0vw"] : ["0vw", "31vw", "22vw", "12vw"]);
  const p2Y = useTransform(scrollYProgress, [0, 0.48, 0.8, 1], shouldReduceMotion ? ["0vh", "0vh", "0vh", "0vh"] : ["0vh", "-20vh", "-12vh", "-4vh"]);
  const p2Rotate = useTransform(scrollYProgress, [0, 0.5, 1], shouldReduceMotion ? [0, 0, 0] : [7, 12, 4]);
  const p2Scale = useTransform(scrollYProgress, [0, 0.5, 1], shouldReduceMotion ? [1, 1, 1] : [0.95, 1.04, 0.98]);

  // Photo 3: Mid-left wide trajectory
  const p3X = useTransform(scrollYProgress, [0, 0.5, 0.8, 1], shouldReduceMotion ? ["0vw", "0vw", "0vw", "0vw"] : ["0vw", "-36vw", "-26vw", "-14vw"]);
  const p3Y = useTransform(scrollYProgress, [0, 0.5, 0.8, 1], shouldReduceMotion ? ["0vh", "0vh", "0vh", "0vh"] : ["0vh", "6vh", "4vh", "0vh"]);
  const p3Rotate = useTransform(scrollYProgress, [0, 0.5, 1], shouldReduceMotion ? [0, 0, 0] : [-4, -8, -2]);
  const p3Scale = useTransform(scrollYProgress, [0, 0.5, 1], shouldReduceMotion ? [1, 1, 1] : [1, 1.08, 1.02]);

  // Photo 4: Bottom-left trajectory
  const p4X = useTransform(scrollYProgress, [0, 0.52, 0.8, 1], shouldReduceMotion ? ["0vw", "0vw", "0vw", "0vw"] : ["0vw", "-15vw", "-10vw", "-5vw"]);
  const p4Y = useTransform(scrollYProgress, [0, 0.52, 0.8, 1], shouldReduceMotion ? ["0vh", "0vh", "0vh", "0vh"] : ["0vh", "26vh", "18vh", "8vh"]);
  const p4Rotate = useTransform(scrollYProgress, [0, 0.5, 1], shouldReduceMotion ? [0, 0, 0] : [9, 4, 1]);
  const p4Scale = useTransform(scrollYProgress, [0, 0.5, 1], shouldReduceMotion ? [1, 1, 1] : [0.92, 1.05, 0.96]);

  // Photo 5: Bottom-right trajectory
  const p5X = useTransform(scrollYProgress, [0, 0.46, 0.8, 1], shouldReduceMotion ? ["0vw", "0vw", "0vw", "0vw"] : ["0vw", "22vw", "16vw", "7vw"]);
  const p5Y = useTransform(scrollYProgress, [0, 0.46, 0.8, 1], shouldReduceMotion ? ["0vh", "0vh", "0vh", "0vh"] : ["0vh", "26vh", "16vh", "7vh"]);
  const p5Rotate = useTransform(scrollYProgress, [0, 0.5, 1], shouldReduceMotion ? [0, 0, 0] : [-6, -11, -3]);
  const p5Scale = useTransform(scrollYProgress, [0, 0.5, 1], shouldReduceMotion ? [1, 1, 1] : [0.96, 1.04, 0.98]);

  // Photo 6: Mid-far-right trajectory
  const p6X = useTransform(scrollYProgress, [0, 0.5, 0.8, 1], shouldReduceMotion ? ["0vw", "0vw", "0vw", "0vw"] : ["0vw", "37vw", "26vw", "13vw"]);
  const p6Y = useTransform(scrollYProgress, [0, 0.5, 0.8, 1], shouldReduceMotion ? ["0vh", "0vh", "0vh", "0vh"] : ["0vh", "-2vh", "0vh", "0vh"]);
  const p6Rotate = useTransform(scrollYProgress, [0, 0.5, 1], shouldReduceMotion ? [0, 0, 0] : [3, 13, 5]);
  const p6Scale = useTransform(scrollYProgress, [0, 0.5, 1], shouldReduceMotion ? [1, 1, 1] : [0.98, 1.08, 1.02]);

  // Photo 7: Top-center trajectory
  const p7X = useTransform(scrollYProgress, [0, 0.44, 0.8, 1], shouldReduceMotion ? ["0vw", "0vw", "0vw", "0vw"] : ["0vw", "4vw", "2vw", "0vw"]);
  const p7Y = useTransform(scrollYProgress, [0, 0.44, 0.8, 1], shouldReduceMotion ? ["0vh", "0vh", "0vh", "0vh"] : ["0vh", "-28vh", "-18vh", "-8vh"]);
  const p7Rotate = useTransform(scrollYProgress, [0, 0.5, 1], shouldReduceMotion ? [0, 0, 0] : [-10, -2, -5]);
  const p7Scale = useTransform(scrollYProgress, [0, 0.5, 1], shouldReduceMotion ? [1, 1, 1] : [0.94, 1.02, 0.95]);

  const titleScale = useTransform(scrollYProgress, [0, 0.35, 0.7, 1], [0.94, 1.03, 1, 0.95]);
  const titleOpacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.8, 1, 1, 0.6]);

  const photoMotions = [
    { x: p1X, y: p1Y, rotate: p1Rotate, scale: p1Scale, zIndex: 12 },
    { x: p2X, y: p2Y, rotate: p2Rotate, scale: p2Scale, zIndex: 14 },
    { x: p3X, y: p3Y, rotate: p3Rotate, scale: p3Scale, zIndex: 18 },
    { x: p4X, y: p4Y, rotate: p4Rotate, scale: p4Scale, zIndex: 16 },
    { x: p5X, y: p5Y, rotate: p5Rotate, scale: p5Scale, zIndex: 13 },
    { x: p6X, y: p6Y, rotate: p6Rotate, scale: p6Scale, zIndex: 17 },
    { x: p7X, y: p7Y, rotate: p7Rotate, scale: p7Scale, zIndex: 15 },
  ];

  return (
    <section
      ref={containerRef}
      className="relative h-[220vh] bg-[#191919] text-[#F5F5F0] overflow-visible transition-colors duration-300"
    >
      {/* ── PINNED VIEWPORT ── */}
      <div className="sticky top-0 h-screen w-full flex flex-col justify-between items-center overflow-hidden px-6 md:px-12 lg:px-20 py-8">
        
        {/* Top Header */}
        <div className="w-full flex items-center justify-between text-xs font-mono uppercase tracking-widest text-[#777873] z-20">
          <span className="text-white">Moments &amp; Activities</span>
          <span className="hidden sm:inline-block">Scroll to disperse collage</span>
          <span>SMK TI BAZMA &bull; Life</span>
        </div>

        {/* ── SCATTER CANVAS ── */}
        <div className="relative w-full flex-1 flex items-center justify-center">
          
          {/* Central Narrative */}
          <motion.div
            style={{ scale: titleScale, opacity: titleOpacity }}
            className="text-center z-0 max-w-xl px-4 pointer-events-none select-none space-y-3"
          >
            <span className="text-xs font-mono tracking-widest uppercase text-[#777873] block">
              Beyond Terminal Screens
            </span>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-black font-display uppercase tracking-tight text-white leading-[0.95]">
              Life beyond
              <br />
              <span className="font-serif italic font-normal text-white/70 lowercase">
                the code
              </span>
            </h2>
            <p className="text-[#777873] text-xs sm:text-sm font-sans max-w-md mx-auto leading-relaxed">
              Student leadership, vocational collaboration, seminars, and real experiences shaping character beyond syntax.
            </p>
          </motion.div>

          {/* ── 7 PHOTOS ── */}
          {PHOTOS.map((photo, i) => {
            const m = photoMotions[i];

            return (
              <motion.div
                key={photo.id}
                style={{
                  x: m.x,
                  y: m.y,
                  rotate: m.rotate,
                  scale: m.scale,
                  zIndex: m.zIndex,
                }}
                whileHover={{
                  scale: 1.14,
                  rotate: 0,
                  zIndex: 50,
                  transition: { duration: 0.2 },
                }}
                className={`absolute w-[170px] sm:w-[210px] md:w-[250px] lg:w-[270px] ${photo.aspect} rounded-2xl overflow-hidden border border-white/10 bg-[#242624] shadow-xl cursor-pointer select-none`}
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  sizes="(max-width: 768px) 210px, 270px"
                  quality={80}
                  className="object-cover filter contrast-[1.02]"
                />
              </motion.div>
            );
          })}

        </div>

        {/* Bottom Status */}
        <div className="w-full flex items-center justify-between text-xs font-mono text-[#777873] z-20 pt-2 border-t border-white/10">
          <span>Interactive scatter</span>
          <span className="hidden sm:inline-block">Continuous vertical scrolling controls dispersion</span>
          <span>07 Photos</span>
        </div>

      </div>
    </section>
  );
}
