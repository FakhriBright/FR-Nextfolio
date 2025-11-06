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
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav className="flex justify-between items-center py-4 px-6 shadow-sm border-b dark:border-gray-700">
      <h1 className="font-bold text-lg dark:text-white">FR-Nextfolio</h1>
      <div className="flex items-center gap-4">
        {links.map((link) => (
          <Link key={link.href} href={link.href}>
            <motion.span
              whileHover={{ scale: 1.1 }}
              className={`${
                path === link.href ? "text-blue-600 font-semibold" : "text-gray-700 dark:text-gray-300"
              } hover:text-blue-500`}
            >
              {link.label}
            </motion.span>
          </Link>
        ))}
        <ThemeToggle />
      </div>
    </nav>
  );
}
