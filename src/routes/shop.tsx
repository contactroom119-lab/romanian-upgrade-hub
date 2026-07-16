import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { PageShell, PageHeader } from "@/components/page-shell";
import { ProductCard } from "@/components/product-card";
import { CATEGORIES, PRODUCTS, type CategorySlug } from "@/data/catalog";

export const Route = createFileRoute("/shop")({
  component: ShopPage,
  head: () => ({
    meta: [
      { title: "Shop — Room 119" },
      { name: "description", content: "Every Room 119 poster and print in one place. Filter by category and find your next wall statement." },
    ],
  }),
});

function ShopPage() {
  const [active, setActive] = useState<CategorySlug | "all">("all");
  const items = active === "all" ? PRODUCTS : PRODUCTS.filter((p) => p.category === active);

  return (
    <PageShell>
      <PageHeader
        eyebrow="/ shop everything"
        title={
          <>
            The whole <span className="text-primary">room.</span>
          </>
        }
        description="Every poster we print, in one scroll. Filter by mood, size up on the product page, done."
      />

      <section className="mx-auto max-w-[1400px] px-4 py-10 md:px-8">
        <div className="mb-8 flex flex-wrap gap-2">
          <FilterPill active={active === "all"} onClick={() => setActive("all")}>
            All
          </FilterPill>
          {CATEGORIES.map((c) => (
            <FilterPill key={c.slug} active={active === c.slug} onClick={() => setActive(c.slug)}>
              {c.name}
            </FilterPill>
          ))}
        </div>

        {items.length === 0 ? (
          <div className="rounded-2xl border border-dashed border-ink/20 bg-card p-10 text-center">
            <p className="font-marker text-lg">Nothing here yet — check back soon.</p>
          </div>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {items.map((p, i) => (
              <ProductCard key={p.slug} product={p} index={i} />
            ))}
          </div>
        )}

        <div className="mt-16 text-center text-sm text-muted-foreground">
          Looking for something we don't have?{" "}
          <Link to="/custom" className="link-reveal font-semibold text-foreground">
            Start a custom order
          </Link>
          .
        </div>
      </section>
    </PageShell>
  );
}

function FilterPill({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      onClick={onClick}
      className={`rounded-full border px-4 py-2 text-sm font-semibold uppercase tracking-[0.15em] transition ${
        active
          ? "border-ink bg-ink text-paper"
          : "border-ink/20 bg-card hover:border-ink/50"
      }`}
    >
      {children}
    </button>
  );
}
