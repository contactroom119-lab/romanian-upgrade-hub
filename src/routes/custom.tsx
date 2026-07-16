import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageShell, PageHeader } from "@/components/page-shell";

export const Route = createFileRoute("/custom")({
  component: CustomPage,
  head: () => ({
    meta: [
      { title: "Custom Orders — Room 119" },
      { name: "description", content: "Move a Room 119 design onto a t-shirt, hoodie, tote or new poster. Custom orders, printed in Romania." },
    ],
  }),
});

function CustomPage() {
  const [sent, setSent] = useState(false);
  return (
    <PageShell>
      <PageHeader
        eyebrow="/ custom orders"
        title={
          <>
            Make it <span className="text-primary">yours.</span>
          </>
        }
        description="Tweak a design, move it onto something else, or start from a blank page. One message away."
      />

      <section className="mx-auto grid max-w-[1200px] gap-10 px-4 py-16 md:grid-cols-[1.2fr_1fr] md:px-8">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setSent(true);
          }}
          className="space-y-4 rounded-2xl border border-ink/10 bg-card p-6 md:p-8"
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="block">
              <span className="mb-1 block text-xs font-semibold uppercase tracking-[0.15em]">Name</span>
              <input required className="input" />
            </label>
            <label className="block">
              <span className="mb-1 block text-xs font-semibold uppercase tracking-[0.15em]">Email</span>
              <input required type="email" className="input" />
            </label>
          </div>
          <label className="block">
            <span className="mb-1 block text-xs font-semibold uppercase tracking-[0.15em]">Type of piece</span>
            <select className="input">
              <option>Poster / print</option>
              <option>T-shirt</option>
              <option>Hoodie</option>
              <option>Tote bag</option>
              <option>Other</option>
            </select>
          </label>
          <label className="block">
            <span className="mb-1 block text-xs font-semibold uppercase tracking-[0.15em]">Your idea</span>
            <textarea required rows={6} className="input resize-none" placeholder="Reference designs, colors, mood, size…" />
          </label>
          <button disabled={sent} className="rounded-full bg-primary px-6 py-3 font-semibold text-primary-foreground disabled:opacity-60">
            {sent ? "Got it — we'll reply within 48h" : "Send my brief"}
          </button>
        </form>

        <div className="relative">
          <div className="rotate-[-3deg] rounded-3xl bg-card p-6 shadow-[var(--shadow-poster)]">
            <div className="font-marker text-sm text-primary">room119 // process</div>
            <ol className="mt-4 space-y-4 text-sm">
              {[
                "Tell me the design + the object.",
                "I mock it up. You approve (or ask for round two).",
                "Printed & shipped from Romania in ~10 days.",
              ].map((t, i) => (
                <li key={t} className="flex gap-3">
                  <span className="grid size-6 shrink-0 place-items-center rounded-full bg-primary font-display text-xs text-primary-foreground">
                    {i + 1}
                  </span>
                  <span>{t}</span>
                </li>
              ))}
            </ol>
            <div className="mt-6 border-t border-dashed border-ink/30 pt-4 text-xs text-muted-foreground">
              Custom orders start at RON 149. Final price depends on size, garment, and print complexity.
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
