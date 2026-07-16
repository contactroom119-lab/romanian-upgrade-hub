import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { PageShell } from "@/components/page-shell";
import { Marquee } from "@/components/marquee";
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
      { property: "og:image", content: "https://static.wixstatic.com/media/80218c_37a2ff7ff4e64576928c7cb745615567~mv2.png" },
    ],
  }),
});

const HERO_VIDEO = "https://video.wixstatic.com/video/80218c_bae0ed957dbd41d8b641c3763345dc1f/1080p/mp4/file.mp4";

function HomePage() {
  const blush = productsInCategory("in-a-blush-state");
  const featured = PRODUCTS.slice(0, 4);

  return (
    <PageShell>
      {/* HERO */}
      <section id="top" className="relative overflow-hidden">
        <div className="absolute inset-0">
          <video
            src={HERO_VIDEO}
            autoPlay
            muted
            loop
            playsInline
            className="h-full w-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/70 to-background" />
        </div>

        <div className="relative mx-auto grid max-w-[1400px] gap-10 px-4 pb-16 pt-20 md:grid-cols-[1.1fr_1fr] md:gap-16 md:px-8 md:pt-28">
          <div className="flex flex-col justify-center">
            <div className="mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-ink/15 bg-card px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em]">
              <span className="size-2 rounded-full bg-primary animate-pulse" />
              Your Space. Your Rules.
            </div>
            <h1 className="font-display text-[15vw] leading-[0.85] text-primary md:text-[9rem]">
              ROOM<br />119.
            </h1>
            <p className="mt-6 max-w-lg text-lg text-muted-foreground md:text-xl">
              Art you can <em className="font-marker not-italic text-foreground">wear</em>,{" "}
              <em className="font-marker not-italic text-foreground">hang</em>, and{" "}
              <em className="font-marker not-italic text-foreground">live in</em>. Posters, prints and
              everyday chaos — printed with care in Romania.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/shop"
                className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 font-semibold text-primary-foreground transition hover:bg-primary/90"
              >
                Shop the Room
                <ArrowRight className="size-4 transition group-hover:translate-x-1" />
              </Link>
              <Link
                to="/custom"
                className="inline-flex items-center gap-2 rounded-full border border-ink/20 bg-card px-6 py-3 font-semibold hover:bg-ink hover:text-paper transition"
              >
                Make it custom
              </Link>
            </div>

            <div className="mt-12 grid grid-cols-3 gap-4 text-sm md:max-w-md">
              {[
                { k: "119+", v: "designs" },
                { k: "RO", v: "printed" },
                { k: "48h", v: "shipping" },
              ].map((s) => (
                <div key={s.k} className="border-l-2 border-primary pl-3">
                  <div className="font-display text-2xl md:text-3xl">{s.k}</div>
                  <div className="text-xs uppercase tracking-widest text-muted-foreground">{s.v}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Retro TV sticker */}
          <div className="relative mx-auto flex w-full max-w-md items-center justify-center">
            <div className="animate-float relative aspect-[4/3] w-full rotate-[-4deg] rounded-2xl bg-card p-3 shadow-[var(--shadow-poster)]">
              <div className="relative h-full w-full overflow-hidden rounded-xl bg-ink">
                <video
                  src={HERO_VIDEO}
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="h-full w-full object-cover"
                />
                <div className="pointer-events-none absolute inset-0 bg-[repeating-linear-gradient(0deg,transparent,transparent_3px,oklch(0_0_0/0.15)_3px,oklch(0_0_0/0.15)_4px)] mix-blend-overlay" />
                <div className="absolute inset-x-0 bottom-0 flex items-center justify-between bg-gradient-to-t from-ink/90 to-transparent p-4">
                  <span className="font-marker text-3xl text-primary">WELCOME!</span>
                  <span className="rounded-full bg-primary px-2 py-1 font-display text-xs text-primary-foreground">CH 119</span>
                </div>
              </div>
              <span className="tape absolute inset-x-0" />
            </div>
            <div className="sticker absolute -bottom-6 -left-4 rotate-[-8deg] rounded-full bg-primary px-4 py-2 font-marker text-sm text-primary-foreground shadow-[var(--shadow-tape)]">
              new drops!
            </div>
            <div className="sticker absolute -right-2 top-6 rotate-[12deg] rounded-full border-2 border-ink bg-paper px-3 py-1 font-display text-sm">
              EST. 119
            </div>
          </div>
        </div>
      </section>

      <Marquee reverse />

      {/* CATEGORIES */}
      <section id="categories" className="mx-auto max-w-[1400px] px-4 py-20 md:px-8 md:py-28">
        <div className="mb-10 flex items-end justify-between gap-6">
          <div>
            <div className="mb-2 font-marker text-sm text-primary">01 / Shop by</div>
            <h2 className="font-display text-5xl md:text-7xl">
              Shop by <span className="text-primary">category</span>
            </h2>
          </div>
          <Link
            to="/shop"
            className="link-reveal hidden items-center gap-2 text-sm font-semibold uppercase tracking-[0.2em] md:inline-flex"
          >
            View all <ArrowUpRight className="size-4" />
          </Link>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {CATEGORIES.map((c, i) => (
            <Link
              key={c.slug}
              to="/category/$slug"
              params={{ slug: c.slug }}
              className="group grainy relative flex flex-col overflow-hidden rounded-2xl border border-ink/10 bg-card shadow-[var(--shadow-tape)] transition hover:-translate-y-1 hover:shadow-[var(--shadow-poster)]"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-muted">
                <img
                  src={c.img}
                  alt={c.name}
                  loading="lazy"
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                />
                <span className="absolute left-3 top-3 rounded-full bg-ink/80 px-2 py-1 font-display text-xs text-paper backdrop-blur">
                  0{i + 1}
                </span>
              </div>
              <div className="flex items-end justify-between gap-3 p-5">
                <div>
                  <div className="font-display text-2xl leading-none">{c.name.toUpperCase()}</div>
                  <div className="mt-1 font-marker text-sm text-muted-foreground">{c.tagline}</div>
                </div>
                <span className="grid size-10 shrink-0 place-items-center rounded-full bg-primary text-primary-foreground transition group-hover:rotate-45">
                  <ArrowUpRight className="size-4" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* BESTSELLERS */}
      <section id="bestsellers" className="relative border-y border-ink/10 bg-ink text-paper">
        <div className="mx-auto max-w-[1400px] px-4 py-20 md:px-8 md:py-28">
          <div className="mb-10 flex items-end justify-between gap-6">
            <div>
              <div className="mb-2 font-marker text-sm text-primary">02 / Best of</div>
              <h2 className="font-display text-5xl md:text-7xl">
                Bestsellers — <span className="text-primary">in a blush state</span>
              </h2>
            </div>
            <Link
              to="/category/$slug"
              params={{ slug: "in-a-blush-state" }}
              className="link-reveal hidden items-center gap-2 text-sm font-semibold uppercase tracking-[0.2em] md:inline-flex"
            >
              View all <ArrowUpRight className="size-4" />
            </Link>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {blush.map((p, i) => (
              <ProductCard key={p.slug} product={p} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED */}
      <section className="mx-auto max-w-[1400px] px-4 py-20 md:px-8 md:py-28">
        <div className="mb-10 flex items-end justify-between gap-6">
          <div>
            <div className="mb-2 font-marker text-sm text-primary">03 / Handpicked</div>
            <h2 className="font-display text-5xl md:text-7xl">
              Featured <span className="text-primary">drops</span>
            </h2>
          </div>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featured.map((p, i) => (
            <ProductCard key={p.slug} product={p} index={i} />
          ))}
        </div>
      </section>

      {/* CUSTOM CTA */}
      <section
        id="custom"
        className="relative overflow-hidden bg-primary text-primary-foreground"
      >
        <div
          className="pointer-events-none absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 20%, oklch(1 0 0 / 0.4) 0, transparent 40%), radial-gradient(circle at 80% 60%, oklch(0 0 0 / 0.3) 0, transparent 45%)",
          }}
        />
        <div className="relative mx-auto grid max-w-[1400px] gap-10 px-4 py-24 md:grid-cols-[1.4fr_1fr] md:px-8 md:py-32">
          <div>
            <div className="mb-4 font-marker text-sm">04 / Made for you</div>
            <h2 className="font-display text-5xl leading-[0.9] md:text-8xl">
              Not seeing exactly<br />
              what you're <em className="font-marker not-italic">looking for?</em>
            </h2>
            <p className="mt-8 max-w-xl text-lg opacity-90">
              Spot a poster you'd wear on a t-shirt instead? Tweak a design, move it onto something else, or
              create something from scratch — Room 119 is about making spaces (and outfits) feel more like{" "}
              <em className="font-marker not-italic">you</em>.
            </p>
            <Link
              to="/custom"
              className="mt-8 inline-flex items-center gap-3 rounded-full bg-ink px-6 py-3 font-semibold text-paper transition hover:bg-paper hover:text-ink"
            >
              Start a custom order <ArrowRight className="size-4" />
            </Link>
          </div>
          <div className="relative">
            <div className="absolute -right-8 -top-8 hidden aspect-square w-64 rotate-12 rounded-3xl border-2 border-primary-foreground/40 md:block" />
            <div className="relative rotate-[-3deg] rounded-3xl bg-card p-6 text-ink shadow-[var(--shadow-poster)]">
              <div className="font-marker text-sm text-primary">room119 // custom order</div>
              <ul className="mt-4 space-y-3 text-sm">
                {[
                  "Tell me the design + the object (poster, tee, hoodie, tote…)",
                  "I mock it up, you approve",
                  "Printed & shipped from Romania",
                ].map((t, i) => (
                  <li key={t} className="flex gap-3">
                    <span className="grid size-6 shrink-0 place-items-center rounded-full bg-primary font-display text-xs text-primary-foreground">
                      {i + 1}
                    </span>
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 border-t border-dashed border-ink/30 pt-4 font-marker text-primary">
                ✂ - - - - - - - - - - - - - - - - - -
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
