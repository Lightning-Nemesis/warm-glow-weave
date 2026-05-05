import Nav from "@/components/site/Nav";
import Hero from "@/components/site/Hero";
import Marquee from "@/components/site/Marquee";
import Promise from "@/components/site/Promise";
import Collection from "@/components/site/Collection";
import Label from "@/components/site/Label";
import StayBag from "@/components/site/StayBag";
import Stats from "@/components/site/Stats";
import Community from "@/components/site/Community";
import Roadmap from "@/components/site/Roadmap";
import Footer from "@/components/site/Footer";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Brand",
  name: "YOURS.",
  slogan: "Something that belongs to you.",
  description:
    "A UK fashion brand built around care leavers. For every garment sold, an identical one is given to a young person leaving the UK care system, personalised with their name.",
  url: "/",
};

const Index = () => (
  <div className="min-h-screen bg-background text-foreground">
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    <Nav />
    <main>
      <Hero />
      <Marquee />
      <Promise />
      <Collection />
      <Label />
      <StayBag />
      <Stats />
      <Community />
      <Roadmap />
    </main>
    <Footer />
  </div>
);

export default Index;
