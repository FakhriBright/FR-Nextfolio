import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimatedBackground from "@/components/AnimatedBackground";
import CursorEffect from "@/components/CursorEffect";
import FloatingNav from "@/components/FloatingNav";   // ⬅️ Tambahkan ini

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
      <body className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
        {/* 🔥 Custom Cursor */}
        <CursorEffect />

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
