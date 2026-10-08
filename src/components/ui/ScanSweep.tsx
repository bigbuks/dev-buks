import { motion } from "motion/react";

/**
 * A soft green horizontal beam that sweeps from top to bottom on loop.
 * Dim core, wide blurred glow — reads as ambient light, not a hard laser.
 */
export function ScanSweep() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-20 overflow-hidden"
    >
      {/* Wide soft halo — the main body of the beam */}
      <motion.div
        initial={{ y: "-15vh" }}
        animate={{ y: "115vh" }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "linear",
          repeatDelay: 1.5,
        }}
        className="absolute left-0 right-0 h-[180px] blur-[24px]"
        style={{
          background:
            "linear-gradient(180deg, rgba(124,255,107,0) 0%, rgba(124,255,107,0.07) 45%, rgba(124,255,107,0.11) 50%, rgba(124,255,107,0.07) 55%, rgba(124,255,107,0) 100%)",
        }}
      />

      {/* Thin brighter core — much dimmer than before, softly glowing */}
      <motion.div
        initial={{ y: "-15vh" }}
        animate={{ y: "115vh" }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "linear",
          repeatDelay: 1.5,
        }}
        className="absolute left-0 right-0 h-[1px] blur-[1.5px]"
        style={{
          background:
            "linear-gradient(90deg, transparent 0%, rgba(124,255,107,0.06) 15%, rgba(124,255,107,0.35) 50%, rgba(124,255,107,0.06) 85%, transparent 100%)",
          boxShadow:
            "0 0 10px rgba(124,255,107,0.28), 0 0 30px rgba(124,255,107,0.14)",
        }}
      />
    </div>
  );
}