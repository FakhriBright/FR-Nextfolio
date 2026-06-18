"use client";
import { motion } from "framer-motion";
import { Instagram, Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden mt-12 pb-20 pt-16 border-t border-border bg-background transition-colors duration-300">
      {/* SOFT CINEMATIC AMBIENT GLOW */}
      <motion.div
        className="absolute left-1/2 -translate-x-1/2 bottom-[-150px] w-[500px] h-[300px] rounded-full bg-primary/10 dark:bg-primary/5 blur-[120px] pointer-events-none"
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.7, 0.9, 0.7],
        }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* TEXT SECTION */}
      <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold font-display text-foreground mb-6 uppercase tracking-tight leading-none">
            Let's create <span className="font-serif italic font-light lowercase text-primary">something</span> remarkable
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-sm md:text-base font-sans tracking-wide leading-relaxed">
            Want to connect or discuss a project? Reach out anytime — I'd love to collaborate.
          </p>
        </motion.div>

        {/* SOCIAL BAR */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15, duration: 0.6 }}
          className="flex items-center justify-center flex-wrap gap-6 md:gap-10 mt-12"
        >
          <FooterIcon href="https://www.instagram.com/elrizkianf_/" icon={<Instagram size={18} />} label="Instagram" />
          <FooterIcon href="https://github.com/FakhriBright" icon={<Github size={18} />} label="GitHub" />
          <FooterIcon href="https://www.linkedin.com/in/m-fakhri-rizkian/" icon={<Linkedin size={18} />} label="LinkedIn" />
          <FooterIcon href="mailto:selaluli0123@gmail.com" icon={<Mail size={18} />} label="Email" />
        </motion.div>

        {/* COPYRIGHT */}
        <motion.p
          className="text-center mt-16 text-muted-foreground font-sans text-xs uppercase tracking-widest"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          © 2026 — Crafted by{" "}
          <span className="font-semibold text-foreground tracking-wider hover:text-primary transition-colors duration-300 cursor-pointer">
            Moh. Fakhri Rizkian
          </span>
        </motion.p>
      </div>
    </footer>
  );
}

/* SOCIAL LINK ICON & LABEL */
function FooterIcon({ href, icon, label }) {
  return (
    <Link href={href} target="_blank" className="flex items-center gap-3 group text-muted-foreground hover:text-foreground transition-all duration-300">
      <motion.div
        whileHover={{ scale: 1.08, y: -2 }}
        whileTap={{ scale: 0.95 }}
        className="p-3 rounded-full border border-border bg-card/30 group-hover:border-primary group-hover:text-primary transition-all duration-300"
      >
        {icon}
      </motion.div>
      <span className="hidden sm:inline text-[10px] font-bold tracking-widest uppercase">{label}</span>
    </Link>
  );
}
