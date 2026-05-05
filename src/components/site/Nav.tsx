import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { href: "#promise", label: "The Promise" },
  { href: "#collection", label: "Collection" },
  { href: "#label", label: "The Label" },
  { href: "#community", label: "Community" },
  { href: "#journal", label: "Journal" },
];

export const Nav = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-cream/85 backdrop-blur border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 md:px-10 h-16 flex items-center justify-between">
        <a href="#top" className="font-display text-xl tracking-tight text-ink">
          YOURS<span className="text-sky-deep">.</span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-[13px] uppercase tracking-[0.18em] text-ink-soft">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="hover:text-ink transition-colors">
              {l.label}
            </a>
          ))}
        </nav>
        <a
          href="#collection"
          className="hidden md:inline-block text-[13px] uppercase tracking-[0.18em] border-b border-ink pb-0.5 text-ink hover:text-sky-deep hover:border-sky-deep transition-colors"
        >
          Shop
        </a>
        <button
          aria-label="Toggle menu"
          className="md:hidden text-ink"
          onClick={() => setOpen((s) => !s)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
      {open && (
        <div className="md:hidden bg-cream border-t border-border">
          <div className="px-6 py-6 flex flex-col gap-4 text-sm uppercase tracking-[0.18em] text-ink-soft">
            {links.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)}>
                {l.label}
              </a>
            ))}
            <a href="#collection" onClick={() => setOpen(false)} className="text-ink">
              Shop
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Nav;