"use client";
import { motion } from "framer-motion";

export default function EducationCarousel() {
  return (
    <section className="max-w-4xl mx-auto py-12 text-center">
      <h2 className="text-3xl md:text-5xl font-bold font-display text-foreground mb-10 uppercase tracking-tighter">
        Education
      </h2>
      <div className="border border-border bg-card/25 backdrop-blur-md rounded-none p-8 shadow-xl max-w-2xl mx-auto border-t-2 border-l-2 border-primary/20 relative">
        <div className="absolute top-4 left-6 text-[8px] uppercase font-bold tracking-[0.2em] text-muted-foreground">
          [ Academic Timeline ]
        </div>
        <div className="absolute bottom-4 right-6 text-[8px] uppercase font-bold tracking-[0.2em] text-muted-foreground">
          Active Student
        </div>
        
        <div className="space-y-4 pt-4">
          <span className="text-[10px] uppercase font-bold tracking-widest text-primary">SMK TI BAZMA</span>
          <h3 className="text-xl md:text-2xl font-bold font-heading text-foreground">
            Vocational High School
          </h3>
          <p className="text-sm text-muted-foreground tracking-wide font-sans max-w-md mx-auto leading-relaxed">
            Information Systems, Networking, and Applications (SIJA) Program. Focus on modern full-stack web architectures, UI/UX interaction design, networks, and cloud deployments.
          </p>
          <div className="pt-4 flex items-center justify-center gap-2">
            <span className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse" />
            <span className="text-[9px] font-mono tracking-widest text-muted-foreground uppercase">[ 2023 — Present ]</span>
          </div>
        </div>
      </div>
    </section>
  );
}
