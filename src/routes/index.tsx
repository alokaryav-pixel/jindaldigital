import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/site/Hero";
import { Section, SectionHeader } from "@/components/site/Section";
import { MetricsGrid } from "@/components/site/MetricsGrid";
import { Timeline } from "@/components/site/Timeline";
import { CardGrid } from "@/components/site/CardGrid";
import { TechExplorer } from "@/components/site/TechExplorer";
import { Split } from "@/components/site/Split";
import { InfraDiagram } from "@/components/site/InfraDiagram";
import { CTASection } from "@/components/site/CTASection";
import { solutions, technology, industries, insights, principles } from "@/data/site";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <>
      <Hero />

      {/* Why AI Infrastructure */}
      <Section>
        <SectionHeader
          eyebrow="Why AI infrastructure"
          title={
            <>
              The world is becoming <em className="italic text-primary/90">AI-first</em>.
              <br />
              AI needs a physical foundation.
            </>
          }
          kicker="Every model, every token, every inference lands on concrete, copper and coolant. The companies that own that layer own the next decade."
        />
        <div className="mt-20">
          <MetricsGrid columns={3} />
        </div>
      </Section>

      {/* Our Vision — timeline */}
      <Section id="vision" className="border-t border-hairline">
        <SectionHeader
          eyebrow="Our trajectory"
          title="A New Chapter in What We Build."
          kicker="One continuous engineering discipline, executed across three phases."
        />
        <div className="mt-24">
          <Timeline />
        </div>
      </Section>

      {/* Infrastructure Platform */}
      <Section className="border-t border-hairline">
        <Split
          eyebrow="Platform"
          title={<>One platform. Power in, tokens out.</>}
          body={
            <>
              <p>
                JDI is a single, coherent stack — utility, thermal, network, compute and
                control — engineered together and operated as one.
              </p>
              <p>
                Every layer is instrumented. Every layer is programmable. Every layer is
                accountable to the same SLA.
              </p>
            </>
          }
          aside={<InfraDiagram />}
        />
      </Section>

      {/* Solutions overview */}
      <Section className="border-t border-hairline">
        <SectionHeader
          eyebrow="Solutions"
          title="Meet workloads where they are."
          kicker="Colocation to sovereign AI — a portfolio designed to scale with your ambition."
        />
        <div className="mt-20">
          <CardGrid
            items={solutions.slice(0, 6).map((s) => ({
              name: s.name,
              body: s.body,
              tag: s.tag,
              href: "/solutions",
            }))}
            columns={3}
          />
        </div>
      </Section>

      {/* Technology showcase */}
      <Section className="border-t border-hairline">
        <SectionHeader
          eyebrow="Technology"
          title="The seven disciplines."
          kicker="Facility engineering isn't one thing. It's seven, in tension, in harmony."
        />
        <div className="mt-20">
          <TechExplorer items={technology} eyebrow="Explore the stack" />
        </div>
      </Section>

      {/* Principles */}
      <Section className="border-t border-hairline">
        <SectionHeader eyebrow="Operating principles" title="What we believe." />
        <div className="mt-20 container-x">
          <div className="grid md:grid-cols-2 gap-px bg-hairline border border-hairline rounded-2xl overflow-hidden">
            {principles.map((p) => (
              <div key={p.title} className="bg-background p-10 md:p-12">
                <h3 className="font-display text-2xl md:text-3xl tracking-tight mb-4 gradient-text">
                  {p.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Industries */}
      <Section className="border-t border-hairline">
        <SectionHeader eyebrow="Industries" title="Workloads we serve." />
        <div className="mt-20">
          <CardGrid
            items={industries.map((i) => ({ name: i.name, body: i.body }))}
            columns={3}
            numbered={false}
          />
        </div>
      </Section>

      {/* Insights */}
      <Section className="border-t border-hairline">
        <SectionHeader
          eyebrow="Insights"
          title="Field notes from the build."
          kicker="What we've learned commissioning halls, chasing PUE, and taking delivery of the next generation of silicon."
        />
        <div className="mt-20 container-x">
          <div className="divide-y divide-hairline border-y border-hairline">
            {insights.map((p) => (
              <a
                key={p.title}
                href="/insights"
                className="group grid md:grid-cols-[140px_120px_1fr_auto] gap-6 md:gap-10 py-8 items-baseline hover:bg-surface/40 transition-colors px-4 -mx-4 rounded-lg"
              >
                <div className="eyebrow text-primary/70">{p.kind}</div>
                <div className="font-mono text-xs text-muted-foreground">{p.date}</div>
                <div>
                  <div className="font-display text-2xl md:text-3xl tracking-tight mb-2 group-hover:text-primary transition-colors">
                    {p.title}
                  </div>
                  <div className="text-muted-foreground max-w-2xl leading-relaxed">
                    {p.excerpt}
                  </div>
                </div>
                <div className="hidden md:block text-primary/70 group-hover:text-primary transition-colors">
                  →
                </div>
              </a>
            ))}
          </div>
        </div>
      </Section>

      {/* CTA */}
      <CTASection
        title={
          <>
            Build with the team building the <em className="italic text-primary/90">next</em>{" "}
            layer.
          </>
        }
        body="Whether you need a rack, a hall, or a hundred megawatts — start with a conversation."
        secondaryLabel="See open roles"
        secondaryTo="/careers"
      />
    </>
  );
}
