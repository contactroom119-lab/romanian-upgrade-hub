import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, Check, Minus, Plus, ShoppingBag, Truck, RefreshCw, Shield } from "lucide-react";
import { useState } from "react";
import { PageShell } from "@/components/site/PageShell";
import { ProductCard } from "@/components/site/ProductCard";
import { getProduct, productsByCategory, getCategory, SIZES, SIZE_MULT, RON, PRODUCTS } from "@/lib/room119-data";
import { addToCart } from "@/lib/cart-store";

export const Route = createFileRoute("/product/$slug")({
  loader: ({ params }) => {
    const product = getProduct(params.slug);
    if (!product) throw notFound();
    return { product };
  },
  head: ({ loaderData }) => {
    if (!loaderData) return { meta: [{ title: "Produs indisponibil — Room 119" }, { name: "robots", content: "noindex" }] };
    const p = loaderData.product;
    return {
      meta: [
        { title: `${p.name} — Room 119` },
        { name: "description", content: p.description },
        { property: "og:title", content: `${p.name} — Room 119` },
        { property: "og:description", content: p.description },
        { property: "og:image", content: p.img },
        { name: "twitter:image", content: p.img },
      ],
    };
  },
  component: ProductPage,
  notFoundComponent: () => (
    <PageShell hideNewsletter>
      <section className="mx-auto max-w-[900px] px-4 py-24 text-center md:px-8">
        <div className="font-marker text-primary">404</div>
        <h1 className="font-display text-5xl md:text-7xl">Produs inexistent</h1>
        <p className="mt-4 text-muted-foreground">Posterul ăsta s-a mutat sau nu a existat niciodată.</p>
        <Link to="/" className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 font-semibold text-primary-foreground">
          Înapoi acasă
        </Link>
      </section>
    </PageShell>
  ),
});

function ProductPage() {
  const { product } = Route.useLoaderData();
  const [size, setSize] = useState<(typeof SIZES)[number]>("A3");
  const [qty, setQty] = useState(1);
  const [added, setAdded] = useState(false);

  const price = product.price * SIZE_MULT[size];
  const cat = getCategory(product.category);
  const related = productsByCategory(product.category).filter((p) => p.slug !== product.slug).slice(0, 4);
  const fallback = related.length ? related : PRODUCTS.filter((p) => p.slug !== product.slug).slice(0, 4);

  const onAdd = () => {
    addToCart(product.slug, size, qty);
    setAdded(true);
    setTimeout(() => setAdded(false), 1800);
  };

  return (
    <PageShell hideNewsletter>
      <div className="mx-auto max-w-[1400px] px-4 pt-6 md:px-8">
        <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-muted-foreground">
          <Link to="/" className="hover:text-primary">Acasă</Link>
          <span>/</span>
          {cat && (
            <>
              <Link to="/category/$slug" params={{ slug: cat.slug }} className="hover:text-primary">{cat.name}</Link>
              <span>/</span>
            </>
          )}
          <span className="text-foreground">{product.name}</span>
        </div>
      </div>

      <section className="mx-auto grid max-w-[1400px] gap-12 px-4 py-10 md:grid-cols-[1.1fr_1fr] md:px-8 md:py-16">
        <div className="relative">
          <div className="poster relative overflow-hidden rounded-3xl bg-card p-4 shadow-[var(--shadow-poster)]" style={{ transform: "rotate(-1.5deg)" }}>
            <div className="relative aspect-[3/4] overflow-hidden rounded-2xl bg-muted">
              <img src={product.img} alt={product.name} className="h-full w-full object-cover" />
              <span className="absolute left-4 top-4 rounded-full bg-primary px-3 py-1 font-display text-xs uppercase tracking-widest text-primary-foreground">No {product.no}</span>
            </div>
            <span className="tape absolute inset-x-0" />
          </div>
          <div className="sticker absolute -bottom-6 right-4 rotate-6 rounded-full border-2 border-ink bg-paper px-4 py-1 font-marker text-sm">printed in RO</div>
        </div>

        <div className="flex flex-col justify-center">
          <div className="font-marker text-sm text-primary">{product.tag}</div>
          <h1 className="mt-2 font-display text-5xl leading-[0.9] md:text-7xl">{product.name}</h1>
          <div className="mt-4 font-display text-3xl">{RON(price)}</div>
          <p className="mt-6 max-w-lg text-muted-foreground">{product.description}</p>

          <div className="mt-8">
            <div className="mb-2 text-xs font-semibold uppercase tracking-[0.2em]">Format</div>
            <div className="flex gap-2">
              {SIZES.map((s) => (
                <button
                  key={s}
                  onClick={() => setSize(s)}
                  className={`rounded-full border px-4 py-2 font-display text-sm transition ${
                    size === s ? "border-primary bg-primary text-primary-foreground" : "border-ink/20 bg-card hover:border-ink/50"
                  }`}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-6 flex items-center gap-3">
            <div className="flex items-center rounded-full border border-ink/20 bg-card">
              <button onClick={() => setQty((q) => Math.max(1, q - 1))} className="p-3 hover:text-primary" aria-label="Minus"><Minus className="size-4" /></button>
              <span className="w-8 text-center font-display">{qty}</span>
              <button onClick={() => setQty((q) => q + 1)} className="p-3 hover:text-primary" aria-label="Plus"><Plus className="size-4" /></button>
            </div>
            <button
              onClick={onAdd}
              className="group inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 font-semibold text-primary-foreground transition hover:bg-primary/90"
            >
              {added ? <><Check className="size-4" /> Adăugat</> : <><ShoppingBag className="size-4" /> Adaugă în coș · {RON(price * qty)}</>}
            </button>
          </div>

          <div className="mt-8 grid gap-3 text-sm md:grid-cols-3">
            <div className="flex items-center gap-2 rounded-xl border border-ink/10 bg-card p-3"><Truck className="size-4 text-primary" /> Livrare 2–4 zile</div>
            <div className="flex items-center gap-2 rounded-xl border border-ink/10 bg-card p-3"><RefreshCw className="size-4 text-primary" /> Retur 14 zile</div>
            <div className="flex items-center gap-2 rounded-xl border border-ink/10 bg-card p-3"><Shield className="size-4 text-primary" /> Plată securizată</div>
          </div>

          <details className="mt-6 rounded-xl border border-ink/10 bg-card p-4">
            <summary className="cursor-pointer font-display text-sm uppercase tracking-widest">Detalii & materiale</summary>
            <ul className="mt-3 space-y-1 text-sm text-muted-foreground">
              <li>· Hârtie mată premium 250 g/mp, certificată FSC</li>
              <li>· Cerneluri pigmentate, rezistente la lumină</li>
              <li>· Tipărit și expediat din București</li>
              <li>· Ramă neinclusă (dar arată bine goală pe perete)</li>
            </ul>
          </details>
        </div>
      </section>

      <section className="border-t border-ink/10 bg-ink py-16 text-paper">
        <div className="mx-auto max-w-[1400px] px-4 md:px-8">
          <div className="mb-8 flex items-end justify-between">
            <h2 className="font-display text-3xl md:text-5xl">Poate îți plac și <span className="text-primary">astea</span></h2>
            <Link to="/" className="link-reveal hidden text-xs uppercase tracking-[0.2em] md:inline"><ArrowLeft className="mr-1 inline size-3" /> Înapoi</Link>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {fallback.map((p, i) => (
              <ProductCard key={p.slug} product={p} index={i} />
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
}
