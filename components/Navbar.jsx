"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Navbar() {
  const pathname = usePathname();
  const [theme, setTheme] = useState("dark");

  // Terapkan theme ke <html> (supaya Tailwind dark: berfungsi)
  useEffect(() => {
    if (theme === "dark") document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
  }, [theme]);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Projects", href: "/projects" },
    { name: "Certificates", href: "/certificates" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav className="backdrop-blur-xl bg-white/10 dark:bg-black/20 sticky top-0 z-50 border-b border-white/10 dark:border-white/5">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* 🔥 Logo */}
        <Link href="/" className="flex items-center">
          <div className="h-10 w-10 flex items-center justify-center overflow-visible">
            <img
              src="/logo/FR.png"
              alt="FR Logo"
              className="w-10 h-10 object-contain scale-[2.5]" // 🔥 logo terlihat besar
            />
          </div>
        </Link>

        {/* 🔹 NAVIGATION MENU */}
        <div className="hidden md:flex gap-8">
          {navItems.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`relative text-sm font-medium transition ${
                  active
                    ? "text-blue-500"
                    : "text-gray-800 dark:text-gray-200 hover:text-blue-400"
                }`}
              >
                {item.name}

                {active && (
                  <motion.div
                    layoutId="activeNav"
                    className="absolute left-0 -bottom-1 h-[2px] w-full bg-blue-500 rounded-full"
                    transition={{ duration: 0.25 }}
                  />
                )}
              </Link>
            );
          })}
        </div>

        {/* 🌗 Toggle Mode */}
        <div>
          <ThemeSwitch theme={theme} setTheme={setTheme} />
        </div>
      </div>
    </nav>
  );
}

/* ----------------------------------------------------------
   🌙 LIGHT / DARK MODE SWITCH (iOS STYLE)
-----------------------------------------------------------*/
function ThemeSwitch({ theme, setTheme }) {
  const isLight = theme === "light";

  return (
    <button
      onClick={() => setTheme(isLight ? "dark" : "light")}
      className={`
        w-16 h-8 flex items-center rounded-full p-1 transition-all duration-300
        ${isLight ? "bg-yellow-400" : "bg-gray-700"}
      `}
    >
      <motion.div
        layout
        transition={{ type: "spring", stiffness: 250, damping: 20 }}
        animate={{
          x: isLight ? 32 : 0, // Geser kanan/kiri
        }}
        className={`
          w-6 h-6 rounded-full flex items-center justify-center shadow-md text-xs
          ${isLight ? "bg-white text-yellow-600" : "bg-black text-white"}
        `}
      >
        {isLight ? "☀️" : "🌙"}
      </motion.div>
    </button>
  );
}
