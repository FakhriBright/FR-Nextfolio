"use client";
import { motion } from "framer-motion";
import { certificates } from "@/data/certificates";
import CardCertificate from "@/components/CardCertificate";

export default function CertificatesPage() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-24">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="text-3xl md:text-4xl font-bold mb-10 text-center dark:text-white"
      >
        Experience & Certificate  
      </motion.h1>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {certificates.map((c) => (
          <CardCertificate key={c.id} {...c} />
        ))}
      </div>
    </main>
  );
}
