import { Counter } from "@/components/Counter";

const stats = [
  { value: 50, suffix: "+", label: "Projects Completed" },
  { value: 25, suffix: "+", label: "Happy Clients" },
  { value: 8, suffix: "+", label: "Digital Services" },
  { value: 99, suffix: "%", label: "Client Satisfaction" },
];

export function Stats() {
  return (
    <section className="border-y border-border bg-foreground py-20 text-background">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-10 px-5 md:grid-cols-4 md:px-8">
        {stats.map((s) => (
          <div key={s.label} className="text-center">
            <p className="font-display text-4xl font-extrabold tracking-tight md:text-6xl">
              <Counter to={s.value} suffix={s.suffix} />
            </p>
            <p className="mt-2 text-sm text-background/70">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
