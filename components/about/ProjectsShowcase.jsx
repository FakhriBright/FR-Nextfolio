"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, ExternalLink } from "lucide-react";
import Link from "next/link";

const projects = [
  {
    title: "Web Pokémon React",
    desc: "Aplikasi eksplorasi Pokémon menggunakan API dan ReactJS.",
    image: "/projects/pokemon.png",
    link: "/projects",
  },
  {
    title: "Fakhri Store",
    desc: "Website e-commerce sederhana dengan fitur filter dan keranjang.",
    image: "/projects/store.png",
    link: "/projects",
  },
  {
    title: "Fakhri's Taskboard",
    desc: "Manajemen tugas dengan drag & drop realtime.",
    image: "/projects/taskboard.png",
    link: "/projects",
  },
  {
    title: "Re-creation & Authentication",
    desc: "Remake website & autentikasi email dengan Firebase.",
    image: "/projects/registerlevel.png",
    link: "/projects",
  },
  {
    title: "Aplikasi Cuaca",
    desc: "Menampilkan cuaca real-time berdasarkan lokasi.",
    image: "/projects/cuaca.png",
    link: "/projects",
  },
  {
    title: "Form Pengaduan",
    desc: "UI form input dengan desain modern dan clean.",
    image: "/projects/form.png",
    link: "/projects",
  },
  {
    title: "Web Portofolio (Next.js)",
    desc: "Web profil dengan tampilan profesional modern.",
    image: "/projects/profilee.png",
    link: "/projects",
  },
  {
    title: "Dashboard Smart Lamp",
    desc: "Kontrol lampu berbasis dashboard website.",
    image: "/projects/dashboard-siot.png",
    link: "/projects",
  },
  {
    title: "Apps List",
    desc: "Aplikasi catatan realtime sederhana.",
    image: "/projects/todo-list.png",
    link: "/projects",
  },
  {
    title: "Web Portofolio (HTML)",
    desc: "Web profil sederhana berbasis HTML, CSS, JS.",
    image: "/projects/profile.png",
    link: "/projects",
  },
];

export default function ProjectsShowcase() {
  const [index, setIndex] = useState(0);
  const total = projects.length;

  const next = () => setIndex((i) => (i + 1) % total);
  const prev = () => setIndex((i) => (i - 1 + total) % total);

  useEffect(() => {
    const run = setInterval(() => next(), 5000);
    return () => clearInterval(run);
  }, []);

  return (
    <section className="max-w-7xl mx-auto py-16 px-6 overflow-hidden border-t border-border/30">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* LEFT CONTENT PANEL (5 cols) */}
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-5 space-y-6"
        >
          <div className="flex items-center gap-3">
            <span className="text-[9px] font-mono tracking-widest text-primary uppercase">[ PROJECT {index + 1} OF {total} ]</span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display text-foreground leading-[0.9] tracking-tighter uppercase">
            Featured
            <br />
            <span className="font-serif italic font-light lowercase text-primary">creations</span>
          </h2>

          <h3 className="text-lg md:text-xl font-heading font-semibold text-foreground tracking-wide">
            {projects[index].title}
          </h3>

          <p className="text-muted-foreground leading-relaxed font-sans text-sm md:text-base">
            {projects[index].desc}
          </p>

          {/* NAV BUTTONS */}
          <div className="flex gap-3 pt-2">
            <button
              onClick={prev}
              className="p-3 rounded-full border border-border bg-card/40 text-muted-foreground hover:text-primary hover:border-primary transition-all duration-300"
              aria-label="Previous project"
            >
              <ArrowLeft size={16} />
            </button>
            <button
              onClick={next}
              className="p-3 rounded-full border border-border bg-card/40 text-muted-foreground hover:text-primary hover:border-primary transition-all duration-300"
              aria-label="Next project"
            >
              <ArrowRight size={16} />
            </button>
          </div>
        </motion.div>

        {/* RIGHT SIDE — FLOATING STACK + CARD WRAPPER (7 cols) */}
        <div className="lg:col-span-7 relative h-[400px] flex items-center justify-center">
          {/* LAYER 3 */}
          <motion.img
            key={"b-" + index}
            src={projects[(index + 2) % total].image}
            className="absolute w-44 h-44 object-cover border border-border bg-card/10 opacity-15 blur-[1px] filter grayscale pointer-events-none rounded-none"
            initial={{ y: 50, x: 100, scale: 0.8 }}
            animate={{ y: 70, x: 100, scale: 0.8 }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut"
            }}
          />

          {/* LAYER 2 */}
          <motion.img
            key={"m-" + index}
            src={projects[(index + 1) % total].image}
            className="absolute w-56 h-56 object-cover border border-border bg-card/20 opacity-35 filter grayscale pointer-events-none rounded-none"
            initial={{ y: -20, x: -90, scale: 0.9 }}
            animate={{ y: 0, x: -90, scale: 0.9 }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut"
            }}
          />

          {/* 🎯 MAIN CARD */}
          <motion.div
            key={"card-" + index}
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-80 bg-card/40 backdrop-blur-md border border-border/80 p-2.5 pb-6 shadow-2xl overflow-hidden group border-t-2 border-l-2 border-primary/20 rounded-none transition-all duration-300 hover:border-primary/40"
          >
            {/* MAIN IMAGE */}
            <div className="relative overflow-hidden h-52 bg-background border border-border/40">
              <img
                src={projects[index].image}
                alt={projects[index].title}
                className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-700 ease-out hover:scale-[1.03]"
              />
            </div>

            {/* TEXT + BUTTON */}
            <div className="pt-4 px-1">
              <h3 className="text-lg font-bold font-heading text-foreground mb-1">
                {projects[index].title}
              </h3>

              <p className="text-xs text-muted-foreground font-sans leading-relaxed min-h-[36px]">
                {projects[index].desc}
              </p>

              {/* BUTTON → KE PROJECTS PAGE */}
              <Link
                href="/projects"
                className="inline-flex items-center gap-1.5 mt-4 text-[10px] font-bold tracking-widest uppercase text-primary hover:text-foreground transition duration-300"
              >
                Explore Showcase <ExternalLink size={11} />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
