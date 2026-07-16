import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/page-shell";
import { User, Package, Heart, LogIn } from "lucide-react";

export const Route = createFileRoute("/account")({
  component: AccountPage,
  head: () => ({ meta: [{ title: "Account — Room 119" }] }),
});

function AccountPage() {
  return (
    <PageShell marquee={false}>
      <section className="mx-auto max-w-md px-4 py-24 md:px-8">
        <div className="rounded-2xl border border-ink/10 bg-card p-8 text-center shadow-[var(--shadow-tape)]">
          <div className="mx-auto grid size-14 place-items-center rounded-full bg-primary text-primary-foreground">
            <User className="size-6" />
          </div>
          <h1 className="mt-4 font-display text-3xl">Sign in to Room 119</h1>
          <p className="mt-2 text-sm text-muted-foreground">
            Track orders, save favorites, and check out faster.
          </p>
          <form className="mt-6 space-y-3 text-left">
            <label className="block">
              <span className="mb-1 block text-xs font-semibold uppercase tracking-[0.15em]">Email</span>
              <input type="email" className="input" placeholder="you@example.com" />
            </label>
            <label className="block">
              <span className="mb-1 block text-xs font-semibold uppercase tracking-[0.15em]">Password</span>
              <input type="password" className="input" placeholder="••••••••" />
            </label>
            <button
              type="button"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 font-semibold text-primary-foreground"
            >
              <LogIn className="size-4" /> Sign in
            </button>
          </form>
          <p className="mt-4 text-xs text-muted-foreground">
            Accounts are a placeholder — hook up Lovable Cloud auth when you're ready.
          </p>
        </div>

        <div className="mt-6 grid grid-cols-2 gap-3 text-sm">
          <Tile icon={<Package className="size-4" />} label="Orders" />
          <Tile icon={<Heart className="size-4" />} label="Wishlist" />
        </div>
      </section>
    </PageShell>
  );
}

function Tile({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <div className="flex items-center gap-2 rounded-xl border border-ink/10 bg-card px-3 py-3">
      <span className="text-primary">{icon}</span>
      <span className="font-semibold">{label}</span>
    </div>
  );
}
