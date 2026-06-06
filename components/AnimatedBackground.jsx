"use client";
import { motion } from "framer-motion";

export default function AnimatedBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-background pointer-events-none transition-colors duration-500">
      {/* Premium Minimal Tech Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--border)_1px,transparent_1px),linear-gradient(to_bottom,var(--border)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none opacity-45 dark:opacity-35" />
      
      {/* Subtle Dot Matrix Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(var(--border)_1px,transparent_1px)] bg-[size:40px_40px] bg-[position:20px_20px] pointer-events-none opacity-25 dark:opacity-15" />

      {/* Golden Solar Halo - Top Right */}
      <motion.div
        className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-primary/4 dark:bg-primary/3 rounded-full blur-[140px] pointer-events-none"
        animate={{
          x: [0, 40, -20, 0],
          y: [0, -20, 40, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 30,
          ease: "easeInOut",
        }}
      />

      {/* Copper Sunset Flare - Bottom Left */}
      <motion.div
        className="absolute -bottom-40 -left-40 w-[550px] h-[550px] bg-accent/4 dark:bg-accent/3 rounded-full blur-[140px] pointer-events-none"
        animate={{
          x: [0, -40, 30, 0],
          y: [0, 30, -30, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 35,
          ease: "easeInOut",
        }}
      />

      {/* Central Ambient Glow */}
      <motion.div
        className="absolute top-1/2 left-1/2 w-[800px] h-[800px] bg-primary/2 dark:bg-primary/1 rounded-full blur-[160px] -translate-x-1/2 -translate-y-1/2 pointer-events-none"
        animate={{
          scale: [1, 1.1, 0.95, 1],
        }}
        transition={{
          repeat: Infinity,
          duration: 25,
          ease: "easeInOut",
        }}
      />
    </div>
  );
}
