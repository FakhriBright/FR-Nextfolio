"use client";
import { motion } from "framer-motion";
import TransitionProvider from "@/components/TransitionProvider";
import Link from "next/link";

export default function HomePage() {
  return (
    <TransitionProvider>
      <main className="relative overflow-hidden max-w-6xl mx-auto px-6 py-28 text-center space-y-16">
        {/*  Animated Background */}
        <motion.div
          className="absolute inset-0 z-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <motion.div
            className="absolute bottom-1/3 right-1/4 w-[350px] h-[350px] bg-purple-400/20 rounded-full blur-3xl"
            animate={{
              x: [0, -60, 70, 0],
              y: [0, -50, 30, 0],
            }}
            transition={{
              repeat: Infinity,
              duration: 18,
              ease: "easeInOut",
            }}
          />
        </motion.div>

        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative z-10 space-y-6"
        >
          <h1 className="text-5xl font-bold text-gray-900 dark:text-white">
            Halo, Saya{" "}
            <span className="text-blue-600 dark:text-blue-400">Moh. Fakhri Rizkian</span>
          </h1>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto text-lg">
            Seorang pelajar <span className="font-medium">SMK TI BAZMA</span> jurusan{" "}
            <span className="text-blue-600 dark:text-blue-400 font-semibold">
              Sistem Informasi, Jaringan, dan Aplikasi
            </span>{" "}
            yang fokus pada{" "}
            <span className="font-semibold">UI/UX Design</span> dan pengembangan website
            modern berbasis <span className="font-semibold">React & Next.js</span>.
          </p>

          {/* Tombol CTA aman (tidak reset theme) */}
          <div className="mt-10">
            <Link href="/about" passHref>
              <motion.button
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition shadow-md shadow-blue-500/20"
              >
                Jelajahi Portofolio →
              </motion.button>
            </Link>
          </div>
        </motion.div>

        {/*  Subtext */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="relative z-10 text-gray-500 dark:text-gray-400"
        >
        </motion.div>
      </main>
    </TransitionProvider>
  );
}
