import { Reveal } from "@/components/Reveal";

export function About() {
  return (
    <section id="about" className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="grid gap-14 md:grid-cols-2 md:gap-20">
          <Reveal>
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
              About Cre8Hive
            </p>
            <h2 className="mt-4 text-3xl md:text-5xl">
              Creating Digital Experiences That Matter.
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <div className="space-y-5 text-base leading-relaxed text-muted-foreground">
              <p>
                Cre8Hive is a modern digital agency helping ambitious businesses
                build impactful digital products using creativity and AI-powered
                development.
              </p>
              <p>
                We blend design craft with engineering rigor to ship websites,
                apps, brand systems and automations that don't just look good —
                they move the numbers that matter.
              </p>
              <div className="flex items-center gap-6 pt-4">
                <div>
                  <p className="font-display text-3xl font-extrabold text-foreground">
                    Create
                  </p>
                </div>
                <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                <div>
                  <p className="font-display text-3xl font-extrabold text-foreground">
                    Build
                  </p>
                </div>
                <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                <div>
                  <p className="font-display text-3xl font-extrabold text-foreground">
                    Grow
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
