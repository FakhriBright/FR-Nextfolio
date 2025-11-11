"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 via-white to-blue-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-all duration-500">
      {/* Animated Background Glow */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.15, scale: 1.2 }}
        transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
        className="absolute -top-32 -left-32 w-96 h-96 bg-blue-400/30 rounded-full blur-3xl"
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1, scale: 1.1 }}
        transition={{ duration: 2, repeat: Infinity, repeatType: "mirror" }}
        className="absolute bottom-0 right-0 w-[28rem] h-[28rem] bg-blue-600/20 dark:bg-blue-400/20 rounded-full blur-3xl"
      />

      {/* Intro Section */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="z-10 text-center px-6"
      >
        <motion.h1
          className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
        >
          Hi, I’m{" "}
          <span className="text-blue-600 dark:text-blue-400">Fakhri Rizkian</span> 👋
        </motion.h1>

        <motion.p
          className="text-gray-600 dark:text-gray-300 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.7 }}
        >
          Pelajar SMK TI Bazma yang fokus pada{" "}
          <span className="font-medium text-blue-600 dark:text-blue-400">
            UI/UX Design
          </span>{" "}
          dan pengembangan web modern berbasis{" "}
          <span className="font-medium">Next.js</span>.  
          Saya percaya desain yang baik adalah kombinasi antara fungsi dan emosi.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="mt-8 flex flex-wrap justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.7 }}
        >
          <Link
            href="/projects"
            className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300"
          >
            Lihat Proyek →
          </Link>
          <Link
            href="/about"
            className="px-6 py-3 border border-blue-600 text-blue-600 dark:text-blue-400 dark:border-blue-400 rounded-lg font-semibold hover:bg-blue-50 dark:hover:bg-blue-900/30 transition-all duration-300"
          >
            Tentang Saya
          </Link>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
     <motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 0.7, y: [0, 8, 0] }}
  transition={{ delay: 1, repeat: Infinity, duration: 1.8 }}
  className="absolute bottom-10 flex flex-col items-center text-gray-500 dark:text-gray-400 text-sm"
>
  <span>Scroll Down</span>
  <span className="text-2xl">↓</span>
</motion.div>


      
    </main>
  );
}
