"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const items = [
  "SMK TI BAZMA — Vocational High School (2023 - Now)",
  "MTs Mahaduth Tholabah — Islamic Junior High School (2019 - 2022)",
  "SDN Mangunsaren 02 — Elementary School (2013 - 2019)",
];

export default function EducationCarousel() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % items.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="text-center">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
        Education 
      </h2>
      <div className="h-16 overflow-hidden flex items-center justify-center">
        <motion.p
          key={index}
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -50, opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="text-gray-700 dark:text-gray-300 font-medium"
        >
          {items[index]}
        </motion.p>
      </div>
    </section>
  );
}
