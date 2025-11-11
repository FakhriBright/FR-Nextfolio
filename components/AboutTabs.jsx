"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AboutExperience from "./AboutExperience";
import AboutCertification from "./AboutCertification";

const tabs = [
  { id: "about", label: "About Me" },
  { id: "experience", label: "Experience" },
  { id: "certifications", label: "Certifications" },
  { id: "skills", label: "Skills" },
  { id: "education", label: "Education" },
];

export default function AboutTabs() {
  const [activeTab, setActiveTab] = useState("about");

  const skills = [
    "React", "Next.js", "TailwindCSS", "JavaScript", "Python",
    "Node.js", "Express.js", "MySQL", "PHP", "Laravel",
    "C++", "Git", "GitHub", "Figma", "Canva", "Bootstrap"
  ];

  const education = [
    { school: "SMK TI BAZMA", period: "2023 - Now" },
    { school: "MTs Mahaduth Tholabah", period: "2019 - 2022" },
    { school: "SDN Mangunsaren 02", period: "2013 - 2019" },
  ];

  return (
    <section className="max-w-6xl mx-auto px-6 py-20">
      <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-8">
        About Me 🧑‍💻
      </h1>

      {/* Tabs Navigation */}
      <div className="flex flex-wrap gap-3 mb-8 border-b border-gray-300 dark:border-gray-700 pb-3">
        {tabs.map((tab) => (
          <motion.button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
              activeTab === tab.id
                ? "bg-blue-600 text-white shadow-md"
                : "bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-blue-500 hover:text-white"
            }`}
          >
            {tab.label}
          </motion.button>
        ))}
      </div>

      {/* Tabs Content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -15 }}
          transition={{ duration: 0.4 }}
          className="min-h-[320px]"
        >
          {activeTab === "about" && (
            <div className="text-gray-700 dark:text-gray-300 leading-relaxed space-y-4">
              <p>
                Halo, saya <b>Moh. Fakhri Rizkian</b>, pelajar 
                <b> SMK TI BAZMA</b> jurusan 
                <span className="text-blue-600 dark:text-blue-400 font-medium"> SIJA</span>.  
                Saya fokus di bidang <b>UI/UX Design</b> dan 
                pengembangan web berbasis <b>React & Next.js</b>.  
                Saya percaya bahwa desain dan teknologi dapat berjalan bersama 
                untuk menciptakan pengalaman digital yang bermakna.
              </p>
              <img
                src="/profile.jpg"
                alt="Profile"
                className="w-48 h-48 rounded-2xl object-cover shadow-md ring-2 ring-blue-400/30"
              />
            </div>
          )}

          {activeTab === "experience" && <AboutExperience />}
          {activeTab === "certifications" && <AboutCertification />}

          {activeTab === "skills" && (
            <div className="flex flex-wrap gap-3">
              {skills.map((skill) => (
                <motion.span
                  key={skill}
                  whileHover={{ scale: 1.05 }}
                  className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-lg text-sm font-medium"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          )}

          {activeTab === "education" && (
            <ul className="space-y-4 text-gray-700 dark:text-gray-300">
              {education.map((edu, i) => (
                <motion.li
                  key={i}
                  whileHover={{ x: 5 }}
                  className="border-l-4 border-blue-500 pl-4"
                >
                  <p className="font-semibold">{edu.school}</p>
                  <p className="text-sm opacity-80">{edu.period}</p>
                </motion.li>
              ))}
            </ul>
          )}
        </motion.div>
      </AnimatePresence>
    </section>
  );
}
