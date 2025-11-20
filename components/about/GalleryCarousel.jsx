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
  // ukuran kecil + hanya 4 tampil
  const ITEM_WIDTH = 170;
  const GAP = 20;
  const VISIBLE_COUNT = 4; // ⬅️ tampil 4 gambar saja
  const SPEED_DELTA = 0.18;

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
    <section className="py-12">
      <h2 className="text-center text-3xl font-bold dark:text-white mb-8">
        My Gallery
      </h2>

      {/* FIXED WIDTH agar hanya 4 gambar yang tampil */}
      <div
        className="relative overflow-hidden mx-auto"
        style={{
          width: VISIBLE_COUNT * (ITEM_WIDTH + GAP), // ⬅️ container pas 4 item
        }}
      >
        <motion.div
          drag="x"
          dragConstraints={{ left: -99999, right: 99999 }}
          onDragStart={handleDragStart}
          onDragEnd={handleDragEnd}
          style={{ x }}
          className="flex items-center gap-[20px] cursor-grab active:cursor-grabbing select-none"
        >
          {images.map((src, i) => (
            <div
              key={i}
              style={{ width: ITEM_WIDTH }}
              className="flex-shrink-0 relative"
            >
              <div
                className="rounded-2xl overflow-hidden shadow-xl border border-white/10"
                style={{
                  height: 220,
                }}
              >
                <img
                  src={src}
                  alt={`gallery-${i}`}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          ))}
        </motion.div>

        {/* Soft fade kiri/kanan */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-white dark:from-gray-900 to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-white dark:from-gray-900 to-transparent" />
      </div>

      <p className="text-center mt-4 text-sm text-gray-600 dark:text-gray-300/80">
        Drag images to move • auto orbit is ON
      </p>
    </section>
  );
}
