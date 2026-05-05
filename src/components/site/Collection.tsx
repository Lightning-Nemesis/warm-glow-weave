import tee from "@/assets/garment-tee.jpg";
import knit from "@/assets/garment-knit.jpg";
import trouser from "@/assets/garment-trouser.jpg";
import shirt from "@/assets/garment-shirt.jpg";
import hoodie from "@/assets/garment-hoodie.jpg";
import scarf from "@/assets/garment-scarf.jpg";

const items = [
  { img: tee, name: "The Everyday Tee", price: "£48", colour: "Sky" },
  { img: knit, name: "The Sunday Knit", price: "£165", colour: "Sky" },
  { img: trouser, name: "The Soft Trouser", price: "£120", colour: "Ecru" },
  { img: shirt, name: "The Honest Shirt", price: "£95", colour: "Cream" },
  { img: hoodie, name: "The Quiet Hoodie", price: "£110", colour: "Sky" },
  { img: scarf, name: "The Long Scarf", price: "£85", colour: "Mist" },
];

export const Collection = () => (
  <section id="collection" className="py-24 md:py-32 bg-cream-deep">
    <div className="mx-auto max-w-7xl px-6 md:px-10">
      <div className="flex items-end justify-between mb-12 md:mb-16">
        <div>
          <div className="text-[11px] uppercase tracking-[0.28em] text-ink-soft">03 — Chapter one</div>
          <h2 className="font-display text-4xl md:text-6xl mt-5 leading-[0.98] text-balance">
            Six pieces.<br /> <em className="italic font-light">Made in pairs.</em>
          </h2>
        </div>
        <a href="#" className="hidden md:block text-[12px] uppercase tracking-[0.22em] border-b border-ink/40 pb-0.5">
          The full chapter
        </a>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
        {items.map((p, i) => (
          <article key={p.name} className="group">
            <div className="relative aspect-[4/5] overflow-hidden bg-cream">
              <img
                src={p.img}
                alt={p.name}
                loading="lazy"
                width={1000}
                height={1200}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
              />
              <span className="absolute top-3 left-3 text-[10px] uppercase tracking-[0.22em] bg-cream/90 text-ink px-2 py-1">
                {String(i + 1).padStart(2, "0")} / 06
              </span>
            </div>
            <div className="flex items-baseline justify-between mt-4">
              <div>
                <h3 className="font-display text-lg leading-tight">{p.name}</h3>
                <p className="text-[11px] uppercase tracking-[0.22em] text-ink-soft mt-1">
                  {p.colour} · Made in pairs
                </p>
              </div>
              <div className="font-display text-lg">{p.price}</div>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default Collection;