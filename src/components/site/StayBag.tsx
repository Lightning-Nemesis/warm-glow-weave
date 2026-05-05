import bag from "@/assets/staybag.jpg";
import Bow from "./Bow";

export const StayBag = () => (
  <section className="py-24 md:py-36 bg-ink text-cream">
    <div className="mx-auto max-w-7xl px-6 md:px-10 grid md:grid-cols-12 gap-10 md:gap-16 items-center">
      <div className="md:col-span-7">
        <div className="relative aspect-[4/3] overflow-hidden">
          <img
            src={bag}
            alt="Sky blue canvas Stay Bag with a satin bow and handwritten thank-you note"
            loading="lazy"
            width={1400}
            height={1050}
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
      </div>
      <div className="md:col-span-5">
        <Bow size={64} className="mb-6 opacity-90" />
        <div className="text-[11px] uppercase tracking-[0.28em] text-cream/60">05 — The Stay Bag</div>
        <h2 className="font-display text-4xl md:text-5xl mt-5 leading-[1.05] text-balance">
          Not a package.<br />
          <em className="italic font-light text-sky">A welcome.</em>
        </h2>
        <p className="mt-6 text-cream/70 leading-relaxed max-w-md">
          The Stay Bag is the signature piece of every gift — a sturdy sky blue
          canvas tote, a folded note sealed with navy wax, the stamp set, and
          the garment itself. Built to be kept. Built to be carried.
        </p>
        <div className="mt-10 grid grid-cols-3 gap-6 border-t border-cream/20 pt-6 text-[11px] uppercase tracking-[0.22em] text-cream/70">
          <div>
            <div className="font-display text-3xl text-sky mb-1">100%</div>
            organic canvas
          </div>
          <div>
            <div className="font-display text-3xl text-sky mb-1">UK</div>
            sewn & shipped
          </div>
          <div>
            <div className="font-display text-3xl text-sky mb-1">∞</div>
            re-usable
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default StayBag;