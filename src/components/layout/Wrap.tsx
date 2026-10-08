import { cn } from "@/lib/cn";
import type { ReactNode } from "react";

interface WrapProps {
  children: ReactNode;
  className?: string;
}

export function Wrap({ children, className }: WrapProps) {
  return (
    <div className={cn("mx-auto w-full max-w-[1180px] px-5 md:px-8", className)}>
      {children}
    </div>
  );
}