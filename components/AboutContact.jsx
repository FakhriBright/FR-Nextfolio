import { motion } from "framer-motion";
import { Mail, Instagram, Github, Linkedin } from "lucide-react";

export default function AboutContact() {
  const contacts = [
    { icon: Mail, label: "Email", link: "mailto:selaluli0123@gmail.com" },
    { icon: Instagram, label: "Instagram", link: "https://www.instagram.com/elrizkianf_/" },
    { icon: Github, label: "GitHub", link: "https://github.com/FakhriBright" },
    { icon: Linkedin, label: "LinkedIn", link: "https://www.linkedin.com/in/mohammad-fakhri-rizkian-0bb8b9330/" },
  ];

  return (
    <section className="text-center py-10">
      <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">Kontak</h2>
      <div className="flex flex-wrap justify-center gap-4">
        {contacts.map(({ icon: Icon, label, link }) => (
          <motion.a
            key={label}
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
          >
            <Icon size={18} />
            {label}
          </motion.a>
        ))}
      </div>
    </section>
  );
}
