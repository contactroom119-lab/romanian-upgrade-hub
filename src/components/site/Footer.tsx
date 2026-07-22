import { Link } from "@tanstack/react-router";
import { FOOTER_VIDEO } from "@/lib/room119-data";
import { Mail, Phone, MapPin, Clock, Instagram, Music2, CreditCard, Truck, ShieldCheck, RotateCcw, Heart } from "lucide-react";


export function Footer({ compact = false }: { compact?: boolean }) {
  return (
    <section id="footer" className="relative bg-ink text-paper">
      {!compact && (
        <div className="relative overflow-hidden">
          <div className="tv-frame">
            <video
              src={FOOTER_VIDEO}
              autoPlay
              muted
              loop
              playsInline
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="crt-overlay" />
          </div>
          {/* Keep video crisp at top, fade smoothly into ink toward the trust strip */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-ink/25 to-ink" />

          <div className="relative mx-auto max-w-[1400px] px-4 py-24 text-center md:px-8 md:py-32">
            <div className="mb-4 font-marker text-primary">→ the closing credits</div>
            <h2 className="font-display text-5xl leading-[0.9] md:text-[8rem]">
              YOU FOUND<br />
              THE ROOM.<br />
              <span className="text-primary">NOW, MAKE IT YOURS.</span>
            </h2>

            <form
              onSubmit={(e) => e.preventDefault()}
              className="mx-auto mt-12 flex max-w-md items-center gap-2 rounded-full border border-paper/20 bg-ink/40 p-2 backdrop-blur"
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
        </div>
      )}

      {/* Trust strip */}
      <div className="relative border-t border-paper/10">
        <div className="mx-auto grid max-w-[1400px] gap-6 px-4 py-8 sm:grid-cols-2 md:grid-cols-4 md:px-8">
          {[
            { Icon: Truck, title: "Livrare rapidă", sub: "2–4 zile lucrătoare în RO" },
            { Icon: RotateCcw, title: "Retur 14 zile", sub: "Conform OUG 34/2014" },
            { Icon: ShieldCheck, title: "Plată securizată", sub: "Stripe · Netopia · 3DS" },
            { Icon: CreditCard, title: "Card sau ramburs", sub: "Visa · Mastercard · cash" },
          ].map(({ Icon, title, sub }) => (
            <div key={title} className="flex items-start gap-3">
              <div className="rounded-xl border border-paper/15 bg-paper/5 p-2 text-primary">
                <Icon className="h-5 w-5" />
              </div>
              <div>
                <div className="font-display text-sm uppercase tracking-widest">{title}</div>
                <div className="text-xs text-paper/60">{sub}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Main link columns */}
      <div className="relative border-t border-paper/10">
        <div className="mx-auto grid max-w-[1400px] gap-10 px-4 py-14 md:grid-cols-12 md:px-8">
          {/* Brand + contact */}
          <div className="md:col-span-4">
            <div className="font-marker text-3xl text-paper">
              ROOM<span className="text-primary">/</span>119
            </div>
            <p className="mt-3 max-w-xs text-sm text-paper/70">
              Postere, tricouri și artă purtabilă. Făcute, imprimate și expediate din România.
            </p>

            <ul className="mt-6 space-y-3 text-sm text-paper/80">
              <li className="flex items-start gap-2">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <a href="mailto:contact.room119@gmail.com" className="link-reveal">contact.room119@gmail.com</a>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <a href="tel:0722292632" className="link-reveal">0722 292 632</a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <span>Online shop · sediul în București, România</span>
              </li>
              <li className="flex items-start gap-2">
                <Clock className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <span>Luni–Vineri · 10:00–18:00 (răspundem în 24h)</span>
              </li>
            </ul>

            <div className="mt-6 flex gap-3">
              <a href="https://www.instagram.com/room119.studio/" target="_blank" rel="noreferrer" aria-label="Instagram" className="rounded-full border border-paper/20 bg-paper/5 p-2 transition hover:bg-primary hover:text-primary-foreground">
                <Instagram className="h-4 w-4" />
              </a>
              <a href="https://www.tiktok.com/@room119606?_r=1&_t=ZN-98Fd1gvF4cw" target="_blank" rel="noreferrer" aria-label="TikTok" className="rounded-full border border-paper/20 bg-paper/5 p-2 transition hover:bg-primary hover:text-primary-foreground">
                <Music2 className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Shop */}
          <div className="md:col-span-2">
            <div className="mb-3 font-display text-sm uppercase tracking-[0.2em] text-paper/60">Shop</div>
            <ul className="space-y-2 text-sm">
              <li><Link to="/category/$slug" params={{ slug: "monochrome" }} className="link-reveal">Monochrome</Link></li>
              <li><Link to="/category/$slug" params={{ slug: "in-a-blush-state" }} className="link-reveal">In a Blush State</Link></li>
              <li><Link to="/category/$slug" params={{ slug: "red-flags-only" }} className="link-reveal">Red Flags Only</Link></li>
              <li><Link to="/category/$slug" params={{ slug: "tricouri" }} className="link-reveal">Tricouri</Link></li>
              <li><Link to="/category/$slug" params={{ slug: "all-the-things" }} className="link-reveal">All the Things</Link></li>
              <li><Link to="/custom" className="link-reveal">Comandă custom</Link></li>
              <li><Link to="/search" className="link-reveal">Caută</Link></li>
            </ul>
          </div>

          {/* Info */}
          <div className="md:col-span-2">
            <div className="mb-3 font-display text-sm uppercase tracking-[0.2em] text-paper/60">Informații</div>
            <ul className="space-y-2 text-sm">
              <li><Link to="/despre" className="link-reveal">Despre Room 119</Link></li>
              <li><Link to="/contact" className="link-reveal">Contact</Link></li>
              <li><Link to="/legal/livrare" className="link-reveal">Livrare & tarife</Link></li>
              <li><Link to="/legal/retur" className="link-reveal">Retur & rambursare</Link></li>
              <li><Link to="/cart" className="link-reveal">Coșul meu</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div className="md:col-span-2">
            <div className="mb-3 font-display text-sm uppercase tracking-[0.2em] text-paper/60">Legal</div>
            <ul className="space-y-2 text-sm">
              <li><Link to="/legal/termeni" className="link-reveal">Termeni și condiții</Link></li>
              <li><Link to="/legal/confidentialitate" className="link-reveal">Confidențialitate</Link></li>
              <li><Link to="/legal/cookies" className="link-reveal">Politica de cookies</Link></li>
              <li><Link to="/legal/gdpr" className="link-reveal">GDPR</Link></li>
              <li><Link to="/legal/anpc" className="link-reveal">ANPC / SOL</Link></li>
            </ul>
          </div>

          {/* Legal / trust badges */}
          <div className="md:col-span-2">
            <div className="mb-3 font-display text-sm uppercase tracking-[0.2em] text-paper/60">Siguranță</div>
            <div className="rounded-xl border border-paper/15 bg-paper/5 p-4 text-xs leading-relaxed text-paper/75">
              <div className="font-semibold text-paper">Protecția consumatorului</div>
              <p className="mt-1">Drepturi complete conform OUG 34/2014. Dacă ai o problemă, scrie-ne mai întâi la contact.room119@gmail.com.</p>
            </div>
            <div className="mt-4 flex flex-wrap items-center gap-2 text-[10px] uppercase tracking-widest text-paper/60">
              <a href="https://anpc.ro/ce-este-sal/" target="_blank" rel="noreferrer" className="rounded-md border border-paper/20 bg-paper/5 px-2 py-1 hover:bg-primary hover:text-primary-foreground">ANPC · SAL</a>
              <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noreferrer" className="rounded-md border border-paper/20 bg-paper/5 px-2 py-1 hover:bg-primary hover:text-primary-foreground">SOL</a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-paper/10">
          <div className="mx-auto flex max-w-[1400px] flex-col items-center justify-between gap-4 px-4 py-6 text-[11px] uppercase tracking-[0.2em] text-paper/60 md:flex-row md:px-8">
            <div>© {new Date().getFullYear()} Room 119 · Toate drepturile rezervate</div>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link to="/legal/termeni" className="link-reveal">Termeni</Link>
              <Link to="/legal/confidentialitate" className="link-reveal">Confidențialitate</Link>
              <Link to="/legal/cookies" className="link-reveal">Cookies</Link>
              <Link to="/legal/gdpr" className="link-reveal">GDPR</Link>
              <Link to="/legal/anpc" className="link-reveal">ANPC</Link>
            </div>
            <a href="https://www.vectordevelopers.com/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 text-paper/50 transition hover:text-primary">
              Made with <Heart className="h-3 w-3 fill-current text-primary" /> by <span className="font-semibold">Vector Developers</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
