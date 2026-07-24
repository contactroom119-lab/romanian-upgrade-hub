import { createFileRoute, Link } from "@tanstack/react-router";
import { CheckCircle2, Package, ArrowRight } from "lucide-react";
import { PageShell } from "@/components/site/PageShell";
import { DEMO_ADDRESS } from "@/lib/account-data";

export const Route = createFileRoute("/order/$id")({
  head: ({ params }) => ({
    meta: [
      { title: `Mulțumim! Comanda #${params.id} — Room 119` },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: OrderThankYou,
});

function OrderThankYou() {
  const { id } = Route.useParams();
  return (
    <PageShell hideNewsletter>
      <section className="mx-auto max-w-[1100px] px-4 py-14 md:px-8 md:py-20">
        <div className="rounded-3xl border border-ink/10 bg-card p-8 shadow-[var(--shadow-tape)] md:p-12">
          <div className="flex items-start gap-4">
            <div className="grid size-14 place-items-center rounded-full bg-primary/10 text-primary">
              <CheckCircle2 className="size-8" />
            </div>
            <div>
              <div className="font-marker text-primary">→ confirmare #{id}</div>
              <h1 className="font-display text-4xl leading-[0.95] md:text-6xl">Mulțumim, Adelle!</h1>
              <p className="mt-2 text-muted-foreground">Am primit comanda. Îți trimitem un email de confirmare cu detaliile expedierii.</p>
            </div>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-ink/10 bg-background p-5 text-sm">
              <div className="font-marker text-primary">→ livrare</div>
              <div className="mt-3 leading-relaxed">
                <div className="font-semibold">{DEMO_ADDRESS.name}</div>
                <div className="text-muted-foreground">{DEMO_ADDRESS.line1}</div>
                <div className="text-muted-foreground">{DEMO_ADDRESS.postal} {DEMO_ADDRESS.city}, {DEMO_ADDRESS.county}</div>
                <div className="text-muted-foreground">{DEMO_ADDRESS.country}</div>
              </div>
            </div>
            <div className="rounded-2xl border border-ink/10 bg-background p-5 text-sm">
              <div className="font-marker text-primary">→ ce urmează</div>
              <ol className="mt-3 space-y-2 text-muted-foreground">
                <li>1. Confirmăm plata și pregătim coletul (24h).</li>
                <li>2. Curierul îl ridică — primești AWB pe email.</li>
                <li>3. Ajunge la tine în 2–3 zile lucrătoare.</li>
              </ol>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/orders" className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 font-semibold text-primary-foreground hover:bg-primary/90">
              <Package className="size-4" /> Vezi comenzile
            </Link>
            <Link to="/" className="inline-flex items-center gap-2 rounded-full border border-ink/20 bg-card px-6 py-3 font-semibold hover:bg-muted">
              Continuă cumpărăturile <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
