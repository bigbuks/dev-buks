import { motion } from "motion/react";
import portraitImg from "@/assets/potrait.jpg";
import { Wrap } from "@/components/layout/Wrap";
import { Reveal } from "@/components/ui/Reveal";

const EXPERIENCE = [
  { role: "Freelance Web Developer", org: "Self-employed", when: "2026 — NOW", highlight: true },
  { role: "Junior Frontend Developer", org: "Zidio Development", when: "2025", highlight: false },
];

const TRAINING = [
  { role: "Full-Stack Web Development (MERN)", org: "Aptech", when: "2025 — 2026", highlight: false },
  { role: "Web Development Program", org: "NIIT", when: "2025", highlight: false },
];

const STACK = [
  {
    label: "Frontend",
    items: ["HTML", "CSS", "JavaScript", "React", "TypeScript", "Responsive builds"],
  },
  {
    label: "Backend",
    items: ["Node.js", "Express", "MongoDB", "PostgreSQL", "PHP"],
  },
  {
    label: "Tools & Platform",
    items: ["Git", "GitHub", "Neon", "Vite", "Tailwind", "REST integration"],
  },
];

export function WhoAmI() {
  return (
    <section id="about" className="py-24 md:py-32">
      <Wrap>
        {/* Section header */}
        <Reveal>
          <div className="flex items-end justify-between border-b border-[rgba(124,255,107,0.14)] pb-5 mb-12">
            <h2 className="text-green text-glow font-extrabold tracking-[0.04em] text-[28px] md:text-[42px]">
              $ whoami
            </h2>
            <span className="text-dim text-[12px] tracking-[0.2em]">[01]</span>
          </div>
        </Reveal>

        {/* Top: portrait + paragraph */}
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,340px)_1fr] gap-10 lg:gap-14 mb-16">
          {/* Portrait with corner ticks */}
          <Reveal>
            <PortraitFrame src={portraitImg} />
          </Reveal>

          {/* Paragraph + availability strip */}
          <Reveal delay={0.1}>
            <div className="flex flex-col justify-center h-full">
              <p className="text-ink text-[14px] md:text-[15px] leading-[1.95] mb-5">
                I&apos;m <span className="text-green">Oluwatobiloba Bukunmi Adewumi</span>, a web developer who turns ideas
                into clean, modern, functional websites. I build from scratch for
                businesses, brands, and individuals, with a focus on experiences
                that look professional, work smoothly, and feel great on any
                device.
              </p>
              <p className="text-ink text-[14px] md:text-[15px] leading-[1.95] mb-8">
                From e-commerce stores and business sites to personal portfolios
                and custom web apps, I build around the needs of each project. I
                work with{" "}
                <span className="text-green">
                  HTML, CSS, JavaScript, TypeScript, React, the MERN stack, PHP,
                  and PostgreSQL
                </span>{" "}
                — bringing creativity and function together so people and
                businesses can establish a strong presence online.
              </p>

              {/* Availability strip */}
              <AvailabilityStrip />
            </div>
          </Reveal>
        </div>

        {/* Bottom: experience/training timeline + stack */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          {/* Timeline */}
          <div className="space-y-10">
            <Reveal>
              <TimelineBlock title="EXPERIENCE" items={EXPERIENCE} />
            </Reveal>
            <Reveal delay={0.1}>
              <TimelineBlock title="TRAINING" items={TRAINING} />
            </Reveal>
          </div>

          {/* Stack */}
          <Reveal delay={0.15}>
            <StackBlock />
          </Reveal>
        </div>
      </Wrap>
    </section>
  );
}

/* -------------------- Sub-components -------------------- */

