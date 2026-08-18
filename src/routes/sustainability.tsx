import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Section, SectionHeader } from "@/components/site/Section";
import { MetricsGrid } from "@/components/site/MetricsGrid";
import { CTASection } from "@/components/site/CTASection";
import { Split } from "@/components/site/Split";
import { InfraDiagram } from "@/components/site/InfraDiagram";

const susMetrics = [
  { value: "1.3", label: "Target PUE across new-build" },
  { value: "92", suffix: "%", label: "Target Free-cooling hours per year" },
  { value: "100", suffix: "%", label: "Target Renewable-matched by 2028" },
  { value: "~50 kW/rack", label: "Target Density" },
] as const;

export const Route = createFileRoute("/sustainability")({
  head: () => ({
    meta: [
      { title: "Sustainability — JDI" },
      { name: "description", content: "Density, efficiency, and renewables — engineered into every facility from day one." },
      { property: "og:title", content: "Sustainability — JDI" },
      { property: "og:description", content: "Lower carbon per token." },
    ],
  }),
  component: Sustainability,
});

function Sustainability() {
  return (
    <>
      <PageHero
        eyebrow="Sustainability"
        title={<>More Compute <em className="italic text-primary/90">Less Energy</em>.</>}
        kicker="Efficiency is engineered into the facility from the beginning. Our design combines efficient power infrastructure, high-density compute, intelligent cooling and data-driven operations to reduce energy overhead while creating a scalable platform for India's digital and AI future."
      />

      <Section className="border-t border-hairline">
        <MetricsGrid data={susMetrics} columns={2} />
      </Section>

      <Section className="border-t border-hairline">
        <Split
          eyebrow="Approach"
          title={<>Density is the cleanest kilowatt.</>}
          body={
            <>
              <p>
                A watt spent moving heat is a watt not spent on compute. Higher rack density
                shortens fibre runs, reduces conversion losses, and — done properly — lowers the
                embodied carbon of every model trained on the floor.
              </p>
              <p>
                Our new-build standard is 60 kW liquid-cooled, PPA-backed renewables, and zero
                potable water in the primary cooling loop.
              </p>
            </>
          }
          aside={<InfraDiagram />}
        />
      </Section>

      <CTASection title="Read the full sustainability framework." primaryLabel="Request the report" />
    </>
  );
}
