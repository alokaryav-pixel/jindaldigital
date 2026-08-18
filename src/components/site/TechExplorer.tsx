import { useState } from "react";
import { Reveal } from "./Reveal";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "motion/react";

export interface ExplorerItem {
  id: string;
  name: string;
  body: string;
  detail?: string;
}

export function TechExplorer({
  items,
  eyebrow,
}: {
  items: readonly ExplorerItem[];
  eyebrow?: string;
}) {
  const [active, setActive] = useState(items[0].id);
  const item = items.find((x) => x.id === active) ?? items[0];

  return (
    <div className="container-x">
      <div className="grid md:grid-cols-[minmax(0,1fr)_minmax(0,1.4fr)] gap-8 md:gap-20 items-start">
        <div>
          {eyebrow && (
            <div className="flex items-center gap-3 mb-8">
              <span className="h-px w-8 bg-primary/60" />
              <span className="eyebrow text-primary/80">{eyebrow}</span>
            </div>
          )}
          <ul className="border-t border-hairline">
            {items.map((it) => {
              const isActive = it.id === active;
              return (
                <li key={it.id}>
                  <button
                    onClick={() => setActive(it.id)}
                    className={cn(
                      "group w-full text-left py-5 border-b border-hairline transition-colors relative",
                      isActive ? "text-foreground" : "text-muted-foreground hover:text-foreground",
                    )}
                  >
                    <div className="flex items-center justify-between gap-4">
                      <span className="font-display text-xl md:text-2xl tracking-tight">
                        {it.name}
                      </span>
                      <span
                        className={cn(
                          "font-mono text-xs tabular-nums transition-all",
                          isActive ? "text-primary" : "text-muted-foreground/60",
                        )}
                      >
                        {String(items.indexOf(it) + 1).padStart(2, "0")}
                      </span>
                    </div>
                    {isActive && (
                      <motion.span
                        layoutId="tech-explorer-underline"
                        className="absolute left-0 right-0 -bottom-px h-px bg-primary"
                      />
                    )}
                  </button>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="md:sticky md:top-32">
          <Reveal>
            <div className="card-surface p-8 md:p-12 min-h-[420px] relative overflow-hidden">
              <div aria-hidden className="absolute inset-0 mesh-lines opacity-30" />
              <div className="relative">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <div className="eyebrow mb-6 text-primary/80">
                      {String(items.indexOf(item) + 1).padStart(2, "0")} · Module
                    </div>
                    <h3 className="font-display text-4xl md:text-5xl tracking-tight mb-6 gradient-text">
                      {item.name}
                    </h3>
                    <p className="text-lg text-foreground/90 leading-relaxed mb-6">
                      {item.body}
                    </p>
                    {item.detail && (
                      <p className="text-muted-foreground leading-relaxed">{item.detail}</p>
                    )}
                    <div className="mt-10 pt-6 border-t border-hairline flex items-center justify-between text-xs font-mono text-muted-foreground">
                      <span>Module reference</span>
                      <span className="text-primary/80">HAL-{item.id.toUpperCase()}</span>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </div>
  );
}
