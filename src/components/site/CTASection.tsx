import { Reveal } from "./Reveal";
import { CTAButton } from "./CTAButton";
import type { ReactNode } from "react";

export function CTASection({
  eyebrow = "Get in touch",
  title,
  body,
  primaryLabel = "Start a conversation",
  primaryTo = "/contact",
  secondaryLabel,
  secondaryTo,
}: {
  eyebrow?: string;
  title: ReactNode;
  body?: ReactNode;
  primaryLabel?: string;
  primaryTo?: string;
  secondaryLabel?: string;
  secondaryTo?: string;
}) {
  return (
    <section className="relative py-32 md:py-48 overflow-hidden">
      <div aria-hidden className="absolute inset-0 gradient-radial" />
      <div aria-hidden className="absolute inset-x-0 top-0 hairline-x" />
      <div className="container-x relative">
        <Reveal>
          <div className="max-w-4xl">
            <div className="flex items-center gap-3 mb-8">
              <span className="h-px w-8 bg-primary/60" />
              <span className="eyebrow text-primary/80">{eyebrow}</span>
            </div>
            <h2 className="font-display text-5xl md:text-7xl leading-[1.02] tracking-[-0.03em] text-balance gradient-text">
              {title}
            </h2>
            {body && (
              <p className="mt-8 text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
                {body}
              </p>
            )}
            <div className="mt-12 flex flex-wrap gap-4">
              <CTAButton to={primaryTo}>{primaryLabel}</CTAButton>
              {secondaryLabel && secondaryTo && (
                <CTAButton to={secondaryTo} variant="outline">
                  {secondaryLabel}
                </CTAButton>
              )}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
