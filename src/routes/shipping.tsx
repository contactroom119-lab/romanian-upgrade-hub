import { createFileRoute } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { PageShell, PageHeader } from "@/components/page-shell";

export const Route = createFileRoute("/shipping")({
  component: () => (
    <LegalPage title="Shipping" eyebrow="/ how it gets there">
      <p>
        Every Room 119 order ships from Bucharest, Romania, within 48 hours of purchase (Mon–Fri).
      </p>
      <h2>Delivery times</h2>
      <ul>
        <li><strong>Romania</strong> — 2–4 working days via courier.</li>
        <li><strong>EU</strong> — 4–8 working days.</li>
        <li><strong>Rest of world</strong> — 7–14 working days.</li>
      </ul>
      <h2>Rates</h2>
      <ul>
        <li>Standard shipping in Romania: RON 19.90.</li>
        <li>Free shipping in Romania on orders over RON 250.</li>
        <li>EU & International: calculated at checkout based on weight.</li>
      </ul>
      <h2>Tracking</h2>
      <p>You'll get a tracking link by email as soon as your order leaves the studio.</p>
    </LegalPage>
  ),
  head: () => ({ meta: [{ title: "Shipping — Room 119" }, { name: "description", content: "Shipping times, rates, and tracking for Room 119 orders." }] }),
});

export function LegalPage({
  title,
  eyebrow,
  children,
}: {
  title: string;
  eyebrow: string;
  children: ReactNode;
}) {
  return (
    <PageShell>
      <PageHeader eyebrow={eyebrow} title={<>{title}<span className="text-primary">.</span></>} />
      <section className="mx-auto max-w-3xl px-4 py-16 md:px-8">
        <article className="prose-legal">{children}</article>
      </section>
    </PageShell>
  );
}
