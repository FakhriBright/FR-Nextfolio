"use client";
import { motion } from "framer-motion";

export default function CardProject({ title, description, tech, image, link }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-4 flex flex-col gap-3"
    >
      <img src={image} alt={title} className="rounded-lg object-cover h-40 w-full" />
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{title}</h3>
      <p className="text-gray-600 dark:text-gray-300">{description}</p>
      <div className="flex flex-wrap gap-2">
        {tech.map((t) => (
          <span key={t} className="text-xs bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-2 py-1 rounded">
            {t}
          </span>
        ))}
      </div>
      <a href={link} target="_blank" className="text-blue-600 hover:underline mt-auto text-sm">Lihat Proyek →</a>
    </motion.div>
  );
}
