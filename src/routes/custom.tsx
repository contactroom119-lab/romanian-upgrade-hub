import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Check } from "lucide-react";
import { useState } from "react";
import { PageShell } from "@/components/site/PageShell";

export const Route = createFileRoute("/custom")({
  head: () => ({
    meta: [
      { title: "Comandă custom — Room 119" },
      { name: "description", content: "Vrei un design pe altceva? Poster mutat pe tricou, ilustrație personalizată, un cadou anume. Room 119 face custom." },
      { property: "og:title", content: "Comandă custom — Room 119" },
      { property: "og:description", content: "Design custom pe posterul, tricoul sau tote-ul tău." },
    ],
  }),
  component: CustomPage,
});

function CustomPage() {
  const [sent, setSent] = useState(false);
  return (
    <PageShell hideNewsletter>
      <section className="relative overflow-hidden bg-primary text-primary-foreground">
        <div className="mx-auto grid max-w-[1400px] gap-12 px-4 py-20 md:grid-cols-[1.2fr_1fr] md:px-8 md:py-28">
          <div>
            <div className="mb-3 font-marker text-sm">→ made for you</div>
            <h1 className="font-display text-6xl leading-[0.9] md:text-9xl">Comandă<br /><em className="font-marker not-italic">custom.</em></h1>
            <p className="mt-6 max-w-lg text-lg opacity-90">
              Vrei un design mutat pe tricou? O ilustrație doar a ta? Un cadou care nu se mai găsește? Spune-mi ce ai în cap, îți fac un mockup și-l tipărim.
            </p>
            <ul className="mt-8 space-y-3 text-sm">
              {["Design custom sau adaptare din colecția existentă", "Poster, tricou, hoodie, tote sau altceva", "Mockup gratuit înainte de plată", "Tipărit și expediat din România"].map((t) => (
                <li key={t} className="flex items-start gap-2"><Check className="mt-0.5 size-4 shrink-0" /> {t}</li>
              ))}
            </ul>
          </div>

          <form
            onSubmit={(e) => { e.preventDefault(); setSent(true); }}
            className="relative rotate-[-2deg] rounded-3xl bg-card p-8 text-ink shadow-[var(--shadow-poster)]"
          >
            <span className="tape absolute inset-x-0" />
            <div className="font-marker text-primary">room119 // brief</div>
            {sent ? (
              <div className="py-16 text-center">
                <div className="font-display text-4xl">Am primit brief-ul.</div>
                <p className="mt-2 text-muted-foreground">Îți răspund cu un mockup în 2–3 zile.</p>
              </div>
            ) : (
              <div className="mt-6 space-y-4">
                <label className="block">
                  <span className="text-xs font-semibold uppercase tracking-widest">Nume</span>
                  <input required className="mt-1 w-full rounded-xl border border-ink/20 bg-background px-4 py-3 outline-none focus:border-primary" />
                </label>
                <label className="block">
                  <span className="text-xs font-semibold uppercase tracking-widest">Email</span>
                  <input required type="email" className="mt-1 w-full rounded-xl border border-ink/20 bg-background px-4 py-3 outline-none focus:border-primary" />
                </label>
                <label className="block">
                  <span className="text-xs font-semibold uppercase tracking-widest">Obiectul</span>
                  <select className="mt-1 w-full rounded-xl border border-ink/20 bg-background px-4 py-3 outline-none focus:border-primary">
                    <option>Poster</option>
                    <option>Tricou</option>
                    <option>Hoodie</option>
                    <option>Tote bag</option>
                    <option>Altceva</option>
                  </select>
                </label>
                <label className="block">
                  <span className="text-xs font-semibold uppercase tracking-widest">Ce ai în cap?</span>
                  <textarea required rows={4} placeholder="Design, culori, mesaj, referințe…" className="mt-1 w-full rounded-xl border border-ink/20 bg-background px-4 py-3 outline-none focus:border-primary" />
                </label>
                <button className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 font-semibold text-primary-foreground">
                  Trimite brief-ul <ArrowRight className="size-4 transition group-hover:translate-x-1" />
                </button>
              </div>
            )}
          </form>
        </div>
      </section>
    </PageShell>
  );
}
