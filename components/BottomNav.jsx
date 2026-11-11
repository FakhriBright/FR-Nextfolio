"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, FolderGit2, User, Mail } from "lucide-react";

export default function BottomNav() {
  const pathname = usePathname();
  const isHome = pathname === "/";

  const navItems = [
    { label: "Home", href: "/", icon: Home, active: isHome },
    { label: "Projects", href: "/projects", icon: FolderGit2, active: pathname === "/projects" },
    { label: "About", href: isHome ? "#profile" : "/about", icon: User, active: pathname === "/about" },
    { label: "Contact", href: isHome ? "#contact" : "/contact", icon: Mail, active: pathname === "/contact" },
  ];

  return (
    <nav
      aria-label="Mobile Navigation"
      className="lg:hidden fixed bottom-4 inset-x-0 z-50 flex justify-center px-4 pointer-events-none pb-[env(safe-area-inset-bottom)]"
    >
      <div className="pointer-events-auto flex items-center gap-1 px-3 py-2 rounded-full bg-[#191919]/95 backdrop-blur-md border border-white/10 shadow-xl text-white">
        {navItems.map((item) => {
          const Icon = item.icon;
          return (
            <Link
              key={item.label}
              href={item.href}
              className={`flex items-center gap-2 px-3.5 py-2 rounded-full text-xs font-heading font-medium tracking-wide transition-colors ${
                item.active
                  ? "bg-[#B7F36B] text-[#191919] font-bold shadow-sm"
                  : "text-white/60 hover:text-white"
              }`}
            >
              <Icon size={14} />
              <span>{item.label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
