const stats = [
  { n: "20,000", label: "Young people leave the UK care system every year" },
  { n: "74%", label: "Of 18–30s prefer brands with a real social mission" },
  { n: "£5.3B", label: "UK ethical fashion market — up 19% since 2020" },
  { n: "1 : 1", label: "Garments made — one bought, one given. Always." },
];

export const Stats = () => (
  <section className="py-24 md:py-32 bg-sky-soft">
    <div className="mx-auto max-w-7xl px-6 md:px-10">
      <div className="max-w-2xl">
        <div className="text-[11px] uppercase tracking-[0.28em] text-ink-soft">06 — Why now</div>
        <h2 className="font-display text-4xl md:text-5xl mt-5 leading-[1.05] text-balance">
          The blue bow is a quiet signal — and the world is finally listening.
        </h2>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-10 mt-16 border-t border-ink/20 pt-10">
        {stats.map((s) => (
          <div key={s.label}>
            <div className="font-display text-5xl md:text-6xl text-ink leading-none">{s.n}</div>
            <p className="mt-4 text-sm text-ink-soft leading-snug max-w-[18ch]">{s.label}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Stats;