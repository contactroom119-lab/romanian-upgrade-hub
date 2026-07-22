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

      {/* EDITORIAL FEATURE — bestsellers on dark, magazine spread */}
      <section id="featured" className="relative border-t border-ink/10 bg-ink text-paper">
        <div className="pointer-events-none absolute inset-0 opacity-[0.06] mix-blend-screen" style={{ backgroundImage: "var(--grain)" }} />
        <div className="relative mx-auto max-w-[1400px] px-4 py-24 md:px-8 md:py-32">
          <div className="mb-14 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <div className="mb-3 font-marker text-sm text-primary">Index / 02 — Currently on rotation</div>
              <h2 className="font-display text-5xl leading-[0.9] md:text-7xl">
                The <span className="text-primary italic">quiet</span><br />bestsellers.
              </h2>
            </div>
            <Link
              to="/category/$slug"
              params={{ slug: "in-a-blush-state" }}
              className="group inline-flex items-center gap-3 self-start border border-paper/20 px-5 py-3 text-xs font-semibold uppercase tracking-[0.25em] text-paper transition hover:bg-primary hover:border-primary hover:text-primary-foreground md:self-auto"
            >
              See full catalogue <ArrowUpRight className="size-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>

          {(() => {
            const list = PRODUCTS.filter((p) => p.category === "in-a-blush-state").slice(0, 4);
            const [hero, ...rest] = list;
            return (
              <div className="grid gap-10 md:grid-cols-12 md:gap-12">
                {hero && (
                  <Link
                    to="/product/$slug"
                    params={{ slug: hero.slug }}
                    className="group relative col-span-12 md:col-span-8"
                  >
                    <div className="relative aspect-[5/6] overflow-hidden bg-paper/5">
                      <img src={hero.img} alt={hero.name} loading="lazy" className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.03]" />
                      <div className="absolute left-4 top-4 rounded-full border border-paper/30 bg-ink/60 px-3 py-1 font-marker text-[11px] text-primary backdrop-blur">
                        Nº {String(hero.no).padStart(3, "0")} · cover
                      </div>
                    </div>
                    <div className="mt-5 flex items-end justify-between gap-6 border-t border-paper/15 pt-4">
                      <div className="font-display text-2xl uppercase tracking-tight md:text-4xl">{hero.name}</div>
                      <div className="text-right">
                        <div className="text-[10px] uppercase tracking-widest text-paper/50">from</div>
                        <div className="font-display text-2xl text-primary">{hero.price} <span className="text-sm text-paper/60">RON</span></div>
                      </div>
                    </div>
                  </Link>
                )}
                <ol className="col-span-12 flex flex-col divide-y divide-paper/10 md:col-span-4">
                  {rest.map((p, i) => (
                    <li key={p.slug}>
                      <Link
                        to="/product/$slug"
                        params={{ slug: p.slug }}
                        className="group grid grid-cols-[auto_1fr_auto] items-center gap-5 py-5 transition hover:pl-2"
                      >
                        <div className="font-display text-xl text-primary tabular-nums">0{i + 2}</div>
                        <div>
                          <div className="font-marker text-[11px] text-paper/50">Nº {String(p.no).padStart(3, "0")}</div>
                          <div className="font-display text-lg uppercase leading-tight tracking-tight">{p.name}</div>
                        </div>
                        <div className="relative aspect-square w-16 overflow-hidden rounded-sm bg-paper/5">
                          <img src={p.img} alt={p.name} loading="lazy" className="h-full w-full object-cover transition duration-500 group-hover:scale-110" />
                        </div>
                      </Link>
                    </li>
                  ))}
                </ol>
              </div>
            );
          })()}
        </div>
      </section>

      {/* WEAR IT / HANG IT — dark editorial split */}
      <section className="relative overflow-hidden border-t border-paper/10 bg-ink text-paper">
        <div className="pointer-events-none absolute inset-0 opacity-[0.05]" style={{ backgroundImage: "var(--grain)" }} />
        <div className="relative mx-auto max-w-[1400px] px-4 py-24 md:px-8 md:py-32">
          <div className="mb-16 grid gap-6 md:grid-cols-[1fr_auto] md:items-end">
            <div>
              <div className="mb-3 font-marker text-sm text-primary">Index / 03 — Formats</div>
              <h2 className="font-display text-5xl leading-[0.9] md:text-7xl">
                On paper. <span className="text-primary italic">On you.</span>
              </h2>
            </div>
            <div className="text-sm uppercase tracking-[0.25em] text-paper/50 md:text-right">
              two ways to<br />live with it
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2 md:gap-8">
            {[
              { n: "01", title: "Hang it.", copy: "Postere pe hârtie mată premium. Format A4 · A3 · A2, ambalate în tuburi rigide.", img: ALL_THE_THINGS.img, slug: "all-the-things", cta: "Vezi posterele" },
              { n: "02", title: "Wear it.", copy: "Tricouri oversized 240g, bumbac premium, S–XXL. Aceleași designuri, dar pe tine.", img: TRICOURI_CATEGORY.img, slug: "tricouri", cta: "Vezi tricourile" },
            ].map((f) => (
              <Link
                key={f.slug}
                to="/category/$slug"
                params={{ slug: f.slug }}
                className="group relative flex flex-col overflow-hidden border border-paper/15 transition hover:border-primary"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-paper/5">
                  <img src={f.img} alt={f.title} loading="lazy" className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/20 to-transparent" />
                  <div className="absolute left-5 top-5 font-display text-sm text-primary">{f.n}</div>
                </div>
                <div className="flex items-end justify-between gap-6 p-6 md:p-8">
                  <div>
                    <div className="font-display text-3xl uppercase tracking-tight md:text-5xl">{f.title}</div>
                    <p className="mt-3 max-w-sm text-sm text-paper/60">{f.copy}</p>
                  </div>
                  <div className="flex size-12 shrink-0 items-center justify-center rounded-full border border-paper/25 transition group-hover:bg-primary group-hover:border-primary group-hover:text-primary-foreground">
                    <ArrowUpRight className="size-5" />
                  </div>
                </div>
                <div className="border-t border-paper/10 px-6 pb-5 pt-4 text-[11px] uppercase tracking-[0.3em] text-paper/50 md:px-8">
                  {f.cta}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* MANIFESTO — replaces "Black. White. Loud." */}
      <section className="relative overflow-hidden border-t border-paper/10 bg-ink text-paper">
        <div className="pointer-events-none absolute inset-0 opacity-[0.05]" style={{ backgroundImage: "var(--grain)" }} />
        <div className="relative mx-auto max-w-[1400px] px-4 py-24 md:px-8 md:py-40">
          <div className="mb-4 flex items-center gap-4 font-marker text-sm text-primary">
            <span className="h-px w-10 bg-primary" />
            Index / 05 — Manifesto
          </div>
          <h2 className="font-display text-[13vw] leading-[0.88] md:text-[10rem]">
            Make the <span className="italic text-primary">room</span><br />
            speak <span className="italic text-primary">first</span>.
          </h2>
          <p className="mt-10 max-w-2xl text-lg text-paper/70 md:text-2xl">
            Room 119 nu e o galerie. E un dulap deschis. Lucruri făcute în serii mici, tipărite în București, purtate și lipite pe pereți de oameni care nu au chef de decor „safe”.
          </p>

          <div className="mt-16 grid gap-8 border-t border-paper/15 pt-10 md:grid-cols-4">
            {[
              { k: "01", t: "Small batches", d: "Tiraje limitate. Când s-a terminat, s-a terminat." },
              { k: "02", t: "Printed in RO", d: "Fiecare comandă, tipărită și expediată din București." },
              { k: "03", t: "Loud but honest", d: "Fără mockup-uri false. Ce vezi, ai primi." },
              { k: "04", t: "Yours to break", d: "Îndoaie, taie, lipește. E al tău, fă-l să conteze." },
            ].map((r) => (
              <div key={r.k} className="border-l border-paper/15 pl-5">
                <div className="font-display text-2xl text-primary">{r.k}</div>
                <div className="mt-2 font-display text-lg uppercase tracking-tight">{r.t}</div>
                <p className="mt-2 text-sm text-paper/60">{r.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOUSE CLASSICS strip — compact product row on paper (breaks up dark) */}
      <section className="border-t border-ink/10">
        <div className="mx-auto max-w-[1400px] px-4 py-20 md:px-8 md:py-24">
          <div className="mb-10 flex items-end justify-between gap-6">
            <div>
              <div className="mb-3 font-marker text-sm text-primary">Index / 06 — From the archive</div>
              <h3 className="font-display text-4xl uppercase leading-[0.9] md:text-5xl">House classics.</h3>
            </div>
            <Link
              to="/category/$slug"
              params={{ slug: "monochrome" }}
              className="link-reveal shrink-0 text-xs font-semibold uppercase tracking-[0.25em]"
            >
              Vezi toate →
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
