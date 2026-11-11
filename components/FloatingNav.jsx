"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, User, Mail, FolderGit2, Award } from "lucide-react";

export default function FloatingNav() {
  const pathname = usePathname();

  const navItems = [
    { href: "/", icon: <Home size={17} />, label: "Home" },
    { href: "/projects", icon: <FolderGit2 size={17} />, label: "Projects" },
    { href: "/certificates", icon: <Award size={17} />, label: "Certificates" },
    { href: "/about", icon: <User size={17} />, label: "About" },
    { href: "/contact", icon: <Mail size={17} />, label: "Contact" },
  ];

  return (
    <motion.nav
      aria-label="Quick Navigation"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className="fixed bottom-6 right-6 z-40 bg-card/80 backdrop-blur-xl border border-border shadow-[0_12px_32px_rgba(0,0,0,0.15)] dark:shadow-[0_12px_32px_rgba(0,0,0,0.4)] rounded-full p-1.5 flex items-center gap-1.5 transition-colors duration-300"
    >
      {navItems.map((item) => {
        const active = pathname === item.href;
        return (
          <Link
            key={item.href}
            href={item.href}
            aria-label={item.label}
            className="group relative flex items-center focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-full"
          >
            <motion.div
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              className={`p-2.5 rounded-full border transition-all duration-300 ${
                active
                  ? "bg-primary text-primary-foreground border-primary shadow-sm"
                  : "bg-transparent border-transparent text-muted-foreground hover:text-foreground hover:bg-secondary/70 hover:border-border/60"
              }`}
            >
              {item.icon}
            </motion.div>

            {/* Accessible hover tooltip (desktop only) */}
            <span className="hidden sm:inline-block absolute -top-10 left-1/2 -translate-x-1/2 opacity-0 scale-90 group-hover:opacity-100 group-hover:scale-100 transition-all duration-200 bg-card text-foreground text-[10px] font-mono tracking-wider uppercase px-2.5 py-1 rounded-md border border-border shadow-md whitespace-nowrap pointer-events-none">
              {item.label}
            </span>
          </Link>
        );
      })}
    </motion.nav>
  );
}
