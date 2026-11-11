"use client";

import ProfileStory from "@/components/ProfileStory";
import AgencyBanner from "@/components/AgencyBanner";
import GalleryCarousel from "@/components/about/GalleryCarousel";
import ContactSection from "@/components/ContactSection";

export default function AboutPage() {
  return (
    <div className="w-full flex flex-col space-y-0">
      <ProfileStory />
      <AgencyBanner />
      <GalleryCarousel />
      <ContactSection />
    </div>
  );
}
