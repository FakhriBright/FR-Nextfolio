"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

export default function CardCertificate({ title, issuer, date, image, link }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="bg-white text-[#131411] rounded-2xl border border-black/10 p-4 shadow-sm flex flex-col justify-between h-full group hover:border-black/30 transition-all duration-300 hover:shadow-xl"
    >
      <div>
        {/* Certificate Image Frame */}
        <div className="relative overflow-hidden aspect-[16/11] rounded-xl bg-black/5 border border-black/10">
          <Image
            src={image}
            alt={title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            loading="lazy"
            quality={80}
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
          />
        </div>

        {/* Content Details */}
        <div className="pt-5 px-1 flex flex-col gap-2">
          <div className="flex items-center justify-between gap-4">
            <span className="text-[10px] uppercase font-mono font-bold tracking-wider text-black/60">
              {issuer}
            </span>
            <span className="text-[10px] uppercase font-mono tracking-wider text-black/45">
              {date}
            </span>
          </div>

          <h3 className="font-bold font-heading text-lg text-[#131411] group-hover:text-black transition-colors leading-snug">
            {title}
          </h3>
        </div>
      </div>

      <div className="pt-5">
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-black/15 bg-white hover:bg-[#131411] hover:text-white text-[#131411] text-xs font-heading font-bold tracking-wider uppercase py-2.5 transition-all duration-300"
        >
          <span>View Credential</span>
          <ExternalLink size={13} />
        </a>
      </div>
    </motion.article>
  );
}
