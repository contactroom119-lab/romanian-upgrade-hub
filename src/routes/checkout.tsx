import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { ArrowRight, Lock, Truck } from "lucide-react";
import { useState } from "react";
import { PageShell } from "@/components/site/PageShell";
import { useCart, cartTotals, clearCart } from "@/lib/cart-store";
import { RON, getProduct, sizeLabel } from "@/lib/room119-data";

export const Route = createFileRoute("/checkout")({
  head: () => ({
    meta: [
      { title: "Checkout — Room 119" },
      { name: "description", content: "Finalizează comanda ta Room 119. Plată securizată, livrare rapidă în toată România." },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: CheckoutPage,
});

function CheckoutPage() {
  const nav = useNavigate();
  const { lines, mounted } = useCart();
  const { subtotal, shipping, total } = cartTotals(lines);
  const [pay, setPay] = useState<"card" | "cod" | "paypal">("card");

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const id = String(1000 + Math.floor(Math.random() * 900));
    clearCart();
    nav({ to: "/order/$id", params: { id } });
  };

  return (
    <PageShell hideNewsletter>
      <section className="mx-auto max-w-[1400px] px-4 py-10 md:px-8 md:py-16">
        <div className="mb-8 flex items-center justify-between">
          <Link to="/" className="font-marker text-2xl">
            ROOM<span className="text-primary">/</span>119
          </Link>
          <Link to="/cart" className="text-xs uppercase tracking-widest text-muted-foreground hover:text-primary">
            ← înapoi la coș
          </Link>
        </div>

        <div className="grid gap-10 md:grid-cols-[1.3fr_1fr]">
          <form onSubmit={submit} className="space-y-8">
            {/* Express */}
            <div className="rounded-3xl border border-ink/10 bg-card p-6">
              <div className="mb-3 text-center text-xs uppercase tracking-widest text-muted-foreground">Express checkout</div>
              <div className="grid grid-cols-3 gap-2">
                <button type="button" className="rounded-full bg-[#FFC439] py-3 font-bold text-black">PayPal</button>
                <button type="button" className="rounded-full bg-black py-3 font-bold text-white">Apple Pay</button>
                <button type="button" className="rounded-full bg-white py-3 font-bold text-black ring-1 ring-black/10">G Pay</button>
              </div>
              <div className="my-4 flex items-center gap-3 text-xs uppercase tracking-widest text-muted-foreground">
                <span className="h-px flex-1 bg-ink/15" /> sau <span className="h-px flex-1 bg-ink/15" />
              </div>
            </div>

            {/* Contact */}
            <Section step="01" title="Contact">
              <Field label="Email" required type="email" placeholder="tu@email.com" />
              <label className="mt-3 flex items-center gap-2 text-xs text-muted-foreground">
                <input type="checkbox" className="accent-primary" /> Trimite-mi noutăți pe email
              </label>
            </Section>

            {/* Delivery */}
            <Section step="02" title="Livrare">
              <div className="grid gap-3 md:grid-cols-2">
                <Field label="Prenume" required placeholder="Adelle" />
                <Field label="Nume" required placeholder="Nikolaus" />
              </div>
              <Field label="Adresă" required placeholder="Bulevardul Unirii 22" />
              <Field label="Apartament, scară (opțional)" placeholder="Bl. A2, Ap. 14" />
              <div className="grid gap-3 md:grid-cols-3">
                <Field label="Cod poștal" placeholder="030823" />
                <Field label="Oraș" required placeholder="București" />
                <Field label="Județ" required placeholder="Bucharest" />
              </div>
              <Field label="Telefon" type="tel" placeholder="+40 722 292 632" />
            </Section>

            {/* Shipping method */}
            <Section step="03" title="Metodă de livrare">
              <div className="space-y-2">
                <Radio name="ship" checked label="Standard · 2–3 zile" value={shipping === 0 ? "Gratuit" : RON(19.9)} defaultChecked />
                <Radio name="ship" label="Express · 24h" value={RON(29.9)} />
              </div>
            </Section>

            {/* Payment */}
            <Section step="04" title="Plată">
              <p className="mb-3 text-xs text-muted-foreground">Toate tranzacțiile sunt securizate și criptate.</p>
              <div className="space-y-2">
                <Radio name="pay" label="Card bancar" value="Visa · Mastercard" defaultChecked onChange={() => setPay("card")} />
                <Radio name="pay" label="Ramburs la curier" value="+10 RON" onChange={() => setPay("cod")} />
                <Radio name="pay" label="PayPal" value="Redirect" onChange={() => setPay("paypal")} />
              </div>
              {pay === "card" && (
                <div className="mt-4 space-y-3 rounded-2xl border border-ink/10 bg-background p-4">
                  <Field label="Număr card" placeholder="1234 5678 9012 3456" />
                  <div className="grid grid-cols-2 gap-3">
                    <Field label="Expirare" placeholder="LL/AA" />
                    <Field label="CVC" placeholder="123" />
                  </div>
                  <Field label="Nume pe card" placeholder="ADELLE NIKOLAUS" />
                </div>
              )}
            </Section>

            <button
              type="submit"
              className="flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-4 font-semibold text-primary-foreground transition hover:bg-primary/90"
            >
              <Lock className="size-4" /> Plătește · {RON(total)}
            </button>
            <p className="text-center text-[10px] uppercase tracking-widest text-muted-foreground">
              Prin plasarea comenzii accepți <Link to="/legal/termeni" className="text-primary underline">Termenii</Link>.
            </p>
          </form>

          {/* Order summary */}
          <aside className="h-fit rounded-3xl border border-ink/10 bg-card p-6 md:sticky md:top-24">
            <div className="mb-4 font-marker text-primary">→ comanda ta</div>
            {!mounted ? (
              <div className="text-muted-foreground">Se încarcă…</div>
            ) : lines.length === 0 ? (
              <div className="text-muted-foreground">Coșul este gol. <Link to="/" className="text-primary underline">Adaugă produse</Link>.</div>
            ) : (
              <div className="space-y-3">
                {lines.map((l) => {
                  const p = getProduct(l.slug);
                  if (!p) return null;
                  return (
                    <div key={l.slug + l.size} className="flex gap-3">
                      <div className="relative h-16 w-14 shrink-0 overflow-hidden rounded-lg bg-muted">
                        <img src={p.img} alt={p.name} className="h-full w-full object-cover" />
                        <span className="absolute -right-1 -top-1 grid size-5 place-items-center rounded-full bg-ink text-[10px] font-bold text-paper">{l.qty}</span>
                      </div>
                      <div className="flex flex-1 items-start justify-between text-sm">
                        <div>
                          <div className="font-semibold leading-tight">{p.name}</div>
                          <div className="text-xs text-muted-foreground">{sizeLabel(p.type)} {l.size}</div>
                        </div>
                        <div className="font-display">{RON(p.price * l.qty)}</div>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
            <div className="mt-5 border-t border-dashed border-ink/20 pt-4">
              <dl className="space-y-2 text-sm">
                <div className="flex justify-between"><dt className="text-muted-foreground">Subtotal</dt><dd className="font-display">{RON(subtotal)}</dd></div>
                <div className="flex justify-between"><dt className="text-muted-foreground">Transport</dt><dd className="font-display">{shipping === 0 ? "Gratuit" : RON(shipping)}</dd></div>
                <div className="mt-3 flex items-baseline justify-between border-t border-dashed border-ink/30 pt-3">
                  <dt className="font-display text-lg">Total</dt>
                  <dd className="font-display text-2xl text-primary">{RON(total)}</dd>
                </div>
              </dl>
            </div>
            <div className="mt-4 flex items-center gap-2 rounded-2xl bg-background p-3 text-xs text-muted-foreground">
              <Truck className="size-4 text-primary" /> Livrare gratuită peste 200 RON.
            </div>
          </aside>
        </div>
      </section>
    </PageShell>
  );
}

function Section({ step, title, children }: { step: string; title: string; children: React.ReactNode }) {
  return (
    <div className="rounded-3xl border border-ink/10 bg-card p-6 md:p-8">
      <div className="mb-4 flex items-baseline gap-3">
        <span className="font-marker text-primary">→ {step}</span>
        <h2 className="font-display text-2xl">{title}</h2>
      </div>
      <div className="space-y-3">{children}</div>
    </div>
  );
}

function Field({ label, ...rest }: { label: string } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <label className="block">
      <span className="text-xs uppercase tracking-widest text-muted-foreground">{label}</span>
      <input
        {...rest}
        className="mt-1 w-full rounded-xl border border-ink/15 bg-background px-4 py-3 text-sm outline-none transition focus:border-primary"
      />
    </label>
  );
}

function Radio({ name, label, value, defaultChecked, checked, onChange }: { name: string; label: string; value: string; defaultChecked?: boolean; checked?: boolean; onChange?: () => void }) {
  return (
    <label className="flex items-center justify-between gap-3 rounded-2xl border border-ink/15 bg-background p-4 text-sm has-[:checked]:border-primary has-[:checked]:bg-primary/5">
      <span className="flex items-center gap-3">
        <input type="radio" name={name} defaultChecked={defaultChecked} checked={checked} onChange={onChange} className="accent-primary" />
        <span className="font-semibold">{label}</span>
      </span>
      <span className="text-muted-foreground">{value}</span>
    </label>
  );
}
