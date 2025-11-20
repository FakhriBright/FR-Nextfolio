"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { db } from "@/lib/firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { Send } from "lucide-react";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await addDoc(collection(db, "messages"), {
        ...form,
        createdAt: serverTimestamp(),
      });

      setSent(true);
      setForm({ name: "", email: "", message: "" });

      setTimeout(() => setSent(false), 4000);
    } catch (error) {
      console.error("Error:", error);
      alert("Gagal mengirim pesan!");
    }

    setLoading(false);
  };

  return (
    <main className="relative min-h-screen flex justify-center items-center py-20 px-6 overflow-hidden">

      {/* BACKGROUND GRADIENT */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10 blur-3xl opacity-40 pointer-events-none" />

      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-12 relative z-10">
        
        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col justify-center"
        >
          <p className="text-sm tracking-widest font-semibold text-blue-500 dark:text-blue-400">
            HUBUNGI SAYA
          </p>

          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white leading-tight mt-3">
            Punya <span className="text-blue-600">Pertanyaan</span>?  
            Atau Mau Berkolaborasi?
          </h1>

          <p className="mt-4 text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
            Silakan kirimkan pesanmu. Aku akan menjawab secepat mungkin.  
            <br />Dukung project kamu menjadi sesuatu yang <b>lebih profesional!</b>
          </p>

          {/* Small badge */}
          <div className="mt-6 inline-block bg-blue-600 text-white px-4 py-1 rounded-full text-sm shadow-md">
            Fast Response ⚡
          </div>
        </motion.div>

        {/* FORM */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="backdrop-blur-xl bg-white/20 dark:bg-black/20 border border-white/20 dark:border-white/10 shadow-2xl p-8 rounded-3xl flex flex-col gap-5"
        >
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Nama Lengkap"
            required
            className="w-full px-4 py-3 rounded-xl bg-white/70 dark:bg-gray-900/50 border border-gray-300 dark:border-gray-700 focus:ring-2 focus:ring-blue-500 outline-none transition"
          />

          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Alamat Email"
            required
            className="w-full px-4 py-3 rounded-xl bg-white/70 dark:bg-gray-900/50 border border-gray-300 dark:border-gray-700 focus:ring-2 focus:ring-blue-500 outline-none transition"
          />

          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Pesan Anda..."
            rows="4"
            required
            className="w-full px-4 py-3 rounded-xl bg-white/70 dark:bg-gray-900/50 border border-gray-300 dark:border-gray-700 focus:ring-2 focus:ring-blue-500 outline-none transition"
          ></textarea>

          <button
            type="submit"
            disabled={loading}
            className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 rounded-xl transition disabled:opacity-50 shadow-lg active:scale-95"
          >
            {loading ? "Mengirim..." : "Kirim Pesan"}
            <Send size={18} />
          </button>

          {sent && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-green-500 text-center font-semibold"
            >
              Pesan berhasil dikirim! ✔
            </motion.p>
          )}
        </motion.form>
      </div>
    </main>
  );
}
