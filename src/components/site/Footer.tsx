import { Github, Instagram, Linkedin, Twitter } from "lucide-react";
import { Logo } from "@/components/Logo";

const columns = [
  {
    title: "Services",
    links: ["Web Development", "Mobile Apps", "AI Automation", "CRM & Email", "Branding", "UI/UX"],
  },
  {
    title: "Company",
    links: ["About", "Portfolio", "Testimonials", "Contact"],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-7xl px-5 py-16 md:px-8">
        <div className="grid gap-12 md:grid-cols-4">
          <div className="md:col-span-2">
            <Logo />
            <p className="mt-5 max-w-xs text-sm text-muted-foreground">
              A digital agency building AI-powered products, brands and
              experiences that grow businesses.
            </p>
            <a
              href="mailto:hello@cre8hive.com"
              className="mt-6 inline-block text-sm font-medium text-foreground underline-offset-4 hover:underline"
            >
              hello@cre8hive.com
            </a>
          </div>

          {columns.map((c) => (
            <div key={c.title}>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                {c.title}
              </p>
              <ul className="mt-5 space-y-3">
                {c.links.map((l) => (
                  <li key={l}>
                    <a
                      href="#"
                      className="text-sm text-foreground transition-colors hover:text-accent"
                    >
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-6 border-t border-border pt-8 md:flex-row md:items-center">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Cre8Hive. Create • Build • Grow.
          </p>
          <div className="flex items-center gap-2">
            {[
              { Icon: Twitter, label: "Twitter" },
              { Icon: Linkedin, label: "LinkedIn" },
              { Icon: Instagram, label: "Instagram" },
              { Icon: Github, label: "GitHub" },
            ].map(({ Icon, label }) => (
              <a
                key={label}
                href="#"
                aria-label={label}
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:bg-foreground hover:text-background"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
