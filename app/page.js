'use client'

import { motion } from 'framer-motion'

export default function Home() {
  return (
    <section>
      <motion.h1 initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{duration:0.5}} className="text-4xl font-bold mb-4">
        FR-Nextfolio
      </motion.h1>
      <p className="mb-6">Portfolio interaktif sederhana — dibuat dengan Next.js, Tailwind CSS, dan Framer Motion.</p>

      <div className="grid md:grid-cols-3 gap-4">
        <div className="p-6 border rounded-lg">
          <h3 className="font-semibold">Profil</h3>
          <p className="text-sm">Deskripsi singkat tentang dirimu dan keterampilan.</p>
        </div>
        <div className="p-6 border rounded-lg">
          <h3 className="font-semibold">Projects</h3>
          <p className="text-sm">Tampilkan project terbaikmu dengan link dan deskripsi.</p>
        </div>
        <div className="p-6 border rounded-lg">
          <h3 className="font-semibold">Contact</h3>
          <p className="text-sm">Form kontak atau email untuk komunikasi.</p>
        </div>
      </div>
    </section>
  )
}
