import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { PageShell } from "@/components/site/PageShell";

const LEGAL = [
  { to: "/legal/termeni", label: "Termeni" },
  { to: "/legal/confidentialitate", label: "Confidențialitate" },
  { to: "/legal/cookies", label: "Cookies" },
  { to: "/legal/gdpr", label: "GDPR" },
  { to: "/legal/livrare", label: "Livrare" },
  { to: "/legal/retur", label: "Retur" },
  { to: "/legal/anpc", label: "ANPC / SOL" },
] as const;

export function LegalLayout({ eyebrow, title, updated, children }: { eyebrow: string; title: string; updated?: string; children: ReactNode }) {
  return (
    <PageShell hideNewsletter>
      <section className="border-b border-ink/10 bg-card">
        <div className="mx-auto max-w-[1100px] px-4 py-14 md:px-8 md:py-20">
          <div className="font-marker text-primary">→ {eyebrow}</div>
          <h1 className="font-display text-5xl leading-[0.9] md:text-7xl">{title}</h1>
          {updated && <div className="mt-4 text-xs uppercase tracking-widest text-muted-foreground">Actualizat: {updated}</div>}
        </div>
      </section>
      <section className="mx-auto grid max-w-[1100px] gap-10 px-4 py-12 md:grid-cols-[220px_1fr] md:px-8 md:py-16">
        <aside className="h-fit rounded-2xl border border-ink/10 bg-card p-4 md:sticky md:top-24">
          <div className="mb-2 text-xs font-semibold uppercase tracking-widest text-muted-foreground">Documente</div>
          <ul className="space-y-1 text-sm">
            {LEGAL.map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="block rounded-md px-3 py-2 hover:bg-muted" activeProps={{ className: "block rounded-md px-3 py-2 bg-primary/10 text-primary font-semibold" }}>
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </aside>
        <article className="prose prose-neutral max-w-none text-[15px] leading-relaxed [&_h2]:font-display [&_h2]:text-2xl [&_h2]:mt-8 [&_h2]:mb-3 [&_h3]:font-display [&_h3]:text-lg [&_h3]:mt-6 [&_h3]:mb-2 [&_p]:mb-4 [&_ul]:mb-4 [&_ul]:list-disc [&_ul]:pl-6 [&_li]:mb-1 [&_a]:text-primary [&_a]:underline">
          {children}
        </article>
      </section>
    </PageShell>
  );
}
