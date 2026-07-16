import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell, PageHeader } from "@/components/page-shell";

export const Route = createFileRoute("/about")({
  component: AboutPage,
  head: () => ({
    meta: [
      { title: "About — Room 119" },
      { name: "description", content: "Room 119 is a small Romanian studio making posters, prints, and wearable art with attitude." },
    ],
  }),
});

function AboutPage() {
  return (
    <PageShell>
      <PageHeader
        eyebrow="/ about the room"
        title={
          <>
            A small room, <span className="text-primary">loud output.</span>
          </>
        }
        description="Room 119 is a Romanian art studio. One person, a print bed, and a lot of opinions about wall space."
      />

      <section className="mx-auto grid max-w-[1200px] gap-12 px-4 py-16 md:grid-cols-[1.3fr_1fr] md:px-8">
        <div className="space-y-6 text-lg leading-relaxed text-muted-foreground">
          <p>
            Room 119 started as a bedroom door number and turned into a whole practice — art you can wear,
            hang, and live in. Every poster is drawn, sequenced, and print-tested locally before it ships.
          </p>
          <p>
            The collections are small on purpose. Small drops mean better paper, better ink, and better
            attention. If something isn't right, it doesn't ship.
          </p>
          <p>
            Live somewhere loud. Or somewhere quiet. Either way — make it feel like{" "}
            <em className="font-marker not-italic text-foreground">yours</em>.
          </p>
          <div>
            <Link
              to="/custom"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 font-semibold text-primary-foreground"
            >
              Work with the studio
            </Link>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-3">
          {[
            "https://static.wixstatic.com/media/80218c_37a2ff7ff4e64576928c7cb745615567~mv2.png",
            "https://static.wixstatic.com/media/80218c_d0e153fc84504d3eae226aa70259e1da~mv2.png",
            "https://static.wixstatic.com/media/80218c_4ca33707b4b94df49bebbcd5c8d0c3fc~mv2.png",
            "https://static.wixstatic.com/media/80218c_b07c717fb1234afa8c2c1a63176b45d5~mv2.png",
          ].map((src, i) => (
            <div
              key={src}
              className={`grainy overflow-hidden rounded-2xl bg-card shadow-[var(--shadow-tape)] ${i % 2 ? "translate-y-6" : ""}`}
            >
              <img src={src} alt="" className="aspect-square h-full w-full object-cover" />
            </div>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
