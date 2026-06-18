"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { db } from "@/lib/firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { Send } from "lucide-react";
import emailjs from "@emailjs/browser";

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
      // 1. Save to Firebase Firestore
      await addDoc(collection(db, "messages"), {
        ...form,
        createdAt: serverTimestamp(),
      });

      // 2. Send via EmailJS
      await emailjs.send(
        "service_zq81pvk",
        "template_zpk7bp8",
        {
          name: form.name,
          email: form.email,
          message: form.message,
        },
        "d3MYihqkSLxK3jlLh"
      );

      setSent(true);
      setForm({ name: "", email: "", message: "" });

      setTimeout(() => setSent(false), 4000);
    } catch (error) {
      console.log("ERROR:", error);
      alert("Gagal mengirim ❌");
    }

    setLoading(false);
  };

  return (
    <main className="relative min-h-[90vh] flex justify-center items-center py-16 md:py-24 px-6 overflow-hidden">
      {/* Background Solar Flare Glow */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute w-[500px] h-[500px] bg-primary/3 rounded-full blur-[130px] top-1/4 left-1/4" />
        <div className="absolute w-[500px] h-[500px] bg-accent/3 rounded-full blur-[130px] bottom-1/4 right-1/4" />
      </div>

      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 relative z-10">
        
        {/* Left Info Column */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col justify-center space-y-6"
        >
          <div className="flex items-center gap-3">
            <span className="text-[9px] font-mono tracking-widest text-primary uppercase">[ CONTACT // COLLABORATION ]</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold font-display text-foreground leading-[0.9] tracking-tighter uppercase">
            Let's start
            <br />
            <span className="font-serif italic font-light lowercase text-primary">a project</span>
          </h1>

          <p className="text-muted-foreground text-sm md:text-base leading-relaxed font-sans max-w-md">
            Feel free to send a message. Whether you have an idea, want to collaborate on a digital product, or just say hello, I'll get back to you as soon as possible.
          </p>

          <div className="mt-4 w-fit inline-flex items-center gap-2 bg-primary/10 border border-primary/20 text-primary px-3 py-1.5 text-[9px] font-heading font-bold uppercase tracking-wider">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            Fast Response Enabled ⚡
          </div>
        </motion.div>

        {/* Right Form Column */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          className="backdrop-blur-md bg-card/25 border border-border/80 p-8 flex flex-col gap-6 relative border-t-2 border-l-2 border-primary/20 rounded-none shadow-2xl"
        >
          <div className="absolute inset-0 bg-primary/[0.01] pointer-events-none" />
          
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Full Name"
            required
            className="w-full px-4 py-3.5 bg-card border border-border text-foreground placeholder:text-muted-foreground outline-none focus:border-primary/60 transition-all duration-300 font-sans rounded-none text-sm"
          />

          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Email Address"
            required
            className="w-full px-4 py-3.5 bg-card border border-border text-foreground placeholder:text-muted-foreground outline-none focus:border-primary/60 transition-all duration-300 font-sans rounded-none text-sm"
          />

          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Your Message..."
            rows="5"
            required
            className="w-full px-4 py-3.5 bg-card border border-border text-foreground placeholder:text-muted-foreground outline-none focus:border-primary/60 transition-all duration-300 font-sans resize-none rounded-none text-sm"
          ></textarea>

          <button
            type="submit"
            disabled={loading}
            className="flex items-center justify-center gap-2 border border-primary/30 text-primary hover:text-primary-foreground hover:bg-primary py-3.5 transition-all duration-300 font-heading text-xs font-bold tracking-widest uppercase disabled:opacity-50 active:scale-98"
          >
            {loading ? "Sending..." : "Send Message"}
            <Send size={14} />
          </button>

          {sent && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-primary text-center font-heading text-xs uppercase tracking-widest font-bold"
            >
              Message sent successfully! ✔
            </motion.p>
          )}
        </motion.form>
      </div>
    </main>
  );
}