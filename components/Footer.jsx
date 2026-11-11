"use client";

import Link from "next/link";
import { ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full px-6 md:px-12 lg:px-20 xl:px-28 py-12 border-t border-[#191919]/10 bg-[#F5F5F0] text-[#191919]">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Brand */}
        <div className="flex items-center gap-3">
          <div className="w-6 h-6 flex items-center justify-center">
            <img
              src="/logo/FR.png"
              alt="FR"
              className="w-5 h-5 object-contain invert"
            />
          </div>
          <span className="font-mono text-xs uppercase tracking-wider text-[#777873]">
            Moh. Fakhri Rizkian &bull; Web Developer
          </span>
        </div>

        {/* Verified Social Channels */}
        <div className="flex items-center gap-6 text-xs font-mono uppercase tracking-wider">
          <Link
            href="https://github.com/FakhriBright"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#777873] hover:text-[#191919] transition-colors"
          >
            GitHub
          </Link>
          <Link
            href="https://www.linkedin.com/in/m-fakhri-rizkian/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#777873] hover:text-[#191919] transition-colors"
          >
            LinkedIn
          </Link>
          <Link
            href="https://www.instagram.com/elrizkianf_/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#777873] hover:text-[#191919] transition-colors"
          >
            Instagram
          </Link>
          <Link
            href="mailto:moh.fakhririzkian@gmail.com"
            className="text-[#777873] hover:text-[#191919] transition-colors"
          >
            Email
          </Link>
        </div>

        {/* Back to top */}
        <button
          onClick={scrollToTop}
          aria-label="Back to top"
          className="p-2.5 rounded-full border border-[#191919]/15 bg-white text-[#777873] hover:text-[#191919] hover:border-[#191919]/30 transition-colors"
        >
          <ArrowUp size={14} />
        </button>

      </div>
    </footer>
  );
}
