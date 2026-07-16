import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "./shipping";

export const Route = createFileRoute("/privacy")({
  component: () => (
    <LegalPage title="Privacy" eyebrow="/ how we handle data">
      <p>
        Room 119 respects your privacy. This page explains what we collect and how we use it.
      </p>
      <h2>What we collect</h2>
      <ul>
        <li>Order details (name, address, email, phone) to ship your posters.</li>
        <li>Payment data — processed by our payment partner; we never store card numbers.</li>
        <li>Basic analytics (anonymous page views) to improve the site.</li>
      </ul>
      <h2>How we use it</h2>
      <ul>
        <li>To fulfill and ship your order.</li>
        <li>To send order updates and, if you opt in, our newsletter.</li>
        <li>To comply with Romanian and EU tax and accounting rules.</li>
      </ul>
      <h2>Your rights (GDPR)</h2>
      <p>
        You can request access, correction or deletion of your data at any time by emailing{" "}
        <a href="mailto:hello@room119.ro">hello@room119.ro</a>.
      </p>
      <p className="text-sm opacity-70">Last updated: {new Date().toLocaleDateString()}.</p>
    </LegalPage>
  ),
  head: () => ({ meta: [{ title: "Privacy — Room 119" }, { name: "description", content: "Room 119 privacy policy: what data we collect, how we use it, and your GDPR rights." }] }),
});
