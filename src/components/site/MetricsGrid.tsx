import { metrics } from "@/data/site";
import { Reveal } from "./Reveal";
import { motion, useInView, useMotionValue, useTransform, animate } from "motion/react";
import { useEffect, useRef } from "react";

function AnimatedNumber({ value }: { value: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const mv = useMotionValue(0);
  const num = parseFloat(value);
  const decimals = (value.split(".")[1] || "").length;
  const display = useTransform(mv, (v) => v.toFixed(decimals));

  useEffect(() => {
    if (inView && !Number.isNaN(num)) {
      const controls = animate(mv, num, { duration: 1.8, ease: [0.22, 1, 0.36, 1] });
      return controls.stop;
    }
  }, [inView, num, mv]);

  if (Number.isNaN(num)) return <span ref={ref}>{value}</span>;
  return (
    <span ref={ref}>
      <motion.span>{display}</motion.span>
    </span>
  );
}

type Metric = { value: string; suffix?: string; label: string };

export function MetricsGrid({
  data = metrics as readonly Metric[],
  columns = 3,
}: {
  data?: readonly Metric[];
  columns?: 2 | 3 | 4;
}) {
  const grid =
    columns === 4
      ? "md:grid-cols-2 lg:grid-cols-4"
      : columns === 2
      ? "md:grid-cols-2"
      : "md:grid-cols-3";

  return (
    <div className="container-x">
      <div className={`grid grid-cols-1 ${grid} gap-px bg-hairline border border-hairline rounded-2xl overflow-hidden`}>
        {data.map((m, i) => (
          <Reveal
            key={m.label}
            delay={i * 0.05}
            className="bg-background p-8 md:p-12 flex flex-col gap-3"
          >
            <div className="font-display text-5xl md:text-6xl tracking-[-0.04em] text-foreground">
              <AnimatedNumber value={m.value} />
              {"suffix" in m && m.suffix && (
                <span className="text-primary text-3xl md:text-4xl ml-1">{m.suffix}</span>
              )}
            </div>
            <div className="eyebrow">{m.label}</div>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
