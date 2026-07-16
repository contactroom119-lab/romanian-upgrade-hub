import { createFileRoute, Link } from "@tanstack/react-router";
import { Search, ShoppingBag, User, ArrowRight, Facebook, Instagram, Youtube, Music2, Twitter } from "lucide-react";
import { useCart, formatRON } from "@/lib/cart";
import { CATEGORIES, PRODUCTS } from "@/data/catalog";
import heroImg from "@/assets/hero-landscape.jpg";

export const Route = createFileRoute("/")({
  component: HomePage,
  head: () => ({
    meta: [
      { title: "Room 119 — Handpicked. Slightly Panicked." },
      {
        name: "description",
        content:
          "Posters, prints and wearable art from Room 119. Printed with care in Romania — your space, your rules.",
      },
      {
        property: "og:image",
        content:
          "https://static.wixstatic.com/media/80218c_37a2ff7ff4e64576928c7cb745615567~mv2.png",
      },
    ],
  }),
});

// ── Design tokens (hardcoded on the homepage per spec) ───────────
const CREAM = "#FAF9F5";
const BLACK = "#000000";
const DARK = "#333333";
const LIGHT = "#DFDFDF";
const ORANGE = "#E93B0E";

const NAV = [
  { to: "/shop", label: "Shop" },
  { to: "/category/in-a-blush-state", label: "Bestsellers" },
  { to: "/custom", label: "Custom" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

const MARQUEE_ITEMS = [
  "ROOM 119 — YOUR SPACE, YOUR RULES",
  "MAKE SPACE FOR CHAOS, CALM & EVERYTHING IN BETWEEN",
  "PRINTED WITH CARE IN ROMANIA",
  "NEW DROPS — SHIPPED IN 48H",
];

function HomePage() {
  const { count } = useCart();
  const featured = PRODUCTS.slice(0, 8);
  // top up to 8 with cycled products
  while (featured.length < 8) featured.push(PRODUCTS[featured.length % PRODUCTS.length]);

  return (
    <div style={{ background: CREAM, color: BLACK, fontFamily: "Helvetica, Arial, sans-serif" }} className="min-h-screen overflow-x-hidden">
      {/* 1. MARQUEE */}
      <div style={{ background: BLACK }} className="overflow-hidden">
        <div className="marquee-track flex gap-8 whitespace-nowrap py-2.5 text-sm font-bold uppercase tracking-[0.18em] text-white">
          {[...Array(2)].map((_, k) => (
            <div key={k} className="flex shrink-0 items-center gap-8">
              {MARQUEE_ITEMS.map((t, i) => (
                <span key={`${k}-${i}`} className="flex shrink-0 items-center gap-8">
                  <span>{t}</span>
                  <span style={{ color: ORANGE }} className="text-base">✳</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* 2. HEADER */}
      <header style={{ background: BLACK }} className="sticky top-0 z-40 text-white">
        <div className="mx-auto grid max-w-[1400px] grid-cols-[auto_1fr_auto] items-center gap-6 px-5 py-5 md:px-10">
          <Link to="/" className="font-marker text-2xl leading-none tracking-tight text-white shrink-0">
            ROOM<span style={{ color: ORANGE }}>/</span>119
          </Link>
          <nav className="hidden justify-center gap-8 text-sm uppercase tracking-[0.2em] text-white md:flex" style={{ fontFamily: "'Anton', sans-serif", letterSpacing: "0.14em" }}>
            {NAV.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                className="transition hover:opacity-70"
                style={{ fontSize: "1rem" }}
              >
                {n.label}
              </Link>
            ))}
          </nav>
          <div className="flex items-center gap-1 justify-self-end">
            <button aria-label="Search" className="rounded-full p-2 transition hover:bg-white/10">
              <Search className="size-5" />
            </button>
            <Link to="/account" aria-label="Account" className="rounded-full p-2 transition hover:bg-white/10">
              <User className="size-5" />
            </Link>
            <Link to="/cart" aria-label="Cart" className="relative rounded-full p-2 transition hover:bg-white/10">
              <ShoppingBag className="size-5" />
              <span
                className="absolute -right-0.5 -top-0.5 grid size-4 place-items-center rounded-full text-[10px] font-bold text-white"
                style={{ background: ORANGE }}
              >
                {count}
              </span>
            </Link>
          </div>
        </div>
      </header>

      <main>
        {/* 3. HERO */}
        <section className="relative w-full overflow-hidden" style={{ background: CREAM }}>
          <div className="relative h-[78vh] min-h-[560px] w-full">
            <img
              src={heroImg}
              alt="Two people looking out at mountains and a lake at sunset"
              width={1920}
              height={1080}
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="relative mx-auto flex h-full max-w-[1400px] flex-col items-start justify-center px-5 md:px-10">
              <h1
                style={{ fontFamily: "'Anton', sans-serif", color: ORANGE, lineHeight: 0.88, letterSpacing: "-0.01em" }}
                className="max-w-[14ch] text-[16vw] uppercase drop-shadow-[0_2px_0_rgba(0,0,0,0.08)] md:text-[9rem]"
              >
                Handpicked.<br />Slightly<br />Panicked.
              </h1>
              <p className="mt-6 max-w-md text-base font-medium md:text-lg" style={{ color: DARK }}>
                Posters and prints for people who like their walls a little loud.
              </p>
              <Link
                to="/shop"
                className="mt-8 inline-flex items-center gap-2 px-8 py-4 text-sm font-bold uppercase tracking-[0.18em] text-white transition hover:brightness-110"
                style={{ background: ORANGE, borderRadius: 14 }}
              >
                Shop the drop
                <ArrowRight className="size-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* 4. SHOP BY CATEGORY */}
        <section style={{ background: CREAM }} className="mx-auto max-w-[1400px] px-5 py-20 md:px-10 md:py-28">
          <h2
            style={{ fontFamily: "'Anton', sans-serif", color: BLACK, letterSpacing: "-0.01em", lineHeight: 0.9 }}
            className="mb-12 text-5xl uppercase md:text-7xl"
          >
            Shop by Category
          </h2>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {CATEGORIES.map((c) => (
              <Link
                key={c.slug}
                to="/category/$slug"
                params={{ slug: c.slug }}
                className="group relative block overflow-hidden"
                style={{ borderRadius: 14, background: LIGHT }}
              >
                <div className="relative aspect-[4/5] w-full overflow-hidden">
                  <img
                    src={c.img}
                    alt={c.name}
                    loading="lazy"
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.04]"
                  />
                  <span
                    className="absolute bottom-3 left-3 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.14em]"
                    style={{ background: "#FFFFFF", color: BLACK, borderRadius: 8 }}
                  >
                    {c.name}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* 5. FEATURED COLLECTION — BLACK */}
        <section style={{ background: BLACK, color: "#FFFFFF" }}>
          <div className="mx-auto max-w-[1400px] px-5 py-20 md:px-10 md:py-28">
            <div className="mb-12 flex items-end justify-between gap-6">
              <h2
                style={{ fontFamily: "'Anton', sans-serif", letterSpacing: "-0.01em", lineHeight: 0.9 }}
                className="text-5xl uppercase text-white md:text-7xl"
              >
                Featured Collection
              </h2>
              <Link
                to="/shop"
                className="hidden items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-white transition hover:opacity-70 md:inline-flex"
              >
                View all <ArrowRight className="size-4" />
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4 md:gap-6 lg:grid-cols-4">
              {featured.map((p, i) => (
                <Link
                  key={`${p.slug}-${i}`}
                  to="/product/$slug"
                  params={{ slug: p.slug }}
                  className="group block"
                >
                  <div
                    className="relative aspect-[3/4] w-full overflow-hidden"
                    style={{ background: LIGHT, borderRadius: 14 }}
                  >
                    <img
                      src={p.img}
                      alt={p.name}
                      loading="lazy"
                      className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.04]"
                    />
                  </div>
                  <div className="mt-3 flex items-baseline justify-between gap-3 text-white">
                    <div className="min-w-0">
                      <div className="truncate text-sm font-semibold">{p.name}</div>
                      <div className="mt-0.5 text-xs" style={{ color: "#BFBFBF" }}>{p.tag}</div>
                    </div>
                    <div className="shrink-0 text-sm font-semibold">{formatRON(p.price)}</div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* 6. NEWSLETTER */}
        <section style={{ background: CREAM }}>
          <div className="mx-auto max-w-[900px] px-5 py-24 text-center md:px-10 md:py-32">
            <h2
              style={{ fontFamily: "'Anton', sans-serif", color: BLACK, letterSpacing: "-0.01em", lineHeight: 0.9 }}
              className="text-5xl uppercase md:text-7xl"
            >
              Join our email list
            </h2>
            <p className="mx-auto mt-5 max-w-lg text-base md:text-lg" style={{ color: DARK }}>
              First dibs on new drops, studio notes, and the occasional discount code — no spam, promise.
            </p>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="mx-auto mt-10 flex max-w-lg items-center gap-3"
              style={{ borderBottom: `1px solid ${BLACK}`, paddingBottom: 10 }}
            >
              <input
                type="email"
                required
                placeholder="Your email address"
                className="flex-1 bg-transparent px-1 py-2 text-base outline-none"
                style={{ color: BLACK }}
              />
              <button
                type="submit"
                aria-label="Subscribe"
                className="grid size-10 place-items-center transition hover:opacity-70"
                style={{ color: BLACK }}
              >
                <ArrowRight className="size-5" />
              </button>
            </form>
            <style>{`
              input::placeholder { color: ${LIGHT}; }
            `}</style>
          </div>
        </section>
      </main>

      {/* 7. FOOTER */}
      <footer style={{ background: BLACK, color: "#FFFFFF" }}>
        <div className="mx-auto grid max-w-[1400px] grid-cols-1 items-center gap-6 px-5 py-8 md:grid-cols-3 md:px-10">
          <div className="text-xs uppercase tracking-[0.18em]" style={{ color: LIGHT }}>
            © {new Date().getFullYear()} Room 119
          </div>
          <div className="text-center">
            <Link
              to="/terms"
              className="text-xs font-semibold uppercase tracking-[0.22em] text-white transition hover:opacity-70"
            >
              Terms and Policies
            </Link>
          </div>
          <div className="flex items-center gap-4 md:justify-end" style={{ color: LIGHT }}>
            <a href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook" className="transition hover:text-white">
              <Facebook className="size-4" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram" className="transition hover:text-white">
              <Instagram className="size-4" />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noreferrer" aria-label="YouTube" className="transition hover:text-white">
              <Youtube className="size-4" />
            </a>
            <a href="https://tiktok.com" target="_blank" rel="noreferrer" aria-label="TikTok" className="transition hover:text-white">
              <Music2 className="size-4" />
            </a>
            <a href="https://x.com" target="_blank" rel="noreferrer" aria-label="X" className="transition hover:text-white">
              <Twitter className="size-4" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
