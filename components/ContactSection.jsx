"use client";

import { useState } from "react";
import { db } from "@/lib/firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import emailjs from "@emailjs/browser";
import { Send, CheckCircle2, AlertCircle, Mail } from "lucide-react";

export default function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", message: "", type: "inquiry" });
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

      // 2. Send via EmailJS (Verified credentials from repository)
      await emailjs.send(
        "service_zq81pvk",
        "template_zpk7bp8",
        {
          name: form.name,
          email: form.email,
          message: `[${form.type.toUpperCase()}] ${form.message}`,
        },
        "d3MYihqkSLxK3jlLh"
      );

      setSent(true);
      setForm({ name: "", email: "", message: "", type: "inquiry" });
      setTimeout(() => setSent(false), 5000);
    } catch (err) {
      console.error("Contact Form Error:", err);
      setError("Unable to send message via form. Please email directly at moh.fakhririzkian@gmail.com.");
    }

    setLoading(false);
  };

  return (
    <section id="contact" className="py-20 md:py-28 w-full px-6 md:px-12 lg:px-20 xl:px-28 bg-white text-[#191A23]">
      
      {/* ── POSITIVUS HEADER: Lime Pill Badge + Subtitle ── */}
      <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-14 pb-6 border-b border-[#191A23]/15">
        <span className="px-3 py-1 rounded-md bg-[#B9FF66] text-[#191A23] font-heading font-extrabold text-lg uppercase tracking-wide border border-[#191A23] shadow-sm">
          Contact Us
        </span>
        <p className="text-[#191A23]/70 text-sm sm:text-base font-sans max-w-lg leading-relaxed">
          Connect with me to discuss web development, frontend engineering, or collaboration.
        </p>
      </div>

      {/* ── POSITIVUS CONTACT BOX ── */}
      <div className="w-full rounded-[36px] bg-[#F3F3F3] border-2 border-[#191A23] shadow-positivus-lg p-8 sm:p-12 lg:p-16 relative overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left: Contact Form with Positivus Radio Selectors & Inputs (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Positivus Radio Type Selector */}
              <div className="flex items-center gap-8 pb-2">
                <label className="flex items-center gap-3 cursor-pointer text-sm font-sans font-medium">
                  <input
                    type="radio"
                    name="type"
                    value="inquiry"
                    checked={form.type === "inquiry"}
                    onChange={handleChange}
                    className="accent-[#191A23] w-4 h-4 cursor-pointer"
                  />
                  <span>Project Inquiry</span>
                </label>

                <label className="flex items-center gap-3 cursor-pointer text-sm font-sans font-medium">
                  <input
                    type="radio"
                    name="type"
                    value="say_hi"
                    checked={form.type === "say_hi"}
                    onChange={handleChange}
                    className="accent-[#191A23] w-4 h-4 cursor-pointer"
                  />
                  <span>Say Hello</span>
                </label>
              </div>

              {/* Name Input */}
              <div className="space-y-2">
                <label htmlFor="name" className="block text-xs font-heading font-bold uppercase tracking-wider text-[#191A23]">
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  required
                  className="w-full px-5 py-3.5 rounded-2xl border-2 border-[#191A23] bg-white text-[#191A23] placeholder:text-[#191A23]/40 outline-none focus:ring-2 focus:ring-[#B9FF66] transition-all font-sans text-sm"
                />
              </div>

              {/* Email Input */}
              <div className="space-y-2">
                <label htmlFor="email" className="block text-xs font-heading font-bold uppercase tracking-wider text-[#191A23]">
                  Email*
                </label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="email@example.com"
                  required
                  className="w-full px-5 py-3.5 rounded-2xl border-2 border-[#191A23] bg-white text-[#191A23] placeholder:text-[#191A23]/40 outline-none focus:ring-2 focus:ring-[#B9FF66] transition-all font-sans text-sm"
                />
              </div>

              {/* Message Input */}
              <div className="space-y-2">
                <label htmlFor="message" className="block text-xs font-heading font-bold uppercase tracking-wider text-[#191A23]">
                  Message*
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project or inquiry..."
                  required
                  className="w-full px-5 py-3.5 rounded-2xl border-2 border-[#191A23] bg-white text-[#191A23] placeholder:text-[#191A23]/40 outline-none focus:ring-2 focus:ring-[#B9FF66] transition-all font-sans text-sm resize-none"
                />
              </div>

              {/* Error Notice */}
              {error && (
                <div className="flex items-center gap-3 p-4 rounded-xl bg-red-100 border border-red-300 text-red-800 text-xs font-sans">
                  <AlertCircle size={16} className="shrink-0" />
                  <span>{error}</span>
                </div>
              )}

              {/* Success Notice */}
              {sent && (
                <div className="flex items-center gap-3 p-4 rounded-xl bg-[#B9FF66]/40 border-2 border-[#191A23] text-[#191A23] text-xs font-sans font-bold">
                  <CheckCircle2 size={16} className="shrink-0" />
                  <span>Message sent successfully! I will reply to your email shortly.</span>
                </div>
              )}

              <button
                type="submit"
                disabled={loading}
                className="w-full py-4 rounded-2xl bg-[#191A23] text-white font-heading font-bold text-xs uppercase tracking-wider hover:bg-[#B9FF66] hover:text-[#191A23] transition-all duration-300 border-2 border-[#191A23] shadow-positivus disabled:opacity-50"
              >
                {loading ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>

          {/* Right: Direct Channel & Graphic Decoration (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-8 h-full">
            <div className="space-y-4">
              <h3 className="text-2xl sm:text-3xl font-bold font-heading text-[#191A23]">
                Direct Channel
              </h3>
              <p className="text-sm font-sans text-[#191A23]/75 leading-relaxed">
                Prefer direct communication? Reach out directly to primary inbox:
              </p>
              
              <div className="p-5 rounded-2xl bg-white border-2 border-[#191A23] shadow-positivus flex items-center gap-3">
                <Mail size={18} className="text-[#191A23] shrink-0" />
                <a
                  href="mailto:moh.fakhririzkian@gmail.com"
                  className="font-mono text-sm font-bold text-[#191A23] hover:underline truncate"
                >
                  moh.fakhririzkian@gmail.com
                </a>
              </div>
            </div>

            {/* Stylized Positivus Star/Planet Decorative Composition */}
            <div className="hidden lg:flex items-center justify-center p-6">
              <svg width="180" height="180" viewBox="0 0 200 200" fill="none">
                <ellipse cx="100" cy="100" rx="90" ry="45" stroke="#191A23" strokeWidth="2" strokeDasharray="6 6" />
                <circle cx="100" cy="100" r="32" fill="#B9FF66" stroke="#191A23" strokeWidth="2.5" />
                <path
                  d="M100 20C100 35 115 50 130 50C115 50 100 65 100 80C100 65 85 50 70 50C85 50 100 35 100 20Z"
                  fill="#191A23"
                />
              </svg>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
