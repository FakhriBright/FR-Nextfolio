"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { ExternalLink, Github } from "lucide-react";

export default function CardProject({
  title,
  description,
  image,
  images,
  video,
  mediaType,
  link,
  github,
  tech,
  category,
}) {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    if (mediaType === "carousel" && images?.length > 1) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % images.length);
      }, 3000);

      return () => clearInterval(interval);
    }
  }, [mediaType, images]);

  return (
    <article className="group rounded-2xl overflow-hidden border border-[#191919]/10 bg-white hover:border-[#191919]/30 transition-all duration-300 hover:shadow-xl flex flex-col h-full text-[#191919]">
      {/* Media Container */}
      <div className="relative w-full aspect-[16/10] bg-[#E9E9E4] overflow-hidden border-b border-[#191919]/10">
        {mediaType === "carousel" ? (
          <>
            <Image
              src={images[currentSlide]}
              alt={`${title} - image ${currentSlide + 1}`}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.03]"
            />
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-20">
              {images.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setCurrentSlide(i)}
                  aria-label={`Go to slide ${i + 1}`}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    i === currentSlide ? "bg-[#B7F36B] w-5" : "bg-white/70 w-1.5"
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
            className="w-full h-full object-cover"
          />
        ) : (
          <Image
            src={image}
            alt={title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            loading="lazy"
            quality={80}
            className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.03]"
          />
        )}

        {/* Category Pill */}
        <div className="absolute top-3 left-3 z-10 pointer-events-none">
          <span className="px-3 py-1 rounded-full bg-[#191919]/80 backdrop-blur-md text-[#F5F5F0] text-[10px] font-mono font-medium uppercase tracking-wider">
            {category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-1 justify-between gap-5">
        <div className="space-y-3">
          <h3 className="text-xl font-bold font-heading text-[#191919] group-hover:text-black transition-colors leading-tight">
            {title}
          </h3>

          <p className="text-sm text-[#777873] font-sans leading-relaxed">
            {description}
          </p>

          {/* Tech Badges */}
          <div className="flex flex-wrap gap-1.5 pt-1">
            {tech?.map((item, i) => (
              <span
                key={i}
                className="text-[10px] px-2.5 py-1 rounded-md bg-[#E9E9E4] border border-[#191919]/10 text-[#191919] font-mono font-medium"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-2 pt-4 border-t border-[#191919]/10">
          {link && (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-full bg-[#191919] text-[#F5F5F0] font-heading font-medium text-xs uppercase tracking-wider hover:bg-[#B7F36B] hover:text-[#191919] transition-all duration-300 shadow-sm"
            >
              <span>View Project</span>
              <ExternalLink size={13} />
            </a>
          )}

          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View Source Code on GitHub"
              className="inline-flex items-center justify-center p-2.5 rounded-full border border-[#191919]/15 bg-white hover:bg-[#E9E9E4] text-[#191919] transition-colors"
            >
              <Github size={15} />
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
