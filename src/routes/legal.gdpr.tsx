import { createFileRoute } from "@tanstack/react-router";
import { LegalLayout } from "@/components/site/LegalLayout";

export const Route = createFileRoute("/legal/gdpr")({
  head: () => ({
    meta: [
      { title: "GDPR — Room 119" },
      { name: "description", content: "Drepturile tale conform GDPR și cum le poți exercita la Room 119." },
    ],
  }),
  component: () => (
    <LegalLayout eyebrow="drepturi GDPR" title="GDPR" updated="ianuarie 2026">
      <p>Room 119 este operator de date cu caracter personal conform Regulamentului (UE) 2016/679.</p>

      <h2>Datele operatorului</h2>
      <ul>
        <li>Denumire: Room 119</li>
        <li>Email GDPR: <a href="mailto:contact.room119@gmail.com">contact.room119@gmail.com</a></li>
      </ul>

      <h2>Drepturile persoanei vizate</h2>
      <ul>
        <li><strong>Dreptul de acces</strong> — să știi ce date avem despre tine</li>
        <li><strong>Dreptul la rectificare</strong> — să corectezi datele inexacte</li>
        <li><strong>Dreptul la ștergere</strong> — să ștergem datele tale („dreptul de a fi uitat")</li>
        <li><strong>Dreptul la restricționarea prelucrării</strong></li>
        <li><strong>Dreptul la portabilitate</strong> — să primești datele într-un format structurat</li>
        <li><strong>Dreptul de opoziție</strong> — la prelucrarea pe bază de interes legitim sau marketing</li>
        <li><strong>Dreptul de a nu fi supus unei decizii automate</strong></li>
        <li><strong>Dreptul de retragere a consimțământului</strong>, oricând, fără efecte retroactive</li>
      </ul>

      <h2>Cum exerciți drepturile</h2>
      <p>Trimite o cerere scrisă la <a href="mailto:contact.room119@gmail.com">contact.room119@gmail.com</a>. Vei primi răspuns în cel mult 30 de zile.</p>

      <h2>Plângeri</h2>
      <p>Poți depune o plângere la Autoritatea Națională de Supraveghere a Prelucrării Datelor cu Caracter Personal (<a href="https://www.dataprotection.ro" target="_blank" rel="noreferrer">dataprotection.ro</a>).</p>
    </LegalLayout>
  ),
});
