import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { PageShell } from "@/components/site/PageShell";
import { ProductCard } from "@/components/site/ProductCard";
import { CATEGORIES, getCategory, productsByCategory, PRODUCTS } from "@/lib/room119-data";

export const Route = createFileRoute("/category/$slug")({
  loader: ({ params }) => {
    const category = getCategory(params.slug);
    if (!category) throw notFound();
    const products = productsByCategory(params.slug);
    return { category, products };
  },
  head: ({ loaderData }) => {
    if (!loaderData) return { meta: [{ title: "Categorie indisponibilă — Room 119" }, { name: "robots", content: "noindex" }] };
    const c = loaderData.category;
    return {
      meta: [
        { title: `${c.name} — Room 119` },
        { name: "description", content: c.description },
        { property: "og:title", content: `${c.name} — Room 119` },
        { property: "og:description", content: c.description },
        { property: "og:image", content: c.img },
        { name: "twitter:image", content: c.img },
      ],
    };
  },
  component: CategoryPage,
  notFoundComponent: () => (
    <PageShell hideNewsletter>
      <section className="mx-auto max-w-[900px] px-4 py-24 text-center md:px-8">
        <h1 className="font-display text-5xl md:text-7xl">Categorie inexistentă</h1>
        <Link to="/" className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 font-semibold text-primary-foreground">
          Înapoi acasă
        </Link>
      </section>
    </PageShell>
  ),
});

function CategoryPage() {
  const { category, products } = Route.useLoaderData();
  const list = products.length ? products : PRODUCTS;

  return (
    <PageShell hideNewsletter>
      <section className="relative overflow-hidden border-b border-ink/10 bg-ink text-paper">
        <img src={category.img} alt="" className="absolute inset-0 h-full w-full object-cover opacity-25" />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/40 via-ink/60 to-ink" />
        <div className="relative mx-auto max-w-[1400px] px-4 py-20 md:px-8 md:py-28">
          <div className="mb-3 font-marker text-primary">Categorie</div>
          <h1 className="font-display text-6xl leading-[0.9] md:text-9xl">{category.name.toUpperCase()}</h1>
          <p className="mt-4 max-w-2xl text-lg text-paper/80">{category.description}</p>
          <div className="mt-6 flex flex-wrap gap-2">
            {CATEGORIES.map((c) => (
              <Link
                key={c.slug}
                to="/category/$slug"
                params={{ slug: c.slug }}
                className={`rounded-full border px-4 py-1.5 text-xs uppercase tracking-widest transition ${
                  c.slug === category.slug ? "border-primary bg-primary text-primary-foreground" : "border-paper/30 hover:border-paper"
                }`}
              >
                {c.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1400px] px-4 py-16 md:px-8 md:py-20">
        <div className="mb-8 flex items-end justify-between">
          <div className="text-sm text-muted-foreground">{list.length} produse</div>
          <select className="rounded-full border border-ink/20 bg-card px-4 py-2 text-sm">
            <option>Recomandate</option>
            <option>Preț crescător</option>
            <option>Preț descrescător</option>
            <option>Noutăți</option>
          </select>
        </div>
        {list.length === 0 ? (
          <div className="rounded-2xl border border-dashed border-ink/20 bg-card p-12 text-center">
            <div className="font-marker text-primary">Gol pentru moment</div>
            <div className="mt-2 font-display text-2xl">Nimic în categoria asta încă</div>
            <Link to="/" className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-primary">Vezi restul <ArrowUpRight className="size-4" /></Link>
          </div>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {list.map((p: typeof PRODUCTS[number], i: number) => (
              <ProductCard key={p.slug} product={p} index={i} />
            ))}
          </div>
        )}
      </section>
    </PageShell>
  );
}
