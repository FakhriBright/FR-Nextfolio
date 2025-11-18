"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { db } from "@/lib/firebase"; // ⬅️ IMPORT FIREBASE
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false); // NEW

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await addDoc(collection(db, "messages"), {
        name: form.name,
        email: form.email,
        message: form.message,
        createdAt: serverTimestamp(),
      });

      setSent(true);
      setForm({ name: "", email: "", message: "" });

      setTimeout(() => setSent(false), 4000);
    } catch (error) {
      console.error("Error mengirim:", error);
      alert("Gagal mengirim pesan!");
    }

    setLoading(false);
  };

  return (
    <main className="max-w-lg mx-auto p-6">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="text-3xl font-bold mb-6 text-center dark:text-white"
      >
        Hubungi Saya 
      </motion.h1>

      <motion.form
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="flex flex-col gap-4 bg-white dark:bg-gray-800 rounded-2xl shadow-md p-6"
      >
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Nama Anda"
          required
          className="border border-gray-300 dark:border-gray-600 bg-transparent rounded-md px-3 py-2"
        />

        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Email Anda"
          required
          className="border border-gray-300 dark:border-gray-600 bg-transparent rounded-md px-3 py-2"
        />

        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          placeholder="Pesan Anda"
          rows="4"
          required
          className="border border-gray-300 dark:border-gray-600 bg-transparent rounded-md px-3 py-2"
        ></textarea>

        <button
          type="submit"
          disabled={loading}
          className="bg-blue-600 text-white rounded-md py-2 hover:bg-blue-700 transition disabled:opacity-50"
        >
          {loading ? "Mengirim..." : "Kirim Pesan"}
        </button>
      </motion.form>

      {sent && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="mt-4 text-green-600 text-center font-medium"
        >
          Pesan berhasil dikirim ✅
        </motion.div>
      )}
    </main>
  );
}
