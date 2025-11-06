"use client";

import { AnimatePresence, motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { usePathname } from "next/navigation";
import { Inter, Poppins } from "next/font/google";
import "../styles/globals.css"; // ganti sesuai lokasi globals.css kamu

// ✅ Tambahkan font profesional
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const poppins = Poppins({
  weight: ["400", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

export default function RootLayout({ children }) {
  const pathname = usePathname();

  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <body className="font-[var(--font-inter)] bg-white dark:bg-gray-900 transition-colors duration-300">
        <Navbar />

        {/* ✨ Animasi transisi halaman */}
        <AnimatePresence mode="wait">
          <motion.div
            key={pathname}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="min-h-[80vh]"
          >
            {children}
          </motion.div>
        </AnimatePresence>

        <Footer />
      </body>
    </html>
  );
}
