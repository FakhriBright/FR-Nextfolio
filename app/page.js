"use client";
import { motion } from "framer-motion";
import TransitionProvider from "@/components/TransitionProvider";
import Link from "next/link";

export default function HomePage() {
  return (
    <TransitionProvider>
      <main className="relative overflow-hidden max-w-7xl mx-auto px-6 py-28">
        {/* GRID 2 COLUMN — TEXT LEFT + ROBOT RIGHT */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center relative z-10">
          {/* ========================= */}
          {/* LEFT SECTION — TEXT */}
          {/* ========================= */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-6 text-left"
          >
            <p className="px-4 py-1 inline-block rounded-full border border-gray-400/40 text-gray-700 dark:text-gray-300 text-sm">
              INTRODUCING Δ
            </p>

            <h1 className="text-6xl font-extrabold text-gray-900 dark:text-white leading-tight">
              Portfolio
              <br />
              <span className="text-blue-600 dark:text-blue-400">
                Moh.Fakhri Rizkian
              </span>
            </h1>

           <p className="text-gray-600 dark:text-gray-300 max-w-2xl text-lg">
  An Information Systems, Networking, and Applications student at
  <span className="font-medium"> SMK TI BAZMA</span>, passionate about
  <span className="font-semibold"> UI/UX Design</span> and modern web development,
  specializing in building responsive and interactive interfaces using
  <span className="font-semibold"> React & Next.js</span>, and developing
  scalable web applications with
  <span className="font-semibold"> Laravel</span>.
</p>

            {/* CTA BUTTONS */}
            <div className="flex gap-4 pt-4">
            <a href="/cv/fakhri-cv.pdf" download>
  <motion.button
    whileHover={{ scale: 1.08 }}
    whileTap={{ scale: 0.95 }}
    className="px-6 py-3 rounded-full bg-transparent border border-blue-500/70 text-blue-500 hover:bg-blue-500 hover:text-white transition font-medium"
  >
    Download CV 
  </motion.button>
</a>

              <Link href="/about">
                <motion.button
                  whileHover={{ scale: 1.08 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-3 rounded-full bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-white hover:bg-gray-300 dark:hover:bg-gray-700 transition font-medium"
                >
                  Get Started →
                </motion.button>
              </Link>
            </div>
          </motion.div>

          {/* ========================= */}
          {/* RIGHT SECTION — SPLINE ROBOT */}
          {/* ========================= */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full h-full flex justify-center lg:justify-end"
          >
            <spline-viewer
              url="https://prod.spline.design/9Uc6XsHmU3m91QLA/scene.splinecode"
              follow-pointer="true"
              style={{
                width: "650px",
                height: "650px",
                filter: "drop-shadow(0 0 25px rgba(120,0,255,0.5))",
              }}
            ></spline-viewer>
          </motion.div>
        </div>
      </main>
    </TransitionProvider>
  );
}
