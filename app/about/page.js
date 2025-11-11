"use client";
import { motion } from "framer-motion";
import AboutExperience from "@/components/AboutExperience";

export default function AboutPage() {
  const skills = [
    "HTML", "CSS", "JavaScript", "C++", "React", "Figma",
    "Canva", "Photoshop", "GitHub", "Firebase", "Netlify",
    "TinkerCAD", "Public Speaking", "Event Management"
  ];

  const education = [
    { school: "SMK TI BAZMA", period: "2022 - Sekarang" },
    { school: "MTs Mahaduth Tholabah", period: "2019 - 2022" },
    { school: "SDN Mangunsaren 02", period: "2013 - 2019" },
  ];

  return (
    <main className="max-w-6xl mx-auto px-6 py-24 flex flex-col lg:flex-row items-start gap-12">
      {/* Foto Profil */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="flex-shrink-0"
      >
        <img
          src="/profile.jpg"
          alt="Foto Profil Fakhri Rizkian"
          className="w-56 h-56 object-cover rounded-2xl shadow-lg ring-4 ring-blue-500/20"
        />
      </motion.div>

      {/* Konten Teks */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="space-y-8 flex-1"
      >
        <div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Tentang Saya
          </h1>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            Halo, saya <span className="font-semibold">Moh. Fakhri Rizkian</span>, pelajar 
            <span className="font-medium"> SMK TI BAZMA</span> jurusan 
            <span className="text-blue-600 dark:text-blue-400 font-medium"> SIJA (Sistem Informasi, Jaringan, dan Aplikasi)</span>.  
            Saya menekuni <span className="font-semibold">UI/UX Design</span> dan 
            pengembangan web modern berbasis <span className="font-semibold">React & Next.js</span>.  
            Saya percaya bahwa teknologi dan kreativitas bisa berjalan bersama untuk menciptakan pengalaman digital yang bermakna.
          </p>
        </div>

        {/* SKILLS */}
        <AboutExperience />
        <div>
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
            Skills ⚙️
          </h2>
          <div className="flex flex-wrap gap-3">
            {skills.map((skill) => (
              <motion.span
                key={skill}
                whileHover={{ scale: 1.05 }}
                className="px-4 py-2 bg-blue-100/60 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 font-medium rounded-lg text-sm transition-all duration-200"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </div>

        {/* PENDIDIKAN */}
        <div>
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
            Riwayat Pendidikan 🎓
          </h2>
          <ul className="space-y-3 text-gray-700 dark:text-gray-300">
            {education.map((edu, index) => (
              <motion.li
                key={index}
                whileHover={{ x: 5 }}
                className="border-l-4 border-blue-500 pl-4"
              >
                <p className="font-medium">{edu.school}</p>
                <p className="text-sm opacity-80">{edu.period}</p>
              </motion.li>
            ))}
          </ul>
        </div>

        {/* CV */}
        <motion.a
          whileHover={{ scale: 1.05 }}
          href="/CV_Moh_Fakhri_Rizkian.pdf"
          target="_blank"
          className="inline-block bg-blue-600 text-white px-5 py-2 rounded-lg font-medium hover:bg-blue-700 transition"
        >
          📄 Lihat CV Saya
        </motion.a>
      </motion.div>
    </main>
  );
}
