"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const techColors = {
  React: "bg-cyan-500/10 text-cyan-400 border-cyan-500/20",
  "Next.js": "bg-white/10 text-white border-white/20",
  Tailwind: "bg-sky-500/10 text-sky-400 border-sky-500/20",
  Firebase: "bg-amber-500/10 text-amber-400 border-amber-500/20",
  HTML: "bg-orange-500/10 text-orange-400 border-orange-500/20",
  CSS: "bg-blue-500/10 text-blue-400 border-blue-500/20",
  JS: "bg-yellow-500/10 text-yellow-400 border-yellow-500/20",
  Figma: "bg-purple-500/10 text-purple-400 border-purple-500/20",
  "UI Design": "bg-pink-500/10 text-pink-400 border-pink-500/20",
  "Public API Demo": "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
  LocalStorage: "bg-gray-500/10 text-gray-400 border-gray-500/20",
  "Framer Motion": "bg-violet-500/10 text-violet-400 border-violet-500/20",
  MQTT: "bg-slate-500/10 text-slate-300 border-slate-500/20",
};

export default function CardProject({
  title,
  description,
  image,
  link,
  tech,
  featured,
  tall,
  category,
}) {
  const [isHovered, setIsHovered] = useState(false);

  const isFeatured = Boolean(featured);
  const isTall = Boolean(tall);

  return (
    <div
      className={`
        group relative rounded-2xl border border-gray-800/60 bg-slate-900/50 
        backdrop-blur-md overflow-hidden shadow-xl 
        hover:border-transparent hover:shadow-2xl hover:shadow-blue-500/10
        transition-all duration-400 ease-out cursor-pointer flex flex-col
        ${
          isFeatured
            ? "min-h-[560px]"
            : isTall
            ? "min-h-[560px]"
            : "min-h-[380px]"
        }
        hover:-translate-y-2
      `}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        transform: isHovered
          ? "perspective(1000px) rotateX(2deg) rotateY(-2deg) translateY(-8px)"
          : "none",
        transition: "transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
      }}
    >
      {/* Gradient border effect */}
      <div
        className="
        absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none
        bg-gradient-to-br from-blue-500/20 via-purple-500/10 to-transparent
      "
      />

      {/* Image Section */}
      <div
        className={`
          relative shrink-0 overflow-hidden
          ${isFeatured ? "h-72" : isTall ? "h-56" : "h-48"}
        `}
      >
        <Image
          src={image}
          alt={title}
          fill
          className={`object-cover transition-transform duration-600 ${
            isHovered ? "scale-110" : "scale-100"
          }`}
        />

        <div
          className={`
          absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent
          transition-opacity duration-300 ${isHovered ? "opacity-60" : "opacity-80"}
        `}
        />

        <div
          className={`
          absolute top-4 right-4 flex gap-2 transition-all duration-300 z-10
          ${isHovered ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2"}
        `}
        >
          <button
            className="w-9 h-9 rounded-xl bg-black/50 backdrop-blur-md border border-white/10 
                      text-white flex items-center justify-center hover:bg-blue-500 hover:border-blue-500 
                      transition-all duration-200 hover:scale-110"
            onClick={(e) => {
              e.preventDefault();
              window.open(link, "_blank");
            }}
            aria-label="Open Project"
          >
            🚀
          </button>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-5 flex flex-col flex-1">
        <span className="text-xs font-bold uppercase tracking-widest text-blue-400 mb-2 block">
          {category}
        </span>

        <h3
          className={`font-bold text-white transition-colors duration-200 ${
            isFeatured ? "text-2xl lg:text-3xl" : isTall ? "text-2xl" : "text-lg"
          } group-hover:text-blue-400`}
        >
          {title}
        </h3>

        <p
          className={`text-gray-400 leading-relaxed ${
            isFeatured
              ? "text-base mt-3 mb-4"
              : isTall
              ? "text-sm mt-3 mb-4"
              : "text-sm mt-2 mb-3 flex-1"
          }`}
        >
          {description}
        </p>

        <div className="flex flex-wrap gap-2 mt-auto">
          {tech?.map((item, index) => (
            <span
              key={index}
              className={`
                text-xs px-3 py-1.5 rounded-lg border font-medium
                transition-all duration-200 hover:scale-105
                ${techColors[item] || "bg-gray-500/10 text-gray-400 border-gray-500/20"}
              `}
            >
              {item}
            </span>
          ))}
        </div>

        <div className="mt-4 pt-4 border-t border-gray-800/60">
          <Link
            href={link}
            target="_blank"
            className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 font-semibold text-sm transition-all duration-200 group/link"
          >
            Lihat Detail
            <span className="transition-transform duration-200 group-hover/link:translate-x-1">
              →
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}