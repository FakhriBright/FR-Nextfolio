"use client";
import { motion } from "framer-motion";

export default function DownloadButton() {
  return (
    <motion.a
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      href="/cv.pdf" // nanti bisa diganti link CV atau dokumen GitHub
      download
      className="border border-blue-600 text-blue-600 px-5 py-2 rounded-full hover:bg-blue-600 hover:text-white transition"
    >
      Unduh CV
    </motion.a>
  );
}
