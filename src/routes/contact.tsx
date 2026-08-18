import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Section } from "@/components/site/Section";
import { Reveal } from "@/components/site/Reveal";
import { CTAButton } from "@/components/site/CTAButton";
import { useState } from "react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — JDI" },
      { name: "description", content: "Get in touch with JDI — capacity requests, partnerships, press, investors." },
      { property: "og:title", content: "Contact — JDI" },
      { property: "og:description", content: "Start a conversation." },
    ],
  }),
  component: Contact,
});

const channels = [
  { label: "Capacity & sales", value: "capacity@jdi.com" },
  { label: "Partnerships", value: "partners@jdi.com" },
  { label: "Press", value: "press@jdi.com" },
  { label: "Investors", value: "investors@jdi.com" },
] as const;

function Contact() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title={<>Let's <em className="italic text-primary/90">draw</em> the diagram.</>}
        kicker="Tell us about the workload, the geography, and the timeline. We'll come back with a concrete architecture."
      />

      <Section className="border-t border-hairline">
        <div className="container-x grid md:grid-cols-[1.2fr_1fr] gap-16 md:gap-24">
          <Reveal>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSubmitted(true);
              }}
              className="space-y-8"
            >
              <div className="grid md:grid-cols-2 gap-8">
                <Field label="Name" name="name" required />
                <Field label="Organization" name="org" required />
              </div>
              <Field label="Work email" name="email" type="email" required />
              <Field label="Estimated capacity" name="capacity" placeholder="e.g. 5 MW, 100 GPUs, single rack" />
              <Field
                label="Workload profile"
                name="workload"
                textarea
                placeholder="Training, inference, HPC, colocation, sovereign compute…"
              />
              <div className="pt-4">
                <button
                  type="submit"
                  disabled={submitted}
                  className="group inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-8 py-4 text-sm font-medium tracking-tight transition-all shadow-[0_10px_40px_-10px_var(--glow)] hover:shadow-[0_18px_60px_-10px_var(--glow)] disabled:opacity-60"
                >
                  {submitted ? "Received — we'll be in touch" : "Send message"}
                </button>
              </div>
            </form>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="card-surface p-8 md:p-10 space-y-8">
              <div>
                <div className="eyebrow mb-6">Direct channels</div>
                <ul className="space-y-4">
                  {channels.map((c) => (
                    <li key={c.label} className="flex flex-col gap-1">
                      <span className="text-sm text-muted-foreground">{c.label}</span>
                      <a href={`mailto:${c.value}`} className="font-mono text-sm text-primary hover:underline">
                        {c.value}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="pt-8 border-t border-hairline">
                <div className="eyebrow mb-4">Office</div>
                <p className="text-sm text-foreground/80 leading-relaxed">
                  Jindal Digital Infrastructure Pvt. Ltd.<br />
                  No 18, Central Market, Punjabi Bagh (West)<br />
                  New Delhi 110 026 · India <br />
                  Phone: +91 11 45020000-10<br />
                  Phone: +91 11 25228608-9<br />
                  Fax: +91 11 25227023<br />
                  Email: info@jdi.com<br />
                </p>
              </div>
              <div className="pt-8 border-t border-hairline">
                <div className="eyebrow mb-4">Facilities</div>
                <p className="font-mono text-xs text-muted-foreground leading-relaxed">
                  IN-DEL-01<br />
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </Section>
    </>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  placeholder,
  textarea,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
  textarea?: boolean;
}) {
  const shared =
    "w-full bg-transparent border-0 border-b border-hairline pb-3 pt-2 text-lg text-foreground focus:outline-none focus:border-primary transition-colors placeholder:text-muted-foreground/50";
  return (
    <label className="block">
      <span className="eyebrow block mb-3">{label}{required && <span className="text-primary ml-1">*</span>}</span>
      {textarea ? (
        <textarea name={name} placeholder={placeholder} rows={3} className={shared} required={required} />
      ) : (
        <input type={type} name={name} placeholder={placeholder} className={shared} required={required} />
      )}
    </label>
  );
}
