"use client";
import { motion } from "framer-motion";

export default function CardProject({ title, description, tech, image, link }) {
  return (
    <motion.div
      whileHover={{
        y: -8,
        scale: 1.03,
        boxShadow: "0 12px 25px rgba(59,130,246,0.25)",
      }}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="relative overflow-hidden bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-2xl shadow-sm hover:shadow-lg flex flex-col transition-all duration-300"
    >
      {/* Gambar Project */}
      <div className="relative w-full h-44 overflow-hidden rounded-t-2xl">
        <motion.img
          src={image}
          alt={title}
          className="object-cover w-full h-full transition-transform duration-500 hover:scale-110"
          loading="lazy"
        />
      </div>

      {/* Konten */}
      <div className="flex flex-col flex-1 gap-3 p-5">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{title}</h3>
        <p className="text-sm text-gray-600 dark:text-gray-300 line-clamp-3">
          {description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mt-1">
          {tech.map((t) => (
            <span
              key={t}
              className="text-xs bg-blue-100/60 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 px-2 py-1 rounded-md font-medium"
            >
              {t}
            </span>
          ))}
        </div>

        {/* Tombol Link */}
        <div className="mt-auto">
          <motion.a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ x: 5 }}
            className="inline-block text-sm font-medium text-blue-600 dark:text-blue-400 hover:underline mt-3"
          >
            Lihat Proyek →
          </motion.a>
        </div>
      </div>

      {/* Efek Cahaya di Hover */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"
      ></motion.div>
    </motion.div>
  );
}
