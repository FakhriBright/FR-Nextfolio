"use client";

import Hero from "@/components/Hero";
import InteractiveProjectShowcase from "@/components/InteractiveProjectShowcase";
import ProfileStory from "@/components/ProfileStory";
import AgencyBanner from "@/components/AgencyBanner";
import GalleryCarousel from "@/components/about/GalleryCarousel";
import ContactSection from "@/components/ContactSection";

export default function HomePage() {
  return (
    <div className="w-full flex flex-col space-y-0">
      {/* ── CHAPTER 01: THE KINETIC HERO ── */}
      <Hero />

      {/* ── CHAPTER 02: SELECTED WORKS (THE INTERACTIVE KINETIC STAGE) ── */}
      <InteractiveProjectShowcase />

      {/* ── CHAPTER 03: PROFILE & MILESTONES (WORKING PROCESS & EXPERTISE) ── */}
      <ProfileStory />

      {/* ── CHAPTER 04: CALLOUT BANNER (POSITIVUS AGENCY STYLE) ── */}
      <AgencyBanner />

      {/* ── CHAPTER 05: ARTIFACTS & VISUAL REEL ── */}
      <GalleryCarousel />

      {/* ── CHAPTER 06: CONTACT SECTION ── */}
      <ContactSection />
    </div>
  );
}
