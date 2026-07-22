import { createFileRoute } from "@tanstack/react-router";
import { LegalLayout } from "@/components/site/LegalLayout";

export const Route = createFileRoute("/legal/confidentialitate")({
  head: () => ({
    meta: [
      { title: "Politica de confidențialitate — Room 119" },
      { name: "description", content: "Cum colectăm, folosim și protejăm datele tale personale la Room 119." },
    ],
  }),
  component: () => (
    <LegalLayout eyebrow="date personale" title="Politica de confidențialitate" updated="ianuarie 2026">
      <p>Room 119 („noi") respectă confidențialitatea datelor tale personale și le prelucrează în conformitate cu Regulamentul (UE) 2016/679 (GDPR) și Legea 190/2018.</p>

      <h2>Ce date colectăm</h2>
      <ul>
        <li>Date de identificare: nume, prenume</li>
        <li>Date de contact: email, telefon, adresă de livrare</li>
        <li>Date de facturare: adresa de facturare, CUI (opțional pentru persoane juridice)</li>
        <li>Date tehnice: adresa IP, tip browser, cookie-uri (vezi <a href="/legal/cookies">Cookies</a>)</li>
      </ul>

      <h2>Scopul prelucrării</h2>
      <ul>
        <li>Procesarea și livrarea comenzilor</li>
        <li>Emiterea facturilor și îndeplinirea obligațiilor fiscale</li>
        <li>Comunicări legate de comandă</li>
        <li>Marketing (doar cu consimțământ explicit — newsletter)</li>
        <li>Îmbunătățirea site-ului și prevenția fraudei</li>
      </ul>

      <h2>Temeiul legal</h2>
      <p>Prelucrarea are loc pe baza executării contractului (comenzile), obligațiilor legale (facturare, contabilitate), consimțământului (newsletter) sau interesului legitim (securitate, îmbunătățirea serviciilor).</p>

      <h2>Cui transmitem datele</h2>
      <ul>
        <li>Curierilor (pentru livrare)</li>
        <li>Procesatorului de plăți (Stripe / Netopia)</li>
        <li>Furnizorului de contabilitate</li>
        <li>Autorităților publice, când legea o cere</li>
      </ul>
      <p>Nu vindem și nu închiriem datele tale către terți.</p>

      <h2>Perioada de stocare</h2>
      <p>Datele legate de comenzi se păstrează 10 ani (obligație fiscală). Datele pentru marketing se păstrează până la retragerea consimțământului.</p>

      <h2>Drepturile tale</h2>
      <ul>
        <li>Acces la date</li>
        <li>Rectificare</li>
        <li>Ștergere („dreptul de a fi uitat")</li>
        <li>Restricționare</li>
        <li>Portabilitate</li>
        <li>Opoziție</li>
        <li>Retragerea consimțământului</li>
        <li>Depunerea unei plângeri la <a href="https://www.dataprotection.ro" target="_blank" rel="noreferrer">ANSPDCP</a></li>
      </ul>
      <p>Cererile se trimit la <a href="mailto:contact.room119@gmail.com">contact.room119@gmail.com</a>. Răspundem în maxim 30 de zile.</p>

      <h2>Securitate</h2>
      <p>Folosim conexiuni HTTPS, criptare la nivel de bază de date și acces restricționat. Cu toate acestea, nicio metodă de transmisie pe internet nu este 100% sigură.</p>
    </LegalLayout>
  ),
});
