import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { PageShell } from "@/components/page-shell";
import { ProductCard } from "@/components/product-card";
import { CATEGORIES, PRODUCTS, productsInCategory } from "@/data/catalog";

export const Route = createFileRoute("/")({
  component: HomePage,
  head: () => ({
    meta: [
      { title: "Room 119 — Art You Can Wear, Hang, Live In" },
      {
        name: "description",
        content:
          "Posters, prints and wearable art from Room 119. Printed with care in Romania — make space for chaos, calm, and everything in between.",
      },
      {
        property: "og:image",
        content:
          "https://static.wixstatic.com/media/80218c_37a2ff7ff4e64576928c7cb745615567~mv2.png",
      },
    ],
  }),
});

const HERO_VIDEO =
  "https://video.wixstatic.com/video/80218c_bae0ed957dbd41d8b641c3763345dc1f/1080p/mp4/file.mp4";

function HomePage() {
  const featured = productsInCategory("in-a-blush-state");
  const more = PRODUCTS.slice(0, 4);

  return (
    <PageShell>
      {/* ── HERO ──────────────────────────────────────────────────── */}
      <section className="relative">
        <div className="relative h-[78vh] min-h-[520px] w-full overflow-hidden bg-ink">
          <video
            src={HERO_VIDEO}
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/25 to-ink/10" />

          <div className="relative mx-auto flex h-full max-w-[1400px] flex-col justify-end px-4 pb-14 md:px-10 md:pb-20">
            <div className="max-w-2xl text-paper">
              <div className="mb-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.28em] text-paper/80">
                <span className="size-1.5 rounded-full bg-primary" />
                New season · Room 119
              </div>
              <h1 className="font-display text-[13vw] leading-[0.9] md:text-[7.5rem]">
                Make space<br />
                for <em className="font-marker not-italic text-primary">everything</em>.
              </h1>
              <p className="mt-5 max-w-lg text-base text-paper/80 md:text-lg">
                Posters, prints and wearable art. Printed with care in Romania.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  to="/shop"
                  className="inline-flex items-center gap-2 rounded-full bg-paper px-6 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-ink transition hover:bg-primary hover:text-primary-foreground"
                >
                  Shop all
                </Link>
                <Link
                  to="/category/$slug"
                  params={{ slug: "in-a-blush-state" }}
                  className="inline-flex items-center gap-2 rounded-full border border-paper/40 px-6 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-paper transition hover:bg-paper hover:text-ink"
                >
                  Bestsellers
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── COLLECTION LIST : GRID ───────────────────────────────── */}
      <section className="mx-auto max-w-[1400px] px-4 py-20 md:px-10 md:py-28">
        <div className="mb-10 flex items-end justify-between gap-6">
          <div>
            <div className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-muted-foreground">
              Collections
            </div>
            <h2 className="font-display text-4xl leading-[0.95] md:text-6xl">
              Shop by collection
            </h2>
          </div>
          <Link
            to="/shop"
            className="hidden items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] md:inline-flex"
          >
            View all <ArrowUpRight className="size-4" />
          </Link>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {CATEGORIES.map((c) => (
            <Link
              key={c.slug}
              to="/category/$slug"
              params={{ slug: c.slug }}
              className="group relative flex flex-col overflow-hidden rounded-xl bg-card"
            >
              <div className="relative aspect-[4/5] overflow-hidden bg-muted">
                <img
                  src={c.img}
                  alt={c.name}
                  loading="lazy"
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.04]"
                />
              </div>
              <div className="flex items-center justify-between gap-3 pt-4">
                <div>
                  <div className="font-display text-xl leading-none">{c.name}</div>
                  <div className="mt-1.5 text-xs uppercase tracking-[0.2em] text-muted-foreground">
                    {c.tagline}
                  </div>
                </div>
                <ArrowUpRight className="size-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ── FEATURED COLLECTION ──────────────────────────────────── */}
      <section className="border-t border-ink/10 bg-card">
        <div className="mx-auto max-w-[1400px] px-4 py-20 md:px-10 md:py-28">
          <div className="mb-10 flex items-end justify-between gap-6">
            <div>
              <div className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-primary">
                Featured
              </div>
              <h2 className="font-display text-4xl leading-[0.95] md:text-6xl">
                In a Blush State
              </h2>
              <p className="mt-3 max-w-lg text-sm text-muted-foreground md:text-base">
                Soft riot, pink noise — our best-loved series, printed in limited runs.
              </p>
            </div>
            <Link
              to="/category/$slug"
              params={{ slug: "in-a-blush-state" }}
              className="hidden items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] md:inline-flex"
            >
              View collection <ArrowUpRight className="size-4" />
            </Link>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {featured.map((p, i) => (
              <ProductCard key={p.slug} product={p} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ── EDITORIAL SPLIT ──────────────────────────────────────── */}
      <section className="mx-auto max-w-[1400px] px-4 py-20 md:px-10 md:py-28">
        <div className="grid gap-10 md:grid-cols-2 md:gap-16">
          <div className="relative aspect-[4/5] overflow-hidden rounded-xl bg-ink">
            <video
              src={HERO_VIDEO}
              autoPlay
              muted
              loop
              playsInline
              className="h-full w-full object-cover"
            />
          </div>
          <div className="flex flex-col justify-center">
            <div className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-muted-foreground">
              The studio
            </div>
            <h2 className="font-display text-4xl leading-[0.95] md:text-6xl">
              Your space.<br />
              <em className="font-marker not-italic text-primary">Your rules.</em>
            </h2>
            <p className="mt-6 max-w-lg text-base text-muted-foreground md:text-lg">
              Room 119 is a small print studio in Romania. We make posters and wearable
              art that give a room — or an outfit — a bit of personality. Everything's
              printed to order, on good paper, with heavy ink.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/about"
                className="inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-paper transition hover:bg-primary hover:text-primary-foreground"
              >
                Our story
              </Link>
              <Link
                to="/custom"
                className="inline-flex items-center gap-2 rounded-full border border-ink/20 px-6 py-3 text-sm font-semibold uppercase tracking-[0.18em] transition hover:bg-ink hover:text-paper"
              >
                Custom orders
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── MORE PRODUCTS ────────────────────────────────────────── */}
      <section className="border-t border-ink/10">
        <div className="mx-auto max-w-[1400px] px-4 py-20 md:px-10 md:py-28">
          <div className="mb-10 flex items-end justify-between gap-6">
            <div>
              <div className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-muted-foreground">
                Latest
              </div>
              <h2 className="font-display text-4xl leading-[0.95] md:text-6xl">
                New arrivals
              </h2>
            </div>
            <Link
              to="/shop"
              className="hidden items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] md:inline-flex"
            >
              Shop all <ArrowUpRight className="size-4" />
            </Link>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {more.map((p, i) => (
              <ProductCard key={p.slug} product={p} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ── NEWSLETTER STRIP ─────────────────────────────────────── */}
      <section className="bg-ink text-paper">
        <div className="mx-auto grid max-w-[1400px] gap-8 px-4 py-16 md:grid-cols-[1.2fr_1fr] md:items-end md:px-10 md:py-20">
          <div>
            <div className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-primary">
              Newsletter
            </div>
            <h2 className="font-display text-4xl leading-[0.95] md:text-6xl">
              Get first dibs on new drops.
            </h2>
          </div>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex w-full items-center gap-2 border-b border-paper/30 pb-3"
          >
            <input
              type="email"
              placeholder="your@email.com"
              className="flex-1 bg-transparent text-lg outline-none placeholder:text-paper/40"
            />
            <button
              type="submit"
              className="rounded-full bg-primary px-5 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-primary-foreground transition hover:bg-paper hover:text-ink"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </PageShell>
  );
}
