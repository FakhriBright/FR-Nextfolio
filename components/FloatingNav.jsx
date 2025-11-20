"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { Home, User, Mail, GalleryHorizontal } from "lucide-react";

export default function FloatingNav() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="
        fixed bottom-6 right-6 z-[80] 
        bg-white/80 dark:bg-gray-900/80 
        backdrop-blur-xl shadow-xl border 
        border-gray-300 dark:border-gray-700 
        rounded-full px-5 py-3 flex items-center gap-5
      "
    >
      <NavIcon href="/" icon={<Home size={22} />} label="Home" />
      <NavIcon href="/about" icon={<User size={22} />} label="About" />
      <NavIcon href="/projects" icon={<GalleryHorizontal size={22} />} label="Projects" />
      <NavIcon href="/contact" icon={<Mail size={22} />} label="Contact" />
    </motion.div>
  );
}

function NavIcon({ href, icon, label }) {
  return (
    <Link href={href} className="group relative flex items-center">
      <motion.div
        whileHover={{ scale: 1.12, y: -3 }}
        whileTap={{ scale: 0.92 }}
        className="
          p-3 rounded-full bg-gray-100 dark:bg-gray-800 
          shadow-inner group-hover:shadow-md transition cursor-pointer
        "
      >
        {icon}
      </motion.div>

      {/* Label bubble */}
      <span
        className="
          absolute -top-8 left-1/2 -translate-x-1/2
          opacity-0 group-hover:opacity-100 
          transition bg-black text-white text-xs 
          px-2 py-1 rounded-md whitespace-nowrap
        "
      >
        {label}
      </span>
    </Link>
  );
}
