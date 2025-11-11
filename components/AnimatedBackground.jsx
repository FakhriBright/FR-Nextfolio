"use client";
import { motion } from "framer-motion";

export default function AnimatedBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Blob Biru */}
      <motion.div
        className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-blue-500/25 rounded-full blur-3xl"
        animate={{
          x: [0, 80, -100, 0],
          y: [0, 60, -80, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 20,
          ease: "easeInOut",
        }}
      />

      {/* Blob Ungu */}
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-purple-500/20 rounded-full blur-3xl"
        animate={{
          x: [0, -100, 120, 0],
          y: [0, -70, 50, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 22,
          ease: "easeInOut",
        }}
      />

      {/* Aura Tengah */}
      <motion.div
        className="absolute top-1/2 left-1/2 w-[700px] h-[700px] bg-blue-400/10 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2"
        animate={{
          scale: [1, 1.1, 0.9, 1],
          opacity: [0.4, 0.6, 0.4, 0.5],
        }}
        transition={{
          repeat: Infinity,
          duration: 16,
          ease: "easeInOut",
        }}
      />
    </div>
  );
}
