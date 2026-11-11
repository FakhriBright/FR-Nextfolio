"use client";

import { useState } from "react";
import { db } from "@/lib/firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import emailjs from "@emailjs/browser";
import { Send, CheckCircle2, AlertCircle, Mail } from "lucide-react";

export default function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

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
      className="py-24 md:py-32 w-full px-6 md:px-12 lg:px-20 xl:px-28 bg-[#F5F5F0] text-[#191919] border-t border-[#191919]/10"
    >
      {/* ── SECTION HEADER ── */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16 pb-8 border-b border-[#191919]/10">
        <div className="space-y-3">
          <span className="text-xs font-mono uppercase tracking-widest text-[#777873]">
            Direct Inquiry
          </span>

          <h2 className="text-4xl sm:text-6xl md:text-7xl font-black font-display uppercase tracking-tight text-[#191919] leading-[0.9]">
            Get in <span className="font-serif italic font-normal text-[#191919]/70 lowercase">touch</span>
          </h2>
        </div>

        <div className="max-w-md space-y-2">
          <p className="text-[#777873] text-sm sm:text-base font-sans leading-relaxed">
            Interested in technical collaboration, web development, or exploring opportunities? Feel free to reach out.
          </p>
          <p className="text-xs font-mono text-[#777873]">
            Email:{" "}
            <a
              href="mailto:moh.fakhririzkian@gmail.com"
              className="text-[#191919] font-medium hover:underline"
            >
              moh.fakhririzkian@gmail.com
            </a>
          </p>
        </div>
      </div>

      {/* ── EDITORIAL SPLIT FORM CANVAS ── */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        
        {/* Left Column: Direct Channel Info (5 cols) */}
        <div className="lg:col-span-5 space-y-6">
          <div className="p-8 sm:p-10 rounded-[2rem] bg-[#E9E9E4] border border-[#191919]/10 space-y-6">
            <span className="text-xs font-mono uppercase tracking-widest text-[#777873]">
              Communication
            </span>

            <div className="space-y-2">
              <h3 className="text-2xl sm:text-3xl font-bold font-heading text-[#191919] tracking-tight">
                Send a message
              </h3>
              <p className="text-sm text-[#777873] font-sans leading-relaxed">
                Messages submitted through this form are forwarded directly to email and recorded securely.
              </p>
            </div>

            <div className="pt-4 border-t border-[#191919]/10 space-y-2">
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#777873]">
                <Mail size={14} />
                <span>Primary Inbox</span>
              </div>
              <a
                href="mailto:moh.fakhririzkian@gmail.com"
                className="block text-sm font-mono font-medium text-[#191919] hover:underline"
              >
                moh.fakhririzkian@gmail.com
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: Clean Form (7 cols) */}
        <div className="lg:col-span-7">
          <form
            onSubmit={handleSubmit}
            className="rounded-[2rem] border border-[#191919]/10 bg-white p-8 sm:p-10 space-y-6 shadow-sm"
          >
            <div className="space-y-2">
              <label htmlFor="name" className="block text-xs font-mono uppercase tracking-wider text-[#777873]">
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
                className="w-full px-4 py-3.5 rounded-xl border border-[#191919]/15 bg-[#F5F5F0] text-[#191919] placeholder:text-[#777873]/50 outline-none focus:border-[#191919] focus:ring-1 focus:ring-[#191919] transition-all font-sans text-sm"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="email" className="block text-xs font-mono uppercase tracking-wider text-[#777873]">
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
                className="w-full px-4 py-3.5 rounded-xl border border-[#191919]/15 bg-[#F5F5F0] text-[#191919] placeholder:text-[#777873]/50 outline-none focus:border-[#191919] focus:ring-1 focus:ring-[#191919] transition-all font-sans text-sm"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="block text-xs font-mono uppercase tracking-wider text-[#777873]">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                value={form.message}
                onChange={handleChange}
                placeholder="Your project inquiry or message..."
                required
                className="w-full px-4 py-3.5 rounded-xl border border-[#191919]/15 bg-[#F5F5F0] text-[#191919] placeholder:text-[#777873]/50 outline-none focus:border-[#191919] focus:ring-1 focus:ring-[#191919] transition-all font-sans text-sm resize-none"
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
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full bg-[#191919] text-[#F5F5F0] font-heading font-semibold text-xs uppercase tracking-widest hover:bg-[#B7F36B] hover:text-[#191919] transition-all duration-200 disabled:opacity-50 shadow-sm"
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
