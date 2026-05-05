"use client";
import { useState } from "react";
import { ChevronDown, Download } from "lucide-react";

export default function DownloadCV() {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative inline-block">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2 px-5 py-3 rounded-xl bg-blue-600 text-white font-medium hover:bg-blue-700 transition"
      >
        <Download size={18} />
        Download CV
        <ChevronDown size={16} />
      </button>

      {open && (
        <div className="absolute mt-2 w-56 rounded-xl border border-gray-700 bg-slate-900 shadow-xl overflow-hidden z-50">
          <a
            href="/cv/web-developer-cv.pdf"
            download
            className="block px-4 py-3 text-sm text-white hover:bg-slate-800 transition"
          >
            CV Web Developer
          </a>

          <a
            href="/cv/event-organizer-cv.pdf"
            download
            className="block px-4 py-3 text-sm text-white hover:bg-slate-800 transition"
          >
            CV Event Organizer
          </a>
        </div>
      )}
    </div>
  );
}