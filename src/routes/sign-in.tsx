import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { ArrowRight, Mail } from "lucide-react";
import { useState } from "react";
import { PageShell } from "@/components/site/PageShell";

export const Route = createFileRoute("/sign-in")({
  head: () => ({
    meta: [
      { title: "Sign in — Room 119" },
      { name: "description", content: "Intră în contul tău Room 119 pentru comenzi, adrese și favorite." },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: SignInPage,
});

function SignInPage() {
  const nav = useNavigate();
  const [email, setEmail] = useState("");

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    nav({ to: "/orders" });
  };

  return (
    <PageShell hideNewsletter>
      <section className="mx-auto grid max-w-[1400px] gap-16 px-4 py-20 md:grid-cols-[1.1fr_1fr] md:px-8 md:py-28">
        <div>
          <div className="font-marker text-primary">→ 08 / cont</div>
          <h1 className="font-display text-5xl leading-[0.9] md:text-8xl">
            Sign <span className="text-primary italic">in</span>.
          </h1>
          <p className="mt-6 max-w-md text-lg text-muted-foreground">
            Sau creează un cont în 10 secunde. Îți salvăm adresa, comenzile și lista de dorințe — ca să nu retastezi nimic data viitoare.
          </p>
          <ul className="mt-10 space-y-3 text-sm text-muted-foreground">
            <li>— comenzi și tracking într-un singur loc</li>
            <li>— acces la drop-uri și custom orders</li>
            <li>— reduceri pentru abonați</li>
          </ul>
        </div>

        <div className="rounded-3xl border border-ink/10 bg-card p-8 shadow-[var(--shadow-tape)] md:p-12">
          <div className="mb-6 font-marker text-primary">→ intră cu email</div>
          <form onSubmit={submit} className="space-y-4">
            <label className="block">
              <span className="text-xs uppercase tracking-widest text-muted-foreground">Email</span>
              <div className="mt-2 flex items-center gap-2 rounded-full border border-ink/20 bg-background px-4 py-3">
                <Mail className="size-4 text-muted-foreground" />
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="tu@email.com"
                  className="w-full bg-transparent text-sm outline-none"
                />
              </div>
            </label>
            <label className="flex items-center gap-2 text-xs text-muted-foreground">
              <input type="checkbox" className="accent-primary" />
              Vreau să primesc drop-uri și noutăți pe email
            </label>
            <button
              type="submit"
              className="mt-2 flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 font-semibold text-primary-foreground transition hover:bg-primary/90"
            >
              Continuă <ArrowRight className="size-4" />
            </button>
          </form>

          <div className="my-8 flex items-center gap-3 text-xs uppercase tracking-widest text-muted-foreground">
            <span className="h-px flex-1 bg-ink/15" /> sau <span className="h-px flex-1 bg-ink/15" />
          </div>

          <button
            type="button"
            onClick={() => nav({ to: "/orders" })}
            className="flex w-full items-center justify-center gap-2 rounded-full border border-ink/20 bg-background px-6 py-3 text-sm font-semibold transition hover:bg-muted"
          >
            Continuă cu Google
          </button>

          <p className="mt-6 text-center text-xs text-muted-foreground">
            Prin continuare accepți <Link to="/legal/termeni" className="text-primary underline">Termenii</Link> și{" "}
            <Link to="/legal/confidentialitate" className="text-primary underline">Politica de confidențialitate</Link>.
          </p>
        </div>
      </section>
    </PageShell>
  );
}
