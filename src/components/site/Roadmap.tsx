const years = [
  {
    y: "Year 01",
    t: "Launch quietly.",
    b: "Six pieces. A community of twelve care-experienced creatives. Foster Care Fortnight as our first public moment.",
  },
  {
    y: "Year 02",
    t: "Hand the camera over.",
    b: "TikTok strategy led by Gen Z creators with their own care stories. We don't script it. We don't approve it.",
  },
  {
    y: "Year 03",
    t: "Show the work.",
    b: "The first YOURS. Annual Transparency Report — garments donated, names sewn, partners credited. Modelled on Patagonia.",
  },
];

export const Roadmap = () => (
  <section id="journal" className="py-24 md:py-36 bg-cream-deep">
    <div className="mx-auto max-w-7xl px-6 md:px-10">
      <div className="max-w-2xl">
        <div className="text-[11px] uppercase tracking-[0.28em] text-ink-soft">08 — The next three years</div>
        <h2 className="font-display text-4xl md:text-5xl mt-5 leading-[1.05] text-balance">
          A slow, deliberate
          <br />
          <em className="italic font-light">build.</em>
        </h2>
      </div>
      <ol className="mt-16 grid md:grid-cols-3 gap-px bg-ink/15">
        {years.map((y) => (
          <li key={y.y} className="bg-cream-deep p-8 md:p-10">
            <div className="text-[11px] uppercase tracking-[0.28em] text-sky-deep">{y.y}</div>
            <h3 className="font-display text-2xl md:text-3xl mt-4 leading-tight">{y.t}</h3>
            <p className="mt-5 text-sm text-ink-soft leading-relaxed">{y.b}</p>
          </li>
        ))}
      </ol>
    </div>
  </section>
);

export default Roadmap;