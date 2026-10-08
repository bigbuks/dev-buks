import { cn } from "@/lib/cn";

interface AvatarProps {
  src: string;
  alt?: string;
  size?: number;
  className?: string;
}

export function Avatar({ src, alt = "Portrait", size = 44, className }: AvatarProps) {
  return (
    <div
      className={cn("relative shrink-0", className)}
      style={{ width: size, height: size }}
    >
      {/* pulsing outer ring */}
      <span
        aria-hidden
        className="absolute inset-0 rounded-full animate-ping"
        style={{
          boxShadow: "0 0 0 1px rgba(124,255,107,0.55)",
          animationDuration: "2.6s",
        }}
      />
      {/* solid inner ring */}
      <span
        aria-hidden
        className="absolute inset-0 rounded-full"
        style={{
          boxShadow:
            "0 0 0 1px rgba(124,255,107,0.9), 0 0 12px rgba(124,255,107,0.45)",
        }}
      />
      <img
        src={src}
        alt={alt}
        draggable={false}
        className="absolute inset-[3px] rounded-full object-cover w-[calc(100%-6px)] h-[calc(100%-6px)]"
      />
    </div>
  );
}