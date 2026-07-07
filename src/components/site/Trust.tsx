const brands = [
  "Lovable",
  "Supabase",
  "Firebase",
  "Stripe",
  "HubSpot",
  "OpenAI",
  "Google",
  "Vercel",
];

export function Trust() {
  return (
    <section className="border-y border-border bg-muted/40 py-14">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <p className="text-center text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
          Trusted technologies we use
        </p>
        <div className="mt-8 grid grid-cols-2 gap-6 sm:grid-cols-4 md:grid-cols-8">
          {brands.map((b) => (
            <div
              key={b}
              className="flex items-center justify-center text-lg font-semibold tracking-tight text-muted-foreground/80 transition-colors hover:text-foreground"
            >
              {b}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
