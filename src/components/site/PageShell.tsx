import type { ReactNode } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { Marquee } from "./Marquee";

export function PageShell({ children, hideNewsletter = false }: { children: ReactNode; hideNewsletter?: boolean }) {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Marquee />
      <Header />
      <main>{children}</main>
      <Footer compact={hideNewsletter} />
    </div>
  );
}

export function PageHero({ eyebrow, title, accent, sub }: { eyebrow?: string; title: string; accent?: string; sub?: string }) {
  return (
    <section className="border-b border-ink/10 bg-card">
      <div className="mx-auto max-w-[1400px] px-4 py-16 md:px-8 md:py-24">
        {eyebrow && <div className="mb-2 font-marker text-sm text-primary">{eyebrow}</div>}
        <h1 className="font-display text-5xl leading-[0.9] md:text-8xl">
          {title} {accent && <span className="text-primary">{accent}</span>}
        </h1>
        {sub && <p className="mt-6 max-w-2xl text-lg text-muted-foreground">{sub}</p>}
      </div>
    </section>
  );
}
