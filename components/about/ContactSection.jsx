"use client";
import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Instagram } from "lucide-react";

export default function ContactSection() {
  const contacts = [
    { icon: <Mail />, label: "Email", link: "mailto:fakhririzkian@gmail.com" },
    { icon: <Github />, label: "GitHub", link: "https://github.com/fakhririzkian" },
    { icon: <Linkedin />, label: "LinkedIn", link: "https://linkedin.com/in/fakhririzkian" },
    { icon: <Instagram />, label: "Instagram", link: "https://instagram.com/fakhririzkian" },
  ];

  return (
    <section className="text-center">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
        Contact 
      </h2>
      <div className="flex justify-center gap-6">
        {contacts.map((c, i) => (
          <motion.a
            key={i}
            href={c.link}
            target="_blank"
            whileHover={{ scale: 1.2, y: -3 }}
            className="text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition"
          >
            {c.icon}
          </motion.a>
        ))}
      </div>
    </section>
  );
}
