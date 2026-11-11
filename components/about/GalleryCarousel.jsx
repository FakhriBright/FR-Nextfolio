"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";

const PHOTOS = [
  { id: 1, src: "/gallery/1.png", alt: "Teamwork & vocational moments", aspect: "aspect-[4/5]", width: 220, height: 275 },
  { id: 2, src: "/gallery/2.png", alt: "Presentation & activities", aspect: "aspect-[16/10]", width: 270, height: 170 },
  { id: 3, src: "/gallery/3.JPG", alt: "Community & student life", aspect: "aspect-[4/5]", width: 230, height: 288 },
  { id: 4, src: "/gallery/4.jpg", alt: "SMK TI BAZMA event", aspect: "aspect-[16/11]", width: 260, height: 180 },
  { id: 5, src: "/gallery/5.jpeg", alt: "Campus & collaboration", aspect: "aspect-[4/5]", width: 215, height: 270 },
  { id: 6, src: "/gallery/6.png", alt: "Workshop & leadership", aspect: "aspect-[16/10]", width: 275, height: 172 },
  { id: 7, src: "/gallery/7.png", alt: "Organization & student council", aspect: "aspect-[4/5]", width: 225, height: 280 },
];

export default function GalleryCarousel() {
  const containerRef = useRef(null);
  const shouldReduceMotion = useReducedMotion();

  // Track vertical scroll across the 280vh track
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Photo 1: Top-left trajectory
  const p1X = useTransform(scrollYProgress, [0, 0.45, 0.8, 1], shouldReduceMotion ? ["0vw", "0vw", "0vw", "0vw"] : ["0vw", "-32vw", "-22vw", "-12vw"]);
  const p1Y = useTransform(scrollYProgress, [0, 0.45, 0.8, 1], shouldReduceMotion ? ["0vh", "0vh", "0vh", "0vh"] : ["0vh", "-24vh", "-16vh", "-8vh"]);
  const p1Rotate = useTransform(scrollYProgress, [0, 0.5, 1], shouldReduceMotion ? [0, 0, 0] : [-8, -15, -6]);
  const p1Scale = useTransform(scrollYProgress, [0, 0.5, 1], shouldReduceMotion ? [1, 1, 1] : [0.95, 1.08, 1]);

  // Photo 2: Top-right trajectory
  const p2X = useTransform(scrollYProgress, [0, 0.48, 0.8, 1], shouldReduceMotion ? ["0vw", "0vw", "0vw", "0vw"] : ["0vw", "33vw", "24vw", "14vw"]);
  const p2Y = useTransform(scrollYProgress, [0, 0.48, 0.8, 1], shouldReduceMotion ? ["0vh", "0vh", "0vh", "0vh"] : ["0vh", "-22vh", "-14vh", "-6vh"]);
  const p2Rotate = useTransform(scrollYProgress, [0, 0.5, 1], shouldReduceMotion ? [0, 0, 0] : [7, 14, 5]);
  const p2Scale = useTransform(scrollYProgress, [0, 0.5, 1], shouldReduceMotion ? [1, 1, 1] : [0.95, 1.05, 0.98]);

  // Photo 3: Mid-left wide trajectory
  const p3X = useTransform(scrollYProgress, [0, 0.5, 0.8, 1], shouldReduceMotion ? ["0vw", "0vw", "0vw", "0vw"] : ["0vw", "-38vw", "-28vw", "-16vw"]);
  const p3Y = useTransform(scrollYProgress, [0, 0.5, 0.8, 1], shouldReduceMotion ? ["0vh", "0vh", "0vh", "0vh"] : ["0vh", "6vh", "4vh", "0vh"]);
  const p3Rotate = useTransform(scrollYProgress, [0, 0.5, 1], shouldReduceMotion ? [0, 0, 0] : [-4, -9, -3]);
  const p3Scale = useTransform(scrollYProgress, [0, 0.5, 1], shouldReduceMotion ? [1, 1, 1] : [1, 1.12, 1.02]);

  // Photo 4: Bottom-left trajectory
  const p4X = useTransform(scrollYProgress, [0, 0.52, 0.8, 1], shouldReduceMotion ? ["0vw", "0vw", "0vw", "0vw"] : ["0vw", "-16vw", "-12vw", "-6vw"]);
  const p4Y = useTransform(scrollYProgress, [0, 0.52, 0.8, 1], shouldReduceMotion ? ["0vh", "0vh", "0vh", "0vh"] : ["0vh", "28vh", "20vh", "10vh"]);
  const p4Rotate = useTransform(scrollYProgress, [0, 0.5, 1], shouldReduceMotion ? [0, 0, 0] : [9, 5, 2]);
  const p4Scale = useTransform(scrollYProgress, [0, 0.5, 1], shouldReduceMotion ? [1, 1, 1] : [0.92, 1.06, 0.96]);

  // Photo 5: Bottom-right trajectory
  const p5X = useTransform(scrollYProgress, [0, 0.46, 0.8, 1], shouldReduceMotion ? ["0vw", "0vw", "0vw", "0vw"] : ["0vw", "24vw", "18vw", "8vw"]);
  const p5Y = useTransform(scrollYProgress, [0, 0.46, 0.8, 1], shouldReduceMotion ? ["0vh", "0vh", "0vh", "0vh"] : ["0vh", "28vh", "18vh", "8vh"]);
  const p5Rotate = useTransform(scrollYProgress, [0, 0.5, 1], shouldReduceMotion ? [0, 0, 0] : [-6, -13, -4]);
  const p5Scale = useTransform(scrollYProgress, [0, 0.5, 1], shouldReduceMotion ? [1, 1, 1] : [0.96, 1.04, 0.98]);

  // Photo 6: Mid-far-right trajectory
  const p6X = useTransform(scrollYProgress, [0, 0.5, 0.8, 1], shouldReduceMotion ? ["0vw", "0vw", "0vw", "0vw"] : ["0vw", "39vw", "28vw", "15vw"]);
  const p6Y = useTransform(scrollYProgress, [0, 0.5, 0.8, 1], shouldReduceMotion ? ["0vh", "0vh", "0vh", "0vh"] : ["0vh", "-2vh", "0vh", "0vh"]);
  const p6Rotate = useTransform(scrollYProgress, [0, 0.5, 1], shouldReduceMotion ? [0, 0, 0] : [3, 15, 6]);
  const p6Scale = useTransform(scrollYProgress, [0, 0.5, 1], shouldReduceMotion ? [1, 1, 1] : [0.98, 1.1, 1.02]);

  // Photo 7: Top-center trajectory
  const p7X = useTransform(scrollYProgress, [0, 0.44, 0.8, 1], shouldReduceMotion ? ["0vw", "0vw", "0vw", "0vw"] : ["0vw", "4vw", "2vw", "0vw"]);
  const p7Y = useTransform(scrollYProgress, [0, 0.44, 0.8, 1], shouldReduceMotion ? ["0vh", "0vh", "0vh", "0vh"] : ["0vh", "-32vh", "-22vh", "-10vh"]);
  const p7Rotate = useTransform(scrollYProgress, [0, 0.5, 1], shouldReduceMotion ? [0, 0, 0] : [-10, -2, -6]);
  const p7Scale = useTransform(scrollYProgress, [0, 0.5, 1], shouldReduceMotion ? [1, 1, 1] : [0.94, 1.02, 0.95]);

  // Central title fade and scale
  const titleScale = useTransform(scrollYProgress, [0, 0.35, 0.7, 1], [0.92, 1.05, 1, 0.9]);
  const titleOpacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.7, 1, 1, 0.5]);

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
      className="relative h-[280vh] bg-[#171918] text-[#F3EFE5] overflow-visible transition-colors duration-500"
    >
      {/* ── PINNED COLLAGE VIEWPORT ── */}
      <div className="sticky top-0 h-screen w-full flex flex-col justify-between items-center overflow-hidden px-6 md:px-12 lg:px-20 py-8">
        
        {/* Top Header */}
        <div className="w-full flex items-center justify-between text-xs font-mono uppercase tracking-widest text-white/50 z-20">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#B9FF66]" />
            <span className="text-[#B9FF66] font-bold">Moments &amp; Activities</span>
          </div>
          <span className="hidden sm:inline-block">Scroll to disperse collage</span>
          <span className="text-white/60">SMK TI BAZMA &bull; Life</span>
        </div>

        {/* ── CENTER SCATTER CANVAS ── */}
        <div className="relative w-full flex-1 flex items-center justify-center">
          
          {/* Central Editorial Narrative (Unveiled as photos scatter) */}
          <motion.div
            style={{ scale: titleScale, opacity: titleOpacity }}
            className="text-center z-0 max-w-xl px-4 pointer-events-none select-none space-y-4"
          >
            <span className="text-xs font-mono tracking-widest uppercase text-[#B9FF66] font-bold block">
              Beyond Terminal Screens
            </span>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-black font-display uppercase tracking-tight text-white leading-[0.95]">
              Life beyond
              <br />
              <span className="font-serif italic font-light lowercase text-[#E98B45]">
                the code
              </span>
            </h2>
            <p className="text-white/70 text-xs sm:text-sm font-sans max-w-md mx-auto leading-relaxed">
              Student leadership, vocational collaboration, seminars, and real experiences shaping character beyond syntax.
            </p>
          </motion.div>

          {/* ── THE 7 SCATTERING PHOTOS ── */}
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
                  scale: 1.18,
                  rotate: 0,
                  zIndex: 50,
                  transition: { type: "spring", stiffness: 300, damping: 20 },
                }}
                className={`absolute w-[180px] sm:w-[220px] md:w-[260px] lg:w-[280px] ${photo.aspect} rounded-2xl overflow-hidden border border-white/20 bg-white/10 shadow-2xl cursor-pointer transition-shadow hover:shadow-[0_20px_50px_rgba(224,83,40,0.3)] group select-none`}
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  sizes="(max-width: 768px) 220px, 280px"
                  quality={80}
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105 filter contrast-[1.03]"
                />
                
                {/* Subtle Edge Glow & Vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-60 pointer-events-none group-hover:opacity-30 transition-opacity" />

                {/* Micro Hover Caption */}
                <div className="absolute bottom-2.5 inset-x-2.5 z-10 flex items-center justify-between text-[10px] font-mono text-white/80 opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="truncate">{photo.alt}</span>
                  <span className="text-[#E05328] font-bold">0{photo.id}</span>
                </div>
              </motion.div>
            );
          })}

        </div>

        {/* Bottom Status */}
        <div className="w-full flex items-center justify-between text-xs font-mono text-white/40 z-20 pt-2 border-t border-white/10">
          <span>Interactive scatter &bull; responsive physics</span>
          <span className="hidden sm:inline-block">Continuous vertical scrolling controls dispersion</span>
          <span>07 Artifacts</span>
        </div>

      </div>
    </section>
  );
}
