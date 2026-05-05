import { useState } from "react";
import { toast } from "sonner";
import Bow from "./Bow";

export const Footer = () => {
  const [email, setEmail] = useState("");
  return (
    <footer className="bg-ink text-cream pt-24 md:pt-32 pb-10">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="grid md:grid-cols-12 gap-10 md:gap-16 items-start">
          <div className="md:col-span-6">
            <Bow size={72} className="mb-6" />
            <h2 className="font-display text-4xl md:text-6xl leading-[1.02] text-balance">
              Wear something
              <br />
              <em className="italic font-light text-sky">that means something.</em>
            </h2>
            <p className="mt-6 text-cream/60 max-w-md">
              Quiet letters from the studio — new chapters, community work,
              the occasional Foster Care Fortnight reminder. No noise.
            </p>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                if (!email) return;
                toast.success("Welcome. We'll be in touch — quietly.");
                setEmail("");
              }}
              className="mt-8 flex max-w-md border-b border-cream/40 focus-within:border-cream"
            >
              <input
                type="email"
                required
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 bg-transparent py-3 text-sm placeholder:text-cream/40 focus:outline-none text-cream"
              />
              <button
                type="submit"
                className="text-[11px] uppercase tracking-[0.22em] text-cream hover:text-sky transition-colors"
              >
                Subscribe →
              </button>
            </form>
          </div>
          <div className="md:col-span-6 grid grid-cols-2 sm:grid-cols-3 gap-8 text-sm">
            <div>
              <div className="text-[11px] uppercase tracking-[0.22em] text-cream/50 mb-4">Shop</div>
              <ul className="space-y-2 text-cream/85">
                <li><a href="#collection">Chapter one</a></li>
                <li><a href="#">Stay Bag</a></li>
                <li><a href="#">Gift cards</a></li>
              </ul>
            </div>
            <div>
              <div className="text-[11px] uppercase tracking-[0.22em] text-cream/50 mb-4">House</div>
              <ul className="space-y-2 text-cream/85">
                <li><a href="#promise">The promise</a></li>
                <li><a href="#community">Community</a></li>
                <li><a href="#journal">Journal</a></li>
              </ul>
            </div>
            <div>
              <div className="text-[11px] uppercase tracking-[0.22em] text-cream/50 mb-4">Care</div>
              <ul className="space-y-2 text-cream/85">
                <li><a href="#">Contact</a></li>
                <li><a href="#">Returns</a></li>
                <li><a href="#">Transparency</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-20 pt-8 border-t border-cream/15 flex flex-col md:flex-row gap-4 items-start md:items-center justify-between text-[11px] uppercase tracking-[0.22em] text-cream/45">
          <span>© {new Date().getFullYear()} YOURS. — London</span>
          <span>Something that belongs to you.</span>
          <span>Instagram · TikTok · Substack</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;