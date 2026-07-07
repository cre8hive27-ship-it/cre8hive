import { ArrowRight } from "lucide-react";
import heroDevices from "@/assets/hero-devices.jpg";

function Hex({ className = "", size = 60 }: { className?: string; size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M16 2 L28 9 V23 L16 30 L4 23 V9 Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.2"
      />
    </svg>
  );
}

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28">
      {/* floating hex shapes */}
      <Hex
        size={80}
        className="float-a absolute left-[6%] top-32 text-border"
      />
      <Hex
        size={54}
        className="float-b absolute right-[8%] top-40 text-border"
      />
      <Hex
        size={40}
        className="float-a absolute left-[14%] bottom-24 text-accent"
      />
      <Hex
        size={64}
        className="float-b absolute right-[16%] bottom-32 text-border"
      />

      <div className="relative mx-auto max-w-5xl px-5 text-center md:px-8">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-background px-4 py-1.5 text-xs font-medium text-muted-foreground">
          <span className="h-1.5 w-1.5 rounded-full bg-accent" />
          AI-powered digital agency
        </div>

        <h1 className="font-display text-4xl leading-[1.05] tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
          Building Digital Products That
          <br className="hidden sm:block" /> Create{" "}
          <span className="relative inline-block">
            Real Impact
            <span className="absolute inset-x-0 -bottom-2 h-1.5 rounded-full bg-accent" />
          </span>
          .
        </h1>

        <p className="mx-auto mt-8 max-w-2xl text-base text-muted-foreground md:text-lg">
          We help startups, founders and businesses launch beautiful websites,
          scalable apps, AI automations and digital experiences that grow their
          business.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href="#contact"
            className="group inline-flex h-12 items-center justify-center gap-2 rounded-full bg-foreground px-7 text-sm font-medium text-background transition-colors hover:bg-accent hover:text-accent-foreground"
          >
            Start Your Project
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </a>
          <a
            href="#portfolio"
            className="inline-flex h-12 items-center justify-center rounded-full border border-border bg-background px-7 text-sm font-medium text-foreground transition-colors hover:border-foreground"
          >
            View Portfolio
          </a>
        </div>
      </div>

      <div className="relative mx-auto mt-16 max-w-6xl px-5 md:px-8">
        <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-[var(--shadow-lift)]">
          <img
            src={heroDevices}
            alt="Cre8Hive product mockups on laptop, tablet and phone"
            width={1600}
            height={1200}
            className="h-auto w-full"
          />
        </div>
      </div>
    </section>
  );
}
