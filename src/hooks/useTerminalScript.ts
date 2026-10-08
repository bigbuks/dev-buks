import { useEffect, useState } from "react";

export interface ScriptLine {
  text: string;
  /** ms to type this line */
  speed?: number;
  /** ms to pause after this line is complete */
  pauseAfter?: number;
  /** class for coloring, e.g. "text-amber" for prompts */
  className?: string;
  /** whether this line is a command (typing animated) or output (appears instantly) */
  instant?: boolean;
}

interface Options {
  /** ms to wait before starting the whole script */
  startDelay?: number;
  /** ms to wait before restarting after the last line */
  restartDelay?: number;
  /** pause when off-screen? not implemented — keep it simple */
  enabled?: boolean;
}

export function useTerminalScript(lines: ScriptLine[], opts: Options = {}) {
  const { startDelay = 400, restartDelay = 2600, enabled = true } = opts;
  const [visibleCount, setVisibleCount] = useState(0);
  const [currentText, setCurrentText] = useState("");

  useEffect(() => {
    if (!enabled) return;

    let cancelled = false;
    let timeoutId: number | undefined;

    const runLine = (index: number) => {
      if (cancelled) return;
      if (index >= lines.length) {
        // script complete — wait, then restart
        timeoutId = window.setTimeout(() => {
          if (cancelled) return;
          setVisibleCount(0);
          setCurrentText("");
          runLine(0);
        }, restartDelay);
        return;
      }

      const line = lines[index];

      if (line.instant) {
        // output lines appear all at once
        setCurrentText(line.text);
        timeoutId = window.setTimeout(() => {
          if (cancelled) return;
          setVisibleCount((c) => c + 1);
          setCurrentText("");
          runLine(index + 1);
        }, line.pauseAfter ?? 260);
        return;
      }

      // typing line
      const speed = line.speed ?? 32;
      let i = 0;
      const tick = () => {
        if (cancelled) return;
        i += 1;
        setCurrentText(line.text.slice(0, i));
        if (i >= line.text.length) {
          timeoutId = window.setTimeout(() => {
            if (cancelled) return;
            setVisibleCount((c) => c + 1);
            setCurrentText("");
            runLine(index + 1);
          }, line.pauseAfter ?? 420);
        } else {
          timeoutId = window.setTimeout(tick, speed);
        }
      };

      timeoutId = window.setTimeout(tick, speed);
    };

    timeoutId = window.setTimeout(() => runLine(0), startDelay);

    return () => {
      cancelled = true;
      if (timeoutId) window.clearTimeout(timeoutId);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [enabled, restartDelay, startDelay]);

  return { visibleCount, currentText };
}