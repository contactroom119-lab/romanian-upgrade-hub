import { createFileRoute, Link } from "@tanstack/react-router";
import { Minus, Plus, Trash2, ArrowRight, ShoppingBag } from "lucide-react";
import { useState } from "react";
import { PageShell } from "@/components/site/PageShell";
import { useCart, updateQty, removeLine, cartTotals, linePrice, clearCart } from "@/lib/cart-store";
import { getProduct, RON, sizeLabel } from "@/lib/room119-data";

export const Route = createFileRoute("/cart")({
  head: () => ({
    meta: [
      { title: "Coșul tău — Room 119" },
      { name: "description", content: "Verifică ce ai în coș și finalizează comanda de postere și tricouri Room 119." },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: CartPage,
});

function CartPage() {
  const { lines, mounted } = useCart();
  const { subtotal, shipping, total } = cartTotals(lines);
  const [placed, setPlaced] = useState(false);

  if (placed) {
    return (
      <PageShell hideNewsletter>
        <section className="mx-auto max-w-[720px] px-4 py-24 text-center md:px-8">
          <div className="font-marker text-primary">→ mulțumim!</div>
          <h1 className="font-display text-5xl md:text-7xl">Comandă plasată.</h1>
          <p className="mt-4 text-muted-foreground">Îți trimitem un email de confirmare cu detaliile expedierii. Coletul pleacă în 24–48h.</p>
          <div className="mt-8 flex justify-center gap-3">
            <Link to="/" className="rounded-full bg-primary px-6 py-3 font-semibold text-primary-foreground">Acasă</Link>
            <Link to="/contact" className="rounded-full border border-ink/20 bg-card px-6 py-3 font-semibold">Contact</Link>
          </div>
        </section>
      </PageShell>
    );
  }

  return (
    <PageShell hideNewsletter>
      <section className="mx-auto max-w-[1400px] px-4 py-14 md:px-8 md:py-20">
        <div className="mb-10">
          <div className="font-marker text-primary">→ checkout</div>
          <h1 className="font-display text-5xl md:text-7xl">Coșul tău</h1>
        </div>

        {!mounted ? (
          <div className="rounded-2xl border border-ink/10 bg-card p-8 text-center text-muted-foreground">Se încarcă…</div>
        ) : lines.length === 0 ? (
          <div className="rounded-3xl border border-dashed border-ink/20 bg-card p-16 text-center">
            <ShoppingBag className="mx-auto size-10 text-primary" />
            <div className="mt-4 font-display text-3xl">Coșul e gol.</div>
            <p className="mt-2 text-muted-foreground">Ai spațiu pe pereți. Ai spațiu pe tricouri. Umple-l.</p>
            <Link to="/" className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 font-semibold text-primary-foreground">
              Continuă cumpărăturile <ArrowRight className="size-4" />
            </Link>
          </div>
        ) : (
          <div className="grid gap-10 md:grid-cols-[1.5fr_1fr]">
            <div className="space-y-4">
              {lines.map((l) => {
                const p = getProduct(l.slug);
                if (!p) return null;
                return (
                  <div key={l.slug + l.size} className="flex gap-4 rounded-2xl border border-ink/10 bg-card p-4">
                    <Link to="/product/$slug" params={{ slug: p.slug }} className="h-32 w-24 shrink-0 overflow-hidden rounded-xl bg-muted">
                      <img src={p.img} alt={p.name} className="h-full w-full object-cover" />
                    </Link>
                    <div className="flex flex-1 flex-col justify-between">
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <Link to="/product/$slug" params={{ slug: p.slug }} className="font-display text-xl leading-tight hover:text-primary">{p.name}</Link>
                          <div className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">{sizeLabel(p.type)} {l.size}</div>
                        </div>
                        <button onClick={() => removeLine(l.slug, l.size)} className="rounded-full p-2 text-muted-foreground hover:bg-muted hover:text-primary" aria-label="Șterge">
                          <Trash2 className="size-4" />
                        </button>
                      </div>
                      <div className="flex items-end justify-between">
                        <div className="flex items-center rounded-full border border-ink/20 bg-background">
                          <button onClick={() => updateQty(l.slug, l.size, l.qty - 1)} className="p-2 hover:text-primary" aria-label="Minus"><Minus className="size-4" /></button>
                          <span className="w-8 text-center font-display">{l.qty}</span>
                          <button onClick={() => updateQty(l.slug, l.size, l.qty + 1)} className="p-2 hover:text-primary" aria-label="Plus"><Plus className="size-4" /></button>
                        </div>
                        <div className="text-right">
                          <div className="font-display text-lg">{RON(linePrice(l, p))}</div>
                          <div className="text-xs text-muted-foreground">{RON(p.price)} × {l.qty}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
              <button onClick={clearCart} className="text-xs uppercase tracking-widest text-muted-foreground hover:text-primary">Golește coșul</button>
            </div>

            <aside className="h-fit rounded-3xl border border-ink/10 bg-card p-6 shadow-[var(--shadow-tape)]">
              <div className="mb-4 font-marker text-primary">→ sumar comandă</div>
              <dl className="space-y-2 text-sm">
                <div className="flex justify-between"><dt className="text-muted-foreground">Subtotal</dt><dd className="font-display">{RON(subtotal)}</dd></div>
                <div className="flex justify-between"><dt className="text-muted-foreground">Transport</dt><dd className="font-display">{shipping === 0 ? "Gratuit" : RON(shipping)}</dd></div>
                {shipping > 0 && subtotal < 200 && (
                  <div className="rounded-lg bg-primary/10 p-2 text-xs text-primary">
                    Mai adaugă {RON(200 - subtotal)} pentru livrare gratuită.
                  </div>
                )}
                <div className="mt-4 flex items-baseline justify-between border-t border-dashed border-ink/30 pt-4">
                  <dt className="font-display text-lg">Total</dt>
                  <dd className="font-display text-2xl text-primary">{RON(total)}</dd>
                </div>
              </dl>
              <Link
                to="/checkout"
                className="mt-6 flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 font-semibold text-primary-foreground transition hover:bg-primary/90"
              >
                Checkout · {RON(total)} <ArrowRight className="size-4" />
              </Link>
              <div className="mt-3 text-center text-[10px] uppercase tracking-widest text-muted-foreground">
                Plată securizată · Card / Ramburs / Apple Pay
              </div>
              <div className="mt-4 border-t border-dashed border-ink/20 pt-4 text-xs text-muted-foreground">
                Prin plasarea comenzii ești de acord cu <Link to="/legal/termeni" className="text-primary underline">Termenii</Link> și <Link to="/legal/confidentialitate" className="text-primary underline">Politica de confidențialitate</Link>.
              </div>
            </aside>
          </div>
        )}
      </section>
    </PageShell>
  );
}
