import { cn } from "@/lib/cn";
import { useTypewriter } from "@/hooks/useTypewriter";

interface TypeLineProps {
  text: string;
  className?: string;
  speed?: number;
  startDelay?: number;
  /** show the blinking caret while typing */
  caret?: boolean;
  /** show caret forever after done */
  caretPersist?: boolean;
}

export function TypeLine({
  text,
  className,
  speed = 45,
  startDelay = 0,
  caret = true,
  caretPersist = false,
}: TypeLineProps) {
  const { displayed, done } = useTypewriter(text, { speed, startDelay });

  return (
    <span className={cn("whitespace-pre", className)}>
      {displayed}
      {caret && (!done || caretPersist) && (
        <span className="inline-block w-[0.55ch] -mb-[0.1em] animate-blink">
          ▍
        </span>
      )}
    </span>
  );
}