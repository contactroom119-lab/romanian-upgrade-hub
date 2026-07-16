import { Link } from "@tanstack/react-router";
import { Instagram, Music2, Mail } from "lucide-react";

const FOOTER_VIDEO = "https://video.wixstatic.com/video/80218c_1c4b4b6635e8477e9a7d387f78fcb027/1080p/mp4/file.mp4";

export function SiteFooter() {
  return (
    <footer className="relative overflow-hidden bg-ink text-paper">
      <video
        src={FOOTER_VIDEO}
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover opacity-20"
      />
      <div className="relative mx-auto max-w-[1400px] px-4 py-20 md:px-8">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <div className="font-marker text-3xl">
              ROOM<span className="text-primary">/</span>119
            </div>
            <p className="mt-4 max-w-sm text-sm text-paper/70">
              Art you can wear, hang, and live in. Printed with care in Romania — one small drop at a time.
            </p>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="mt-6 flex max-w-md items-center gap-2 rounded-full border border-paper/20 bg-paper/5 p-2 backdrop-blur"
            >
              <input
                type="email"
                required
                placeholder="your@email.com"
                className="flex-1 bg-transparent px-4 py-2 text-sm outline-none placeholder:text-paper/50"
              />
              <button className="rounded-full bg-primary px-5 py-2 text-sm font-semibold text-primary-foreground transition hover:bg-primary/90">
                Join drops
              </button>
            </form>
          </div>

          <FooterCol
            title="Shop"
            links={[
              { to: "/shop", label: "All posters" },
              { to: "/category/in-a-blush-state", label: "In a Blush State" },
              { to: "/category/monochrome", label: "Monochrome" },
              { to: "/category/red-flags-only", label: "Red Flags Only" },
              { to: "/category/all-the-things", label: "All the Things" },
            ]}
          />
          <FooterCol
            title="Room 119"
            links={[
              { to: "/about", label: "About" },
              { to: "/custom", label: "Custom orders" },
              { to: "/contact", label: "Contact" },
              { to: "/faq", label: "FAQ" },
            ]}
          />
          <FooterCol
            title="Help"
            links={[
              { to: "/shipping", label: "Shipping" },
              { to: "/returns", label: "Returns" },
              { to: "/terms", label: "Terms" },
              { to: "/privacy", label: "Privacy" },
              { to: "/cookies", label: "Cookies" },
            ]}
          />
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-6 border-t border-paper/10 pt-8 md:flex-row md:items-center">
          <div className="flex gap-4">
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="rounded-full border border-paper/20 p-2 hover:bg-paper/10" aria-label="Instagram">
              <Instagram className="size-4" />
            </a>
            <a href="https://tiktok.com" target="_blank" rel="noreferrer" className="rounded-full border border-paper/20 p-2 hover:bg-paper/10" aria-label="TikTok">
              <Music2 className="size-4" />
            </a>
            <a href="mailto:hello@room119.ro" className="rounded-full border border-paper/20 p-2 hover:bg-paper/10" aria-label="Email">
              <Mail className="size-4" />
            </a>
          </div>
          <div className="text-xs uppercase tracking-[0.2em] text-paper/60">
            © {new Date().getFullYear()} Room 119 — Made in Romania
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, links }: { title: string; links: { to: string; label: string }[] }) {
  return (
    <div>
      <div className="font-display text-sm uppercase tracking-[0.2em] text-primary">{title}</div>
      <ul className="mt-4 space-y-2 text-sm text-paper/80">
        {links.map((l) => (
          <li key={l.to}>
            <Link to={l.to} className="link-reveal">
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
