import { Star } from "lucide-react";
import { Reveal } from "@/components/Reveal";

const items = [
  {
    quote:
      "Cre8Hive shipped our MVP in 6 weeks — cleaner and faster than any team we've worked with. It just works.",
    name: "Aarav Mehta",
    role: "Founder, Northwind",
    initials: "AM",
  },
  {
    quote:
      "The team turned our messy processes into elegant AI workflows. We saved 20+ hours a week within a month.",
    name: "Sofia García",
    role: "COO, Lascome",
    initials: "SG",
  },
  {
    quote:
      "From brand to product to launch — everything felt considered. Our conversions doubled after the rebuild.",
    name: "James Carter",
    role: "CEO, Muni Finance",
    initials: "JC",
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
            Testimonials
          </p>
          <h2 className="mt-4 text-3xl md:text-5xl">
            Loved by founders and teams.
          </h2>
        </Reveal>
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {items.map((t, i) => (
            <Reveal key={t.name} delay={i * 80}>
              <figure className="flex h-full flex-col rounded-2xl border border-border bg-card p-8">
                <div className="flex gap-0.5 text-accent">
                  {Array.from({ length: 5 }).map((_, k) => (
                    <Star key={k} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <blockquote className="mt-5 flex-1 text-base leading-relaxed text-foreground">
                  "{t.quote}"
                </blockquote>
                <figcaption className="mt-8 flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-foreground text-sm font-semibold text-background">
                    {t.initials}
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-foreground">{t.name}</p>
                    <p className="text-xs text-muted-foreground">{t.role}</p>
                  </div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
