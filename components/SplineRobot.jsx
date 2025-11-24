"use client";
import { useEffect } from "react";

export default function SplineRobot() {
  useEffect(() => {
    // Tambahkan script ke <head>
    const script = document.createElement("script");
    script.type = "module";
    script.src =
      "https://unpkg.com/@splinetool/viewer@1.12.0/build/spline-viewer.js";
    document.head.appendChild(script);

    return () => document.head.removeChild(script);
  }, []);

  return (
    <div className="fixed bottom-10 right-10 w-[300px] h-[300px] z-[50] pointer-events-none select-none">
      <spline-viewer url="https://prod.spline.design/9Uc6XsHmU3m91QLA/scene.splinecode"></spline-viewer>
    </div>
  );
}
