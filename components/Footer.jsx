"use client";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden py-10 mt-20 text-center text-gray-700 dark:text-gray-300">
      {/* Animated Gradient Background */}
     <motion.div
  className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 opacity-10 blur-3xl"
  animate={{
    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
  }}
  transition={{
    duration: 15,
    ease: "linear",
    repeat: Infinity,
  }}
/>

      {/* Content */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 font-medium"
      >
        Dibuat dengan ❤️ oleh{" "}
        <span className="text-blue-600 dark:text-blue-400">
          Moh. Fakhri Rizkian
        </span>
        {" • "}
        © 2025 All rights reserved.
      </motion.p>
    </footer>
  );
}
