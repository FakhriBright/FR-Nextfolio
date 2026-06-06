"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, User, Mail, FolderGit2 } from "lucide-react";

export default function FloatingNav() {
  const pathname = usePathname();

  const navItems = [
    { href: "/", icon: <Home size={18} />, label: "Home" },
    { href: "/about", icon: <User size={18} />, label: "About" },
    { href: "/projects", icon: <FolderGit2 size={18} />, label: "Projects" },
    { href: "/contact", icon: <Mail size={18} />, label: "Contact" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="fixed bottom-8 right-8 z-[80] bg-background/80 backdrop-blur-md shadow-[0_8px_32px_rgba(0,0,0,0.08)] dark:shadow-[0_8px_32px_rgba(0,0,0,0.4)] border border-border/80 rounded-full px-4 py-2.5 flex items-center gap-2.5 transition-colors duration-300"
    >
      {navItems.map((item) => {
        const active = pathname === item.href;
        return (
          <Link key={item.href} href={item.href} className="group relative flex items-center">
            <motion.div
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className={`p-2.5 rounded-full border transition-all duration-300 relative ${
                active
                  ? "bg-primary text-primary-foreground border-primary"
                  : "bg-card/50 border-border/40 text-muted-foreground hover:text-foreground hover:bg-secondary/60 hover:border-border"
              }`}
            >
              {item.icon}
            </motion.div>
            
            {/* Elegant label tooltip */}
            <span className="absolute -top-12 left-1/2 -translate-x-1/2 opacity-0 scale-90 group-hover:opacity-100 group-hover:scale-100 transition-all duration-200 bg-background/95 text-foreground text-[10px] font-bold tracking-widest uppercase px-3 py-1.5 rounded border border-border shadow-lg whitespace-nowrap pointer-events-none">
              {item.label}
            </span>
          </Link>
        );
      })}
    </motion.div>
  );
}
