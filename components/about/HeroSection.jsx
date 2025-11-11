"use client";
import { motion } from "framer-motion";

export default function HeroSection() {
  const tags = [
    "UI/UX Designer", "Front-End Developer", "Creative Thinker",
    "Next.js Enthusiast", "Problem Solver", "Tech Explorer",
  ];

  return (
    <section className="flex flex-col lg:flex-row items-center gap-10">
      {/* FOTO PROFIL */}
      <motion.img
        src="/profile.jpg"
        alt="Fakhri Rizkian"
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="w-52 h-52 rounded-2xl object-cover shadow-lg ring-4 ring-blue-500/20"
      />

      {/* TEKS DAN TAG */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="flex-1 space-y-5 text-center lg:text-left"
      >
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
          Moh. Fakhri Rizkian
        </h1>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed max-w-xl">
          Pelajar <b>SMK TI BAZMA</b> jurusan 
          <b className="text-blue-600 dark:text-blue-400"> SIJA</b>.  
          Saya mencintai dunia teknologi, desain, dan pengembangan web modern.
        </p>

        {/* 🎯 SMOOTH INLINE MARQUEE */}
        <div className="relative w-full max-w-xl overflow-hidden mx-auto lg:mx-0 mt-4">
          <motion.div
            className="flex gap-4 whitespace-nowrap"
            animate={{ x: ["0%", "-100%"] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          >
            {/* Digandakan 2x biar nyambung tanpa jeda */}
            {[...tags, ...tags].map((tag, i) => (
              <span
                key={i}
                className="px-4 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-lg text-sm font-medium"
              >
                {tag}
              </span>
            ))}
          </motion.div>

          {/* FADE KIRI-KANAN */}
          <div className="absolute left-0 top-0 w-8 h-full bg-gradient-to-r from-white dark:from-gray-900 to-transparent pointer-events-none" />
          <div className="absolute right-0 top-0 w-8 h-full bg-gradient-to-l from-white dark:from-gray-900 to-transparent pointer-events-none" />
        </div>
      </motion.div>
    </section>
  );
}
