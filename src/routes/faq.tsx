import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHeader } from "@/components/page-shell";

const FAQS = [
  { q: "Where do you ship?", a: "Worldwide from Romania. Shipping cost is calculated at checkout." },
  { q: "How long does it take?", a: "Prints ship within 48 hours. Custom orders take around 10 days." },
  { q: "Do prints come framed?", a: "Nope — frames are not included, so you can pick one that matches your room." },
  { q: "Can I return a poster?", a: "Yes, within 14 days of delivery in unused condition. See the returns page." },
  { q: "Do you take custom requests?", a: "Yes — head to the custom page and send a brief." },
  { q: "Payment methods?", a: "Card, Apple Pay, Google Pay at checkout." },
];

export const Route = createFileRoute("/faq")({
  component: FaqPage,
  head: () => ({
    meta: [
      { title: "FAQ — Room 119" },
      { name: "description", content: "Answers to the most common questions about Room 119 prints, shipping and custom orders." },
    ],
  }),
});

function FaqPage() {
  return (
    <PageShell>
      <PageHeader eyebrow="/ questions" title={<>Frequently <span className="text-primary">asked.</span></>} />
      <section className="mx-auto max-w-3xl px-4 py-16 md:px-8">
        <div className="divide-y divide-ink/10 rounded-2xl border border-ink/10 bg-card">
          {FAQS.map((f) => (
            <details key={f.q} className="group p-5">
              <summary className="flex cursor-pointer items-center justify-between font-display text-lg">
                {f.q}
                <span className="text-primary transition group-open:rotate-45">+</span>
              </summary>
              <p className="mt-3 text-sm text-muted-foreground">{f.a}</p>
            </details>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
