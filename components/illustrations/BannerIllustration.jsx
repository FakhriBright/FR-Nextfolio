"use client";

import { motion } from "framer-motion";

export default function BannerIllustration() {
  return (
    <div className="relative w-full aspect-square max-w-[280px] sm:max-w-[320px] flex items-center justify-center select-none">
      {/* Orbiting Ring */}
      <motion.svg
        viewBox="0 0 260 260"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute inset-0 w-full h-full"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
      >
        <ellipse
          cx="130"
          cy="130"
          rx="115"
          ry="55"
          stroke="#B9FF66"
          strokeWidth="2"
          strokeDasharray="6 6"
        />
      </motion.svg>

      {/* Floating 4-point Green Star */}
      <motion.div
        animate={{ y: [-8, 8, -8], rotate: [0, 15, 0] }}
        transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
        className="absolute -bottom-2 left-8 z-20"
      >
        <svg width="34" height="34" viewBox="0 0 40 40" fill="none">
          <path
            d="M20 0C20 11.0457 28.9543 20 40 20C28.9543 20 20 28.9543 20 40C20 28.9543 11.0457 20 0 20C11.0457 20 20 11.0457 20 0Z"
            fill="#B9FF66"
          />
        </svg>
      </motion.div>

      {/* Floating Gray Star */}
      <motion.div
        animate={{ y: [6, -6, 6], rotate: [0, -10, 0] }}
        transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 0.5 }}
        className="absolute top-2 right-4 z-20"
      >
        <svg width="28" height="28" viewBox="0 0 40 40" fill="none">
          <path
            d="M20 0C20 11.0457 28.9543 20 40 20C28.9543 20 20 28.9543 20 40C20 28.9543 11.0457 20 0 20C11.0457 20 20 11.0457 20 0Z"
            fill="#E5E5E5"
            stroke="#191A23"
            strokeWidth="1.5"
          />
        </svg>
      </motion.div>

      {/* Centerpiece: Cute Dark Sphere with Glowing Eyes (Positivus Mascot) */}
      <motion.div
        animate={{ y: [-5, 5, -5] }}
        transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut" }}
        className="relative z-10 w-36 h-36 rounded-full bg-[#191A23] border-3 border-black flex items-center justify-center shadow-positivus"
      >
        {/* White Oval Eyes */}
        <div className="flex items-center gap-4">
          <motion.div
            animate={{ scaleY: [1, 0.15, 1] }}
            transition={{ repeat: Infinity, duration: 4, times: [0, 0.05, 0.1], delay: 1 }}
            className="w-4 h-7 rounded-full bg-white"
          />
          <motion.div
            animate={{ scaleY: [1, 0.15, 1] }}
            transition={{ repeat: Infinity, duration: 4, times: [0, 0.05, 0.1], delay: 1 }}
            className="w-4 h-7 rounded-full bg-white"
          />
        </div>
      </motion.div>
    </div>
  );
}

