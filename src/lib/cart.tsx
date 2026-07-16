import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
import { getProduct } from "@/data/catalog";

export type CartItem = { slug: string; size: string; qty: number };

type CartCtx = {
  items: CartItem[];
  add: (item: CartItem) => void;
  remove: (slug: string, size: string) => void;
  setQty: (slug: string, size: string, qty: number) => void;
  clear: () => void;
  count: number;
  subtotal: number;
};

const Ctx = createContext<CartCtx | null>(null);
const KEY = "room119.cart.v1";

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(KEY);
      if (raw) setItems(JSON.parse(raw));
    } catch { /* noop */ }
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    localStorage.setItem(KEY, JSON.stringify(items));
  }, [items, hydrated]);

  const value = useMemo<CartCtx>(() => {
    const count = items.reduce((s, i) => s + i.qty, 0);
    const subtotal = items.reduce((s, i) => {
      const p = getProduct(i.slug);
      return s + (p ? p.price * i.qty : 0);
    }, 0);
    return {
      items,
      count,
      subtotal,
      add: (item) =>
        setItems((prev) => {
          const idx = prev.findIndex((x) => x.slug === item.slug && x.size === item.size);
          if (idx >= 0) {
            const copy = [...prev];
            copy[idx] = { ...copy[idx], qty: copy[idx].qty + item.qty };
            return copy;
          }
          return [...prev, item];
        }),
      remove: (slug, size) =>
        setItems((prev) => prev.filter((i) => !(i.slug === slug && i.size === size))),
      setQty: (slug, size, qty) =>
        setItems((prev) =>
          prev
            .map((i) => (i.slug === slug && i.size === size ? { ...i, qty: Math.max(1, qty) } : i))
            .filter((i) => i.qty > 0),
        ),
      clear: () => setItems([]),
    };
  }, [items]);

  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}

export function useCart() {
  const ctx = useContext(Ctx);
  if (!ctx) throw new Error("useCart must be used inside <CartProvider>");
  return ctx;
}

export function formatRON(n: number) {
  return `RON ${n.toFixed(2)}`;
}
