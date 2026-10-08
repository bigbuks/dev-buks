import { motion } from "motion/react";
import { ExternalLink } from "lucide-react";
import { FiGithub } from "react-icons/fi";
import { Wrap } from "@/components/layout/Wrap";
import { Reveal } from "@/components/ui/Reveal";

interface Project {
  id: string;
  name: string;
  description: string;
  tags: string[];
  year: string;
  live?: string;
  repo?: string;
}

const PROJECTS: Project[] = [
  {
    id: "PRJ-001",
    name: "INFERNACE E-Commerce",
    description:
      "Full-stack e-commerce platform with auth, product browsing, cart, checkout, order processing, and an admin dashboard for managing products and orders.",
    tags: [
      "React",
      "JavaScript",
      "Node.js",
      "Express",
      "MongoDB",
      "REST API",
      "Vite",
      "Tailwind",
      "Razorpay",
      "Stripe",
      "Admin Dashboard",
    ],
    year: "2026",
    live: "https://infernace.vercel.app",
    repo: "https://github.com/bigbuks/infernace",
  },
  {
    id: "PRJ-002",
    name: "BluePeak Investment",
    description:
      "Crypto investment platform where users deposit BTC, ETH, USDT, USDC, or SOL, track their portfolio, and manage their account. QR-code wallet addresses and an admin panel confirm deposits in real time.",
    tags: [
      "React",
      "Vite",
      "Tailwind",
      "Node.js",
      "Express",
      "PostgreSQL",
      "Drizzle ORM",
      "JWT",
      "Crypto",
      "Admin Dashboard",
    ],
    year: "2026",
    live: "https://bluepeak-investment.vercel.app",
    repo: "https://github.com/bigbuks/bluepeak-investment",
  },
  {
    id: "PRJ-003",
    name: "Fashion E-Commerce",
    description:
      "Fashion storefront with product listings, category browsing, customer reviews, and promotional content — built for a smooth shopping experience.",
    tags: [
      "HTML",
      "CSS",
      "JavaScript",
      "Bootstrap",
      "E-commerce",
      "Responsive",
      "UI/UX",
    ],
    year: "2025",
    live: "https://fashion-site-ochre.vercel.app",
    repo: "https://github.com/bigbuks/Fashion-Site",
  },
  {
    id: "PRJ-004",
    name: "Progress & Prestige Flooring",
    description:
      "Business website for a flooring and interior solutions company — showcasing vinyl, carpets, laminate, tiles, wall panels, sports flooring, and generators.",
    tags: [
      "HTML",
      "CSS",
      "JavaScript",
      "Bootstrap",
      "Responsive",
      "SEO",
      "UI/UX",
    ],
    year: "2024",
    live: "https://www.progressprestige.com",
    repo: "https://github.com/bigbuks/p_p_flooring",
  },
];

export function Work() {
  return (
    <section id="work" className="py-24 md:py-32">
      <Wrap>
        {/* Section header */}
        <Reveal>
          <div className="flex items-end justify-between border-b border-[rgba(124,255,107,0.14)] pb-5 mb-12">
            <h2 className="text-green text-glow font-extrabold tracking-[0.04em] text-[28px] md:text-[42px]">
              $ ls ./work
            </h2>
            <span className="text-dim text-[12px] tracking-[0.2em]">[02]</span>
          </div>
        </Reveal>

        {/* Grid of project cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
          {PROJECTS.map((project, i) => (
            <Reveal key={project.id} delay={i * 0.1}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </Wrap>
    </section>
  );
}

/* -------------------- Card -------------------- */

function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.article
      whileHover={{ y: -3 }}
      transition={{ type: "spring", stiffness: 240, damping: 26 }}
      className="relative h-full border border-[rgba(124,255,107,0.14)] bg-[linear-gradient(180deg,rgba(124,255,107,0.02),rgba(0,0,0,0.15))] p-6 md:p-7 transition-colors duration-300 hover:border-[rgba(124,255,107,0.4)] group"
    >
      {/* corner ticks */}
      <span aria-hidden className="absolute -top-px -left-px w-2.5 h-2.5 border-t border-l border-green/60" />
      <span aria-hidden className="absolute -top-px -right-px w-2.5 h-2.5 border-t border-r border-green/60" />
      <span aria-hidden className="absolute -bottom-px -left-px w-2.5 h-2.5 border-b border-l border-green/60" />
      <span aria-hidden className="absolute -bottom-px -right-px w-2.5 h-2.5 border-b border-r border-green/60" />

      {/* top meta row */}
      <div className="flex items-start justify-between gap-4 mb-5">
        <div className="text-[10px] md:text-[11px] tracking-[0.24em] uppercase text-dim pt-1">
          <span>{project.id}</span>
          <span className="mx-2 text-[rgba(124,255,107,0.3)]">·</span>
          <span className="text-amber">{project.year}</span>
        </div>

        <div className="flex items-center gap-1.5 shrink-0">
          {project.live && (
            <IconLink
              href={project.live}
              label={`${project.name} — live site`}
              icon={<ExternalLink size={14} strokeWidth={1.75} />}
            />
          )}
          {project.repo && (
            <IconLink
              href={project.repo}
              label={`${project.name} — source code`}
              icon={<FiGithub size={14} />}
            />
          )}
        </div>
      </div>

      {/* name */}
      <h3 className="text-green text-glow-sm font-extrabold tracking-[0.03em] text-[19px] md:text-[21px] leading-tight mb-4">
        {project.name}
      </h3>

      {/* description */}
      <p className="text-ink text-[13px] md:text-[13.5px] leading-[1.8] mb-6">
        {project.description}
      </p>

      {/* tags */}
      <div className="flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="text-[10px] tracking-[0.14em] uppercase px-2.5 py-1 border border-[rgba(124,255,107,0.14)] text-dim transition-colors duration-200 group-hover:border-[rgba(124,255,107,0.25)] group-hover:text-ink"
          >
            {tag}
          </span>
        ))}
      </div>
    </motion.article>
  );
}

/* -------------------- Icon link -------------------- */

interface IconLinkProps {
  href: string;
  label: string;
  icon: React.ReactNode;
}

function IconLink({ href, label, icon }: IconLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="inline-flex items-center justify-center w-8 h-8 border border-green/60 text-green transition-all duration-200 hover:border-green hover:bg-[rgba(124,255,107,0.08)] hover:shadow-glow"
    >
      {icon}
    </a>
  );
}