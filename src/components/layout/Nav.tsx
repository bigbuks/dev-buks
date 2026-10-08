import { useEffect, useState } from "react";
import { cn } from "@/lib/cn";
import { Wrap } from "./Wrap";
import { Button } from "@/components/ui/Button";

const LINKS = [
  { label: "Home", href: "#top" },
  { label: "About", href: "#about" },
  { label: "Work", href: "#work" },
  { label: "Contact", href: "#contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "backdrop-blur-md bg-[rgba(6,9,10,0.92)] border-b border-[rgba(124,255,107,0.14)]"
          : "bg-transparent border-b border-transparent"
      )}
    >
      <Wrap>
        <div className="flex items-center justify-between h-[68px]">
          {/* Logo */}
          <a
            href="#top"
            className="text-green text-[18px] font-extrabold tracking-[0.15em] text-glow-sm"
          >
            DEV.BUKS<span className="animate-blink">_</span>
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-10">
            {LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[12px] tracking-[0.22em] uppercase text-dim hover:text-green transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <Button href="#contact" variant="ghost">
              Let&apos;s Talk
            </Button>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen((v) => !v)}
            className="md:hidden text-green text-3xl leading-none"
            aria-label="Toggle menu"
          >
            {menuOpen ? "×" : "≡"}
          </button>
        </div>
      </Wrap>

      {/* Mobile dropdown */}
      <div
        className={cn(
          "md:hidden overflow-hidden transition-[max-height,opacity] duration-300",
          menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <div className="bg-[rgba(6,9,10,0.95)] backdrop-blur-md border-t border-[rgba(124,255,107,0.14)]">
          <Wrap>
            <div className="py-4 flex flex-col gap-4">
              {LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-[12px] tracking-[0.22em] uppercase text-dim hover:text-green transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <Button
                href="#contact"
                variant="ghost"
                className="self-start mt-2"
                onClick={() => setMenuOpen(false)}
              >
                Let&apos;s Talk
              </Button>
            </div>
          </Wrap>
        </div>
      </div>
    </nav>
  );
}