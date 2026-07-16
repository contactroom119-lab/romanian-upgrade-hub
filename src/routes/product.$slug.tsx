import { createFileRoute, notFound, Link } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowLeft, Check, Minus, Plus, Truck, ShieldCheck, RefreshCw } from "lucide-react";
import { PageShell } from "@/components/page-shell";
import { ProductCard } from "@/components/product-card";
import { getCategory, getProduct, PRODUCTS, SIZES } from "@/data/catalog";
import { formatRON, useCart } from "@/lib/cart";

export const Route = createFileRoute("/product/$slug")({
  loader: ({ params }) => {
    const product = getProduct(params.slug);
    if (!product) throw notFound();
    const category = getCategory(product.category)!;
    const related = PRODUCTS.filter(
      (p) => p.category === product.category && p.slug !== product.slug,
    ).slice(0, 4);
    return { product, category, related };
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.product.name} — Room 119` },
          { name: "description", content: loaderData.product.description },
          { property: "og:title", content: `${loaderData.product.name} — Room 119` },
          { property: "og:description", content: loaderData.product.description },
          { property: "og:image", content: loaderData.product.img },
        ]
      : [{ title: "Product — Room 119" }],
  }),
  component: ProductPage,
  notFoundComponent: () => (
    <PageShell>
      <div className="mx-auto max-w-2xl px-4 py-32 text-center">
        <h1 className="font-display text-5xl">Poster not found</h1>
        <p className="mt-4 text-muted-foreground">This one might've sold out or moved rooms.</p>
        <Link to="/shop" className="mt-6 inline-flex rounded-full bg-primary px-6 py-3 font-semibold text-primary-foreground">
          Back to shop
        </Link>
      </div>
    </PageShell>
  ),
});

function ProductPage() {
  const { product, category, related } = Route.useLoaderData();
  const cart = useCart();
  const [size, setSize] = useState(SIZES[0].id);
  const [qty, setQty] = useState(1);
  const [added, setAdded] = useState(false);

  const sizeObj = SIZES.find((s) => s.id === size)!;
  const finalPrice = product.price + sizeObj.modifier;

  return (
    <PageShell marquee={false}>
      <div className="mx-auto max-w-[1400px] px-4 pt-8 md:px-8">
        <nav className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-muted-foreground">
          <Link to="/" className="link-reveal">Home</Link>
          <span>/</span>
          <Link to="/shop" className="link-reveal">Shop</Link>
          <span>/</span>
          <Link to="/category/$slug" params={{ slug: category.slug }} className="link-reveal">
            {category.name}
          </Link>
          <span>/</span>
          <span className="text-foreground">{product.name}</span>
        </nav>
      </div>

      <section className="mx-auto grid max-w-[1400px] gap-12 px-4 py-10 md:grid-cols-[1.1fr_1fr] md:px-8 md:py-16">
        {/* Gallery */}
        <div>
          <div className="relative overflow-hidden rounded-2xl bg-muted shadow-[var(--shadow-poster)]">
            <div className="grainy relative aspect-[3/4]">
              <img
                src={product.img}
                alt={product.name}
                className="h-full w-full object-cover"
              />
              <span className="absolute left-4 top-4 rounded-full bg-primary px-3 py-1 font-display text-xs uppercase tracking-widest text-primary-foreground">
                {category.name}
              </span>
            </div>
          </div>
          <div className="mt-4 grid grid-cols-4 gap-3">
            {[0, 1, 2, 3].map((k) => (
              <div key={k} className="aspect-square overflow-hidden rounded-xl border border-ink/10 bg-card">
                <img src={product.img} alt="" className="h-full w-full object-cover opacity-80" />
              </div>
            ))}
          </div>
        </div>

        {/* Detail */}
        <div className="md:pt-4">
          <Link
            to="/category/$slug"
            params={{ slug: category.slug }}
            className="mb-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground hover:text-foreground"
          >
            <ArrowLeft className="size-3" /> {category.name}
          </Link>
          <div className="font-marker text-sm text-primary">{product.tag}</div>
          <h1 className="mt-2 font-display text-4xl leading-[0.95] md:text-6xl">{product.name}</h1>
          <div className="mt-4 font-display text-3xl">{formatRON(finalPrice)}</div>
          <p className="mt-6 text-base text-muted-foreground">{product.description}</p>

          <div className="mt-8">
            <div className="mb-3 text-xs font-semibold uppercase tracking-[0.2em]">Size</div>
            <div className="flex flex-wrap gap-2">
              {SIZES.map((s) => (
                <button
                  key={s.id}
                  onClick={() => setSize(s.id)}
                  className={`rounded-xl border px-4 py-3 text-left transition ${
                    size === s.id
                      ? "border-ink bg-ink text-paper"
                      : "border-ink/20 bg-card hover:border-ink/50"
                  }`}
                >
                  <div className="font-display text-sm">{s.label}</div>
                  <div className="text-xs opacity-70">
                    {s.modifier === 0 ? "included" : `+RON ${s.modifier}`}
                  </div>
                </button>
              ))}
            </div>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <div className="inline-flex items-center gap-1 rounded-full border border-ink/20 bg-card p-1">
              <button
                onClick={() => setQty((q) => Math.max(1, q - 1))}
                className="grid size-9 place-items-center rounded-full hover:bg-muted"
                aria-label="Decrease quantity"
              >
                <Minus className="size-4" />
              </button>
              <span className="w-8 text-center font-display">{qty}</span>
              <button
                onClick={() => setQty((q) => q + 1)}
                className="grid size-9 place-items-center rounded-full hover:bg-muted"
                aria-label="Increase quantity"
              >
                <Plus className="size-4" />
              </button>
            </div>
            <button
              onClick={() => {
                cart.add({ slug: product.slug, size, qty });
                setAdded(true);
                setTimeout(() => setAdded(false), 1600);
              }}
              className="flex-1 rounded-full bg-primary px-6 py-3.5 font-semibold text-primary-foreground transition hover:bg-primary/90"
            >
              {added ? (
                <span className="inline-flex items-center gap-2 justify-center">
                  <Check className="size-4" /> Added to cart
                </span>
              ) : (
                `Add to cart — ${formatRON(finalPrice * qty)}`
              )}
            </button>
          </div>

          <div className="mt-10 grid gap-3 sm:grid-cols-3">
            <Perk icon={<Truck className="size-4" />} label="Ships in 48h from RO" />
            <Perk icon={<ShieldCheck className="size-4" />} label="Museum-grade print" />
            <Perk icon={<RefreshCw className="size-4" />} label="14-day returns" />
          </div>

          <details className="mt-8 rounded-2xl border border-ink/10 bg-card p-5">
            <summary className="cursor-pointer font-display text-sm uppercase tracking-[0.15em]">
              Print details
            </summary>
            <div className="mt-3 space-y-1 text-sm text-muted-foreground">
              <p>200gsm matte fine art paper.</p>
              <p>Fade-resistant archival inks, no framing included.</p>
              <p>Signed on the back on request.</p>
            </div>
          </details>
          <details className="mt-3 rounded-2xl border border-ink/10 bg-card p-5">
            <summary className="cursor-pointer font-display text-sm uppercase tracking-[0.15em]">
              Shipping & returns
            </summary>
            <div className="mt-3 space-y-1 text-sm text-muted-foreground">
              <p>Ships from Romania within 48 hours.</p>
              <p>14-day return window on unused prints.</p>
              <p>
                See <Link to="/shipping" className="link-reveal font-semibold text-foreground">shipping</Link> and{" "}
                <Link to="/returns" className="link-reveal font-semibold text-foreground">returns</Link>.
              </p>
            </div>
          </details>
        </div>
      </section>

      {/* Related */}
      {related.length > 0 && (
        <section className="mx-auto max-w-[1400px] px-4 pb-24 md:px-8">
          <h2 className="mb-8 font-display text-3xl md:text-5xl">
            More from <span className="text-primary">{category.name}</span>
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {related.map((p, i) => (
              <ProductCard key={p.slug} product={p} index={i} />
            ))}
          </div>
        </section>
      )}
    </PageShell>
  );
}

function Perk({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <div className="flex items-center gap-2 rounded-xl border border-ink/10 bg-card px-3 py-2 text-xs">
      <span className="text-primary">{icon}</span>
      <span className="font-semibold">{label}</span>
    </div>
  );
}
