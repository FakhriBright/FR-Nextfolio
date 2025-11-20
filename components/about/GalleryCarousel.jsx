"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const images = [
  "/gallery/1.png",
  "/gallery/2.png",
  "/gallery/3.JPG",
  "/gallery/4.jpg",
  "/gallery/5.jpeg",
  "/gallery/6.png",
];

export default function GalleryCarousel() {
  const [index, setIndex] = useState(0);
  const total = images.length;

  const next = () => setIndex((i) => (i + 1) % total);

  useEffect(() => {
    const timer = setInterval(next, 3500);
    return () => clearInterval(timer);
  }, []);

  const getImage = (offset) => {
    const pos = (index + offset + total) % total;
    return images[pos];
  };

  return (
    <section className="py-24 select-none">
      <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
        My Gallery
      </h2>

      <div className="relative flex justify-center items-center gap-6 h-[320px]">
        {/* Left (small) */}
        <motion.img
          key={"left-" + index}
          src={getImage(-1)}
          initial={{ opacity: 0, x: -60, scale: 0.7 }}
          animate={{ opacity: 0.6, x: -40, scale: 0.75 }}
          transition={{ duration: 0.6 }}
          className="rounded-xl shadow-lg h-52 w-40 object-cover blur-[0.4px]"
        />

        {/* Center (BIG) */}
        <motion.img
          key={"center-" + index}
          src={getImage(0)}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.65 }}
          className="rounded-2xl shadow-2xl h-72 w-56 object-cover z-20"
        />

        {/* Right (small) */}
        <motion.img
          key={"right-" + index}
          src={getImage(1)}
          initial={{ opacity: 0, x: 60, scale: 0.7 }}
          animate={{ opacity: 0.6, x: 40, scale: 0.75 }}
          transition={{ duration: 0.6 }}
          className="rounded-xl shadow-lg h-52 w-40 object-cover blur-[0.4px]"
        />
      </div>
    </section>
  );
}
