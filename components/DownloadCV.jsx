"use client";
import { useState } from "react";
import { ChevronDown, Download } from "lucide-react";

export default function DownloadCV() {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative inline-block">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2 px-6 py-3.5 rounded-xl bg-primary text-black font-heading font-semibold hover:opacity-90 transition duration-300 shadow-lg shadow-primary/10"
      >
        <Download size={18} />
        Download CV
        <ChevronDown size={16} className={`transition-transform duration-300 ${open ? "rotate-180" : ""}`} />
      </button>

      {open && (
        <div className="absolute mt-2 w-56 rounded-xl border border-border bg-card shadow-2xl overflow-hidden z-50 animate-in fade-in slide-in-from-top-2 duration-200">
          <a
            href="/cv/web-developer-cv.pdf"
            download
            className="block px-4 py-3 text-sm text-foreground hover:bg-primary/10 hover:text-primary transition duration-300 font-heading font-medium"
          >
            CV Web Developer
          </a>
        </div>
      )}
    </div>
  );
}