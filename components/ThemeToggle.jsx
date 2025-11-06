"use client";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    if (theme === "dark") document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
  }, [theme]);

  return (
    <button
  onClick={() => setTheme(theme === "light" ? "dark" : "light")}
  className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 transition-colors duration-300"
>
  {theme === "light" ? "🌙" : "☀️"}
</button>
  );
}
