const steps = [
  {
    n: "01",
    title: "You choose a piece",
    body:
      "Six elevated basics, designed slowly. Considered cuts, honest fabrics, the colour of a quiet sky.",
  },
  {
    n: "02",
    title: "We make two",
    body:
      "One ships to you. The second is made identically — same yarn, same cut, no compromises, no ‘charity edition’.",
  },
  {
    n: "03",
    title: "They receive theirs",
    body:
      "Sent in a Stay Bag to a young person leaving the UK care system. Their name is sewn inside. So is a stamp set, in case they want to write it again.",
  },
];

export const Promise = () => (
  <section id="promise" className="py-24 md:py-36">
    <div className="mx-auto max-w-7xl px-6 md:px-10">
      <div className="grid md:grid-cols-12 gap-10 md:gap-14 items-start">
        <div className="md:col-span-4">
          <div className="text-[11px] uppercase tracking-[0.28em] text-ink-soft">02 — The promise</div>
          <h2 className="font-display text-4xl md:text-5xl mt-6 leading-[1.05] text-balance">
            One bought.
            <br />
            One given.
            <br />
            <em className="italic font-light text-sky-deep">No exception.</em>
          </h2>
        </div>
        <div className="md:col-span-8 grid sm:grid-cols-3 gap-8 md:gap-10">
          {steps.map((s) => (
            <div key={s.n} className="border-t border-ink/20 pt-6">
              <div className="font-display text-3xl text-sky-deep mb-4">{s.n}</div>
              <h3 className="font-display text-xl mb-3 leading-snug">{s.title}</h3>
              <p className="text-sm text-ink-soft leading-relaxed">{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default Promise;