"use client";
import { motion } from "framer-motion";
import DownloadButton from "@/components/DownloadButton";

export default function HomePage() {
  return (
    <main className="flex flex-col items-center justify-center text-center min-h-[80vh] px-6">
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4"
      >
        Hi, I’m <span className="text-blue-600">Fakhri Rizkian</span> 👋
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="text-gray-600 dark:text-gray-300 max-w-xl mb-6"
      >
        Saya seorang pelajar SIJA yang fokus mempelajari UI/UX dan pengembangan web modern.
        Selamat datang di portofolio saya yang dibangun dengan Next.js, Tailwind CSS, dan Framer Motion.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.4 }}
        className="flex gap-4"
      >
        <a
          href="/projects"
          className="bg-blue-600 text-white px-5 py-2 rounded-full hover:bg-blue-700 transition"
        >
          Lihat Projects
        </a>
        <DownloadButton />
      </motion.div>
    </main>
  );
}
