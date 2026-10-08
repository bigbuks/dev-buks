import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { useForm, ValidationError } from "@formspree/react";
import { FiGithub, FiLinkedin } from "react-icons/fi";
import { SiDevdotto } from "react-icons/si";
import { Wrap } from "@/components/layout/Wrap";
import { Reveal } from "@/components/ui/Reveal";

// ⚠️ REPLACE THIS with your real Formspree form ID (the hash after /f/)
const FORMSPREE_ID = "xrpeplrz";

const CONTACT_INFO = {
  name: "Oluwatobiloba Bukunmi Adewumi",
  role: "Full-Stack Web Developer",
  location: "Lagos, Nigeria",
  email: "developerbuks@gmail.com",
  phone: "+234 901 705 5060",
};

const SOCIALS = [
  {
    label: "GitHub",
    href: "https://github.com/bigbuks",
    icon: <FiGithub size={16} />,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/oluwatobiloba-adewumi-168322231",
    icon: <FiLinkedin size={16} />,
  },
  {
    label: "Dev.to",
    href: "https://dev.to/bigbuks",
    icon: <SiDevdotto size={16} />,
  },
];

export function Contact() {
  return (
    <section id="contact" className="py-24 md:py-32">
      <Wrap>
        {/* Section header */}
        <Reveal>
          <div className="flex items-end justify-between border-b border-[rgba(124,255,107,0.14)] pb-5 mb-12">
            <h2 className="text-green text-glow font-extrabold tracking-[0.04em] text-[28px] md:text-[42px]">
              $ ./contact
            </h2>
            <span className="text-dim text-[12px] tracking-[0.2em]">[03]</span>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_1fr] gap-6">
          {/* LEFT — the form */}
          <Reveal>
            <ContactForm />
          </Reveal>

          {/* RIGHT — info + socials */}
          <div className="space-y-6">
            <Reveal delay={0.1}>
              <ContactInfoPanel />
            </Reveal>
            <Reveal delay={0.2}>
              <SocialsPanel />
            </Reveal>
          </div>
        </div>
      </Wrap>
    </section>
  );
}

/* -------------------- Form -------------------- */

function ContactForm() {
  const [formKey, setFormKey] = useState(0);

  return (
    <ContactFormInner
      key={formKey}
      onReset={() => setFormKey((k) => k + 1)}
    />
  );
}

interface ContactFormInnerProps {
  onReset: () => void;
}

