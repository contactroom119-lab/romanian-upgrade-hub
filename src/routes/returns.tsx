import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "./shipping";

export const Route = createFileRoute("/returns")({
  component: () => (
    <LegalPage title="Returns" eyebrow="/ 14-day window">
      <p>Unhappy with a print? Send it back within 14 days of delivery for a full refund.</p>
      <h2>Conditions</h2>
      <ul>
        <li>Prints must be unused, in original packaging.</li>
        <li>Custom orders are non-refundable — they were made just for you.</li>
        <li>Return shipping is on the customer, unless the item arrived damaged.</li>
      </ul>
      <h2>How to return</h2>
      <ol>
        <li>Email <a href="mailto:hello@room119.ro">hello@room119.ro</a> with your order number.</li>
        <li>We'll send you a return address and instructions.</li>
        <li>Refunds are processed within 5 working days of receiving the return.</li>
      </ol>
      <h2>Damaged in transit</h2>
      <p>Take a photo, send it in — we'll ship a replacement, free.</p>
    </LegalPage>
  ),
  head: () => ({ meta: [{ title: "Returns — Room 119" }, { name: "description", content: "Return and refund policy for Room 119 prints." }] }),
});
