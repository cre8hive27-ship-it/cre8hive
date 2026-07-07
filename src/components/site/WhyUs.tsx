import { Zap, Sparkles, Layers } from "lucide-react";
import { Reveal } from "@/components/Reveal";

const items = [
  { icon: Zap, title: "Fast Delivery", desc: "Ship in weeks with a focused, senior team — no bloated agency timelines." },
  { icon: Sparkles, title: "Premium Quality", desc: "Every pixel, interaction and line of code held to a high craft bar." },
  { icon: Layers, title: "Future Ready Solutions", desc: "Built on modern stacks and AI-native workflows that scale with you." },
];

export function WhyUs() {
  return (
    <section className="border-y border-border bg-muted/40 py-24">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
            Why Cre8Hive
          </p>
          <h2 className="mt-4 text-3xl md:text-5xl">
            A partner, not just a vendor.
          </h2>
        </Reveal>
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {items.map((it, i) => (
            <Reveal key={it.title} delay={i * 80}>
              <div className="h-full rounded-2xl border border-border bg-card p-8 text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl border border-border bg-background text-foreground">
                  <it.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-6 text-xl">{it.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground">{it.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
