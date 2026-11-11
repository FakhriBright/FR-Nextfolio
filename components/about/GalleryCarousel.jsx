"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";

const PHOTOS = [
  { id: 1, src: "/gallery/1.png", alt: "Teamwork & vocational moments", aspect: "aspect-[4/5]", width: 240, height: 300 },
  { id: 2, src: "/gallery/2.png", alt: "Presentation & activities", aspect: "aspect-[16/10]", width: 280, height: 175 },
  { id: 3, src: "/gallery/4.jpg", alt: "SMK TI BAZMA event", aspect: "aspect-[16/11]", width: 270, height: 185 },
  { id: 4, src: "/gallery/5.jpeg", alt: "Campus & collaboration", aspect: "aspect-[4/5]", width: 230, height: 288 },
  { id: 5, src: "/gallery/7.png", alt: "Student council governance", aspect: "aspect-[4/5]", width: 240, height: 300 },
];

export default function GalleryCarousel() {
  const containerRef = useRef(null);
  const shouldReduceMotion = useReducedMotion();

  // Vertical scroll tracking across 200vh
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Photo 1: Top-Left
  const p1X = useTransform(scrollYProgress, [0, 0.5, 1], shouldReduceMotion ? ["0vw", "0vw", "0vw"] : ["0vw", "-28vw", "-16vw"]);
  const p1Y = useTransform(scrollYProgress, [0, 0.5, 1], shouldReduceMotion ? ["0vh", "0vh", "0vh"] : ["0vh", "-22vh", "-10vh"]);
  const p1Rotate = useTransform(scrollYProgress, [0, 0.5, 1], shouldReduceMotion ? [0, 0, 0] : [-8, -14, -5]);

  // Photo 2: Top-Right
  const p2X = useTransform(scrollYProgress, [0, 0.5, 1], shouldReduceMotion ? ["0vw", "0vw", "0vw"] : ["0vw", "28vw", "16vw"]);
  const p2Y = useTransform(scrollYProgress, [0, 0.5, 1], shouldReduceMotion ? ["0vh", "0vh", "0vh"] : ["0vh", "-20vh", "-8vh"]);
  const p2Rotate = useTransform(scrollYProgress, [0, 0.5, 1], shouldReduceMotion ? [0, 0, 0] : [7, 12, 4]);

  // Photo 3: Mid-Left
  const p3X = useTransform(scrollYProgress, [0, 0.5, 1], shouldReduceMotion ? ["0vw", "0vw", "0vw"] : ["0vw", "-34vw", "-20vw"]);
  const p3Y = useTransform(scrollYProgress, [0, 0.5, 1], shouldReduceMotion ? ["0vh", "0vh", "0vh"] : ["0vh", "12vh", "6vh"]);
  const p3Rotate = useTransform(scrollYProgress, [0, 0.5, 1], shouldReduceMotion ? [0, 0, 0] : [-4, -8, -2]);

  // Photo 4: Bottom-Right
  const p4X = useTransform(scrollYProgress, [0, 0.5, 1], shouldReduceMotion ? ["0vw", "0vw", "0vw"] : ["0vw", "26vw", "14vw"]);
  const p4Y = useTransform(scrollYProgress, [0, 0.5, 1], shouldReduceMotion ? ["0vh", "0vh", "0vh"] : ["0vh", "22vh", "10vh"]);
  const p4Rotate = useTransform(scrollYProgress, [0, 0.5, 1], shouldReduceMotion ? [0, 0, 0] : [-6, -10, -3]);

  // Photo 5: Bottom-Left
  const p5X = useTransform(scrollYProgress, [0, 0.5, 1], shouldReduceMotion ? ["0vw", "0vw", "0vw"] : ["0vw", "-12vw", "-4vw"]);
  const p5Y = useTransform(scrollYProgress, [0, 0.5, 1], shouldReduceMotion ? ["0vh", "0vh", "0vh"] : ["0vh", "26vh", "12vh"]);
  const p5Rotate = useTransform(scrollYProgress, [0, 0.5, 1], shouldReduceMotion ? [0, 0, 0] : [9, 6, 2]);

  const titleScale = useTransform(scrollYProgress, [0, 0.4, 1], [0.95, 1.05, 0.98]);
  const titleOpacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.8, 1, 1, 0.7]);

  const photoMotions = [
    { x: p1X, y: p1Y, rotate: p1Rotate, zIndex: 12 },
    { x: p2X, y: p2Y, rotate: p2Rotate, zIndex: 14 },
    { x: p3X, y: p3Y, rotate: p3Rotate, zIndex: 16 },
    { x: p4X, y: p4Y, rotate: p4Rotate, zIndex: 13 },
    { x: p5X, y: p5Y, rotate: p5Rotate, zIndex: 15 },
  ];

  return (
    <section
      ref={containerRef}
      className="relative h-[200vh] bg-white text-[#191A23] border-b border-[#191A23]/15 transition-colors duration-500"
    >
      {/* ── STICKY PINNED COLLAGE STAGE ── */}
      <div className="sticky top-0 h-screen w-full flex flex-col justify-between items-center overflow-hidden px-6 md:px-12 lg:px-20 py-8">
        
        {/* Positivus Header */}
        <div className="w-full flex items-center justify-between text-xs font-mono uppercase tracking-widest text-[#191A23]/60 z-20">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#B9FF66] border border-[#191A23]" />
            <span className="font-bold text-[#191A23]">Life Beyond</span>
          </div>
          <span className="hidden sm:inline-block">Scroll to disperse moments</span>
          <span className="font-bold text-[#191A23]">SMK TI BAZMA</span>
        </div>

        {/* ── CENTER SCATTER CANVAS ── */}
        <div className="relative w-full flex-1 flex items-center justify-center">
          
          {/* Central Editorial Narrative */}
          <motion.div
            style={{ scale: titleScale, opacity: titleOpacity }}
            className="text-center z-0 max-w-lg px-4 pointer-events-none select-none space-y-3"
          >
            <span className="px-3 py-1 rounded-md bg-[#B9FF66] text-[#191A23] font-heading font-extrabold text-sm uppercase tracking-wide border border-[#191A23] inline-block">
              Beyond the Code
            </span>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold font-heading text-[#191A23] tracking-tight leading-[1.05]">
              Moments &amp; activities
            </h2>
            <p className="text-[#191A23]/70 text-xs sm:text-sm font-sans max-w-sm mx-auto leading-relaxed">
              Student leadership, vocational collaboration, and life outside code editor windows.
            </p>
          </motion.div>

          {/* ── 5 DISPERSING PHOTOS IN POSITIVUS STYLE ── */}
          {PHOTOS.map((photo, i) => {
            const m = photoMotions[i];

            return (
              <motion.div
                key={photo.id}
                style={{
                  x: m.x,
                  y: m.y,
                  rotate: m.rotate,
                  zIndex: m.zIndex,
                }}
                whileHover={{
                  scale: 1.15,
                  rotate: 0,
                  zIndex: 50,
                  transition: { type: "spring", stiffness: 300, damping: 20 },
                }}
                className={`absolute w-[180px] sm:w-[220px] md:w-[250px] lg:w-[270px] ${photo.aspect} rounded-2xl overflow-hidden border-2 border-[#191A23] bg-white shadow-positivus cursor-pointer transition-shadow hover:shadow-positivus-lg group select-none`}
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  sizes="(max-width: 768px) 220px, 270px"
                  quality={80}
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />

                {/* Top Corner Pill */}
                <div className="absolute top-2.5 left-2.5 z-10 opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="px-2 py-0.5 rounded bg-[#B9FF66] text-[#191A23] font-mono text-[9px] font-bold border border-[#191A23]">
                    0{photo.id}
                  </span>
                </div>
              </motion.div>
            );
          })}

        </div>

        {/* Bottom Status */}
        <div className="w-full flex items-center justify-between text-xs font-mono text-[#191A23]/50 z-20 pt-2 border-t border-[#191A23]/15">
          <span>Continuous scroll controls dispersion</span>
          <span className="hidden sm:inline-block">5 Selected Artifacts</span>
          <span>End of Moments</span>
        </div>

      </div>
    </section>
  );
}
