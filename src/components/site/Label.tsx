import labelImg from "@/assets/label.jpg";

export const Label = () => (
  <section id="label" className="py-24 md:py-36">
    <div className="mx-auto max-w-7xl px-6 md:px-10 grid md:grid-cols-12 gap-10 md:gap-16 items-center">
      <div className="md:col-span-6 order-2 md:order-1">
        <div className="text-[11px] uppercase tracking-[0.28em] text-ink-soft">04 — The Label</div>
        <h2 className="font-display text-4xl md:text-5xl mt-6 leading-[1.05] text-balance">
          A name, sewn inside.
        </h2>
        <p className="mt-6 text-ink-soft leading-relaxed max-w-lg">
          Every gifted garment carries the recipient's name on its inside label,
          embroidered in Foster Care blue. A small stamp set ships in the Stay
          Bag too — so they can rewrite it themselves, in their own hand.
          Because even that choice belongs to them.
        </p>
        <figure className="mt-10 border-l-2 border-sky pl-6 max-w-md">
          <blockquote className="font-display italic text-xl md:text-2xl leading-snug text-ink">
            “For the first time, my name was on something that was actually
            mine. Not borrowed. Not handed down.”
          </blockquote>
          <figcaption className="mt-4 text-[11px] uppercase tracking-[0.22em] text-ink-soft">
            Jade, 21 — Care Leavers' Association
          </figcaption>
        </figure>
      </div>
      <div className="md:col-span-6 order-1 md:order-2">
        <div className="relative aspect-[4/5] overflow-hidden bg-cream-deep">
          <img
            src={labelImg}
            alt="A handwritten name embroidered on a label inside a sky blue knit"
            loading="lazy"
            width={1200}
            height={1500}
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  </section>
);

export default Label;