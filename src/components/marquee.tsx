import { Sparkles } from "lucide-react";

const ITEMS = [
  "MAKE SPACE FOR CHAOS",
  "CALM",
  "AND EVERYTHING IN BETWEEN",
  "ROOM 119 — YOUR SPACE. YOUR RULES",
];

export function Marquee({ reverse = false }: { reverse?: boolean }) {
  return (
    <div className="relative overflow-hidden bg-ink text-paper border-y border-paper/10">
      <div
        className="marquee-track flex gap-10 whitespace-nowrap py-3 font-display text-xl md:text-2xl"
        style={reverse ? { animationDirection: "reverse" } : undefined}
      >
        {[...Array(2)].map((_, k) => (
          <div key={k} className="flex gap-10 shrink-0">
            {ITEMS.map((t, i) => (
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
