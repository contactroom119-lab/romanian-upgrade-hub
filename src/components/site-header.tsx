import { Link } from "@tanstack/react-router";
import { Search, ShoppingBag, User, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { useCart } from "@/lib/cart";

const NAV = [
  { to: "/shop", label: "Shop" },
  { to: "/category/in-a-blush-state", label: "Bestsellers" },
  { to: "/custom", label: "Custom" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const { count } = useCart();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

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
          {NAV.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="link-reveal"
              activeProps={{ className: "link-reveal text-primary" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <div className="hidden items-center gap-2 rounded-full border border-paper/20 bg-paper/5 px-3 py-2 lg:flex">
            <Search className="size-4 opacity-70" />
            <input
              placeholder="Search posters…"
              className="w-40 bg-transparent text-sm outline-none placeholder:text-paper/50"
            />
          </div>
          <Link to="/account" className="rounded-full p-2 transition hover:bg-paper/10" aria-label="Account">
            <User className="size-5" />
          </Link>
          <Link to="/cart" className="relative rounded-full p-2 transition hover:bg-paper/10" aria-label="Cart">
            <ShoppingBag className="size-5" />
            <span className="absolute -right-0.5 -top-0.5 grid size-4 place-items-center rounded-full bg-primary text-[10px] font-bold text-primary-foreground">
              {count}
            </span>
          </Link>
          <button
            onClick={() => setOpen((o) => !o)}
            className="rounded-full p-2 transition hover:bg-paper/10 md:hidden"
            aria-label="Menu"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>
      {open && (
        <div className="border-t border-paper/10 bg-ink md:hidden">
          <nav className="mx-auto flex max-w-[1400px] flex-col gap-1 px-4 py-4">
            {NAV.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2 text-sm font-medium uppercase tracking-[0.15em] hover:bg-paper/10"
              >
                {n.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
