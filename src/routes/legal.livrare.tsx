import { createFileRoute } from "@tanstack/react-router";
import { LegalLayout } from "@/components/site/LegalLayout";

export const Route = createFileRoute("/legal/livrare")({
  head: () => ({
    meta: [
      { title: "Livrare — Room 119" },
      { name: "description", content: "Cum și cât durează livrarea comenzilor Room 119 în România și UE." },
    ],
  }),
  component: () => (
    <LegalLayout eyebrow="livrare" title="Livrare" updated="ianuarie 2026">
      <h2>Cum împachetăm</h2>
      <p>Fiecare poster e rulat într-un tub rigid sau expediat plat, protejat cu carton și folie. Tricourile pleacă în plicuri reciclabile.</p>

      <h2>Termene și tarife — România</h2>
      <ul>
        <li><strong>Curier standard</strong> — 2–4 zile lucrătoare · 19,90 RON</li>
        <li><strong>Curier express</strong> — 1–2 zile lucrătoare · 29,90 RON</li>
        <li><strong>Livrare gratuită</strong> pentru comenzi peste 200 RON</li>
        <li><strong>Ramburs</strong> — plata la curier, +5 RON</li>
      </ul>

      <h2>Uniunea Europeană</h2>
      <ul>
        <li>4–7 zile lucrătoare · începând de la 49 RON</li>
        <li>Fără taxe vamale suplimentare</li>
      </ul>

      <h2>Procesare</h2>
      <p>Comenzile plasate până în ora 15:00 în zilele lucrătoare sunt procesate în aceeași zi. Produsele custom au termen separat, comunicat individual.</p>

      <h2>Curieri</h2>
      <p>Lucrăm cu FanCourier, Sameday și Cargus, în funcție de destinație. Vei primi codul AWB pe email.</p>

      <h2>Coletul întârzie sau ajunge deteriorat?</h2>
      <p>Scrie-ne la <a href="mailto:contact.room119@gmail.com">contact.room119@gmail.com</a> cu numărul comenzii și, dacă e cazul, poze. Rezolvăm rapid.</p>
    </LegalLayout>
  ),
});
