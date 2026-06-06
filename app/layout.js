import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimatedBackground from "@/components/AnimatedBackground";
import FloatingNav from "@/components/FloatingNav";   

import "../styles/globals.css";

export const metadata = {
  title: "FR-Nextfolio",
  description: "Portfolio by Moh. Fakhri Rizkian",
  icons: {
    icon: "/icon.png",
  },
};
export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen text-foreground antialiased selection:bg-primary/20 selection:text-primary transition-colors duration-300 bg-background overflow-x-hidden">
        {/* ✨ Animated Background */}
        <AnimatedBackground />

        {/* 🌐 Navbar */}
        <Navbar />

        {/* PAGE CONTENT */}
        <div className="min-h-[80vh] relative z-10">{children}</div>

        {/* 🌙 Footer */}
        <Footer />

        {/* 🚀 Floating Navigation (selalu tampil) */}
        <FloatingNav />

        <script
          type="module"
          src="https://unpkg.com/@splinetool/viewer@1.12.0/build/spline-viewer.js"
        ></script>
      </body>
    </html>
  );
}
