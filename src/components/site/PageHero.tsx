import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

export function PageHero({
  eyebrow,
  title,
  kicker,
}: {
  eyebrow: string;
  title: ReactNode;
  kicker?: string;
}) {
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
        {kicker && (
          <Reveal delay={0.2}>
            <p className="mt-10 max-w-2xl text-lg md:text-xl text-muted-foreground leading-relaxed">
              {kicker}
            </p>
          </Reveal>
        )}
      </div>
    </section>
  );
}
