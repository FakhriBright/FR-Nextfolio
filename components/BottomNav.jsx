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
      className="lg:hidden fixed bottom-4 inset-x-0 z-50 flex justify-center px-2 pointer-events-none pb-[env(safe-area-inset-bottom)]"
    >
      <div className="pointer-events-auto flex items-center justify-center gap-0.5 sm:gap-1 p-1.5 rounded-full bg-[#191A23] border-2 border-black shadow-[0_10px_30px_rgba(0,0,0,0.4)] text-white max-w-[calc(100vw-16px)]">
        {navItems.map((item) => {
          const Icon = item.icon;
          return (
            <Link
              key={item.label}
              href={item.href}
              className={`flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-full text-[11px] sm:text-xs font-heading transition-all whitespace-nowrap ${
                item.active
                  ? "bg-[#B9FF66] text-[#191A23] font-bold shadow-sm"
                  : "text-white hover:text-[#B9FF66] hover:bg-white/10 font-medium"
              }`}
            >
              <Icon size={14} className="shrink-0" />
              <span>{item.label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}

