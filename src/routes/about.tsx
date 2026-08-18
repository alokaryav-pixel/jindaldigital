import { createFileRoute } from "@tanstack/react-router";
import { Section, SectionHeader } from "@/components/site/Section";
import { Reveal } from "@/components/site/Reveal";
import { CTASection } from "@/components/site/CTASection";
import { Timeline } from "@/components/site/Timeline";
import { principles, leadership } from "@/data/site";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — JDI" },
      { name: "description", content: "JDI is an infrastructure company building the physical foundation for AI." },
      { property: "og:title", content: "About — JDI" },
      { property: "og:description", content: "Engineering-first. Density-first. Sovereign by design." },
    ],
  }),
  component: About,
});

function About() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title={
          <>
            An infrastructure company for the <em className="italic text-primary/90">next</em> compute era.
          </>
        }
        kicker="We design, build, and operate the physical foundation for the world's most demanding workloads — with the discipline of a utility and the ambition of a platform."
      />

      <Section className="border-t border-hairline">
        <div className="container-x grid md:grid-cols-2 gap-16">
          <Reveal>
            <div className="eyebrow mb-4">Thesis</div>
            <h2 className="font-display text-4xl md:text-5xl leading-tight tracking-tight mb-6 gradient-text">
              Compute is the new critical infrastructure.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed pt-4">
              <p>
                Every generation of technology has depended on a new physical layer — railways, grids, fibre, the cloud.
                Intelligence is next, and it needs a foundation that doesn't exist yet at the scale required.
              </p>
              <p>
                JDI exists to build that foundation — starting with enterprise-grade data centers, and evolving toward
                the AI cloud that India, and the world, will run on.
              </p>
            </div>
          </Reveal>
        </div>
      </Section>

      <Section className="border-t border-hairline">
        <SectionHeader eyebrow="Trajectory" title="Journey." />
        <div className="mt-24">
          <Timeline />
        </div>
      </Section>

      <Section className="border-t border-hairline">
        <SectionHeader eyebrow="Principles" title="How we operate." />
        <div className="mt-20 container-x grid md:grid-cols-2 gap-px bg-hairline border border-hairline rounded-2xl overflow-hidden">
          {principles.map((p) => (
            <div key={p.title} className="bg-background p-10 md:p-14">
              <h3 className="font-display text-2xl md:text-3xl tracking-tight mb-4 gradient-text">{p.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{p.body}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section className="border-t border-hairline">
        <SectionHeader
          eyebrow="Leadership"
          title="The team behind the build."
          kicker="Placeholder profiles — names, bios and portraits to be finalized."
        />
        <div className="mt-20 container-x grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {leadership.map((person, i) => (
            <Reveal key={person.role} delay={i * 0.04}>
              <div className="card-surface h-full p-8 flex flex-col gap-5 transition-colors duration-500 hover:border-primary/40">
                <div className="flex items-center gap-4">
                  <div className="h-14 w-14 rounded-full border border-hairline bg-secondary/40 flex items-center justify-center font-mono text-sm text-primary/80">
                    {person.initials}
                  </div>
                  <div>
                    <div className="font-display text-xl tracking-tight text-foreground">{person.name}</div>
                    <div className="eyebrow text-primary/80 text-[0.65rem] mt-1">{person.role}</div>
                  </div>
                </div>
                <p className="text-muted-foreground leading-relaxed text-sm">{person.focus}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <CTASection title="Partner with the team building the foundation." />
    </>
  );
}

function PageHero({ eyebrow, title, kicker }: { eyebrow: string; title: React.ReactNode; kicker: string }) {
  return (
    <section className="relative pt-40 md:pt-52 pb-24 md:pb-32 overflow-hidden">
      <div aria-hidden className="absolute inset-0 gradient-radial" />
      <div aria-hidden className="absolute inset-0 mesh-lines opacity-30" />
      <div className="container-x relative">
        <Reveal>
          <div className="flex items-center gap-3 mb-8">
            <span className="h-px w-8 bg-primary/60" />
            <span className="eyebrow text-primary/80">{eyebrow}</span>
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <h1 className="font-display text-[clamp(2.5rem,7vw,7rem)] leading-[1] tracking-[-0.04em] max-w-5xl text-balance gradient-text">
            {title}
          </h1>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="mt-10 max-w-2xl text-lg md:text-xl text-muted-foreground leading-relaxed">{kicker}</p>
        </Reveal>
      </div>
    </section>
  );
}
