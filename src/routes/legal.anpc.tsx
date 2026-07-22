import { createFileRoute } from "@tanstack/react-router";
import { LegalLayout } from "@/components/site/LegalLayout";

export const Route = createFileRoute("/legal/anpc")({
  head: () => ({
    meta: [
      { title: "ANPC & SOL — Room 119" },
      { name: "description", content: "Informații pentru consumatori: ANPC și platforma SOL de soluționare online a litigiilor." },
    ],
  }),
  component: () => (
    <LegalLayout eyebrow="protecția consumatorilor" title="ANPC & SOL">
      <p>În calitate de consumator ai la dispoziție două canale oficiale pentru soluționarea litigiilor cu Room 119.</p>

      <h2>ANPC — Autoritatea Națională pentru Protecția Consumatorilor</h2>
      <ul>
        <li>Site: <a href="https://anpc.ro" target="_blank" rel="noreferrer">anpc.ro</a></li>
        <li>Telefon (InfoCons): 0219551</li>
        <li>Adresă: Bd. Aviatorilor nr. 72, sector 1, București</li>
      </ul>

      <h2>SOL — Soluționarea Online a Litigiilor (UE)</h2>
      <p>Comisia Europeană oferă o platformă gratuită pentru soluționarea alternativă a litigiilor:</p>
      <p><a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noreferrer">https://ec.europa.eu/consumers/odr</a></p>

      <h2>Contact direct</h2>
      <p>Înainte de a te adresa acestor autorități, te rugăm să ne scrii la <a href="mailto:contact.room119@gmail.com">contact.room119@gmail.com</a> — ne dorim să rezolvăm orice problemă rapid și direct.</p>
    </LegalLayout>
  ),
});
