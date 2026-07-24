import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Package, Truck, CheckCircle2 } from "lucide-react";
import { PageShell } from "@/components/site/PageShell";
import { DEMO_ORDERS, STATUS_LABEL, type OrderStatus } from "@/lib/account-data";
import { RON, getProduct } from "@/lib/room119-data";

export const Route = createFileRoute("/orders")({
  head: () => ({
    meta: [
      { title: "Comenzile mele — Room 119" },
      { name: "description", content: "Istoricul comenzilor tale Room 119 — status, tracking și rechecout." },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: OrdersPage,
});

const statusIcon = (s: OrderStatus) =>
  s === "delivered" ? <CheckCircle2 className="size-4" /> : s === "on_its_way" ? <Truck className="size-4" /> : <Package className="size-4" />;

function OrdersPage() {
  return (
    <PageShell hideNewsletter>
      <AccountTabs active="orders" />
      <section className="mx-auto max-w-[1100px] px-4 py-10 md:px-8 md:py-14">
        <div className="mb-8 flex items-end justify-between">
          <div>
            <div className="font-marker text-primary">→ cont · comenzi</div>
            <h1 className="font-display text-4xl md:text-6xl">Comenzile tale</h1>
          </div>
          <Link to="/" className="hidden text-sm uppercase tracking-widest text-muted-foreground hover:text-primary md:inline">
            Continuă cumpărăturile →
          </Link>
        </div>

        <div className="space-y-4">
          {DEMO_ORDERS.map((o) => {
            const first = o.items[0];
            const p = getProduct(first.slug);
            return (
              <Link
                key={o.id}
                to="/orders/$id"
                params={{ id: o.id }}
                className="flex gap-4 rounded-2xl border border-ink/10 bg-card p-4 transition hover:border-primary/40 hover:shadow-[var(--shadow-tape)] md:p-5"
              >
                <div className="relative h-28 w-24 shrink-0 overflow-hidden rounded-xl bg-muted">
                  {p?.img && <img src={p.img} alt={p.name} className="h-full w-full object-cover" />}
                  {o.items.length > 1 && (
                    <span className="absolute right-1 top-1 grid size-6 place-items-center rounded-full bg-ink text-[10px] font-bold text-paper">
                      {o.items.length}
                    </span>
                  )}
                </div>
                <div className="flex flex-1 flex-col justify-between">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <div className="font-display text-2xl leading-tight">
                        {o.status === "on_its_way" ? "Pe drum" : o.status === "delivered" ? `Livrată ${o.createdAt}` : "Confirmată"}
                      </div>
                      <div className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">
                        #{o.id} · {RON(o.paid)}
                        {o.eta && <> · ETA {o.eta}</>}
                      </div>
                    </div>
                    <span className="inline-flex items-center gap-1 rounded-full border border-ink/15 bg-background px-3 py-1 text-xs font-semibold">
                      {statusIcon(o.status)} {STATUS_LABEL[o.status]}
                    </span>
                  </div>
                  <div className="mt-3 flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">{o.items.length} produs{o.items.length > 1 ? "e" : ""}</span>
                    <span className="inline-flex items-center gap-1 font-semibold text-primary">
                      Detalii <ArrowRight className="size-4" />
                    </span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </section>
    </PageShell>
  );
}

export function AccountTabs({ active }: { active: "orders" | "profile" }) {
  const tabs = [
    { key: "orders" as const, label: "Comenzi", to: "/orders" as const },
    { key: "profile" as const, label: "Profil", to: "/profile" as const },
  ];
  return (
    <div className="border-b border-ink/10 bg-card">
      <div className="mx-auto flex max-w-[1100px] items-center justify-between gap-4 px-4 py-4 md:px-8">
        <div className="font-marker text-sm text-primary">→ your room</div>
        <nav className="flex items-center gap-1">
          {tabs.map((t) => (
            <Link
              key={t.key}
              to={t.to}
              className={`rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-widest transition ${
                active === t.key ? "bg-ink text-paper" : "text-muted-foreground hover:bg-muted"
              }`}
            >
              {t.label}
            </Link>
          ))}
          <Link to="/sign-in" className="ml-2 rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-widest text-muted-foreground hover:text-primary">
            Ieși
          </Link>
        </nav>
      </div>
    </div>
  );
}
