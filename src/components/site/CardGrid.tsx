import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "./Reveal";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export interface CardItem {
  name: string;
  body: string;
  tag?: string;
  href?: string;
}

export function CardGrid({
  items,
  columns = 3,
  numbered = true,
}: {
  items: readonly CardItem[];
  columns?: 2 | 3 | 4;
  numbered?: boolean;
}) {
  const grid =
    columns === 4
      ? "md:grid-cols-2 lg:grid-cols-4"
      : columns === 2
      ? "md:grid-cols-2"
      : "md:grid-cols-2 lg:grid-cols-3";

  return (
    <div className="container-x">
      <div className={cn("grid grid-cols-1 gap-6", grid)}>
        {items.map((item, i) => (
          <Reveal key={item.name} delay={i * 0.04}>
            <FeatureCard item={item} index={numbered ? i : undefined} />
          </Reveal>
        ))}
      </div>
    </div>
  );
}

function FeatureCard({ item, index }: { item: CardItem; index?: number }) {
  const body: ReactNode = (
    <div className="card-surface h-full p-8 md:p-10 flex flex-col gap-6 group transition-all duration-500 hover:border-primary/40 relative overflow-hidden">
      <div
        aria-hidden
        className="absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none rounded-2xl"
        style={{
          background:
            "radial-gradient(400px circle at var(--x,50%) var(--y,50%), color-mix(in oklab, var(--primary) 8%, transparent), transparent 60%)",
        }}
      />
      <div className="flex items-start justify-between relative">
        {index !== undefined && (
          <span className="font-mono text-xs text-muted-foreground">
            {String(index + 1).padStart(2, "0")}
          </span>
        )}
        {item.tag && (
          <span className="eyebrow text-primary/80 text-[0.65rem]">{item.tag}</span>
        )}
      </div>
      <div className="flex-1 relative">
        <h3 className="font-display text-2xl md:text-3xl tracking-tight mb-4 text-foreground">
          {item.name}
        </h3>
        <p className="text-muted-foreground leading-relaxed">{item.body}</p>
      </div>
      {item.href && (
        <div className="flex items-center gap-2 text-sm text-primary/90 group-hover:gap-3 transition-all relative">
          <span>Explore</span>
          <ArrowUpRight className="h-4 w-4" />
        </div>
      )}
    </div>
  );

  if (item.href) {
    return (
      <Link
        to={item.href}
        className="block h-full"
        onMouseMove={(e) => {
          const el = e.currentTarget.querySelector("[aria-hidden]") as HTMLElement | null;
          if (!el) return;
          const r = e.currentTarget.getBoundingClientRect();
          el.style.setProperty("--x", `${e.clientX - r.left}px`);
          el.style.setProperty("--y", `${e.clientY - r.top}px`);
        }}
      >
        {body}
      </Link>
    );
  }
  return body;
}
