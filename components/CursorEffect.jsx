"use client";
import { useEffect, useState } from "react";

export default function CursorEffect() {
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const cursor = document.getElementById("cursor-dot");

    const move = (e) => {
      cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
    };

    window.addEventListener("mousemove", move);

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
    <div
      id="cursor-dot"
      className={`pointer-events-none fixed top-0 left-0 z-[99999] rounded-full transition-all duration-150 ease-out
        ${
          hovered
            ? "w-8 h-8 bg-white/40 mix-blend-difference"
            : "w-4 h-4 bg-white/70 mix-blend-difference"
        }
      `}
      style={{
        transform: "translate(-50%, -50%)",
      }}
    />
  );
}
  