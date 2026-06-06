"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Navbar() {
  const pathname = usePathname();
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "dark";
    setTheme(savedTheme);
  }, []);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Projects", href: "/projects" },
    { name: "Certificates", href: "/certificates" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav className="backdrop-blur-md bg-background/60 sticky top-0 z-50 border-b border-border transition-colors duration-300">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-5">
        {/* Logo */}
        <Link href="/" className="flex items-center group">
          <div className="h-9 w-9 flex items-center justify-center overflow-visible transition duration-500 group-hover:scale-110">
            <img
              src="/logo/FR.png"
              alt="FR Logo"
              className="w-9 h-9 object-contain scale-[2.2] dark:invert-0 invert"
            />
          </div>
        </Link>

        {/* NAVIGATION MENU */}
        <div className="hidden md:flex items-center gap-10">
          {navItems.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`relative py-1 text-xs font-semibold tracking-widest uppercase transition-all duration-300 ${
                  active
                    ? "text-primary font-serif italic normal-case text-sm tracking-normal"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {item.name}

                {active && (
                  <motion.div
                    layoutId="activeNav"
                    className="absolute left-0 -bottom-1 h-[1.5px] w-full bg-primary"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            );
          })}
        </div>

        {/* Toggle Mode */}
        <div>
          <ThemeSwitch theme={theme} setTheme={setTheme} />
        </div>
      </div>
    </nav>
  );
}

/* ----------------------------------------------------------
   🌙 LIGHT / DARK MODE SWITCH (STUDIO STYLE)
-----------------------------------------------------------*/
function ThemeSwitch({ theme, setTheme }) {
  const isLight = theme === "light";

  return (
    <button
      onClick={() => setTheme(isLight ? "dark" : "light")}
      className="relative flex items-center justify-between gap-3 px-3 py-1.5 rounded-full border border-border bg-card/50 hover:bg-secondary/80 transition duration-300 group overflow-hidden"
      aria-label="Toggle theme"
    >
      <span className="text-[10px] uppercase tracking-widest font-heading font-bold text-muted-foreground group-hover:text-foreground transition duration-300">
        {isLight ? "Light" : "Dark"}
      </span>
      <div className="relative w-4 h-4 overflow-hidden flex items-center justify-center">
        <motion.div
          animate={{ y: isLight ? 0 : 15, opacity: isLight ? 1 : 0 }}
          transition={{ duration: 0.25 }}
          className="absolute text-xs"
        >
          ☀️
        </motion.div>
        <motion.div
          animate={{ y: isLight ? -15 : 0, opacity: isLight ? 0 : 1 }}
          transition={{ duration: 0.25 }}
          className="absolute text-xs text-primary"
        >
          🌙
        </motion.div>
      </div>
    </button>
  );
}
