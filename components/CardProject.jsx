"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const techColors = {
  React: "bg-cyan-500/10 text-cyan-400 border-cyan-500/20",
  "Next.js": "bg-white/10 text-white border-white/20",
  Tailwind: "bg-sky-500/10 text-sky-400 border-sky-500/20",
  Firebase: "bg-amber-500/10 text-amber-400 border-amber-500/20",
  HTML: "bg-orange-500/10 text-orange-400 border-orange-500/20",
  CSS: "bg-blue-500/10 text-blue-400 border-blue-500/20",
  JS: "bg-yellow-500/10 text-yellow-400 border-yellow-500/20",
  MQTT: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
  Arduino: "bg-green-500/10 text-green-400 border-green-500/20",
  "C++": "bg-indigo-500/10 text-indigo-400 border-indigo-500/20",
  LCD: "bg-pink-500/10 text-pink-400 border-pink-500/20",
  "Adobe Photoshop":
    "bg-blue-500/10 text-blue-400 border-blue-500/20",
  "Public API Demo":
    "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
  LocalStorage: "bg-gray-500/10 text-gray-400 border-gray-500/20",
  "Framer Motion":
    "bg-violet-500/10 text-violet-400 border-violet-500/20",
};

export default function CardProject({
  title,
  description,
  image,
  images,
  video,
  mediaType,
  link,
  tech,
  category,
}) {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    if (mediaType === "carousel" && images?.length > 1) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % images.length);
      }, 2500);

      return () => clearInterval(interval);
    }
  }, [mediaType, images]);

  return (
    <div
      className="
        group rounded-2xl overflow-hidden
        border border-white/10
        bg-white/[0.03]
        backdrop-blur-xl
        hover:border-blue-400/30
        transition-all duration-300
        hover:-translate-y-1
      "
    >
      {/* Media */}
      <div className="relative w-full h-52 bg-black/30">
        {mediaType === "carousel" ? (
          <>
            <Image
              src={images[currentSlide]}
              alt={title}
              fill
              className="object-cover"
            />

            {/* dots */}
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
              {images.map((_, i) => (
                <div
                  key={i}
                  className={`w-2 h-2 rounded-full ${
                    i === currentSlide
                      ? "bg-white"
                      : "bg-white/40"
                  }`}
                />
              ))}
            </div>
          </>
        ) : mediaType === "video" ? (
          <video
            src={video}
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          />
        ) : (
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover"
          />
        )}

        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 to-transparent" />
      </div>

      {/* Content */}
      <div className="p-5">
        <p className="text-xs font-semibold tracking-widest uppercase text-blue-400 mb-3">
          {category}
        </p>

        <h3 className="text-2xl font-bold text-white mb-3 leading-tight">
          {title}
        </h3>

        <p className="text-sm text-gray-400 leading-7 mb-5 min-h-[72px]">
          {description}
        </p>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-2 mb-5">
          {tech?.map((item, i) => (
            <span
              key={i}
              className={`text-xs px-3 py-1 rounded-full border ${
                techColors[item] ||
                "bg-gray-500/10 text-gray-300 border-gray-500/20"
              }`}
            >
              {item}
            </span>
          ))}
        </div>

        {/* Button */}
        <Link
          href={link}
          target="_blank"
          className="
            block w-full text-center
            bg-blue-600 hover:bg-blue-500
            text-white text-sm font-medium
            py-3 rounded-xl
            transition-all duration-300
          "
        >
          View Project →
        </Link>
      </div>
    </div>
  );
}