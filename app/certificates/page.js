"use client";

import { certificates } from "@/data/certificates";
import CardCertificate from "@/components/CardCertificate";

export default function CertificatesPage() {
  return (
    <div className="w-full px-6 md:px-12 lg:px-20 xl:px-28 py-12 md:py-20 min-h-screen bg-[#F3EFE5] text-[#171918]">
      {/* Header Section: Clean & Natural */}
      <div className="pt-4 pb-8 mb-12 border-b border-[#171918]/10">
        <div className="space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#B9FF66]/30 border border-[#B9FF66] text-[#171918] text-xs font-mono font-bold tracking-wider uppercase">
            <span>Verified Credentials</span>
            <span className="text-[#3157D5]">&bull;</span>
            <span>Honors</span>
          </div>

          <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black font-display tracking-tighter uppercase text-[#171918] leading-[0.9]">
            Certificates
            <br />
            <span className="font-serif italic font-light lowercase text-[#3157D5]">&amp; honors</span>
          </h1>
        </div>

        <p className="text-sm sm:text-base text-[#171918]/70 font-sans mt-4 max-w-2xl leading-relaxed">
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
