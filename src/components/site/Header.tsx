import { Link, useNavigate } from "@tanstack/react-router";
import { Search, ShoppingBag, User, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { useCart, cartTotals } from "@/lib/cart-store";
import { CATEGORIES } from "@/lib/room119-data";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [q, setQ] = useState("");
  const nav = useNavigate();
  const { lines } = useCart();
  const { count } = cartTotals(lines);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!q.trim()) return;
    nav({ to: "/search", search: { q } });
  };

  return (
    <header
      className={`sticky top-0 z-40 transition-all ${
        scrolled ? "bg-ink/95 backdrop-blur border-b border-paper/10" : "bg-ink"
      } text-paper`}
    >
      <div className="mx-auto flex max-w-[1400px] items-center justify-between gap-6 px-4 py-4 md:px-8">
        <Link to="/" className="font-marker text-2xl leading-none tracking-tight">
          ROOM<span className="text-primary">/</span>119
        </Link>
        <nav className="hidden items-center gap-8 text-sm font-medium uppercase tracking-[0.15em] md:flex">
          <div className="group relative">
            <button className="link-reveal">Shop</button>
            <div className="invisible absolute left-1/2 top-full mt-3 w-56 -translate-x-1/2 rounded-xl border border-paper/10 bg-ink p-2 opacity-0 shadow-[var(--shadow-poster)] transition group-hover:visible group-hover:opacity-100">
              {CATEGORIES.map((c) => (
                <Link
                  key={c.slug}
                  to="/category/$slug"
                  params={{ slug: c.slug }}
                  className="block rounded-md px-3 py-2 text-xs hover:bg-paper/10"
                >
                  {c.name}
                </Link>
              ))}
            </div>
          </div>
          <Link to="/custom" className="link-reveal">Custom</Link>
          <Link to="/despre" className="link-reveal">Despre</Link>
          <Link to="/contact" className="link-reveal">Contact</Link>
        </nav>
        <div className="flex items-center gap-2">
          <form onSubmit={submit} className="hidden items-center gap-2 rounded-full border border-paper/20 bg-paper/5 px-3 py-2 md:flex">
            <Search className="size-4 opacity-70" />
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Search posters & shirts…"
              className="w-40 bg-transparent text-sm outline-none placeholder:text-paper/50"
            />
          </form>
          <Link to="/contact" className="rounded-full p-2 transition hover:bg-paper/10" aria-label="Account">
            <User className="size-5" />
          </Link>
          <Link to="/cart" className="relative rounded-full p-2 transition hover:bg-paper/10" aria-label="Cart">
            <ShoppingBag className="size-5" />
            <span className="absolute -right-0.5 -top-0.5 grid size-4 place-items-center rounded-full bg-primary text-[10px] font-bold text-primary-foreground">
              {count}
            </span>
          </Link>
          <button
            className="rounded-full p-2 transition hover:bg-paper/10 md:hidden"
            aria-label="Menu"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>
      {open && (
        <div className="border-t border-paper/10 bg-ink px-4 py-4 md:hidden">
          <form onSubmit={submit} className="mb-4 flex items-center gap-2 rounded-full border border-paper/20 bg-paper/5 px-3 py-2">
            <Search className="size-4 opacity-70" />
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Search posters & shirts…"
              className="w-full bg-transparent text-sm outline-none placeholder:text-paper/50"
            />
          </form>
          <div className="grid gap-1 text-sm uppercase tracking-[0.15em]">
            {CATEGORIES.map((c) => (
              <Link key={c.slug} to="/category/$slug" params={{ slug: c.slug }} onClick={() => setOpen(false)} className="rounded px-2 py-2 hover:bg-paper/10">
                {c.name}
              </Link>
            ))}
            <Link to="/custom" onClick={() => setOpen(false)} className="rounded px-2 py-2 hover:bg-paper/10">Custom</Link>
            <Link to="/despre" onClick={() => setOpen(false)} className="rounded px-2 py-2 hover:bg-paper/10">Despre</Link>
            <Link to="/contact" onClick={() => setOpen(false)} className="rounded px-2 py-2 hover:bg-paper/10">Contact</Link>
          </div>
        </div>
      )}
    </header>
  );
}
