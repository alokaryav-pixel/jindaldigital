import type { ReactNode } from "react";
import { Reveal } from "./Reveal";
import { cn } from "@/lib/utils";

export function Split({
  eyebrow,
  title,
  body,
  aside,
  reverse = false,
}: {
  eyebrow?: string;
  title: ReactNode;
  body: ReactNode;
  aside: ReactNode;
  reverse?: boolean;
}) {
  return (
    <div className="container-x">
      <div className="grid md:grid-cols-2 gap-12 md:gap-24 items-center">
        <Reveal className={cn(reverse && "md:order-2")}>
          {eyebrow && (
            <div className="flex items-center gap-3 mb-6">
              <span className="h-px w-8 bg-primary/60" />
              <span className="eyebrow text-primary/80">{eyebrow}</span>
            </div>
          )}
          <h2 className="font-display text-4xl md:text-5xl leading-[1.05] tracking-tight mb-6 gradient-text text-balance">
            {title}
          </h2>
          <div className="text-muted-foreground text-lg leading-relaxed space-y-4">{body}</div>
        </Reveal>
        <Reveal delay={0.1} className={cn(reverse && "md:order-1")}>
          {aside}
        </Reveal>
      </div>
    </div>
  );
}