function ContactFormInner({ onReset }: ContactFormInnerProps) {
  const [state, handleSubmit] = useForm(FORMSPREE_ID);
  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    if (!state.succeeded) return;

    // eslint-disable-next-line react-hooks/set-state-in-effect
    setShowSuccess(true);
    const timer = window.setTimeout(() => {
      setShowSuccess(false);
      onReset(); // remount → Formspree state resets to initial
    }, 8000);

    return () => window.clearTimeout(timer);
  }, [state.succeeded, onReset]);

  // success state
  if (showSuccess) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="relative h-full border border-[rgba(124,255,107,0.14)] bg-panel p-8 md:p-10 flex items-center justify-center shadow-glow-inset"
      >
        <span aria-hidden className="absolute -top-px -left-px w-2.5 h-2.5 border-t border-l border-green/60" />
        <span aria-hidden className="absolute -top-px -right-px w-2.5 h-2.5 border-t border-r border-green/60" />
        <span aria-hidden className="absolute -bottom-px -left-px w-2.5 h-2.5 border-b border-l border-green/60" />
        <span aria-hidden className="absolute -bottom-px -right-px w-2.5 h-2.5 border-b border-r border-green/60" />

        <div className="text-center">
          <div className="text-green text-glow text-[16px] tracking-[0.22em] uppercase mb-3">
            &gt; message_sent ✓
          </div>
          <p className="text-dim text-[12.5px] leading-[1.8] max-w-[280px] mx-auto">
            Thanks for reaching out. I&apos;ll get back to you within a day or
            two.
          </p>
        </div>
      </motion.div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="relative border border-[rgba(124,255,107,0.14)] bg-panel shadow-glow-inset"
    >
      {/* corner ticks */}
      <span aria-hidden className="absolute -top-px -left-px w-2.5 h-2.5 border-t border-l border-green/60" />
      <span aria-hidden className="absolute -top-px -right-px w-2.5 h-2.5 border-t border-r border-green/60" />
      <span aria-hidden className="absolute -bottom-px -left-px w-2.5 h-2.5 border-b border-l border-green/60" />
      <span aria-hidden className="absolute -bottom-px -right-px w-2.5 h-2.5 border-b border-r border-green/60" />

      {/* Window chrome */}
      <div className="flex items-center gap-2 px-4 py-3 border-b border-[rgba(124,255,107,0.14)]">
        <span className="w-2.5 h-2.5 rounded-full bg-[#3a2b2b]" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#3a3320]" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#1f3a24]" />
        <span className="ml-3 text-[11px] tracking-[0.2em] uppercase text-dim">
          contact_form.tsx
        </span>
      </div>

      <div className="p-6 md:p-7 space-y-5">
        <Field
          label="const name"
          comment="/* Your name */"
          id="name"
          type="text"
          placeholder="Ada Lovelace"
          required
          errors={state.errors}
        />
        <Field
          label="const email"
          comment="/* Your email */"
          id="email"
          type="email"
          placeholder="you@example.com"
          required
          errors={state.errors}
        />
        <Field
          label="const subject"
          comment="/* Subject */"
          id="subject"
          type="text"
          placeholder="Project Inquiry"
          required
          errors={state.errors}
        />
        <Field
          label="const message"
          comment="/* Your message */"
          id="message"
          as="textarea"
          rows={5}
          placeholder="I'd like to discuss a potential project..."
          required
          errors={state.errors}
        />

        {/* Honeypot spam trap — hidden from humans, catches bots */}
        <input
          type="text"
          name="_gotcha"
          tabIndex={-1}
          autoComplete="off"
          className="hidden"
          aria-hidden="true"
        />
        {/* Subject line for the notification email */}
        <input
          type="hidden"
          name="_subject"
          value="New message from bukunmi.dev"
        />

        <div className="pt-2">
          <button
            type="submit"
            disabled={state.submitting}
            className="w-full py-4 bg-green text-[#04160a] font-bold text-[12px] tracking-[0.22em] uppercase transition-all duration-200 hover:bg-[#9dff8e] hover:shadow-glow disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {state.submitting ? (
              "> sending..."
            ) : (
              <>
                send_message.ts <span className="text-[#04160a]/70">--run</span>
              </>
            )}
          </button>
        </div>
      </div>
    </form>
  );
}

/* -------------------- Field -------------------- */

interface FieldProps {
  label: string;
  comment: string;
  id: string;
  type?: string;
  as?: "input" | "textarea";
  placeholder?: string;
  rows?: number;
  required?: boolean;
  errors: ReturnType<typeof useForm>[0]["errors"];
}

function Field({
  label,
  comment,
  id,
  type = "text",
  as = "input",
  placeholder,
  rows = 4,
  required = false,
  errors,
}: FieldProps) {
  const fieldClass =
    "w-full bg-[rgba(0,0,0,0.25)] border border-[rgba(124,255,107,0.14)] px-4 py-3 text-ink text-[13px] placeholder:text-dim/60 font-mono focus:outline-none focus:border-[rgba(124,255,107,0.5)] focus:shadow-glow transition-all duration-200";

  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className="font-mono text-[12.5px] text-ink">
        <span className="text-amber">{label}</span>{" "}
        <span className="text-dim">{comment}</span>
      </label>
      {as === "textarea" ? (
        <textarea
          id={id}
          name={id}
          rows={rows}
          placeholder={placeholder}
          required={required}
          className={fieldClass + " resize-y min-h-[120px]"}
        />
      ) : (
        <input
          id={id}
          name={id}
          type={type}
          placeholder={placeholder}
          required={required}
          className={fieldClass}
        />
      )}
      <ValidationError
        prefix={label}
        field={id}
        errors={errors}
        className="text-[11px] text-[#ff7a7a] tracking-wide"
      />
    </div>
  );
}

/* -------------------- Info panel -------------------- */

