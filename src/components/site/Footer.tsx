import { Link } from "@tanstack/react-router";
import { FOOTER_VIDEO } from "@/lib/room119-data";

export function Footer({ compact = false }: { compact?: boolean }) {
  return (
    <section id="footer" className="relative overflow-hidden bg-ink text-paper">
      <video
        src={FOOTER_VIDEO}
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover opacity-30"
      />
      {!compact && (
        <div className="relative mx-auto max-w-[1400px] px-4 py-24 text-center md:px-8 md:py-32">
          <div className="mb-4 font-marker text-primary">→ the closing credits</div>
          <h2 className="font-display text-5xl leading-[0.9] md:text-[8rem]">
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
      )}

      <div className="relative border-t border-paper/10">
        <div className="mx-auto grid max-w-[1400px] gap-10 px-4 py-14 md:grid-cols-4 md:px-8">
          <div>
            <div className="font-marker text-2xl text-paper">
              ROOM<span className="text-primary">/</span>119
            </div>
            <p className="mt-3 max-w-xs text-sm text-paper/70">
              Postere, printuri și artă purtabilă. Făcute și expediate din România.
            </p>
          </div>
          <div>
            <div className="mb-3 font-display text-sm uppercase tracking-[0.2em] text-paper/60">Shop</div>
            <ul className="space-y-2 text-sm">
              <li><Link to="/category/$slug" params={{ slug: "monochrome" }} className="link-reveal">Monochrome</Link></li>
              <li><Link to="/category/$slug" params={{ slug: "in-a-blush-state" }} className="link-reveal">In a Blush State</Link></li>
              <li><Link to="/category/$slug" params={{ slug: "red-flags-only" }} className="link-reveal">Red Flags Only</Link></li>
              <li><Link to="/category/$slug" params={{ slug: "all-the-things" }} className="link-reveal">All the Things</Link></li>
              <li><Link to="/custom" className="link-reveal">Comandă custom</Link></li>
            </ul>
          </div>
          <div>
            <div className="mb-3 font-display text-sm uppercase tracking-[0.2em] text-paper/60">Informații</div>
            <ul className="space-y-2 text-sm">
              <li><Link to="/despre" className="link-reveal">Despre Room 119</Link></li>
              <li><Link to="/contact" className="link-reveal">Contact</Link></li>
              <li><Link to="/legal/livrare" className="link-reveal">Livrare</Link></li>
              <li><Link to="/legal/retur" className="link-reveal">Retur & rambursare</Link></li>
            </ul>
          </div>
          <div>
            <div className="mb-3 font-display text-sm uppercase tracking-[0.2em] text-paper/60">Legal</div>
            <ul className="space-y-2 text-sm">
              <li><Link to="/legal/termeni" className="link-reveal">Termeni și condiții</Link></li>
              <li><Link to="/legal/confidentialitate" className="link-reveal">Confidențialitate</Link></li>
              <li><Link to="/legal/cookies" className="link-reveal">Cookies</Link></li>
              <li><Link to="/legal/gdpr" className="link-reveal">GDPR</Link></li>
              <li><Link to="/legal/anpc" className="link-reveal">ANPC / SOL</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-paper/10">
          <div className="mx-auto flex max-w-[1400px] flex-col items-center justify-between gap-4 px-4 py-6 text-xs uppercase tracking-[0.2em] text-paper/70 md:flex-row md:px-8">
            <div>© {new Date().getFullYear()} Room 119 · CUI RO000000 · J40/000/2024</div>
            <div className="flex gap-6">
              <a href="https://www.instagram.com" target="_blank" rel="noreferrer" className="link-reveal">Instagram</a>
              <a href="https://www.tiktok.com" target="_blank" rel="noreferrer" className="link-reveal">TikTok</a>
              <a href="https://anpc.ro" target="_blank" rel="noreferrer" className="link-reveal">ANPC</a>
              <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noreferrer" className="link-reveal">SOL</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
