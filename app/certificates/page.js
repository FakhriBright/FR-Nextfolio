"use client";

import { certificates } from "@/data/certificates";
import CardCertificate from "@/components/CardCertificate";

export default function CertificatesPage() {
  return (
    <div className="w-full px-6 md:px-12 lg:px-20 xl:px-28 py-12 md:py-20 min-h-screen bg-[#F5F5F0] text-[#191919]">
      {/* Header Section: Clean Editorial */}
      <div className="pt-4 pb-10 mb-12 border-b border-[#191919]/10">
        <div className="space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E9E9E4] border border-[#191919]/10 text-[#191919] text-xs font-mono font-medium tracking-wider uppercase">
            <span>Credentials</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#B7F36B]" />
            <span>Honors</span>
          </div>

          <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black font-display tracking-tighter uppercase text-[#191919] leading-[0.9]">
            Certificates
            <br />
            <span className="font-serif italic font-light lowercase text-[#777873]">&amp; honors</span>
          </h1>
        </div>

        <p className="text-sm sm:text-base text-[#777873] font-sans mt-4 max-w-2xl leading-relaxed">
          Course certifications, leadership honors, and technical competencies acquired through vocational education and certified training programs.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {certificates.map((c) => (
          <CardCertificate key={c.id} {...c} />
        ))}
      </div>
    </div>
  );
}
