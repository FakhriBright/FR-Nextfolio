"use client";
import { motion, useScroll } from "motion/react";

import { cn } from "@/lib/utils"

export function ScrollProgress({
  className,
  ref,
  ...props
}) {
  const { scrollYProgress } = useScroll()

  return (
    <motion.div
      ref={ref}
      className={cn(
        "fixed inset-x-0 top-0 z-50 h-[5px] origin-left bg-gradient-to-r from-[#0070F3] via-[#38bdf8] to-[#FF0080]",
        className
      )}
      style={{
        scaleX: scrollYProgress,
      }}
      {...props} />
  );
}
