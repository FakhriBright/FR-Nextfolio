"use client";
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Web Pokémon React",
    desc: "Aplikasi eksplorasi Pokémon menggunakan API dan ReactJS.",
    image: "/projects/pokemon.png",
    link: "https://pokemon-fakhri.netlify.app/",
  },
  {
    title: "Fakhri Store",
    desc: "Website e-commerce sederhana dengan filter & keranjang.",
    image: "/projects/store.png",
    link: "https://fakhri-store.netlify.app/",
  },
  {
    title: "Fakhri's Taskboard",
    desc: "Manajemen tugas dengan drag & drop realtime.",
    image: "/projects/taskboard.png",
    link: "https://fakhristaskboard.netlify.app/",
  },
  {
    title: "UI Absensi Asrama",
    desc: "Desain absensi asholat asrama.",
    image: "/projects/loginbazma.png",
    link: "https://www.figma.com/proto/...bazma", // isi dengan link figma kamu
  },
  {
    title: "UI Register LEVEL",
    desc: "Remake Website & Autentikasi @mail dengan Firebase.",
    image: "/projects/registerlevel.png",
    link: "https://jawa-4fb70.web.app/",
  },
  {
    title: "Web Portofolio",
    desc: "Web profil dengan tema profesional.",
    image: "/projects/profile.png",
    link: "https://mfakhriportfolio.netlify.app/",
  },
  {
    title: "Form Pengaduan",
    desc: "UI form input pendaftaran dengan tampilan clean.",
    image: "/projects/form.png",
    link: "https://form-fakhri.netlify.app/",
  },
  {
    title: "Aplikasi Cuaca",
    desc: "Menampilkan cuaca real-time berdasarkan lokasi.",
    image: "/projects/cuaca.png",
    link: "https://cuacafakhri.netlify.app/",
  },
  {
    title: "Apps List",
    desc: "Memberikan catatan realtime untuk anda.",
    image: "/projects/todo-list.png",
    link: "https://todolist-fakhri.netlify.app/",
  },
];

export default function ProjectsShowcase() {
  const [index, setIndex] = useState(0);
  const total = projects.length;
  const isAnimatingRef = useRef(false);
  const [isDragging, setIsDragging] = useState(false);

  const lock = () => {
    isAnimatingRef.current = true;
    setTimeout(() => (isAnimatingRef.current = false), 850);
  };

  const goNext = () => {
    if (isAnimatingRef.current) return;
    lock();
    setIndex((prev) => (prev + 1) % total);
  };
  const goPrev = () => {
    if (isAnimatingRef.current) return;
    lock();
    setIndex((prev) => (prev - 1 + total) % total);
  };

  useEffect(() => {
    const t = setInterval(() => {
      if (!isAnimatingRef.current && !isDragging) goNext();
    }, 6000);
    return () => clearInterval(t);
  }, [isDragging]);

  return (
    <section className="max-w-7xl mx-auto text-center relative py-20 overflow-hidden select-none">
      <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12">
        My Projects
      </h2>

      {/* Tombol navigasi */}
      <button
        onClick={goPrev}
        className="absolute top-1/2 left-6 transform -translate-y-1/2 z-20 bg-white/30 dark:bg-gray-800/40 p-3 rounded-full hover:scale-110 transition"
      >
        <ChevronLeft className="text-gray-900 dark:text-gray-200" />
      </button>
      <button
        onClick={goNext}
        className="absolute top-1/2 right-6 transform -translate-y-1/2 z-20 bg-white/30 dark:bg-gray-800/40 p-3 rounded-full hover:scale-110 transition"
      >
        <ChevronRight className="text-gray-900 dark:text-gray-200" />
      </button>

      {/* Carousel */}
      <div className="relative flex justify-center items-center h-[460px]">
        {projects.map((project, i) => {
          let offset = i - index;
          if (offset > total / 2) offset -= total;
          if (offset < -total / 2) offset += total;

          const isCenter = offset === 0;
          const scale = isCenter ? 1 : 0.78;
          const opacity = isCenter ? 1 : 0.45;
          const translateX = offset * 320;
          const rotateY = offset * -12;
          const zIndex = isCenter ? 50 : 10;

          return (
            <motion.div
              key={i}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              onDragStart={() => setIsDragging(true)}
              onDragEnd={(_, info) => {
                setIsDragging(false);
                if (info.offset.x > 80) goPrev();
                else if (info.offset.x < -80) goNext();
              }}
              style={{ zIndex }}
              animate={{
                x: translateX,
                scale,
                opacity,
                rotateY,
                transition: { duration: 0.8, ease: [0.22, 0.8, 0.22, 1] },
              }}
              className="absolute cursor-grab active:cursor-grabbing"
            >
              <div
                className={`rounded-2xl overflow-hidden shadow-2xl border transition-all duration-300 ${
                  isCenter
                    ? "bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-700"
                    : "bg-gray-100 dark:bg-gray-800 border-transparent"
                }`}
                style={{ width: isCenter ? 360 : 280 }}
              >
                {/* Mockup Style Card */}
                <div className="relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className={`w-full object-cover ${
                      isCenter ? "h-[220px]" : "h-[160px]"
                    }`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-70" />
                  {isCenter && (
                    <div className="absolute bottom-3 left-3 text-left text-white">
                      <h3 className="text-lg font-semibold drop-shadow">
                        {project.title}
                      </h3>
                    </div>
                  )}
                </div>

                {isCenter && (
                  <div className="p-5">
                    <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                      {project.desc}
                    </p>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 mt-4 text-blue-600 dark:text-blue-400 hover:underline font-medium"
                    >
                      Lihat Proyek <ExternalLink size={16} />
                    </a>
                  </div>
                )}
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Dots */}
      <div className="flex justify-center gap-2 mt-10">
        {projects.map((_, i) => (
          <button
            key={i}
            onClick={() => {
              if (isAnimatingRef.current) return;
              lock();
              setIndex(i);
            }}
            className={`w-3 h-3 rounded-full transition ${
              i === index
                ? "bg-blue-600 dark:bg-blue-400 scale-110"
                : "bg-gray-400 dark:bg-gray-600"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
