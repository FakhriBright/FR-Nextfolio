"use client";
import { motion } from "framer-motion";

export default function CardCertificate({ title, issuer, date, image, link }) {
  return (
    <motion.div
      whileHover={{
        scale: 1.03,
        boxShadow: "0 10px 25px rgba(59,130,246,0.3)",
      }}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700 overflow-hidden shadow-sm transition-all"
    >
      <div className="relative">
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover transition-transform duration-500 hover:scale-110"
        />
      </div>
      <div className="p-5 flex flex-col gap-2">
        <h3 className="font-semibold text-lg text-gray-900 dark:text-white">{title}</h3>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          {issuer} • <span className="italic">{date}</span>
        </p>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-blue-600 hover:underline mt-2"
        >
          Lihat Sertifikat →
        </a>
      </div>
    </motion.div>
  );
}
