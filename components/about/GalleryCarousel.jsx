"use client";
import { useEffect, useRef } from "react";
import { motion, useMotionValue } from "framer-motion";

const IMAGES = [
  "/gallery/1.png",
  "/gallery/2.png",
  "/gallery/3.JPG",
  "/gallery/4.jpg",
  "/gallery/5.jpeg",
  "/gallery/6.png",
  "/gallery/7.png",
];

export default function GalleryCarousel() {
  const ITEM_WIDTH = 180;
  const GAP = 24;
  const VISIBLE_COUNT = 4; // Shows 4 items nicely on desktop
  const SPEED_DELTA = 0.15;

  const images = [...IMAGES, ...IMAGES];
  const totalOriginal = IMAGES.length;
  const totalWidth = totalOriginal * (ITEM_WIDTH + GAP);

  const x = useMotionValue(0);
  const rafRef = useRef(null);
  const isDraggingRef = useRef(false);
  const lastTimeRef = useRef(null);

  useEffect(() => x.set(0), [x]);

  useEffect(() => {
    const loop = (time) => {
      if (!lastTimeRef.current) lastTimeRef.current = time;
      const dt = time - lastTimeRef.current;
      lastTimeRef.current = time;

      if (!isDraggingRef.current) {
        const movePx = SPEED_DELTA * (dt / (1000 / 60));
        const current = x.get();
        let next = current - movePx;

        if (next <= -totalWidth) next += totalWidth;
        if (next > 0) next -= totalWidth;

        x.set(next);
      }

      rafRef.current = requestAnimationFrame(loop);
    };

    rafRef.current = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(rafRef.current);
  }, [x, totalWidth]);

  const handleDragStart = () => (isDraggingRef.current = true);

  const handleDragEnd = (_, info) => {
    isDraggingRef.current = false;
    const vx = info.velocity.x || 0;

    if (Math.abs(vx) > 50) {
      const extra = vx * 0.06;
      let next = x.get() + extra;

      if (next <= -totalWidth) next += totalWidth;
      if (next > 0) next -= totalWidth;

      x.set(next);
    }
  };

  return (
    <section className="py-12 border-t border-border/30 mt-8">
      <h2 className="text-center text-3xl md:text-5xl font-bold font-display text-foreground mb-12 uppercase tracking-tighter">
        Visual <span className="font-serif italic font-light lowercase text-primary">gallery</span>
      </h2>

      {/* Slide Gallery Container */}
      <div
        className="relative overflow-hidden mx-auto max-w-full"
        style={{
          width: VISIBLE_COUNT * (ITEM_WIDTH + GAP) - GAP,
        }}
      >
        <motion.div
          drag="x"
          dragConstraints={{ left: -99999, right: 99999 }}
          onDragStart={handleDragStart}
          onDragEnd={handleDragEnd}
          style={{ x }}
          className="flex items-center gap-[24px] cursor-grab active:cursor-grabbing select-none"
        >
          {images.map((src, i) => (
            <div
              key={i}
              style={{ width: ITEM_WIDTH }}
              className="flex-shrink-0 relative group"
            >
              <div
                className="border border-border bg-card/40 p-2 pb-5 rounded-none shadow-md transition-all duration-500 hover:border-primary/40"
                style={{
                  height: 240,
                }}
              >
                <div className="w-full h-[180px] overflow-hidden bg-background border border-border/40">
                  <img
                    src={src}
                    alt={`gallery-${i}`}
                    className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 hover:scale-[1.04] transition-all duration-700 ease-out"
                    loading="lazy"
                  />
                </div>
                <div className="pt-2 px-1 flex items-center justify-between text-[8px] font-mono tracking-widest text-muted-foreground uppercase">
                  <span>[ SLIDE // 0{ (i % totalOriginal) + 1 } ]</span>
                  <span>MFR</span>
                </div>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Shadow Fades */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-background to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-background to-transparent" />
      </div>

      <p className="text-center mt-6 text-[9px] font-mono tracking-widest uppercase text-muted-foreground">
        Drag images to explore • auto orbit active
      </p>
    </section>
  );
}
