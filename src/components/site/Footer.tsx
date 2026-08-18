import { Link } from "@tanstack/react-router";
import { site } from "@/data/site";
import jdiMark from "@/assets/jdi-logo.png";

const columns = [
  {
    title: "Platform",
    links: [
      { label: "Solutions", to: "/solutions" },
      { label: "Technology", to: "/technology" },
      { label: "AI Infrastructure", to: "/ai-infrastructure" },
      { label: "Industries", to: "/industries" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", to: "/about" },
      { label: "Sustainability", to: "/sustainability" },
      { label: "Careers", to: "/careers" },
      { label: "Insights", to: "/insights" },
    ],
  },
  {
    title: "Contact",
    links: [
      { label: "General enquiries", to: "/contact" },
      { label: "Capacity requests", to: "/contact" },
      { label: "Press", to: "/contact" },
      { label: "Investors", to: "/contact" },
    ],
  },
] as const;

export function Footer() {
  return (
    <footer className="relative border-t border-hairline mt-24 pt-20 pb-10">
      <div className="container-x">
        <div className="grid md:grid-cols-[1.4fr_1fr_1fr_1fr] gap-12 md:gap-16">
          <div>
            <Link to="/" className="flex items-center gap-3 mb-4">
              <img src={jdiMark} alt="" aria-hidden className="h-16 w-auto" />
              <span className="font-display text-lg tracking-tight">{site.brand.name}</span>
            </Link>
            <div className="eyebrow mb-6">{site.brand.fullName}</div>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">{site.brand.tagline}</p>
            </div>

          {columns.map((col) => (
            <div key={col.title}>
              <div className="eyebrow mb-6">{col.title}</div>
              <ul className="space-y-3">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <Link to={l.to} className="text-sm text-foreground/80 hover:text-primary transition-colors">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Signature wordmark */}
        <div className="mt-24 md:mt-32 select-none">
          <div className="font-display text-[clamp(4rem,18vw,16rem)] leading-none tracking-[-0.06em] text-foreground/[0.06] whitespace-nowrap overflow-hidden">
            {site.brand.name.toUpperCase()}
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-hairline flex flex-wrap items-center justify-between gap-4 text-xs text-muted-foreground font-mono">
          <div>
            © {new Date().getFullYear()} {site.brand.name} Jindal Digital Infrastructure Pvt. Ltd.
          </div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-foreground transition-colors">
              Privacy
            </a>
            <a href="#" className="hover:text-foreground transition-colors">
              Terms
            </a>
            <a href="#" className="hover:text-foreground transition-colors">
              Security
            </a>
            <span>v01 · Framework</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
