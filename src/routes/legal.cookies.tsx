import { createFileRoute } from "@tanstack/react-router";
import { LegalLayout } from "@/components/site/LegalLayout";

export const Route = createFileRoute("/legal/cookies")({
  head: () => ({
    meta: [
      { title: "Politica de cookies — Room 119" },
      { name: "description", content: "Ce cookie-uri folosim pe room119.ro și cum le poți controla." },
    ],
  }),
  component: () => (
    <LegalLayout eyebrow="cookies" title="Politica de cookies" updated="ianuarie 2026">
      <p>Site-ul room119.ro folosește cookie-uri pentru a-ți oferi cea mai bună experiență și pentru a înțelege cum este folosit site-ul. Prin continuarea navigării ești de acord cu utilizarea lor, în condițiile de mai jos.</p>

      <h2>Ce sunt cookie-urile</h2>
      <p>Un cookie este un fișier text mic stocat de browser-ul tău. Nu conține și nu poate accesa informații de pe calculatorul tău.</p>

      <h2>Ce cookie-uri folosim</h2>
      <h3>Strict necesare</h3>
      <ul>
        <li><code>room119.cart.v1</code> — reține produsele din coș (localStorage, permanent până la ștergere manuală)</li>
        <li><code>session</code> — menține sesiunea de navigare</li>
      </ul>
      <h3>De performanță (opțional)</h3>
      <ul>
        <li>Google Analytics / Plausible — statistici anonime de trafic</li>
      </ul>
      <h3>Marketing (opțional)</h3>
      <ul>
        <li>Meta Pixel / TikTok Pixel — pentru remarketing, doar cu consimțământ</li>
      </ul>

      <h2>Cum le controlezi</h2>
      <p>Poți accepta sau refuza cookie-urile opționale din bannerul afișat la prima vizită. De asemenea, majoritatea browserelor îți permit să blochezi sau să ștergi cookie-urile din setări:</p>
      <ul>
        <li><a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noreferrer">Chrome</a></li>
        <li><a href="https://support.mozilla.org/kb/cookies-information-websites-store-on-your-computer" target="_blank" rel="noreferrer">Firefox</a></li>
        <li><a href="https://support.apple.com/guide/safari/manage-cookies-sfri11471" target="_blank" rel="noreferrer">Safari</a></li>
      </ul>

      <h2>Modificări</h2>
      <p>Această politică poate fi actualizată. Data ultimei modificări este afișată sus.</p>
    </LegalLayout>
  ),
});
