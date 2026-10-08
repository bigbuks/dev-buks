import { useEffect, useRef, useState } from "react";
import { useInView } from "motion/react";
import { Wrap } from "@/components/layout/Wrap";

const BOOT_LINES = [
  "Loaded frontend.skills",
  "Loaded backend.skills",
  "Loaded database.skills",
  "Server ready — accepting connections",
];

// ms per line — the pause between finishing one line and starting the next
const LINE_GAP_MS = 260;
// ms between each character
const CHAR_SPEED_MS = 26;
// ms to wait after the last line before hiding the cursor
const HOLD_AFTER_DONE_MS = 1400;

export function BootLog() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.4 });

  const [completedLines, setCompletedLines] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [cursorVisible, setCursorVisible] = useState(false);

  useEffect(() => {
    if (!inView) return;

    let cancelled = false;
    let timeoutId: number | undefined;

    const typeLine = (index: number) => {
      if (cancelled) return;
      if (index >= BOOT_LINES.length) {
        // all lines typed — hold the cursor for a moment, then hide it
        timeoutId = window.setTimeout(() => {
          if (!cancelled) setCursorVisible(false);
        }, HOLD_AFTER_DONE_MS);
        return;
      }

      setCursorVisible(true);
      const line = BOOT_LINES[index];
      let i = 0;

      const tick = () => {
        if (cancelled) return;
        i += 1;
        setCurrentText(line.slice(0, i));

        if (i >= line.length) {
          timeoutId = window.setTimeout(() => {
            if (cancelled) return;
            setCompletedLines((c) => c + 1);
            setCurrentText("");
            typeLine(index + 1);
          }, LINE_GAP_MS);
        } else {
          timeoutId = window.setTimeout(tick, CHAR_SPEED_MS);
        }
      };

      timeoutId = window.setTimeout(tick, 180);
    };

    typeLine(0);

    return () => {
      cancelled = true;
      if (timeoutId) window.clearTimeout(timeoutId);
    };
  }, [inView]);

  return (
    <section id="explore">
      <Wrap>
        <div
          ref={ref}
          className="relative border border-[rgba(124,255,107,0.14)] bg-[linear-gradient(180deg,rgba(124,255,107,0.03),transparent)] shadow-glow-inset"
        >
          {/* corner ticks */}
          <span aria-hidden className="absolute -top-px -left-px w-2.5 h-2.5 border-t border-l border-green/60" />
          <span aria-hidden className="absolute -top-px -right-px w-2.5 h-2.5 border-t border-r border-green/60" />
          <span aria-hidden className="absolute -bottom-px -left-px w-2.5 h-2.5 border-b border-l border-green/60" />
          <span aria-hidden className="absolute -bottom-px -right-px w-2.5 h-2.5 border-b border-r border-green/60" />

          {/* Header row */}
          <div className="flex items-center justify-between px-5 py-3 border-b border-[rgba(124,255,107,0.14)] text-[10px] md:text-[11px] tracking-[0.24em] uppercase">
            <span className="text-dim">System Boot</span>
            <span className="text-amber">2026 · v1.0</span>
          </div>

          {/* Body */}
          <div className="px-5 py-5 font-mono text-[12.5px] md:text-[13.5px] leading-[2] min-h-[140px] md:min-h-[150px]">
            {BOOT_LINES.slice(0, completedLines).map((line) => (
              <BootLine key={line} text={line} done />
            ))}

            {completedLines < BOOT_LINES.length && (
              <BootLine text={currentText} done={false} showCursor={cursorVisible} />
            )}
          </div>
        </div>
      </Wrap>
    </section>
  );
}

interface BootLineProps {
  text: string;
  done: boolean;
  showCursor?: boolean;
}

function BootLine({ text, done, showCursor = false }: BootLineProps) {
  return (
    <div className="flex items-baseline gap-3">
      <span className="text-amber shrink-0">[ OK ]</span>
      <span className="text-ink break-words">
        {text}
        {!done && showCursor && (
          <span
            className="inline-block align-baseline ml-1 animate-blink bg-amber"
            style={{
              width: "0.55em",
              height: "0.95em",
              transform: "translateY(0.1em)",
            }}
          />
        )}
      </span>
    </div>
  );
}