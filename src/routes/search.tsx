import { createFileRoute, Link } from "@tanstack/react-router";
import { Search as SearchIcon } from "lucide-react";
import { z } from "zod";
import { PageShell } from "@/components/site/PageShell";
import { ProductCard } from "@/components/site/ProductCard";
import { PRODUCTS } from "@/lib/room119-data";

const searchSchema = z.object({ q: z.string().optional().default("") });

export const Route = createFileRoute("/search")({
  validateSearch: searchSchema,
  head: () => ({
    meta: [
      { title: "Caută — Room 119" },
      { name: "description", content: "Caută postere, printuri și artă purtabilă în catalogul Room 119." },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: SearchPage,
});

function SearchPage() {
  const { q } = Route.useSearch();
  const term = q.trim().toLowerCase();
  const results = term
    ? PRODUCTS.filter((p) => [p.name, p.tag, p.description, p.category].join(" ").toLowerCase().includes(term))
    : [];

  return (
    <PageShell hideNewsletter>
      <section className="mx-auto max-w-[1400px] px-4 py-14 md:px-8 md:py-20">
        <div className="mb-8">
          <div className="font-marker text-primary">→ căutare</div>
          <h1 className="font-display text-5xl md:text-7xl">{term ? <>Rezultate pentru <span className="text-primary">„{q}"</span></> : "Ce cauți?"}</h1>
        </div>

        <form action="/search" method="get" className="mb-10 flex max-w-xl items-center gap-2 rounded-full border border-ink/20 bg-card p-2">
          <SearchIcon className="ml-3 size-4 text-muted-foreground" />
          <input
            name="q"
            defaultValue={q}
            placeholder="Ex: blush, monochrome, red flags…"
            className="flex-1 bg-transparent px-2 py-2 text-sm outline-none"
          />
          <button className="rounded-full bg-primary px-5 py-2 text-sm font-semibold text-primary-foreground">Caută</button>
        </form>

        {term && (
          <div className="mb-6 text-sm text-muted-foreground">{results.length} rezultate</div>
        )}

        {term && results.length === 0 ? (
          <div className="rounded-3xl border border-dashed border-ink/20 bg-card p-12 text-center">
            <div className="font-display text-3xl">Nimic găsit.</div>
            <p className="mt-2 text-muted-foreground">Încearcă alt cuvânt sau răsfoiește categoriile.</p>
            <Link to="/" className="mt-6 inline-block rounded-full bg-primary px-6 py-3 font-semibold text-primary-foreground">Înapoi acasă</Link>
          </div>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {results.map((p, i) => (
              <ProductCard key={p.slug} product={p} index={i} />
            ))}
          </div>
        )}
      </section>
    </PageShell>
  );
}
