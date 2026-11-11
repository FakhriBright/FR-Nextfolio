import Navbar from "@/components/Navbar";
import BottomNav from "@/components/BottomNav";
import Footer from "@/components/Footer";

import "../styles/globals.css";

export const metadata = {
  metadataBase: new URL("https://fr-nextfolio.vercel.app"),
  title: "Moh. Fakhri Rizkian — Web Developer",
  description:
    "Personal portfolio of Moh. Fakhri Rizkian, a Web Developer based in Indonesia. Focused on clean code, responsive architectures, and interactive digital web experiences.",
  keywords: [
    "Web Developer",
    "Moh. Fakhri Rizkian",
    "Next.js",
    "React",
    "Portfolio",
    "Web Development",
    "SMK TI BAZMA",
    "Tugu Pratama Indonesia",
  ],
  authors: [{ name: "Moh. Fakhri Rizkian" }],
  creator: "Moh. Fakhri Rizkian",
  icons: {
    icon: "/icon.png",
    apple: "/icon.png",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://fr-nextfolio.vercel.app/",
    title: "Moh. Fakhri Rizkian — Web Developer",
    description:
      "Web Developer based in Indonesia. Focused on clean code, responsive architectures, and interactive digital web experiences.",
    siteName: "FR-Nextfolio",
    images: [
      {
        url: "/home.png",
        width: 1200,
        height: 630,
        alt: "Moh. Fakhri Rizkian — Web Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Moh. Fakhri Rizkian — Web Developer",
    description:
      "Web Developer based in Indonesia. Focused on clean code, responsive architectures, and interactive digital web experiences.",
    images: ["/home.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen antialiased bg-[#F5F5F0] text-[#191919] overflow-x-hidden">
        {/* Editorial Top Navigation */}
        <Navbar />

        {/* Main Content with Safe-Area for Mobile Bottom Nav */}
        <main className="min-h-[85vh] relative z-10 pb-20 lg:pb-0">{children}</main>

        {/* Minimal Footer */}
        <Footer />

        {/* Fixed Mobile Bottom Navigation */}
        <BottomNav />
      </body>
    </html>
  );
}
