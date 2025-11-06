"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const path = usePathname();

  const links = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/projects", label: "Projects" },
    { href: "/certificates", label: "Certificates" }, // 🟢 Tambahan baru
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full backdrop-blur-lg bg-white/70 dark:bg-gray-900/70 border-b border-gray-200 dark:border-gray-700 shadow-sm z-50 transition-all duration-300">
      <div className="max-w-6xl mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo / Judul */}
        <motion.h1
          whileHover={{ scale: 1.05 }}
          className="font-bold text-lg dark:text-white tracking-wide"
        >
          <Link href="/">FR-Nextfolio</Link>
        </motion.h1>

        {/* Navigasi Utama */}
        <div className="flex items-center gap-6">
          {links.map((link) => (
            <Link key={link.href} href={link.href}>
              <motion.span
                whileHover={{ scale: 1.1 }}
                className={`relative transition-colors duration-300 ${
                  path === link.href
                    ? "text-blue-600 dark:text-blue-400 font-semibold"
                    : "text-gray-700 dark:text-gray-300"
                } hover:text-blue-500 dark:hover:text-blue-400`}
              >
                {link.label}

                {/* Garis bawah animasi */}
                {path === link.href && (
                  <motion.div
                    layoutId="underline"
                    className="absolute left-0 -bottom-1 w-full h-[2px] bg-blue-600 dark:bg-blue-400 rounded"
                  />
                )}
              </motion.span>
            </Link>
          ))}

          {/* Toggle Mode */}
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}
