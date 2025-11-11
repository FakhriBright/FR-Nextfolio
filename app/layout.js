import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimatedBackground from "@/components/AnimatedBackground";
import "../styles/globals.css";

export const metadata = {
  title: "FR-Nextfolio",
  description: "Portfolio by Moh. Fakhri Rizkian",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
        <AnimatedBackground />
        <Navbar />
        <div className="min-h-[80vh] relative z-10">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
