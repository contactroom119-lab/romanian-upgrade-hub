import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, CheckCircle2, Truck, Package, MapPin, CreditCard } from "lucide-react";
import { PageShell } from "@/components/site/PageShell";
import { AccountTabs } from "./orders";
import { getOrder, STATUS_LABEL } from "@/lib/account-data";
import { RON, getProduct, sizeLabel } from "@/lib/room119-data";

export const Route = createFileRoute("/orders/$id")({
  head: ({ params }) => ({
    meta: [
      { title: `Comanda #${params.id} — Room 119` },
      { name: "robots", content: "noindex" },
    ],
  }),
  loader: ({ params }) => {
    const order = getOrder(params.id);
    if (!order) throw notFound();
    return { id: params.id };
  },
  notFoundComponent: () => (
    <PageShell hideNewsletter>
      <section className="mx-auto max-w-[720px] px-4 py-24 text-center">
        <div className="font-marker text-primary">→ 404</div>
        <h1 className="font-display text-5xl md:text-7xl">Comanda nu există.</h1>
        <Link to="/orders" className="mt-6 inline-flex rounded-full bg-primary px-6 py-3 font-semibold text-primary-foreground">
          Înapoi la comenzi
        </Link>
      </section>
    </PageShell>
  ),
  component: OrderDetail,
});

function OrderDetail() {
  const { id } = Route.useLoaderData();
  const order = getOrder(id)!;
  const subtotal = order.items.reduce((s, i) => s + i.price * i.qty, 0);

  const steps = [
    { key: "confirmed", label: "Confirmată", icon: Package, date: order.createdAt },
    { key: "on_its_way", label: "Pe drum", icon: Truck, date: order.status === "confirmed" ? "—" : "18 Iul" },
    { key: "delivered", label: "Livrată", icon: CheckCircle2, date: order.status === "delivered" ? order.createdAt : order.eta ?? "—" },
  ];
  const doneUntil = order.status === "delivered" ? 2 : order.status === "on_its_way" ? 1 : 0;

  return (
    <PageShell hideNewsletter>
      <AccountTabs active="orders" />
      <section className="mx-auto max-w-[1100px] px-4 py-10 md:px-8 md:py-14">
        <Link to="/orders" className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-muted-foreground hover:text-primary">
          <ArrowLeft className="size-4" /> Toate comenzile
        </Link>

        <div className="mt-4 flex flex-wrap items-end justify-between gap-4">
          <div>
            <div className="font-marker text-primary">→ comanda #{order.id}</div>
            <h1 className="font-display text-4xl md:text-6xl">{STATUS_LABEL[order.status]}</h1>
            <p className="mt-1 text-sm text-muted-foreground">Plasată {order.createdAt}{order.eta && <> · ETA {order.eta}</>}</p>
          </div>
          <div className="flex gap-2">
            <button className="rounded-full border border-ink/20 bg-card px-5 py-2.5 text-sm font-semibold hover:bg-muted">Cere factură</button>
            <button className="rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground hover:bg-primary/90">Recomandă</button>
          </div>
        </div>

        {/* Timeline */}
        <div className="mt-8 rounded-3xl border border-ink/10 bg-card p-6 md:p-8">
          <div className="grid gap-4 md:grid-cols-3">
            {steps.map((s, i) => {
              const Icon = s.icon;
              const done = i <= doneUntil;
              return (
                <div key={s.key} className={`rounded-2xl border p-4 ${done ? "border-primary/40 bg-primary/5" : "border-ink/10 bg-background"}`}>
                  <div className={`inline-flex size-8 items-center justify-center rounded-full ${done ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"}`}>
                    <Icon className="size-4" />
                  </div>
                  <div className="mt-3 font-display text-lg">{s.label}</div>
                  <div className="text-xs text-muted-foreground">{s.date}</div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-[1.5fr_1fr]">
          {/* Items */}
          <div className="space-y-3">
            {order.items.map((it) => {
              const p = getProduct(it.slug);
              if (!p) return null;
              return (
                <div key={it.slug + it.size} className="flex gap-4 rounded-2xl border border-ink/10 bg-card p-4">
                  <div className="h-24 w-20 shrink-0 overflow-hidden rounded-xl bg-muted">
                    <img src={p.img} alt={p.name} className="h-full w-full object-cover" />
                  </div>
                  <div className="flex flex-1 items-start justify-between">
                    <div>
                      <div className="font-display text-lg leading-tight">{p.name}</div>
                      <div className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">
                        {sizeLabel(p.type)} {it.size} · x{it.qty}
                      </div>
                    </div>
                    <div className="font-display text-lg">{RON(it.price * it.qty)}</div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Summary + info */}
          <aside className="space-y-4">
            <div className="rounded-3xl border border-ink/10 bg-card p-6">
              <div className="font-marker text-primary">→ sumar</div>
              <dl className="mt-3 space-y-2 text-sm">
                <div className="flex justify-between"><dt className="text-muted-foreground">Subtotal</dt><dd className="font-display">{RON(subtotal)}</dd></div>
                <div className="flex justify-between"><dt className="text-muted-foreground">Transport</dt><dd className="font-display">{order.shipping === 0 ? "Gratuit" : RON(order.shipping)}</dd></div>
                <div className="mt-3 flex items-baseline justify-between border-t border-dashed border-ink/30 pt-3">
                  <dt className="font-display text-lg">Total</dt>
                  <dd className="font-display text-2xl text-primary">{RON(order.paid)}</dd>
                </div>
              </dl>
            </div>

            <div className="rounded-3xl border border-ink/10 bg-card p-6 text-sm">
              <div className="flex items-center gap-2 font-marker text-primary"><MapPin className="size-4" /> livrare</div>
              <div className="mt-3 leading-relaxed">
                <div className="font-semibold">{order.address.name}</div>
                <div className="text-muted-foreground">{order.address.line1}</div>
                <div className="text-muted-foreground">{order.address.postal} {order.address.city}, {order.address.county}</div>
                <div className="text-muted-foreground">{order.address.country}</div>
                <div className="mt-2 text-muted-foreground">{order.address.phone}</div>
              </div>
            </div>

            <div className="rounded-3xl border border-ink/10 bg-card p-6 text-sm">
              <div className="flex items-center gap-2 font-marker text-primary"><CreditCard className="size-4" /> plată</div>
              <div className="mt-3">{order.payment}</div>
            </div>
          </aside>
        </div>
      </section>
    </PageShell>
  );
}
