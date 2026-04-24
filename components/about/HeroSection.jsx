"use client";
import { motion } from "framer-motion";

export default function HeroSection() {
  const skills = [
    "HTML", "CSS", "JavaScript", "React", "Next.js", "TailwindCSS",
    "Figma", "UI/UX", "Firebase", "GitHub", "Python", "Node.js",
    "Express.js", "PHP", "Laravel", "Canva", "C++", "Public Speaking"
  ];

  return (
    <section className="flex flex-col lg:flex-row items-center gap-10 overflow-hidden">
      {/* Foto Profil */}
      <img
  src="/profile.png"
  alt="Foto Profil Fakhri Rizkian"
  className="w-56 h-56 object-cover rounded-2xl shadow-lg ring-4 ring-blue-500/20"
/>

      {/* Deskripsi + Skills */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-2xl space-y-6"
      >
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2">
          Tentang Saya
        </h1>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2">
  About Me
</h1>
<p className="text-gray-700 dark:text-gray-300 leading-relaxed">
  I am <span className="font-semibold">Moh. Fakhri Rizkian</span>, an Information
  Systems, Networking, and Applications (SIJA) student at
  <span className="font-semibold"> SMK TI BAZMA</span> with a strong interest in
  <span className="font-semibold"> UI/UX Design</span> and modern web development
  using <span className="font-semibold">React and Next.js</span>. I actively
  participate in <span className="font-semibold">organizations, event management</span>,
  and digital projects that enhance my collaboration, creativity, and problem-solving skills.
</p>

        {/*  Animasi Skills */}
        <div className="relative w-full overflow-hidden py-3 mt-6">
          <motion.div
            className="flex gap-6 whitespace-nowrap"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              repeat: Infinity,
              duration: 15,
              ease: "linear",
            }}
          >
            {[...skills, ...skills].map((skill, i) => (
              <motion.span
                key={i}
                className="px-4 py-2 bg-blue-100/60 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 font-medium rounded-lg text-sm flex-shrink-0"
                whileHover={{ scale: 1.1 }}
              >
                {skill}
              </motion.span>
            ))}
          </motion.div>
          {/* Efek gradasi kiri-kanan biar smooth fade */}
          <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-white dark:from-gray-900 to-transparent pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-white dark:from-gray-900 to-transparent pointer-events-none" />
        </div>
      </motion.div>
    </section>
  );
}
