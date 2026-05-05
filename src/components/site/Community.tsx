import community from "@/assets/community.jpg";

export const Community = () => (
  <section id="community" className="py-24 md:py-36">
    <div className="mx-auto max-w-7xl px-6 md:px-10 grid md:grid-cols-12 gap-10 md:gap-16 items-center">
      <div className="md:col-span-5">
        <div className="relative aspect-[3/4] overflow-hidden bg-cream-deep">
          <img
            src={community}
            alt="A young person in a sky blue knit, photographed in soft natural light"
            loading="lazy"
            width={1080}
            height={1500}
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
      </div>
      <div className="md:col-span-7">
        <div className="text-[11px] uppercase tracking-[0.28em] text-ink-soft">07 — The community</div>
        <h2 className="font-display text-4xl md:text-5xl mt-5 leading-[1.05] text-balance">
          Care leavers as creative partners,<br />
          <em className="italic font-light text-sky-deep">not subjects.</em>
        </h2>
        <p className="mt-6 text-ink-soft leading-relaxed max-w-xl">
          The YOURS. Community is our creative infrastructure — not a programme,
          not a campaign. Care-experienced photographers, stylists and writers
          shape every chapter of the brand. Industry-rate fees, contractual
          credit, full creative ownership.
        </p>
        <div className="mt-10 grid sm:grid-cols-2 gap-6 max-w-xl">
          {[
            "A community director hired from year one.",
            "Creative fees paid at industry rate.",
            "Contractual credit on every output.",
            "Commissioning, not philanthropy.",
          ].map((line) => (
            <div key={line} className="flex gap-3 text-sm text-ink">
              <span className="text-sky-deep mt-0.5">→</span>
              <span>{line}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default Community;