"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const certifications = [
  {
    id: "uxwriting",
    title: "UX Writing",
    issuer: "MySkill Indonesia",
    date: "2025",
    logo: "/certificates/UX Writing.png",
    desc: "Memahami teknik penulisan mikro untuk meningkatkan pengalaman pengguna melalui konten digital yang efektif dan humanis.",
  },
  {
    id: "uiux",
    title: "UI/UX Design",
    issuer: "MySkill Indonesia",
    date: "2025",
    logo: "/certificates/UIUX Design.jpg",
    desc: "Menyelesaikan pelatihan intensif UI/UX Design menggunakan Figma, termasuk riset pengguna, prototyping, dan usability testing.",
  },
  {
    id: "teladan",
    title: "Teladan Kerapihan",
    issuer: "SMK TI BAZMA",
    date: "2024",
    logo: "/certificates/Teladan Kerapihan.jpeg",
    desc: "Dianugerahi penghargaan atas kerapihan, kedisiplinan, dan penampilan profesional di lingkungan sekolah.",
  },
  {
    id: "fosjabarroad",
    title: "Road Show FOSJABAR",
    issuer: "Forum OSIS Jawa Barat",
    date: "2024",
    logo: "/certificates/Road Show Fosjabar.jpg",
    desc: "Berpartisipasi aktif dalam kegiatan Road Show FOSJABAR untuk memperkuat jaringan kepemimpinan pelajar Jawa Barat.",
  },
  {
    id: "publicspeaking",
    title: "Public Speaking",
    issuer: "MySkill Indonesia",
    date: "2025",
    logo: "/certificates/Public Speaking.jpg",
    desc: "Meningkatkan kemampuan berbicara di depan umum dan membangun rasa percaya diri dalam berbagai situasi formal.",
  },
  {
    id: "paskibra",
    title: "Paskibra Kecamatan Ciampea",
    issuer: "Kecamatan Ciampea",
    date: "2023",
    logo: "/certificates/Paskibra Kecamatan.jpeg",
    desc: "Menjadi bagian dari pengibar bendera kecamatan, menunjukkan dedikasi dan disiplin tinggi.",
  },
  {
    id: "fosjabaronline",
    title: "FOSJABAR Temu Online",
    issuer: "Forum OSIS Jawa Barat",
    date: "2024",
    logo: "/certificates/Fosjabar Temu Online.png",
    desc: "Mengikuti kegiatan FOSJABAR secara daring yang membahas isu kepemudaan dan peran pelajar dalam masyarakat digital.",
  },
  {
    id: "excel",
    title: "DQLAB Basic Excel",
    issuer: "DQLab",
    date: "2024",
    logo: "/certificates/dqlab_basic_excel.png",
    desc: "Menguasai dasar Excel termasuk formula, pengolahan data, dan visualisasi grafik.",
  },
  {
    id: "datasci",
    title: "Data Science Explorer",
    issuer: "DQLab",
    date: "2024",
    logo: "/certificates/Data Scince.png",
    desc: "Dasar-dasar data science: analisis data, statistik, dan eksplorasi dataset menggunakan Python.",
  },
  {
    id: "cyber",
    title: "Cyber Security Course",
    issuer: "MySkill Indonesia",
    date: "2025",
    logo: "/certificates/Cyber Security Course.png",
    desc: "Belajar konsep keamanan digital, manajemen password, perlindungan data, dan etika keamanan online.",
  },
  {
    id: "advokasi",
    title: "Advokasi Dispora Bogor",
    issuer: "Dispora Kabupaten Bogor",
    date: "2024",
    logo: "/certificates/Advokasi Dispora.jpeg",
    desc: "Berperan aktif dalam program advokasi pemuda tingkat Kabupaten.",
  },
  {
    id: "ketuaosis",
    title: "Ketua OSIS SMK TI BAZMA",
    issuer: "SMK TI BAZMA",
    date: "2024",
    logo: "/certificates/Ketua OSIS.png",
    desc: "Memimpin organisasi siswa, mengelola program, dan menjadi representatif utama sekolah.",
  },
  {
    id: "libasta",
    title: "Sertifikat LIBASTA 2025",
    issuer: "SMK TI BAZMA",
    date: "2025",
    logo: "/certificates/Sertifikat LIBASTA 2025.jpg",
    desc: "Panitia dan peserta aktif LIBASTA 2025 dalam kegiatan sekolah dan pengembangan karakter.",
  },
  {
    id: "esq",
    title: "ESQ Leadership Center",
    issuer: "ESQ Indonesia",
    date: "2025",
    logo: "/certificates/ESQ Leadership Center.jpg",
    desc: "Pelatihan kepemimpinan berbasis kecerdasan emosional & spiritual bersama ESQ Leadership Center.",
  },
  {
    id: "Pidato",
    title: "MANSION 3",
    issuer: "SMAN 1 Leuwiliyang",
    date: "2025",
    logo: "/certificates/mansion3.png",
    desc: "Ajang perlombaan tingkat JABODETABEK & Banten.",
  },
];

