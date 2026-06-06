"use client";
import { motion } from "framer-motion";

export default function CardCertificate({ title, issuer, date, image, link }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="bg-card/30 backdrop-blur-md border border-border/85 p-2.5 shadow-md flex flex-col justify-between h-full group border-t-2 border-l-2 border-primary/10 rounded-none transition-all duration-500 hover:border-primary/45 hover:shadow-xl hover:shadow-primary/[0.02]"
    >
      <div>
        {/* Certificate Image Frame */}
        <div className="relative overflow-hidden h-52 bg-background border border-border/40">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-700 hover:scale-[1.03]"
          />
        </div>

        {/* Content Details */}
        <div className="pt-4 px-1 flex flex-col gap-2">
          <div className="flex items-center justify-between gap-4">
            <span className="text-[9px] uppercase font-bold tracking-widest text-primary font-heading">
              {issuer}
            </span>
            <span className="text-[9px] uppercase font-mono tracking-widest text-muted-foreground">
              [ {date} ]
            </span>
          </div>

          <h3 className="font-bold font-heading text-base text-foreground group-hover:text-primary transition duration-300 leading-snug">
            {title}
          </h3>
        </div>
      </div>

      <div className="pt-4">
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full text-center border border-primary/30 text-primary hover:text-primary-foreground hover:bg-primary text-xs font-heading font-bold tracking-widest uppercase py-3 transition-all duration-300"
        >
          View Certificate →
        </a>
      </div>
    </motion.div>
  );
}
