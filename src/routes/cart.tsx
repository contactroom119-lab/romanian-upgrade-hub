import { createFileRoute, Link } from "@tanstack/react-router";
import { Minus, Plus, Trash2, ArrowRight } from "lucide-react";
import { PageShell, PageHeader } from "@/components/page-shell";
import { getProduct, SIZES } from "@/data/catalog";
import { formatRON, useCart } from "@/lib/cart";

export const Route = createFileRoute("/cart")({
  component: CartPage,
  head: () => ({ meta: [{ title: "Cart — Room 119" }] }),
});

function CartPage() {
  const { items, setQty, remove, subtotal, clear } = useCart();
  const shipping = subtotal > 250 ? 0 : subtotal > 0 ? 19.9 : 0;
  const total = subtotal + shipping;

  return (
    <PageShell marquee={false}>
      <PageHeader
        eyebrow="/ your bag"
        title={
          <>
            Cart <span className="text-primary">check.</span>
          </>
        }
      />

      <section className="mx-auto grid max-w-[1400px] gap-10 px-4 py-16 md:grid-cols-[1.6fr_1fr] md:px-8">
        <div>
          {items.length === 0 ? (
            <div className="rounded-2xl border border-dashed border-ink/20 bg-card p-14 text-center">
              <p className="font-marker text-2xl">Empty room.</p>
              <p className="mt-2 text-muted-foreground">Nothing in your cart yet.</p>
              <Link
                to="/shop"
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 font-semibold text-primary-foreground"
              >
                Start shopping <ArrowRight className="size-4" />
              </Link>
            </div>
          ) : (
            <div className="divide-y divide-ink/10 rounded-2xl border border-ink/10 bg-card">
              {items.map((line) => {
                const p = getProduct(line.slug);
                if (!p) return null;
                const sizeObj = SIZES.find((s) => s.id === line.size)!;
                const price = p.price + (sizeObj?.modifier ?? 0);
                return (
                  <div key={`${line.slug}-${line.size}`} className="flex gap-4 p-4">
                    <Link
                      to="/product/$slug"
                      params={{ slug: p.slug }}
                      className="block h-28 w-24 shrink-0 overflow-hidden rounded-xl bg-muted"
                    >
                      <img src={p.img} alt={p.name} className="h-full w-full object-cover" />
                    </Link>
                    <div className="flex flex-1 flex-col">
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <Link
                            to="/product/$slug"
                            params={{ slug: p.slug }}
                            className="font-display text-lg leading-tight hover:text-primary"
                          >
                            {p.name}
                          </Link>
                          <div className="font-marker text-xs text-muted-foreground">
                            {sizeObj?.label}
                          </div>
                        </div>
                        <div className="font-display text-lg">{formatRON(price * line.qty)}</div>
                      </div>
                      <div className="mt-auto flex items-center justify-between pt-3">
                        <div className="inline-flex items-center gap-1 rounded-full border border-ink/15 p-1">
                          <button
                            onClick={() => setQty(line.slug, line.size, line.qty - 1)}
                            className="grid size-7 place-items-center rounded-full hover:bg-muted"
                            aria-label="Decrease"
                          >
                            <Minus className="size-3" />
                          </button>
                          <span className="w-6 text-center text-sm">{line.qty}</span>
                          <button
                            onClick={() => setQty(line.slug, line.size, line.qty + 1)}
                            className="grid size-7 place-items-center rounded-full hover:bg-muted"
                            aria-label="Increase"
                          >
                            <Plus className="size-3" />
                          </button>
                        </div>
                        <button
                          onClick={() => remove(line.slug, line.size)}
                          className="inline-flex items-center gap-1 text-xs uppercase tracking-widest text-muted-foreground hover:text-foreground"
                        >
                          <Trash2 className="size-3" /> Remove
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
              <div className="flex justify-between p-4">
                <button
                  onClick={clear}
                  className="text-xs uppercase tracking-widest text-muted-foreground hover:text-foreground"
                >
                  Clear cart
                </button>
                <Link to="/shop" className="text-xs uppercase tracking-widest link-reveal">
                  Continue shopping
                </Link>
              </div>
            </div>
          )}
        </div>

        <aside className="sticky top-24 h-fit rounded-2xl border border-ink/10 bg-ink p-6 text-paper">
          <div className="font-marker text-sm text-primary">order summary</div>
          <div className="mt-4 space-y-3 text-sm">
            <Row label="Subtotal" value={formatRON(subtotal)} />
            <Row
              label="Shipping"
              value={subtotal > 250 ? "Free" : subtotal === 0 ? "—" : formatRON(shipping)}
            />
            <div className="my-3 border-t border-dashed border-paper/20" />
            <Row label="Total" value={formatRON(total)} bold />
          </div>
          <button
            disabled={items.length === 0}
            className="mt-6 w-full rounded-full bg-primary px-6 py-3 font-semibold text-primary-foreground transition hover:bg-primary/90 disabled:opacity-40"
          >
            Checkout
          </button>
          <p className="mt-3 text-xs text-paper/60">
            Free shipping in Romania on orders over RON 250. Checkout is a placeholder in this demo.
          </p>
        </aside>
      </section>
    </PageShell>
  );
}

function Row({ label, value, bold = false }: { label: string; value: string; bold?: boolean }) {
  return (
    <div className={`flex items-center justify-between ${bold ? "font-display text-lg" : ""}`}>
      <span className={bold ? "" : "text-paper/70"}>{label}</span>
      <span>{value}</span>
    </div>
  );
}
