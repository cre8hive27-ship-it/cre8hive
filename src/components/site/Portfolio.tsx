import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import p1 from "@/assets/portfolio-1.jpg";
import p2 from "@/assets/portfolio-2.jpg";
import p3 from "@/assets/portfolio-3.jpg";
import p4 from "@/assets/portfolio-4.jpg";
import p5 from "@/assets/portfolio-5.jpg";
import p6 from "@/assets/portfolio-6.jpg";

const projects = [
  {
    img: p1,
    category: "SaaS Dashboard",
    title: "Northwind Analytics",
    desc: "A real-time analytics platform for growth teams.",
  },
  {
    img: p2,
    category: "E-Commerce",
    title: "Lascome Fashion",
    desc: "Editorial-grade storefront with conversion-first UX.",
  },
  {
    img: p3,
    category: "Mobile App",
    title: "Muni Finance",
    desc: "A minimal, fast personal finance app for iOS & Android.",
  },
  {
    img: p4,
    category: "AI Automation",
    title: "Asalon Workflows",
    desc: "Visual AI workflow builder saving 20+ hours a week.",
  },
  {
    img: p5,
    category: "Website",
    title: "Marta Filly Kitchen",
    desc: "Story-driven restaurant site with reservations.",
  },
  {
    img: p6,
    category: "Branding",
    title: "The Naide Identity",
    desc: "A complete brand system for a luxury studio.",
  },
];

export function Portfolio() {
  return (
    <section id="portfolio" className="bg-muted/40 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
              Selected Work
            </p>
            <h2 className="mt-4 text-3xl md:text-5xl">
              Products we've helped ship.
            </h2>
          </div>
          <p className="max-w-md text-muted-foreground">
            A snapshot of recent work across web, mobile, AI and brand.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <Reveal key={p.title} delay={i * 50}>
              <article className="group cursor-pointer overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-lift)]">
                <div className="aspect-[4/3] overflow-hidden bg-muted">
                  <img
                    src={p.img}
                    alt={p.title}
                    loading="lazy"
                    width={1200}
                    height={900}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                  />
                </div>
                <div className="flex items-start justify-between gap-4 p-6">
                  <div>
                    <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                      {p.category}
                    </p>
                    <h3 className="mt-2 text-lg">{p.title}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {p.desc}
                    </p>
                  </div>
                  <span className="mt-1 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-border text-foreground transition-colors group-hover:bg-foreground group-hover:text-background">
                    <ArrowUpRight className="h-4 w-4" />
                  </span>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
