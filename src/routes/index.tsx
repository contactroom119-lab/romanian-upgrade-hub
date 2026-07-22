import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight, Sparkles } from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { Marquee } from "@/components/site/Marquee";
import { ProductCard } from "@/components/site/ProductCard";
import { CATEGORIES, PRODUCTS, HERO_VIDEO } from "@/lib/room119-data";

export const Route = createFileRoute("/")({
  component: Room119Page,
  head: () => ({
    meta: [
      { title: "Room 119 — Art You Can Wear, Hang, Live In" },
      { name: "description", content: "Postere, tricouri și artă purtabilă din Room 119. Fă loc pentru haos, calm și tot ce e între." },
      { property: "og:image", content: "https://static.wixstatic.com/media/80218c_37a2ff7ff4e64576928c7cb745615567~mv2.png" },
    ],
  }),
});

const TRICOURI_CATEGORY = CATEGORIES.find((c) => c.slug === "tricouri")!;
const ALL_THE_THINGS = CATEGORIES.find((c) => c.slug === "all-the-things")!;

function Room119Page() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Marquee />
      <Header />

      {/* HERO */}
      <section id="top" className="relative overflow-hidden">
        <div className="absolute inset-0">
          <video src={HERO_VIDEO} autoPlay muted loop playsInline className="h-full w-full object-cover opacity-40" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/70 to-background" />
        </div>

        <div className="relative mx-auto grid max-w-[1400px] gap-10 px-4 pb-16 pt-20 md:grid-cols-[1.1fr_1fr] md:gap-16 md:px-8 md:pt-28">
          <div className="flex flex-col justify-center">
            <div className="mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-ink/15 bg-card px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em]">
              <span className="size-2 rounded-full bg-primary animate-pulse" />
              Room 119 — Your Space. Your Rules.
            </div>
            <h1 className="font-display text-[15vw] leading-[0.85] text-primary md:text-[9rem]">
              ROOM<br />119.
            </h1>
            <p className="mt-6 max-w-lg text-lg text-muted-foreground md:text-xl">
              Art you can <em className="font-marker not-italic text-foreground">wear</em>, <em className="font-marker not-italic text-foreground">hang</em>, and <em className="font-marker not-italic text-foreground">live in</em>. Postere, tricouri și haos zilnic — tipărite cu grijă în România.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#product-types" className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 font-semibold text-primary-foreground transition hover:bg-primary/90">
                Shop the Room <ArrowRight className="size-4 transition group-hover:translate-x-1" />
              </a>
              <Link to="/custom" className="inline-flex items-center gap-2 rounded-full border border-ink/20 bg-card px-6 py-3 font-semibold hover:bg-ink hover:text-paper transition">
                Make it custom
              </Link>
            </div>

            <div className="mt-12 grid grid-cols-3 gap-4 text-sm md:max-w-md">
              {[{ k: "119+", v: "designs" }, { k: "RO", v: "printed" }, { k: "48h", v: "shipping" }].map((s) => (
                <div key={s.k} className="border-l-2 border-primary pl-3">
                  <div className="font-display text-2xl md:text-3xl">{s.k}</div>
                  <div className="text-xs uppercase tracking-widest text-muted-foreground">{s.v}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative mx-auto flex w-full max-w-md items-center justify-center">
            <div className="animate-float relative aspect-[4/3] w-full rotate-[-4deg] rounded-2xl bg-card p-3 shadow-[var(--shadow-poster)]">
              <div className="relative h-full w-full overflow-hidden rounded-xl bg-ink">
                <video src={HERO_VIDEO} autoPlay muted loop playsInline className="h-full w-full object-cover" />
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

      {/* CATEGORIES — editorial, restrained, orange only on numerals & hover accents */}
      <section id="categories" className="mx-auto max-w-[1400px] px-4 py-24 md:px-8 md:py-32">
        <div className="mb-14 grid gap-6 md:grid-cols-[1.2fr_1fr] md:items-end">
          <div>
            <div className="mb-3 font-marker text-sm text-primary">Index / 01 — Shop by</div>
            <h2 className="font-display text-5xl leading-[0.9] md:text-7xl">
              Four rooms.<br />
              One <span className="text-primary italic">signature</span>.
            </h2>
          </div>
          <p className="text-muted-foreground md:text-right md:pl-10">
            Fiecare categorie e o dispoziție. Alege camera care ți se potrivește astăzi — postere, printuri, artă purtabilă.
          </p>
        </div>

        <div className="grid divide-y divide-ink/10 border-y border-ink/10 md:grid-cols-2 md:divide-y-0 md:divide-x">
          {CATEGORIES.filter((c) => c.slug !== "tricouri").map((c, i) => (
            <Link
              key={c.slug}
              to="/category/$slug"
              params={{ slug: c.slug }}
              className="group relative grid grid-cols-[auto_1fr_auto] items-center gap-6 px-2 py-8 transition hover:bg-card md:px-8"
            >
              <div className="font-display text-3xl text-primary tabular-nums">
                {String(i + 1).padStart(2, "0")}
              </div>
              <div>
                <div className="font-display text-2xl uppercase tracking-tight md:text-3xl">{c.name}</div>
                <div className="mt-1 font-marker text-sm text-muted-foreground">{c.tagline}</div>
              </div>
              <div className="relative aspect-square w-20 shrink-0 overflow-hidden rounded-xl border border-ink/10 bg-muted md:w-24">
                <img src={c.img} alt={c.name} loading="lazy" className="h-full w-full object-cover transition duration-500 group-hover:scale-110" />
              </div>
              <ArrowUpRight className="absolute right-3 top-3 size-4 text-muted-foreground opacity-0 transition group-hover:opacity-100 group-hover:text-primary md:right-6 md:top-6" />
            </Link>
          ))}
        </div>
      </section>

      {/* EDITORIAL FEATURE — bestsellers as a considered spread */}
      <section id="featured" className="border-t border-ink/10">
        <div className="mx-auto max-w-[1400px] px-4 py-24 md:px-8 md:py-32">
          <div className="mb-14 flex flex-col gap-3">
            <div className="font-marker text-sm text-primary">Index / 02 — Currently on rotation</div>
            <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
              <h2 className="font-display text-5xl leading-[0.9] md:text-7xl">
                The <span className="text-primary italic">quiet</span> bestsellers.
              </h2>
              <Link
                to="/category/$slug"
                params={{ slug: "in-a-blush-state" }}
                className="link-reveal inline-flex items-center gap-2 self-start text-xs font-semibold uppercase tracking-[0.25em] text-foreground md:self-auto"
              >
                See the full catalogue <ArrowUpRight className="size-4 text-primary" />
              </Link>
            </div>
          </div>

          <div className="grid gap-8 md:grid-cols-12">
            {(() => {
              const list = PRODUCTS.filter((p) => p.category === "in-a-blush-state").slice(0, 4);
              const [hero, ...rest] = list;
              return (
                <>
                  {hero && (
                    <Link
                      to="/product/$slug"
                      params={{ slug: hero.slug }}
                      className="group relative col-span-12 md:col-span-7"
                    >
                      <div className="relative aspect-[4/5] overflow-hidden rounded-sm bg-muted md:aspect-[5/6]">
                        <img src={hero.img} alt={hero.name} loading="lazy" className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.03]" />
                      </div>
                      <div className="mt-4 flex items-end justify-between gap-6">
                        <div>
                          <div className="font-marker text-xs text-primary">Nº {String(hero.no).padStart(3, "0")}</div>
                          <div className="font-display text-2xl uppercase tracking-tight md:text-3xl">{hero.name}</div>
                        </div>
                        <div className="text-right">
                          <div className="text-xs uppercase tracking-widest text-muted-foreground">from</div>
                          <div className="font-display text-2xl">{hero.price} <span className="text-sm text-muted-foreground">RON</span></div>
                        </div>
                      </div>
                    </Link>
                  )}
                  <div className="col-span-12 grid gap-8 md:col-span-5 md:content-start">
                    {rest.map((p, i) => (
                      <Link
                        key={p.slug}
                        to="/product/$slug"
                        params={{ slug: p.slug }}
                        className="group grid grid-cols-[7rem_1fr] gap-5 border-b border-ink/10 pb-6 last:border-b-0 last:pb-0"
                      >
                        <div className="relative aspect-square overflow-hidden rounded-sm bg-muted">
                          <img src={p.img} alt={p.name} loading="lazy" className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
                        </div>
                        <div className="flex flex-col justify-between py-1">
                          <div>
                            <div className="font-marker text-[11px] text-primary">Nº {String(p.no).padStart(3, "0")} · {String(i + 2).padStart(2, "0")}</div>
                            <div className="font-display text-lg uppercase leading-tight tracking-tight">{p.name}</div>
                          </div>
                          <div className="flex items-center justify-between text-xs uppercase tracking-widest text-muted-foreground">
                            <span>{p.category.replace(/-/g, " ")}</span>
                            <span className="text-foreground">{p.price} <span className="text-muted-foreground">RON</span></span>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </>
              );
            })()}
          </div>
        </div>
      </section>

      {/* WEAR IT / HANG IT — split editorial, no full-color blocks */}
      <section className="border-t border-ink/10 bg-card">
        <div className="mx-auto grid max-w-[1400px] gap-14 px-4 py-24 md:grid-cols-2 md:gap-16 md:px-8 md:py-32">
          <div className="flex flex-col">
            <div className="mb-3 font-marker text-sm text-primary">Index / 03 — Format</div>
            <h3 className="font-display text-4xl uppercase leading-[0.9] md:text-6xl">Hang it.</h3>
            <p className="mt-4 max-w-sm text-muted-foreground">
              Postere pe hârtie mată premium, format A4 · A3 · A2. Ambalate în tuburi rigide, expediate din România.
            </p>
            <div className="relative mt-8 aspect-[4/5] overflow-hidden rounded-sm bg-muted">
              <img src={ALL_THE_THINGS.img} alt="Tablouri" loading="lazy" className="h-full w-full object-cover" />
            </div>
            <Link
              to="/category/$slug"
              params={{ slug: "all-the-things" }}
              className="mt-6 inline-flex items-center gap-2 self-start border-b border-primary pb-1 font-display text-sm uppercase tracking-[0.25em] text-foreground transition hover:text-primary"
            >
              Vezi posterele <ArrowUpRight className="size-4 text-primary" />
            </Link>
          </div>

          <div className="flex flex-col md:mt-24">
            <div className="mb-3 font-marker text-sm text-primary">Index / 04 — Format</div>
            <h3 className="font-display text-4xl uppercase leading-[0.9] md:text-6xl">Wear it.</h3>
            <p className="mt-4 max-w-sm text-muted-foreground">
              Tricouri oversized 240g, bumbac premium, S–XXL. Aceleași designuri, dar pe tine.
            </p>
            <div className="relative mt-8 aspect-[4/5] overflow-hidden rounded-sm bg-muted">
              <img src={TRICOURI_CATEGORY.img} alt="Tricouri" loading="lazy" className="h-full w-full object-cover" />
            </div>
            <Link
              to="/category/$slug"
              params={{ slug: "tricouri" }}
              className="mt-6 inline-flex items-center gap-2 self-start border-b border-primary pb-1 font-display text-sm uppercase tracking-[0.25em] text-foreground transition hover:text-primary"
            >
              Vezi tricourile <ArrowUpRight className="size-4 text-primary" />
            </Link>
          </div>
        </div>
      </section>

      {/* MONOCHROME — the house classics, on paper */}
      <section className="border-t border-ink/10">
        <div className="mx-auto max-w-[1400px] px-4 py-24 md:px-8 md:py-32">
          <div className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <div className="mb-3 font-marker text-sm text-primary">Index / 05 — House classics</div>
              <h2 className="font-display text-5xl leading-[0.9] md:text-7xl">
                Black. White.<br /><span className="text-primary italic">Loud.</span>
              </h2>
            </div>
            <Link
              to="/category/$slug"
              params={{ slug: "monochrome" }}
              className="link-reveal inline-flex items-center gap-2 self-start text-xs font-semibold uppercase tracking-[0.25em] md:self-auto"
            >
              Toate monochrome <ArrowUpRight className="size-4 text-primary" />
            </Link>
          </div>
          <div className="grid gap-4 md:grid-cols-4">
            {PRODUCTS.filter((p) => p.category === "monochrome").slice(0, 4).map((p, i) => (
              <ProductCard key={p.slug} product={p} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* CUSTOM CTA — editorial split, no full orange section */}
      <section id="custom" className="border-t border-ink/10 bg-card">
        <div className="mx-auto grid max-w-[1400px] gap-14 px-4 py-24 md:grid-cols-[1.3fr_1fr] md:gap-20 md:px-8 md:py-32">
          <div className="flex flex-col justify-center">
            <div className="mb-3 font-marker text-sm text-primary">Index / 06 — Made for you</div>
            <h2 className="font-display text-5xl leading-[0.9] md:text-7xl">
              Nu găsești exact<br />ce <span className="text-primary italic">cauți?</span>
            </h2>
            <p className="mt-6 max-w-lg text-muted-foreground md:text-lg">
              Un poster pe care l-ai purta pe tricou? Un design mutat pe tote? Îl adaptez, îl mut sau creez ceva complet nou. Room 119 e despre a face spații (și ținute) să te semene.
            </p>
            <Link
              to="/custom"
              className="mt-8 inline-flex items-center gap-3 self-start rounded-full bg-primary px-6 py-3 font-semibold text-primary-foreground transition hover:bg-primary/90"
            >
              Trimite mesaj <ArrowRight className="size-4" />
            </Link>
          </div>

          <div className="relative">
            <div className="rounded-sm border border-ink/10 bg-background p-6 shadow-[var(--shadow-tape)]">
              <div className="flex items-center justify-between border-b border-dashed border-ink/20 pb-3 font-marker text-sm text-primary">
                <span>room119 // custom order</span>
                <span>Nº {new Date().getFullYear()}</span>
              </div>
              <ul className="mt-5 space-y-4 text-sm">
                {[
                  "Zi-mi design-ul + obiectul (poster, tricou, hoodie, tote…)",
                  "Îți fac mockup, aprobi",
                  "Tipărit & expediat din România",
                ].map((t, i) => (
                  <li key={t} className="grid grid-cols-[2rem_1fr] items-start gap-3">
                    <span className="font-display text-lg text-primary tabular-nums">0{i + 1}</span>
                    <span className="text-foreground/90">{t}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 flex items-center justify-between border-t border-dashed border-ink/20 pt-4 text-xs uppercase tracking-widest text-muted-foreground">
                <Sparkles className="size-4 text-primary" />
                <span>hand-made · România</span>
                <Sparkles className="size-4 text-primary" />
              </div>
            </div>
          </div>
        </div>
      </section>


      <Footer />
    </div>
  );
}
