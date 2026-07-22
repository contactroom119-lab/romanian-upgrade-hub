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

      {/* CATEGORIES */}
      <section id="categories" className="mx-auto max-w-[1400px] px-4 py-20 md:px-8 md:py-28">
        <div className="mb-10 flex items-end justify-between gap-6">
          <div>
            <div className="mb-2 font-marker text-sm text-primary">01 / Shop by</div>
            <h2 className="font-display text-5xl md:text-7xl">
              Shop by <span className="text-primary">cattegory</span>
            </h2>
          </div>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-5">
          {CATEGORIES.map((c, i) => (
            <Link
              key={c.slug}
              to="/category/$slug"
              params={{ slug: c.slug }}
              className="group grainy relative flex flex-col overflow-hidden rounded-2xl border border-ink/10 bg-card shadow-[var(--shadow-tape)] transition hover:-translate-y-1 hover:shadow-[var(--shadow-poster)]"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-muted">
                <img src={c.img} alt={c.name} loading="lazy" width={800} height={520} className="h-full w-full object-cover transition duration-700 group-hover:scale-110" />
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

      {/* PRODUCT TYPES — POSTERS vs T-SHIRTS */}
      <section id="product-types" className="mx-auto max-w-[1400px] px-4 py-20 md:px-8 md:py-28">
        <div className="mb-10 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <div className="mb-2 font-marker text-sm text-primary">02 / Wear it or hang it</div>
            <h2 className="font-display text-5xl leading-[0.9] md:text-7xl">
              Tablouri <span className="text-primary">vs</span><br />tricouri
            </h2>
          </div>
          <p className="max-w-sm text-muted-foreground">
            Același design, două feluri de a-l trăi. Pe perete sau pe tine. Ambele tipărite în România, cu aceeași atenție la detalii.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          <Link
            to="/category/$slug"
            params={{ slug: "all-the-things" }}
            className="group relative overflow-hidden rounded-3xl border border-ink/10 bg-card shadow-[var(--shadow-poster)] transition hover:-translate-y-1"
          >
            <div className="relative aspect-[4/3] overflow-hidden md:aspect-[16/10]">
              <img
                src={ALL_THE_THINGS.img}
                alt="Tablouri"
                loading="lazy"
                className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/30 to-transparent" />
            </div>
            <div className="absolute inset-0 flex flex-col justify-between p-6 md:p-8">
              <div className="flex items-start justify-between">
                <span className="rounded-full border border-paper/20 bg-paper/10 px-3 py-1 font-display text-xs uppercase tracking-widest text-paper backdrop-blur">
                  Postere
                </span>
                <span className="grid size-10 place-items-center rounded-full bg-primary text-primary-foreground transition group-hover:rotate-45">
                  <ArrowUpRight className="size-4" />
                </span>
              </div>
              <div className="text-paper">
                <div className="font-display text-4xl leading-[0.9] md:text-6xl">TABLOURI</div>
                <p className="mt-2 max-w-xs text-sm text-paper/80">Hârtie mată premium, formate A4 / A3 / A2. Fă loc pe pereți.</p>
              </div>
            </div>
          </Link>

          <Link
            to="/category/$slug"
            params={{ slug: "tricouri" }}
            className="group relative overflow-hidden rounded-3xl border border-ink/10 bg-card shadow-[var(--shadow-poster)] transition hover:-translate-y-1"
          >
            <div className="relative aspect-[4/3] overflow-hidden md:aspect-[16/10]">
              <img
                src={TRICOURI_CATEGORY.img}
                alt="Tricouri"
                loading="lazy"
                className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/30 to-transparent" />
            </div>
            <div className="absolute inset-0 flex flex-col justify-between p-6 md:p-8">
              <div className="flex items-start justify-between">
                <span className="rounded-full border border-paper/20 bg-paper/10 px-3 py-1 font-display text-xs uppercase tracking-widest text-paper backdrop-blur">
                  Tricouri
                </span>
                <span className="grid size-10 place-items-center rounded-full bg-primary text-primary-foreground transition group-hover:rotate-45">
                  <ArrowUpRight className="size-4" />
                </span>
              </div>
              <div className="text-paper">
                <div className="font-display text-4xl leading-[0.9] md:text-6xl">TRICOURI</div>
                <p className="mt-2 max-w-xs text-sm text-paper/80">Oversized 240g, bumbac premium. Mărimi S până la XXL. Poartă camera.</p>
              </div>
            </div>
          </Link>
        </div>

        {/* T-shirt teaser grid */}
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {PRODUCTS.filter((p) => p.type === "shirt").slice(0, 3).map((p, i) => (
            <ProductCard key={p.slug} product={p} index={i} />
          ))}
        </div>
      </section>

      {/* BESTSELLERS */}
      <section id="bestsellers" className="relative border-y border-ink/10 bg-ink text-paper">
        <div className="mx-auto max-w-[1400px] px-4 py-20 md:px-8 md:py-28">
          <div className="mb-10 flex items-end justify-between gap-6">
            <div>
              <div className="mb-2 font-marker text-sm text-primary">03 / Best of</div>
              <h2 className="font-display text-5xl md:text-7xl">
                Our best sellers — <span className="text-primary">in a blush state</span>
              </h2>
            </div>
            <Link to="/category/$slug" params={{ slug: "in-a-blush-state" }} className="link-reveal hidden items-center gap-2 text-sm font-semibold uppercase tracking-[0.2em] md:inline-flex">
              View all <ArrowUpRight className="size-4" />
            </Link>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {PRODUCTS.filter((p) => p.category === "in-a-blush-state").map((p, i) => (
              <ProductCard key={p.slug} product={p} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* MONOCHROME TEASER */}
      <section className="mx-auto max-w-[1400px] px-4 py-20 md:px-8 md:py-28">
        <div className="mb-10 flex items-end justify-between gap-6">
          <div>
            <div className="mb-2 font-marker text-sm text-primary">04 / Loud & quiet</div>
            <h2 className="font-display text-5xl md:text-7xl">
              Our best sellers — <span className="text-primary">monochrome</span>
            </h2>
          </div>
          <Link to="/category/$slug" params={{ slug: "monochrome" }} className="link-reveal hidden items-center gap-2 text-sm font-semibold uppercase tracking-[0.2em] md:inline-flex">
            View all <ArrowUpRight className="size-4" />
          </Link>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          <Link to="/category/$slug" params={{ slug: "monochrome" }} className="grainy group relative col-span-2 aspect-[4/3] overflow-hidden rounded-2xl bg-ink">
            <img src={CATEGORIES[0].img} alt="Monochrome" className="h-full w-full object-cover opacity-90 transition duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-tr from-ink/70 via-ink/20 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-8">
              <div className="font-marker text-sm text-primary">The house classics</div>
              <div className="font-display text-4xl text-paper md:text-6xl">BLACK. WHITE. LOUD.</div>
            </div>
          </Link>
          <div className="grid grid-rows-2 gap-4">
            <Link to="/category/$slug" params={{ slug: "red-flags-only" }} className="grainy group relative overflow-hidden rounded-2xl bg-primary">
              <img src={CATEGORIES[2].img} alt="Red Flags" className="h-full w-full object-cover opacity-70 mix-blend-multiply transition duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 grid place-items-center">
                <div className="text-center text-primary-foreground">
                  <div className="font-marker text-sm">Category</div>
                  <div className="font-display text-3xl">RED FLAGS ONLY</div>
                </div>
              </div>
            </Link>
            <Link to="/category/$slug" params={{ slug: "tricouri" }} className="grainy group relative overflow-hidden rounded-2xl bg-card border border-ink/10">
              <img src={TRICOURI_CATEGORY.img} alt="Tricouri" className="h-full w-full object-cover opacity-80 transition duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 grid place-items-center p-6 text-center">
                <div>
                  <div className="font-marker text-sm text-primary">Wear the room</div>
                  <div className="font-display text-3xl leading-none text-foreground">TRICOURI →</div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* CUSTOM CTA */}
      <section id="custom" className="relative overflow-hidden bg-primary text-primary-foreground">
        <div className="pointer-events-none absolute inset-0 opacity-20"
             style={{ backgroundImage: "radial-gradient(circle at 20% 20%, oklch(1 0 0 / 0.4) 0, transparent 40%), radial-gradient(circle at 80% 60%, oklch(0 0 0 / 0.3) 0, transparent 45%)" }} />
        <div className="mx-auto grid max-w-[1400px] gap-10 px-4 py-24 md:grid-cols-[1.4fr_1fr] md:px-8 md:py-32">
          <div>
            <div className="mb-4 font-marker text-sm">05 / Made for you</div>
            <h2 className="font-display text-5xl leading-[0.9] md:text-8xl">
              Nu găsești exact<br />
              ce <em className="font-marker not-italic">cauți?</em>
            </h2>
            <p className="mt-8 max-w-xl text-lg opacity-90">
              Sau poate ai văzut un poster pe care l-ai purta pe tricou? Sunt la un mesaj distanță. Adaptez un design, îl mut pe altceva sau creez ceva complet nou. Room 119 e despre a face spații (și ținute) să te semene.
            </p>
            <Link to="/custom" className="mt-8 inline-flex items-center gap-3 rounded-full bg-ink px-6 py-3 font-semibold text-paper transition hover:bg-paper hover:text-ink">
              Trimite mesaj <ArrowRight className="size-4" />
            </Link>
          </div>
          <div className="relative">
            <div className="absolute -right-8 -top-8 hidden aspect-square w-64 rotate-12 rounded-3xl border-2 border-primary-foreground/40 md:block" />
            <div className="relative rotate-[-3deg] rounded-3xl bg-card p-6 text-ink shadow-[var(--shadow-poster)]">
              <div className="font-marker text-sm text-primary">room119 // custom order</div>
              <ul className="mt-4 space-y-3 text-sm">
                {["Zi-mi design-ul + obiectul (poster, tricou, hoodie, tote…)", "Îți fac mockup, aprobi", "Tipărit & expediat din România"].map((t, i) => (
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

      <Footer />
    </div>
  );
}
