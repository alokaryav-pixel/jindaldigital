import { evolution } from "@/data/site";
import { Reveal } from "./Reveal";

export function Timeline({ data = evolution }: { data?: typeof evolution }) {
  return (
    <div className="container-x">
      <div className="relative">
        {/* Vertical rule */}
        <div
          aria-hidden
          className="absolute left-[7px] md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-hairline to-transparent"
        />
        <ol className="space-y-16 md:space-y-24">
          {data.map((step, i) => {
            const right = i % 2 === 1;
            return (
              <Reveal as="li" key={step.year} delay={i * 0.05}>
                <div className={`grid md:grid-cols-2 gap-8 md:gap-16 items-start relative`}>
                  <div
                    aria-hidden
                    className="absolute left-0 md:left-1/2 top-2 -translate-x-1/2 h-4 w-4 rounded-full bg-background border border-primary/60 flex items-center justify-center"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse-slow" />
                  </div>
                  <div className={`${right ? "md:order-2 md:pl-16" : "md:pr-16 md:text-right"} pl-8 md:pl-0`}>
                  <div className="eyebrow mb-3 text-base md:text-lg tracking-[0.12em]">{step.year} · {step.phase} </div>
                    <h3 className="font-display text-3xl md:text-4xl tracking-tight mb-4 gradient-text">
                      {step.title}
                    </h3>
                  </div>
                  <div className={`${right ? "md:order-1 md:text-right md:pr-16" : "md:pl-16"} pl-8 md:pl-0`}>
                    <p className="text-muted-foreground leading-relaxed max-w-md md:inline-block">
                      {step.body}
                    </p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </ol>
      </div>
    </div>
  );
}
