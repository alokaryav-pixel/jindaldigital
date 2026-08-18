import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import type { ComponentProps, ReactNode } from "react";

type Variant = "primary" | "ghost" | "outline";

export function CTAButton({
  children,
  to,
  href,
  variant = "primary",
  className,
  ...rest
}: {
  children: ReactNode;
  to?: string;
  href?: string;
  variant?: Variant;
  className?: string;
} & Omit<ComponentProps<"a">, "href">) {
  const base =
    "group inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium tracking-tight transition-all duration-300";
  const styles = {
    primary:
      "bg-primary text-primary-foreground hover:bg-primary/90 shadow-[0_10px_40px_-10px_var(--glow)] hover:shadow-[0_18px_60px_-10px_var(--glow)]",
    ghost:
      "text-foreground/90 hover:text-primary",
    outline:
      "border border-hairline text-foreground/90 hover:border-primary/60 hover:text-primary hover:bg-primary/5",
  }[variant];

  const content = (
    <>
      <span>{children}</span>
      <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
    </>
  );

  if (to) {
    return (
      <Link to={to} className={cn(base, styles, className)}>
        {content}
      </Link>
    );
  }
  return (
    <a href={href} className={cn(base, styles, className)} {...rest}>
      {content}
    </a>
  );
}
