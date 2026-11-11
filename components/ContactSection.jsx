"use client";

import { useState, useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { db } from "@/lib/firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import emailjs from "@emailjs/browser";
import { Send, CheckCircle2, AlertCircle, Mail } from "lucide-react";

export default function ContactSection() {
  const containerRef = useRef(null);
  const shouldReduceMotion = useReducedMotion();

  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const bgTextX = useTransform(
    scrollYProgress,
    [0, 1],
    shouldReduceMotion ? ["0%", "0%"] : ["-5%", "15%"]
  );

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      // 1. Save to Firebase Firestore
      await addDoc(collection(db, "messages"), {
        ...form,
        createdAt: serverTimestamp(),
      });

      // 2. Send via EmailJS (Verified credentials from repository)
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
      setTimeout(() => setSent(false), 5000);
    } catch (err) {
      console.error("Contact Form Error:", err);
      setError("Unable to send message via form. Please email directly at moh.fakhririzkian@gmail.com.");
    }

    setLoading(false);
  };

  return (
    <section
      id="contact"
      ref={containerRef}
      className="relative py-28 md:py-36 w-full px-6 md:px-12 lg:px-20 xl:px-28 bg-[#F3EFE5] text-[#171918] overflow-hidden transition-colors duration-500"
    >
      {/* ── PARALLAX BACKGROUND WATERMARK ── */}
      <motion.div
        style={{ x: bgTextX }}
        aria-hidden="true"
        className="absolute top-12 left-0 pointer-events-none select-none text-[22vw] font-black font-display text-[#171918]/[0.03] uppercase whitespace-nowrap leading-none z-0"
      >
        INITIATE &bull; CONNECT
      </motion.div>

      {/* ── SECTION HEADER: Natural Editorial ── */}
      <div className="relative z-10 flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16 pb-8 border-b border-[#171918]/10">
        <div className="space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#B9FF66]/30 border border-[#B9FF66] text-[#171918] text-xs font-mono font-bold tracking-wider uppercase">
            <span>Direct Inquiry</span>
            <span className="text-[#3157D5]">&bull;</span>
            <span>Contact</span>
          </div>

          <h2 className="text-4xl sm:text-6xl md:text-7xl font-black font-display uppercase tracking-tighter text-[#171918] leading-[0.9]">
            Let's
            <br />
            <span className="font-serif italic font-light lowercase text-[#3157D5]">
              connect
            </span>
          </h2>
        </div>

        <div className="max-w-md space-y-3">
          <p className="text-[#171918]/75 text-sm sm:text-base font-sans leading-relaxed">
            Interested in web application development, frontend engineering, or technical collaboration? Feel free to send an inquiry.
          </p>
          <p className="text-xs font-mono text-[#171918]/60 pt-1">
            Email:{" "}
            <a
              href="mailto:moh.fakhririzkian@gmail.com"
              className="text-[#171918] hover:text-[#3157D5] transition-colors font-semibold underline"
            >
              moh.fakhririzkian@gmail.com
            </a>
          </p>
        </div>
      </div>

      {/* ── EDITORIAL SPLIT FORM CANVAS ── */}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        
        {/* Left Column: Direct Inquiries & Channel Information (5 cols) */}
        <div className="lg:col-span-5 space-y-6">
          <div className="p-8 sm:p-10 rounded-3xl border border-[#171918]/10 bg-white shadow-xl space-y-6">
            <span className="text-xs font-mono uppercase tracking-widest text-[#3157D5] font-bold">
              Direct Communication
            </span>

            <div className="space-y-2">
              <h3 className="text-2xl sm:text-3xl font-extrabold font-heading text-[#171918] tracking-tight">
                Send a message
              </h3>
              <p className="text-sm text-[#171918]/70 font-sans leading-relaxed">
                Messages submitted through this form are forwarded directly to email and recorded securely in real time.
              </p>
            </div>

            <div className="pt-4 border-t border-[#171918]/10 space-y-3">
              <div className="flex items-center gap-2.5 text-xs font-mono uppercase tracking-wider text-[#171918]/60">
                <Mail size={15} className="text-[#3157D5]" />
                <span>Primary Contact</span>
              </div>
              <a
                href="mailto:moh.fakhririzkian@gmail.com"
                className="block text-sm font-mono font-bold text-[#171918] hover:text-[#3157D5] transition-colors"
              >
                moh.fakhririzkian@gmail.com
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: Clean Working Form (7 cols) */}
        <div className="lg:col-span-7">
          <form
            onSubmit={handleSubmit}
            className="rounded-3xl border border-[#171918]/10 bg-white p-8 sm:p-10 space-y-6 shadow-xl"
          >
            <div className="space-y-2">
              <label htmlFor="name" className="block text-xs font-mono uppercase tracking-wider text-[#171918]/65 font-medium">
                Your Name
              </label>
              <input
                id="name"
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Full name"
                required
                className="w-full px-4 py-3.5 rounded-xl border border-[#171918]/15 bg-[#F8F6F0] text-[#171918] placeholder:text-[#171918]/35 outline-none focus:border-[#3157D5] focus:ring-1 focus:ring-[#3157D5] transition-all font-sans text-sm"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="email" className="block text-xs font-mono uppercase tracking-wider text-[#171918]/65 font-medium">
                Email Address
              </label>
              <input
                id="email"
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="email@example.com"
                required
                className="w-full px-4 py-3.5 rounded-xl border border-[#171918]/15 bg-[#F8F6F0] text-[#171918] placeholder:text-[#171918]/35 outline-none focus:border-[#3157D5] focus:ring-1 focus:ring-[#3157D5] transition-all font-sans text-sm"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="block text-xs font-mono uppercase tracking-wider text-[#171918]/65 font-medium">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                value={form.message}
                onChange={handleChange}
                placeholder="Tell me about your web project, idea, or inquiry..."
                required
                className="w-full px-4 py-3.5 rounded-xl border border-[#171918]/15 bg-[#F8F6F0] text-[#171918] placeholder:text-[#171918]/35 outline-none focus:border-[#3157D5] focus:ring-1 focus:ring-[#3157D5] transition-all font-sans text-sm resize-none"
              />
            </div>

            {/* Error Notification */}
            {error && (
              <div className="flex items-center gap-3 p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-700 text-xs font-sans">
                <AlertCircle size={16} className="shrink-0" />
                <span>{error}</span>
              </div>
            )}

            {/* Success Notification */}
            {sent && (
              <div className="flex items-center gap-3 p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-800 text-xs font-sans">
                <CheckCircle2 size={16} className="shrink-0 text-emerald-600" />
                <span>Message delivered successfully. I will get back to you shortly.</span>
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-[#171918] text-[#F3EFE5] font-heading font-bold text-xs uppercase tracking-widest hover:bg-[#3157D5] transition-all duration-300 disabled:opacity-50 shadow-md"
            >
              {loading ? (
                <span>Sending...</span>
              ) : (
                <>
                  <span>Send Message</span>
                  <Send size={13} />
                </>
              )}
            </button>
          </form>
        </div>

      </div>
    </section>
  );
}
