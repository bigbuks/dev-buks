import { motion } from "motion/react";
import { Wrap } from "@/components/layout/Wrap";
import { Button } from "@/components/ui/Button";
import { TypeLine } from "@/components/ui/TypeLine";
import { Terminal } from "@/components/ui/Terminal";

const titleLines = ["FROM SCHEMA", "TO SCREEN"];

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.2,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export function Hero() {
  return (
    <section
      id="top"
      className="relative pt-[100px] md:pt-[130px] pb-16 md:pb-24"
    >
      <Wrap>
        <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_1fr] gap-14 lg:gap-16 items-center">
          {/* LEFT — text column */}
          <motion.div variants={container} initial="hidden" animate="show">
            <motion.div
                variants={fadeUp}
                className="text-[11px] md:text-[12px] tracking-[0.22em] uppercase text-dim mb-6 leading-[1.9]"
                >
                <div className="text-amber">
                    <span className="mr-3">&gt;</span>
                    <TypeLine
                    text="SYSTEM ONLINE"
                    speed={28}
                    startDelay={300}
                    caret={false}
                    className="text-amber"
                    />
                </div>
                <div className="text-amber pl-[1.6em] mt-0.5">
                    <TypeLine
                    text="FULL-STACK WEB DEVELOPER"
                    speed={28}
                    startDelay={1200}
                    className="text-amber"
                    />
                </div>
                </motion.div>

            <h1 className="text-green text-glow font-extrabold tracking-[0.02em] leading-[0.95] text-[44px] sm:text-[64px] md:text-[76px] lg:text-[88px] mb-8"
            style={{ wordSpacing: "-0.25em" }}>
              {titleLines.map((line, i) => (
                <motion.span
                  key={line}
                  variants={fadeUp}
                  className="block"
                  style={{ display: "block" }}
                >
                  {line}
                  {i === titleLines.length - 1 && (
                    <span
                      className="inline-block align-baseline animate-blink bg-amber ml-1"
                      style={{
                        width: "0.28em",
                        height: "0.82em",
                        transform: "translateY(0.06em)",
                      }}
                      aria-hidden
                    />
                  )}
                </motion.span>
              ))}
            </h1>

            <motion.p
              variants={fadeUp}
              className="text-ink max-w-[540px] mb-10 text-[13px] md:text-[14px] leading-[1.9]"
            >
              I design and ship fast, resilient web products end to end — from
              database schema to the last pixel of the interface. Based in
              Lagos, working worldwide.
            </motion.p>

           <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-6">
                <Button href="#work" variant="solid">
                    View Work
                </Button>
                <a
                    href="#explore"
                    className="inline-flex items-center gap-2 text-dim text-[11px] tracking-[0.22em] uppercase hover:text-green transition-colors duration-200 group"
                >
                    <span>Scroll to explore</span>
                    <span className="inline-block transition-transform duration-200 group-hover:translate-y-0.5">
                    ↓
                    </span>
                </a>
                </motion.div>
          </motion.div>

          {/* RIGHT — terminal panel */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <Terminal />
          </motion.div>
        </div>
      </Wrap>
    </section>
  );
}