"use client";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [theme, setTheme] = useState("dark"); // 🔥 default mode = DARK
  const [mounted, setMounted] = useState(false);

  // ⏳ Hindari flicker (FOUC)
  useEffect(() => {
    const saved = localStorage.getItem("theme");

    if (saved) {
      setTheme(saved);
      document.documentElement.classList.toggle("dark", saved === "dark");
    } else {
      // default dark jika belum ada simpanan apapun
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }

    setMounted(true);
  }, []);

  // Update theme ketika tombol ditekan
  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);

    // update class html
    document.documentElement.classList.toggle("dark", newTheme === "dark");

    // simpan preferensi user
    localStorage.setItem("theme", newTheme);
  };

  if (!mounted) return null; // cegah error hydration

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 transition-colors duration-300"
    >
      {theme === "light" ? "🌙" : "☀️"}
    </button>
  );
}
