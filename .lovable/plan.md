# YOURS. — Brand Website Plan

A single-page editorial site for **YOURS.**, the purpose-driven UK fashion brand built around care leavers. Buy-one-give-one model, Foster Care Awareness sky-blue palette, blue bow motif, slogan *"something that belongs to you."*

## Aesthetic direction

- **Editorial fashion**, not charity. Magazine-style typography, generous whitespace, slow scroll rhythm.
- **Palette**: tints of Foster Care sky blue (#A8C8E8 range) on warm off-white (#F8F6F1), deep navy for text, subtle blue ribbon accents.
- **Type pairing**: a refined serif display (e.g. Fraunces / Cormorant) for headlines + clean sans (Inter or Geist) for body. No generic Poppins.
- **Motif**: the blue bow appears as a recurring graphic element — header mark, section dividers, label seal.
- Subtle framer-motion fades and a hero ribbon animation. No purple-gradient AI look.

## Sections (single page, anchored nav)

1. **Hero** — Wordmark "YOURS." with bow above, slogan, primary CTA "Shop the collection" + secondary "Our promise". Soft sky-blue wash.
2. **The Promise** — Buy-one-give-one explainer in 3 steps (You buy → We make two → They receive theirs, named).
3. **Collection** — 6-piece elevated basics grid with placeholder editorial imagery, prices, "Add to bag" buttons (visual only).
4. **The Label** — Story of the personalised internal name label + stamp set. Quote from Jade, 21, care leaver.
5. **The Stay Bag** — Signature blue canvas gifting vehicle, with the handwritten thank-you note seal.
6. **Foster Care Awareness** — Stats block (£67.8B sector, 74% of 18–30s, 20,000 care leavers/year) + the bow's meaning.
7. **The Community** — Care leavers as creative partners, not subjects. Co-design ethos.
8. **Roadmap** — Year 1 / 2 / 3 (Launch → TikTok activation → Transparency Report).
9. **Newsletter / Footer** — Email signup, social links, brand statement.

## Technical

- React + Vite + Tailwind, shadcn components where useful (Button, Input, Card).
- Design tokens added to `index.css` and `tailwind.config.ts`: `--sky`, `--sky-soft`, `--ink`, `--cream`, `--ribbon`. All HSL.
- Custom serif + sans fonts via Google Fonts in `index.html`.
- Replace `src/pages/Index.tsx` with composed sections; create `src/components/site/*` for Hero, Promise, Collection, Label, StayBag, Stats, Community, Roadmap, Footer, Nav.
- Generate a small set of editorial images with imagegen (hero portrait/still life, garment shots, bow close-up, label close-up, stay bag).
- SEO: title, meta description, single H1, alt text, JSON-LD Brand schema.
- Responsive, accessible contrast, mobile nav.

## Out of scope (for v1)

- Real e-commerce/checkout, auth, CMS, backend. Cart buttons are visual placeholders.

Confirm and I'll build it.
