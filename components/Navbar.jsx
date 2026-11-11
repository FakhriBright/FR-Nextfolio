"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  const isHome = pathname === "/";

  const navLinks = [
    { name: "Projects", href: isHome ? "#works" : "/projects" },
    { name: "About", href: isHome ? "#profile" : "/about" },
    { name: "Certificates", href: "/certificates" },
    { name: "Contact", href: isHome ? "#contact" : "/contact" },
  ];

  return (
    <header className="sticky top-0 z-40 backdrop-blur-md bg-[#F3EFE5]/90 border-b border-[#171918]/[0.08] text-[#171918] transition-colors duration-300">
      <div className="w-full px-6 md:px-12 lg:px-20 xl:px-28 py-4 flex items-center justify-between">
        
        {/* Brand Identifier */}
        <Link
          href="/"
          className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#3157D5] rounded-md"
        >
          <div className="w-8 h-8 flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
            <img
              src="/logo/FR.png"
              alt="FR"
              className="w-7 h-7 object-contain invert transition-all"
            />
          </div>
          <div className="flex flex-col">
            <span className="font-heading font-extrabold text-xs uppercase tracking-[0.18em] text-[#171918]">
              M. Fakhri Rizkian
            </span>
            <span className="font-mono text-[9px] uppercase tracking-wider text-[#171918]/60">
              Web Developer
            </span>
          </div>
        </Link>

        {/* Minimal Desktop Navigation */}
        <nav aria-label="Main Navigation" className="hidden lg:flex items-center gap-8">
          {navLinks.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-xs font-heading font-semibold uppercase tracking-wider text-[#171918]/70 hover:text-[#171918] transition-colors duration-200 relative group py-1"
            >
              <span>{item.name}</span>
              <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#3157D5] group-hover:w-full transition-all duration-300" />
            </Link>
          ))}
          <a
            href="/cv/web-developer-cv.pdf"
            download="M-Fakhri-Rizkian-CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-heading font-bold uppercase tracking-wider px-4 py-2 rounded-full border border-[#171918]/25 hover:bg-[#171918] hover:text-[#F3EFE5] transition-all duration-300 shadow-sm"
          >
            CV
          </a>
        </nav>

        {/* Mobile View: Clean Web Developer label (No hamburger drawer, mobile uses BottomNav) */}
        <div className="lg:hidden flex items-center">
          <span className="text-[10px] font-mono uppercase tracking-wider text-[#171918]/65 px-2.5 py-1 rounded-full border border-[#171918]/15 bg-[#171918]/[0.03]">
            Web Developer
          </span>
        </div>

      </div>
    </header>
  );
}
