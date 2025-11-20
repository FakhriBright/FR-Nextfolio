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
    desc: "Website e-commerce sederhana dengan filter & keranjang.",
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
    title: "UI Absensi Asrama",
    desc: "Desain absensi asholat asrama.",
    image: "/projects/loginbazma.png",
    link: "/projects",
  },
  {
    title: "UI Register LEVEL",
    desc: "Remake Website & Autentikasi @mail dengan Firebase.",
    image: "/projects/registerlevel.png",
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
    <section className="max-w-7xl mx-auto py-20 px-6 overflow-hidden">
      <div className="grid lg:grid-cols-2 gap-14 items-center">
        {/* LEFT CONTENT PANEL */}
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <p className="uppercase tracking-widest text-sm text-gray-500 dark:text-gray-400">
            Project Showcase
          </p>

          <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
            {projects[index].title}
          </h1>

          <p className="text-gray-600 dark:text-gray-300 leading-relaxed max-w-lg">
            {projects[index].desc}
          </p>

          {/* NAV BUTTONS */}
          <div className="flex gap-4 mt-6">
            <button
              onClick={prev}
              className="p-3 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 transition"
            >
              <ArrowLeft />
            </button>
            <button
              onClick={next}
              className="p-3 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 transition"
            >
              <ArrowRight />
            </button>
          </div>
        </motion.div>

        {/* RIGHT SIDE — FLOATING STACK + CARD WRAPPER */}
        <div className="relative h-[480px] flex items-center justify-center">
          {/* LAYER 3 */}
          <motion.img
            key={"b-" + index}
            src={projects[(index + 2) % total].image}
            className="absolute w-40 h-40 object-cover rounded-xl opacity-40 blur-[1px]"
            initial={{ y: 80, scale: 0.8 }}
            animate={{ y: 100, scale: 0.8 }}
            transition={{
              duration: 1.2,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />

          {/* LAYER 2 */}
          <motion.img
            key={"m-" + index}
            src={projects[(index + 1) % total].image}
            className="absolute w-56 h-56 object-cover rounded-xl opacity-70"
            initial={{ y: 30 }}
            animate={{ y: 50 }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />

          {/* 🎯 MAIN CARD (seperti versi lama, ada bingkai + tombol bawah) */}
          <motion.div
            key={"card-" + index}
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="relative w-80 bg-white dark:bg-gray-900 rounded-2xl shadow-2xl overflow-hidden border border-gray-200 dark:border-gray-700"
          >
            {/* MAIN IMAGE */}
            <img
              src={projects[index].image}
              alt={projects[index].title}
              className="w-full h-56 object-cover"
            />

            {/* TEXT + BUTTON */}
            <div className="p-5">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                {projects[index].title}
              </h3>

              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                {projects[index].desc}
              </p>

              {/* BUTTON → KE PROJECTS PAGE */}
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 mt-4 text-blue-600 dark:text-blue-400 font-medium hover:underline"
              >
                Lihat Semua <ExternalLink size={16} />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
