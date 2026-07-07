import {
  Globe,
  Smartphone,
  Bot,
  Mails,
  Palette,
  LayoutDashboard,
} from "lucide-react";
import { Reveal } from "@/components/Reveal";

const services = [
  {
    icon: Globe,
    title: "Website Development",
    desc: "Beautiful websites built for speed, SEO and conversions.",
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    desc: "Cross-platform apps with modern UX.",
  },
  {
    icon: Bot,
    title: "AI Automation",
    desc: "AI workflows that save time and money.",
  },
  {
    icon: Mails,
    title: "CRM & Email Marketing",
    desc: "Customer journeys, automations and lead management.",
  },
  {
    icon: Palette,
    title: "Brand Identity",
    desc: "Logos, design systems and digital branding.",
  },
  {
    icon: LayoutDashboard,
    title: "UI/UX Design",
    desc: "Modern user experiences people enjoy using.",
  },
];

export function Services() {
  return (
    <section id="services" className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
            Services
          </p>
          <h2 className="mt-4 text-3xl md:text-5xl">
            Everything you need to launch and grow.
          </h2>
          <p className="mt-4 text-muted-foreground">
            One studio for design, engineering and AI — shipping in weeks, not
            quarters.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 60}>
              <article className="group h-full rounded-2xl border border-border bg-card p-8 transition-all duration-300 hover:-translate-y-1 hover:border-foreground/30 hover:shadow-[var(--shadow-lift)]">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-border bg-background text-foreground transition-colors group-hover:bg-accent group-hover:text-accent-foreground group-hover:border-accent">
                  <s.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-6 text-xl">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {s.desc}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
