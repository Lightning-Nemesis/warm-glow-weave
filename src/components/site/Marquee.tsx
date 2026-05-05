export const Marquee = () => (
  <div className="border-y border-ink/15 bg-cream py-5 overflow-hidden">
    <div className="flex gap-12 whitespace-nowrap animate-[marquee_38s_linear_infinite] text-[12px] uppercase tracking-[0.32em] text-ink/70">
      {Array.from({ length: 6 }).map((_, i) => (
        <span key={i} className="flex items-center gap-12">
          Buy one, give one
          <span className="text-sky-deep">✦</span>
          For every garment, a name is sewn
          <span className="text-sky-deep">✦</span>
          Foster care, designed for
          <span className="text-sky-deep">✦</span>
        </span>
      ))}
    </div>
    <style>{`@keyframes marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }`}</style>
  </div>
);

export default Marquee;