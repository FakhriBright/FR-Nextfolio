"use client";
import TransitionProvider from "@/components/TransitionProvider";
import HeroSection from "@/components/about/HeroSection";
import ProjectsShowcase from "@/components/about/ProjectsShowcase";
import CertificationsGrid from "@/components/about/CertificationsGrid";
import EducationCarousel from "@/components/about/EducationCarousel";
import ContactSection from "@/components/about/ContactSection";

export default function AboutPage() {
  return (
    <TransitionProvider>
      <main className="max-w-7xl mx-auto px-6 py-24 space-y-24">
        <HeroSection />
        <CertificationsGrid />
        <ProjectsShowcase />
        <EducationCarousel />
        <ContactSection />
      </main>
    </TransitionProvider>
  );
}
