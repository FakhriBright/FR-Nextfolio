"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const projects = [
  {
    title: "FR-Nextfolio",
    image: "/projects/nextfolio.png",
    desc: "Portofolio modern berbasis Next.js dengan animasi interaktif dan mode gelap.",
  },
  {
    title: "BEST Website",
    image: "/projects/best.png",
    desc: "Website organisasi siswa yang dirancang responsif dan dinamis.",
  },
  {
    title: "MCROBO Robotics",
    image: "/projects/mcrobo.png",
    desc: "Website komunitas robotik untuk menampilkan kegiatan dan proyek inovatif.",
  },
];

export default function ProjectsShowcase() {
  const [open, setOpen] = useState(null);

  return (
    <section>
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
        Projects 🚀
      </h2>
      <div className="space-y-4">
        {projects.map((proj, i) => (
          <div
            key={i}
            className="flex items-center gap-4 bg-gray-100 dark:bg-gray-800 p-4 rounded-xl cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-700 transition"
            onClick={() => setOpen(open === i ? null : i)}
          >
            <img
              src={proj.image}
              alt={proj.title}
              className="w-16 h-16 object-cover rounded-lg"
            />
            <div className="flex-1">
              <p className="font-semibold text-gray-900 dark:text-white">{proj.title}</p>
              <AnimatePresence>
                {open === i && (
                  <motion.p
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -5 }}
                    transition={{ duration: 0.3 }}
                    className="text-sm text-gray-600 dark:text-gray-300 mt-2"
                  >
                    {proj.desc}
                  </motion.p>
                )}
              </AnimatePresence>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
