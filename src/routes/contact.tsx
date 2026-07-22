import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Mail, Phone, MapPin } from "lucide-react";
import { useState } from "react";
import { PageShell } from "@/components/site/PageShell";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Room 119" },
      { name: "description", content: "Scrie-ne pentru comenzi custom, colaborări sau doar ca să zici salut. Room 119 e la un email distanță." },
      { property: "og:title", content: "Contact — Room 119" },
      { property: "og:description", content: "Scrie-ne pentru comenzi custom, colaborări sau doar ca să zici salut." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);
  return (
    <PageShell hideNewsletter>
      <section className="mx-auto grid max-w-[1400px] gap-12 px-4 py-16 md:grid-cols-[1fr_1.2fr] md:px-8 md:py-24">
        <div>
          <div className="font-marker text-primary">→ hai să vorbim</div>
          <h1 className="font-display text-5xl leading-[0.9] md:text-8xl">Zi-mi <span className="text-primary">tot</span>.</h1>
          <p className="mt-6 max-w-md text-lg text-muted-foreground">
            Comenzi custom, colaborări, întrebări despre livrare sau doar un salut — răspund în 24h (weekend-urile mai lent, promit că e din motive bune).
          </p>
          <div className="mt-10 space-y-4">
            <a href="mailto:hello@room119.ro" className="flex items-center gap-3 text-lg hover:text-primary">
              <span className="grid size-10 place-items-center rounded-full bg-primary text-primary-foreground"><Mail className="size-4" /></span>
              hello@room119.ro
            </a>
            <a href="tel:+40712345678" className="flex items-center gap-3 text-lg hover:text-primary">
              <span className="grid size-10 place-items-center rounded-full bg-primary text-primary-foreground"><Phone className="size-4" /></span>
              +40 712 345 678
            </a>
            <div className="flex items-center gap-3 text-lg">
              <span className="grid size-10 place-items-center rounded-full bg-primary text-primary-foreground"><MapPin className="size-4" /></span>
              București, RO
            </div>
          </div>
        </div>

        <form
          onSubmit={(e) => { e.preventDefault(); setSent(true); }}
          className="relative rotate-[-1deg] rounded-3xl bg-card p-8 shadow-[var(--shadow-poster)]"
        >
          <span className="tape absolute inset-x-0" />
          <div className="font-marker text-primary">room119 // formular</div>
          {sent ? (
            <div className="mt-8 py-16 text-center">
              <div className="font-display text-4xl">Mulțumesc!</div>
              <p className="mt-2 text-muted-foreground">Îți răspund cât pot de repede.</p>
            </div>
          ) : (
            <div className="mt-6 space-y-4">
              <label className="block">
                <span className="text-xs font-semibold uppercase tracking-widest">Nume</span>
                <input required className="mt-1 w-full rounded-xl border border-ink/20 bg-background px-4 py-3 outline-none focus:border-primary" />
              </label>
              <label className="block">
                <span className="text-xs font-semibold uppercase tracking-widest">Email</span>
                <input required type="email" className="mt-1 w-full rounded-xl border border-ink/20 bg-background px-4 py-3 outline-none focus:border-primary" />
              </label>
              <label className="block">
                <span className="text-xs font-semibold uppercase tracking-widest">Subiect</span>
                <select className="mt-1 w-full rounded-xl border border-ink/20 bg-background px-4 py-3 outline-none focus:border-primary">
                  <option>Comandă custom</option>
                  <option>Întrebare produs</option>
                  <option>Colaborare</option>
                  <option>Altele</option>
                </select>
              </label>
              <label className="block">
                <span className="text-xs font-semibold uppercase tracking-widest">Mesaj</span>
                <textarea required rows={5} className="mt-1 w-full rounded-xl border border-ink/20 bg-background px-4 py-3 outline-none focus:border-primary" />
              </label>
              <button className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 font-semibold text-primary-foreground transition hover:bg-primary/90">
                Trimite <ArrowRight className="size-4 transition group-hover:translate-x-1" />
              </button>
            </div>
          )}
        </form>
      </section>
    </PageShell>
  );
}
