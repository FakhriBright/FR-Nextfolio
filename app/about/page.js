"use client";
import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-24 flex flex-col lg:flex-row items-center gap-10">
      {/* Foto profil */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="flex-shrink-0"
      >
        <img
          src="/profile.jpg" // 🖼️ ganti dengan foto kamu di /public/
          alt="Foto Profil"
          className="w-48 h-48 object-cover rounded-full shadow-lg ring-4 ring-blue-500/20"
        />
      </motion.div>

      {/* Konten teks */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="space-y-5"
      >
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
          Tentang Saya
        </h1>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
          Halo! Saya <span className="font-semibold">Moh. Fakhri Rizkian</span>, 
          seorang pelajar SMK TI BAZMA jurusan <span className="font-medium">SIJA (Sistem Informasi, Jaringan, dan Aplikasi)</span>.
          Saya tertarik mendalami dunia <span className="font-semibold text-blue-600 dark:text-blue-400">UI/UX Design</span>,
          pengembangan web modern, dan juga bisnis digital.
        </p>

        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
          Saya berpengalaman dalam membuat proyek menggunakan 
          <span className="font-semibold"> HTML, CSS, JavaScript, dan React (Next.js)</span>.
          Di waktu luang, saya juga suka belajar hal-hal baru seputar teknologi, desain antarmuka, dan strategi branding digital.
        </p>

        {/* Bagian Skill */}
        <div>
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
            Tools & Skills ⚙️
          </h2>
          <div className="flex flex-wrap gap-2">
            {["Figma", "React", "Next.js", "Tailwind CSS", "GitHub", "Firebase"].map((tool) => (
              <span
                key={tool}
                className="bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 text-sm font-medium px-3 py-1 rounded-full"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>

        {/* Tombol download CV */}
        <motion.a
          whileHover={{ scale: 1.05 }}
          href="/CV_Moh_Fakhri_Rizkian.pdf" // 🧾 ganti sesuai nama file CV kamu di /public/
          target="_blank"
          className="inline-block bg-blue-600 text-white px-5 py-2 rounded-lg mt-4 font-medium hover:bg-blue-700 transition"
        >
          📄 Lihat CV Saya
        </motion.a>
      </motion.div>
    </main>
  );
}
