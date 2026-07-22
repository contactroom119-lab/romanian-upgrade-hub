import { createFileRoute } from "@tanstack/react-router";
import { LegalLayout } from "@/components/site/LegalLayout";

export const Route = createFileRoute("/legal/termeni")({
  head: () => ({
    meta: [
      { title: "Termeni și condiții — Room 119" },
      { name: "description", content: "Termenii și condițiile de utilizare ale magazinului online Room 119." },
    ],
  }),
  component: () => (
    <LegalLayout eyebrow="legal" title="Termeni și condiții" updated="ianuarie 2026">
      <h2>1. Cine suntem</h2>
      <p>Site-ul room119.ro este operat de <strong>Room 119</strong>, un online shop cu sediul în București, România. Datele de contact sunt disponibile în pagina <a href="/contact">Contact</a>.</p>

      <h2>2. Acceptarea termenilor</h2>
      <p>Prin utilizarea site-ului și plasarea unei comenzi confirmi că ai citit, ai înțeles și ești de acord cu acești termeni. Dacă nu ești de acord, te rugăm să nu utilizezi site-ul.</p>

      <h2>3. Produsele și prețurile</h2>
      <ul>
        <li>Toate prețurile sunt exprimate în lei (RON) și includ TVA.</li>
        <li>Prețul afișat la momentul plasării comenzii este cel final.</li>
        <li>Imaginile sunt orientative; pot exista mici diferențe de nuanță datorate ecranelor sau procesului de tipar.</li>
      </ul>

      <h2>4. Plasarea și confirmarea comenzii</h2>
      <p>Comanda se consideră plasată la finalizarea checkout-ului. Vei primi un email de confirmare. Contractul se încheie în momentul confirmării scrise a expedierii.</p>

      <h2>5. Plata</h2>
      <p>Acceptăm plata online cu cardul (Visa / Mastercard) prin procesator securizat, precum și plata ramburs la curier (unde este disponibilă). Nu stocăm datele cardului tău.</p>

      <h2>6. Livrare</h2>
      <p>Detalii complete în pagina <a href="/legal/livrare">Livrare</a>. Termenul standard este 2–4 zile lucrătoare în România.</p>

      <h2>7. Retur și rambursare</h2>
      <p>Ai dreptul de retragere din contract în termen de 14 zile calendaristice, conform OUG 34/2014. Detalii în pagina <a href="/legal/retur">Retur & rambursare</a>. Excepție: produsele personalizate / custom nu pot fi returnate.</p>

      <h2>8. Garanție</h2>
      <p>Se aplică garanția legală de conformitate de 2 ani conform Legii 449/2003 și OUG 140/2021 pentru produsele care nu sunt personalizate.</p>

      <h2>9. Proprietate intelectuală</h2>
      <p>Toate designurile, textele și imaginile de pe site sunt proprietatea Room 119 sau a autorilor colaboratori. Reproducerea fără acord scris este interzisă.</p>

      <h2>10. Răspundere</h2>
      <p>Nu suntem responsabili pentru întârzieri cauzate de curier, forță majoră sau evenimente în afara controlului nostru rezonabil.</p>

      <h2>11. Soluționarea litigiilor</h2>
      <p>Litigiile se rezolvă amiabil sau, în caz contrar, de instanțele competente din România. Poți accesa și platforma SOL a Comisiei Europene: <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noreferrer">ec.europa.eu/consumers/odr</a>. Autoritate: <a href="https://anpc.ro" target="_blank" rel="noreferrer">ANPC</a>.</p>

      <h2>12. Modificări</h2>
      <p>Ne rezervăm dreptul de a modifica acești termeni. Versiunea aplicabilă este cea afișată pe site la momentul comenzii tale.</p>
    </LegalLayout>
  ),
});