function PortraitFrame({ src }: { src: string }) {
  return (
    <div className="relative group">
      {/* corner ticks */}
      <span aria-hidden className="absolute -top-px -left-px w-3 h-3 border-t border-l border-green/60 z-10" />
      <span aria-hidden className="absolute -top-px -right-px w-3 h-3 border-t border-r border-green/60 z-10" />
      <span aria-hidden className="absolute -bottom-px -left-px w-3 h-3 border-b border-l border-green/60 z-10" />
      <span aria-hidden className="absolute -bottom-px -right-px w-3 h-3 border-b border-r border-green/60 z-10" />

      <div className="relative border border-[rgba(124,255,107,0.14)] bg-panel overflow-hidden transition-colors duration-300 group-hover:border-[rgba(124,255,107,0.35)]">
        <div className="aspect-[3/4] overflow-hidden">
          <motion.img
            src={src}
            alt="Bukunmi — Web Developer"
            draggable={false}
            initial={{ scale: 1.06 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="w-full h-full object-cover"
          />
        </div>
        {/* scanline overlay */}
        <div
          aria-hidden
          className="absolute inset-0 pointer-events-none opacity-25 mix-blend-overlay"
          style={{
            background:
              "repeating-linear-gradient(0deg, rgba(255,255,255,0.06) 0 1px, transparent 1px 3px)",
          }}
        />
        {/* soft vignette */}
        <div
          aria-hidden
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(circle at 50% 55%, transparent 45%, rgba(0,0,0,0.55) 100%)",
          }}
        />
      </div>

      {/* caption under frame */}
      <div className="flex justify-between text-[10px] tracking-[0.24em] uppercase text-dim mt-3">
        <span>PORTRAIT — 001</span>
        <span className="text-amber">LAGOS · NG</span>
      </div>
    </div>
  );
}

function AvailabilityStrip() {
  return (
    <div className="border border-[rgba(124,255,107,0.14)] bg-[linear-gradient(180deg,rgba(124,255,107,0.03),transparent)] px-5 py-4 space-y-2">
      <div className="flex items-center gap-3 text-[11px] tracking-[0.18em] uppercase">
        <span className="text-dim w-[68px] shrink-0">Status</span>
        <span className="text-green flex items-center gap-2 flex-wrap">
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-green shadow-glow animate-pulse shrink-0" />
          <span>Open to freelance · contract · full-time</span>
        </span>
      </div>
      <div className="flex items-center gap-3 text-[11px] tracking-[0.18em] uppercase">
        <span className="text-dim w-[68px] shrink-0">Base</span>
        <span className="text-amber">Lagos, Nigeria</span>
      </div>
    </div>
  );
}

interface TimelineBlockProps {
  title: string;
  items: { role: string; org: string; when: string; highlight: boolean }[];
}

function TimelineBlock({ title, items }: TimelineBlockProps) {
  return (
    <div>
      <h3 className="text-amber text-[11px] tracking-[0.28em] uppercase mb-5">
        {title}
      </h3>
      <div className="border-t border-[rgba(124,255,107,0.14)]">
        {items.map((item) => (
          <div
            key={item.role + item.when}
            className="py-4 border-b border-[rgba(124,255,107,0.14)]"
          >
            {/* Row 1: role on the left, year on the right */}
            <div className="flex items-baseline justify-between gap-4">
              <span
                className={
                  "text-[13px] md:text-[14px] font-medium " +
                  (item.highlight ? "text-green" : "text-ink")
                }
              >
                {item.role}
              </span>
              <span className="text-[11px] tracking-[0.18em] uppercase text-amber whitespace-nowrap shrink-0">
                {item.when}
              </span>
            </div>

            {/* Row 2: org on its own line */}
            <div className="text-[12px] md:text-[13px] text-dim mt-1">
              {item.org}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function StackBlock() {
  return (
    <div>
      <h3 className="text-amber text-[11px] tracking-[0.28em] uppercase mb-5">
        Stack
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {STACK.map((group) => (
          <div
            key={group.label}
            className="border border-[rgba(124,255,107,0.14)] bg-[linear-gradient(180deg,rgba(124,255,107,0.02),transparent)] p-5 transition-colors duration-300 hover:border-[rgba(124,255,107,0.35)]"
          >
            <div className="text-[10px] tracking-[0.24em] uppercase text-green mb-4">
              {group.label}
            </div>
            <ul className="space-y-2 text-[12px] md:text-[12.5px] text-ink">
              {group.items.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="text-dim mt-[3px] text-[10px]">▪</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}