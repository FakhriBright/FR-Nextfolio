"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

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
];

export default function AboutCertification() {
  const [selected, setSelected] = useState(certifications[0]);

  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
        Certificate & Experience
      </h2>

      <div className="flex flex-col lg:flex-row gap-10">
        {/* List kiri */}
        <div className="flex-1 space-y-4 overflow-y-auto max-h-[500px] pr-2">
          {certifications.map((cert) => (
            <motion.div
              key={cert.id}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setSelected(cert)}
              className={`cursor-pointer border rounded-xl p-4 flex items-center gap-4 transition-all duration-300 ${
                selected.id === cert.id
                  ? "border-blue-500 bg-blue-50 dark:bg-blue-900/30"
                  : "border-gray-200 dark:border-gray-700 hover:border-blue-400"
              }`}
            >
              <img
                src={cert.logo}
                alt={cert.title}
                className="w-12 h-12 object-cover rounded-lg"
              />
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white">
                  {cert.title}
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {cert.issuer} • {cert.date}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Detail kanan */}
        <div className="flex-1 relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={selected.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-6 border border-gray-100 dark:border-gray-700"
            >
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={selected.logo}
                  alt={selected.title}
                  className="w-16 h-16 object-cover rounded-lg"
                />
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {selected.title}
                  </h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {selected.issuer} • {selected.date}
                  </p>
                </div>
              </div>

              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                {selected.desc}
              </p>

              {/* Tombol CTA */}
              <motion.a
                href="/certificates"
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.95 }}
                className="
                  mt-6 w-full block text-center font-semibold px-6 py-3 rounded-xl
                  bg-gradient-to-r from-blue-600 to-blue-700
                  hover:from-blue-500 hover:to-blue-600
                  text-white shadow-lg shadow-blue-500/30
                  transition-all duration-300
                "
              >
                Lihat Semua Sertifikat →
              </motion.a>

              {/* Glow animation */}
              <motion.div
                className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-40 h-6 bg-blue-500/20 blur-xl rounded-full"
                animate={{ opacity: [0.3, 0.7, 0.3] }}
                transition={{ repeat: Infinity, duration: 3 }}
              />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
