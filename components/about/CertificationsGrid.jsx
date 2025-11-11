"use client";
import { motion } from "framer-motion";

const certs = [
  "Excel Basics", "Data Science", "Cyber Security", 
  "UI/UX Design", "Leadership", "Public Speaking"
];

export default function CertificationsGrid() {
  return (
    <section>
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
        Certifications 🏅
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {certs.map((cert, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05 }}
            className="bg-gradient-to-br from-blue-500/20 to-blue-800/20 p-6 rounded-2xl text-center shadow-md border border-blue-300/20 dark:border-blue-700/20"
          >
            <p className="font-medium text-gray-900 dark:text-white">{cert}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
