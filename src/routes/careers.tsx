import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Section, SectionHeader } from "@/components/site/Section";
import { CTASection } from "@/components/site/CTASection";
import { roles } from "@/data/site";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/careers")({
  head: () => ({
    meta: [
      { title: "Careers — JDI" },
      { name: "description", content: "Join the engineering team building the foundation for AI." },
      { property: "og:title", content: "Careers — JDI" },
      { property: "og:description", content: "Build the infrastructure the next decade will run on." },
    ],
  }),
  component: Careers,
});

function Careers() {
  return (
    <>
      <PageHero
        eyebrow="Careers"
        title={<>Build what the next <em className="italic text-primary/90">decade</em> runs on.</>}
        kicker="JDI is an engineering culture. We hire for depth, judgement, and taste — in that order."
      />

      <Section className="border-t border-hairline">
        <SectionHeader eyebrow="Open roles" title="Currently hiring." />
        <div className="mt-16 container-x">
          <div className="divide-y divide-hairline border-y border-hairline">
            {roles.map((r, i) => (
              <Reveal key={r.title} delay={i * 0.03}>
                <a
                  href="#"
                  className="group grid md:grid-cols-[160px_1fr_auto] gap-6 md:gap-10 py-8 items-center hover:bg-surface/40 transition-colors px-4 -mx-4 rounded-lg"
                >
                  <div className="eyebrow text-primary/70">{r.team}</div>
                  <div className="font-display text-2xl md:text-3xl tracking-tight group-hover:text-primary transition-colors">
                    {r.title}
                  </div>
                  <div className="font-mono text-xs text-muted-foreground flex items-center gap-4">
                    <span>{r.location}</span>
                    <span className="text-primary/70 text-lg">→</span>
                  </div>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      <CTASection
        title="Don't see your role?"
        body="We're always looking for exceptional engineers, operators, and infrastructure minds."
        primaryLabel="Introduce yourself"
      />
    </>
  );
}
