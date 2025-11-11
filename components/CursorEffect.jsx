"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CursorEffect() {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const move = (e) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", move);

    // auto detect hover untuk tombol & link
    const hoverables = document.querySelectorAll("a, button, .hover-target");
    hoverables.forEach((el) => {
      el.addEventListener("mouseenter", () => setHovered(true));
      el.addEventListener("mouseleave", () => setHovered(false));
    });

    return () => {
      window.removeEventListener("mousemove", move);
      hoverables.forEach((el) => {
        el.removeEventListener("mouseenter", () => setHovered(true));
        el.removeEventListener("mouseleave", () => setHovered(false));
      });
    };
  }, []);

  return (
    <motion.div
  className={`fixed top-0 left-0 z-[9999] pointer-events-none rounded-full border ${
    hovered
      ? "border-white/60 w-10 h-10"
      : "border-white/30 w-6 h-6"
  }`}
  animate={{ x: pos.x - 12, y: pos.y - 12 }}
  transition={{ type: "spring", stiffness: 300, damping: 25 }}
/>
  );
}
