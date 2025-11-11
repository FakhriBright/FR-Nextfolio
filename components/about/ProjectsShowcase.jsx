"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const projects = [
  // ✅ Data utama dari versi lama + tambahan deploy aktif
  {
    title: "Website Portfolio",
    desc: "Ruang online untuk memperkenalkan diri, karya, dan perjalanan saya.",
    image: "/projects/portfolio.png",
    link: "https://mfakhriportfolio.netlify.app",
  },
  {
    title: "Aplikasi Todo React",
    desc: "Aplikasi daftar tugas dengan fitur tambah, centang, dan hapus.",
    image: "/projects/todo.png",
    link: "https://todolist-fakhri.netlify.app/",
  },
  {
    title: "Web Clone Java Gym",
    desc: "Remake website gym dengan login & register via Firebase Auth.",
    image: "/projects/javagym.png",
    link: "https://jawa-4fb70.web.app/",
  },
  {
    title: "Web Pokémon React",
    desc: "Aplikasi eksplorasi Pokémon dengan pencarian cepat dan detail stat.",
    image: "/projects/pokemon.png",
    link: "https://pokemon-fakhri.netlify.app/",
  },
  {
    title: "UI Design PKK",
    desc: "Prototype web PKK untuk menampilkan kegiatan, program, dan profil.",
    image: "/projects/pkk.png",
    link: "https://www.figma.com/proto/w3fhrYSScGiJq5EJnEWItu/Untitled",
  },
  {
    title: "Fakhri's Taskboard",
    desc: "Manajemen tugas dengan integrasi GitHub dan interface modern.",
    image: "/projects/taskboard.png",
    link: "https://fakhristaskboard.netlify.app/",
  },
  {
    title: "Fakhri Store",
    desc: "Website e-commerce sederhana yang di-deploy melalui GitHub.",
    image: "/projects/store.png",
    link: "https://fakhri-store.netlify.app/",
  },
  {
    title: "Cuaca Fakhri",
    desc: "Aplikasi cuaca real-time berbasis API dengan antarmuka bersih.",
    image: "/projects/cuaca.png",
    link: "https://cuacafakhri.netlify.app/",
  },
  {
    title: "Form Fakhri",
    desc: "Website form dengan validasi input yang di-deploy via Netlify.",
    image: "/projects/form.png",
    link: "https://form-fakhri.netlify.app/",
  },
];

export default function ProjectsShowcase() {
  const [index, setIndex] = useState(0);
  const total = projects.length;

  const next = () => setIndex((prev) => (prev + 1) % total);
  const prev = () => setIndex((prev) => (prev - 1 + total) % total);

  const current = projects[index];

  return (
    <section className="max-w-5xl mx-auto text-center relative">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-10">
        My Projects 
      </h2>

      {/* Tombol Navigasi */}
      <button
        onClick={prev}
        className="absolute top-1/2 left-0 transform -translate-y-1/2 z-10 p-2 bg-white dark:bg-gray-800 rounded-full shadow-md hover:scale-110 transition"
      >
        <ChevronLeft className="text-gray-700 dark:text-gray-200" />
      </button>
      <button
        onClick={next}
        className="absolute top-1/2 right-0 transform -translate-y-1/2 z-10 p-2 bg-white dark:bg-gray-800 rounded-full shadow-md hover:scale-110 transition"
      >
        <ChevronRight className="text-gray-700 dark:text-gray-200" />
      </button>

      {/* Isi Project */}
      <div className="overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, x: 70 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -70 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="flex flex-col items-center space-y-6"
          >
            <motion.img
              src={current.image}
              alt={current.title}
              className="w-56 h-36 object-cover rounded-2xl shadow-md ring-4 ring-blue-500/20"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            />
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                {current.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mt-2 max-w-md mx-auto">
                {current.desc}
              </p>
            </div>

            {/* Tombol Lihat */}
            <motion.a
              href={current.link}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              className="inline-block bg-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700 transition"
            >
              Lihat Proyek →
            </motion.a>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Indikator bawah */}
      <div className="flex justify-center gap-2 mt-6">
        {projects.map((_, i) => (
          <motion.div
            key={i}
            onClick={() => setIndex(i)}
            whileHover={{ scale: 1.2 }}
            className={`w-3 h-3 rounded-full cursor-pointer transition-all duration-300 ${
              i === index
                ? "bg-blue-600 dark:bg-blue-400"
                : "bg-gray-300 dark:bg-gray-700"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
