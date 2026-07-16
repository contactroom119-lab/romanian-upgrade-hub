import type { ReactNode } from "react";
import { SiteHeader } from "./site-header";
import { SiteFooter } from "./site-footer";
import { Marquee } from "./marquee";

export function PageShell({ children, marquee = true }: { children: ReactNode; marquee?: boolean }) {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {marquee && <Marquee />}
      <SiteHeader />
      <main>{children}</main>
      <SiteFooter />
    </div>
  );
}

export function PageHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow?: string;
  title: ReactNode;
  description?: string;
}) {
  return (
    <section className="border-b border-ink/10 bg-card">
      <div className="mx-auto max-w-[1400px] px-4 py-16 md:px-8 md:py-24">
        {eyebrow && <div className="mb-3 font-marker text-sm text-primary">{eyebrow}</div>}
        <h1 className="font-display text-5xl leading-[0.9] md:text-7xl">{title}</h1>
        {description && (
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground">{description}</p>
        )}
      </div>
    </section>
  );
}
