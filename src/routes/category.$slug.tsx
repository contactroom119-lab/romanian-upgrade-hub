import { createFileRoute, notFound, Link } from "@tanstack/react-router";
import { PageShell, PageHeader } from "@/components/page-shell";
import { ProductCard } from "@/components/product-card";
import { getCategory, productsInCategory } from "@/data/catalog";

export const Route = createFileRoute("/category/$slug")({
  loader: ({ params }) => {
    const cat = getCategory(params.slug);
    if (!cat) throw notFound();
    return { cat, items: productsInCategory(params.slug) };
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.cat.name} — Room 119` },
          { name: "description", content: `${loaderData.cat.name}: ${loaderData.cat.tagline}. Shop the ${loaderData.cat.name.toLowerCase()} collection at Room 119.` },
          { property: "og:image", content: loaderData.cat.img },
        ]
      : [{ title: "Category — Room 119" }],
  }),
  component: CategoryPage,
  notFoundComponent: () => (
    <PageShell>
      <div className="mx-auto max-w-2xl px-4 py-32 text-center">
        <h1 className="font-display text-5xl">Category not found</h1>
        <p className="mt-4 text-muted-foreground">That collection doesn't exist (yet).</p>
        <Link to="/shop" className="mt-6 inline-flex rounded-full bg-primary px-6 py-3 font-semibold text-primary-foreground">
          Back to shop
        </Link>
      </div>
    </PageShell>
  ),
});

function CategoryPage() {
  const { cat, items } = Route.useLoaderData();

  return (
    <PageShell>
      <PageHeader
        eyebrow={`/ collection · 0${["monochrome","in-a-blush-state","red-flags-only","all-the-things"].indexOf(cat.slug)+1}`}
        title={
          <>
            {cat.name.split(" ").slice(0, -1).join(" ")}{" "}
            <span className="text-primary">{cat.name.split(" ").slice(-1)}</span>
          </>
        }
        description={cat.tagline}
      />

      <section className="mx-auto max-w-[1400px] px-4 py-16 md:px-8">
        {items.length === 0 ? (
          <div className="rounded-2xl border border-dashed border-ink/20 bg-card p-10 text-center">
            <p className="font-marker text-lg">Restocking soon — check the shop for what's live.</p>
            <Link to="/shop" className="mt-4 inline-flex rounded-full bg-ink px-5 py-2 text-sm font-semibold text-paper">
              Browse shop
            </Link>
          </div>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {items.map((p: (typeof items)[number], i: number) => (
              <ProductCard key={p.slug} product={p} index={i} />
            ))}
          </div>
        )}
      </section>
    </PageShell>
  );
}
