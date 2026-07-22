import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";

export const Route = createFileRoute("/despre")({
  head: () => ({
    meta: [
      { title: "Despre — Room 119" },
      { name: "description", content: "Room 119 e camera în care arta se așază pe pereți, pe tricouri și pe zilele tale. Tipărită și expediată din România." },
      { property: "og:title", content: "Despre — Room 119" },
      { property: "og:description", content: "Room 119 e camera în care arta se așază pe pereți, pe tricouri și pe zilele tale." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <PageShell hideNewsletter>
      <section className="mx-auto max-w-[1100px] px-4 py-16 md:px-8 md:py-24">
        <div className="font-marker text-primary">→ despre cameră</div>
        <h1 className="font-display text-6xl leading-[0.9] md:text-9xl">Bun venit<br />în <span className="text-primary">Room 119</span>.</h1>
        <div className="mt-10 grid gap-10 md:grid-cols-2">
          <p className="text-lg text-muted-foreground">
            Room 119 nu e un magazin. E o cameră. Aia în care lași lumina aprinsă noaptea, în care pui postere strâmb pe perete și în care porți tricouri cu mesaje care nu au nevoie de explicații.
          </p>
          <p className="text-lg text-muted-foreground">
            Fiecare design e gândit, desenat și tipărit cu grijă în România. Fără stocuri uriașe, fără fabrici anonime — doar hârtie bună, cerneluri care rezistă și obiecte care te fac să te simți mai tu.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {[
            { k: "Local", v: "Tipărit și expediat din București." },
            { k: "Slow", v: "Colecții mici, făcute când sunt gata." },
            { k: "Onest", v: "Materiale, prețuri și timpi reali." },
          ].map((s) => (
            <div key={s.k} className="rounded-2xl border border-ink/10 bg-card p-6">
              <div className="font-display text-3xl text-primary">{s.k}.</div>
              <p className="mt-2 text-sm text-muted-foreground">{s.v}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-wrap gap-3">
          <Link to="/" className="rounded-full bg-primary px-6 py-3 font-semibold text-primary-foreground">Vezi shop-ul</Link>
          <Link to="/custom" className="rounded-full border border-ink/20 bg-card px-6 py-3 font-semibold">Comandă custom</Link>
        </div>
      </section>
    </PageShell>
  );
}
