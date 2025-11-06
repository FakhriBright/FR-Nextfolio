'use client'
import { motion } from 'framer-motion'

export default function CardProject({ title, desc, link }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="border rounded-xl p-4 bg-white dark:bg-gray-800 shadow-md"
    >
      <h3 className="text-lg font-bold">{title}</h3>
      <p className="text-sm text-gray-500">{desc}</p>
      <a href={link} className="text-blue-500 hover:underline">Lihat →</a>
    </motion.div>
  )
}
