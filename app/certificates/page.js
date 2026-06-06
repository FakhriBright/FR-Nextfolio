"use client";
import { motion } from "framer-motion";
import { certificates } from "@/data/certificates";
import CardCertificate from "@/components/CardCertificate";

export default function CertificatesPage() {
  return (
    <main className="relative min-h-screen max-w-7xl mx-auto px-6 py-20 md:py-28 overflow-hidden">
      {/* Background Solar Halos */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute w-[600px] h-[600px] bg-primary/3 rounded-full blur-[120px] top-[-100px] left-1/2 -translate-x-1/2" />
        <div className="absolute w-[500px] h-[500px] bg-accent/3 rounded-full blur-[120px] bottom-[-100px] right-[-100px]" />
      </div>

      <div className="relative z-10">
        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-4xl md:text-6xl font-bold font-display mb-16 text-center text-foreground uppercase tracking-tighter"
        >
          Credentials <span className="font-serif italic font-light lowercase text-primary">&</span> Achievements
        </motion.h1>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((c) => (
            <CardCertificate key={c.id} {...c} />
          ))}
        </div>
      </div>
    </main>
  );
}
