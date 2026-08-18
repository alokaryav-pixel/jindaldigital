import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Section } from "@/components/site/Section";
import { CardGrid } from "@/components/site/CardGrid";
import { CTASection } from "@/components/site/CTASection";
import { industries } from "@/data/site";

export const Route = createFileRoute("/industries")({
  head: () => ({
    meta: [
      { title: "Industries — JDI" },
      { name: "description", content: "Financial services, healthcare, government, media, AI labs, manufacturing." },
      { property: "og:title", content: "Industries — JDI" },
      { property: "og:description", content: "Workloads with the highest bar meet the facility built for them." },
    ],
  }),
  component: Industries,
});

function Industries() {
  return (
    <>
      <PageHero
        eyebrow="Industries"
        title={<>Workloads with the <em className="italic text-primary/90">highest</em> bar.</>}
        kicker="From latency-sensitive trading to sovereign clinical AI — the facility bends to the workload, not the other way around."
      />
      <Section className="border-t border-hairline">
        <CardGrid
          items={industries.map((i) => ({ name: i.name, body: i.body }))}
          columns={3}
        />
      </Section>
      <CTASection title="Tell us about your workload." />
    </>
  );
}
