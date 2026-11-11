"use client";

import BannerIllustration from "./illustrations/BannerIllustration";

export default function AgencyBanner() {
  return (
    <section className="py-12 w-full px-6 md:px-12 lg:px-20 xl:px-28 bg-[#FFFFFF]">
      <div className="w-full rounded-[36px] bg-[#F3F3F3] border-2 border-[#191A23] shadow-positivus-lg p-8 sm:p-12 lg:p-14 flex flex-col lg:flex-row items-center justify-between gap-10 overflow-hidden relative">
        
        {/* Left Side: Headline, Paragraph, Button */}
        <div className="w-full lg:max-w-xl space-y-6 relative z-10">
          <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold font-heading text-[#191A23] tracking-tight leading-[1.05]">
            Let&apos;s make things happen
          </h3>

          <p className="text-sm sm:text-base font-sans text-[#191A23]/75 leading-relaxed">
            Interested in collaborating on a web project, building responsive interfaces, or discussing frontend engineering opportunities? Reach out directly.
          </p>

          <div>
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-4 rounded-2xl bg-[#191A23] text-white font-heading font-bold text-xs uppercase tracking-wider hover:bg-[#B9FF66] hover:text-[#191A23] transition-all duration-300 border-2 border-[#191A23] shadow-positivus"
            >
              Get in touch
            </a>
          </div>
        </div>

        {/* Right Side: The Iconic Positivus Star/Eyes Character Illustration */}
        <div className="w-full lg:w-auto flex items-center justify-center relative z-10">
          <BannerIllustration />
        </div>

      </div>
    </section>
  );
}

