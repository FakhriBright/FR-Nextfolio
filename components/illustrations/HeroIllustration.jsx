"use client";

import { motion } from "framer-motion";

export default function HeroIllustration({ progress }) {
  return (
    <div className="relative w-full aspect-square max-w-[460px] sm:max-w-[500px] flex items-center justify-center select-none">
      {/* ── LAYER 1: Orbiting Rings (Rotates on scroll) ── */}
      <motion.svg
        viewBox="0 0 500 500"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute inset-0 w-full h-full pointer-events-none"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 45, ease: "linear" }}
      >
        <ellipse
          cx="250"
          cy="250"
          rx="210"
          ry="110"
          stroke="#191A23"
          strokeWidth="1.5"
          strokeDasharray="6 6"
          className="opacity-40"
        />
        <ellipse
          cx="250"
          cy="250"
          rx="170"
          ry="85"
          stroke="#B9FF66"
          strokeWidth="2"
          className="opacity-70"
        />
      </motion.svg>

      {/* ── LAYER 2: Floating 4-Point Stars (Parallax Drift) ── */}
      {/* Top Black 4-Point Star */}
      <motion.div
        animate={{ y: [-8, 8, -8], rotate: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
        className="absolute top-10 left-12 z-10"
      >
        <svg width="36" height="36" viewBox="0 0 40 40" fill="none">
          <path
            d="M20 0C20 11.0457 28.9543 20 40 20C28.9543 20 20 28.9543 20 40C20 28.9543 11.0457 20 0 20C11.0457 20 20 11.0457 20 0Z"
            fill="#191A23"
          />
        </svg>
      </motion.div>

      {/* Top-Right Green Star */}
      <motion.div
        animate={{ y: [10, -10, 10], rotate: [0, -12, 0] }}
        transition={{ repeat: Infinity, duration: 6, ease: "easeInOut", delay: 0.5 }}
        className="absolute top-6 right-16 z-10"
      >
        <svg width="32" height="32" viewBox="0 0 40 40" fill="none">
          <path
            d="M20 0C20 11.0457 28.9543 20 40 20C28.9543 20 20 28.9543 20 40C20 28.9543 11.0457 20 0 20C11.0457 20 20 11.0457 20 0Z"
            fill="#B9FF66"
            stroke="#191A23"
            strokeWidth="1.5"
          />
        </svg>
      </motion.div>

      {/* Bottom Small Star */}
      <motion.div
        animate={{ y: [-6, 6, -6], rotate: [0, 15, 0] }}
        transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-16 left-20 z-10"
      >
        <svg width="24" height="24" viewBox="0 0 40 40" fill="none">
          <path
            d="M20 0C20 11.0457 28.9543 20 40 20C28.9543 20 20 28.9543 20 40C20 28.9543 11.0457 20 0 20C11.0457 20 20 11.0457 20 0Z"
            fill="#191A23"
          />
        </svg>
      </motion.div>

      {/* ── LAYER 3: Floating Interactive Circular Badges (Positivus style) ── */}
      {/* Code Badge */}
      <motion.div
        animate={{ x: [-5, 5, -5], y: [-6, 6, -6] }}
        transition={{ repeat: Infinity, duration: 5.5, ease: "easeInOut" }}
        className="absolute top-20 right-8 z-20 w-12 h-12 rounded-full bg-[#191A23] border-2 border-black flex items-center justify-center text-white shadow-positivus"
      >
        <span className="font-mono text-xs font-bold text-[#B9FF66]">&lt;/&gt;</span>
      </motion.div>

      {/* Heart / UI Badge */}
      <motion.div
        animate={{ x: [6, -6, 6], y: [4, -4, 4] }}
        transition={{ repeat: Infinity, duration: 6.5, ease: "easeInOut", delay: 0.8 }}
        className="absolute bottom-28 right-6 z-20 w-11 h-11 rounded-full bg-[#B9FF66] border-2 border-[#191A23] flex items-center justify-center text-[#191A23] shadow-positivus font-bold text-xs"
      >
        UI
      </motion.div>

      {/* Target/Web Badge */}
      <motion.div
        animate={{ x: [-4, 4, -4], y: [6, -6, 6] }}
        transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 0.3 }}
        className="absolute top-36 left-4 z-20 w-10 h-10 rounded-full bg-white border-2 border-[#191A23] flex items-center justify-center text-[#191A23] shadow-positivus font-mono text-[10px] font-bold"
      >
        JS
      </motion.div>

      {/* ── LAYER 4: The Centerpiece Isometric Megaphone / Viewport ── */}
      <motion.div
        animate={{ y: [-8, 8, -8] }}
        transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
        className="relative z-10 w-[78%] h-[78%] flex items-center justify-center"
      >
        <svg
          viewBox="0 0 320 320"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full drop-shadow-[0_15px_25px_rgba(25,26,35,0.18)]"
        >
          {/* Megaphone Cone Body */}
          <path
            d="M195 90L95 130V190L195 230V90Z"
            fill="white"
            stroke="#191A23"
            strokeWidth="3.5"
            strokeLinejoin="round"
          />
          {/* Lime Accent Stripe on Cone */}
          <path
            d="M175 98L115 135V185L175 222V98Z"
            fill="#B9FF66"
            stroke="#191A23"
            strokeWidth="2.5"
            strokeLinejoin="round"
          />
          {/* Megaphone Mouth Ring */}
          <ellipse
            cx="195"
            cy="160"
            rx="18"
            ry="70"
            fill="#191A23"
            stroke="#191A23"
            strokeWidth="3.5"
          />
          <ellipse
            cx="195"
            cy="160"
            rx="10"
            ry="55"
            fill="#B9FF66"
          />
          {/* Handle */}
          <path
            d="M125 180V235C125 242 135 248 145 242V175"
            fill="white"
            stroke="#191A23"
            strokeWidth="3.5"
            strokeLinecap="round"
          />
          {/* Sound Wave Rings */}
          <path
            d="M225 130C238 140 245 150 245 160C245 170 238 180 225 190"
            stroke="#191A23"
            strokeWidth="3.5"
            strokeLinecap="round"
          />
          <path
            d="M250 110C270 125 280 142 280 160C280 178 270 195 250 210"
            stroke="#B9FF66"
            strokeWidth="3.5"
            strokeLinecap="round"
          />
          {/* Geometric decorative lines */}
          <circle cx="85" cy="160" r="12" fill="#191A23" />
        </svg>
      </motion.div>
    </div>
  );
}

