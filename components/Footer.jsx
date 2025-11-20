"use client";
import { motion } from "framer-motion";
import { Instagram, Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden mt-1 pb-16 pt-10">

      {/* BIG ORB */}
      <motion.div
        className="absolute left-1/2 -translate-x-1/2 bottom-0 w-[900px] h-[900px] rounded-full bg-white dark:bg-gray-800 opacity-10 blur-3xl"
        initial={{ scale: 0.8, opacity: 0.1 }}
        animate={{ scale: 1, opacity: 0.15 }}
        transition={{ duration: 4, repeat: Infinity, repeatType: "reverse" }}
      />

      {/* DUST PARTICLES */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(70)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-blue-300 dark:bg-blue-500"
            style={{
              width: Math.random() * 4 + 2,
              height: Math.random() * 4 + 2,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              opacity: 0.2,
            }}
            animate={{ y: [0, -10, 0], opacity: [0.15, 0.3, 0.15] }}
            transition={{ duration: 4 + Math.random() * 4, repeat: Infinity, ease: "easeInOut" }}
          />
        ))}
      </div>

      {/* TEXT */}
      <motion.div
        className="relative z-10 text-center"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Get in Touch
        </h2>
        <p className="text-gray-600 dark:text-gray-300 max-w-xl mx-auto text-lg">
          Want to connect? Reach out anytime — I’ll respond as soon as I can.
        </p>
      </motion.div>

      {/* SOCIAL BAR */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="relative z-10 mx-auto mt-10 w-fit px-8 py-4 bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl rounded-full shadow-lg flex items-center gap-6 border border-gray-200 dark:border-gray-700"
        >
        <FooterIcon href="https://www.instagram.com/elrizkianf_/" icon={<Instagram size={22} />} />
        <FooterIcon href="https://github.com/FakhriBright" icon={<Github size={22} />} />
        <FooterIcon href="https://www.linkedin.com/in/mohammad-fakhri-rizkian-0bb8b9330/" icon={<Linkedin size={22} />} />
        <FooterIcon href="mailto:selaluli0123@gmail.com" icon={<Mail size={22} />} />
      </motion.div>

      {/* COPYRIGHT */}
      <motion.p
        className="relative z-10 text-center mt-10 text-gray-600 dark:text-gray-400"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        © 2025 — Crafted by{" "}
        <span className="font-semibold text-blue-600 dark:text-blue-400">
          Moh. Fakhri Rizkian
        </span>
      </motion.p>

    </footer>
  );
}

/* ICON */
function FooterIcon({ href, icon }) {
  return (
    <Link href={href} target="_blank">
      <motion.div
        whileHover={{ scale: 1.15, y: -4 }}
        whileTap={{ scale: 0.9 }}
        className="p-3 rounded-full bg-gray-100 dark:bg-gray-800 shadow-inner hover:shadow-md transition"
      >
        {icon}
      </motion.div>
    </Link>
  );
}
