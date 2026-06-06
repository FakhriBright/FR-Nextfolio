"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

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
        group rounded-none overflow-hidden
        border border-border/85
        bg-card/30
        backdrop-blur-md
        hover:border-primary/45
        transition-all duration-500
        hover:shadow-xl hover:shadow-primary/[0.02]
        flex flex-col h-full border-t-2 border-l-2 border-primary/10
      "
    >
      {/* Media Container */}
      <div className="relative w-full h-52 bg-background overflow-hidden border-b border-border/40">
        {mediaType === "carousel" ? (
          <>
            <Image
              src={images[currentSlide]}
              alt={title}
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover filter grayscale group-hover:grayscale-0 transition-all duration-700 hover:scale-[1.03]"
            />

            {/* dots */}
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-20">
              {images.map((_, i) => (
                <div
                  key={i}
                  className={`w-1.5 h-1.5 transition-all duration-300 rounded-none ${
                    i === currentSlide
                      ? "bg-primary w-3.5"
                      : "bg-white/40"
                  }`}
                />
              ))}
            </div>
          </>
        ) : mediaType === "video" ? (
          <video
            src={video}
            controls
            preload="metadata"
            className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-700"
          />
        ) : (
          <Image
            src={image}
            alt={title}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            loading="lazy"
            quality={75}
            className="object-cover filter grayscale group-hover:grayscale-0 transition-all duration-700 hover:scale-[1.03]"
          />
        )}

        <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent pointer-events-none" />
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-1 justify-between">
        <div>
          <div className="flex items-center justify-between gap-4 mb-2">
            <span className="text-[9px] uppercase font-bold tracking-widest text-primary font-heading">
              {category}
            </span>
            <span className="text-[8px] font-mono text-muted-foreground">
              [ CASE STUDY ]
            </span>
          </div>

          <h3 className="text-xl font-bold font-heading text-foreground mb-3 leading-tight group-hover:text-primary transition duration-300">
            {title}
          </h3>

          <p className="text-sm text-muted-foreground font-sans leading-relaxed mb-5 min-h-[72px]">
            {description}
          </p>

          {/* Tech stack */}
          <div className="flex flex-wrap gap-1.5 mb-6">
            {tech?.map((item, i) => (
              <span
                key={i}
                className="text-[9px] px-2.5 py-1 bg-card/60 text-muted-foreground border border-border/80 hover:border-primary/40 hover:text-primary transition duration-300 uppercase tracking-wider font-bold"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* Button */}
        <Link
          href={link}
          target="_blank"
          className="
            block w-full text-center
            border border-primary/30 text-primary hover:text-primary-foreground hover:bg-primary
            text-xs font-heading font-bold tracking-widest uppercase
            py-3 transition-all duration-300
          "
        >
          View Project →
        </Link>
      </div>
    </div>
  );
}