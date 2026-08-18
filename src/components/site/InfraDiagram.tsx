import { motion } from "motion/react";

/**
 * Interactive-ish infrastructure diagram — pure SVG, no external deps.
 * Represents Power → Compute → Fabric → AI Platform flow.
 */
export function InfraDiagram() {
  const nodes = [
    { id: "power", label: "Power", cx: 90, cy: 200, sub: "220 MW" },
    { id: "cool", label: "Cooling", cx: 90, cy: 320, sub: "PUE 1.18" },
    { id: "rack", label: "GPU Rack", cx: 320, cy: 260, sub: "60–130 kW" },
    { id: "fabric", label: "Fabric", cx: 550, cy: 160, sub: "400G · IB" },
    { id: "store", label: "Storage", cx: 550, cy: 360, sub: "TB/s" },
    { id: "platform", label: "AI Platform", cx: 780, cy: 260, sub: "Tokens/s" },
  ];
  const links: Array<[string, string]> = [
    ["power", "rack"],
    ["cool", "rack"],
    ["rack", "fabric"],
    ["rack", "store"],
    ["fabric", "platform"],
    ["store", "platform"],
  ];
  const map = Object.fromEntries(nodes.map((n) => [n.id, n]));

  return (
    <div className="card-surface p-6 md:p-10 relative overflow-hidden">
      <div aria-hidden className="absolute inset-0 mesh-lines opacity-40" />
      <div className="relative">
        <div className="flex items-center justify-between mb-6">
          <div className="eyebrow text-primary/80">Reference architecture</div>
          <div className="font-mono text-[0.65rem] text-muted-foreground">HAL-REF-01</div>
        </div>
        <svg viewBox="0 0 880 480" className="w-full h-auto">
          <defs>
            <linearGradient id="line" x1="0" x2="1">
              <stop offset="0" stopColor="var(--primary)" stopOpacity="0.1" />
              <stop offset="0.5" stopColor="var(--primary)" stopOpacity="0.7" />
              <stop offset="1" stopColor="var(--primary)" stopOpacity="0.1" />
            </linearGradient>
            <filter id="glow">
              <feGaussianBlur stdDeviation="3" />
            </filter>
          </defs>

          {links.map(([a, b], i) => {
            const A = map[a];
            const B = map[b];
            return (
              <g key={`${a}-${b}`}>
                <line
                  x1={A.cx}
                  y1={A.cy}
                  x2={B.cx}
                  y2={B.cy}
                  stroke="var(--hairline)"
                  strokeWidth="1"
                />
                <motion.line
                  x1={A.cx}
                  y1={A.cy}
                  x2={B.cx}
                  y2={B.cy}
                  stroke="url(#line)"
                  strokeWidth="1.5"
                  strokeDasharray="6 8"
                  initial={{ strokeDashoffset: 0 }}
                  animate={{ strokeDashoffset: -140 }}
                  transition={{
                    duration: 3 + i * 0.3,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />
              </g>
            );
          })}

          {nodes.map((n, i) => (
            <motion.g
              key={n.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1 + i * 0.1, duration: 0.6 }}
            >
              <circle
                cx={n.cx}
                cy={n.cy}
                r="42"
                fill="var(--surface)"
                stroke="var(--primary)"
                strokeOpacity="0.4"
              />
              <circle
                cx={n.cx}
                cy={n.cy}
                r="42"
                fill="none"
                stroke="var(--primary)"
                strokeOpacity="0.2"
                filter="url(#glow)"
              />
              <text
                x={n.cx}
                y={n.cy - 4}
                textAnchor="middle"
                fill="var(--foreground)"
                fontSize="13"
                fontFamily="var(--font-sans)"
                fontWeight="500"
              >
                {n.label}
              </text>
              <text
                x={n.cx}
                y={n.cy + 12}
                textAnchor="middle"
                fill="var(--muted-foreground)"
                fontSize="10"
                fontFamily="var(--font-mono)"
              >
                {n.sub}
              </text>
            </motion.g>
          ))}
        </svg>
      </div>
    </div>
  );
}