export default function AboutCertification() {
  const [selected, setSelected] = useState(certifications[0]);

  return (
    <section className="max-w-7xl mx-auto px-6 py-12">
      <h2 className="text-3xl md:text-5xl font-bold font-display text-foreground mb-12 uppercase tracking-tighter">
        Credentials <span className="font-serif italic font-light lowercase text-primary">&</span> Achievements
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* List kiri (7 cols) */}
        <div className="lg:col-span-7 space-y-1 overflow-y-auto max-h-[550px] pr-4 scrollbar-thin">
          {certifications.map((cert) => {
            const active = selected.id === cert.id;
            return (
              <div
                key={cert.id}
                onClick={() => setSelected(cert)}
                className={`cursor-pointer py-4 px-2 flex items-center justify-between border-b border-border/40 transition-all duration-300 group ${
                  active ? "border-b-primary bg-primary/[0.02]" : "hover:border-b-foreground/45 hover:bg-secondary/[0.05]"
                }`}
              >
                <div className="flex items-center gap-4">
                  <div className="w-9 h-9 rounded-none border border-border/70 overflow-hidden bg-card flex-shrink-0 flex items-center justify-center">
                    <img
                      src={cert.logo}
                      alt={cert.title}
                      className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition duration-300"
                    />
                  </div>
                  <div>
                    <h3 className={`font-semibold font-heading transition-all duration-300 ${
                      active 
                        ? "text-primary font-serif italic text-base md:text-lg tracking-wide" 
                        : "text-foreground group-hover:text-primary text-sm md:text-base"
                    }`}>
                      {cert.title}
                    </h3>
                    <p className="text-[10px] text-muted-foreground uppercase tracking-widest mt-0.5">
                      {cert.issuer}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <span className="text-[10px] font-mono text-muted-foreground tracking-wider">{cert.date}</span>
                  {active && (
                    <span className="text-primary text-xs font-bold font-mono">●</span>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Detail kanan (5 cols) */}
        <div className="lg:col-span-5 relative lg:sticky lg:top-24">
          <AnimatePresence mode="wait">
            <motion.div
              key={selected.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="border border-border/80 bg-card/25 backdrop-blur-md rounded-none p-6 shadow-xl relative border-t-2 border-l-2 border-primary/20"
            >
              <div className="relative group overflow-hidden border border-border bg-background mb-6">
                <img
                  src={selected.logo}
                  alt={selected.title}
                  className="w-full aspect-[4/3] object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                />
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between gap-4">
                  <span className="text-[9px] uppercase font-bold tracking-widest text-primary">{selected.issuer}</span>
                  <span className="text-[9px] uppercase font-mono tracking-widest text-muted-foreground">[ {selected.date} ]</span>
                </div>

                <h3 className="text-xl md:text-2xl font-bold font-heading text-foreground">
                  {selected.title}
                </h3>

                <p className="text-sm text-muted-foreground leading-relaxed font-sans pt-2 border-t border-border/30">
                  {selected.desc}
                </p>

                <div className="pt-4">
                  <Link href="/certificates" className="block text-center border border-primary/30 text-primary hover:text-primary-foreground hover:bg-primary py-3 transition-all duration-300 font-heading text-xs font-bold tracking-widest uppercase">
                    View All Credentials →
                  </Link>
                </div>
              </div>

              {/* Subtle accent glow */}
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-40 h-6 bg-primary/5 dark:bg-primary/3 blur-xl rounded-full" />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
