import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Reveal } from "./Reveal";

export function Section({
  children,
  className,
  id,
  bleed = false,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
  bleed?: boolean;
}) {
  return (
    <section
      id={id}
      className={cn(
        "relative",
        !bleed && "py-28 md:py-40",
        className,
      )}
    >
      {children}
    </section>
  );
}

export function SectionHeader({
  eyebrow,
  title,
  kicker,
  align = "left",
  className,
}: {
  eyebrow?: string;
  title: ReactNode;
  kicker?: ReactNode;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <Reveal className={cn("container-x", className)}>
      <div
        className={cn(
          "flex flex-col gap-6 max-w-3xl",
          align === "center" && "mx-auto text-center items-center",
        )}
      >
        {eyebrow && (
          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-primary/60" />
            <span className="eyebrow text-primary/80">{eyebrow}</span>
          </div>
        )}
        <h2 className="text-4xl md:text-6xl leading-[1.02] text-balance gradient-text">
          {title}
        </h2>
        {kicker && (
          <p className="text-lg md:text-xl text-muted-foreground text-balance max-w-2xl leading-relaxed">
            {kicker}
          </p>
        )}
      </div>
    </Reveal>
  );
}
