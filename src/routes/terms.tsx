import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "./shipping";

export const Route = createFileRoute("/terms")({
  component: () => (
    <LegalPage title="Terms" eyebrow="/ the fine print">
      <p>
        By using Room 119 you agree to these terms. Nothing fancy — just the basics.
      </p>
      <h2>Orders</h2>
      <p>
        Placing an order is an offer to buy. We confirm once payment clears. We may cancel and refund
        in case of pricing errors or stock issues.
      </p>
      <h2>Pricing</h2>
      <p>All prices are in RON and include VAT. Shipping is added at checkout.</p>
      <h2>Intellectual property</h2>
      <p>
        All artwork, designs, and site content belong to Room 119. You may not reproduce or resell
        without written permission.
      </p>
      <h2>Liability</h2>
      <p>
        Room 119 is not liable for indirect damages. Our maximum liability is limited to the value of
        your order.
      </p>
      <h2>Governing law</h2>
      <p>Romanian law. Any dispute is handled by the courts in Bucharest.</p>
      <p className="text-sm opacity-70">Last updated: {new Date().toLocaleDateString()}.</p>
    </LegalPage>
  ),
  head: () => ({ meta: [{ title: "Terms — Room 119" }, { name: "description", content: "Room 119 terms of service." }] }),
});
