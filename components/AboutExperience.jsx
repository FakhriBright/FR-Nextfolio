"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const experiences = [
  {
    id: "best",
    org: "BEST",
    role: "Leader",
    date: "May 2025 - now",
    logo: "/logos/best.png", // ganti sesuai path logomu
    desc: "Led the BEST Website Developer Team, responsible for coordinating projects, coding, and ensuring optimal website performance.",
  },
  {
    id: "4byte",
    org: "4BYTE",
    role: "Leader",
    date: "July 2025 - now",
    logo: "/logos/4byte.png",
    desc: "Led the Website Development Team of SMK TI BAZMA, responsible for project coordination, coding, and ensuring optimal website performance.",
  },
  {
    id: "mcrobo",
    org: "MCROBO",
    role: "Vice Chairman",
    date: "August 2025 - now",
    logo: "/logos/mcrobo.png",
    desc: "Entrusted with the role of Vice Chairman of the Robotics Club, responsible for assisting in leadership and coordinating activities.",
  },
  {
    id: "osis",
    org: "OSIS",
    role: "Finance",
    date: "August 2024 - now",
    logo: "/logos/osis.png",
    desc: "Manage organizational finances, prepare reports, and ensure budget efficiency and transparency.",
  },
];

export default function AboutExperience() {
  const [selected, setSelected] = useState(experiences[0]);

  return (
    <section className="max-w-6xl mx-auto px-6 py-16">
      <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
        Experience 
      </h2>

      <div className="flex flex-col lg:flex-row gap-10">
        {/* List Experience */}
        <div className="flex-1 space-y-4">
          {experiences.map((exp) => (
            <motion.div
              key={exp.id}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setSelected(exp)}
              className={`cursor-pointer border rounded-xl p-4 flex items-center gap-4 transition-all duration-300 ${
                selected.id === exp.id
                  ? "border-blue-500 bg-blue-50 dark:bg-blue-900/30"
                  : "border-gray-200 dark:border-gray-700 hover:border-blue-400"
              }`}
            >
              <img
                src={exp.logo}
                alt={exp.org}
                className="w-12 h-12 object-cover rounded-lg"
              />
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white">
                  {exp.org}
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {exp.role} • {exp.date}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Detail */}
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
                  alt={selected.org}
                  className="w-14 h-14 object-cover rounded-lg"
                />
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {selected.org}
                  </h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {selected.role} • {selected.date}
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
