import { cn } from "@/lib/cn";
import type { ComponentPropsWithoutRef, ReactNode } from "react";

type Variant = "ghost" | "solid";

interface ButtonProps extends ComponentPropsWithoutRef<"a"> {
  variant?: Variant;
  children: ReactNode;
}

export function Button({
  variant = "ghost",
  className,
  children,
  ...rest
}: ButtonProps) {
  const base =
    "inline-block font-mono text-[12px] tracking-[0.22em] uppercase py-3 px-5 border transition-all duration-200 cursor-pointer select-none";

  const variants: Record<Variant, string> = {
    ghost: cn(
      "border-[rgba(124,255,107,0.14)] bg-transparent text-green",
      "hover:bg-[rgba(124,255,107,0.08)] hover:shadow-glow"
    ),
    solid: cn(
      "border-green bg-green text-[#04160a] font-bold shadow-glow",
      "hover:bg-[#9dff8e]"
    ),
  };

  return (
    <a className={cn(base, variants[variant], className)} {...rest}>
      {children}
    </a>
  );
}