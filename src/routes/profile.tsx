import { createFileRoute, Link } from "@tanstack/react-router";
import { Mail, Phone, MapPin, Plus, Pencil } from "lucide-react";
import { PageShell } from "@/components/site/PageShell";
import { AccountTabs } from "./orders";
import { DEMO_ADDRESS } from "@/lib/account-data";

export const Route = createFileRoute("/profile")({
  head: () => ({
    meta: [
      { title: "Profil — Room 119" },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: ProfilePage,
});

function ProfilePage() {
  return (
    <PageShell hideNewsletter>
      <AccountTabs active="profile" />
      <section className="mx-auto max-w-[1100px] px-4 py-10 md:px-8 md:py-14">
        <div className="mb-8 flex items-end justify-between">
          <div>
            <div className="font-marker text-primary">→ cont · profil</div>
            <h1 className="font-display text-4xl md:text-6xl">Adelle Nikolaus</h1>
          </div>
          <button className="rounded-full border border-ink/20 bg-card px-5 py-2.5 text-sm font-semibold hover:bg-muted">
            Editează
          </button>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl border border-ink/10 bg-card p-6">
            <div className="font-marker text-primary">→ contact</div>
            <div className="mt-4 space-y-3 text-sm">
              <div className="flex items-center gap-3">
                <Mail className="size-4 text-muted-foreground" />
                adelle.nikolaus@example.com
              </div>
              <div className="flex items-center gap-3">
                <Phone className="size-4 text-muted-foreground" />
                +40 21 314 2434
              </div>
            </div>
          </div>

          <div className="rounded-3xl border border-ink/10 bg-card p-6">
            <div className="flex items-center justify-between">
              <div className="font-marker text-primary">→ credit magazin</div>
              <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">RON</span>
            </div>
            <div className="mt-4 font-display text-4xl">RON 100.00</div>
            <p className="mt-2 text-xs text-muted-foreground">Se aplică automat la checkout.</p>
          </div>
        </div>

        <div className="mt-6 rounded-3xl border border-ink/10 bg-card p-6">
          <div className="flex items-center justify-between">
            <div className="font-marker text-primary">→ adrese</div>
            <button className="inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-widest text-primary hover:underline">
              <Plus className="size-4" /> Adaugă
            </button>
          </div>
          <div className="mt-4 grid gap-3 md:grid-cols-2">
            {[0, 1].map((i) => (
              <div key={i} className="flex items-start justify-between rounded-2xl border border-ink/10 bg-background p-4">
                <div className="flex gap-3 text-sm">
                  <MapPin className="mt-0.5 size-4 text-primary" />
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-semibold">{DEMO_ADDRESS.name}</span>
                      {i === 0 && <span className="rounded-full bg-ink px-2 py-0.5 text-[10px] font-bold text-paper">Default</span>}
                    </div>
                    <div className="mt-1 text-muted-foreground">
                      {DEMO_ADDRESS.line1}, {DEMO_ADDRESS.postal} {DEMO_ADDRESS.city}, {DEMO_ADDRESS.country}
                    </div>
                  </div>
                </div>
                <button className="rounded-full p-2 text-muted-foreground hover:bg-muted hover:text-primary" aria-label="Editează">
                  <Pencil className="size-4" />
                </button>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-6 rounded-3xl border border-ink/10 bg-card p-6">
          <div className="font-marker text-primary">→ preferințe marketing</div>
          <label className="mt-4 flex items-center justify-between rounded-2xl border border-ink/10 bg-background p-4">
            <div>
              <div className="font-semibold">Email — drop-uri și noutăți</div>
              <div className="text-xs text-muted-foreground">Trimitem o dată la două săptămâni. Fără spam.</div>
            </div>
            <input type="checkbox" defaultChecked className="size-5 accent-primary" />
          </label>
        </div>

        <div className="mt-8 flex gap-3">
          <Link to="/sign-in" className="rounded-full border border-ink/20 bg-card px-5 py-2.5 text-sm font-semibold hover:bg-muted">
            Sign out
          </Link>
          <button className="text-sm text-muted-foreground hover:text-primary">Sign out din toate dispozitivele</button>
        </div>
      </section>
    </PageShell>
  );
}
