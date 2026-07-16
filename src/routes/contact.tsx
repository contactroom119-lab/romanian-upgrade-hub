import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Mail, Instagram, Music2 } from "lucide-react";
import { PageShell, PageHeader } from "@/components/page-shell";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
  head: () => ({
    meta: [
      { title: "Contact — Room 119" },
      { name: "description", content: "Get in touch with Room 119 about orders, custom pieces or collabs." },
    ],
  }),
});

function ContactPage() {
  const [sent, setSent] = useState(false);
  return (
    <PageShell>
      <PageHeader
        eyebrow="/ say hi"
        title={
          <>
            Slide into the <span className="text-primary">inbox.</span>
          </>
        }
        description="Questions about a print, an order, or a collab? Drop a note — usually answered within 48h."
      />
      <section className="mx-auto grid max-w-[1200px] gap-12 px-4 py-16 md:grid-cols-[1.4fr_1fr] md:px-8">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setSent(true);
          }}
          className="space-y-4 rounded-2xl border border-ink/10 bg-card p-6 md:p-8"
        >
          <Field label="Your name">
            <input required className="input" placeholder="First & last" />
          </Field>
          <Field label="Email">
            <input required type="email" className="input" placeholder="you@example.com" />
          </Field>
          <Field label="Subject">
            <input required className="input" placeholder="What's this about?" />
          </Field>
          <Field label="Message">
            <textarea required rows={6} className="input resize-none" placeholder="Tell us everything." />
          </Field>
          <button
            type="submit"
            disabled={sent}
            className="rounded-full bg-primary px-6 py-3 font-semibold text-primary-foreground disabled:opacity-60"
          >
            {sent ? "Message sent — talk soon" : "Send message"}
          </button>
        </form>

        <aside className="space-y-6">
          <div className="rounded-2xl border border-ink/10 bg-ink p-6 text-paper">
            <div className="font-marker text-sm text-primary">room 119 // hq</div>
            <div className="mt-3 font-display text-2xl">Bucharest, Romania</div>
            <div className="mt-4 space-y-2 text-sm text-paper/80">
              <a href="mailto:hello@room119.ro" className="flex items-center gap-2 link-reveal">
                <Mail className="size-4" /> hello@room119.ro
              </a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="flex items-center gap-2 link-reveal">
                <Instagram className="size-4" /> @room.119
              </a>
              <a href="https://tiktok.com" target="_blank" rel="noreferrer" className="flex items-center gap-2 link-reveal">
                <Music2 className="size-4" /> @room.119
              </a>
            </div>
          </div>
          <div className="rounded-2xl border border-dashed border-ink/20 bg-card p-6 text-sm text-muted-foreground">
            <div className="font-marker text-primary">office hours</div>
            <p className="mt-2">Mon–Fri · 10:00–18:00 EET</p>
            <p>Weekend replies happen — no promises.</p>
          </div>
        </aside>
      </section>
    </PageShell>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="mb-1 block text-xs font-semibold uppercase tracking-[0.15em]">{label}</span>
      {children}
    </label>
  );
}
