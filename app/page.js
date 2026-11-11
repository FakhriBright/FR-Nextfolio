"use client";

import Hero from "@/components/Hero";
import InteractiveProjectShowcase from "@/components/InteractiveProjectShowcase";
import ProfileStory from "@/components/ProfileStory";
import GalleryCarousel from "@/components/about/GalleryCarousel";
import ContactSection from "@/components/ContactSection";

export default function HomePage() {
  return (
    <div className="w-full flex flex-col space-y-0">
      {/* ── CHAPTER 01: THE KINETIC HERO ── */}
      <Hero />

      {/* ── CHAPTER 02: SELECTED WORKS (THE INTERACTIVE KINETIC STAGE) ── */}
      <InteractiveProjectShowcase />

      {/* ── CHAPTER 03: PROFILE & MILESTONES (EDITORIAL VISUAL STORYTELLING) ── */}
      <ProfileStory />

      {/* ── CHAPTER 04: ARTIFACTS & VISUAL REEL ── */}
      <GalleryCarousel />

      {/* ── CHAPTER 05: MINIMALIST CONTACT MONOLITH ── */}
      <ContactSection />
    </div>
  );
}
