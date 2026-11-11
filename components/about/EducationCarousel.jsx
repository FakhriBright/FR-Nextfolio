"use client";

export default function EducationCarousel() {
  return (
    <section className="max-w-4xl mx-auto py-12 text-center">
      <h2 className="text-3xl md:text-5xl font-bold font-display text-foreground mb-10 uppercase tracking-tighter">
        Academic <span className="font-serif italic font-light lowercase text-primary">timeline</span>
      </h2>
      <div className="border border-border bg-card rounded-2xl p-8 sm:p-10 shadow-sm max-w-2xl mx-auto relative hover:border-primary/40 transition-all">
        <div className="absolute top-4 left-6 text-[9px] uppercase font-mono font-bold tracking-[0.2em] text-muted-foreground">
          [ Education ]
        </div>
        <div className="absolute top-4 right-6 text-[9px] uppercase font-mono tracking-[0.2em] text-primary font-bold">
          Active Student
        </div>
        
        <div className="space-y-4 pt-4">
          <span className="inline-block px-3 py-1 rounded-full bg-secondary border border-border text-[10px] uppercase font-mono font-bold tracking-widest text-primary">
            SMK TI BAZMA
          </span>
          <h3 className="text-xl md:text-2xl font-bold font-heading text-foreground">
            Information Systems, Networking &amp; Applications
          </h3>
          <p className="text-sm text-muted-foreground tracking-wide font-sans max-w-md mx-auto leading-relaxed">
            Vocational high school program focusing on modern web development, network fundamentals, user interface design, and systems engineering.
          </p>
          <div className="pt-2 flex items-center justify-center gap-2">
            <span className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse" />
            <span className="text-[10px] font-mono tracking-widest text-muted-foreground uppercase">
              [ 2023 — Present ]
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