function ContactInfoPanel() {
  return (
    <div className="relative border border-[rgba(124,255,107,0.14)] bg-panel shadow-glow-inset">
      <span aria-hidden className="absolute -top-px -left-px w-2.5 h-2.5 border-t border-l border-green/60" />
      <span aria-hidden className="absolute -top-px -right-px w-2.5 h-2.5 border-t border-r border-green/60" />
      <span aria-hidden className="absolute -bottom-px -left-px w-2.5 h-2.5 border-b border-l border-green/60" />
      <span aria-hidden className="absolute -bottom-px -right-px w-2.5 h-2.5 border-b border-r border-green/60" />

      <div className="flex items-center gap-2 px-4 py-3 border-b border-[rgba(124,255,107,0.14)]">
        <span className="w-2.5 h-2.5 rounded-full bg-[#3a2b2b]" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#3a3320]" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#1f3a24]" />
        <span className="ml-3 text-[11px] tracking-[0.2em] uppercase text-dim">
          contact_info.json
        </span>
      </div>

      <div className="p-6 md:p-7 space-y-5 text-[13px] font-mono leading-[1.9]">
        <div className="text-ink">
          <span className="text-dim">{"{"}</span>
        </div>
        <InfoLine k="name" v={CONTACT_INFO.name} />
        <InfoLine k="role" v={CONTACT_INFO.role} />
        <InfoLine k="location" v={CONTACT_INFO.location} />
        <InfoLine
          k="email"
          v={CONTACT_INFO.email}
          href={`mailto:${CONTACT_INFO.email}`}
        />
        <InfoLine
          k="phone"
          v={CONTACT_INFO.phone}
          href={`tel:${CONTACT_INFO.phone.replace(/\s/g, "")}`}
        />
        <div className="text-ink">
          <span className="text-dim">{"}"}</span>
        </div>
      </div>
    </div>
  );
}

interface InfoLineProps {
  k: string;
  v: string;
  href?: string;
}

function InfoLine({ k, v, href }: InfoLineProps) {
  const valueEl = href ? (
    <a
      href={href}
      className="text-green hover:text-glow transition-all duration-200 break-all"
    >
      {v}
    </a>
  ) : (
    <span className="text-green break-all">{v}</span>
  );

  return (
    <div className="pl-4">
      <span className="text-amber">&quot;{k}&quot;</span>
      <span className="text-dim">: </span>
      <span className="text-amber">&quot;</span>
      {valueEl}
      <span className="text-amber">&quot;</span>
      <span className="text-dim">,</span>
    </div>
  );
}

/* -------------------- Socials panel -------------------- */

function SocialsPanel() {
  return (
    <div className="relative border border-[rgba(124,255,107,0.14)] bg-panel shadow-glow-inset">
      <span aria-hidden className="absolute -top-px -left-px w-2.5 h-2.5 border-t border-l border-green/60" />
      <span aria-hidden className="absolute -top-px -right-px w-2.5 h-2.5 border-t border-r border-green/60" />
      <span aria-hidden className="absolute -bottom-px -left-px w-2.5 h-2.5 border-b border-l border-green/60" />
      <span aria-hidden className="absolute -bottom-px -right-px w-2.5 h-2.5 border-b border-r border-green/60" />

      <div className="flex items-center gap-2 px-4 py-3 border-b border-[rgba(124,255,107,0.14)]">
        <span className="w-2.5 h-2.5 rounded-full bg-[#3a2b2b]" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#3a3320]" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#1f3a24]" />
        <span className="ml-3 text-[11px] tracking-[0.2em] uppercase text-dim">
          social_profiles.sh
        </span>
      </div>

      <div className="p-6 md:p-7 space-y-3">
        <div className="text-dim text-[12px] font-mono mb-4">
          # Connect with me online
        </div>
        {SOCIALS.map((s) => (
          <a
            key={s.label}
            href={s.href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 border border-[rgba(124,255,107,0.14)] px-4 py-3 text-ink text-[13px] font-mono transition-all duration-200 hover:border-[rgba(124,255,107,0.4)] hover:text-green hover:shadow-glow group"
          >
            <span className="text-dim group-hover:text-green transition-colors">
              {s.icon}
            </span>
            <span>{s.href.replace(/^https?:\/\//, "")}</span>
          </a>
        ))}
      </div>
    </div>
  );
}