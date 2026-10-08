import { motion } from "motion/react";
import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

interface RevealProps {
  children: ReactNode;
  className?: string;
  /** seconds to wait before animating */
  delay?: number;
  /** how far to lift from (px) */
  y?: number;
  /** duration of the animation in seconds */
  duration?: number;
  /** only animate once (default) or every time it enters */
  once?: boolean;
}

export function Reveal({
  children,
  className,
  delay = 0,
  y = 24,
  duration = 0.7,
  once = true,
}: RevealProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, amount: 0.3 }}
      transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}