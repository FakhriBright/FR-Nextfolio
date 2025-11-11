"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const certifications = [
  {
    id: "excel",
    title: "Quiz Basic Excel",
    issuer: "Sertifikat Excel",
    date: "2024",
    logo: "/logos/excel.png",
    desc: "Completed Microsoft Excel basic quiz, covering data entry, formulas, and chart visualization skills.",
  },
  {
    id: "datasci",
    title: "Data Science Explorer",
    issuer: "Sertifikat Data Science",
    date: "2024",
    logo: "/logos/datascience.png",
    desc: "Learned data analysis, visualization, and Python-based exploration through a practical data science module.",
  },
  {
    id: "fosjabar",
    title: "Forum OSIS Jawa Barat",
    issuer: "Sertifikat FOSJABAR",
    date: "2024",
    logo: "/logos/fosjabar.png",
    desc: "Participated in Forum OSIS Jawa Barat as a student delegate, focusing on leadership and youth collaboration.",
  },
  {
    id: "cyber",
    title: "Cyber Security",
    issuer: "Sertifikat Cyber Security",
    date: "2024",
    logo: "/logos/cyber.png",
    desc: "Completed Cyber Security awareness training on protecting digital identity, data privacy, and safe online behavior.",
  },
  {
    id: "uiux",
    title: "UI/UX Design",
    issuer: "Sertifikat UI/UX Design",
    date: "2025",
    logo: "/logos/uiux.png",
    desc: "Learned UI/UX design fundamentals, Figma prototyping, and usability testing for digital products.",
  },
  {
    id: "teladan",
    title: "Teladan Kerapihan",
    issuer: "Sertifikat Teladan Kerapihan",
    date: "2024",
    logo: "/logos/teladan.png",
    desc: "Awarded for exemplary neatness, discipline, and consistent self-presentation among peers.",
  },
  {
    id: "advokasi",
    title: "Advokasi Pemuda Kabupaten Bogor",
    issuer: "Advokasi Pemuda",
    date: "2024",
    logo: "/logos/advokasi.png",
    desc: "Actively contributed to youth advocacy discussions at the Bogor Regency level.",
  },
  {
    id: "pengibar",
    title: "Pengibar Bendera Kecamatan Ciampea",
    issuer: "Ciampea Subdistrict",
    date: "2023",
    logo: "/logos/pengibar.png",
    desc: "Served as a flag raiser during district ceremonies, representing the school with discipline and pride.",
  },
];

export default function AboutCertification() {
  const [selected, setSelected] = useState(certifications[0]);

  return (
    <section className="max-w-6xl mx-auto px-6 py-16">
      <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
        Certifications 🏅
      </h2>

      <div className="flex flex-col lg:flex-row gap-10">
        {/* List of Certifications */}
        <div className="flex-1 space-y-4">
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

        {/* Detail Panel */}
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
              <div className="flex items-center gap-4 mb-3">
                <img
                  src={selected.logo}
                  alt={selected.title}
                  className="w-14 h-14 object-cover rounded-lg"
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
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
