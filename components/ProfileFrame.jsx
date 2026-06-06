"use client";

import { motion } from "framer-motion";

export default function ProfileFrame() {
  return (
    <div className="relative w-full max-w-[420px] aspect-square flex items-center justify-center p-4 group select-none">
      {/* 🔮 Styles for the morphing blob animation */}
      <style>{`
        @keyframes blob-morph {
          0%, 100% {
            border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
          }
          50% {
            border-radius: 40% 60% 70% 30% / 50% 70% 30% 50%;
          }
        }
        .blob-animated {
          animation: blob-morph 8s ease-in-out infinite;
        }
      `}</style>

      {/* 🔮 Deep Neon Glow Aura Behind Blob */}
      <div className="absolute w-[85%] h-[85%] rounded-full bg-gradient-to-tr from-primary/30 via-cyan-500/20 to-purple-600/20 blur-[60px] pointer-events-none opacity-80 dark:opacity-60" />
      
      {/* 🔮 Subtle Secondary Glow */}
      <div className="absolute w-[70%] h-[70%] rounded-full bg-cyan-400/20 blur-[40px] pointer-events-none animate-pulse" style={{ animationDuration: '4s' }} />

      {/* 📐 Glowing Organic Blob Container (Background) */}
      <div className="absolute w-[80%] h-[80%] border-2 border-primary/50 bg-gradient-to-tr from-primary/10 via-cyan-500/5 to-purple-600/10 shadow-[0_0_40px_rgba(6,182,212,0.15)] blob-animated z-0 transition-all duration-700 group-hover:border-primary/80 group-hover:shadow-[0_0_55px_rgba(6,182,212,0.25)]" />

      {/* 📐 Neon Blue Glow Outline Blob Accent (Offset for Depth) */}
      <div className="absolute w-[79%] h-[79%] border border-cyan-400/30 blob-animated z-0 opacity-70 scale-95 origin-center rotate-45 pointer-events-none" style={{ animationDelay: '-2s' }} />

      {/* 🎨 Abstract Tech Grid Graphics Inside Blob (Clipped to SVG Blob) */}
      <div className="absolute inset-0 w-full h-full pointer-events-none z-10 flex items-center justify-center">
        <svg className="w-[78%] h-[78%] opacity-20 stroke-current text-foreground blob-animated overflow-hidden" fill="none" viewBox="0 0 100 100" preserveAspectRatio="none">
          <line x1="20" y1="0" x2="20" y2="100" strokeWidth="0.5" strokeDasharray="3,3" />
          <line x1="80" y1="0" x2="80" y2="100" strokeWidth="0.5" strokeDasharray="3,3" />
          <line x1="0" y1="50" x2="100" y2="50" strokeWidth="0.5" strokeDasharray="1,2" />
          <path d="M 20 50 C 40 20, 60 80, 80 50" strokeWidth="0.75" />
          <circle cx="50" cy="50" r="1.5" fill="currentColor" />
        </svg>
      </div>

      {/* 👤 THE PORTRAIT PHOTO (3D Overlapping Effect) */}
      <motion.img
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        src="/home.png"
        alt="Moh. Fakhri Rizkian"
        className="w-[90%] h-[90%] object-contain relative z-20 select-none filter drop-shadow-[0_20px_25px_rgba(0,0,0,0.35)] dark:drop-shadow-[0_20px_35px_rgba(0,0,0,0.6)] transition-transform duration-700 ease-out group-hover:scale-[1.03] group-hover:translate-y-[-8px]"
      />

      {/* 🏷️ Subtle Technical Coordinate Overlay (Bottom Left) */}
      <span className="absolute bottom-6 left-12 font-mono text-[7px] text-muted-foreground/60 tracking-wider pointer-events-none z-20">
        SYS.LOC // AREA_51
      </span>
      {/* 🏷️ Opacity Overlay (Bottom Right) */}
      <span className="absolute bottom-6 right-12 font-mono text-[7px] text-muted-foreground/60 tracking-wider pointer-events-none z-20">
        GLOW: ACTIVE
      </span>
    </div>
  );
}
