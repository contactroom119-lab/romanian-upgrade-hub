import { createFileRoute } from "@tanstack/react-router";
import { LegalLayout } from "@/components/site/LegalLayout";

export const Route = createFileRoute("/legal/retur")({
  head: () => ({
    meta: [
      { title: "Retur și rambursare — Room 119" },
      { name: "description", content: "Politica de retur în 14 zile, conform OUG 34/2014, pentru comenzile Room 119." },
    ],
  }),
  component: () => (
    <LegalLayout eyebrow="retur" title="Retur și rambursare" updated="ianuarie 2026">
      <p>Conform <strong>OUG 34/2014</strong>, ai dreptul de a te retrage din contract în termen de <strong>14 zile calendaristice</strong> de la primirea produsului, fără a fi nevoie să invoci vreun motiv.</p>

      <h2>Cum returnezi</h2>
      <ol className="mb-4 list-decimal pl-6">
        <li>Trimite un email la <a href="mailto:hello@room119.ro">hello@room119.ro</a> cu numărul comenzii și produsele pe care vrei să le returnezi.</li>
        <li>Îți răspundem în 24h cu adresa și instrucțiunile.</li>
        <li>Expediezi produsele în ambalajul original, în stare bună, pe cheltuiala ta.</li>
        <li>În 14 zile de la primirea coletului, rambursăm banii pe metoda de plată folosită inițial.</li>
      </ol>

      <h2>Ce nu se poate returna</h2>
      <ul>
        <li>Produse personalizate / custom (poster sau tricou cu design la comandă)</li>
        <li>Produse deteriorate din cauza utilizării incorecte</li>
      </ul>

      <h2>Produs defect sau greșit</h2>
      <p>Dacă ai primit un produs cu defecte sau altul decât cel comandat, îl înlocuim gratuit (inclusiv transportul). Trimite-ne o poză la <a href="mailto:hello@room119.ro">hello@room119.ro</a>.</p>

      <h2>Formular de retur</h2>
      <p>Poți folosi <a href="https://anpc.ro" target="_blank" rel="noreferrer">formularul-tip ANPC</a> sau ne poți scrie direct pe email.</p>

      <h2>Rambursarea</h2>
      <p>Rambursăm în maxim 14 zile de la primirea produsului returnat, folosind aceeași metodă de plată. Nu se percep taxe suplimentare.</p>
    </LegalLayout>
  ),
});
