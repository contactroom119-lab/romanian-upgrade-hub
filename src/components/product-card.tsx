import { Link } from "@tanstack/react-router";
import { Plus } from "lucide-react";
import { formatRON } from "@/lib/cart";
import type { Product } from "@/data/catalog";

export function ProductCard({ product, index = 0 }: { product: Product; index?: number }) {
  return (
    <Link
      to="/product/$slug"
      params={{ slug: product.slug }}
      className="poster group flex flex-col overflow-hidden rounded-2xl bg-paper text-ink shadow-[var(--shadow-tape)]"
      style={{ transform: `rotate(${index % 2 === 0 ? -1 : 1}deg)` }}
    >
      <div className="relative aspect-[3/4] overflow-hidden bg-muted">
        <img
          src={product.img}
          alt={product.name}
          loading="lazy"
          className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
        />
        <span className="absolute left-3 top-3 rounded-full bg-primary px-2.5 py-1 font-display text-[10px] uppercase tracking-widest text-primary-foreground">
          New
        </span>
        <div className="absolute inset-x-0 bottom-0 translate-y-full bg-ink/95 p-3 text-center transition duration-300 group-hover:translate-y-0">
          <span className="inline-flex items-center gap-2 font-display text-sm text-paper">
            <Plus className="size-4" /> View product
          </span>
        </div>
      </div>
      <div className="flex items-end justify-between gap-3 p-4">
        <div>
          <div className="font-display text-lg leading-tight">{product.name}</div>
          <div className="font-marker text-xs text-muted-foreground">{product.tag}</div>
        </div>
        <div className="font-display text-base whitespace-nowrap">{formatRON(product.price)}</div>
      </div>
    </Link>
  );
}
