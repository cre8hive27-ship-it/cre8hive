import { Compass, PencilRuler, Code2, Rocket } from "lucide-react";
import { Reveal } from "@/components/Reveal";

const steps = [
  { icon: Compass, title: "Discover", desc: "Deep dive into your goals, audience and constraints." },
  { icon: PencilRuler, title: "Design", desc: "Craft user flows, wireframes and pixel-perfect UI." },
  { icon: Code2, title: "Develop", desc: "Engineer fast, scalable and future-ready products." },
  { icon: Rocket, title: "Launch", desc: "Ship, measure and iterate with data-informed care." },
];

export function Process() {
  return (
    <section id="process" className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
            Our Process
          </p>
          <h2 className="mt-4 text-3xl md:text-5xl">
            A calm, focused way of building.
          </h2>
        </Reveal>

        <div className="relative mt-16 grid gap-8 md:grid-cols-4">
          <div className="pointer-events-none absolute left-0 right-0 top-6 hidden h-px bg-border md:block" />
          {steps.map((s, i) => (
            <Reveal key={s.title} delay={i * 80}>
              <div className="relative">
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full border border-border bg-background text-foreground">
                  <s.icon className="h-5 w-5" />
                </div>
                <p className="text-xs font-medium text-muted-foreground">
                  0{i + 1}
                </p>
                <h3 className="mt-1 text-xl">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
