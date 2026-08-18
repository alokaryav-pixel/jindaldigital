import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Section } from "@/components/site/Section";
import { CTASection } from "@/components/site/CTASection";
import { insights } from "@/data/site";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/insights")({
  head: () => ({
    meta: [
      { title: "Insights — JDI" },
      { name: "description", content: "Field notes, research, and perspectives from the team building AI infrastructure." },
      { property: "og:title", content: "Insights — JDI" },
      { property: "og:description", content: "Field notes from the build." },
    ],
  }),
  component: Insights,
});

function Insights() {
  return (
    <>
      <PageHero
        eyebrow="Insights"
        title={<>Field notes from the <em className="italic text-primary/90">build</em>.</>}
        kicker="Design decisions, cost curves, operational lessons — written by the engineers doing the work."
      />
      <Section className="border-t border-hairline">
        <div className="container-x divide-y divide-hairline border-y border-hairline">
          {insights.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.04}>
              <a
                href="#"
                className="group grid md:grid-cols-[140px_120px_1fr_auto] gap-6 md:gap-10 py-10 items-baseline hover:bg-surface/40 transition-colors px-4 -mx-4 rounded-lg"
              >
                <div className="eyebrow text-primary/70">{p.kind}</div>
                <div className="font-mono text-xs text-muted-foreground">{p.date}</div>
                <div>
                  <div className="font-display text-2xl md:text-3xl tracking-tight mb-2 group-hover:text-primary transition-colors">
                    {p.title}
                  </div>
                  <div className="text-muted-foreground max-w-2xl leading-relaxed">{p.excerpt}</div>
                </div>
                <div className="hidden md:block text-primary/70 group-hover:text-primary transition-colors text-lg">
                  →
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </Section>
      <CTASection title="Subscribe to field notes." primaryLabel="Get updates" />
    </>
  );
}
