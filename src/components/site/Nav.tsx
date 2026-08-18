import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { site } from "@/data/site";
import { CTAButton } from "./CTAButton";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "motion/react";
import jdiMark from "@/assets/jdi-logo.png";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-500",
        scrolled ? "backdrop-blur-xl bg-background/70 border-b border-hairline" : "bg-transparent",
      )}
    >
      <div className="container-x flex items-center justify-between h-20">
        <Link to="/" className="flex items-center gap-3 group">
          <img
            src={jdiMark}
            alt=""
            aria-hidden
            className="h-16 w-auto transition-transform group-hover:scale-105 duration-500 drop-shadow-[0_0_12px_rgba(120,160,255,0.15)]"
          />
          <span className="font-display text-lg tracking-tight">{site.brand.name}</span>
          <span className="hidden sm:inline text-xm font-mono text-muted-foreground border-l border-hairline pl-3 ml-1">
            {site.brand.fullName}
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {site.nav.map((n) => {
            const active = pathname === n.to || pathname.startsWith(n.to + "/");
            return (
              <Link
                key={n.to}
                to={n.to}
                className={cn(
                  "text-sm transition-colors relative py-2 whitespace-nowrap shrink-0",
                  active ? "text-foreground" : "text-muted-foreground hover:text-foreground",
                )}
              >
                {n.label}
                {active && (
                  <motion.span
                    layoutId="nav-indicator"
                    className="absolute left-0 right-0 -bottom-0.5 h-px bg-primary"
                  />
                )}
              </Link>
            );
          })}
        </nav>

        <div className="hidden lg:block">
          <CTAButton to="/contact" variant="outline">
            Contact
          </CTAButton>
        </div>

        <button
          className="lg:hidden text-foreground p-2"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden border-t border-hairline bg-background/95 backdrop-blur-xl"
          >
            <nav className="container-x py-8 flex flex-col gap-1">
              {site.nav.map((n) => (
                <Link
                  key={n.to}
                  to={n.to}
                  className="py-3 text-lg font-display tracking-tight border-b border-hairline last:border-0"
                >
                  {n.label}
                </Link>
              ))}
              <div className="mt-6">
                <CTAButton to="/contact">Contact</CTAButton>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
