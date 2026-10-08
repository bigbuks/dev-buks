import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { SiDevdotto } from "react-icons/si";
import { Wrap } from "./Wrap";

const NAV_LINKS = [
  { label: "Home", href: "#top" },
  { label: "About", href: "#about" },
  { label: "Work", href: "#work" },
  { label: "Contact", href: "#contact" },
];

const SOCIALS = [
  { label: "GitHub", href: "https://github.com/bigbuks", icon: <FiGithub size={20} /> },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/oluwatobiloba-adewumi-168322231", icon: <FiLinkedin size={20} /> },
  { label: "Dev.to", href: "https://dev.to/bigbuks", icon: <SiDevdotto size={20} /> },
  { label: "Email", href: "mailto:developerbuks@gmail.com", icon: <FiMail size={20} /> },
];

const STACK = [
  "React",
  "TypeScript",
  "Node.js",
  "Express",
  "MongoDB",
  "PostgreSQL",
  "PHP",
  "Tailwind",
  "Vite",
  "Motion",
];

export function Footer() {
  return (
    <footer className="relative mt-24 md:mt-32 border-t border-[rgba(124,255,107,0.14)]">
      <Wrap>
        <div className="py-14 md:py-16">
          {/* Three-column grid */}
          <div className="grid grid-cols-1 md:grid-cols-[1.4fr_1fr_1.2fr] gap-12 md:gap-10">

            {/* Column 1 — bio as code */}
            <div>
              <pre className="font-mono text-[12.5px] md:text-[13px] leading-[1.95] text-ink whitespace-pre-wrap">
                <span className="text-green">const</span>{" "}
                <span className="text-amber">developer</span>{" "}
                <span className="text-dim">=</span> {"{"}
                {"\n"}
                {"  "}
                <span className="text-ink">name</span>
                <span className="text-dim">:</span>{" "}
                <span className="text-green">
                  &quot;Tobiloba Bukunmi Adewumi&quot;
                </span>
                <span className="text-dim">,</span>
                {"\n"}
                {"  "}
                <span className="text-ink">role</span>
                <span className="text-dim">:</span>{" "}
                <span className="text-green">
                  &quot;Full-Stack Web Developer&quot;
                </span>
                <span className="text-dim">,</span>
                {"\n"}
                {"  "}
                <span className="text-ink">skills</span>
                <span className="text-dim">:</span>{" "}
                <span className="text-dim">[</span>
                <span className="text-green">&quot;Frontend&quot;</span>
                <span className="text-dim">, </span>
                <span className="text-green">&quot;Backend&quot;</span>
                {/* <span className="text-dim">, </span> */}
                {/* <span className="text-green">&quot;UI/UX&quot;</span> */}
                <span className="text-dim">]</span>
                <span className="text-dim">,</span>
                {"\n"}
                {"  "}
                <span className="text-ink">available</span>
                <span className="text-dim">:</span>{" "}
                <span className="text-amber">true</span>
                {"\n"}
                <span className="text-dim">{"};"}</span>
              </pre>

              {/* <p className="text-ink text-[13px] md:text-[13.5px] leading-[1.9] mt-6 max-w-[440px]">
                I&apos;m passionate about creating elegant, efficient, and
                user-friendly web applications. Always open to new opportunities
                and collaborations.
              </p> */}

              {/* socials — icons only */}
              <div className="flex items-center gap-4 mt-7">
                {SOCIALS.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target={s.href.startsWith("http") ? "_blank" : undefined}
                    rel={s.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    aria-label={s.label}
                    className="text-dim hover:text-green transition-colors duration-200"
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Column 2 — navigation */}
            <div>
              <h3 className="font-mono text-[13px] md:text-[13.5px] text-green mb-6 tracking-[0.04em]">
                ./navigation
              </h3>
              <ul className="space-y-4">
                {NAV_LINKS.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="text-ink text-[13.5px] md:text-[14px] hover:text-green transition-colors duration-200"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3 — tech stack */}
            <div>
              <h3 className="font-mono text-[13px] md:text-[13.5px] text-green mb-6 tracking-[0.04em]">
                ./tech_stack
              </h3>
              <div className="flex flex-wrap gap-2.5">
                {STACK.map((item) => (
                  <span
                    key={item}
                    className="font-mono text-[11.5px] md:text-[12px] px-3.5 py-2 bg-[rgba(255,255,255,0.04)] text-ink transition-colors duration-200 hover:bg-[rgba(124,255,107,0.08)] hover:text-green"
                    style={{ borderRadius: "6px" }}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Wrap>

      {/* Bottom strip */}
      <div className="border-t border-[rgba(124,255,107,0.14)]">
        <Wrap>
          <div className="py-6 flex flex-col gap-3 md:flex-row md:items-center md:justify-between text-[11px] md:text-[11.5px] font-mono tracking-[0.02em] text-dim">
            <span>
              <span className="text-amber">$ </span>
              <span>echo </span>
              <span className="text-green">
                &quot;© 2026 Bukunmi. All rights reserved.&quot;
              </span>
            </span>
            <span>
              Designed &amp; Built with <span className="text-[#ff5f5f]">❤</span>{" "}
              by <span className="text-green">Dev.Buks</span>
            </span>
          </div>
          <div className="pb-6 text-center text-[10.5px] font-mono tracking-[0.24em] uppercase text-dim/60">
            // EOF
          </div>
        </Wrap>
      </div>
    </footer>
  );
}