import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight, Search, ShoppingBag, User, Sparkles, Plus } from "lucide-react";
import { useEffect, useState } from "react";

export const Route = createFileRoute("/")({
  component: Room119Page,
  head: () => ({
    meta: [
      { title: "Room 119 — Art You Can Wear, Hang, Live In" },
      { name: "description", content: "Posters, prints and wearable art from Room 119. Make space for chaos, calm, and everything in between." },
      { property: "og:image", content: "https://static.wixstatic.com/media/80218c_37a2ff7ff4e64576928c7cb745615567~mv2.png" },
    ],
  }),
});

const HERO_VIDEO = "https://video.wixstatic.com/video/80218c_bae0ed957dbd41d8b641c3763345dc1f/1080p/mp4/file.mp4";
const FOOTER_VIDEO = "https://video.wixstatic.com/video/80218c_1c4b4b6635e8477e9a7d387f78fcb027/1080p/mp4/file.mp4";

const CATEGORIES = [
  { name: "Monochrome", tagline: "Black. White. Loud.", img: "https://static.wixstatic.com/media/80218c_d0e153fc84504d3eae226aa70259e1da~mv2.png/v1/fill/w_800,h_520,al_c,q_90,enc_avif,quality_auto/Monochrome.png", href: "https://contactroom119.wixstudio.com/room-119/category/monochrome" },
  { name: "In a Blush State", tagline: "Soft riot, pink noise.", img: "https://static.wixstatic.com/media/80218c_37a2ff7ff4e64576928c7cb745615567~mv2.png/v1/fill/w_800,h_520,al_c,q_90,enc_avif,quality_auto/Blush.png", href: "https://contactroom119.wixstudio.com/room-119/category/in-a-blush-state" },
  { name: "Red Flags Only", tagline: "Warnings, worn well.", img: "https://static.wixstatic.com/media/80218c_4ca33707b4b94df49bebbcd5c8d0c3fc~mv2.png/v1/fill/w_800,h_520,al_c,q_90,enc_avif,quality_auto/Red%20Flags%20Only.png", href: "https://contactroom119.wixstudio.com/room-119/category/red-flags-only" },
  { name: "All the Things", tagline: "Everything, everywhere.", img: "https://static.wixstatic.com/media/80218c_b07c717fb1234afa8c2c1a63176b45d5~mv2.png/v1/fill/w_800,h_520,al_c,q_90,enc_avif,quality_auto/All%20the%20things.png", href: "https://contactroom119.wixstudio.com/room-119/category/wall-things" },
];

const BLUSH = [
  { name: "No 5 — In a Blush State", price: "RON 119.00", tag: "Soft Spots, Sharp Claws", img: "https://static.wixstatic.com/media/80218c_5a828cb3853749e6969d4045d1a802ba~mv2.png/v1/fill/w_600,h_800,al_c,q_90,enc_avif,quality_auto/80218c_5a828cb3853749e6969d4045d1a802ba~mv2.png", href: "https://contactroom119.wixstudio.com/room-119/product-page/no-5-in-a-blush-state" },
  { name: "No 1 — In a Blush State", price: "RON 119.00", tag: "Sugar High", img: "https://static.wixstatic.com/media/80218c_fe2a256a79e34cad9f5091f61ec80018~mv2.png/v1/fill/w_600,h_800,al_c,q_90,enc_avif,quality_auto/80218c_fe2a256a79e34cad9f5091f61ec80018~mv2.png", href: "https://contactroom119.wixstudio.com/room-119/product-page/no-1-in-a-blush-state" },
  { name: "No 2 — In a Blush State", price: "RON 119.00", tag: "Blow Us Away", img: "https://static.wixstatic.com/media/80218c_9cd631bc3e474a9099795c865160b708~mv2.png/v1/fill/w_600,h_800,al_c,q_90,enc_avif,quality_auto/80218c_9cd631bc3e474a9099795c865160b708~mv2.png", href: "https://contactroom119.wixstudio.com/room-119/product-page/no-2-in-a-blush-state" },
  { name: "No 3 - In a Blush State", price: "RON 119.00", tag: "Oceanology", img: "https://static.wixstatic.com/media/80218c_9d91a880c558471fbc31f34928b5822b~mv2.png/v1/fill/w_600,h_800,al_c,q_90,enc_avif,quality_auto/80218c_9d91a880c558471fbc31f34928b5822b~mv2.png", href: "https://contactroom119.wixstudio.com/room-119/product-page/no-3-in-a-blush-state" },
];

