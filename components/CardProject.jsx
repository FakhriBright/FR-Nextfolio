"use client";
import { useEffect, useState } from "react";

export default function CursorEffect() {
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const cursor = document.getElementById("cursor-dot");
    const container = document.getElementById("cursor-particles");

    // === Move Cursor ===
    const move = (e) => {
      cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;

      // Random particle burst
      for (let i = 0; i < 6; i++) {
        const p = document.createElement("div");
        p.className = "cursor-particle";

        const size = Math.random() * 6 + 3;
        const angle = Math.random() * 2 * Math.PI;
        const speed = Math.random() * 20 + 8;

        const dx = Math.cos(angle) * speed;
        const dy = Math.sin(angle) * speed;

        p.style.width = `${size}px`;
        p.style.height = `${size}px`;
        p.style.left = e.clientX + "px";
        p.style.top = e.clientY + "px";
        p.style.transform = `translate(${dx}px, ${dy}px)`;

        container.appendChild(p);

        setTimeout(() => p.remove(), 350);
      }
    };

    window.addEventListener("mousemove", move);

    // Detect hover
    const hoverTargets = document.querySelectorAll("a, button, .hover-target");
    const enter = () => setHovered(true);
    const leave = () => setHovered(false);

    hoverTargets.forEach((el) => {
      el.addEventListener("mouseenter", enter);
      el.addEventListener("mouseleave", leave);
    });

    return () => {
      window.removeEventListener("mousemove", move);
      hoverTargets.forEach((el) => {
        el.removeEventListener("mouseenter", enter);
        el.removeEventListener("mouseleave", leave);
      });
    };
  }, []);

  return (
    <>
      {/* Particle Container */}
      <div
        id="cursor-particles"
        className="pointer-events-none fixed inset-0 z-[99998]"
      />

      {/* Main Cursor */}
      <div
        id="cursor-dot"
        className={`pointer-events-none fixed top-0 left-0 z-[99999] rounded-full transition-all duration-150 ease-out 
        ${
          hovered
            ? "w-9 h-9 bg-white/40 mix-blend-difference"
            : "w-4 h-4 bg-white/80 mix-blend-difference"
        }`}
        style={{ transform: "translate(-50%, -50%)" }}
      />
    </>
  );
}
