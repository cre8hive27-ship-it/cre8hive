import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/Reveal";

export function CTA() {
  return (
    <section id="contact" className="py-24 md:py-32">
      <div className="mx-auto max-w-4xl px-5 text-center md:px-8">
        <Reveal>
          <h2 className="text-4xl md:text-6xl">
            Ready to Build Something{" "}
            <span className="relative inline-block">
              Great
              <span className="absolute inset-x-0 -bottom-2 h-1.5 rounded-full bg-accent" />
            </span>
            ?
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-muted-foreground">
            Tell us about your project. We'll get back within one business day
            with a plan, timeline and quote.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="mailto:hello@cre8hive.com"
              className="group inline-flex h-12 items-center justify-center gap-2 rounded-full bg-foreground px-8 text-sm font-medium text-background transition-colors hover:bg-accent hover:text-accent-foreground"
            >
              Let's Talk
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="#portfolio"
              className="inline-flex h-12 items-center justify-center rounded-full border border-border bg-background px-8 text-sm font-medium text-foreground transition-colors hover:border-foreground"
            >
              See Our Work
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
