import { motion } from "framer-motion";
import heroImg from "@/assets/hero.jpg";
import Bow from "./Bow";

export const Hero = () => {
  return (
    <section id="top" className="relative pt-28 md:pt-32 pb-16 md:pb-24 overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-[55vh] bg-gradient-to-b from-sky-soft/60 to-transparent -z-10" />
      <div className="mx-auto max-w-7xl px-6 md:px-10 grid md:grid-cols-12 gap-10 md:gap-14 items-end">
        <div className="md:col-span-6 lg:col-span-5 pt-6 md:pt-16">
          <div className="flex items-center gap-3 text-[11px] uppercase tracking-[0.28em] text-ink-soft mb-8">
            <span className="h-px w-8 bg-ink/40" />
            <span>Spring chapter — 01</span>
          </div>
          <Bow size={88} className="mb-6" />
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="font-display text-5xl sm:text-6xl md:text-7xl leading-[0.95] text-ink text-balance"
          >
            Something
            <br />
            that <em className="italic font-light">belongs</em>
            <br />
            to you.
          </motion.h1>
          <p className="mt-8 max-w-md text-base md:text-lg text-ink-soft leading-relaxed">
            YOURS. is a UK fashion house built around one quiet promise. For every
            piece you buy, a second is made — and given to a young person leaving
            care, with their name sewn inside.
          </p>
          <div className="mt-10 flex items-center gap-6">
            <a
              href="#collection"
              className="inline-flex items-center gap-3 bg-ink text-cream px-7 py-4 text-[12px] uppercase tracking-[0.22em] hover:bg-sky-deep transition-colors"
            >
              Shop the chapter
            </a>
            <a
              href="#promise"
              className="text-[12px] uppercase tracking-[0.22em] text-ink border-b border-ink/40 pb-0.5 hover:border-ink"
            >
              Our promise
            </a>
          </div>
        </div>
        <div className="md:col-span-6 lg:col-span-7">
          <motion.div
            initial={{ opacity: 0, scale: 1.02 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.1, ease: "easeOut" }}
            className="relative aspect-[5/6] md:aspect-[4/5] overflow-hidden bg-cream-deep"
          >
            <img
              src={heroImg}
              alt="Folded sky blue garments tied with a pale ribbon bow on warm linen"
              className="absolute inset-0 w-full h-full object-cover"
              width={1600}
              height={1200}
            />
            <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between text-[11px] uppercase tracking-[0.22em] text-cream mix-blend-difference">
              <span>YOURS. ── No.01</span>
              <span>Made in two. Given as one.</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;