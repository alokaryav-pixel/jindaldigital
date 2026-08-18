import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Section } from "@/components/site/Section";
import { TechExplorer } from "@/components/site/TechExplorer";
import { CTASection } from "@/components/site/CTASection";
import { MetricsGrid } from "@/components/site/MetricsGrid";
import { technology } from "@/data/site";

export const Route = createFileRoute("/technology")({
  head: () => ({
    meta: [
      { title: "Technology — JDI" },
      { name: "description", content: "Power, cooling, network, security, operations, automation, and what comes next." },
      { property: "og:title", content: "Technology — JDI" },
      { property: "og:description", content: "The seven disciplines of critical facilities engineering." },
    ],
  }),
  component: Technology,
});

function Technology() {
  return (
    <>
      <PageHero
        eyebrow="Technology"
        title={<>Seven disciplines. <em className="italic text-primary/90">One</em> stack.</>}
        kicker="Every claim on this page is anchored to a design document, a sensor stream, or a signed SLA."
      />

      <Section className="border-t border-hairline">
        <TechExplorer items={technology} eyebrow="Explore" />
      </Section>

      <Section className="border-t border-hairline">
        <MetricsGrid columns={3} />
      </Section>

      <CTASection title="Request a design review." />
    </>
  );
}
