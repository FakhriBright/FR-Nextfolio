"use client";

import { useState, useRef, useEffect } from "react";
import { Download, ExternalLink } from "lucide-react";

export default function DownloadCV() {
  return (
    <a
      href="/cv/web-developer-cv.pdf"
      download="M-Fakhri-Rizkian-CV.pdf"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-full bg-primary text-primary-foreground font-heading font-bold text-xs uppercase tracking-wider hover:opacity-95 transition-all duration-300 shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
    >
      <Download size={15} />
      <span>Download CV</span>
    </a>
  );
}
