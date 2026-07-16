import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "./shipping";

export const Route = createFileRoute("/cookies")({
  component: () => (
    <LegalPage title="Cookies" eyebrow="/ crumbs, not the tasty kind">
      <p>
        We use a small number of cookies to make the site work and to understand how it's used.
      </p>
      <h2>Types</h2>
      <ul>
        <li><strong>Essential</strong> — cart, session, checkout. Cannot be disabled.</li>
        <li><strong>Analytics</strong> — anonymous, aggregated usage stats.</li>
        <li><strong>Marketing</strong> — only if you opt in.</li>
      </ul>
      <h2>Managing cookies</h2>
      <p>
        You can clear or block cookies via your browser settings. Some features (like the cart) will
        stop working properly if essential cookies are blocked.
      </p>
      <p className="text-sm opacity-70">Last updated: {new Date().toLocaleDateString()}.</p>
    </LegalPage>
  ),
  head: () => ({ meta: [{ title: "Cookies — Room 119" }, { name: "description", content: "Cookie policy for Room 119." }] }),
});