const MARQUEE_ITEMS = [
  "MAKE SPACE FOR CHAOS",
  "CALM",
  "AND EVERYTHING IN BETWEEN",
  "ROOM 119 — YOUR SPACE. YOUR RULES",
];

function Marquee({ reverse = false }: { reverse?: boolean }) {
  return (
    <div className="relative overflow-hidden bg-ink text-paper border-y border-paper/10">
      <div
        className="marquee-track flex gap-10 whitespace-nowrap py-3 font-display text-xl md:text-2xl"
        style={reverse ? { animationDirection: "reverse" } : undefined}
      >
        {[...Array(2)].map((_, k) => (
          <div key={k} className="flex gap-10 shrink-0">
            {MARQUEE_ITEMS.map((t, i) => (
              <span key={`${k}-${i}`} className="flex items-center gap-10 shrink-0">
                <Sparkles className="size-4 text-primary" />
                <span>{t}</span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

function Room119Page() {
  const [cartCount] = useState(0);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Marquee />

      {/* NAV */}
      <header
        className={`sticky top-0 z-40 transition-all ${
          scrolled ? "bg-ink/95 backdrop-blur border-b border-paper/10" : "bg-ink"
        } text-paper`}
      >
        <div className="mx-auto flex max-w-[1400px] items-center justify-between gap-6 px-4 py-4 md:px-8">
          <a href="#top" className="font-marker text-2xl leading-none tracking-tight">
            ROOM<span className="text-primary">/</span>119
          </a>
          <nav className="hidden items-center gap-8 text-sm font-medium uppercase tracking-[0.15em] md:flex">
            <a href="#categories" className="link-reveal">Shop</a>
            <a href="#bestsellers" className="link-reveal">Bestsellers</a>
            <a href="#custom" className="link-reveal">Custom</a>
            <a href="#footer" className="link-reveal">Contact</a>
          </nav>
          <div className="flex items-center gap-2">
            <div className="hidden items-center gap-2 rounded-full border border-paper/20 bg-paper/5 px-3 py-2 md:flex">
              <Search className="size-4 opacity-70" />
              <input
                placeholder="Search posters…"
                className="w-40 bg-transparent text-sm outline-none placeholder:text-paper/50"
              />
            </div>
            <button className="rounded-full p-2 transition hover:bg-paper/10" aria-label="Account">
              <User className="size-5" />
            </button>
            <button className="relative rounded-full p-2 transition hover:bg-paper/10" aria-label="Cart">
              <ShoppingBag className="size-5" />
              <span className="absolute -right-0.5 -top-0.5 grid size-4 place-items-center rounded-full bg-primary text-[10px] font-bold text-primary-foreground">
                {cartCount}
              </span>
            </button>
          </div>
        </div>
      </header>

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
              Room 119 — Your Space. Your Rules.
            </div>
            <h1 className="font-display text-[15vw] leading-[0.85] text-primary md:text-[9rem]">
              ROOM<br />119.
            </h1>
            <p className="mt-6 max-w-lg text-lg text-muted-foreground md:text-xl">
              Art you can <em className="font-marker not-italic text-foreground">wear</em>, <em className="font-marker not-italic text-foreground">hang</em>, and <em className="font-marker not-italic text-foreground">live in</em>. Posters, prints and everyday chaos — printed with care in Romania.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#categories"
                className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 font-semibold text-primary-foreground transition hover:bg-primary/90"
              >
                Shop the Room
                <ArrowRight className="size-4 transition group-hover:translate-x-1" />
              </a>
              <a
                href="#custom"
                className="inline-flex items-center gap-2 rounded-full border border-ink/20 bg-card px-6 py-3 font-semibold hover:bg-ink hover:text-paper transition"
              >
                Make it custom
              </a>
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
              Shop by <span className="text-primary">cattegory</span>
            </h2>
          </div>
          <a
            href="https://contactroom119.wixstudio.com/room-119/category/wall-things"
            target="_blank"
            rel="noreferrer"
            className="link-reveal hidden items-center gap-2 text-sm font-semibold uppercase tracking-[0.2em] md:inline-flex"
          >
            View all <ArrowUpRight className="size-4" />
          </a>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {CATEGORIES.map((c, i) => (
            <a
              key={c.name}
              href={c.href}
              target="_blank"
              rel="noreferrer"
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
            </a>
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
                Our best sellers — <span className="text-primary">in a blush state</span>
              </h2>
            </div>
            <a
              href="https://contactroom119.wixstudio.com/room-119/category/in-a-blush-state"
              target="_blank"
              rel="noreferrer"
              className="link-reveal hidden items-center gap-2 text-sm font-semibold uppercase tracking-[0.2em] md:inline-flex"
            >
              View all <ArrowUpRight className="size-4" />
            </a>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {BLUSH.map((p, i) => (
              <a
                key={p.name}
                href={p.href}
                target="_blank"
                rel="noreferrer"
                className="poster group flex flex-col overflow-hidden rounded-2xl bg-paper text-ink shadow-[var(--shadow-tape)]"
                style={{ transform: `rotate(${i % 2 === 0 ? -1 : 1}deg)` }}
              >
                <div className="relative aspect-[3/4] overflow-hidden bg-muted">
                  <img
                    src={p.img}
                    alt={p.name}
                    loading="lazy"
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  />
                  <span className="absolute left-3 top-3 rounded-full bg-primary px-2.5 py-1 font-display text-[10px] uppercase tracking-widest text-primary-foreground">
                    New
                  </span>
                  <span className="absolute right-3 top-3 rounded-full bg-ink px-2.5 py-1 font-display text-[10px] uppercase tracking-widest text-paper">
                    No {i + 1 === 4 ? 3 : i === 0 ? 5 : i === 1 ? 1 : 2}
                  </span>
                  <div className="absolute inset-x-0 bottom-0 translate-y-full bg-ink/95 p-3 text-center transition duration-300 group-hover:translate-y-0">
                    <span className="inline-flex items-center gap-2 font-display text-sm text-paper">
                      <Plus className="size-4" /> Add to cart
                    </span>
                  </div>
                </div>
                <div className="flex items-end justify-between gap-3 p-4">
                  <div>
                    <div className="font-display text-lg leading-tight">{p.name}</div>
                    <div className="font-marker text-xs text-muted-foreground">{p.tag}</div>
                  </div>
                  <div className="font-display text-base whitespace-nowrap">{p.price}</div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* MONOCHROME TEASER (best sellers - monochrome from original) */}
      <section className="mx-auto max-w-[1400px] px-4 py-20 md:px-8 md:py-28">
        <div className="mb-10 flex items-end justify-between gap-6">
          <div>
            <div className="mb-2 font-marker text-sm text-primary">03 / Loud & quiet</div>
            <h2 className="font-display text-5xl md:text-7xl">
              Our best sellers — <span className="text-primary">monochrome</span>
            </h2>
          </div>
          <a
            href="https://contactroom119.wixstudio.com/room-119/category/monochrome"
            target="_blank"
            rel="noreferrer"
            className="link-reveal hidden items-center gap-2 text-sm font-semibold uppercase tracking-[0.2em] md:inline-flex"
          >
            View all <ArrowUpRight className="size-4" />
          </a>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          <a
            href="https://contactroom119.wixstudio.com/room-119/category/monochrome"
            target="_blank"
            rel="noreferrer"
            className="grainy group relative col-span-2 aspect-[4/3] overflow-hidden rounded-2xl bg-ink"
          >
            <img
              src={CATEGORIES[0].img}
              alt="Monochrome"
              className="h-full w-full object-cover opacity-90 transition duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-ink/70 via-ink/20 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-8">
              <div className="font-marker text-sm text-primary">The house classics</div>
              <div className="font-display text-4xl text-paper md:text-6xl">BLACK. WHITE. LOUD.</div>
            </div>
          </a>
          <div className="grid grid-rows-2 gap-4">
            <a
              href="https://contactroom119.wixstudio.com/room-119/category/red-flags-only"
              target="_blank"
              rel="noreferrer"
              className="grainy group relative overflow-hidden rounded-2xl bg-primary"
            >
              <img src={CATEGORIES[2].img} alt="Red Flags" className="h-full w-full object-cover opacity-70 mix-blend-multiply transition duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 grid place-items-center">
                <div className="text-center text-primary-foreground">
                  <div className="font-marker text-sm">Category</div>
                  <div className="font-display text-3xl">RED FLAGS ONLY</div>
                </div>
              </div>
            </a>
            <a
              href="https://contactroom119.wixstudio.com/room-119/category/wall-things"
              target="_blank"
              rel="noreferrer"
              className="grainy group relative overflow-hidden rounded-2xl bg-card border border-ink/10"
            >
              <div className="absolute inset-0 grid place-items-center p-6 text-center">
                <div>
                  <div className="font-marker text-sm text-primary">Everything else</div>
                  <div className="font-display text-3xl leading-none">ALL THE THINGS →</div>
                </div>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* CUSTOM CTA */}
      <section id="custom" className="relative overflow-hidden bg-primary text-primary-foreground">
        <div className="pointer-events-none absolute inset-0 opacity-20"
             style={{ backgroundImage: "radial-gradient(circle at 20% 20%, oklch(1 0 0 / 0.4) 0, transparent 40%), radial-gradient(circle at 80% 60%, oklch(0 0 0 / 0.3) 0, transparent 45%)" }} />
        <div className="mx-auto grid max-w-[1400px] gap-10 px-4 py-24 md:grid-cols-[1.4fr_1fr] md:px-8 md:py-32">
          <div>
            <div className="mb-4 font-marker text-sm">04 / Made for you</div>
            <h2 className="font-display text-5xl leading-[0.9] md:text-8xl">
              Not seeing exactly<br />
              what you're <em className="font-marker not-italic">looking for?</em>
            </h2>
            <p className="mt-8 max-w-xl text-lg opacity-90">
              Or maybe you spotted a poster you'd wear on a t-shirt instead? Good news — I'm one message away.
              Tweak a design, move it onto something else, or create something custom. Room 119 is all about making spaces (and outfits) feel more like <em className="font-marker not-italic">you</em>.
            </p>
            <a
              href="https://contactroom119.wixstudio.com/room-119/category/kids-shoes"
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-flex items-center gap-3 rounded-full bg-ink px-6 py-3 font-semibold text-paper transition hover:bg-paper hover:text-ink"
            >
              Send message <ArrowRight className="size-4" />
            </a>
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

      {/* CLOSING VIDEO BAND */}
      <section id="footer" className="relative overflow-hidden bg-ink text-paper">
        <video
          src={FOOTER_VIDEO}
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 h-full w-full object-cover opacity-30"
        />
        <div className="relative mx-auto max-w-[1400px] px-4 py-28 text-center md:px-8 md:py-40">
          <div className="mb-4 font-marker text-primary">→ the closing credits</div>
          <h2 className="font-display text-5xl leading-[0.9] md:text-[9rem]">
            YOU FOUND<br />
            THE ROOM.<br />
            <span className="text-primary">NOW, MAKE IT YOURS.</span>
          </h2>

          <form
            onSubmit={(e) => e.preventDefault()}
            className="mx-auto mt-12 flex max-w-md items-center gap-2 rounded-full border border-paper/20 bg-paper/5 p-2 backdrop-blur"
          >
            <input
              type="email"
              required
              placeholder="your@email.com — join the drops"
              className="flex-1 bg-transparent px-4 py-2 text-sm outline-none placeholder:text-paper/50"
            />
            <button className="rounded-full bg-primary px-5 py-2 text-sm font-semibold text-primary-foreground transition hover:bg-primary/90">
              Sign me up
            </button>
          </form>
        </div>

        <div className="relative border-t border-paper/10">
          <div className="mx-auto flex max-w-[1400px] flex-col items-center justify-between gap-4 px-4 py-6 text-xs uppercase tracking-[0.2em] text-paper/70 md:flex-row md:px-8">
            <div className="font-marker text-lg text-paper normal-case tracking-normal">
              ROOM<span className="text-primary">/</span>119
            </div>
            <div className="flex gap-6">
              <a href="#" className="link-reveal">Instagram</a>
              <a href="#" className="link-reveal">TikTok</a>
              <a href="#" className="link-reveal">Shipping</a>
              <a href="#" className="link-reveal">Privacy</a>
            </div>
            <div>© {new Date().getFullYear()} Room 119</div>
          </div>
        </div>
      </section>
    </div>
  );
}
