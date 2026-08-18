import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Section, SectionHeader } from "@/components/site/Section";
import { CardGrid } from "@/components/site/CardGrid";
import { CTASection } from "@/components/site/CTASection";
import { InfraDiagram } from "@/components/site/InfraDiagram";
import { Split } from "@/components/site/Split";
import { aiStack } from "@/data/site";

export const Route = createFileRoute("/ai-infrastructure")({
  head: () => ({
    meta: [
      { title: "AI Infrastructure — JDI" },
      { name: "description", content: "GPU clusters, high-density racks, AI storage, and turnkey AI factories." },
      { property: "og:title", content: "AI Infrastructure — JDI" },
      { property: "og:description", content: "Power in. Tokens out." },
    ],
  }),
  component: AI,
});

function AI() {
  return (
    <>
      <PageHero
        eyebrow="AI Infrastructure · Flagship"
        title={<>Power in. <em className="italic text-primary/90">Tokens</em> out.</>}
        kicker="Turnkey environments for training frontier models and serving production inference — designed, built and operated as a single system."
      />

      <Section className="border-t border-hairline">
        <Split
          eyebrow="Reference architecture"
          title={<>The AI factory, drawn.</>}
          body={
            <>
              <p>
                Nine modules, one contract. Substation to service endpoint — JDI owns the
                stack from the transformer to the token.
              </p>
              <p>
                Each module is documented, telemetered, and independently upgradable — so the
                facility keeps pace with the silicon roadmap without a rebuild.
              </p>
            </>
          }
          aside={<InfraDiagram />}
        />
      </Section>

      <Section className="border-t border-hairline">
        <SectionHeader
          eyebrow="The stack"
          title="Nine modules. Zero seams."
          kicker="Each module has a specification, a set of instrumentation, and an SLA. Together they compose an AI factory."
        />
        <div className="mt-20">
          <CardGrid
            items={aiStack.map((s) => ({ name: s.name, body: s.body }))}
            columns={3}
          />
        </div>
      </Section>

      <Section className="border-t border-hairline">
        <div className="container-x">
          <div className="card-surface p-10 md:p-16 relative overflow-hidden">
            <div aria-hidden className="absolute inset-0 mesh-lines opacity-40" />
            <div className="relative grid md:grid-cols-3 gap-10 md:gap-16">
              {[
                { k: "01", t: "Reserve", b: "Commit to capacity — bare metal, containerized, or platform tier." },
                { k: "02", t: "Deploy", b: "JDI commissions the pod, validates the fabric, hands over keys." },
                { k: "03", t: "Operate", b: "24/7 NOC, priority interconnect, capacity elasticity as your roadmap grows." },
              ].map((s) => (
                <div key={s.k}>
                  <div className="font-mono text-xs text-primary/80 mb-4">{s.k}</div>
                  <h3 className="font-display text-2xl md:text-3xl tracking-tight mb-3">{s.t}</h3>
                  <p className="text-muted-foreground leading-relaxed">{s.b}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      <CTASection
        title={<>Reserve capacity on the <em className="italic text-primary/90">next</em> generation.</>}
        body="H200 and B200 pods commissioning through 2026. Reserved allocations and priority interconnects available."
        primaryLabel="Request capacity"
      />
    </>
  );
}
