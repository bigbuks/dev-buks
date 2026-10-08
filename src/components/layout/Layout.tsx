import type { ReactNode } from "react";
import { ScanSweep } from "../ui/ScanSweep";

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <>
      <ScanSweep />
      <div className="relative z-10">
        {children}
      </div>
    </>
  );
}