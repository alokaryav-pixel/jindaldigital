import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Section, SectionHeader } from "@/components/site/Section";
import { CardGrid } from "@/components/site/CardGrid";
import { CTASection } from "@/components/site/CTASection";
import { solutions } from "@/data/site";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/solutions")({
  head: () => ({
    meta: [
      { title: "Solutions — JDI" },
      { name: "description", content: "Colocation, hyperscale, managed services, and AI infrastructure — engineered as one platform." },
      { property: "og:title", content: "Solutions — JDI" },
      { property: "og:description", content: "From a single cabinet to a hundred megawatts." },
    ],
  }),
  component: Solutions,
});

function Solutions() {
  return (
    <>
      <PageHero
        eyebrow="Solutions"
        title={<>From Megawatts to <em className="italic text-primary/90">Intelligence at Scale</em>.</>}

        kicker="Seven ways to deploy on JDI. One accountable engineering team behind every one of them."
      />

      <Section className="border-t border-hairline">
        <div className="container-x space-y-24">
          {solutions.map((s, i) => (
            <Reveal key={s.id} delay={i * 0.03}>
              <div className="grid md:grid-cols-[180px_1fr] gap-8 md:gap-16 border-t border-hairline pt-12">
                <div>
                  <div className="font-mono text-xs text-muted-foreground mb-2">
                    {String(i + 1).padStart(2, "0")} · {s.tag}
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-8 md:gap-16">
                  <div>
                    <h2 className="font-display text-4xl md:text-5xl tracking-tight mb-4 gradient-text">
                      {s.name}
                    </h2>
                    <p className="text-lg text-foreground/90 leading-relaxed">{s.body}</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground leading-relaxed">{s.detail}</p>
                    <div className="mt-8 flex items-center gap-2 text-sm text-primary/80 font-mono">
                      HAL-{s.id.toUpperCase()}
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <CTASection
        title="Not sure which fits?"
        body="Send us your workload profile — we'll draw the diagram."
        primaryLabel="Talk to engineering"
      />
    </>
  );
}
