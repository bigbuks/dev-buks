import { motion } from "motion/react";
import avatarImg from "@/assets/potrait.jpg";
import { Avatar } from "./Avatar";
import { cn } from "@/lib/cn";
import { useTerminalScript, type ScriptLine } from "@/hooks/useTerminalScript";

const SCRIPT: ScriptLine[] = [
  { text: "whoami", speed: 55, pauseAfter: 320, className: "text-amber" },
  { text: "bukunmi — web developer @ lagos, ng", instant: true, pauseAfter: 420 },

  { text: "cat stack.json", speed: 45, pauseAfter: 320, className: "text-amber" },
  { text: '{ "frontend": ["html","css","js","react","ts"],', instant: true, pauseAfter: 160 },
  { text: '  "backend":  ["node","express","mongodb","postgresql","php"],', instant: true, pauseAfter: 160 },
  { text: '  "tools":    ["git","github","neon","vite","tailwind"] }', instant: true, pauseAfter: 620 },

  { text: "uptime --since 2023", speed: 40, pauseAfter: 320, className: "text-amber" },
  { text: "3 years coding · MERN · freelancing now", instant: true, pauseAfter: 420 },

  { text: "status", speed: 55, pauseAfter: 320, className: "text-amber" },
  { text: "● open to freelance · contract · full-time", instant: true, pauseAfter: 2200 },
];

interface TerminalProps {
  className?: string;
}

export function Terminal({ className }: TerminalProps) {
  const { visibleCount, currentText } = useTerminalScript(SCRIPT, {
    startDelay: 700,
    restartDelay: 2400,
  });

  return (
    <motion.div
      whileHover={{ y: -3 }}
      transition={{ type: "spring", stiffness: 240, damping: 26 }}
      className={cn(
        "relative border border-[rgba(124,255,107,0.14)] bg-panel shadow-glow-inset group",
        "transition-colors duration-300 hover:border-[rgba(124,255,107,0.35)]",
        className
      )}
    >
      {/* Window chrome */}
      <div className="flex items-center gap-2 px-4 py-3 border-b border-[rgba(124,255,107,0.14)]">
        <span className="w-2.5 h-2.5 rounded-full bg-[#3a2b2b]" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#3a3320]" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#1f3a24]" />
        <span className="ml-3 text-[11px] tracking-[0.2em] uppercase text-dim">
          ~/bukunmi — zsh
        </span>
        <span className="ml-auto text-[10px] tracking-[0.2em] uppercase text-dim">
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-green shadow-glow animate-pulse mr-1.5 align-middle" />
          <span className="align-middle">live</span>
        </span>
      </div>

      {/* Identity strip */}
      <motion.div
        initial={{ opacity: 0, y: 6 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.9, ease: [0.22, 1, 0.36, 1] }}
        className="flex items-center gap-5 px-5 py-5 border-b border-[rgba(124,255,107,0.1)]"
      >
        <Avatar src={avatarImg} alt="Bukunmi — Web Developer" size={72} />
        <div className="min-w-0">
          <div className="text-[14px] md:text-[15px] tracking-[0.2em] uppercase text-green text-glow-sm">
            bukunmi@dev
          </div>
          <div className="text-[12px] md:text-[13px] tracking-[0.14em] uppercase text-dim truncate">
            system online · lagos, ng · 
          </div>
        </div>
      </motion.div>

      {/* Terminal body */}
      <div className="px-4 py-5 text-[12.5px] md:text-[13px] leading-[1.85] min-h-[280px]">
        {SCRIPT.slice(0, visibleCount).map((line, i) => (
          <TerminalLine key={i} line={line} />
        ))}
        {/* currently typing line */}
        {visibleCount < SCRIPT.length && (
          <div className={cn("break-words", SCRIPT[visibleCount]?.className)}>
            {SCRIPT[visibleCount]?.className?.includes("amber") && (
              <span className="text-amber mr-2">$</span>
            )}
            <span className="text-ink whitespace-pre-wrap">{currentText}</span>
            <span
              className="inline-block align-baseline ml-0.5 animate-blink bg-amber"
              style={{
                width: "0.6em",
                height: "1em",
                transform: "translateY(0.12em)",
              }}
            />
          </div>
        )}
        {/* when all lines complete, just show the blinking cursor on an empty prompt */}
        {visibleCount >= SCRIPT.length && (
          <div>
            <span className="text-amber mr-2">$</span>
            <span
              className="inline-block align-baseline animate-blink bg-amber"
              style={{
                width: "0.6em",
                height: "1em",
                transform: "translateY(0.12em)",
              }}
            />
          </div>
        )}
      </div>

      {/* corner ticks — decorative */}
      <span aria-hidden className="absolute -top-px -left-px w-2 h-2 border-t border-l border-green/60" />
      <span aria-hidden className="absolute -top-px -right-px w-2 h-2 border-t border-r border-green/60" />
      <span aria-hidden className="absolute -bottom-px -left-px w-2 h-2 border-b border-l border-green/60" />
      <span aria-hidden className="absolute -bottom-px -right-px w-2 h-2 border-b border-r border-green/60" />
    </motion.div>
  );
}

function TerminalLine({ line }: { line: ScriptLine }) {
  const isCommand = !line.instant;
  return (
    <div className={cn("break-words", line.className)}>
      {isCommand && <span className="text-amber mr-2">$</span>}
      <span className="text-ink whitespace-pre-wrap">{line.text}</span>
    </div>
  );
}