import { Link } from "@tanstack/react-router";
import { Plus } from "lucide-react";
import { type Product, RON, productSizes } from "@/lib/room119-data";
import { addToCart } from "@/lib/cart-store";

export function ProductCard({ product, index = 0, showNew = true }: { product: Product; index?: number; showNew?: boolean }) {
  const rot = index % 2 === 0 ? -1 : 1;
  const defaultSize = productSizes(product.type)[1];
  const typeBadge = product.type === "shirt" ? "Tricou" : "Poster";
  return (
    <div className="poster group relative flex flex-col overflow-hidden rounded-2xl bg-paper text-ink shadow-[var(--shadow-tape)]" style={{ transform: `rotate(${rot}deg)` }}>
      <Link to="/product/$slug" params={{ slug: product.slug }} className="relative block aspect-[3/4] overflow-hidden bg-muted">
        <img
          src={product.img}
          alt={product.name}
          loading="lazy"
          className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
        />
        {showNew && (
          <span className="absolute left-3 top-3 rounded-full bg-primary px-2.5 py-1 font-display text-[10px] uppercase tracking-widest text-primary-foreground">
            New
          </span>
        )}
        <span className="absolute right-3 top-3 rounded-full bg-ink px-2.5 py-1 font-display text-[10px] uppercase tracking-widest text-paper">
          {typeBadge}
        </span>
      </Link>
      <button
        type="button"
        onClick={(e) => {
          e.preventDefault();
          addToCart(product.slug, defaultSize);
        }}
        className="absolute inset-x-0 bottom-[68px] translate-y-full bg-ink/95 p-3 text-center transition duration-300 group-hover:translate-y-0"
      >
        <span className="inline-flex items-center gap-2 font-display text-sm text-paper">
          <Plus className="size-4" /> Add to cart
        </span>
      </button>
      <div className="flex items-end justify-between gap-3 p-4">
        <div>
          <Link to="/product/$slug" params={{ slug: product.slug }} className="font-display text-lg leading-tight hover:text-primary">
            {product.name}
          </Link>
          <div className="font-marker text-xs text-muted-foreground">{product.tag}</div>
        </div>
        <div className="font-display text-base whitespace-nowrap">{RON(product.price)}</div>
      </div>
    </div>
  );
}
