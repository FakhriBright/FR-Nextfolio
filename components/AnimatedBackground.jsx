"use client";

export default function AnimatedBackground() {
  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 -z-10 overflow-hidden bg-background pointer-events-none transition-colors duration-500"
    >
      {/* Precision 1px grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--border)_1px,transparent_1px),linear-gradient(to_bottom,var(--border)_1px,transparent_1px)] bg-[size:64px_64px] opacity-40 dark:opacity-20" />

      {/* Atmospheric Ambient Glows */}
      <div className="absolute -top-40 right-[-10vw] w-[600px] h-[600px] bg-primary/6 dark:bg-primary/4 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute top-[60vh] left-[-10vw] w-[500px] h-[500px] bg-primary/4 dark:bg-primary/3 rounded-full blur-[180px] pointer-events-none" />
    </div>
  );
}
