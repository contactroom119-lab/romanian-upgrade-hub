import { useEffect, useState, useSyncExternalStore } from "react";
import { getProduct, SIZE_MULT, type Product } from "./room119-data";

export type CartLine = {
  slug: string;
  size: keyof typeof SIZE_MULT;
  qty: number;
};

const KEY = "room119.cart.v1";
type Listener = () => void;
const listeners = new Set<Listener>();
let state: CartLine[] = [];
let hydrated = false;

function persist() {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(KEY, JSON.stringify(state));
  } catch {}
}

function hydrate() {
  if (hydrated || typeof window === "undefined") return;
  hydrated = true;
  try {
    const raw = localStorage.getItem(KEY);
    if (raw) state = JSON.parse(raw);
  } catch {}
  emit();
}

function emit() {
  for (const l of listeners) l();
}

const subscribe = (l: Listener) => {
  listeners.add(l);
  return () => listeners.delete(l);
};

export function useCart() {
  useEffect(() => hydrate(), []);
  const lines = useSyncExternalStore(
    subscribe,
    () => state,
    () => state,
  );
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  return { lines: mounted ? lines : [], mounted };
}

export function addToCart(slug: string, size: keyof typeof SIZE_MULT = "A3", qty = 1) {
  hydrate();
  const idx = state.findIndex((l) => l.slug === slug && l.size === size);
  if (idx >= 0) state = state.map((l, i) => (i === idx ? { ...l, qty: l.qty + qty } : l));
  else state = [...state, { slug, size, qty }];
  persist();
  emit();
}

export function updateQty(slug: string, size: keyof typeof SIZE_MULT, qty: number) {
  state = qty <= 0 ? state.filter((l) => !(l.slug === slug && l.size === size)) : state.map((l) => (l.slug === slug && l.size === size ? { ...l, qty } : l));
  persist();
  emit();
}

export function removeLine(slug: string, size: keyof typeof SIZE_MULT) {
  state = state.filter((l) => !(l.slug === slug && l.size === size));
  persist();
  emit();
}

export function clearCart() {
  state = [];
  persist();
  emit();
}

export function linePrice(line: CartLine, product?: Product) {
  const p = product ?? getProduct(line.slug);
  if (!p) return 0;
  return p.price * SIZE_MULT[line.size] * line.qty;
}

export function cartTotals(lines: CartLine[]) {
  const subtotal = lines.reduce((s, l) => s + linePrice(l), 0);
  const shipping = subtotal === 0 ? 0 : subtotal >= 200 ? 0 : 19.9;
  const total = subtotal + shipping;
  const count = lines.reduce((s, l) => s + l.qty, 0);
  return { subtotal, shipping, total, count };
}
