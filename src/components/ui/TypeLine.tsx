import { cn } from "@/lib/cn";
import { useTypewriter } from "@/hooks/useTypewriter";

interface TypeLineProps {
  text: string;
  className?: string;
  speed?: number;
  startDelay?: number;
  caret?: boolean;
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
    <span
      className={cn(
        // Allow wrapping at natural word boundaries
        "inline whitespace-pre-wrap [overflow-wrap:anywhere]",
        className
      )}
    >
      {displayed}
      {caret && (!done || caretPersist) && (
        <span
          className="inline-block align-baseline ml-0.5 animate-blink bg-amber"
          style={{
            width: "0.6em",
            height: "1em",
            transform: "translateY(0.12em)",
          }}
        />
      )}
    </span>
  );
}